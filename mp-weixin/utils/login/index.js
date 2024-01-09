'use strict'; const e = require('../../common/vendor.js'); const n = require('../../store/user/index.js'); require('../../store/loading/index.js'); const t = require('../../store/login/index.js'); const i = require('../common/storage.js'); const o = require('../../api/config/login.js'); const r = require('../../api/config/integral.js'); const u = require('../../store/setup.js')

const { info: a, wx407f3d9c56385e36: s } = t.useLoginStore(u.pinia()); const { members: c } = n.useUserStore(u.pinia())

function d() { return new Promise(((n, t) => { e.index.login({ success: async (e) => { o.userLogin({ app_id: s, js_code: e.code }).then(((e) => { n(e) })) }, fail(e) { t() } }) })) } function l(e) { a.auth_token = e.auth_token, a.ticket = e.ticket, a.open_id = e.open_id, a.user_id = e.user_id, a.user_info = e.user_info } function p() { return new Promise(((e, n) => { o.userCurrent().then((n) => { let t; a.login = !!((t = n == null ? void 0 : n.user_info) == null ? void 0 : t.mobile), e() }, (e) => { n(e) }) })) } function g() { return new Promise(((e, n) => { r.getMembersCurrent().then((n) => { c.current = n, e(n) }, (e) => { n(e) }) })) }e.index.getLaunchOptionsSync(), exports.appLogin = d, exports.getMerbersInfo = g, exports.getPhoneNumber = async function (n) {
  return new Promise((async (t, r) => {
    let u, c, v, _, f, h; const m = await d(); try {
      if (l(m), !(((u = n == null ? void 0 : n.detail) == null ? void 0 : u.code) || ((c = n == null ? void 0 : n.detail) == null ? void 0 : c.encryptedData) || ((v = n == null ? void 0 : n.detail) == null ? void 0 : v.encryptData)))
        return e.index.showToast({ title: '手机号获取失败，请尝试更新微信版本后重试', icon: 'none', duration: 2500 }), Promise.reject(); { let e = 0; try { e = await i.Storage.getStorage('accountId') }
      catch (w) {} try { m.ticket ? await o.updateMobile({ account_id: 0, encrypt_data: ((_ = n == null ? void 0 : n.detail) == null ? void 0 : _.encryptedData) || ((f = n == null ? void 0 : n.detail) == null ? void 0 : f.encryptData), iv: (h = n == null ? void 0 : n.detail) == null ? void 0 : h.iv, app_id: s, ticket: (a == null ? void 0 : a.ticket) || '', openId: a.open_id }).then((async (e) => { a.auth_token = e.auth_token, await p(), await g(), t('success') })) : (await p(), await g(), t('success')) }
      catch (w) { r(w) } }
    }
    catch (y) { r(y) }
  }))
}, exports.onLogoutLogin = function () { a.login = !1, a.auth_token = '', a.user_info = {}, c.current = {} }, exports.setUserInfo = l
