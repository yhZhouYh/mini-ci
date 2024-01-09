'use strict'; const e = require('../../../common/vendor.js'); const o = require('../../../common/assets.js'); const r = require('../../../utils/login/index.js'); const n = require('../../../store/login/index.js'); const s = require('../../../router/index.js'); if (require('../../../store/user/index.js'), require('../../../store/loading/index.js'), require('../../../utils/common/storage.js'), require('../../../api/config/login.js'), require('../../../utils/request/index.js'), require('../../../utils/request/constants.js'), require('../../../store/setup.js'), require('../../../api/config/integral.js'), !Array)
  (e.resolveComponent('u-checkbox') + e.resolveComponent('u-checkbox-group') + e.resolveComponent('u-button'))()

Math || ((() => '../../../node-modules/uview-plus/components/u-checkbox/u-checkbox.js') + (() => '../../../node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js') + (() => '../../../node-modules/uview-plus/components/u-button/u-button.js'))(); const t = {
  __name: 'index',
  emits: 'loginSuccess',
  setup(t, { expose: u, emit: i }) {
    const c = n.useLoginStore(); const { login: p } = e.storeToRefs(c); const h = e.reactive({ checked: [], isShow: !1, login: p, disabled: !0 }); function d() { h.checked = !h.checked } async function l(e) {
      if (!h.checked.length)
        return !1; await r.getPhoneNumber(e) === 'success' && a(), i('loginSuccess')
    } function a() { h.isShow = !h.isShow, h.isShow || (h.checked = !1) } return u({ show: a }), (r, n) => e.e({ a: e.unref(h).isShow }, e.unref(h).isShow ? e.e({ b: o._imports_0$3, c: e.o((e => a())), d: e.p({ 'custom-style': { marginBottom: '8px' }, 'name': !0, 'label-size': '28rpx', 'label-color': '#656565' }), e: e.o(d), f: e.o((o => e.unref(h).checked = o)), g: e.p({ modelValue: e.unref(h).checked }), h: e.o(((e) => { s.router.push({ path: '/pages/user/user-privacy/index' }) })), i: e.o(((e) => { s.router.push({ path: '/pages/user/clauses/index' }) })), j: !e.unref(h).checked.length }, e.unref(h).checked.length ? {} : { k: e.p({ 'type': 'primary', 'custom-style': { borderRadius: '56rpx', width: '686rpx', marginTop: '126rpx', backgroundColor: '#A6192E', border: 'none', height: '96rpx', fontSize: '32rpx', fontWeight: 600, opacity: e.unref(h).checked.length ? '1' : '.6' } }) }, { l: !!e.unref(h).checked.length }, e.unref(h).checked.length ? { m: e.o(l), n: e.p({ 'type': 'primary', 'open-type': 'getPhoneNumber', 'custom-style': { borderRadius: '56rpx', width: '686rpx', marginTop: '126rpx', backgroundColor: '#A6192E', border: 'none', height: '96rpx', fontSize: '32rpx', fontWeight: 600, opacity: e.unref(h).checked.length ? '1' : '.6' } }) } : {}) : {})
  },
}; const u = e._export_sfc(t, [['__scopeId', 'data-v-daf75903']]); wx.createComponent(u)
