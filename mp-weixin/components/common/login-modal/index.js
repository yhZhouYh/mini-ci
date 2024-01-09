'use strict'; const e = require('../../../common/vendor.js'); const o = require('../../../store/login/index.js')

if (!Array) { e.resolveComponent('shu-login-privacy')() }Math; const n = { __name: 'index', props: { top: { type: Number, default: 200 } }, setup(n) { const { info: r } = o.useLoginStore(); const s = e.ref(null); return (o, n) => e.e({ a: !e.unref(r).login }, e.unref(r).login ? {} : { b: e.o(((e) => { s.value.show() })) }, { c: e.sr(s, 'eb01da4c-0', { k: 'mask' }) }) } }; const r = e._export_sfc(n, [['__scopeId', 'data-v-eb01da4c']]); wx.createComponent(r)
