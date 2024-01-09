'use strict'; const e = require('../../../../common/vendor.js')

e.Schema.warning = function () {}; const t = {
  name: 'u-form',
  mixins: [e.mpMixin, e.mixin, e.props$2],
  provide() { return { uForm: this } },
  data: () => ({ formRules: {}, validator: {}, originalModel: null }),
  watch: { rules: { immediate: !0, handler(e) { this.setRules(e) } }, propsChange(e) { let t; ((t = this.children) == null ? void 0 : t.length) && this.children.map(((e) => { typeof e.updateParentData == 'function' && e.updateParentData() })) }, model: { immediate: !0, handler(t) { this.originalModel || (this.originalModel = e.index.$u.deepClone(t)) } } },
  computed: { propsChange() { return [this.errorType, this.borderBottom, this.labelPosition, this.labelWidth, this.labelAlign, this.labelStyle] } },
  created() { this.children = [] },
  methods: {
    setRules(t) { Object.keys(t).length !== 0 && (this.formRules = t, this.validator = new e.Schema(t)) },
    resetFields() { this.resetModel() },
    resetModel(t) { this.children.map(((t) => { const i = t == null ? void 0 : t.prop; const n = e.index.$u.getProperty(this.originalModel, i); e.index.$u.setProperty(this.model, i, n) })) },
    clearValidate(e) { e = [].concat(e), this.children.map(((t) => { (void 0 === e[0] || e.includes(t.prop)) && (t.message = null) })) },
    async validateField(t, i, n = null) {
      this.$nextTick((() => {
        const s = []; t = [].concat(t), this.children.map(((i) => {
          const o = []; if (t.includes(i.prop)) {
            const t = e.index.$u.getProperty(this.model, i.prop); const r = i.prop.split('.'); const l = r[r.length - 1]; const a = this.formRules[i.prop]; if (!a)
              return; const d = [].concat(a); for (let h = 0; h < d.length; h++) {
              const r = d[h]; const a = [].concat(r == null ? void 0 : r.trigger); if (n && !a.includes(n))
                continue; new e.Schema({ [l]: r }).validate({ [l]: t }, (t, n) => { let r; e.index.$u.test.array(t) && (s.push(...t), o.push(...t)), i.message = ((r = o[0]) == null ? void 0 : r.message) ?? null })
            }
          }
        })), typeof i == 'function' && i(s)
      }))
    },
    validate(t) { return new Promise(((t, i) => { this.$nextTick((() => { const n = this.children.map((e => e.prop)); this.validateField(n, (n) => { n.length ? (this.errorType === 'toast' && e.index.$u.toast(n[0].message), i(n)) : t(!0) }) })) })) },
  },
}; const i = e._export_sfc(t, [['render', function (e, t, i, n, s, o) { return {} }]]); wx.createComponent(i)
