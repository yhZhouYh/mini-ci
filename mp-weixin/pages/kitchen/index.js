'use strict'; const e = require('../../common/vendor.js'); const o = require('../../common/assets.js'); const r = require('../../hooks/usePage/index.js'); const t = require('../../api/config/home.js'); const n = require('../../utils/common/goskip.js'); if (require('../../utils/request/index.js'), require('../../utils/request/constants.js'), require('../../store/setup.js'), require('../../store/user/index.js'), require('../../store/loading/index.js'), require('../../store/login/index.js'), require('../../utils/login/index.js'), require('../../utils/common/storage.js'), require('../../api/config/login.js'), require('../../api/config/integral.js'), require('../../router/index.js'), !Array)
  (e.resolveComponent('shu-img-loading') + e.resolveComponent('shu-mall-card') + e.resolveComponent('shu-tab-bar') + e.resolveComponent('shu-loading'))()

Math || ((() => '../../components/common/img-loading/index.js') + (() => '../../components/common/mall-card/index.js') + (() => '../../components/common/tab-bar/index.js') + (() => '../../components/common/loading/index.js'))(); const i = {
  __name: 'index',
  setup(i) {
    const s = e.reactive({ value: 1, title: ' 灵感厨房', urlList: [], urlXiaoList: [] }); const a = e.reactive({ indicatorDots: !0, autoplay: !0, interval: 2e3, duration: 500 }); const { indicatorDots: u, autoplay: l, interval: c, duration: d } = e.toRefs(a); const { getMorePage: m, list: p } = r.usePage(async (e, o) => {
      try { const { records: r, total: n } = await t.GetMypage({ page: e, index: '2', size: o }); return { list: r, total: n } }
      catch (r) { console.error(r) }
    }, { size: 20 }); return m(), e.onReachBottom(m), e.watch(p, (e, o) => {}), e.onMounted((async () => {
      const e = await (async function (e) {
        try { return { list: await t.GetLgcfbanner(e) } }
        catch (o) { console.error(o) }
      }({ model_key: '' })); a.urlList = e.list.data; const o = await (async function (e) {
        try { return { list: await t.GetLgjyz(e) } }
        catch (o) {}
      }({ model_key: '' })); a.urlXiaoList = o.list.data
    })), e.onLoad((() => { e.index.showShareMenu() })), (r, t) => { let i, m; return e.e({ a: (i = e.unref(a)) == null ? void 0 : i.urlList }, ((m = e.unref(a)) == null ? void 0 : m.urlList) ? { b: e.f(e.unref(a).urlList, (o, r, t) => ({ a: `a0f55367-0-${t}`, b: e.p({ src: `${o == null ? void 0 : o.yywtp[0]}` }), c: r, d: e.o((e) => { return r = o == null ? void 0 : o.tzlj, void n.goskip(r); let r }, r) })), c: e.unref(u), d: e.unref(l), e: e.unref(c), f: e.unref(d) } : {}, { g: o._imports_0$1, h: o._imports_1$1, i: e.f(e.unref(a).urlXiaoList, (o, r, t) => ({ a: `a0f55367-2-${t}`, b: e.p({ 'src': o == null ? void 0 : o.yywtp[0], 'mode': 'widthFix', 'lazy-load': !1 }), c: e.t(o == null ? void 0 : o.yywbt), d: r, e: e.o((e) => { return r = o == null ? void 0 : o.tzlj, void n.goskip(r); let r }, r) })), j: o._imports_2, k: e.unref(p) }, e.unref(p) ? { l: e.p({ datalist: e.unref(p) }) } : {}, { m: e.p({ value: e.unref(s).value }) }) }
  },
}; const s = e._export_sfc(i, [['__scopeId', 'data-v-a0f55367']]); wx.createPage(s)
