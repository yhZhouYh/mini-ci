'use strict'; const t = require('../../../../common/vendor.js')

const e = { name: 'u-gap', mixins: [t.mpMixin, t.mixin, t.props$21], computed: { gapStyle() { const e = { backgroundColor: this.bgColor, height: t.index.$u.addUnit(this.height), marginTop: t.index.$u.addUnit(this.marginTop), marginBottom: t.index.$u.addUnit(this.marginBottom) }; return t.index.$u.deepMerge(e, t.index.$u.addStyle(this.customStyle)) } } }

const n = t._export_sfc(e, [['render', function (e, n, i, o, r, d) { return { a: t.s(d.gapStyle) } }], ['__scopeId', 'data-v-148cef11']]); wx.createComponent(n)
