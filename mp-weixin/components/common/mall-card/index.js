'use strict'; const t = require('../../../common/vendor.js'); const e = require('../../../router/index.js'); if (require('../../../store/user/index.js'), require('../../../store/loading/index.js'), require('../../../store/login/index.js'), !Array)
  t.resolveComponent('shu-img-loading')()

Math; const i = { __name: 'index', props: { datalist: {} }, emits: ['click'], setup(i, { emit: r }) { const o = i; const l = t.ref([]); t.ref([]), t.ref(0); const n = t.reactive({ leftList: [], rightList: [], leftHeight: 0, rightHeight: 0, columnWidth: 0 }); function s(t, e, i) { let r = Math.floor(i / (e / t)); return r > 240 && (r = '240'), r < 98 && (r = '98'), { height: `${r}`, mode: 'aspectFill', ratio: r / i } } function a(t) { e.router.push({ path: '/pages/index/details/index', query: { id: t.id, ratio: t.ratio } }) } return t.ref(), t.watch(() => o.datalist, (e) => { (e == null ? void 0 : e.length) && (l.value = o.datalist.map((t => ({ ...t, ...s(t.images[0].height, t.images[0].width, 174) }))), (async function () { n.leftHeight = n.rightHeight = 0, n.leftList = [], n.rightList = [], l.value.forEach(((t) => { const e = Number(t.height) + Number(140); n.leftHeight <= n.rightHeight ? (n.leftList.push(t), n.leftHeight += 1 * e) : (n.rightList.push(t), n.rightHeight += 1 * e) })), await t.nextTick$1() }())), t.nextTick$1((() => {})) }, { immediate: !0, deep: !0 }), t.onMounted((() => {})), (e, i) => { let r, o; return { a: t.f((r = t.unref(n)) == null ? void 0 : r.leftList, (e, i, r) => ({ a: `cb74cfb5-0-${r}`, b: t.p({ 'src': e.images[0].url, 'custom-style': { height: `${e.height}px`, width: '100%' }, 'mode': e.mode }), c: t.t(e == null ? void 0 : e.title), d: t.t(e == null ? void 0 : e.talkName), e: t.t(e == null ? void 0 : e.name), f: i, g: t.o(t => a(e), i) })), b: t.f((o = t.unref(n)) == null ? void 0 : o.rightList, (e, i, r) => ({ a: `cb74cfb5-1-${r}`, b: t.p({ 'src': e.images[0].url, 'custom-style': { height: `${e.height}px`, width: '100%' }, 'mode': e.mode }), c: t.t(e == null ? void 0 : e.title), d: t.t(e == null ? void 0 : e.talkName), e: t.t(e == null ? void 0 : e.name), f: i, g: t.o(t => a(e), i) })) } } } }; const r = t._export_sfc(i, [['__scopeId', 'data-v-cb74cfb5']]); wx.createComponent(r)
