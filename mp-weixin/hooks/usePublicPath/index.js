'use strict'; const e = require('../../api/config/upload.js'); require('../../store/user/index.js'), require('../../store/loading/index.js'); const t = require('../../store/login/index.js'); const o = require('../../store/setup.js'); const i = require('../../common/vendor.js')

const { info: r } = t.useLoginStore(o.pinia()); const n = i.ref('')

let s = null; exports.getPublicPath = function (e) { return { $publicPath: n } }, exports.initPublicPath = function (t) {
  const o = i.watch(() => r.auth_token, async (i) => {
    let r; try { if (!n.value && i && !s) { s = e.getOSSToken(); const t = await s; n.value = t[t.select_cloud].cdnHost + ((r = t[t.select_cloud]) == null ? void 0 : r.container_name) } }
    catch (u) { console.error(u) }t && (t.config.globalProperties.$publicPath = n, n.value && o())
  }, { immediate: !0 })
}
