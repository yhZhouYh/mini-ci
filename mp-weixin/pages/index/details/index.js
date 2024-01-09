'use strict'; const e = require('../../../common/vendor.js'); const n = require('../../../api/config/home.js'); if (require('../../../utils/request/index.js'), require('../../../utils/request/constants.js'), require('../../../store/setup.js'), require('../../../store/user/index.js'), require('../../../store/loading/index.js'), require('../../../store/login/index.js'), require('../../../utils/login/index.js'), require('../../../utils/common/storage.js'), require('../../../api/config/login.js'), require('../../../api/config/integral.js'), !Array)
  (e.resolveComponent('shu-nav-bar') + e.resolveComponent('shu-img-loading') + e.resolveComponent('shu-loading'))()

Math || ((() => '../../../components/common/nav-bar/index.js') + (() => '../../../components/common/img-loading/index.js') + (() => '../../../components/common/loading/index.js'))(); const o = {
  __name: 'index',
  setup(o) {
    const i = e.reactive({ value: 1, title: '详情页' }); const r = e.ref(''); const t = e.ref(''); const s = e.ref(1); const a = e.ref({}); e.onLoad(((e) => {
      t.value = e.id, s.value = e.ratio, (async function () {
        try { const e = await n.GetMyinfo({ id: t.value }); a.value = e, r.value = a.value.images[0].height }
        catch (e) { console.error(e) }
      }())
    })); const u = e.computed((() => ({ height: `calc(100vw * ${s.value})` }))); return e.onMounted((async () => {})), e.onLoad((() => { e.index.showShareMenu() })), (n, o) => { let r, t, s, l, c, d, m; return { a: e.p({ title: e.unref(i).title }), b: e.f(e.unref(a).images, (n, o, i) => ({ a: `1cad2f42-1-${i}`, b: e.p({ 'src': n.url, 'mode': o === 0 ? 'aspectFill' : 'aspectFit', 'lazy-load': !1 }), c: n.id })), c: e.s(e.unref(u)), d: e.o(((...e) => n.changeQuestion && n.changeQuestion(...e))), e: e.t((r = e.unref(a)) == null ? void 0 : r.title), f: e.t((t = e.unref(a)) == null ? void 0 : t.content), g: e.t((s = e.unref(a)) == null ? void 0 : s.talkName), h: e.t(((l = e.unref(a)) == null ? void 0 : l.name) == '' ? '微信昵称' : (c = e.unref(a)) == null ? void 0 : c.name), i: e.t((m = (d = e.unref(a)) == null ? void 0 : d.updatedAt) == null ? void 0 : m.replace('T', ' ')) } }
  },
}; const i = e._export_sfc(o, [['__scopeId', 'data-v-1cad2f42']]); wx.createPage(i)
