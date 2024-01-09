'use strict'; const e = require('../../../../common/vendor.js'); const t = require('../../../../api/config/integral.js'); require('../../../../store/user/index.js'), require('../../../../store/loading/index.js'); const r = require('../../../../store/login/index.js'); const n = require('../../../../hooks/usePage/index.js'); if (require('../../../../utils/request/index.js'), require('../../../../utils/request/constants.js'), require('../../../../store/setup.js'), require('../../../../utils/login/index.js'), require('../../../../utils/common/storage.js'), require('../../../../api/config/login.js'), !Array)
  e.resolveComponent('shu-public-none')()

const s = () => '../../../../components/common/public-none/index.js'; Math || (i + e.unref(o) + s)(); const i = () => '../exchange/index.js'; const o = () => '../creditslog/index.js'; const c = {
  __name: 'index',
  props: { current: { type: Number, default: 0 } },
  emits: ['privacy', 'exchange', 'current'],
  setup(s, { expose: i, emit: o }) {
    const c = s; const { info: a } = r.useLoginStore(); const u = e.reactive({ list: [], list2: [], content: '暂无数据' }); async function l(e, r) {
      try { const { data: n, page: s } = await t.getlist({ page: { pageAble: !0, pageNum: e, pageSize: r }, data: { status: 2 } }); return { list: n, total: s.totalSize } }
      catch (n) { console.error(n) }
    } async function g(e, r) {
      try { const { data: n, page: s } = await t.getMemberLogList({ pageAble: !0, pageNum: e, pageSize: r }); return { list: n, total: s.totalSize } }
      catch (n) { console.error(n) }
    } const { getMorePage: p, list: d } = n.usePage(l, { page: 0, size: 20 }); p(), u.list2 = d ?? []; const { getMorePage: f, list: m } = n.usePage(g, { page: 1, size: 20 }); function x() { if (c.current === 0) { const { getMorePage: e, list: t } = n.usePage(l, { start_page: 0, page: 0, size: 20 }); e(), u.list2 = t ?? [] } if (c.current === 1 && a.login) { const { getMorePage: e, list: t } = n.usePage(g, { page: 1, size: 20 }); e(), u.list = t ?? [] } } function j() { o('privacy') } function q(e) { o('exchange', e) } return a.login && f(), u.list = m ?? [], e.onReachBottom((() => { c.current === 0 && (p(), u.list2 = d ?? []), c.current === 1 && (f(), u.list = m ?? []) })), e.watch(() => [a.login, c.current], ([e, t], [r, n]) => { !0 !== e && t === n || x() }), e.onPullDownRefresh((() => { x(), e.index.stopPullDownRefresh() })), i({ refresh: x }), (t, r) => { let n, s; return e.e({ a: c.current === 0 }, c.current === 0 ? { b: e.f(e.unref(u).list2, (t, r, n) => ({ a: r, b: e.o(j, r), c: e.o(q, r), d: `dbc7044f-0-${n}`, e: e.p({ record: t }) })) } : {}, { c: c.current == 1 }, c.current == 1 ? { d: e.f((n = e.unref(u)) == null ? void 0 : n.list, (t, r, n) => ({ a: r, b: `dbc7044f-1-${n}`, c: e.p({ record: t }) })), e: e.p({ content: e.unref(u).content, conditions: !((s = e.unref(u)) == null ? void 0 : s.list) }) } : {}) }
  },
}; const a = e._export_sfc(c, [['__scopeId', 'data-v-dbc7044f']]); wx.createComponent(a)
