'use strict'; const e = require('../../../common/vendor.js'); const n = require('../../../common/assets.js')

const s = {}; const t = { __name: 'index', setup(s) { e.ref('320'), e.ref('450'); const t = e.ref(); const o = e.w(); function r() { o.push({ path: 'pages/user/contactus/index' }) } return e.onMounted((async () => { e.index.getSystemInfo({ success(e) { t.value = e.windowWidth } }) })), (s, o) => ({ a: n._imports_0$6, b: e.unref(t), c: e.o(r) }) } }

typeof s == 'function' && s(t); const o = e._export_sfc(t, [['__scopeId', 'data-v-11326573']]); wx.createComponent(o)
