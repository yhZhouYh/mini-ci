'use strict'; const e = require('../../../../common/vendor.js')

const t = { name: 'u-status-bar', mixins: [e.mpMixin, e.mixin, e.props$19], data: () => ({}), computed: { style() { const t = {}; return t.height = e.index.$u.addUnit(e.index.$u.sys().statusBarHeight, 'px'), t.backgroundColor = this.bgColor, e.index.$u.deepMerge(t, e.index.$u.addStyle(this.customStyle)) } } }

const n = e._export_sfc(t, [['render', function (t, n, s, o, r, i) { return { a: e.s(i.style) } }], ['__scopeId', 'data-v-df170e56']]); wx.createComponent(n)
