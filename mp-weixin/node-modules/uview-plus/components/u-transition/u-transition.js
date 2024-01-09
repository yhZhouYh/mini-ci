'use strict'; const e = require('../../../../common/vendor.js')

const t = { name: 'u-transition', data: () => ({ inited: !1, viewStyle: {}, status: '', transitionEnded: !1, display: !1, classes: '' }), emits: ['click', 'beforeEnter', 'enter', 'afterEnter', 'beforeLeave', 'leave', 'afterLeave'], computed: { mergeStyle() { const { viewStyle: t, customStyle: n } = this; return { transitionDuration: `${this.duration}ms`, transitionTimingFunction: this.timingFunction, ...e.index.$u.addStyle(n), ...t } } }, mixins: [e.mpMixin, e.mixin, e.transition, e.props$20], watch: { show: { handler(e) { e ? this.vueEnter() : this.vueLeave() }, immediate: !0 } } }

const n = e._export_sfc(t, [['render', function (t, n, i, s, r, o) { return e.e({ a: r.inited }, r.inited ? { b: e.o(((...e) => t.clickHandler && t.clickHandler(...e))), c: e.n(r.classes), d: e.s(o.mergeStyle), e: e.o(((...e) => t.noop && t.noop(...e))) } : {}) }], ['__scopeId', 'data-v-bb806228']]); wx.createComponent(n)
