'use strict'; const e = require('../../../../common/vendor.js')

const t = { name: 'u-safe-bottom', mixins: [e.mpMixin, e.mixin, e.props$17], data: () => ({ safeAreaBottomHeight: 0, isNvue: !1 }), computed: { style() { return e.index.$u.deepMerge({}, e.index.$u.addStyle(this.customStyle)) } }, mounted() {} }

const n = e._export_sfc(t, [['render', function (t, n, o, s, i, r) { return { a: e.s(r.style), b: e.n(!i.isNvue && 'u-safe-area-inset-bottom') } }], ['__scopeId', 'data-v-6e02536d']]); wx.createComponent(n)
