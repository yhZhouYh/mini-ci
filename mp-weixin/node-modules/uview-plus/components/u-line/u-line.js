'use strict'; const e = require('../../../../common/vendor.js')

const t = { name: 'u-line', mixins: [e.mpMixin, e.mixin, e.props$14], computed: { lineStyle() { const t = {}; return t.margin = this.margin, this.direction === 'row' ? (t.borderBottomWidth = '1px', t.borderBottomStyle = this.dashed ? 'dashed' : 'solid', t.width = e.index.$u.addUnit(this.length), this.hairline && (t.transform = 'scaleY(0.5)')) : (t.borderLeftWidth = '1px', t.borderLeftStyle = this.dashed ? 'dashed' : 'solid', t.height = e.index.$u.addUnit(this.length), this.hairline && (t.transform = 'scaleX(0.5)')), t.borderColor = this.color, e.index.$u.deepMerge(t, e.index.$u.addStyle(this.customStyle)) } } }

const i = e._export_sfc(t, [['render', function (t, i, r, d, n, o) { return { a: e.s(o.lineStyle) } }], ['__scopeId', 'data-v-45e31c7a']]); wx.createComponent(i)
