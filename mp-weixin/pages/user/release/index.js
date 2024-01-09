'use strict'; const e = require('../../../common/vendor.js'); const n = require('../../../api/config/user.js'); const t = require('../../../hooks/usePage/index.js'); if (require('../../../utils/request/index.js'), require('../../../utils/request/constants.js'), require('../../../store/setup.js'), require('../../../store/user/index.js'), require('../../../store/loading/index.js'), require('../../../store/login/index.js'), require('../../../utils/login/index.js'), require('../../../utils/common/storage.js'), require('../../../api/config/login.js'), require('../../../api/config/integral.js'), !Array)
  (e.resolveComponent('shu-nav-bar') + e.resolveComponent('shu-public-none') + e.resolveComponent('shu-mall-card') + e.resolveComponent('shu-loading'))()

Math || ((() => '../../../components/common/nav-bar/index.js') + (() => '../../../components/common/public-none/index.js') + (() => '../../../components/common/mall-card/index.js') + (() => '../../../components/common/loading/index.js'))(); const s = {
  __name: 'index',
  setup(s) {
    const o = e.reactive({ title: '我的发布', status: 1, content: '暂无数据' }); const { getMorePage: r, list: i, resetPage: u } = t.usePage(async (e, t) => {
      try { const { records: s, total: r } = await n.releaseMy({ state: o.status, page: e, size: t }); return { list: s, total: r } }
      catch (s) { console.error(s) }
    }, { size: 20 }); function a(e) { o.status = e, u(), r() } return r(), e.onReachBottom(r), e.onLoad((() => { e.index.showShareMenu() })), (n, t) => { let s, r; return e.e({ a: e.p({ title: e.unref(o).title }), b: e.n({ active: e.unref(o).status == 1 }), c: e.o((e => a(1))), d: e.n({ active: e.unref(o).status == 0 }), e: e.o((e => a(0))), f: e.n({ active: e.unref(o).status == 2 }), g: e.o((e => a(2))), h: e.unref(o).status == 1 ? '0' : `${e.unref(o).status == 2 ? '488' : '252'}rpx`, i: e.p({ content: (s = e.unref(o)) == null ? void 0 : s.content, conditions: !((r = e.unref(i)) == null ? void 0 : r.length) }), j: e.unref(i) }, e.unref(i) ? { k: e.p({ datalist: e.unref(i) }) } : {}) }
  },
}; wx.createPage(s)
