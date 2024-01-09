'use strict'; const e = require('../../common/vendor.js'); const o = require('./constants.js'); const t = require('../../store/setup.js'); require('../../store/user/index.js'); const n = require('../../store/loading/index.js'); const s = require('../../store/login/index.js'); const r = require('../login/index.js')

const { addLoadingCounter: i, subLoadingCounter: u } = n.useLoadingStore(t.pinia())

let a = null; const c = new e.Request(); function d(o) { return new Promise(((t) => { e.index.showToast({ icon: 'none', title: o, complete: t }) })) }c.setConfig((e => (e.baseURL = 'https://kraft-dev.shuinfo.com', e.timeout = 6e4, e.header = { 'Content-Type': 'application/json', 'application': 680001, 'tenant': 1150004 }, e))), c.interceptors.request.use(async (e) => { let o; i(), e.method === 'GET' && (e.params = e.data); const { loginPromise: n, info: r } = s.useLoginStore(t.pinia()); return ((o = e == null ? void 0 : e.custom) == null ? void 0 : o.noAuth) || n && n.value && await n.value, r.auth_token && (e.header && (e.header['X-Token'] = `${r.auth_token}`), e.header && (e.header.openId = `${r.open_id}`)), e }, e => (u(), Promise.reject(e))), c.interceptors.response.use((e) => { u(); const { code: o, data: t, msg: n, message: s } = (e == null ? void 0 : e.data) || {}; return (t == null ? void 0 : t.code) === 401 && r.onLogoutLogin(), o === 0 || o === 200 || (t == null ? void 0 : t.code) === 200 || (t == null ? void 0 : t.code) === 0 ? t : (d(n || s), Promise.reject(e)) }, (e) => {
  let t; u(); const { statusCode: n, config: s = { custom: {} } } = e || {}; return o.HTTP_STATUS_CODE.UNAUTHORIZED !== n || ((t = s.custom) == null ? void 0 : t.isGetToken)
    ? (d('网络拥挤，请稍后重试'), Promise.reject(e))
    : (s.custom && (s.custom.isGetToken = !0), (async function (e) {
        try { !a && (a = r.appLogin()); const o = await a; return o && r.setUserInfo(o), c.request(e) }
        catch (o) { throw o }
        finally { a = null }
      }(s)).then((e => Promise.resolve(e))).catch((e => Promise.reject(e))))
}), exports.http = c
