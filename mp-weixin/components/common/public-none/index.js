'use strict'; const e = require('../../../common/vendor.js'); const t = require('../../../common/assets.js')

const n = { __name: 'index', props: { content: { type: String, default: '' }, condition: { type: [String, Boolean], default: !0 }, marginTop: { type: Number, default: '' } }, setup(n) { const o = n; return (n, r) => e.e({ a: o.conditions }, o.conditions ? { b: t._imports_0$2, c: e.t(o.content), d: `${o.marginTop}rpx` } : {}) } }; const o = e._export_sfc(n, [['__scopeId', 'data-v-839de953']])

wx.createComponent(o)
