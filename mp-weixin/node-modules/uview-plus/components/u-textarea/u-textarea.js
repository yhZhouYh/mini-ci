'use strict'; const e = require('../../../../common/vendor.js')

const t = { name: 'u-textarea', mixins: [e.mpMixin, e.mixin, e.props$3], data: () => ({ innerValue: '', focused: !1, firstChange: !0, changeFromInner: !1, innerFormatter: e => e }), created() {}, watch: { modelValue: { immediate: !0, handler(e, t) { this.innerValue = e, this.firstChange = !1, this.changeFromInner = !1 } } }, computed: { textareaClass() { let e = []; const { border: t, disabled: n } = this; return t === 'surround' && (e = e.concat(['u-border', 'u-textarea--radius'])), t === 'bottom' && (e = e.concat(['u-border-bottom', 'u-textarea--no-radius'])), n && e.push('u-textarea--disabled'), e.join(' ') }, textareaStyle() { return e.index.$u.deepMerge({}, e.index.$u.addStyle(this.customStyle)) } }, emits: ['update:modelValue', 'linechange', 'focus', 'blur', 'change', 'confirm', 'keyboardheightchange'], methods: { setFormatter(e) { this.innerFormatter = e }, onFocus(e) { this.$emit('focus', e) }, onBlur(t) { this.$emit('blur', t), e.index.$u.formValidate(this, 'blur') }, onLinechange(e) { this.$emit('linechange', e) }, onInput(e) { const { value: t = '' } = e.detail || {}; const n = (this.formatter || this.innerFormatter)(t); this.innerValue = t, this.$nextTick((() => { this.innerValue = n, this.valueChange() })) }, valueChange() { const t = this.innerValue; this.$nextTick((() => { this.$emit('update:modelValue', t), this.changeFromInner = !0, this.$emit('change', t), e.index.$u.formValidate(this, 'change') })) }, onConfirm(e) { this.$emit('confirm', e) }, onKeyboardheightchange(e) { this.$emit('keyboardheightchange', e) } } }

const n = e._export_sfc(t, [['render', function (t, n, a, i, o, r) { return e.e({ a: o.innerValue, b: t.$u.addUnit(t.height), c: t.placeholder, d: t.$u.addStyle(t.placeholderStyle, 'string'), e: t.placeholderClass, f: t.disabled, g: t.focus, h: t.autoHeight, i: t.fixed, j: t.cursorSpacing, k: t.cursor, l: t.showConfirmBar, m: t.selectionStart, n: t.selectionEnd, o: t.adjustPosition, p: t.disableDefaultPadding, q: t.holdKeyboard, r: t.maxlength, s: t.confirmType, t: t.ignoreCompositionEvent, v: e.o(((...e) => r.onFocus && r.onFocus(...e))), w: e.o(((...e) => r.onBlur && r.onBlur(...e))), x: e.o(((...e) => r.onLinechange && r.onLinechange(...e))), y: e.o(((...e) => r.onInput && r.onInput(...e))), z: e.o(((...e) => r.onConfirm && r.onConfirm(...e))), A: e.o(((...e) => r.onKeyboardheightchange && r.onKeyboardheightchange(...e))), B: t.count }, t.count ? { C: e.t(o.innerValue.length), D: e.t(t.maxlength), E: t.disabled ? 'transparent' : '#fff' } : {}, { F: e.n(r.textareaClass), G: e.s(r.textareaStyle) }) }], ['__scopeId', 'data-v-dee06fc4']]); wx.createComponent(n)
