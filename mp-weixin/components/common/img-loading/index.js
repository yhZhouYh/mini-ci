'use strict'; const e = require('../../../common/vendor.js'); const t = require('../../../common/assets.js')

const s = { __name: 'index', props: { src: String, customStyle: { type: [Object, String], default: 'width: 100%; height: 100%' }, customClass: { type: String, default: '' }, mode: String }, setup(s) { const r = s; const o = e.ref(); function u(e) { o.value = !1 } return e.watch((() => { o.value = r.src })), (r, c) => { let n; return e.e({ a: e.unref(o) }, e.unref(o) ? { b: `${r.$publicPath.value ? ((n = r.$publicPath) == null ? void 0 : n.value) + e.unref(o) : ''}`, c: s.mode, d: e.s(s.customStyle), e: e.o(u), f: e.n(s.customClass) } : { g: s.mode, h: t._imports_0$2, i: e.s(s.customStyle) }) } } }; const r = e._export_sfc(s, [['__scopeId', 'data-v-2239de1c']])

wx.createComponent(r)
