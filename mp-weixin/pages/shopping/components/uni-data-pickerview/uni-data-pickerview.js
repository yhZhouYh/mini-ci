'use strict'; const t = require('../../../../common/vendor.js')
const e = require('./uni-data-picker.js')

const a = {
  name: 'UniDataPickerView',
  mixins: [e.dataPicker],
  props: { managedMode: { type: Boolean, default: !1 }, ellipsis: { type: Boolean, default: !0 } },
  emits: ['nodeclick', 'change', 'datachange', 'update:modelValue'],
  created() { this.managedMode || this.$nextTick((() => { this.loadData() })) },
  methods: {
    onPropsChange() { this._treeData = [], this.selectedIndex = 0, this.$nextTick((() => { this.loadData() })) },
    handleSelect(e) { this.selectedIndex = e },
    handleNodeClick(e, t, a) {
      if (e.disable)
        return; const s = this.dataList[t][a]; const i = s[this.map.text]; const d = s[this.map.value]; if (t < this.selected.length - 1 ? (this.selected.splice(t, this.selected.length - t), this.selected.push({ text: i, value: d })) : t === this.selected.length - 1 && this.selected.splice(t, 1, { text: i, value: d }), s.isleaf)
        return void this.onSelectedChange(s, s.isleaf); const { isleaf: l, hasNodes: n } = this._updateBindData(); this.isLocalData ? this.onSelectedChange(s, !n || l) : this.isCloudDataList ? this.onSelectedChange(s, !0) : this.isCloudDataTree && (l ? this.onSelectedChange(s, s.isleaf) : n || this.loadCloudDataNode(((e) => { e.length ? (this._treeData.push(...e), this._updateBindData(s)) : s.isleaf = !0, this.onSelectedChange(s, s.isleaf) })))
    },
    updateData(e) { this._treeData = e.treeData, this.selected = e.selected, this._treeData.length ? this._updateBindData() : this.loadData() },
    onDataChange() { this.$emit('datachange') },
    onSelectedChange(e, t) { t && this._dispatchEvent(), e && this.$emit('nodeclick', e) },
    _dispatchEvent() { this.$emit('change', this.selected.slice(0)) },
  },
}

if (!Array) { t.resolveComponent('uni-load-more')() } const s = t._export_sfc(a, [['render', function (e, a, s, i, d, l) { return t.e({ a: !e.isCloudDataList }, e.isCloudDataList ? {} : { b: t.f(e.selected, (a, s, i) => ({ a: t.t(a.text || ''), b: s, c: s == e.selectedIndex ? 1 : '', d: t.o(e => l.handleSelect(s), s) })) }, { c: t.f(e.dataList[e.selectedIndex], (a, s, i) => t.e({ a: t.t(a[e.map.text]), b: e.selected.length > e.selectedIndex && a[e.map.value] == e.selected[e.selectedIndex].value }, (e.selected.length > e.selectedIndex && (a[e.map.value], e.selected[e.selectedIndex].value), {}), { c: s, d: a.disable ? 1 : '', e: t.o(t => l.handleNodeClick(a, e.selectedIndex, s), s) })), d: e.loading }, e.loading ? { e: t.p({ 'content-text': e.loadMore, 'status': 'loading' }) } : {}, { f: e.errorMessage }, e.errorMessage ? { g: t.t(e.errorMessage) } : {}) }]]); wx.createComponent(s)
