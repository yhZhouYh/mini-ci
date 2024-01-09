'use strict'; const e = require('../../common/vendor.js'); const o = require('../../common/assets.js'); const n = require('../../hooks/usePage/index.js'); const t = require('../../api/config/home.js'); const i = require('../../utils/common/goskip.js'); if (require('../../utils/request/index.js'), require('../../utils/request/constants.js'), require('../../store/setup.js'), require('../../store/user/index.js'), require('../../store/loading/index.js'), require('../../store/login/index.js'), require('../../utils/login/index.js'), require('../../utils/common/storage.js'), require('../../api/config/login.js'), require('../../api/config/integral.js'), require('../../router/index.js'), !Array)
  (e.resolveComponent('shu-img-loading') + e.resolveComponent('shu-login-modal') + e.resolveComponent('shu-little-helper') + e.resolveComponent('shu-mall-card') + e.resolveComponent('shu-tab-bar') + e.resolveComponent('shu-loading'))()

Math || ((() => '../../components/common/img-loading/index.js') + (() => '../../components/common/login-modal/index.js') + (() => '../../components/common/little-helper/index.js') + (() => '../../components/common/mall-card/index.js') + (() => '../../components/common/tab-bar/index.js') + (() => '../../components/common/loading/index.js'))(); const r = {
  __name: 'index',
  setup(r) {
    const a = e.reactive({ value: 0 }); const s = e.reactive({ indicatorDots: !1, autoplay: !0, interval: 2e3, duration: 500, urlList: [], urlXiaoList: [] }); const { indicatorDots: l, autoplay: u, interval: c, duration: d } = e.toRefs(s); const { getMorePage: p, list: m } = n.usePage(async (e, o) => {
      try { const { records: n, total: i } = await t.GetMypage({ page: e, index: '1', size: o }); return { list: n, total: i } }
      catch (n) { console.error(n) }
    }, { size: 20 }); return p(), e.onReachBottom(p), e.watch(m, (e, o) => {}), e.onMounted((async () => {
      const e = await (async function (e) {
        try { return { list: await t.GetShouyebanner(e) } }
        catch (o) { console.error(o) }
      }({ model_key: '' })); s.urlList = e.list.data; const o = await (async function (e) {
        try { return { list: await t.GetShouyexiaobanner(e) } }
        catch (o) {}
      }({ model_key: '' })); s.urlXiaoList = o.list.data
    })), e.onLoad((() => { e.index.showShareMenu() })), (n, t) => { let r, p, g, v, h, j, f, b; return e.e({ a: e.unref(s).urlList[0] }, e.unref(s).urlList[0] ? { b: e.f(e.unref(s).urlList, (o, n, t) => ({ a: `92d4fb53-0-${t}`, b: e.p({ src: `${o.yywtp[0]}`, mode: 'aspectFill' }), c: n, d: e.o((e) => { return n = o.tzlj, void i.goskip(n); let n }, n) })), c: e.unref(l), d: e.unref(u), e: e.unref(c), f: e.unref(d) } : { g: e.p({ src: '' }) }, { h: e.sr('loginModal', '92d4fb53-2'), i: o._imports_0, j: e.f(e.unref(s).urlXiaoList, (o, n, t) => ({ a: `92d4fb53-3-${t}`, b: e.p({ 'src': o.yywtp[0], 'mode': 'aspectFit', 'lazy-load': !1 }), c: e.t(o.yywbt), d: n, e: e.o((e) => { return n = o.tzlj, void i.goskip(n); let n }, n) })), k: o._imports_1, l: e.unref(m) }, e.unref(m) ? { m: e.p({ datalist: e.unref(m) }) } : {}, { n: e.p({ value: e.unref(a).value }), o: ((r = n.$publicPath) == null ? void 0 : r.value) == null ? '' : `${(p = n.$publicPath) == null ? void 0 : p.value}/andding_page/Dihenns.jpg`, p: ((g = n.$publicPath) == null ? void 0 : g.value) == null ? '' : `${(v = n.$publicPath) == null ? void 0 : v.value}/andding_page/snapshot.jpg`, q: ((h = n.$publicPath) == null ? void 0 : h.value) == null ? '' : `${(j = n.$publicPath) == null ? void 0 : j.value}/andding_page/taster.jpg`, r: ((f = n.$publicPath) == null ? void 0 : f.value) == null ? '' : `${(b = n.$publicPath) == null ? void 0 : b.value}/andding_page/dip.jpg` }) }
  },
}; const a = e._export_sfc(r, [['__scopeId', 'data-v-92d4fb53']]); wx.createPage(a)
