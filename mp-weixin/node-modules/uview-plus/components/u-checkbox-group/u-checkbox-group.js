'use strict'; const e = require('../../../../common/vendor.js')

const t = { name: 'u-checkbox-group', mixins: [e.mpMixin, e.mixin, e.props$10], computed: { parentData() { return [this.modelValue, this.disabled, this.inactiveColor, this.activeColor, this.size, this.labelDisabled, this.shape, this.iconSize, this.borderBottom, this.placement] }, bemClass() { return this.bem('checkbox-group', ['placement']) } }, watch: { parentData: { handler() { this.children.length && this.children.map(((e) => { typeof e.init == 'function' && e.init() })) }, deep: !0 } }, data: () => ({}), created() { this.children = [] }, emits: ['update:modelValue', 'change'], methods: { unCheckedOther(e) { const t = []; this.children.map(((e) => { e.isChecked && t.push(e.name) })), this.$emit('change', t), this.$emit('update:modelValue', t) } } }

const i = e._export_sfc(t, [['render', function (t, i, s, n, a, h) { return { a: e.n(h.bemClass) } }], ['__scopeId', 'data-v-f5bb36e2']]); wx.createComponent(i)
