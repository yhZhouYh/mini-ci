'use strict'; const e = require('../../../common/vendor.js'); const r = require('../../../common/assets.js'); const o = require('../../../api/config/integral.js'); const n = require('../../../store/user/index.js'); require('../../../store/loading/index.js'); const i = require('../../../store/login/index.js'); const s = require('../../../hooks/usePublicPath/index.js'); if (require('../../../utils/request/index.js'), require('../../../utils/request/constants.js'), require('../../../store/setup.js'), require('../../../utils/login/index.js'), require('../../../utils/common/storage.js'), require('../../../api/config/login.js'), require('../../../api/config/upload.js'), !Array)
  (e.resolveComponent('shu-nav-bar') + e.resolveComponent('shu-login-privacy') + e.resolveComponent('shu-loading'))()

Math || ((() => '../../../components/common/nav-bar/index.js') + t + (() => '../../../components/common/login-privacy/index.js') + (() => '../../../components/common/loading/index.js'))(); const t = () => '../components/confirm/index.js'; const c = {
  __name: 'index',
  setup(t) {
    const { $publicPath: c } = s.getPublicPath(); const { info: u } = i.useLoginStore(); const { members: a } = n.useUserStore(); const d = e.ref(null); const l = e.ref(null); const m = e.reactive({ record: {} }); return e.onLoad(((e) => { m.id = e.id, (async function () { const e = await o.getdetails({ id: m.id }); m.record = e }()) })), (o, n) => ({
      a: e.p({ title: e.unref(m).record.name }),
      b: e.unref(c) + e.unref(m).record.icon,
      c: e.t(e.unref(m).record.name),
      d: r._imports_0$4,
      e: e.t(e.unref(m).record.cost),
      f: e.unref(c) + e.unref(m).record.image,
      g: e.o((e => (function () {
        if (u.login) { const e = a.current.points >= m.record.cost ? 1 : 0; l.value.open({ type: e, points: m.record.cost, id: m.record.id }) }
        else { d.value.show() }
      }()))),
      h: e.sr(l, '5da1aefe-1', { k: 'confirmDom' }),
      i: e.sr(d, '5da1aefe-2', { k: 'privacy' }),
    })
  },
}; wx.createPage(c)
