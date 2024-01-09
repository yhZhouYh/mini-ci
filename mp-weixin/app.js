'use strict'; Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }); const e = require('./common/vendor.js'); const i = require('./router/index.js'); const r = require('./utils/login/index.js'); require('./store/user/index.js'), require('./store/loading/index.js'); const n = require('./store/login/index.js'); const o = require('./hooks/usePublicPath/index.js'); const u = require('./store/setup.js'); require('./utils/common/storage.js'), require('./api/config/login.js'), require('./utils/request/index.js'), require('./utils/request/constants.js'), require('./api/config/integral.js'), require('./api/config/upload.js'), Math

const s = {
  __name: 'App',
  setup(i) {
    const { info: o, loginPromise: u } = n.useLoginStore(); return e.onLaunch((() => {
      !(async function () {
        try { u.value = r.appLogin(); const e = await u.value; o.auth_token = e == null ? void 0 : e.auth_token, o.open_id = e == null ? void 0 : e.open_id, o.user_id = e == null ? void 0 : e.user_id }
        catch (e) { console.error(e) }
      }())
    })), () => {}
  },
}; function t() { const r = e.createSSRApp(s); return r.use(u.pinia()), r.use(e.uviewPlus), r.use(i.router), o.initPublicPath(r), { app: r, pinia: u.pinia() } }t().app.mount('#app'), exports.createApp = t
