'use strict'; const e = require('../../common/vendor.js')

const r = e.defineStore('user', () => { const r = e.reactive({ systemInfo: {}, members: { current: {} } }); return { ...e.toRefs(r) } }, { persist: { enabled: !0 } }); exports.useUserStore = r
