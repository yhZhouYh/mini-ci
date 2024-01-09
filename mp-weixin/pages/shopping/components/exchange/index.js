'use strict'; const e = require('../../../../common/vendor.js'); const r = require('../../../../common/assets.js'); const i = require('../../../../store/user/index.js'); require('../../../../store/loading/index.js'); const s = require('../../../../store/login/index.js'); const o = require('../../../../router/index.js'); const t = require('../../../../hooks/usePublicPath/index.js'); require('../../../../api/config/upload.js'), require('../../../../utils/request/index.js'), require('../../../../utils/request/constants.js'), require('../../../../store/setup.js'), require('../../../../utils/login/index.js'), require('../../../../utils/common/storage.js'), require('../../../../api/config/login.js'), require('../../../../api/config/integral.js')

const n = {
  __name: 'index',
  props: { record: { type: Object, defaults: {} } },
  emits: ['exchange', 'privacy'],
  setup(n, { emit: u }) {
    const c = n; const { $publicPath: d } = t.getPublicPath(); const { info: a } = s.useLoginStore(); const { members: p } = i.useUserStore(); return e.ref(null), e.reactive({ visible: !0 }), (i, s) => ({
      a: e.unref(d) + c.record.icon,
      b: e.t(c.record.name),
      c: r._imports_0$4,
      d: e.t(c.record.cost),
      e: e.o((e => (function () {
        if (a.login) { const e = p.current.points >= c.record.cost ? 1 : 0; u('exchange', { type: e, points: c.record.cost, id: c.record.id }) }
        else { u('privacy') }
      }()))),
      f: e.o(((e) => { return r = c.record.id, void o.router.push({ path: '/pages/shopping/details/index', query: { id: r } }); let r })),
    })
  },
}; const u = e._export_sfc(n, [['__scopeId', 'data-v-3af6bd3e']]); wx.createComponent(u)
