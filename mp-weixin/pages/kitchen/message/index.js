'use strict'; const e = require('../../../common/vendor.js'); const o = require('../../../api/config/home.js'); const t = require('../../../api/config/user.js'); const n = require('../../../utils/common/upload.js'); const a = require('../../../store/user/index.js'); const s = require('../../../store/login/index.js'); if (require('../../../utils/request/index.js'), require('../../../utils/request/constants.js'), require('../../../store/setup.js'), require('../../../store/loading/index.js'), require('../../../utils/login/index.js'), require('../../../utils/common/storage.js'), require('../../../api/config/login.js'), require('../../../api/config/integral.js'), !Array)
  (e.resolveComponent('shu-nav-bar') + e.resolveComponent('shu-uploader') + e.resolveComponent('u-form-item') + e.resolveComponent('u-form') + e.resolveComponent('u-textarea') + e.resolveComponent('shu-login-privacy') + e.resolveComponent('shu-loading'))()

Math || ((() => '../../../components/common/nav-bar/index.js') + (() => '../../../components/common/uploader/index.js') + (() => '../../../node-modules/uview-plus/components/u-form-item/u-form-item.js') + (() => '../../../node-modules/uview-plus/components/u-form/u-form.js') + (() => '../../../node-modules/uview-plus/components/u-textarea/u-textarea.js') + (() => '../../../components/common/login-privacy/index.js') + (() => '../../../components/common/loading/index.js'))(); const u = {
  __name: 'index',
  setup(u) {
    const { members: i } = a.useUserStore(); const { info: l } = s.useLoginStore(); const r = e.ref([]); const c = e.ref([]); e.ref(''); const m = e.ref(''); const d = e.ref(''); const v = (new Date()).getTime(); const f = e.ref({}); const g = e.ref(''); const h = e.ref('0'); const p = e.ref('0'); const x = e.ref(''); const w = e.ref(!1); const j = e.ref(null); const y = e.reactive({ value: 1, title: '灵感厨房' }); function q(e) { r.value.splice(e.index, 1) } async function b({ url: e, thumb: o }, t) {
      try { const n = { url: e, thumb: o, status: 'uploading', message: '失败重传' }; r.value[t] = n, await T(e, o, t, !0), c.value.splice(t, 0, { url: result, width: h, height: p }) }
      catch (n) { console.error(n) }
    } async function T(o, t, a, s = !1) {
      const u = e.ref({}); try { s || (u.value = { status: 'uploading', url: o, thumb: t, message: '上传中' }, r.value.push(u.value)); const { width: i, height: l } = await (function (o) { return new Promise(((t, n) => { e.index.getImageInfo({ src: o, success: t, fail: n }) })) }(o)); const { url: m } = await n.uploadImg(o); return s ? (r.value[a].status = 'success', r.value[a].message = '') : (u.value.status = 'success', u.value.message = ''), c.value.push({ url: m, width: i, height: l }), { width: i, height: l, result: m } }
      catch (i) { throw console.log(i), s ? (r.value[a].status = 'failed', r.value[a].message = '上传失败') : (u.value.status = 'failed', u.value.message = '上传失败'), i }
    } async function k(e) { e.file && Promise.all(e.file.map((({ url: e, thumb: o }, t) => T(e, o, t).catch(((e) => { console.error(e) }))))) }e.onMounted((() => { !(async function () { const { data: e, cout: t } = await o.GetMysearch(); f.value = e }()) })), e.watch(() => [{ title: m.value, images: c.value, talkName: x.value }], (e, o) => { e[0].value2 !== '' && void 0 !== e[0].value2 && e[0].fileList1 !== {} && void 0 !== e[0].fileList1 && e[0].talkName !== '' && void 0 !== e[0].talkName ? w.value = !0 : w.value = !1 }, { deep: !0 }); const C = e.computed((() => !!(c.value.length && m.value && v && x.value))); async function _() {
      let t, n, a; if (C.value) {
        if (!1 === l.login) { e.index.showToast({ icon: 'none', title: '您需要登录才能发布内容' }), setTimeout(() => { j.value.show() }, 500) }
        else {
          try { await o.GetMysave({ title: m.value, images: c.value, name: ((t = i == null ? void 0 : i.current) == null ? void 0 : t.name) == '' ? '微信昵称' : (n = i == null ? void 0 : i.current) == null ? void 0 : n.name, talkId: v, talkName: x.value, mobile: (a = i == null ? void 0 : i.current) == null ? void 0 : a.mobile, content: d.value }) }
          catch (s) { console.error(s.data.code), s.data.code === 2001 && (m.value = '', e.index.showToast({ icon: 'none', title: '内容不合法，请重新输入' })), s.data.code === 2002 && (d.value = '', e.index.showToast({ icon: 'none', title: '内容不合法，请重新输入' })), s.data.code === 2003 && (r.value = [], e.index.showToast({ icon: 'none', title: '图片不合法' })), s.data.code === 1100 && console.error(s.data.message) }e.index.showToast({ icon: 'none', title: '发布成功' }), setTimeout(() => { const o = getCurrentPages(); const t = o[o.length - 2]; e.index.navigateBack({ delta: 1, success() { t.$vm.isRefresh = !0 } }) }, 1e3)
        }
      }
    } return e.onLoad((() => { e.index.showShareMenu() })), (o, n) => ({
      a: e.p({ title: e.unref(y).title }),
      b: e.sr('touxiang', 'c3fd0e12-3,c3fd0e12-2'),
      c: e.o(k),
      d: e.o(q),
      e: e.o(b),
      f: e.p({ 'custom-btn': !0, 'multiple': !0, 'del-bg-color': '#666666', 'limit-type': ['png', 'jpg', 'jpeg'], 'file-list': e.unref(r), 'name': '1', 'max-count': 9 }),
      g: e.sr('uForm', 'c3fd0e12-1'),
      h: e.o((o => (async function (o) {
        try { m.value === '' ? e.index.showToast({ icon: 'none', title: '请添加标题' }) : m.value !== '' && !1 === await t.textDetection({ msg: o }) && (m.value = '', e.index.showToast({ icon: 'none', title: '标题不合法' })) }
        catch (n) { console.error(n, 'error') }
      }(e.unref(m))))),
      i: e.o((o => e.isRef(m) ? m.value = o : null)),
      j: e.p({ placeholder: '添加标题，最多20个字', maxlength: '20', modelValue: e.unref(m) }),
      k: e.o((o => (async function (o) {
        try { d.value !== '' && !1 === await t.textDetection({ msg: o }) && (d.value = '', e.index.showToast({ icon: 'none', title: '内容不合法' })) }
        catch (n) { console.error(n, 'error') }
      }(e.unref(d))))),
      l: e.o((o => e.isRef(d) ? d.value = o : null)),
      m: e.p({ placeholder: '添加内容，最多150个字', maxlength: '150', modelValue: e.unref(d) }),
      n: e.f(e.unref(f), (o, t, n) => ({ a: e.t(o.huatimingcheng), b: e.n(e.unref(g) === t ? 'active' : ''), c: e.o(e => (function (e) { g.value = e, x.value = f.value[e].huatimingcheng }(t)), t), d: t })),
      o: e.n(e.unref(C) ? 'btn1' : 'btn'),
      p: e.o(_),
      q: e.sr(j, 'c3fd0e12-6', { k: 'mask' }),
    })
  },
}; const i = e._export_sfc(u, [['__scopeId', 'data-v-c3fd0e12']]); wx.createPage(i)
