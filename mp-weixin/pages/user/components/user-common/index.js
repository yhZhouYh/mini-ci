'use strict'; const e = require('../../../../common/vendor.js'); const r = require('../../../../common/assets.js'); const o = require('../../../../router/index.js'); require('../../../../store/user/index.js'), require('../../../../store/loading/index.js'); const s = require('../../../../store/login/index.js')

const t = { __name: 'index', setup(t) { const { info: n } = s.useLoginStore(); function i(e) { o.router.push({ path: e }) } return (o, s) => ({ a: r._imports_0$11, b: r._imports_1$5, c: e.o((e => i('/pages/user/contactus/index'))), d: r._imports_2$3, e: r._imports_1$5, f: e.o((e => i('/pages/user/about/index'))), g: e.unref(n).login ? '0rpx' : '48rpx' }) } }; const n = e._export_sfc(t, [['__scopeId', 'data-v-f5ff42fd']])

wx.createComponent(n)
