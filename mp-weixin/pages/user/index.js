'use strict'; const e = require('../../common/vendor.js'); const n = require('../../store/user/index.js'); require('../../store/loading/index.js'); const o = require('../../store/login/index.js'); const r = require('../../utils/login/index.js'); if (require('../../utils/common/storage.js'), require('../../api/config/login.js'), require('../../utils/request/index.js'), require('../../utils/request/constants.js'), require('../../store/setup.js'), require('../../api/config/integral.js'), !Array)
  (e.resolveComponent('shu-tab-bar') + e.resolveComponent('shu-loading'))()

Math || (s + i + t + (() => '../../components/common/tab-bar/index.js') + (() => '../../components/common/loading/index.js'))(); const s = () => './components/user-nav/index.js'; const i = () => './components/user-card/index.js'; const t = () => './components/user-common/index.js'; const u = { __name: 'index', setup(s) { const i = e.reactive({ value: 4 }); const { members: t } = n.useUserStore(); const { info: u } = o.useLoginStore(); return e.onShow((() => { u.login && (async function () { const e = await r.getMerbersInfo(); t.current = e }()) })), e.onLoad((() => { e.index.showShareMenu() })), (n, o) => e.e({ a: !!e.unref(u).login }, (e.unref(u).login, {}), { b: e.p({ value: e.unref(i).value }) }) } }; const a = e._export_sfc(u, [['__scopeId', 'data-v-beee9b90']]); wx.createPage(a)