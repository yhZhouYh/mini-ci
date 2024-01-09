'use strict'; const e = require('../../../../common/vendor.js')

const r = { __name: 'index', props: { current: { type: Number, default: 0 } }, emits: ['change'], setup(r, { expose: t, emit: c }) { const n = r; const o = e.reactive({ active_tab: 0 }); function u(e) { n.current = e, c('change', e) } return t({ ...e.toRefs(o) }), (r, t) => ({ a: n.current ? '#000' : '#A6192E', b: n.current ? 400 : 500, c: e.o((e => u(0))), d: n.current ? '#A6192E' : '#000', e: n.current ? 500 : 400, f: e.o((e => u(1))), g: n.current ? '476rpx' : '128rpx' }) } }; const t = e._export_sfc(r, [['__scopeId', 'data-v-6608e5ec']])

wx.createComponent(t)
