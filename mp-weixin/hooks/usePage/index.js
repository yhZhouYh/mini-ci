'use strict'; const e = require('../../common/vendor.js')

function l(e) { return typeof e == 'number' && !Number.isNaN(e) }exports.usePage = function (u, a) {
  const n = e.ref((a == null ? void 0 : a.page) ?? 1); const r = e.ref((a == null ? void 0 : a.size) ?? 10); const t = e.ref(!1); const v = e.ref(null); const i = e.ref(null); const o = e.ref(!1); return {
    page: n,
    size: r,
    loading: t,
    list: v,
    total: i,
    async getMorePage() {
      if (o.value)
        return; if (Array.isArray(v.value) && l(i.value) && v.value.length >= i.value)
        return; if (l(i.value) && i.value === 0)
        return; if (t.value)
        return; t.value = !0; const e = await u(n.value, r.value); if (o.value = !1, t.value = !1, !e)
        return void (o.value = !0); const s = (e == null ? void 0 : e.list) || []; v.value = n.value === ((a == null ? void 0 : a.page) ?? 1) ? s : v.value.concat(s), i.value = (e == null ? void 0 : e.total) ?? 0, n.value++
    },
    resetPage() { i.value = null, v.value = null, n.value = (a == null ? void 0 : a.page) ?? 1 },
  }
}
