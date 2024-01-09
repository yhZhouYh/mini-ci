'use strict'; const e = require('../uni-data-pickerview/uni-data-picker.js'); const t = require('../../../../common/vendor.js')

const i = {
  name: 'UniDataPicker',
  components: { DataPickerView: () => '../uni-data-pickerview/uni-data-pickerview.js' },
  mixins: [e.dataPicker],
  props: { options: { type: [Object, Array], default: () => ({}) }, popupTitle: { type: String, default: '请选择' }, placeholder: { type: String, default: '请选择' }, heightMobile: { type: String, default: '' }, readonly: { type: Boolean, default: !1 }, clearIcon: { type: Boolean, default: !0 }, border: { type: Boolean, default: !0 }, split: { type: String, default: '/' }, ellipsis: { type: Boolean, default: !0 } },
  emits: ['popupopened', 'popupclosed', 'nodeclick', 'input', 'change', 'update:modelValue', 'inputclick'],
  data: () => ({ isOpened: !1, inputSelected: [] }),
  watch: { localdata: { handler() { this.load() }, deep: !0 } },
  created() { this.$nextTick((() => { this.load() })) },
  methods: {
    clear() { this._dispatchEvent([]) },
    onPropsChange() { this._treeData = [], this.selectedIndex = 0, this.load() },
    load() { this.readonly ? this._processReadonly(this.localdata, this.dataValue) : this.isLocalData ? (this.loadData(), this.inputSelected = this.selected.slice(0)) : (this.isCloudDataList || this.isCloudDataTree) && (this.loading = !0, this.getCloudDataValue().then(((e) => { this.loading = !1, this.inputSelected = e })).catch(((e) => { this.loading = !1, this.errorMessage = e }))) },
    show() { this.isOpened = !0, setTimeout(() => { this.$refs.pickerView.updateData({ treeData: this._treeData, selected: this.selected, selectedIndex: this.selectedIndex }) }, 200), this.$emit('popupopened') },
    hide() { this.isOpened = !1, this.$emit('popupclosed') },
    handleInput() { this.readonly ? this.$emit('inputclick') : this.show() },
    handleClose(e) { this.hide() },
    onnodeclick(e) { this.$emit('nodeclick', e) },
    ondatachange(e) { this._treeData = this.$refs.pickerView._treeData },
    onchange(e) { this.hide(), this.$nextTick((() => { this.inputSelected = e })), this._dispatchEvent(e) },
    _processReadonly(e, t) {
      if (e.findIndex((e => e.children)) > -1) { let e; return Array.isArray(t) ? (e = t[t.length - 1], typeof e == 'object' && e.value && (e = e.value)) : e = t, void (this.inputSelected = this._findNodePath(e, this.localdata)) } if (!this.hasValue)
        return void (this.inputSelected = []); const i = []; for (let l = 0; l < t.length; l++) { var a = t[l]; const n = e.find((e => e.value == a)); n && i.push(n) }i.length && (this.inputSelected = i)
    },
    _filterForArray(e, t) { const i = []; for (let l = 0; l < t.length; l++) { var a = t[l]; const n = e.find((e => e.value == a)); n && i.push(n) } return i },
    _dispatchEvent(e) {
      let t = {}; if (e.length) { const i = Array.from({ length: e.length }); for (let t = 0; t < e.length; t++)i[t] = e[t].value; t = e[e.length - 1] }
      else { t.value = '' } this.formItem && this.formItem.setValue(t.value), this.$emit('input', t.value), this.$emit('update:modelValue', t.value), this.$emit('change', { detail: { value: e } })
    },
  },
}

if (!Array) { (t.resolveComponent('uni-load-more') + t.resolveComponent('uni-icons') + t.resolveComponent('DataPickerView'))() } const a = t._export_sfc(i, [['render', function (e, i, a, l, n, o) { return t.e({ a: e.errorMessage }, e.errorMessage ? { b: t.t(e.errorMessage) } : e.loading && !n.isOpened ? { d: t.p({ 'content-text': e.loadMore, 'status': 'loading' }) } : n.inputSelected.length ? {} : { f: t.t(a.placeholder) }, { c: e.loading && !n.isOpened, e: n.inputSelected.length, g: a.clearIcon && !a.readonly && n.inputSelected.length }, a.clearIcon && !a.readonly && n.inputSelected.length ? { h: t.p({ type: 'clear', color: '#c0c4cc', size: '24' }), i: t.o(((...e) => o.clear && o.clear(...e))) } : {}, { j: a.border ? 1 : '', k: t.r('d', { options: a.options, data: n.inputSelected, error: e.errorMessage }), l: t.o(((...e) => o.handleInput && o.handleInput(...e))), m: n.isOpened }, n.isOpened ? { n: t.o(((...e) => o.handleClose && o.handleClose(...e))) } : {}, { o: n.isOpened }, n.isOpened ? { p: t.t(a.popupTitle), q: t.o(((...e) => o.handleClose && o.handleClose(...e))), r: t.sr('pickerView', '3d314f12-2'), s: t.o(o.onchange), t: t.o(o.ondatachange), v: t.o(o.onnodeclick), w: t.o((t => e.dataValue = t)), x: t.p({ 'localdata': e.localdata, 'preload': e.preload, 'collection': e.collection, 'field': e.field, 'orderby': e.orderby, 'where': e.where, 'step-searh': e.stepSearh, 'self-field': e.selfField, 'parent-field': e.parentField, 'managed-mode': !0, 'map': e.map, 'ellipsis': a.ellipsis, 'modelValue': e.dataValue }) } : {}) }]]); wx.createComponent(a)
