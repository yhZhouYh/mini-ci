'use strict'; const e = require('../../../common/vendor.js')

const t = {
  name: 'UUpload',
  mixins: [e.mpMixin, e.mixin, e.mixinUp, e.props],
  emits: ['error', 'beforeRead', 'oversize', 'afterRead', 'delete', 'clickPreview', 'errorUpload'],
  data: () => ({ lists: [], isInCount: !0 }),
  watch: { fileList: { handler() { this.formatFileList() }, immediate: !0, deep: !0 } },
  methods: {
    formatFileList() { const { fileList: t = [], maxCount: i } = this; const s = t.map((t => Object.assign(Object.assign({}, t), { isImage: this.accept === 'image' || e.index.$u.test.image(t.url || t.thumb), isVideo: this.accept === 'video' || e.index.$u.test.video(t.url || t.thumb), deletable: typeof t.deletable == 'boolean' ? t.deletable : this.deletable }))); this.lists = s, this.isInCount = s.length < i },
    chooseFile() {
      const { maxCount: t, multiple: i, lists: s, disabled: a } = this; if (a)
        return; let o; try { o = e.index.$u.test.array(this.capture) ? this.capture : this.capture.split(',') }
      catch (l) { o = [] }e.chooseFile(Object.assign({ accept: this.accept, multiple: this.multiple, capture: o, compressed: this.compressed, maxDuration: this.maxDuration, sizeType: this.sizeType, camera: this.camera }, { maxCount: t - s.length })).then(((e) => { this.onBeforeRead(i ? e : e[0]) })).catch(((e) => { this.$emit('error', e) }))
    },
    onBeforeRead(t) { const { beforeRead: i, useBeforeRead: s } = this; let a = !0; e.index.$u.test.func(i) && (a = i(t, this.getDetail())), s && (a = new Promise(((e, i) => { this.$emit('beforeRead', Object.assign(Object.assign({ file: t }, this.getDetail()), { callback: (t) => { t ? e() : i() } })) }))), a && (e.index.$u.test.promise(a) ? a.then((e => this.onAfterRead(e || t))) : this.onAfterRead(t)) },
    getDetail(e) { return { name: this.name, index: e == null ? this.fileList.length : e } },
    onAfterRead(t) {
      if (t[0].size / 1048576 >= 5)
        return void e.index.showToast({ icon: 'none', title: '图片过大' }); const { maxSize: i, afterRead: s } = this; (Array.isArray(t) ? t.some((e => e.size > i)) : t.size > i) ? this.$emit('oversize', Object.assign({ file: t }, this.getDetail())) : (typeof s == 'function' && s(t, this.getDetail()), this.$emit('afterRead', Object.assign({ file: t }, this.getDetail())))
    },
    deleteItem(e) { this.$emit('delete', Object.assign(Object.assign({}, this.getDetail(e)), { file: this.fileList[e] })) },
    errorUpload(t) { e.chooseFile(Object.assign({ accept: this.accept, multiple: !1, capture: this.capture, compressed: this.compressed, maxDuration: this.maxDuration, sizeType: this.sizeType, camera: this.camera })).then(((e) => { this.$emit('errorUpload', e[0], t) })).catch(((e) => { this.$emit('error', e) })) },
    onPreviewImage(t) { t.isImage && this.previewFullImage && e.index.previewImage({ urls: this.lists.filter((t => this.accept === 'image' || e.index.$u.test.image(t.url || t.thumb))).map((e => e.url || e.thumb)), current: t.url || t.thumb, fail() { e.index.$u.toast('预览图片失败') } }) },
    onPreviewVideo(t) {
      if (!this.data.previewFullImage)
        return; const { index: i } = t.currentTarget.dataset; const { lists: s } = this.data; e.wx$1.previewMedia({ sources: s.filter((e => isVideoFile(e))).map((e => Object.assign(Object.assign({}, e), { type: 'video' }))), current: i, fail() { e.index.$u.toast('预览视频失败') } })
    },
    onClickPreview(e) { const { index: t } = e.currentTarget.dataset; const i = this.data.lists[t]; this.$emit('clickPreview', Object.assign(Object.assign({}, i), this.getDetail(t))) },
  },
}

if (!Array) { (e.resolveComponent('u-icon') + e.resolveComponent('u-loading-icon'))() }Math || ((() => '../../../node-modules/uview-plus/components/u-icon/u-icon.js') + (() => '../../../node-modules/uview-plus/components/u-loading-icon/u-loading-icon.js'))(); const i = e._export_sfc(t, [['render', function (t, i, s, a, o, l) { return e.e({ a: t.previewImage }, t.previewImage ? { b: e.f(o.lists, (i, s, a) => e.e({ a: i.isImage || i.type && i.type === 'image' }, i.isImage || i.type && i.type === 'image' ? { b: i.thumb || i.url, c: t.imageMode, d: e.s({ width: t.$u.addUnit(t.width), height: t.$u.addUnit(t.height) }), e: e.o(e => l.onPreviewImage(i), s) } : { f: `71ec00cb-0-${a}`, g: e.p({ color: '#80CBF9', size: '26', name: i.isVideo || i.type && i.type === 'video' ? 'movie' : 'folder' }), h: e.t(i.isVideo || i.type && i.type === 'video' ? '视频' : '文件') }, { i: i.status === 'uploading' || i.status === 'failed' }, i.status === 'uploading' || i.status === 'failed' ? e.e({ j: i.status === 'failed' }, i.status === 'failed' ? { k: `71ec00cb-1-${a}`, l: e.p({ name: 'close-circle', color: '#ffffff', size: '25' }) } : { m: `71ec00cb-2-${a}`, n: e.p({ size: '22', color: '#ffffff' }) }, { o: i.message }, i.message ? { p: e.t(i.message) } : {}, { q: e.o(() => { i.status === 'failed' && l.errorUpload(s) }, s) }) : {}, { r: i.status !== 'uploading' && (t.deletable || i.deletable) }, i.status !== 'uploading' && (t.deletable || i.deletable) ? { s: e.o(e => l.deleteItem(s), s) } : {}, { t: s })) } : {}, { c: o.isInCount }, o.isInCount ? e.e({ d: t.$slots.default || t.$slots.$default }, t.$slots.default || t.$slots.$default ? { e: e.o(((...e) => l.chooseFile && l.chooseFile(...e))) } : { f: t.disabled ? '' : 'u-upload__button--hover', g: e.n(t.disabled && 'u-upload__button--disabled'), h: e.s({ width: t.$u.addUnit(t.width), height: t.$u.addUnit(t.height) }), i: e.o(((...e) => l.chooseFile && l.chooseFile(...e))) }) : {}, { j: e.s(t.$u.addStyle(t.customStyle)) }) }], ['__scopeId', 'data-v-71ec00cb']]); wx.createComponent(i)
