'use strict'; const e = require('../../../common/vendor.js'); const i = require('../../../api/config/address.js'); const o = require('../../../router/index.js'); if (require('../../../utils/request/index.js'), require('../../../utils/request/constants.js'), require('../../../store/setup.js'), require('../../../store/user/index.js'), require('../../../store/loading/index.js'), require('../../../store/login/index.js'), require('../../../utils/login/index.js'), require('../../../utils/common/storage.js'), require('../../../api/config/login.js'), require('../../../api/config/integral.js'), !Array)
  (e.resolveComponent('shu-nav-bar') + e.resolveComponent('u-icon') + e.resolveComponent('viwe') + e.resolveComponent('shu-loading'))()

Math || ((() => '../../../components/common/nav-bar/index.js') + (() => '../../../node-modules/uview-plus/components/u-icon/u-icon.js') + (() => '../../../components/common/loading/index.js'))(); const n = { __name: 'index', setup(n) { const s = e.reactive({ title: '我的地址', list: [], id: '' }); function r(e) { return e.province + e.city + e.country + e.detail_info + e.house_info } return e.onLoad(((e) => { (e == null ? void 0 : e.id) && (s.id = e == null ? void 0 : e.id) })), e.onShow((() => { e.index.pageScrollTo({ scrollTop: 0 }), (async function () { const e = await i.getAddressList({}); s.list = e == null ? void 0 : e.list }()) })), (i, n) => ({ a: e.p({ title: e.unref(s).title }), b: e.f(e.unref(s).list, (i, n, t) => ({ a: e.t(i.name), b: e.t(i.tel), c: e.t(r(i)), d: n, e: e.o(n => (function (i) { e.index.$emit('select_adress', JSON.stringify({ select_adress: i, id: s.id })), o.router.back() }(i)), n) })), c: e.p({ name: 'plus-circle', color: '#767e92', size: '20' }), d: e.o(((e) => { o.router.push({ path: '/pages/shopping/addAdress/index', query: { type: 'setup' } }) })) }) } }; const s = e._export_sfc(n, [['__scopeId', 'data-v-5b9649da']]); wx.createPage(s)
