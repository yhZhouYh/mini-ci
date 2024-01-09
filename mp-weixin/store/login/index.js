'use strict'; const e = require('../../common/vendor.js')

const o = e.defineStore('login', () => { const o = e.reactive({ wx407f3d9c56385e36: 'wx407f3d9c56385e36', loginPromise: { value: Promise.resolve() }, info: { auth_token: '', ticket: '', open_id: '', user_id: '', user_info: {}, login: !1 } }); return { ...e.toRefs(o) } }, { persist: { enabled: !0 } }); exports.useLoginStore = o
