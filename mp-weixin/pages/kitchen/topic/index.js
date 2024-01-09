'use strict'; const e = require('../../../common/vendor.js'); const r = require('../../../common/assets.js'); const n = require('../../../hooks/usePage/index.js'); const i = require('../../../api/config/home.js'); if (require('../../../utils/request/index.js'), require('../../../utils/request/constants.js'), require('../../../store/setup.js'), require('../../../store/user/index.js'), require('../../../store/loading/index.js'), require('../../../store/login/index.js'), require('../../../utils/login/index.js'), require('../../../utils/common/storage.js'), require('../../../api/config/login.js'), require('../../../api/config/integral.js'), !Array)
  (e.resolveComponent('shu-nav-bar') + e.resolveComponent('shu-img-loading') + e.resolveComponent('shu-mall-card') + e.resolveComponent('shu-tab-bar') + e.resolveComponent('shu-loading'))()

Math || ((() => '../../../components/common/nav-bar/index.js') + (() => '../../../components/common/img-loading/index.js') + (() => '../../../components/common/mall-card/index.js') + (() => '../../../components/common/tab-bar/index.js') + (() => '../../../components/common/loading/index.js'))(); const o = {
  __name: 'index',
  setup(o) {
    const t = e.reactive({ value: 1, title: '话题详情', listArr: [] }); const s = e.reactive({ urlList: [], indicatorDots: !0, autoplay: !0, interval: 2e3, duration: 500 }); const a = e.ref(''); e.ref(0), e.toRefs(s); const { getMorePage: l, list: u } = n.usePage(c, { size: 20 }); async function c(e, r, n, o) {
      if (o) {
        try { return { list: await i.GetMypage({ page: e, index: r, size: n, talkId: o }) } }
        catch (t) {}
      }
    } return l(), e.onReachBottom(l), e.watch(u, (e, r) => {}), e.onMounted((async () => {
      let r, n, o; const { params: l } = await e.T(); const u = await (async function (e) {
        try { return { list: await i.GetUrlMysearch(e) } }
        catch (r) {}
      }(l.id)); s.urlList = u == null ? void 0 : u.list.data, a.value = (n = (r = s.urlList) == null ? void 0 : r.huatitupian) == null ? void 0 : n[0]; const d = await c(1, 3, 20, l.id); t.listArr = (o = d == null ? void 0 : d.list) == null ? void 0 : o.records
    })), e.onLoad((() => { e.index.showShareMenu() })), (n, i) => { let o, s, l; return e.e({ a: e.p({ title: e.unref(t).title }), b: e.p({ 'mode': 'aspectFill', 'src': e.unref(a), 'lazy-load': !1 }), c: (o = e.unref(t)) == null ? void 0 : o.listArr }, ((s = e.unref(t)) == null ? void 0 : s.listArr) ? { d: r._imports_0$2 } : { e: e.p({ datalist: (l = e.unref(t)) == null ? void 0 : l.listArr }) }, { f: e.p({ value: e.unref(t).value }) }) }
  },
}; const t = e._export_sfc(o, [['__scopeId', 'data-v-8a95888e']]); wx.createPage(t)
