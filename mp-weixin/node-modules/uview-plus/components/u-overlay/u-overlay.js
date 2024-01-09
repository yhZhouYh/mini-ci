'use strict'; const e = require('../../../../common/vendor.js')

const t = { name: 'u-overlay', mixins: [e.mpMixin, e.mixin, e.props$18], computed: { overlayStyle() { const t = { 'position': 'fixed', 'top': 0, 'left': 0, 'right': 0, 'zIndex': this.zIndex, 'bottom': 0, 'background-color': `rgba(0, 0, 0, ${this.opacity})` }; return e.index.$u.deepMerge(t, e.index.$u.addStyle(this.customStyle)) } }, methods: { clickHandler() { this.$emit('click') } } }

if (!Array) { e.resolveComponent('u-transition')() }Math; const o = e._export_sfc(t, [['render', function (t, o, n, r, i, s) { return { a: e.o(s.clickHandler), b: e.p({ 'show': t.show, 'custom-class': 'u-overlay', 'duration': t.duration, 'custom-style': s.overlayStyle }) } }], ['__scopeId', 'data-v-1ce16a4a']]); wx.createComponent(o)
