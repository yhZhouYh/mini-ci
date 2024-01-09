'use strict'; const t = require('../../../../common/vendor.js')

const e = {
  props: { localdata: { type: [Array, Object], default: () => [] }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: String, default: '' }, action: { type: String, default: '' }, field: { type: String, default: '' }, orderby: { type: String, default: '' }, where: { type: [String, Object], default: '' }, pageData: { type: String, default: 'add' }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 500 }, getcount: { type: [Boolean, String], default: !1 }, getone: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, manual: { type: Boolean, default: !1 }, value: { type: [Array, String, Number], default: () => [] }, modelValue: { type: [Array, String, Number], default: () => [] }, preload: { type: Boolean, default: !1 }, stepSearh: { type: Boolean, default: !0 }, selfField: { type: String, default: '' }, parentField: { type: String, default: '' }, multiple: { type: Boolean, default: !1 }, map: { type: Object, default: () => ({ text: 'text', value: 'value' }) } },
  data() { return { loading: !1, errorMessage: '', loadMore: { contentdown: '', contentrefresh: '', contentnomore: '' }, dataList: [], selected: [], selectedIndex: 0, page: { current: this.pageCurrent, size: this.pageSize, count: 0 } } },
  computed: { isLocalData() { return !this.collection.length }, isCloudData() { return this.collection.length > 0 }, isCloudDataList() { return this.isCloudData && !this.parentField && !this.selfField }, isCloudDataTree() { return this.isCloudData && this.parentField && this.selfField }, dataValue() { return (Array.isArray(this.modelValue) ? this.modelValue.length > 0 : this.modelValue !== null || void 0 !== this.modelValue) ? this.modelValue : this.value }, hasValue() { return typeof this.dataValue == 'number' || this.dataValue != null && this.dataValue.length > 0 } },
  created() { this.$watch(() => { const t = []; return ['pageCurrent', 'pageSize', 'spaceInfo', 'value', 'modelValue', 'localdata', 'collection', 'action', 'field', 'orderby', 'where', 'getont', 'getcount', 'gettree'].forEach(((e) => { t.push(this[e]) })), t }, (t, e) => { for (let a = 2; a < t.length && t[a] == e[a]; a++);t[0] != e[0] && (this.page.current = this.pageCurrent), this.page.size = this.pageSize, this.onPropsChange() }), this._treeData = [] },
  methods: {
    onPropsChange() { this._treeData = [] },
    async loadData() { this.isLocalData ? this.loadLocalData() : this.isCloudDataList ? this.loadCloudDataList() : this.isCloudDataTree && this.loadCloudDataTree() },
    async loadLocalData() { this._treeData = [], this._extractTree(this.localdata, this._treeData); let t = this.dataValue; void 0 !== t && (Array.isArray(t) && (t = t[t.length - 1], typeof t == 'object' && t[this.map.value] && (t = t[this.map.value])), this.selected = this._findNodePath(t, this.localdata)) },
    async loadCloudDataList() {
      if (!this.loading) {
        this.loading = !0; try { const t = (await this.getCommand()).result.data; this._treeData = t, this._updateBindData(), this._updateSelected(), this.onDataChange() }
        catch (t) { this.errorMessage = t }
        finally { this.loading = !1 }
      }
    },
    async loadCloudDataTree() {
      if (!this.loading) {
        this.loading = !0; try { const t = { field: this._cloudDataPostField(), where: this._cloudDataTreeWhere() }; this.gettree && (t.startwith = `${this.selfField}=='${this.dataValue}'`); const e = (await this.getCommand(t)).result.data; this._treeData = e, this._updateBindData(), this._updateSelected(), this.onDataChange() }
        catch (t) { this.errorMessage = t }
        finally { this.loading = !1 }
      }
    },
    async loadCloudDataNode(t) {
      if (!this.loading) {
        this.loading = !0; try { const e = { field: this._cloudDataPostField(), where: this._cloudDataNodeWhere() }; const a = await this.getCommand(e); t(a.result.data) }
        catch (e) { this.errorMessage = e }
        finally { this.loading = !1 }
      }
    },
    getCloudDataValue() { return this.isCloudDataList ? this.getCloudDataListValue() : this.isCloudDataTree ? this.getCloudDataTreeValue() : void 0 },
    getCloudDataListValue() { let t = []; const e = this._getForeignKeyByField(); return e && t.push(`${e} == '${this.dataValue}'`), t = t.join(' || '), this.where && (t = `(${this.where}) && (${t})`), this.getCommand({ field: this._cloudDataPostField(), where: t }).then((t => (this.selected = t.result.data, t.result.data))) },
    getCloudDataTreeValue() { return this.getCommand({ field: this._cloudDataPostField(), getTreePath: { startWith: `${this.selfField}=='${this.dataValue}'` } }).then(((t) => { const e = []; return this._extractTreePath(t.result.data, e), this.selected = e, e })) },
    getCommand(e = {}) { let a = t.Ds.database(this.spaceInfo); const i = e.action || this.action; i && (a = a.action(i)); const l = e.collection || this.collection; a = a.collection(l); const s = e.where || this.where; s && Object.keys(s).length && (a = a.where(s)); const r = e.field || this.field; r && (a = a.field(r)); const h = e.orderby || this.orderby; h && (a = a.orderBy(h)); const n = void 0 !== e.pageCurrent ? e.pageCurrent : this.page.current; const o = void 0 !== e.pageSize ? e.pageSize : this.page.size; const d = { getCount: void 0 !== e.getcount ? e.getcount : this.getcount, getTree: void 0 !== e.gettree ? e.gettree : this.gettree }; return e.getTreePath && (d.getTreePath = e.getTreePath), a = a.skip(o * (n - 1)).limit(o).get(d), a },
    _cloudDataPostField() { const t = [this.field]; return this.parentField && t.push(`${this.parentField} as parent_value`), t.join(',') },
    _cloudDataTreeWhere() {
      const t = []; const e = this.selected; const a = this.parentField; if (a && t.push(`${a} == null || ${a} == ""`), e.length)
        for (let l = 0; l < e.length - 1; l++)t.push(`${a} == '${e[l].value}'`); const i = []; return this.where && i.push(`(${this.where})`), t.length && i.push(`(${t.join(' || ')})`), i.join(' && ')
    },
    _cloudDataNodeWhere() { let t = []; const e = this.selected; return e.length && t.push(`${this.parentField} == '${e[e.length - 1].value}'`), t = t.join(' || '), this.where ? `(${this.where}) && (${t})` : t },
    _getWhereByForeignKey() { const t = []; const e = this._getForeignKeyByField(); return e && t.push(`${e} == '${this.dataValue}'`), this.where ? `(${this.where}) && (${t.join(' || ')})` : t.join(' || ') },
    _getForeignKeyByField() { const t = this.field.split(','); let e = null; for (let a = 0; a < t.length; a++) { const i = t[a].split('as'); if (!(i.length < 2) && i[1].trim() === 'value') { e = i[0].trim(); break } } return e },
    _updateBindData(t) { const { dataList: e, hasNodes: a } = this._filterData(this._treeData, this.selected); const i = !1 === this._stepSearh && !a; return t && (t.isleaf = i), this.dataList = e, this.selectedIndex = e.length - 1, !i && this.selected.length < e.length && this.selected.push({ value: null, text: '请选择' }), { isleaf: i, hasNodes: a } },
    _updateSelected() { const t = this.dataList; const e = this.selected; const a = this.map.text; const i = this.map.value; for (let l = 0; l < e.length; l++) { const s = e[l].value; const r = t[l]; for (let t = 0; t < r.length; t++) { const h = r[t]; if (h[i] === s) { e[l].text = h[a]; break } } } },
    _filterData(t, e) { const a = []; let i = !0; a.push(t.filter((t => t.parent_value === null || void 0 === t.parent_value || t.parent_value === ''))); for (let l = 0; l < e.length; l++) { const s = e[l].value; const r = t.filter((t => t.parent_value === s)); r.length ? a.push(r) : i = !1 } return { dataList: a, hasNodes: i } },
    _extractTree(t, e, a) { const i = this.map.value; for (let l = 0; l < t.length; l++) { const s = t[l]; const r = {}; for (const t in s)t !== 'children' && (r[t] = s[t]); a != null && a !== '' && (r.parent_value = a), e.push(r); const h = s.children; h && this._extractTree(h, e, s[i]) } },
    _extractTreePath(t, e) { for (let a = 0; a < t.length; a++) { const i = t[a]; const l = {}; for (const t in i)t !== 'children' && (l[t] = i[t]); e.push(l); const s = i.children; s && this._extractTreePath(s, e) } },
    _findNodePath(t, e, a = []) {
      const i = this.map.text; const l = this.map.value; for (let s = 0; s < e.length; s++) {
        const r = e[s]; const h = r.children; const n = r[i]; const o = r[l]; if (a.push({ value: o, text: n }), o === t)
          return a; if (h) {
          const e = this._findNodePath(t, h, a); if (e.length)
            return e
        }a.pop()
      } return []
    },
  },
}

exports.dataPicker = e
