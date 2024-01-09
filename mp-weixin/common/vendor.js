'use strict'; function e(e, t) { const n = Object.create(null); const o = e.split(','); for (let r = 0; r < o.length; r++)n[o[r]] = !0; return t ? e => !!n[e.toLowerCase()] : e => !!n[e] } function t(e) {
  if (v(e)) {
    const n = {}; for (let o = 0; o < e.length; o++) {
      const r = e[o]; const s = x(r) ? i(r) : t(r); if (s)
        for (const e in s)n[e] = s[e]
    } return n
  } return x(e) || P(e) ? e : void 0
} const n = /;(?![^(]*\))/g; const o = /:([^]+)/; const r = /\/\*.*?\*\//gs; function i(e) { const t = {}; return e.replace(r, '').split(n).forEach(((e) => { if (e) { const n = e.split(o); n.length > 1 && (t[n[0].trim()] = n[1].trim()) } })), t } function s(e) {
  let t = ''; if (x(e))
    t = e; else if (v(e))
    for (let n = 0; n < e.length; n++) { const o = s(e[n]); o && (t += `${o} `) } else if (P(e))
    for (const n in e)e[n] && (t += `${n} `); return t.trim()
} const a = (e, t) => t && t.__v_isRef ? a(e, t.value) : w(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n]) => (e[`${t} =>`] = n, e), {}) } : S(t) ? { [`Set(${t.size})`]: [...t.values()] } : !P(t) || v(t) || C(t) ? t : String(t); const c = {}; const l = []; function u() {} const f = () => !1; const p = /^on[^a-z]/; const d = e => p.test(e); const h = e => e.startsWith('onUpdate:'); const g = Object.assign; function m(e, t) { const n = e.indexOf(t); n > -1 && e.splice(n, 1) } const y = Object.prototype.hasOwnProperty; const b = (e, t) => y.call(e, t); const v = Array.isArray; const w = e => O(e) === '[object Map]'; const S = e => O(e) === '[object Set]'; const A = e => typeof e == 'function'; const x = e => typeof e == 'string'; const k = e => typeof e == 'symbol'; const P = e => e !== null && typeof e == 'object'; const T = e => P(e) && A(e.then) && A(e.catch); const E = Object.prototype.toString; const O = e => E.call(e); const I = e => O(e).slice(8, -1); const C = e => O(e) === '[object Object]'; const B = e => x(e) && e !== 'NaN' && e[0] !== '-' && `${Number.parseInt(e, 10)}` === e; const _ = e(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'); function j(e) { const t = Object.create(null); return n => t[n] || (t[n] = e(n)) } const L = /-(\w)/g; const N = j((e => e.replace(L, (e, t) => t ? t.toUpperCase() : ''))); const F = /\B([A-Z])/g; const D = j((e => e.replace(F, '-$1').toLowerCase())); const R = j((e => e.charAt(0).toUpperCase() + e.slice(1))); const U = j((e => e ? `on${R(e)}` : '')); const M = (e, t) => !Object.is(e, t); function q(e, t) { for (let n = 0; n < e.length; n++)e[n](t) } function Q(e, t, n) { Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n }) } function z(e) { const t = Number.parseFloat(e); return isNaN(t) ? e : t } function H(e) { const t = x(e) ? Number(e) : Number.NaN; return isNaN(t) ? e : t } const $ = '\n'; const W = 'd'; const V = 'onShow'; const K = 'onHide'; const J = 'onLaunch'; const G = 'onError'; const X = 'onThemeChange'; const Y = 'onPageNotFound'; const Z = 'onUnhandledRejection'; const ee = 'onLoad'; const te = 'onReady'; const ne = 'onUnload'; const oe = 'onInit'; const re = 'onSaveExitState'; const ie = 'onResize'; const se = 'onBackPress'; const ae = 'onPageScroll'; const ce = 'onTabItemTap'; const le = 'onReachBottom'; const ue = 'onPullDownRefresh'; const fe = 'onShareTimeline'; const pe = 'onAddToFavorites'; const de = 'onShareAppMessage'; const he = 'onNavigationBarButtonTap'; const ge = 'onNavigationBarSearchInputClicked'; const me = 'onNavigationBarSearchInputChanged'; const ye = 'onNavigationBarSearchInputConfirmed'; const be = 'onNavigationBarSearchInputFocusChanged'; const ve = /:/g; function we(e, t) { let n; for (let o = 0; o < e.length; o++)n = e[o](t); return n } function Se(e, t = null) { let n; return (...o) => (e && (n = e.apply(t, o), e = null), n) } function Ae(e, t) {
  if (!x(t))
    return; const n = (t = t.replace(/\[(\d+)\]/g, '.$1')).split('.'); const o = n[0]; return e || (e = {}), n.length === 1 ? e[o] : Ae(e[o], n.slice(1).join('.'))
} function xe(e) { const t = {}; return C(e) && Object.keys(e).sort().forEach(((n) => { const o = n; t[o] = e[o] })), Object.keys(t) ? t : e } const ke = encodeURIComponent; function Pe(e, t = ke) { const n = e ? Object.keys(e).map(((n) => { let o = e[n]; return void 0 === typeof o || o === null ? o = '' : C(o) && (o = JSON.stringify(o)), `${t(n)}=${t(o)}` })).filter((e => e.length > 0)).join('&') : null; return n ? `?${n}` : '' } const Te = [oe, ee, V, K, ne, se, ae, ce, le, ue, fe, de, pe, re, he, ge, me, ye, be]; const Ee = [V, K, J, G, X, Y, Z, oe, ee, te, ne, ie, se, ae, ce, le, ue, fe, pe, de, re, he, ge, me, ye, be]; const Oe = (() => ({ onPageScroll: 1, onShareAppMessage: 2, onShareTimeline: 4 }))(); function Ie(e, t, n = !0) { return !(n && !A(t)) && (Ee.includes(e) || e.indexOf('on') === 0) } let Ce; const Be = []; const _e = Se(((e, t) => {
  if (A(e._component.onError))
    return t(e)
})); const je = function () {}; je.prototype = {
  on(e, t, n) { const o = this.e || (this.e = {}); return (o[e] || (o[e] = [])).push({ fn: t, ctx: n }), this },
  once(e, t, n) { const o = this; function r() { o.off(e, r), t.apply(n, arguments) } return r._ = t, this.on(e, r, n) },
  emit(e) { for (let t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, r = n.length; o < r; o++)n[o].fn.apply(n[o].ctx, t); return this },
  off(e, t) {
    const n = this.e || (this.e = {}); const o = n[e]; const r = []; if (o && t)
      for (let i = 0, s = o.length; i < s; i++)o[i].fn !== t && o[i].fn._ !== t && r.push(o[i]); return r.length ? n[e] = r : delete n[e], this
  },
}; const Le = je; const Ne = ['{', '}']; const Fe = /^(?:\d)+/; const De = /^(?:\w)+/; const Re = 'zh-Hans'; const Ue = 'zh-Hant'; const Me = 'en'; const qe = 'fr'; const Qe = 'es'; const ze = Object.prototype.hasOwnProperty; const He = (e, t) => ze.call(e, t); const $e = new class {
  constructor() { this._caches = Object.create(null) }interpolate(e, t, n = Ne) {
    if (!t)
      return [e]; let o = this._caches[e]; return o || (o = (function (e, [t, n]) {
      const o = []; let r = 0; let i = ''; for (;r < e.length;) {
        let s = e[r++]; if (s === t) { i && o.push({ type: 'text', value: i }), i = ''; let t = ''; for (s = e[r++]; void 0 !== s && s !== n;)t += s, s = e[r++]; const a = s === n; const c = Fe.test(t) ? 'list' : a && De.test(t) ? 'named' : 'unknown'; o.push({ value: t, type: c }) }
        else { i += s }
      } return i && o.push({ type: 'text', value: i }), o
    }(e, n)), this._caches[e] = o), (function (e, t) {
      const n = []; let o = 0; const r = Array.isArray(t) ? 'list' : (i = t, i !== null && typeof i == 'object' ? 'named' : 'unknown'); let i; if (r === 'unknown')
        return n; for (;o < e.length;) { const i = e[o]; switch (i.type) { case 'text':n.push(i.value); break; case 'list':n.push(t[Number.parseInt(i.value, 10)]); break; case 'named':r === 'named' && n.push(t[i.value]) }o++ } return n
    }(o, t))
  }
}(); function We(e, t) {
  if (!e)
    return; if (e = e.trim().replace(/_/g, '-'), t && t[e])
    return e; if ((e = e.toLowerCase()) === 'chinese')
    return Re; if (e.indexOf('zh') === 0)
    return e.includes('-hans') ? Re : e.includes('-hant') ? Ue : (n = e, ['-tw', '-hk', '-mo', '-cht'].find((e => n.includes(e))) ? Ue : Re); let n; let o = [Me, qe, Qe]; t && Object.keys(t).length > 0 && (o = Object.keys(t)); const r = (function (e, t) { return t.find((t => e.indexOf(t) === 0)) }(e, o)); return r || void 0
} class Ve {constructor({ locale: e, fallbackLocale: t, messages: n, watcher: o, formater: r }) { this.locale = Me, this.fallbackLocale = Me, this.message = {}, this.messages = {}, this.watchers = [], t && (this.fallbackLocale = t), this.formater = r || $e, this.messages = n || {}, this.setLocale(e || Me), o && this.watchLocale(o) }setLocale(e) { const t = this.locale; this.locale = We(e, this.messages) || this.fallbackLocale, this.messages[this.locale] || (this.messages[this.locale] = {}), this.message = this.messages[this.locale], t !== this.locale && this.watchers.forEach(((e) => { e(this.locale, t) })) }getLocale() { return this.locale }watchLocale(e) { const t = this.watchers.push(e) - 1; return () => { this.watchers.splice(t, 1) } }add(e, t, n = !0) { const o = this.messages[e]; o ? n ? Object.assign(o, t) : Object.keys(t).forEach(((e) => { He(o, e) || (o[e] = t[e]) })) : this.messages[e] = t }f(e, t, n) { return this.formater.interpolate(e, t, n).join('') }t(e, t, n) { let o = this.message; return typeof t == 'string' ? (t = We(t, this.messages)) && (o = this.messages[t]) : n = t, He(o, e) ? this.formater.interpolate(o[e], n).join('') : (console.warn(`Cannot translate the value of keypath ${e}. Use the value of keypath as default.`), e) }} function Ke(e) {
  return function () {
    try { return e.apply(e, arguments) }
    catch (_c) { console.error(_c) }
  }
} let Je = 1; const Ge = {}; function Xe(e, t, n) {
  if (typeof e == 'number') {
    const o = Ge[e]; if (o)
      return o.keepAlive || delete Ge[e], o.callback(t, n)
  } return t
} const Ye = 'success'; const Ze = 'fail'; const et = 'complete'; function tt(e, t = {}, { beforeAll: n, beforeSuccess: o } = {}) { C(t) || (t = {}); const { success: r, fail: i, complete: s } = (function (e) { const t = {}; for (const n in e) { const o = e[n]; A(o) && (t[n] = Ke(o), delete e[n]) } return t }(t)); const a = A(r); const c = A(i); const l = A(s); const u = Je++; return (function (e, t, n, o = !1) { Ge[e] = { name: t, keepAlive: o, callback: n } }(u, e, (u) => { (u = u || {}).errMsg = (function (e, t) { return e && e.includes(':fail') ? t + e.substring(e.indexOf(':fail')) : `${t}:ok` }(u.errMsg, e)), A(n) && n(u), u.errMsg === `${e}:ok` ? (A(o) && o(u, t), a && r(u)) : c && i(u), l && s(u) })), u } const nt = 'success'; const ot = 'fail'; const rt = 'complete'; const it = {}; const st = {}; function at(e, t) { return function (n) { return e(n, t) || n } } function ct(e, t, n) {
  let o = !1; for (let r = 0; r < e.length; r++) {
    const i = e[r]; if (o) { o = Promise.resolve(at(i, n)) }
    else {
      const e = i(t, n); if (T(e) && (o = Promise.resolve(e)), !1 === e)
        return { then() {}, catch() {} }
    }
  } return o || { then: e => e(t), catch() {} }
} function lt(e, t = {}) {
  return [nt, ot, rt].forEach(((n) => {
    const o = e[n]; if (!v(o))
      return; const r = t[n]; t[n] = function (e) { ct(o, e, t).then((e => A(r) && r(e) || e)) }
  })), t
} function ut(e, t) { const n = []; v(it.returnValue) && n.push(...it.returnValue); const o = st[e]; return o && v(o.returnValue) && n.push(...o.returnValue), n.forEach(((e) => { t = e(t) || t })), t } function ft(e) { const t = Object.create(null); Object.keys(it).forEach(((e) => { e !== 'returnValue' && (t[e] = it[e].slice()) })); const n = st[e]; return n && Object.keys(n).forEach(((e) => { e !== 'returnValue' && (t[e] = (t[e] || []).concat(n[e])) })), t } function pt(e, t, n, o) { const r = ft(e); if (r && Object.keys(r).length) { if (v(r.invoke)) { return ct(r.invoke, n).then((n => t(lt(ft(e), n), ...o))) } return t(lt(r, n), ...o) } return t(n, ...o) } function dt(e, t) { return (n = {}, ...o) => (function (e) { return !(!C(e) || ![Ye, Ze, et].find((t => A(e[t])))) }(n)) ? ut(e, pt(e, t, n, o)) : ut(e, new Promise(((r, i) => { pt(e, t, g(n, { success: r, fail: i }), o) }))) } function ht(e, t, n, o) { return Xe(e, g({ errMsg: `${t}:fail${n ? ` ${n}` : ''}` }, o)) } function gt(e, t, n, o) {
  if (o && o.beforeInvoke) {
    const e = o.beforeInvoke(t); if (x(e))
      return e
  } const r = (function (e, t) {
    const n = e[0]; if (!t || !C(t.formatArgs) && C(n))
      return; const o = t.formatArgs; const r = Object.keys(o); for (let i = 0; i < r.length; i++) {
      const t = r[i]; const s = o[t]; if (A(s)) {
        const o = s(e[0][t], n); if (x(o))
          return o
      }
      else { b(n, t) || (n[t] = s) }
    }
  }(t, o)); if (r)
    return r
} function mt(e, t, n, o) { return (n) => { const r = tt(e, n, o); const i = gt(0, [n], 0, o); return i ? ht(r, e, i) : t(n, { resolve: t => (function (e, t, n) { return Xe(e, g(n || {}, { errMsg: `${t}:ok` })) }(r, e, t)), reject: (t, n) => ht(r, e, (function (e) { return !e || x(e) ? e : e.stack ? (console.error(e.message + $ + e.stack), e.message) : e }(t)), n) }) } } function yt(e, t, n, o) {
  return (function (e, t, n, o) {
    return (...e) => {
      const n = gt(0, e, 0, o); if (n)
        throw new Error(n); return t.apply(null, e)
    }
  }(0, t, 0, o))
} let bt = !1; let vt = 0; let wt = 0; function St() { const { platform: e, pixelRatio: t, windowWidth: n } = wx.getSystemInfoSync(); vt = n, wt = t, bt = e === 'ios' } const At = yt(0, (e, t) => {
  if (vt === 0 && St(), (e = Number(e)) === 0)
    return 0; let n = e / 750 * (t || vt); return n < 0 && (n = -n), n = Math.floor(n + 1e-4), n === 0 && (n = wt !== 1 && bt ? 0.5 : 1), e < 0 ? -n : n
}); function xt(e, t) { Object.keys(t).forEach(((n) => { A(t[n]) && (e[n] = (function (e, t) { const n = t ? e ? e.concat(t) : v(t) ? t : [t] : e; return n ? (function (e) { const t = []; for (let n = 0; n < e.length; n++)!t.includes(e[n]) && t.push(e[n]); return t }(n)) : n }(e[n], t[n]))) })) } function kt(e, t) { e && t && Object.keys(t).forEach(((n) => { const o = e[n]; const r = t[n]; v(o) && A(r) && m(o, r) })) } const Pt = yt(0, (e, t) => { x(e) && C(t) ? xt(st[e] || (st[e] = {}), t) : C(e) && xt(it, e) }); const Tt = yt(0, (e, t) => { x(e) ? C(t) ? kt(st[e], t) : delete st[e] : C(e) && kt(it, e) }); const Et = new Le(); const Ot = yt(0, (e, t) => (Et.on(e, t), () => Et.off(e, t))); const It = yt(0, (e, t) => (Et.once(e, t), () => Et.off(e, t))); const Ct = yt(0, (e, t) => { e ? (v(e) || (e = [e]), e.forEach((e => Et.off(e, t)))) : Et.e = {} }); const Bt = yt(0, (e, ...t) => { Et.emit(e, ...t) }); let _t, jt, Lt; function Nt(e) {
  try { return JSON.parse(e) }
  catch (_c) {} return e
} const Ft = []; function Dt(e, t) { Ft.forEach(((n) => { n(e, t) })), Ft.length = 0 } const Rt = dt(Ut = 'getPushClientId', (function (e, t, n, o) { return mt(e, t, 0, o) }(Ut, (e, { resolve: t, reject: n }) => { Promise.resolve().then((() => { void 0 === Lt && (Lt = !1, _t = '', jt = 'uniPush is not enabled'), Ft.push(((e, o) => { e ? t({ cid: e }) : n(o) })), void 0 !== _t && Dt(_t, jt) })) }, 0, Mt))); let Ut, Mt; const qt = []; const Qt = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/; const zt = /^create|Manager$/; const Ht = ['createBLEConnection']; const $t = ['createBLEConnection']; const Wt = /^on|^off/; function Vt(e) { return zt.test(e) && !Ht.includes(e) } function Kt(e) { return Qt.test(e) && !$t.includes(e) } function Jt(e) { return !(Vt(e) || Kt(e) || (function (e) { return Wt.test(e) && e !== 'onPush' }(e))) } function Gt(e, t) { return Jt(e) && A(t) ? function (n = {}, ...o) { return A(n.success) || A(n.fail) || A(n.complete) ? ut(e, pt(e, t, n, o)) : ut(e, new Promise(((r, i) => { pt(e, t, g({}, n, { success: r, fail: i }), o) }))) } : t }Promise.prototype.finally || (Promise.prototype.finally = function (e) { const t = this.constructor; return this.then(n => t.resolve(e && e()).then((() => n)), n => t.resolve(e && e()).then((() => { throw n }))) }); const Xt = ['success', 'fail', 'cancel', 'complete']; function Yt() { const e = A(getApp) && getApp({ allowDefault: !0 }); return e && e.$vm ? e.$vm.$locale : We(wx.getSystemInfoSync().language) || Me } const Zt = []; typeof global != 'undefined' && (global.getLocale = Yt); const en = '__DC_STAT_UUID'; let tn; function nn(e = wx) { return function (t, n) { tn = tn || e.getStorageSync(en), tn || (tn = `${Date.now()}${Math.floor(1e7 * Math.random())}`, wx.setStorage({ key: en, data: tn })), n.deviceId = tn } } function on(e, t) { if (e.safeArea) { const n = e.safeArea; t.safeAreaInsets = { top: n.top, left: n.left, right: e.windowWidth - n.right, bottom: e.screenHeight - n.bottom } } } function rn(e, t) { let n = e.deviceType || 'phone'; { const e = { ipad: 'pad', windows: 'pc', mac: 'pc' }; const o = Object.keys(e); const r = t.toLocaleLowerCase(); for (let t = 0; t < o.length; t++) { const i = o[t]; if (r.includes(i)) { n = e[i]; break } } } return n } function sn(e) { let t = e; return t && (t = t.toLocaleLowerCase()), t } function an(e) { return Yt ? Yt() : e } function cn(e) { let t = e.hostName || 'WeChat'; return e.environment ? t = e.environment : e.host && e.host.env && (t = e.host.env), t } const ln = { returnValue: (e, t) => { on(e, t), nn()(e, t), (function (e, t) { const { brand: n = '', model: o = '', system: r = '', language: i = '', theme: s, version: a, platform: c, fontSizeSetting: l, SDKVersion: u, pixelRatio: f, deviceOrientation: p } = e; let d = ''; let h = ''; d = r.split(' ')[0] || '', h = r.split(' ')[1] || ''; const m = a; const y = rn(e, o); const b = sn(n); const v = cn(e); const w = p; const S = f; const A = u; const x = i.replace(/_/g, '-'); const k = { appId: '', appName: '', appVersion: '1.0.0', appVersionCode: '100', appLanguage: an(x), uniCompileVersion: '3.8.12', uniRuntimeVersion: '3.8.12', uniPlatform: 'mp-weixin', deviceBrand: b, deviceModel: o, deviceType: y, devicePixelRatio: S, deviceOrientation: w, osName: d.toLocaleLowerCase(), osVersion: h, hostTheme: s, hostVersion: m, hostLanguage: x, hostName: v, hostSDKVersion: A, hostFontSizeSetting: l, windowTop: 0, windowBottom: 0, osLanguage: void 0, osTheme: void 0, ua: void 0, hostPackageName: void 0, browserName: void 0, browserVersion: void 0 }; g(t, k) }(e, t)) } }; const un = ln; const fn = {
  args(e, t) {
    let n = Number.parseInt(e.current); if (isNaN(n))
      return; const o = e.urls; if (!v(o))
      return; const r = o.length; return r ? (n < 0 ? n = 0 : n >= r && (n = r - 1), n > 0 ? (t.current = o[n], t.urls = o.filter(((e, t) => !(t < n) || e !== o[n]))) : t.current = o[0], { indicator: !1, loop: !1 }) : void 0
  },
}; const pn = { args(e, t) { t.alertText = e.title } }; const dn = { returnValue: (e, t) => { const { brand: n, model: o } = e; const r = rn(e, o); const i = sn(n); nn()(e, t), t = xe(g(t, { deviceType: r, deviceBrand: i, deviceModel: o })) } }; const hn = { returnValue: (e, t) => { const { version: n, language: o, SDKVersion: r, theme: i } = e; const s = cn(e); const a = o.replace(/_/g, '-'); t = xe(g(t, { hostVersion: n, hostLanguage: a, hostName: s, hostSDKVersion: r, hostTheme: i, appId: '', appName: '', appVersion: '1.0.0', appVersionCode: '100', appLanguage: an(a) })) } }; const gn = { returnValue: (e, t) => { on(e, t), t = xe(g(t, { windowTop: 0, windowBottom: 0 })) } }; const mn = {
  $on: Ot,
  $off: Ct,
  $once: It,
  $emit: Bt,
  upx2px: At,
  interceptors: {},
  addInterceptor: Pt,
  removeInterceptor: Tt,
  onCreateVueApp(e) {
    if (Ce)
      return e(Ce); Be.push(e)
  },
  invokeCreateVueAppHook(e) { Ce = e, Be.forEach((t => t(e))) },
  getLocale: Yt,
  setLocale: (e) => {
    const t = A(getApp) && getApp(); if (!t)
      return !1; return t.$vm.$locale !== e && (t.$vm.$locale = e, Zt.forEach((t => t({ locale: e }))), !0)
  },
  onLocaleChange: (e) => { !Zt.includes(e) && Zt.push(e) },
  getPushClientId: Rt,
  onPushMessage: (e) => { !qt.includes(e) && qt.push(e) },
  offPushMessage: (e) => {
    if (e) { const t = qt.indexOf(e); t > -1 && qt.splice(t, 1) }
    else { qt.length = 0 }
  },
  invokePushCallback(e) {
    if (e.type === 'enabled') { Lt = !0 }
    else if (e.type === 'clientId') { _t = e.cid, jt = e.errMsg, Dt(_t, e.errMsg) }
    else if (e.type === 'pushMsg') {
      const t = { type: 'receive', data: Nt(e.message) }; for (let e = 0; e < qt.length; e++) {
        if ((0, qt[e])(t), t.stopped)
          break
      }
    }
    else { e.type === 'click' && qt.forEach(((t) => { t({ type: 'click', data: Nt(e.message) }) })) }
  },
}; const yn = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__']; const bn = ['lanDebug', 'router', 'worklet']; const vn = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : null; function wn(e) { return (!vn || vn.scene !== 1154 || !bn.includes(e)) && (yn.includes(e) || typeof wx[e] == 'function') } function Sn() { const e = {}; for (const t in wx)wn(t) && (e[t] = wx[t]); return typeof globalThis != 'undefined' && typeof requireMiniProgram == 'undefined' && (globalThis.wx = e), e } const An = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__']; const xn = (kn = { oauth: ['weixin'], share: ['weixin'], payment: ['wxpay'], push: ['weixin'] }, function ({ service: e, success: t, fail: n, complete: o }) { let r; kn[e] ? (r = { errMsg: 'getProvider:ok', service: e, provider: kn[e] }, A(t) && t(r)) : (r = { errMsg: `getProvider:fail:服务[${e}]不存在` }, A(n) && n(r)), A(o) && o(r) }); let kn; const Pn = Sn(); let Tn = Pn.getAppBaseInfo && Pn.getAppBaseInfo(); Tn || (Tn = Pn.getSystemInfoSync()); const En = Tn ? Tn.host : null; const On = En && En.env === 'SAAASDK' ? Pn.miniapp.shareVideoMessage : Pn.shareVideoMessage; const In = Object.freeze({ __proto__: null, createSelectorQuery() { const e = Pn.createSelectorQuery(); const t = e.in; return e.in = function (e) { return t.call(this, (function (e) { const t = Object.create(null); return An.forEach(((n) => { t[n] = e[n] })), t }(e))) }, e }, getProvider: xn, shareVideoMessage: On }); const Cn = { args(e, t) { e.compressedHeight && !t.compressHeight && (t.compressHeight = e.compressedHeight), e.compressedWidth && !t.compressWidth && (t.compressWidth = e.compressedWidth) } }; const Bn = Object.freeze({ __proto__: null, compressImage: Cn, getAppAuthorizeSetting: { returnValue(e, t) { const { locationReducedAccuracy: n } = e; t.locationAccuracy = 'unsupported', !0 === n ? t.locationAccuracy = 'reduced' : !1 === n && (t.locationAccuracy = 'full') } }, getAppBaseInfo: hn, getDeviceInfo: dn, getSystemInfo: ln, getSystemInfoSync: un, getWindowInfo: gn, previewImage: fn, redirectTo: {}, showActionSheet: pn }); const _n = Sn(); const jn = (function (e, t, n = wx) {
  const o = (function (e) {
    function t(e, t, n) { return function (r) { return t(o(e, r, n)) } } function n(e, n, o = {}, r = {}, i = !1) {
      if (C(n)) {
        const s = !0 === i ? n : {}; A(o) && (o = o(n, s) || {}); for (const a in n) {
          if (b(o, a)) { let t = o[a]; A(t) && (t = t(n[a], n, s)), t ? x(t) ? s[t] = n[a] : C(t) && (s[t.name ? t.name : a] = t.value) : console.warn(`微信小程序 ${e} 暂不支持 ${a}`) }
          else if (Xt.includes(a)) { const o = n[a]; A(o) && (s[a] = t(e, o, r)) }
          else { i || b(s, a) || (s[a] = n[a]) }
        } return s
      } return A(n) && (n = t(e, n, r)), n
    } function o(t, o, r, i = !1) { return A(e.returnValue) && (o = e.returnValue(t, o)), n(t, o, r, {}, i) } return function (t, r) {
      if (!b(e, t))
        return r; const i = e[t]; return i ? function (e, r) { let s = i; A(i) && (s = i(e)); const a = [e = n(t, e, s.args, s.returnValue)]; void 0 !== r && a.push(r); const c = wx[s.name || t].apply(wx, a); return Kt(t) ? o(t, c, s.returnValue, Vt(t)) : c } : function () { console.error(`微信小程序 暂不支持${t}`) }
    }
  }(t)); return new Proxy({}, { get: (t, r) => b(t, r) ? t[r] : b(e, r) ? Gt(r, e[r]) : b(mn, r) ? Gt(r, mn[r]) : Gt(r, o(r, n[r])) })
}(In, Bn, _n)); let Ln; class Nn {
  constructor(e = !1) { this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ln, !e && Ln && (this.index = (Ln.scopes || (Ln.scopes = [])).push(this) - 1) } get active() { return this._active }run(e) {
    if (this._active) {
      const t = Ln; try { return Ln = this, e() }
      finally { Ln = t }
    }
  }

  on() { Ln = this }off() { Ln = this.parent }stop(e) {
    if (this._active) {
      let t, n; for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop(); for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t](); if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0); if (!this.detached && this.parent && !e) { const e = this.parent.scopes.pop(); e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index) } this.parent = void 0, this._active = !1
    }
  }
} function Fn(e) { return new Nn(e) } function Dn() { return Ln } function Rn(e) { const t = new Set(e); return t.w = 0, t.n = 0, t } const Un = e => (e.w & zn) > 0; const Mn = e => (e.n & zn) > 0; const qn = new WeakMap(); let Qn = 0; let zn = 1; const Hn = 30; let $n; const Wn = Symbol(''); const Vn = Symbol(''); class Kn {
  constructor(e, t = null, n) { this.fn = e, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, (function (e, t = Ln) { t && t.active && t.effects.push(e) }(this, n)) }run() {
    if (!this.active)
      return this.fn(); let e = $n; const t = Gn; for (;e;) {
      if (e === this)
        return; e = e.parent
    } try {
      return this.parent = $n, $n = this, Gn = !0, zn = 1 << ++Qn, Qn <= Hn
        ? (({ deps: e }) => {
            if (e.length)
              for (let t = 0; t < e.length; t++)e[t].w |= zn
          })(this)
        : Jn(this), this.fn()
    }
    finally { Qn <= Hn && ((e) => { const { deps: t } = e; if (t.length) { let n = 0; for (let o = 0; o < t.length; o++) { const r = t[o]; Un(r) && !Mn(r) ? r.delete(e) : t[n++] = r, r.w &= ~zn, r.n &= ~zn }t.length = n } })(this), zn = 1 << --Qn, $n = this.parent, Gn = t, this.parent = void 0, this.deferStop && this.stop() }
  }

  stop() { $n === this ? this.deferStop = !0 : this.active && (Jn(this), this.onStop && this.onStop(), this.active = !1) }
} function Jn(e) { const { deps: t } = e; if (t.length) { for (let n = 0; n < t.length; n++)t[n].delete(e); t.length = 0 } } let Gn = !0; const Xn = []; function Yn() { Xn.push(Gn), Gn = !1 } function Zn() { const e = Xn.pop(); Gn = void 0 === e || e } function eo(e, t, n) { if (Gn && $n) { let t = qn.get(e); t || qn.set(e, t = new Map()); let o = t.get(n); o || t.set(n, o = Rn()), to(o) } } function to(e, t) { let n = !1; Qn <= Hn ? Mn(e) || (e.n |= zn, n = !Un(e)) : n = !e.has($n), n && (e.add($n), $n.deps.push(e)) } function no(e, t, n, o, r, i) {
  const s = qn.get(e); if (!s)
    return; let a = []; if (t === 'clear') { a = [...s.values()] }
  else if (n === 'length' && v(e)) { const e = Number(o); s.forEach(((t, n) => { (n === 'length' || n >= e) && a.push(t) })) }
  else { switch (void 0 !== n && a.push(s.get(n)), t) { case 'add':v(e) ? B(n) && a.push(s.get('length')) : (a.push(s.get(Wn)), w(e) && a.push(s.get(Vn))); break; case 'delete':v(e) || (a.push(s.get(Wn)), w(e) && a.push(s.get(Vn))); break; case 'set':w(e) && a.push(s.get(Wn)) } } if (a.length === 1) { a[0] && oo(a[0]) }
  else { const e = []; for (const t of a)t && e.push(...t); oo(Rn(e)) }
} function oo(e, t) { const n = v(e) ? e : [...e]; for (const o of n)o.computed && ro(o); for (const o of n)o.computed || ro(o) } function ro(e, t) { (e !== $n || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run()) } const io = e('__proto__,__v_isRef,__isVue'); const so = new Set(Object.getOwnPropertyNames(Symbol).filter((e => e !== 'arguments' && e !== 'caller')).map((e => Symbol[e])).filter(k)); const ao = ho(); const co = ho(!1, !0); const lo = ho(!0); const uo = fo(); function fo() { const e = {}; return ['includes', 'indexOf', 'lastIndexOf'].forEach(((t) => { e[t] = function (...e) { const n = Go(this); for (let t = 0, r = this.length; t < r; t++)eo(n, 0, `${t}`); const o = n[t](...e); return o === -1 || !1 === o ? n[t](...e.map(Go)) : o } })), ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(((t) => { e[t] = function (...e) { Yn(); const n = Go(this)[t].apply(this, e); return Zn(), n } })), e } function po(e) { const t = Go(this); return eo(t, 0, e), t.hasOwnProperty(e) } function ho(e = !1, t = !1) {
  return function (n, o, r) {
    if (o === '__v_isReactive')
      return !e; if (o === '__v_isReadonly')
      return e; if (o === '__v_isShallow')
      return t; if (o === '__v_raw' && r === (e ? t ? zo : Qo : t ? qo : Mo).get(n))
      return n; const i = v(n); if (!e) {
      if (i && b(uo, o))
        return Reflect.get(uo, o, r); if (o === 'hasOwnProperty')
        return po
    } const s = Reflect.get(n, o, r); return (k(o) ? so.has(o) : io(o)) ? s : (e || eo(n, 0, o), t ? s : nr(s) ? i && B(o) ? s : s.value : P(s) ? e ? $o(s) : Ho(s) : s)
  }
} function go(e = !1) {
  return function (t, n, o, r) {
    let i = t[n]; if (Ko(i) && nr(i) && !nr(o))
      return !1; if (!e && (Jo(o) || Ko(o) || (i = Go(i), o = Go(o)), !v(t) && nr(i) && !nr(o)))
      return i.value = o, !0; const s = v(t) && B(n) ? Number(n) < t.length : b(t, n); const a = Reflect.set(t, n, o, r); return t === Go(r) && (s ? M(o, i) && no(t, 'set', n, o) : no(t, 'add', n, o)), a
  }
} const mo = { get: ao, set: go(), deleteProperty(e, t) { const n = b(e, t); e[t]; const o = Reflect.deleteProperty(e, t); return o && n && no(e, 'delete', t, void 0), o }, has(e, t) { const n = Reflect.has(e, t); return k(t) && so.has(t) || eo(e, 0, t), n }, ownKeys(e) { return eo(e, 0, v(e) ? 'length' : Wn), Reflect.ownKeys(e) } }; const yo = { get: lo, set: (e, t) => !0, deleteProperty: (e, t) => !0 }; const bo = g({}, mo, { get: co, set: go(!0) }); const vo = e => e; const wo = e => Reflect.getPrototypeOf(e); function So(e, t, n = !1, o = !1) { const r = Go(e = e.__v_raw); const i = Go(t); n || (t !== i && eo(r, 0, t), eo(r, 0, i)); const { has: s } = wo(r); const a = o ? vo : n ? Zo : Yo; return s.call(r, t) ? a(e.get(t)) : s.call(r, i) ? a(e.get(i)) : void (e !== r && e.get(t)) } function Ao(e, t = !1) { const n = this.__v_raw; const o = Go(n); const r = Go(e); return t || (e !== r && eo(o, 0, e), eo(o, 0, r)), e === r ? n.has(e) : n.has(e) || n.has(r) } function xo(e, t = !1) { return e = e.__v_raw, !t && eo(Go(e), 0, Wn), Reflect.get(e, 'size', e) } function ko(e) { e = Go(e); const t = Go(this); return wo(t).has.call(t, e) || (t.add(e), no(t, 'add', e, e)), this } function Po(e, t) { t = Go(t); const n = Go(this); const { has: o, get: r } = wo(n); let i = o.call(n, e); i || (e = Go(e), i = o.call(n, e)); const s = r.call(n, e); return n.set(e, t), i ? M(t, s) && no(n, 'set', e, t) : no(n, 'add', e, t), this } function To(e) { const t = Go(this); const { has: n, get: o } = wo(t); let r = n.call(t, e); r || (e = Go(e), r = n.call(t, e)), o && o.call(t, e); const i = t.delete(e); return r && no(t, 'delete', e, void 0), i } function Eo() { const e = Go(this); const t = e.size !== 0; const n = e.clear(); return t && no(e, 'clear', void 0, void 0), n } function Oo(e, t) { return function (n, o) { const r = this; const i = r.__v_raw; const s = Go(i); const a = t ? vo : e ? Zo : Yo; return !e && eo(s, 0, Wn), i.forEach(((e, t) => n.call(o, a(e), a(t), r))) } } function Io(e, t, n) { return function (...o) { const r = this.__v_raw; const i = Go(r); const s = w(i); const a = e === 'entries' || e === Symbol.iterator && s; const c = e === 'keys' && s; const l = r[e](...o); const u = n ? vo : t ? Zo : Yo; return !t && eo(i, 0, c ? Vn : Wn), { next() { const { value: e, done: t } = l.next(); return t ? { value: e, done: t } : { value: a ? [u(e[0]), u(e[1])] : u(e), done: t } }, [Symbol.iterator]() { return this } } } } function Co(e) { return function (...t) { return e !== 'delete' && this } } function Bo() { const e = { get(e) { return So(this, e) }, get size() { return xo(this) }, has: Ao, add: ko, set: Po, delete: To, clear: Eo, forEach: Oo(!1, !1) }; const t = { get(e) { return So(this, e, !1, !0) }, get size() { return xo(this) }, has: Ao, add: ko, set: Po, delete: To, clear: Eo, forEach: Oo(!1, !0) }; const n = { get(e) { return So(this, e, !0) }, get size() { return xo(this, !0) }, has(e) { return Ao.call(this, e, !0) }, add: Co('add'), set: Co('set'), delete: Co('delete'), clear: Co('clear'), forEach: Oo(!0, !1) }; const o = { get(e) { return So(this, e, !0, !0) }, get size() { return xo(this, !0) }, has(e) { return Ao.call(this, e, !0) }, add: Co('add'), set: Co('set'), delete: Co('delete'), clear: Co('clear'), forEach: Oo(!0, !0) }; return ['keys', 'values', 'entries', Symbol.iterator].forEach(((r) => { e[r] = Io(r, !1, !1), n[r] = Io(r, !0, !1), t[r] = Io(r, !1, !0), o[r] = Io(r, !0, !0) })), [e, n, t, o] } const [_o, jo, Lo, No] = Bo(); function Fo(e, t) { const n = t ? e ? No : Lo : e ? jo : _o; return (t, o, r) => o === '__v_isReactive' ? !e : o === '__v_isReadonly' ? e : o === '__v_raw' ? t : Reflect.get(b(n, o) && o in t ? n : t, o, r) } const Do = { get: Fo(!1, !1) }; const Ro = { get: Fo(!1, !0) }; const Uo = { get: Fo(!0, !1) }; const Mo = new WeakMap(); const qo = new WeakMap(); const Qo = new WeakMap(); const zo = new WeakMap(); function Ho(e) { return Ko(e) ? e : Wo(e, !1, mo, Do, Mo) } function $o(e) { return Wo(e, !0, yo, Uo, Qo) } function Wo(e, t, n, o, r) {
  if (!P(e))
    return e; if (e.__v_raw && (!t || !e.__v_isReactive))
    return e; const i = r.get(e); if (i)
    return i; const s = (a = e).__v_skip || !Object.isExtensible(a) ? 0 : (function (e) { switch (e) { case 'Object':case 'Array':return 1; case 'Map':case 'Set':case 'WeakMap':case 'WeakSet':return 2; default:return 0 } }(I(a))); let a; if (s === 0)
    return e; const c = new Proxy(e, s === 2 ? o : n); return r.set(e, c), c
} function Vo(e) { return Ko(e) ? Vo(e.__v_raw) : !(!e || !e.__v_isReactive) } function Ko(e) { return !(!e || !e.__v_isReadonly) } function Jo(e) { return !(!e || !e.__v_isShallow) } function Go(e) { const t = e && e.__v_raw; return t ? Go(t) : e } function Xo(e) { return Q(e, '__v_skip', !0), e } const Yo = e => P(e) ? Ho(e) : e; const Zo = e => P(e) ? $o(e) : e; function er(e) { Gn && $n && to((e = Go(e)).dep || (e.dep = Rn())) } function tr(e, t) { const n = (e = Go(e)).dep; n && oo(n) } function nr(e) { return !(!e || !0 !== e.__v_isRef) } function or(e) { return rr(e, !1) } function rr(e, t) { return nr(e) ? e : new ir(e, t) } class ir {constructor(e, t) { this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? e : Go(e), this._value = t ? e : Yo(e) } get value() { return er(this), this._value } set value(e) { const t = this.__v_isShallow || Jo(e) || Ko(e); e = t ? e : Go(e), M(e, this._rawValue) && (this._rawValue = e, this._value = t ? e : Yo(e), tr(this)) }} function sr(e) { return nr(e) ? e.value : e } const ar = { get: (e, t, n) => sr(Reflect.get(e, t, n)), set: (e, t, n, o) => { const r = e[t]; return nr(r) && !nr(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o) } }; function cr(e) { return Vo(e) ? e : new Proxy(e, ar) } function lr(e) { const t = v(e) ? Array.from({ length: e.length }) : {}; for (const n in e)t[n] = fr(e, n); return t } class ur {constructor(e, t, n) { this._object = e, this._key = t, this._defaultValue = n, this.__v_isRef = !0 } get value() { const e = this._object[this._key]; return void 0 === e ? this._defaultValue : e } set value(e) { this._object[this._key] = e } get dep() { return e = Go(this._object), t = this._key, (n = qn.get(e)) === null || void 0 === n ? void 0 : n.get(t); let e, t, n }} function fr(e, t, n) { const o = e[t]; return nr(o) ? o : new ur(e, t, n) } let pr; class dr {constructor(e, t, n, o) { this._setter = t, this.dep = void 0, this.__v_isRef = !0, this[pr] = !1, this._dirty = !0, this.effect = new Kn(e, () => { this._dirty || (this._dirty = !0, tr(this)) }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n } get value() { const e = Go(this); return er(e), !e._dirty && e._cacheable || (e._dirty = !1, e._value = e.effect.run()), e._value } set value(e) { this._setter(e) }} function hr(e, t, n, o) {
  let r; try { r = o ? e(...o) : e() }
  catch (i) { mr(i, t, n) } return r
} function gr(e, t, n, o) { if (A(e)) { const r = hr(e, t, n, o); return r && T(r) && r.catch(((e) => { mr(e, t, n) })), r } const r = []; for (let i = 0; i < e.length; i++)r.push(gr(e[i], t, n, o)); return r } function mr(e, t, n, o = !0) {
  t && t.vnode; if (t) {
    let o = t.parent; const r = t.proxy; const i = n; for (;o;) {
      const t = o.ec; if (t) {
        for (let n = 0; n < t.length; n++) {
          if (!1 === t[n](e, r, i))
            return
        }
      } o = o.parent
    } const s = t.appContext.config.errorHandler; if (s)
      return void hr(s, null, 10, [e, r, i])
  }!(function (e, t, n, o = !0) { console.error(e) }(e, 0, 0, o))
}pr = '__v_isReadonly'; let yr = !1; let br = !1; const vr = []; let wr = 0; const Sr = []; let Ar = null; let xr = 0; const kr = Promise.resolve(); let Pr = null; function Tr(e) { const t = Pr || kr; return e ? t.then(this ? e.bind(this) : e) : t } function Er(e) { vr.length && vr.includes(e, yr && e.allowRecurse ? wr + 1 : wr) || (e.id == null ? vr.push(e) : vr.splice((function (e) { let t = wr + 1; let n = vr.length; for (;t < n;) { const o = t + n >>> 1; Br(vr[o]) < e ? t = o + 1 : n = o } return t }(e.id)), 0, e), Or()) } function Or() { yr || br || (br = !0, Pr = kr.then(jr)) } function Ir(e) { v(e) ? Sr.push(...e) : Ar && Ar.includes(e, e.allowRecurse ? xr + 1 : xr) || Sr.push(e), Or() } function Cr(e, t = (yr ? wr + 1 : 0)) { for (;t < vr.length; t++) { const e = vr[t]; e && e.pre && (vr.splice(t, 1), t--, e()) } } const Br = e => e.id == null ? 1 / 0 : e.id; function _r(e, t) {
  const n = Br(e) - Br(t); if (n === 0) {
    if (e.pre && !t.pre)
      return -1; if (t.pre && !e.pre)
      return 1
  } return n
} function jr(e) {
  br = !1, yr = !0, vr.sort(_r); try { for (wr = 0; wr < vr.length; wr++) { const e = vr[wr]; e && !1 !== e.active && hr(e, null, 14) } }
  finally {
    wr = 0, vr.length = 0, (function (e) {
      if (Sr.length) {
        const e = [...new Set(Sr)]; if (Sr.length = 0, Ar)
          return void Ar.push(...e); for (Ar = e, Ar.sort(((e, t) => Br(e) - Br(t))), xr = 0; xr < Ar.length; xr++)Ar[xr](); Ar = null, xr = 0
      }
    }()), yr = !1, Pr = null, (vr.length || Sr.length) && jr()
  }
} function Lr(e, t, ...n) {
  if (e.isUnmounted)
    return; const o = e.vnode.props || c; let r = n; const i = t.startsWith('update:'); const s = i && t.slice(7); if (s && s in o) { const e = `${s === 'modelValue' ? 'model' : s}Modifiers`; const { number: t, trim: i } = o[e] || c; i && (r = n.map((e => x(e) ? e.trim() : e))), t && (r = n.map(z)) } let a; let l = o[a = U(t)] || o[a = U(N(t))]; !l && i && (l = o[a = U(D(t))]), l && gr(l, e, 6, r); const u = o[`${a}Once`]; if (u) {
    if (e.emitted) {
      if (e.emitted[a])
        return
    }
    else { e.emitted = {} }e.emitted[a] = !0, gr(u, e, 6, r)
  }
} function Nr(e, t, n = !1) {
  const o = t.emitsCache; const r = o.get(e); if (void 0 !== r)
    return r; const i = e.emits; const s = {}; let a = !1; if (!A(e)) { const o = (e) => { const n = Nr(e, t, !0); n && (a = !0, g(s, n)) }; !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o) } return i || a ? (v(i) ? i.forEach((e => s[e] = null)) : g(s, i), P(e) && o.set(e, s), s) : (P(e) && o.set(e, null), null)
} function Fr(e, t) { return !(!e || !d(t)) && (t = t.slice(2).replace(/Once$/, ''), b(e, t[0].toLowerCase() + t.slice(1)) || b(e, D(t)) || b(e, t)) } let Dr = null; function Rr(e) { const t = Dr; return Dr = e, e && e.type.__scopeId, t } function Ur(e, t, n = !1) {
  const o = Qi || Dr; if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides; if (r && e in r)
      return r[e]; if (arguments.length > 1)
      return n && A(t) ? t.call(o.proxy) : t
  }
} const Mr = {}; function qr(e, t, n) { return Qr(e, t, n) } function Qr(e, t, { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: s } = c) {
  const a = Dn() === (Qi == null ? void 0 : Qi.scope) ? Qi : null; let l; let f; let p = !1; let d = !1; if (nr(e)
    ? (l = () => e.value, p = Jo(e))
    : Vo(e)
      ? (l = () => e, o = !0)
      : v(e)
        ? (d = !0, p = e.some((e => Vo(e) || Jo(e))), l = () => e.map((e => nr(e) ? e.value : Vo(e) ? $r(e) : A(e) ? hr(e, a, 2) : void 0)))
        : l = A(e)
          ? t
            ? () => hr(e, a, 2)
            : () => {
                if (!a || !a.isUnmounted)
                  return f && f(), gr(e, a, 3, [h])
              }
          : u, t && o) { const e = l; l = () => $r(e()) } let h = (e) => { f = w.onStop = () => { hr(e, a, 4) } }; let g = d ? Array.from({ length: e.length }).fill(Mr) : Mr; const y = () => {
    if (w.active) {
      if (t) { const e = w.run(); (o || p || (d ? e.some(((e, t) => M(e, g[t]))) : M(e, g))) && (f && f(), gr(t, a, 3, [e, g === Mr ? void 0 : d && g[0] === Mr ? [] : g, h]), g = e) }
      else { w.run() }
    }
  }; let b; y.allowRecurse = !!t, r === 'sync' ? b = y : r === 'post' ? b = () => Fi(y, a && a.suspense) : (y.pre = !0, a && (y.id = a.uid), b = () => Er(y)); const w = new Kn(l, b); t ? n ? y() : g = w.run() : r === 'post' ? Fi(w.run.bind(w), a && a.suspense) : w.run(); return () => { w.stop(), a && a.scope && m(a.scope.effects, w) }
} function zr(e, t, n) { const o = this.proxy; const r = x(e) ? e.includes('.') ? Hr(o, e) : () => o[e] : e.bind(o, o); let i; A(t) ? i = t : (i = t.handler, n = t); const s = Qi; Hi(this); const a = Qr(r, i.bind(o), n); return s ? Hi(s) : $i(), a } function Hr(e, t) { const n = t.split('.'); return () => { let t = e; for (let e = 0; e < n.length && t; e++)t = t[n[e]]; return t } } function $r(e, t) {
  if (!P(e) || e.__v_skip)
    return e; if ((t = t || new Set()).has(e))
    return e; if (t.add(e), nr(e))
    $r(e.value, t); else if (v(e))
    for (let n = 0; n < e.length; n++)$r(e[n], t); else if (S(e) || w(e))
    e.forEach(((e) => { $r(e, t) })); else if (C(e))
    for (const n in e)$r(e[n], t); return e
} const Wr = e => e.type.__isKeepAlive; function Vr(e, t) { Jr(e, 'a', t) } function Kr(e, t) { Jr(e, 'da', t) } function Jr(e, t, n = Qi) {
  const o = e.__wdc || (e.__wdc = () => {
    let t = n; for (;t;) {
      if (t.isDeactivated)
        return; t = t.parent
    } return e()
  }); if (Xr(t, o, n), n) { let e = n.parent; for (;e && e.parent;)Wr(e.parent.vnode) && Gr(o, t, n, e), e = e.parent }
} function Gr(e, t, n, o) { const r = Xr(t, e, o, !0); ri(() => { m(o[t], r) }, n) } function Xr(e, t, n = Qi, o = !1) {
  if (n) {
    (function (e) { return Te.includes(e) })(e) && (n = n.root); const r = n[e] || (n[e] = []); const i = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return; Yn(), Hi(n); const r = gr(t, n, e, o); return $i(), Zn(), r
    }); return o ? r.unshift(i) : r.push(i), i
  }
} const Yr = e => (t, n = Qi) => (!Vi || e === 'sp') && Xr(e, (...e) => t(...e), n); const Zr = Yr('bm'); const ei = Yr('m'); const ti = Yr('bu'); const ni = Yr('u'); const oi = Yr('bum'); const ri = Yr('um'); const ii = Yr('sp'); const si = Yr('rtg'); const ai = Yr('rtc'); function ci(e, t = Qi) { Xr('ec', e, t) } const li = 'components'; function ui(e, t) { return e && (e[t] || e[N(t)] || e[R(N(t))]) } const fi = e => e ? Wi(e) ? Gi(e) || e.proxy : fi(e.parent) : null; const pi = g(Object.create(null), { $: e => e, $el: e => e.__$el || (e.__$el = {}), $data: e => e.data, $props: e => e.props, $attrs: e => e.attrs, $slots: e => e.slots, $refs: e => e.refs, $parent: e => fi(e.parent), $root: e => fi(e.root), $emit: e => e.emit, $options: e => vi(e), $forceUpdate: e => e.f || (e.f = () => Er(e.update)), $watch: e => zr.bind(e) }); const di = (e, t) => e !== c && !e.__isScriptSetup && b(e, t); const hi = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: a, appContext: l } = e; let u; if (t[0] !== '$') {
      const a = s[t]; if (void 0 !== a) { switch (a) { case 1:return o[t]; case 2:return r[t]; case 4:return n[t]; case 3:return i[t] } }
      else {
        if (di(o, t))
          return s[t] = 1, o[t]; if (r !== c && b(r, t))
          return s[t] = 2, r[t]; if ((u = e.propsOptions[0]) && b(u, t))
          return s[t] = 3, i[t]; if (n !== c && b(n, t))
          return s[t] = 4, n[t]; gi && (s[t] = 0)
      }
    } const f = pi[t]; let p, d; return f ? (t === '$attrs' && eo(e, 0, t), f(e)) : (p = a.__cssModules) && (p = p[t]) ? p : n !== c && b(n, t) ? (s[t] = 4, n[t]) : (d = l.config.globalProperties, b(d, t) ? d[t] : void 0)
  },
  set({ _: e }, t, n) { const { data: o, setupState: r, ctx: i } = e; return di(r, t) ? (r[t] = n, !0) : o !== c && b(o, t) ? (o[t] = n, !0) : !b(e.props, t) && ((t[0] !== '$' || !(t.slice(1) in e)) && (i[t] = n, !0)) },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i } }, s) { let a; return !!n[s] || e !== c && b(e, s) || di(t, s) || (a = i[0]) && b(a, s) || b(o, s) || b(pi, s) || b(r.config.globalProperties, s) },
  defineProperty(e, t, n) { return n.get != null ? e._.accessCache[t] = 0 : b(n, 'value') && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n) },
}; let gi = !0; function mi(e) {
  const t = vi(e); const n = e.proxy; const o = e.ctx; gi = !1, t.beforeCreate && yi(t.beforeCreate, e, 'bc'); const { data: r, computed: i, methods: s, watch: a, provide: c, inject: l, created: f, beforeMount: p, mounted: d, beforeUpdate: h, updated: g, activated: m, deactivated: y, beforeDestroy: b, beforeUnmount: w, destroyed: S, unmounted: x, render: k, renderTracked: T, renderTriggered: E, errorCaptured: O, serverPrefetch: I, expose: C, inheritAttrs: B, components: _, directives: j, filters: L } = t; if (l && (function (e, t, n = u, o = !1) { v(e) && (e = xi(e)); for (const r in e) { const n = e[r]; let i; i = P(n) ? 'default' in n ? Ur(n.from || r, n.default, !0) : Ur(n.from || r) : Ur(n), nr(i) && o ? Object.defineProperty(t, r, { enumerable: !0, configurable: !0, get: () => i.value, set: e => i.value = e }) : t[r] = i } }(l, o, null, e.appContext.config.unwrapInjectedRef)), s)
    for (const u in s) { const e = s[u]; A(e) && (o[u] = e.bind(n)) } if (r) { const t = r.call(n, n); P(t) && (e.data = Ho(t)) } if (gi = !0, i)
    for (const v in i) { const e = i[v]; const t = A(e) ? e.bind(n, n) : A(e.get) ? e.get.bind(n, n) : u; const r = !A(e) && A(e.set) ? e.set.bind(n) : u; const s = Xi({ get: t, set: r }); Object.defineProperty(o, v, { enumerable: !0, configurable: !0, get: () => s.value, set: e => s.value = e }) } if (a)
    for (const u in a)bi(a[u], o, n, u); if (c) { const e = A(c) ? c.call(n) : c; Reflect.ownKeys(e).forEach(((t) => { !(function (e, t) { if (Qi) { let n = Qi.provides; const o = Qi.parent && Qi.parent.provides; o === n && (n = Qi.provides = Object.create(o)), n[e] = t, Qi.type.mpType === 'app' && Qi.appContext.app.provide(e, t) } }(t, e[t])) })) } function N(e, t) { v(t) ? t.forEach((t => e(t.bind(n)))) : t && e(t.bind(n)) } if (f && yi(f, e, 'c'), N(Zr, p), N(ei, d), N(ti, h), N(ni, g), N(Vr, m), N(Kr, y), N(ci, O), N(ai, T), N(si, E), N(oi, w), N(ri, x), N(ii, I), v(C)) {
    if (C.length) { const t = e.exposed || (e.exposed = {}); C.forEach(((e) => { Object.defineProperty(t, e, { get: () => n[e], set: t => n[e] = t }) })) }
    else { e.exposed || (e.exposed = {}) }
  }k && e.render === u && (e.render = k), B != null && (e.inheritAttrs = B), _ && (e.components = _), j && (e.directives = j), e.ctx.$onApplyOptions && e.ctx.$onApplyOptions(t, e, n)
} function yi(e, t, n) { gr(v(e) ? e.map((e => e.bind(t.proxy))) : e.bind(t.proxy), t, n) } function bi(e, t, n, o) {
  const r = o.includes('.') ? Hr(n, o) : () => n[o]; if (x(e)) { const n = t[e]; A(n) && qr(r, n) }
  else if (A(e)) { qr(r, e.bind(n)) }
  else if (P(e)) {
    if (v(e)) { e.forEach((e => bi(e, t, n, o))) }
    else { const o = A(e.handler) ? e.handler.bind(n) : t[e.handler]; A(o) && qr(r, o, e) }
  }
} function vi(e) { const t = e.type; const { mixins: n, extends: o } = t; const { mixins: r, optionsCache: i, config: { optionMergeStrategies: s } } = e.appContext; const a = i.get(t); let c; return a ? c = a : r.length || n || o ? (c = {}, r.length && r.forEach((e => wi(c, e, s, !0))), wi(c, t, s)) : c = t, P(t) && i.set(t, c), c } function wi(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t; i && wi(e, i, n, !0), r && r.forEach((t => wi(e, t, n, !0))); for (const s in t) {
    if (o && s === 'expose') { ; }
    else { const o = Si[s] || n && n[s]; e[s] = o ? o(e[s], t[s]) : t[s] }
  } return e
} const Si = {
  data: Ai,
  props: Pi,
  emits: Pi,
  methods: Pi,
  computed: Pi,
  beforeCreate: ki,
  created: ki,
  beforeMount: ki,
  mounted: ki,
  beforeUpdate: ki,
  updated: ki,
  beforeDestroy: ki,
  beforeUnmount: ki,
  destroyed: ki,
  unmounted: ki,
  activated: ki,
  deactivated: ki,
  errorCaptured: ki,
  serverPrefetch: ki,
  components: Pi,
  directives: Pi,
  watch(e, t) {
    if (!e)
      return t; if (!t)
      return e; const n = g(Object.create(null), e); for (const o in t)n[o] = ki(e[o], t[o]); return n
  },
  provide: Ai,
  inject(e, t) { return Pi(xi(e), xi(t)) },
}; function Ai(e, t) { return t ? e ? function () { return g(A(e) ? e.call(this, this) : e, A(t) ? t.call(this, this) : t) } : t : e } function xi(e) { if (v(e)) { const t = {}; for (let n = 0; n < e.length; n++)t[e[n]] = e[n]; return t } return e } function ki(e, t) { return e ? [...new Set([].concat(e, t))] : t } function Pi(e, t) { return e ? g(g(Object.create(null), e), t) : t } function Ti(e, t, n, o = !1) { const r = {}; const i = {}; e.propsDefaults = Object.create(null), Ei(e, t, r, i); for (const s in e.propsOptions[0])s in r || (r[s] = void 0); n ? e.props = o ? r : Wo(r, !1, bo, Ro, qo) : e.type.props ? e.props = r : e.props = i, e.attrs = i } function Ei(e, t, n, o) {
  const [r, i] = e.propsOptions; let s; let a = !1; if (t) {
    for (const c in t) {
      if (_(c))
        continue; const l = t[c]; let u; r && b(r, u = N(c)) ? i && i.includes(u) ? (s || (s = {}))[u] = l : n[u] = l : Fr(e.emitsOptions, c) || c in o && l === o[c] || (o[c] = l, a = !0)
    }
  } if (i) { const t = Go(n); const o = s || c; for (let s = 0; s < i.length; s++) { const a = i[s]; n[a] = Oi(r, t, a, o[a], e, !b(o, a)) } } return a
} function Oi(e, t, n, o, r, i) {
  const s = e[n]; if (s != null) {
    const e = b(s, 'default'); if (e && void 0 === o) {
      const e = s.default; if (s.type !== Function && A(e)) { const { propsDefaults: i } = r; n in i ? o = i[n] : (Hi(r), o = i[n] = e.call(null, t), $i()) }
      else { o = e }
    }s[0] && (i && !e ? o = !1 : !s[1] || o !== '' && o !== D(n) || (o = !0))
  } return o
} function Ii(e, t, n = !1) {
  const o = t.propsCache; const r = o.get(e); if (r)
    return r; const i = e.props; const s = {}; const a = []; let u = !1; if (!A(e)) { const o = (e) => { u = !0; const [n, o] = Ii(e, t, !0); g(s, n), o && a.push(...o) }; !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o) } if (!i && !u)
    return P(e) && o.set(e, l), l; if (v(i))
    for (let l = 0; l < i.length; l++) { const e = N(i[l]); Ci(e) && (s[e] = c) } else if (i)
    for (const c in i) { const e = N(c); if (Ci(e)) { const t = i[c]; const n = s[e] = v(t) || A(t) ? { type: t } : Object.assign({}, t); if (n) { const t = ji(Boolean, n.type); const o = ji(String, n.type); n[0] = t > -1, n[1] = o < 0 || t < o, (t > -1 || b(n, 'default')) && a.push(e) } } } const f = [s, a]; return P(e) && o.set(e, f), f
} function Ci(e) { return e[0] !== '$' } function Bi(e) { const t = e && e.toString().match(/^\s*(function|class) (\w+)/); return t ? t[2] : e === null ? 'null' : '' } function _i(e, t) { return Bi(e) === Bi(t) } function ji(e, t) { return v(t) ? t.findIndex((t => _i(t, e))) : A(t) && _i(t, e) ? 0 : -1 } function Li() { return { app: null, config: { isNativeTag: f, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: Object.create(null), optionsCache: new WeakMap(), propsCache: new WeakMap(), emitsCache: new WeakMap() } } let Ni = 0; const Fi = Ir; const Di = '__vInternal'; function Ri(e) { return e ? Vo(t = e) || Ko(t) || Di in e ? g({}, e) : e : null; let t } const Ui = Li(); let Mi = 0; function qi(e, t, n) { const o = e.type; const r = (t ? t.appContext : e.appContext) || Ui; const i = { uid: Mi++, vnode: e, type: o, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, scope: new Nn(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Ii(o, r), emitsOptions: Nr(o, r), emit: null, emitted: null, propsDefaults: c, inheritAttrs: o.inheritAttrs, ctx: c, data: c, props: c, attrs: c, slots: c, refs: c, setupState: c, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null }; return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Lr.bind(null, i), e.ce && e.ce(i), i } let Qi = null; const zi = () => Qi || Dr; function Hi(e) { Qi = e, e.scope.on() } function $i() { Qi && Qi.scope.off(), Qi = null } function Wi(e) { return 4 & e.vnode.shapeFlag } let Vi = !1; function Ki(e, t = !1) {
  Vi = t; const { props: n } = e.vnode; const o = Wi(e); Ti(e, n, o, t); const r = o
    ? (function (e, t) {
        const n = e.type; e.accessCache = Object.create(null), e.proxy = Xo(new Proxy(e.ctx, hi)); const { setup: o } = n; if (o) { const t = e.setupContext = o.length > 1 ? (function (e) { const t = (t) => { e.exposed = t || {} }; let n; return { get attrs() { return n || (n = (function (e) { return new Proxy(e.attrs, { get: (t, n) => (eo(e, 0, '$attrs'), t[n]) }) }(e))) }, slots: e.slots, emit: e.emit, expose: t } }(e)) : null; Hi(e), Yn(); const n = hr(o, e, 0, [e.props, t]); Zn(), $i(), T(n) ? n.then($i, $i) : (function (e, t, n) { A(t) ? e.render = t : P(t) && (e.setupState = cr(t)); Ji(e) }(e, n)) }
        else { Ji(e) }
      }(e))
    : void 0; return Vi = !1, r
} function Ji(e, t, n) { const o = e.type; e.render || (e.render = o.render || u), Hi(e), Yn(), mi(e), Zn(), $i() } function Gi(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(cr(Xo(e.exposed)), { get: (t, n) => n in t ? t[n] : e.proxy[n], has: (e, t) => t in e || t in pi }))
} const Xi = (e, t) => (function (e, t, n = !1) { let o, r; const i = A(e); return i ? (o = e, r = u) : (o = e.get, r = e.set), new dr(o, r, i || !r, n) }(e, 0, Vi)); const Yi = '3.2.47'; function Zi(e) { return sr(e) } const es = '[object Array]'; const ts = '[object Object]'; function ns(e, t) { const n = {}; return os(e, t), rs(e, t, '', n), n } function os(e, t) {
  if ((e = Zi(e)) === t)
    return; const n = O(e); const o = O(t); if (n == ts && o == ts)
    for (const r in t) { const n = e[r]; void 0 === n ? e[r] = null : os(n, t[r]) } else n == es && o == es && e.length >= t.length && t.forEach(((t, n) => { os(e[n], t) }))
} function rs(e, t, n, o) {
  if ((e = Zi(e)) === t)
    return; const r = O(e); const i = O(t); if (r == ts) {
    if (i != ts || Object.keys(e).length < Object.keys(t).length) { is(o, n, e) }
    else {
      for (const s in e) {
        const r = Zi(e[s]); const i = t[s]; const a = O(r); const c = O(i); if (a != es && a != ts) { r != i && is(o, (n == '' ? '' : `${n}.`) + s, r) }
        else if (a == es) { c != es || r.length < i.length ? is(o, (n == '' ? '' : `${n}.`) + s, r) : r.forEach(((e, t) => { rs(e, i[t], `${(n == '' ? '' : `${n}.`) + s}[${t}]`, o) })) }
        else if (a == ts) {
          if (c != ts || Object.keys(r).length < Object.keys(i).length)
            is(o, (n == '' ? '' : `${n}.`) + s, r); else for (const e in r)rs(r[e], i[e], `${(n == '' ? '' : `${n}.`) + s}.${e}`, o)
        }
      }
    }
  }
  else { r == es ? i != es || e.length < t.length ? is(o, n, e) : e.forEach(((e, r) => { rs(e, t[r], `${n}[${r}]`, o) })) : is(o, n, e) }
} function is(e, t, n) { e[t] = n } function ss(e) { const t = e.ctx.__next_tick_callbacks; if (t && t.length) { const e = t.slice(0); t.length = 0; for (let t = 0; t < e.length; t++)e[t]() } } function as(e, t) {
  const n = e.ctx; if (!n.__next_tick_pending && !(function (e) { return vr.includes(e.update) }(e)))
    return Tr(t && t.bind(e.proxy)); let o; return n.__next_tick_callbacks || (n.__next_tick_callbacks = []), n.__next_tick_callbacks.push((() => { t ? hr(t.bind(e.proxy), e, 14) : o && o(e.proxy) })), new Promise(((e) => { o = e }))
} function cs(e, t) {
  const n = typeof (e = Zi(e)); if (n === 'object' && e !== null) {
    let n = t.get(e); if (void 0 !== n)
      return n; if (v(e)) { const o = e.length; n = new Array(o), t.set(e, n); for (let r = 0; r < o; r++)n[r] = cs(e[r], t) }
    else { n = {}, t.set(e, n); for (const o in e)b(e, o) && (n[o] = cs(e[o], t)) } return n
  } if (n !== 'symbol')
    return e
} function ls(e) { return cs(e, typeof WeakMap != 'undefined' ? new WeakMap() : new Map()) } function us(e, t, n) {
  if (!t)
    return; t = ls(t); const o = e.ctx; const r = o.mpType; if (r === 'page' || r === 'component') { t.r0 = 1; const r = o.$scope; const i = Object.keys(t); const s = ns(t, n || (function (e, t) { const n = e.data; const o = Object.create(null); return t.forEach(((e) => { o[e] = n[e] })), o }(r, i))); Object.keys(s).length ? (o.__next_tick_pending = !0, r.setData(s, () => { o.__next_tick_pending = !1, ss(e) }), Cr()) : ss(e) }
} function fs(e, t, n) { t.appContext.config.globalProperties.$applyOptions(e, t, n); const o = e.computed; if (o) { const e = Object.keys(o); if (e.length) { const n = t.ctx; n.$computedKeys || (n.$computedKeys = []), n.$computedKeys.push(...e) } } delete t.ctx.$onApplyOptions } function ps(e, t = !1) {
  const { setupState: n, $templateRefs: o, ctx: { $scope: r, $mpPlatform: i } } = e; if (i === 'mp-alipay')
    return; if (!o || !r)
    return; if (t)
    return o.forEach((e => ds(e, null, n))); const s = i === 'mp-baidu' || i === 'mp-toutiao'; const a = (e) => { const t = (r.selectAllComponents('.r') || []).concat(r.selectAllComponents('.r-i-f') || []); return e.filter(((e) => { const o = (function (e, t) { const n = e.find((e => e && (e.properties || e.props).uI === t)); if (n) { const e = n.$vm; return e ? Gi(e.$) || e : (function (e) { P(e) && Xo(e); return e }(n)) } return null }(t, e.i)); return !(!s || o !== null) || (ds(e, o, n), !1) })) }; const c = () => { const t = a(o); t.length && e.proxy && e.proxy.$scope && e.proxy.$scope.setData({ r1: 1 }, () => { a(t) }) }; r._$setRef ? r._$setRef(c) : as(e, c)
} function ds({ r: e, f: t }, n, o) {
  if (A(e)) { e(n, {}) }
  else {
    const r = x(e); const i = nr(e); if (r || i) {
      if (t) {
        if (!i)
          return; v(e.value) || (e.value = []); const t = e.value; if (!t.includes(n)) {
          if (t.push(n), !n)
            return; oi(() => m(t, n), n.$)
        }
      }
      else { r ? b(o, e) && (o[e] = n) : nr(e) && (e.value = n) }
    }
  }
} let hs, gs; (gs = hs || (hs = {})).APP = 'app', gs.PAGE = 'page', gs.COMPONENT = 'component'; const ms = Ir; function ys(e, t) {
  const n = e.component = qi(e, t.parentComponent, null); return n.ctx.$onApplyOptions = fs, n.ctx.$children = [], t.mpType === 'app' && (n.render = u), t.onBeforeSetup && t.onBeforeSetup(n, t), Ki(n), t.parentComponent && n.proxy && t.parentComponent.ctx.$children.push(Gi(n) || n.proxy), (function (e) {
    const t = As.bind(e); e.$updateScopedSlots = () => Tr((() => Er(t))); const n = () => {
      if (e.isMounted) { const { next: t, bu: n, u: o } = e; xs(e, !1), Ss(), n && q(n), xs(e, !0), us(e, vs(e)), o && ms(o) }
      else { oi(() => { ps(e, !0) }, e), us(e, vs(e)) }
    }; const o = e.effect = new Kn(n, () => Er(e.update), e.scope); const r = e.update = o.run.bind(o); r.id = e.uid, xs(e, !0), r()
  }(n)), n.proxy
} function bs(e) { let t; for (const n in e)(n === 'class' || n === 'style' || d(n)) && ((t || (t = {}))[n] = e[n]); return t } function vs(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: i, propsOptions: [s], slots: a, attrs: c, emit: l, render: u, renderCache: f, data: p, setupState: d, ctx: h, uid: g, appContext: { app: { config: { globalProperties: { pruneComponentPropsCache: m } } } }, inheritAttrs: y } = e; let b; e.$templateRefs = [], e.$ei = 0, m(g), e.__counter = e.__counter === 0 ? 1 : 0; const v = Rr(e); try {
    if (4 & n.shapeFlag) { ws(y, i, s, c); const e = r || o; b = u.call(e, e, f, i, d, p, h) }
    else { ws(y, i, s, t.props ? c : bs(c)); const e = t; b = e.length > 1 ? e(i, { attrs: c, slots: a, emit: l }) : e(i, null) }
  }
  catch (w) { mr(w, e, 1), b = !1 } return ps(e), Rr(v), b
} function ws(e, t, n, o) {
  if (t && o && !1 !== e) {
    const e = Object.keys(o).filter((e => e !== 'class' && e !== 'style')); if (!e.length)
      return; n && e.some(h) ? e.forEach(((e) => { h(e) && e.slice(9) in n || (t[e] = o[e]) })) : e.forEach((e => t[e] = o[e]))
  }
} function Ss(e) { Yn(), Cr(), Zn() } function As() {
  const e = this.$scopedSlotsData; if (!e || e.length === 0)
    return; const t = this.ctx.$scope; const n = t.data; const o = Object.create(null); e.forEach((({ path: e, index: t, data: r }) => {
    const i = Ae(n, e); const s = x(t) ? `${e}.${t}` : `${e}[${t}]`; if (void 0 === i || void 0 === i[t]) { o[s] = r }
    else { const e = ns(r, i[t]); Object.keys(e).forEach(((t) => { o[`${s}.${t}`] = e[t] })) }
  })), e.length = 0, Object.keys(o).length && t.setData(o)
} function xs({ effect: e, update: t }, n) { e.allowRecurse = t.allowRecurse = n } const ks = function (e, t = null) { A(e) || (e = Object.assign({}, e)), t == null || P(t) || (t = null); const n = Li(); const o = new Set(); const r = n.app = { _uid: Ni++, _component: e, _props: t, _container: null, _context: n, _instance: null, version: Yi, get config() { return n.config }, set config(e) {}, use: (e, ...t) => (o.has(e) || (e && A(e.install) ? (o.add(e), e.install(r, ...t)) : A(e) && (o.add(e), e(r, ...t))), r), mixin: e => (n.mixins.includes(e) || n.mixins.push(e), r), component: (e, t) => t ? (n.components[e] = t, r) : n.components[e], directive: (e, t) => t ? (n.directives[e] = t, r) : n.directives[e], mount() {}, unmount() {}, provide: (e, t) => (n.provides[e] = t, r) }; return r }; function Ps(e, t = null) { (typeof window != 'undefined' ? window : typeof globalThis != 'undefined' ? globalThis : typeof global != 'undefined' ? global : typeof my != 'undefined' ? my : void 0).__VUE__ = !0; const n = ks(e, t); const o = n._context; o.config.globalProperties.$nextTick = function (e) { return as(this.$, e) }; const r = e => (e.appContext = o, e.shapeFlag = 6, e); const i = function (e, t) { return ys(r(e), t) }; const s = function (e) { return e && (function (e) { const { bum: t, scope: n, update: o, um: r } = e; t && q(t), n.stop(), o && (o.active = !1), r && ms(r), ms((() => { e.isUnmounted = !0 })) }(e.$)) }; return n.mount = function () { e.render = u; const t = ys(r({ type: e }), { mpType: hs.APP, mpInstance: null, parentComponent: null, slots: [], props: null }); return n._instance = t.$, t.$app = n, t.$createComponent = i, t.$destroyComponent = s, o.$appInstance = t, t }, n.unmount = function () {}, n } function Ts(e, t, n, o) { A(t) && Xr(e, t.bind(n), o) } function Es(e, t, n) { !(function (e, t, n) { const o = e.mpType || n.$mpType; o && o !== 'component' && Object.keys(e).forEach(((o) => { if (Ie(o, e[o], !1)) { const r = e[o]; v(r) ? r.forEach((e => Ts(o, e, n, t))) : Ts(o, r, n, t) } })) }(e, t, n)) } function Os(e, t, n) { return e[t] = n } function Is(e) {
  return function (t, n, o) {
    if (!n)
      throw t; const r = e._instance; if (!r || !r.proxy)
      throw t; r.proxy.$callHook(G, t)
  }
} function Cs(e, t) { return e ? [...new Set([].concat(e, t))] : t } let Bs; const _s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; const js = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/; function Ls() {
  const e = jn.getStorageSync('uni_id_token') || ''; const t = e.split('.'); if (!e || t.length !== 3)
    return { uid: null, role: [], permission: [], tokenExpired: 0 }; let n; try { n = JSON.parse((o = t[1], decodeURIComponent(Bs(o).split('').map(((e) => { return `%${(`00${e.charCodeAt(0).toString(16)}`).slice(-2)}` })).join('')))) }
  catch (r) { throw new Error(`获取当前用户信息出错，详细错误信息为：${r.message}`) } let o; return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n
} function Ns(e) { const t = e._context.config; let n; t.errorHandler = _e(e, Is), n = t.optionMergeStrategies, Ee.forEach(((e) => { n[e] = Cs })); const o = t.globalProperties; !(function (e) { e.uniIDHasRole = function (e) { const { role: t } = Ls(); return t.includes(e) }, e.uniIDHasPermission = function (e) { const { permission: t } = Ls(); return this.uniIDHasRole('admin') || t.includes(e) }, e.uniIDTokenValid = function () { const { tokenExpired: e } = Ls(); return e > Date.now() } }(o)), o.$set = Os, o.$applyOptions = Es, jn.invokeCreateVueAppHook(e) }Bs = typeof atob != 'function'
  ? function (e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ''), !js.test(e))
      throw new Error('Failed to execute \'atob\' on \'Window\': The string to be decoded is not correctly encoded.'); let t; e += '=='.slice(2 - (3 & e.length)); for (var n, o, r = '', i = 0; i < e.length;)t = _s.indexOf(e.charAt(i++)) << 18 | _s.indexOf(e.charAt(i++)) << 12 | (n = _s.indexOf(e.charAt(i++))) << 6 | (o = _s.indexOf(e.charAt(i++))), r += n === 64 ? String.fromCharCode(t >> 16 & 255) : o === 64 ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t); return r
  }
  : atob; const Fs = Object.create(null); function Ds(e) { delete Fs[e] } function Rs(e) {
  if (!e)
    return; const [t, n] = e.split(','); return Fs[t] ? Fs[t][Number.parseInt(n)] : void 0
} const Us = {
  install(e) {
    Ns(e), e.config.globalProperties.pruneComponentPropsCache = Ds; const t = e.mount; e.mount = function (n) {
      const o = t.call(e, n); const r = (function () {
        const e = 'createApp'; if (typeof global != 'undefined')
          return global[e]; if (typeof my != 'undefined')
          return my[e]
      }()); return r ? r(o) : typeof createMiniProgramApp != 'undefined' && createMiniProgramApp(o), o
    }
  },
}; function Ms(e, t) {
  const n = zi(); const o = n.ctx; const r = void 0 === t || o.$mpPlatform !== 'mp-weixin' && o.$mpPlatform !== 'mp-qq' || !x(t) && typeof t != 'number' ? '' : `_${t}`; const i = `e${n.$ei++}${r}`; const s = o.$scope; if (!e)
    return delete s[i], i; const a = s[i]; return a
    ? a.value = e
    : s[i] = (function (e, t) {
      const n = (e) => {
        let o; (o = e).type && o.target && (o.preventDefault = u, o.stopPropagation = u, o.stopImmediatePropagation = u, b(o, 'detail') || (o.detail = {}), b(o, 'markerId') && (o.detail = typeof o.detail == 'object' ? o.detail : {}, o.detail.markerId = o.markerId), C(o.detail) && b(o.detail, 'checked') && !b(o.detail, 'value') && (o.detail.value = o.detail.checked), C(o.detail) && (o.target = g({}, o.target, o.detail))); let r = [e]; e.detail && e.detail.__args__ && (r = e.detail.__args__); const i = n.value; const s = () => gr((function (e, t) { if (v(t)) { const n = e.stopImmediatePropagation; return e.stopImmediatePropagation = () => { n && n.call(e), e._stopped = !0 }, t.map((e => t => !t._stopped && e(t))) } return t }(e, i)), t, 5, r); const a = e.target; const c = !!a && (!!a.dataset && String(a.dataset.eventsync) === 'true'); if (!qs.includes(e.type) || c) {
          const t = s(); if (e.type === 'input' && (v(t) || T(t)))
            return; return t
        }setTimeout(s)
      }; return n.value = e, n
    }(e, n)), i
} const qs = ['tap', 'longpress', 'longtap', 'transitionend', 'animationstart', 'animationiteration', 'animationend', 'touchforcechange']; function Qs(e, t = {}, n) {
  const o = zi(); const { parent: r, isMounted: i, ctx: { $scope: s } } = o; const a = (s.properties || s.props).uI; if (!a)
    return; if (!r && !i)
    return void ei(() => { Qs(e, t, n) }, o); const c = (function (e, t) {
    let n = t.parent; for (;n;) {
      const t = n.$ssi; if (t && t[e])
        return t[e]; n = n.parent
    }
  }(a, o)); c && c(e, t, n)
} function zs(e) {
  return x(e)
    ? e
    : (function (e) {
        let t = ''; if (!e || x(e))
          return t; for (const n in e)t += `${n.startsWith('--') ? n : D(n)}:${e[n]};`; return t
      }(t(e)))
} const Hs = function (e, t = null) { return e && (e.mpType = 'app'), Ps(e, t).use(Us) }; const $s = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent']; function Ws(e, t) { const n = e.ctx; n.mpType = t.mpType, n.$mpType = t.mpType, n.$mpPlatform = 'mp-weixin', n.$scope = t.mpInstance, n.$mp = {}, n._self = {}, e.slots = {}, v(t.slots) && t.slots.length && (t.slots.forEach(((t) => { e.slots[t] = !0 })), e.slots[W] && (e.slots.default = !0)), n.getOpenerEventChannel = function () { return t.mpInstance.getOpenerEventChannel() }, n.$hasHook = Vs, n.$callHook = Ks, e.emit = (function (e, t) { return function (n, ...o) { const r = t.$scope; if (r && n) { const e = { __args__: o }; r.triggerEvent(n, e) } return e.apply(this, [n, ...o]) } }(e.emit, n)) } function Vs(e) { const t = this.$[e]; return !(!t || !t.length) } function Ks(e, t) { e === 'mounted' && (Ks.call(this, 'bm'), this.$.isMounted = !0, e = 'm'); const n = this.$[e]; return n && we(n, t) } const Js = [ee, V, K, ne, ie, ce, le, ue, pe]; function Gs(e, t = new Set()) { if (e) { Object.keys(e).forEach(((n) => { Ie(n, e[n]) && t.add(n) })); { const { extends: n, mixins: o } = e; o && o.forEach((e => Gs(e, t))), n && Gs(n, t) } } return t } function Xs(e, t, n) { n.includes(t) || b(e, t) || (e[t] = function (e) { return this.$vm && this.$vm.$callHook(t, e) }) } const Ys = [te]; function Zs(e, t, n = Ys) { t.forEach((t => Xs(e, t, n))) } function ea(e, t, n = Ys) { Gs(t).forEach((t => Xs(e, t, n))) } const ta = Se((() => { const e = []; const t = A(getApp) && getApp({ allowDefault: !0 }); if (t && t.$vm && t.$vm.$) { const n = t.$vm.$.appContext.mixins; if (v(n)) { const t = Object.keys(Oe); n.forEach(((n) => { t.forEach(((t) => { b(n, t) && !e.includes(t) && e.push(t) })) })) } } return e })); const na = [V, K, G, X, Y, Z]; function oa(e, t) { const n = e.$; const o = { globalData: e.$options && e.$options.globalData || {}, $vm: e, onLaunch(t) { this.$vm = e; const o = n.ctx; this.$vm && o.$scope || (Ws(n, { mpType: 'app', mpInstance: this, slots: [] }), o.globalData = this.globalData, e.$callHook(J, t)) } }; !(function (e) { const t = or(We(wx.getSystemInfoSync().language) || Me); Object.defineProperty(e, '$locale', { get: () => t.value, set(e) { t.value = e } }) }(e)); const r = e.$.type; Zs(o, na), ea(o, r); { const e = r.methods; e && g(o, e) } return t && t.parse(o), o } function ra(e, t) { if (A(e.onLaunch)) { const t = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync(); e.onLaunch(t) }A(e.onShow) && wx.onAppShow && wx.onAppShow(((e) => { t.$callHook('onShow', e) })), A(e.onHide) && wx.onAppHide && wx.onAppHide(((e) => { t.$callHook('onHide', e) })) } const ia = ['externalClasses']; const sa = /_(.*)_worklet_factory_/; function aa(e, t) {
  const n = e.$children; for (let r = n.length - 1; r >= 0; r--) {
    const e = n[r]; if (e.$scope._$vueId === t)
      return e
  } let o; for (let r = n.length - 1; r >= 0; r--) {
    if (o = aa(n[r], t), o)
      return o
  }
} const ca = ['eO', 'uR', 'uRIF', 'uI', 'uT', 'uP', 'uS']; function la(e) { e.properties || (e.properties = {}), g(e.properties, (function (e, t = !1) { const n = {}; return t || (ca.forEach(((e) => { n[e] = { type: null, value: '' } })), n.uS = { type: null, value: [], observer(e) { const t = Object.create(null); e && e.forEach(((e) => { t[e] = !0 })), this.setData({ $slots: t }) } }), e.behaviors && e.behaviors.includes('wx://form-field') && (e.properties && e.properties.name || (n.name = { type: null, value: '' }), e.properties && e.properties.value || (n.value = { type: null, value: '' })), n }(e)), (function (e) { const t = {}; return e && e.virtualHost && (t.virtualHostStyle = { type: null, value: '' }, t.virtualHostClass = { type: null, value: '' }), t }(e.options))) } const ua = [String, Number, Boolean, Object, Array, null]; function fa(e, t) { const n = (function (e, t) { return v(e) && e.length === 1 ? e[0] : e }(e)); return ua.includes(n) ? n : null } function pa(e, t) { return (t ? (function (e) { const t = {}; C(e) && Object.keys(e).forEach(((n) => { !ca.includes(n) && (t[n] = e[n]) })); return t }(e)) : Rs(e.uP)) || {} } function da(e) {
  const t = function () {
    const e = this.properties.uP; e && (this.$vm
      ? (function (e, t) {
          const n = Go(t.props); const o = Rs(e) || {}; ha(n, o) && (!(function (e, t, n, o) {
            const { props: r, attrs: i, vnode: { patchFlag: s } } = e; const a = Go(r); const [c] = e.propsOptions; let l = !1; if (!(o || s > 0) || 16 & s) {
              let o; Ei(e, t, r, i) && (l = !0); for (const i in a)t && (b(t, i) || (o = D(i)) !== i && b(t, o)) || (c ? !n || void 0 === n[i] && void 0 === n[o] || (r[i] = Oi(c, a, i, void 0, e, !0)) : delete r[i]); if (i !== a)
                for (const e in i)t && b(t, e) || (delete i[e], l = !0)
            }
            else if (8 & s) {
              const n = e.vnode.dynamicProps; for (let o = 0; o < n.length; o++) {
                const s = n[o]; if (Fr(e.emitsOptions, s))
                  continue; const u = t[s]; if (c) {
                  if (b(i, s)) { u !== i[s] && (i[s] = u, l = !0) }
                  else { const t = N(s); r[t] = Oi(c, a, t, u, e, !1) }
                }

                else { u !== i[s] && (i[s] = u, l = !0) }
              }
            }l && no(e, 'set', '$attrs')
          }(t, o, n, !1)), r = t.update, vr.includes(r) && (function (e) { const t = vr.indexOf(e); t > wr && vr.splice(t, 1) }(t.update)), t.update()); let r
        }(e, this.$vm.$))
      : this.properties.uT === 'm' && (function (e, t) { const n = t.properties; const o = Rs(e) || {}; ha(n, o, !1) && t.setData(o) }(e, this)))
  }; e.observers || (e.observers = {}), e.observers.uP = t
} function ha(e, t, n = !0) {
  const o = Object.keys(t); if (n && o.length !== Object.keys(e).length)
    return !0; for (let r = 0; r < o.length; r++) {
    const n = o[r]; if (t[n] !== e[n])
      return !0
  } return !1
} function ga(e, t) { e.data = {}, e.behaviors = (function (e) { const t = e.behaviors; let n = e.props; n || (e.props = n = []); const o = []; return v(t) && t.forEach(((e) => { o.push(e.replace('uni://', 'wx://')), e === 'uni://form-field' && (v(n) ? (n.push('name'), n.push('modelValue')) : (n.name = { type: String, default: '' }, n.modelValue = { type: [String, Number, Boolean, Array, Object, Date], default: '' })) })), o }(t)) } function ma(e, { parse: t, mocks: n, isPage: o, initRelation: r, handleLink: i, initLifetimes: s }) { e = e.default || e; const a = { multipleSlots: !0, addGlobalClass: !0, pureDataPattern: /^uP$/ }; v(e.mixins) && e.mixins.forEach(((e) => { P(e.options) && g(a, e.options) })), e.options && g(a, e.options); const c = { options: a, lifetimes: s({ mocks: n, isPage: o, initRelation: r, vueOptions: e }), pageLifetimes: { show() { this.$vm && this.$vm.$callHook('onPageShow') }, hide() { this.$vm && this.$vm.$callHook('onPageHide') }, resize(e) { this.$vm && this.$vm.$callHook('onPageResize', e) } }, methods: { __l: i } }; let l, u, f, p; return ga(c, e), la(c), da(c), (function (e, t) { ia.forEach(((n) => { b(t, n) && (e[n] = t[n]) })) }(c, e)), l = c.methods, u = e.wxsCallMethods, v(u) && u.forEach(((e) => { l[e] = function (t) { return this.$vm[e](t) } })), f = c.methods, (p = e.methods) && Object.keys(p).forEach(((e) => { const t = e.match(sa); if (t) { const n = t[1]; f[e] = p[e], f[n] = p[n] } })), t && t(c, { handleLink: i }), c } let ya, ba; function va() { return getApp().$vm } function wa(e, t) {
  const { parse: n, mocks: o, isPage: r, initRelation: i, handleLink: s, initLifetimes: a } = t; const c = ma(e, { mocks: o, isPage: r, initRelation: i, handleLink: s, initLifetimes: a }); !(function ({ properties: e }, t) {
    v(t)
      ? t.forEach(((t) => { e[t] = { type: String, value: '' } }))
      : C(t) && Object.keys(t).forEach(((n) => {
        const o = t[n]; if (C(o)) { let t = o.default; A(t) && (t = t()); const r = o.type; o.type = fa(r), e[n] = { type: o.type, value: t } }
        else { e[n] = { type: fa(o) } }
      }))
  }(c, (e.default || e).props)); const l = c.methods; return l.onLoad = function (e) { let t; return this.options = e, this.$page = { fullPath: (t = this.route + Pe(e), (function (e) { return e.indexOf('/') === 0 }(t)) ? t : `/${t}`) }, this.$vm && this.$vm.$callHook(ee, e) }, Zs(l, Js), ea(l, e), (function (e, t) {
    if (!t)
      return; Object.keys(Oe).forEach(((n) => { t & Oe[n] && Xs(e, n, []) }))
  }(l, e.__runtimeHooks)), Zs(l, ta()), n && n(c, { handleLink: s }), c
} const Sa = Page; const Aa = Component; function xa(e) {
  const t = e.triggerEvent; const n = function (n, ...o) { return t.apply(e, [(r = n, N(r.replace(ve, '-'))), ...o]); let r }; try { e.triggerEvent = n }
  catch (o) { e._triggerEvent = n }
} function ka(e, t, n) { const o = t[e]; t[e] = o ? function (...e) { return xa(this), o.apply(this, e) } : function () { xa(this) } }Page = function (e) { return ka(ee, e), Sa(e) }, Component = function (e) { ka('created', e); return e.properties && e.properties.uP || (la(e), da(e)), Aa(e) }; const Pa = Object.freeze({
  __proto__: null,
  handleLink(e) { const t = e.detail || e.value; const n = t.vuePid; let o; n && (o = aa(this.$vm, n)), o || (o = this.$vm), t.parent = o },
  initLifetimes({ mocks: e, isPage: t, initRelation: n, vueOptions: o }) {
    return {
      attached() {
        const r = this.properties; !(function (e, t) {
          if (!e)
            return; const n = e.split(','); const o = n.length; o === 1 ? t._$vueId = n[0] : o === 2 && (t._$vueId = n[0], t._$vuePid = n[1])
        }(r.uI, this)); const i = { vuePid: this._$vuePid }; n(this, i); const s = this; const a = t(s); const c = r; this.$vm = (function (e, t) { ya || (ya = va().$createComponent); const n = ya(e, t); return Gi(n.$) || n }({ type: o, props: pa(c, a) }, {
          mpType: a ? 'page' : 'component',
          mpInstance: s,
          slots: r.uS || {},
          parentComponent: i.parent && i.parent.$,
          onBeforeSetup(t, n) {
            !(function (e, t) { Object.defineProperty(e, 'refs', { get() { const e = {}; return (function (e, t, n) { e.selectAllComponents(t).forEach(((e) => { const t = e.properties.uR; n[t] = e.$vm || e })) }(t, '.r', e)), t.selectAllComponents('.r-i-f').forEach(((t) => { const n = t.properties.uR; n && (e[n] || (e[n] = []), e[n].push(t.$vm || t)) })), e } }) }(t, s)), (function (e, t, n) { const o = e.ctx; n.forEach(((n) => { b(t, n) && (e[n] = o[n] = t[n]) })) }(t, s, e)), (function (e, t) {
              Ws(e, t); const n = e.ctx; $s.forEach(((e) => {
                n[e] = function (...t) {
                  const o = n.$scope; if (o && o[e])
                    return o[e].apply(o, t)
                }
              }))
            }(t, n))
          },
        })), a || (function (e) { const t = e.$options; v(t.behaviors) && t.behaviors.includes('uni://form-field') && e.$watch('modelValue', () => { e.$scope && e.$scope.setData({ name: e.name, value: e.modelValue }) }, { immediate: !0 }) }(this.$vm))
      },
      ready() { this.$vm && (this.$vm.$callHook('mounted'), this.$vm.$callHook(te)) },
      detached() { let e; this.$vm && (Ds(this.$vm.$.uid), e = this.$vm, ba || (ba = va().$destroyComponent), ba(e)) },
    }
  },
  initRelation(e, t) { e.triggerEvent('__l', t) },
  isPage(e) { return !!e.route },
  mocks: ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'],
}); const Ta = function (e) { return App(oa(e, Ea)) }; let Ea; const Oa = (Ia = Pa, function (e) { return Component(wa(e, Ia)) }); let Ia; const Ca = (function (e) { return function (t) { return Component(ma(t, e)) } }(Pa)); const Ba = (function (e) { return function (t) { ra(oa(t, e), t) } }()); const _a = (function (e) {
  return function (t) {
    const n = oa(t, e); const o = A(getApp) && getApp({ allowDefault: !0 }); if (!o)
      return; t.$.ctx.$scope = o; const r = o.globalData; r && Object.keys(n.globalData).forEach(((e) => { b(r, e) || (r[e] = n.globalData[e]) })), Object.keys(n).forEach(((e) => { b(o, e) || (o[e] = n[e]) })), ra(n, t)
  }
}()); wx.createApp = global.createApp = Ta, wx.createPage = Oa, wx.createComponent = Ca, wx.createPluginApp = global.createPluginApp = Ba, wx.createSubpackageApp = global.createSubpackageApp = _a; const ja = { props: { customStyle: { type: [Object, String], default: () => ({}) }, customClass: { type: String, default: '' }, url: { type: String, default: '' }, linkType: { type: String, default: 'navigateTo' } }, data: () => ({}), onLoad() { this.$u.getRect = this.$uGetRect }, created() { this.$u.getRect = this.$uGetRect }, computed: { $u: () => jn.$u.deepMerge(jn.$u, { props: void 0, http: void 0, mixin: void 0 }), bem: () => function (e, t, n) { const o = `u-${e}--`; const r = {}; return t && t.map(((e) => { r[o + this[e]] = !0 })), n && n.map(((e) => { this[e] ? r[o + e] = this[e] : delete r[o + e] })), Object.keys(r) } }, methods: { openPage(e = 'url') { const t = this[e]; t && this.$u.route({ type: this.linkType, url: t }) }, $uGetRect(e, t) { return new Promise(((n) => { jn.createSelectorQuery().in(this)[t ? 'selectAll' : 'select'](e).boundingClientRect(((e) => { t && Array.isArray(e) && e.length && n(e), !t && e && n(e) })).exec() })) }, getParentData(e = '') { this.parent || (this.parent = {}), this.parent = jn.$u.$parent.call(this, e), this.parent.children && !this.parent.children.includes(this) && this.parent.children.push(this), this.parent && this.parentData && Object.keys(this.parentData).map(((e) => { this.parentData[e] = this.parent[e] })) }, preventEvent(e) { e && typeof e.stopPropagation == 'function' && e.stopPropagation() }, noop(e) { this.preventEvent(e) } }, onReachBottom() { jn.$emit('uOnReachBottom') }, beforeDestroy() { if (this.parent && jn.$u.test.array(this.parent.children)) { const e = this.parent.children; e.map(((t, n) => { t === this && e.splice(n, 1) })) } } }; const La = { options: { virtualHost: !0 } }; const { toString: Na } = Object.prototype; function Fa(e) { return Na.call(e) === '[object Array]' } function Da(e, t) {
  if (e != null) {
    if (typeof e != 'object' && (e = [e]), Fa(e))
      for (let n = 0, o = e.length; n < o; n++)t.call(null, e[n], n, e); else for (const n in e)Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
  }
} function Ra() { const e = {}; function t(t, n) { typeof e[n] == 'object' && typeof t == 'object' ? e[n] = Ra(e[n], t) : e[n] = typeof t == 'object' ? Ra({}, t) : t } for (let n = 0, o = arguments.length; n < o; n++)Da(arguments[n], t); return e } function Ua(e) { return void 0 === e } function Ma(e) { return encodeURIComponent(e).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']') } function qa(e, t) {
  if (!t)
    return e; let n; if (o = t, typeof URLSearchParams != 'undefined' && o instanceof URLSearchParams) { n = t.toString() }
  else { const e = []; Da(t, (t, n) => { t != null && (Fa(t) ? n = `${n}[]` : t = [t], Da(t, (t) => { !(function (e) { return Na.call(e) === '[object Date]' }(t)) ? (function (e) { return e !== null && typeof e == 'object' }(t)) && (t = JSON.stringify(t)) : t = t.toISOString(), e.push(`${Ma(n)}=${Ma(t)}`) })) }), n = e.join('&') } let o; if (n) { const t = e.indexOf('#'); t !== -1 && (e = e.slice(0, t)), e += (!e.includes('?') ? '?' : '&') + n } return e
} function Qa(e, t) { const n = {}; return e.forEach(((e) => { Ua(t[e]) || (n[e] = t[e]) })), n } function za(e) {
  return (e => new Promise(((t, n) => {
    const o = qa((r = e.baseURL, i = e.url, r && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i) ? (function (e, t) { return t ? `${e.replace(/\/+$/, '')}/${t.replace(/^\/+/, '')}` : e }(r, i)) : i), e.params); let r, i; const s = {
      url: o,
      header: e.header,
      complete: (r) => {
        e.fullPath = o, r.config = e; try { typeof r.data == 'string' && (r.data = JSON.parse(r.data)) }
        catch (_c) {}!(function (e, t, n) { const { validateStatus: o } = n.config; const r = n.statusCode; !r || o && !o(r) ? t(n) : e(n) }(t, n, r))
      },
    }; let a; if (e.method === 'UPLOAD') { delete s.header['content-type'], delete s.header['Content-Type']; const t = { filePath: e.filePath, name: e.name }; const n = ['formData']; a = jn.uploadFile({ ...s, ...t, ...Qa(n, e) }) }
    else if (e.method === 'DOWNLOAD') { a = jn.downloadFile(s) }
    else { const t = ['data', 'method', 'timeout', 'dataType', 'responseType']; a = jn.request({ ...s, ...Qa(t, e) }) }e.getTask && e.getTask(a, e)
  })))(e)
} function Ha() { this.handlers = [] }Ha.prototype.use = function (e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, Ha.prototype.eject = function (e) { this.handlers[e] && (this.handlers[e] = null) }, Ha.prototype.forEach = function (e) { this.handlers.forEach(((t) => { t !== null && e(t) })) }; function $a(e, t, n) { const o = {}; return e.forEach(((e) => { Ua(n[e]) ? Ua(t[e]) || (o[e] = t[e]) : o[e] = n[e] })), o } const Wa = { baseURL: '', header: {}, method: 'GET', dataType: 'json', responseType: 'text', custom: {}, timeout: 6e4, validateStatus(e) { return e >= 200 && e < 300 } }; const Va = (function () {
  function e(e, t) { return t != null && e instanceof t } let t, n, o; try { t = Map }
  catch (a) { t = function () {} } try { n = Set }
  catch (a) { n = function () {} } try { o = Promise }
  catch (a) { o = function () {} } function r(i, a, c, l, u) {
    typeof a == 'object' && (c = a.depth, l = a.prototype, u = a.includeNonEnumerable, a = a.circular); const f = []; const p = []; const d = typeof Buffer != 'undefined'; return void 0 === a && (a = !0), void 0 === c && (c = 1 / 0), (function i(c, h) {
      if (c === null)
        return null; if (h === 0)
        return c; let g, m; if (typeof c != 'object')
        return c; if (e(c, t)) { g = new t() }
      else if (e(c, n)) { g = new n() }
      else if (e(c, o)) { g = new o(((e, t) => { c.then((t) => { e(i(t, h - 1)) }, (e) => { t(i(e, h - 1)) }) })) }
      else if (r.__isArray(c)) { g = [] }
      else if (r.__isRegExp(c)) { g = new RegExp(c.source, s(c)), c.lastIndex && (g.lastIndex = c.lastIndex) }
      else if (r.__isDate(c)) { g = new Date(c.getTime()) }
      else {
        if (d && Buffer.isBuffer(c))
          return Buffer.from ? g = Buffer.from(c) : (g = Buffer.alloc(c.length), c.copy(g)), g; e(c, Error) ? g = Object.create(c) : void 0 === l ? (m = Object.getPrototypeOf(c), g = Object.create(m)) : (g = Object.create(l), m = l)
      } if (a) {
        const y = f.indexOf(c); if (y != -1)
          return p[y]; f.push(c), p.push(g)
      } for (var b in e(c, t) && c.forEach(((e, t) => { const n = i(t, h - 1); const o = i(e, h - 1); g.set(n, o) })), e(c, n) && c.forEach(((e) => { const t = i(e, h - 1); g.add(t) })), c) {
        Object.getOwnPropertyDescriptor(c, b) && (g[b] = i(c[b], h - 1)); try {
          if (Object.getOwnPropertyDescriptor(c, b).set === 'undefined')
            continue; g[b] = i(c[b], h - 1)
        }
        catch (_c) {
          if (_c instanceof TypeError)
            continue; if (_c instanceof ReferenceError)
            continue
        }
      } if (Object.getOwnPropertySymbols) { const v = Object.getOwnPropertySymbols(c); for (b = 0; b < v.length; b++) { const w = v[b]; (!(A = Object.getOwnPropertyDescriptor(c, w)) || A.enumerable || u) && (g[w] = i(c[w], h - 1), Object.defineProperty(g, w, A)) } } if (u) { const S = Object.getOwnPropertyNames(c); for (b = 0; b < S.length; b++) { var A; const x = S[b]; (A = Object.getOwnPropertyDescriptor(c, x)) && A.enumerable || (g[x] = i(c[x], h - 1), Object.defineProperty(g, x, A)) } } return g
    }(i, c))
  } function i(e) { return Object.prototype.toString.call(e) } function s(e) { let t = ''; return e.global && (t += 'g'), e.ignoreCase && (t += 'i'), e.multiline && (t += 'm'), t } return r.clonePrototype = function (e) {
    if (e === null)
      return null; const t = function () {}; return t.prototype = e, new t()
  }, r.__objToStr = i, r.__isDate = function (e) { return typeof e == 'object' && i(e) === '[object Date]' }, r.__isArray = function (e) { return typeof e == 'object' && i(e) === '[object Array]' }, r.__isRegExp = function (e) { return typeof e == 'object' && i(e) === '[object RegExp]' }, r.__getRegExpFlags = s, r
}()); const Ka = (new class {
  constructor() { this.config = { type: 'navigateTo', url: '', delta: 1, params: {}, animationType: 'pop-in', animationDuration: 300, intercept: !1 }, this.route = this.route.bind(this) }addRootPath(e) { return e[0] === '/' ? e : `/${e}` }mixinParam(e, t) { e = e && this.addRootPath(e); let n = ''; return /.*\/.*\?.*=.*/.test(e) ? (n = jn.$u.queryParams(t, !1), `${e}&${n}`) : (n = jn.$u.queryParams(t), e + n) } async route(e = {}, t = {}) {
    let n = {}; if (typeof e == 'string' ? (n.url = this.mixinParam(e, t), n.type = 'navigateTo') : (n = jn.$u.deepMerge(this.config, e), n.url = this.mixinParam(e.url, e.params)), n.url !== jn.$u.page()) {
      if (t.intercept && (this.config.intercept = t.intercept), n.params = t, n = jn.$u.deepMerge(this.config, n), typeof jn.$u.routeIntercept == 'function')
        await new Promise(((e, t) => { jn.$u.routeIntercept(n, e) })) && this.openPage(n)
      else this.openPage(n)
    }
  }

  openPage(e) { const { url: t, type: n, delta: o, animationType: r, animationDuration: i } = e; e.type != 'navigateTo' && e.type != 'to' || jn.navigateTo({ url: t, animationType: r, animationDuration: i }), e.type != 'redirectTo' && e.type != 'redirect' || jn.redirectTo({ url: t }), e.type != 'switchTab' && e.type != 'tab' || jn.switchTab({ url: t }), e.type != 'reLaunch' && e.type != 'launch' || jn.reLaunch({ url: t }), e.type != 'navigateBack' && e.type != 'back' || jn.navigateBack({ delta: o }) }
}()).route; function Ja(e, t = !0) { if ((e = String(e).toLowerCase()) && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)) { if (e.length === 4) { let t = '#'; for (let n = 1; n < 4; n += 1)t += e.slice(n, n + 1).concat(e.slice(n, n + 1)); e = t } const n = []; for (let t = 1; t < 7; t += 2)n.push(Number.parseInt(`0x${e.slice(t, t + 2)}`)); return t ? `rgb(${n[0]},${n[1]},${n[2]})` : n } if (/^(rgb|RGB)/.test(e)) { return e.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',').map((e => Number(e))) } return e } function Ga(e) {
  const t = e; if (/^(rgb|RGB)/.test(t)) { const e = t.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(','); let n = '#'; for (let t = 0; t < e.length; t++) { let o = Number(e[t]).toString(16); o = String(o).length == 1 ? `0${o}` : o, o === '0' && (o += o), n += o } return n.length !== 7 && (n = t), n } if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t))
    return t; { const e = t.replace(/#/, '').split(''); if (e.length === 6)
    return t; if (e.length === 3) { let t = '#'; for (let n = 0; n < e.length; n += 1)t += e[n] + e[n]; return t } }
} const Xa = { colorGradient(e = 'rgb(0, 0, 0)', t = 'rgb(255, 255, 255)', n = 10) { const o = Ja(e, !1); const r = o[0]; const i = o[1]; const s = o[2]; const a = Ja(t, !1); const c = (a[0] - r) / n; const l = (a[1] - i) / n; const u = (a[2] - s) / n; const f = []; for (let p = 0; p < n; p++) { let o = Ga(`rgb(${Math.round(c * p + r)},${Math.round(l * p + i)},${Math.round(u * p + s)})`); p === 0 && (o = Ga(e)), p === n - 1 && (o = Ga(t)), f.push(o) } return f }, hexToRgb: Ja, rgbToHex: Ga, colorToRgba(e, t) { e = Ga(e); let n = String(e).toLowerCase(); if (n && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(n)) { if (n.length === 4) { let e = '#'; for (let t = 1; t < 4; t += 1)e += n.slice(t, t + 1).concat(n.slice(t, t + 1)); n = e } const e = []; for (let t = 1; t < 7; t += 2)e.push(Number.parseInt(`0x${n.slice(t, t + 2)}`)); return `rgba(${e.join(',')},${t})` } return n } }; function Ya(e) { return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(e) } function Za(e) {
  switch (typeof e) {
    case 'undefined':return !0; case 'string':if (e.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
      return !0; break; case 'boolean':if (!e)
      return !0; break; case 'number':if (e === 0 || isNaN(e))
      return !0; break; case 'object':if (e === null || e.length === 0)
      return !0; for (const t in e) return !1; return !0
  } return !1
} function ec(e) { return Object.prototype.toString.call(e) === '[object Object]' } function tc(e) { return typeof e == 'function' } const nc = {
  email(e) { return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e) },
  mobile(e) { return /^1[23456789]\d{9}$/.test(e) },
  url(e) { return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(e) },
  date(e) { return !!e && (Ya(e) && (e = +e), !/Invalid|NaN/.test(new Date(e).toString())) },
  dateISO(e) { return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e) },
  number: Ya,
  digits(e) { return /^\d+$/.test(e) },
  idCard(e) { return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e) },
  carNo(e) { const t = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/; const n = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/; return e.length === 7 ? n.test(e) : e.length === 8 && t.test(e) },
  amount(e) { return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(e) },
  chinese(e) { return /^[\u4E00-\u9FA5]+$/gi.test(e) },
  letter(e) { return /^[a-zA-Z]*$/.test(e) },
  enOrNum(e) { return /^[0-9a-zA-Z]*$/g.test(e) },
  contains(e, t) { return e.includes(t) },
  range(e, t) { return e >= t[0] && e <= t[1] },
  rangeLength(e, t) { return e.length >= t[0] && e.length <= t[1] },
  empty: Za,
  isEmpty: Za,
  jsonString(e) {
    if (typeof e == 'string') {
      try { const t = JSON.parse(e); return !(typeof t != 'object' || !t) }
      catch (_c) { return !1 }
    } return !1
  },
  landline(e) { return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(e) },
  object: ec,
  array(e) { return typeof Array.isArray == 'function' ? Array.isArray(e) : Object.prototype.toString.call(e) === '[object Array]' },
  code(e, t = 6) { return new RegExp(`^\\d{${t}}$`).test(e) },
  func: tc,
  promise(e) { return ec(e) && tc(e.then) && tc(e.catch) },
  video(e) { return /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i.test(e) },
  image(e) { const t = e.split('?')[0]; return /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i.test(t) },
  regExp(e) { return e && Object.prototype.toString.call(e) === '[object RegExp]' },
  string(e) { return typeof e == 'string' },
}; let oc; let rc = null; function ic(e, t = 15) { return +Number.parseFloat(Number(e).toPrecision(t)) } function sc(e) { const t = e.toString().split(/[eE]/); const n = (t[0].split('.')[1] || '').length - +(t[1] || 0); return n > 0 ? n : 0 } function ac(e) {
  if (!e.toString().includes('e'))
    return Number(e.toString().replace('.', '')); const t = sc(e); return t > 0 ? ic(Number(e) * 10 ** t) : Number(e)
} function cc(e) { (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(`${e} 超出了精度限制，结果可能不正确`) } function lc(e, t) { const [n, o, ...r] = e; let i = t(n, o); return r.forEach(((e) => { i = t(i, e) })), i } function uc(...e) {
  if (e.length > 2)
    return lc(e, uc); const [t, n] = e; const o = ac(t); const r = ac(n); const i = sc(t) + sc(n); const s = o * r; return cc(s), s / 10 ** i
} function fc(...e) {
  if (e.length > 2)
    return lc(e, fc); const [t, n] = e; const o = ac(t); const r = ac(n); return cc(o), cc(r), uc(o / r, ic(10 ** (sc(n) - sc(t))))
} function pc(e) {
  if ([null, void 0, Number.NaN, !1].includes(e))
    return e; if (typeof e != 'object' && typeof e != 'function')
    return e; const t = nc.array(e) ? [] : {}; for (const n in e)e.hasOwnProperty(n) && (t[n] = typeof e[n] == 'object' ? pc(e[n]) : e[n]); return t
} function dc(e = null, t = 'yyyy-mm-dd') { let n; n = e ? /^\d{10}$/.test(e.toString().trim()) ? new Date(1e3 * e) : typeof e == 'string' && /^\d+$/.test(e.trim()) ? new Date(Number(e)) : new Date(typeof e == 'string' ? e.replace(/-/g, '/') : e) : new Date(); const o = { y: n.getFullYear().toString(), m: (n.getMonth() + 1).toString().padStart(2, '0'), d: n.getDate().toString().padStart(2, '0'), h: n.getHours().toString().padStart(2, '0'), M: n.getMinutes().toString().padStart(2, '0'), s: n.getSeconds().toString().padStart(2, '0') }; for (const r in o) { const [e] = new RegExp(`${r}+`).exec(t) || []; if (e) { const n = r === 'y' && e.length === 2 ? 2 : 0; t = t.replace(e, o[r].slice(n)) } } return t } function hc(e, t = 'both') { return e = String(e), t == 'both' ? e.replace(/^\s+|\s+$/g, '') : t == 'left' ? e.replace(/^\s*/, '') : t == 'right' ? e.replace(/(\s*$)/g, '') : t == 'all' ? e.replace(/\s+/g, '') : e }String.prototype.padStart || (String.prototype.padStart = function (e, t = ' ') {
  if (Object.prototype.toString.call(t) !== '[object String]')
    throw new TypeError('fillString must be String'); const n = this; if (n.length >= e)
    return String(n); const o = e - n.length; let r = Math.ceil(o / t.length); for (;r >>= 1;)t += t, r === 1 && (t += t); return t.slice(0, o) + n
}); const gc = {
  range(e = 0, t = 0, n = 0) { return Math.max(e, Math.min(t, Number(n))) },
  getPx(e, t = !1) { return nc.number(e) ? t ? `${e}px` : Number(e) : /(rpx|upx)$/.test(e) ? t ? `${jn.upx2px(Number.parseInt(e))}px` : Number(jn.upx2px(Number.parseInt(e))) : t ? `${Number.parseInt(e)}px` : Number.parseInt(e) },
  sleep(e = 30) { return new Promise(((t) => { setTimeout(() => { t() }, e) })) },
  os() { return jn.getSystemInfoSync().platform.toLowerCase() },
  sys() { return jn.getSystemInfoSync() },
  random(e, t) { if (e >= 0 && t > 0 && t >= e) { const n = t - e + 1; return Math.floor(Math.random() * n + e) } return 0 },
  guid(e = 32, t = !0, n = null) {
    const o = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''); const r = []; if (n = n || o.length, e) { for (let i = 0; i < e; i++)r[i] = o[0 | Math.random() * n] }
    else { let e; r[8] = r[13] = r[18] = r[23] = '-', r[14] = '4'; for (let t = 0; t < 36; t++)r[t] || (e = 0 | 16 * Math.random(), r[t] = o[t == 19 ? 3 & e | 8 : e]) } return t ? (r.shift(), `u${r.join('')}`) : r.join('')
  },
  $parent(e = void 0) {
    let t = this.$parent; for (;t;) {
      if (!t.$options || t.$options.name === e)
        return t; t = t.$parent
    } return !1
  },
  addStyle(e, t = 'object') {
    if (nc.empty(e) || typeof e == 'object' && t === 'object' || t === 'string' && typeof e == 'string')
      return e; if (t === 'object') { const t = (e = hc(e)).split(';'); const n = {}; for (let e = 0; e < t.length; e++) if (t[e]) { const o = t[e].split(':'); n[hc(o[0])] = hc(o[1]) } return n } let n = ''; for (const o in e) { n += `${o.replace(/([A-Z])/g, '-$1').toLowerCase()}:${e[o]};` } return hc(n)
  },
  addUnit(e = 'auto', t = '') { return t || (t = jn.$u.config.unit || 'px'), e = String(e), nc.number(e) ? `${e}${t}` : e },
  deepClone: pc,
  deepMerge: function e(t = {}, n = {}) {
    if (typeof (t = pc(t)) != 'object' || typeof n != 'object')
      return !1; for (const o in n)n.hasOwnProperty(o) && (o in t ? typeof t[o] != 'object' || typeof n[o] != 'object' ? t[o] = n[o] : t[o].concat && n[o].concat ? t[o] = t[o].concat(n[o]) : t[o] = e(t[o], n[o]) : t[o] = n[o]); return t
  },
  error(e) {},
  randomArray(e = []) { return e.sort((() => Math.random() - 0.5)) },
  timeFormat: dc,
  timeFrom(e = null, t = 'yyyy-mm-dd') { e == null && (e = Number(new Date())), (e = Number.parseInt(e)).toString().length == 10 && (e *= 1e3); let n = (new Date()).getTime() - e; n = Number.parseInt(n / 1e3); let o = ''; switch (!0) { case n < 300:o = '刚刚'; break; case n >= 300 && n < 3600:o = `${Number.parseInt(n / 60)}分钟前`; break; case n >= 3600 && n < 86400:o = `${Number.parseInt(n / 3600)}小时前`; break; case n >= 86400 && n < 2592e3:o = `${Number.parseInt(n / 86400)}天前`; break; default:o = !1 === t ? n >= 2592e3 && n < 31536e3 ? `${Number.parseInt(n / 2592e3)}个月前` : `${Number.parseInt(n / 31536e3)}年前` : dc(e, t) } return o },
  trim: hc,
  queryParams(e = {}, t = !0, n = 'brackets') {
    const o = t ? '?' : ''; const r = []; !['indices', 'brackets', 'repeat', 'comma'].includes(n) && (n = 'brackets'); for (const i in e) {
      const t = e[i]; if (!(['', void 0, null].includes(t))) {
        if (t.constructor === Array)
          switch (n) { case 'indices':for (let n = 0; n < t.length; n++)r.push(`${i}[${n}]=${t[n]}`); break; case 'brackets':default:t.forEach(((e) => { r.push(`${i}[]=${e}`) })); break; case 'repeat':t.forEach(((e) => { r.push(`${i}=${e}`) })); break; case 'comma':let e = ''; t.forEach(((t) => { e += (e ? ',' : '') + t })), r.push(`${i}=${e}`) } else r.push(`${i}=${t}`)
      }
    } return r.length ? o + r.join('&') : ''
  },
  toast(e, t = 2e3) { jn.showToast({ title: String(e), icon: 'none', duration: t }) },
  type2icon(e = 'success', t = !1) { !['primary', 'info', 'error', 'warning', 'success'].includes(e) && (e = 'success'); let n = ''; switch (e) { case 'primary':case 'info':n = 'info-circle'; break; case 'error':n = 'close-circle'; break; case 'warning':n = 'error-circle'; break; default:n = 'checkmark-circle' } return t && (n += '-fill'), n },
  priceFormat(e, t = 0, n = '.', o = ',') { e = `${e}`.replace(/[^0-9+-Ee.]/g, ''); const r = isFinite(+e) ? +e : 0; const i = isFinite(+t) ? Math.abs(t) : 0; const s = void 0 === o ? ',' : o; const a = void 0 === n ? '.' : n; let c = ''; c = (i ? `${(function (e, t) { const n = 10 ** t; let o = fc(Math.round(Math.abs(uc(e, n))), n); return e < 0 && o !== 0 && (o = uc(o, -1)), o }(r, i))}` : `${Math.round(r)}`).split('.'); const l = /(-?\d+)(\d{3})/; for (;l.test(c[0]);)c[0] = c[0].replace(l, `$1${s}$2`); return (c[1] || '').length < i && (c[1] = c[1] || '', c[1] += Array.from({ length: i - c[1].length + 1 }).join('0')), c.join(a) },
  getDuration(e, t = !0) { const n = Number.parseInt(e); return t ? e.endsWith('s') ? e : e > 30 ? `${e}ms` : `${e}s` : e.endsWith('ms') ? n : e.endsWith('s') ? n > 30 ? n : 1e3 * n : n },
  padZero(e) { return `00${e}`.slice(-2) },
  formValidate(e, t) { const n = jn.$u.$parent.call(e, 'u-form-item'); const o = jn.$u.$parent.call(e, 'u-form'); n && o && o.validateField(n.prop, () => {}, t) },
  getProperty(e, t) {
    if (e) {
      if (typeof t != 'string' || t === '')
        return ''; if (t.includes('.')) { const n = t.split('.'); let o = e[n[0]] || {}; for (let e = 1; e < n.length; e++)o && (o = o[n[e]]); return o } return e[t]
    }
  },
  setProperty(e, t, n) {
    if (!e)
      return; const o = function (e, t, n) {
      if (t.length !== 1)
        for (;t.length > 1;) { const r = t[0]; e[r] && typeof e[r] == 'object' || (e[r] = {}), t.shift(), o(e[r], t, n) } else e[t[0]] = n
    }; if (typeof t != 'string' || t === '') { ; }
    else if (t.includes('.')) { const r = t.split('.'); o(e, r, n) }
    else { e[t] = n }
  },
  page() { const e = getCurrentPages(); return `/${e[e.length - 1].route || ''}` },
  pages() { return getCurrentPages() },
  setConfig({ props: e = {}, config: t = {}, color: n = {}, zIndex: o = {} }) { const { deepMerge: r } = jn.$u; jn.$u.config = r(jn.$u.config, t), jn.$u.props = r(jn.$u.props, e), jn.$u.color = r(jn.$u.color, n), jn.$u.zIndex = r(jn.$u.zIndex, o) },
}; const mc = { v: '3', version: '3', type: ['primary', 'success', 'info', 'error', 'warning'], color: { 'u-primary': '#2979ff', 'u-warning': '#ff9900', 'u-success': '#19be6b', 'u-error': '#fa3534', 'u-info': '#909399', 'u-main-color': '#303133', 'u-content-color': '#606266', 'u-tips-color': '#909399', 'u-light-color': '#c0c4cc' }, unit: 'px' }; const yc = { calendar: { title: '日期选择', showTitle: !0, showSubtitle: !0, mode: 'single', startText: '开始', endText: '结束', customList: () => [], color: '#3c9cff', minDate: 0, maxDate: 0, defaultDate: null, maxCount: Number.MAX_SAFE_INTEGER, rowHeight: 56, formatter: null, showLunar: !1, showMark: !0, confirmText: '确定', confirmDisabledText: '确定', show: !1, closeOnClickOverlay: !1, readonly: !1, showConfirm: !0, maxRange: Number.MAX_SAFE_INTEGER, rangePrompt: '', showRangePrompt: !0, allowSameDay: !1, round: 0, monthNum: 3 } }; const bc = { datetimePicker: { show: !1, showToolbar: !0, value: '', title: '', mode: 'datetime', maxDate: new Date((new Date()).getFullYear() + 10, 0, 1).getTime(), minDate: new Date((new Date()).getFullYear() - 10, 0, 1).getTime(), minHour: 0, maxHour: 23, minMinute: 0, maxMinute: 59, filter: null, formatter: null, loading: !1, itemHeight: 44, cancelText: '取消', confirmText: '确认', cancelColor: '#909193', confirmColor: '#3c9cff', visibleItemCount: 5, closeOnClickOverlay: !1, defaultIndex: () => [] } }; const { color: vc } = mc; const wc = { icon: { name: '', color: vc['u-content-color'], size: '16px', bold: !1, index: '', hoverClass: '', customPrefix: 'uicon', label: '', labelPos: 'right', labelSize: '15px', labelColor: vc['u-content-color'], space: '3px', imgMode: '', width: '', height: '', top: 0, stop: !1 } }; const { color: Sc } = mc; const Ac = { link: { color: Sc['u-primary'], fontSize: 15, underLine: !1, href: '', mpTips: '链接已复制，请在浏览器打开', lineColor: '', text: '' } }; const { color: xc } = mc; const kc = { primary: '#3c9cff', info: '#909399', default: '#909399', warning: '#f9ae3d', error: '#f56c6c', success: '#5ac725', mainColor: '#303133', contentColor: '#606266', tipsColor: '#909399', lightColor: '#c0c4cc', borderColor: '#e4e7ed' }; const Pc = { actionSheet: { show: !1, title: '', description: '', actions: () => [], index: '', cancelText: '', closeOnClickAction: !0, safeAreaInsetBottom: !0, openType: '', closeOnClickOverlay: !0, round: 0 }, album: { urls: () => [], keyName: '', singleSize: 180, multipleSize: 70, space: 6, singleMode: 'scaleToFill', multipleMode: 'aspectFill', maxCount: 9, previewFullImage: !0, rowCount: 3, showMore: !0 }, alert: { title: '', type: 'warning', description: '', closable: !1, showIcon: !1, effect: 'light', center: !1, fontSize: 14 }, avatar: { src: '', shape: 'circle', size: 40, mode: 'scaleToFill', text: '', bgColor: '#c0c4cc', color: '#ffffff', fontSize: 18, icon: '', mpAvatar: !1, randomBgColor: !1, defaultUrl: '', colorIndex: '', name: '' }, avatarGroup: { urls: () => [], maxCount: 5, shape: 'circle', mode: 'scaleToFill', showMore: !0, size: 40, keyName: '', gap: 0.5, extraValue: 0 }, backtop: { mode: 'circle', icon: 'arrow-upward', text: '', duration: 100, scrollTop: 0, top: 400, bottom: 100, right: 20, zIndex: 9, iconStyle: () => ({ color: '#909399', fontSize: '19px' }) }, badge: { isDot: !1, value: '', show: !0, max: 999, type: 'error', showZero: !1, bgColor: null, color: null, shape: 'circle', numberType: 'overflow', offset: () => [], inverted: !1, absolute: !1 }, button: { hairline: !1, type: 'info', size: 'normal', shape: 'square', plain: !1, disabled: !1, loading: !1, loadingText: '', loadingMode: 'spinner', loadingSize: 15, openType: '', formType: '', appParameter: '', hoverStopPropagation: !0, lang: 'en', sessionFrom: '', sendMessageTitle: '', sendMessagePath: '', sendMessageImg: '', showMessageCard: !1, dataName: '', throttleTime: 0, hoverStartTime: 0, hoverStayTime: 200, text: '', icon: '', iconColor: '', color: '' }, ...yc, carKeyboard: { random: !1 }, cell: { customClass: '', title: '', label: '', value: '', icon: '', disabled: !1, border: !0, center: !1, url: '', linkType: 'navigateTo', clickable: !1, isLink: !1, required: !1, arrowDirection: '', iconStyle: {}, rightIconStyle: {}, rightIcon: 'arrow-right', titleStyle: {}, size: '', stop: !0, name: '' }, cellGroup: { title: '', border: !0, customStyle: {} }, checkbox: { name: '', shape: '', size: '', checkbox: !1, disabled: '', activeColor: '', inactiveColor: '', iconSize: '', iconColor: '', label: '', labelSize: '', labelColor: '', labelDisabled: '' }, checkboxGroup: { name: '', value: () => [], shape: 'square', disabled: !1, activeColor: '#2979ff', inactiveColor: '#c8c9cc', size: 18, placement: 'row', labelSize: 14, labelColor: '#303133', labelDisabled: !1, iconColor: '#ffffff', iconSize: 12, iconPlacement: 'left', borderBottom: !1 }, circleProgress: { percentage: 30 }, code: { seconds: 60, startText: '获取验证码', changeText: 'X秒重新获取', endText: '重新获取', keepRunning: !1, uniqueKey: '' }, codeInput: { adjustPosition: !0, maxlength: 6, dot: !1, mode: 'box', hairline: !1, space: 10, value: '', focus: !1, bold: !1, color: '#606266', fontSize: 18, size: 35, disabledKeyboard: !1, borderColor: '#c9cacc', disabledDot: !0 }, col: { span: 12, offset: 0, justify: 'start', align: 'stretch', textAlign: 'left' }, collapse: { value: null, accordion: !1, border: !0 }, collapseItem: { title: '', value: '', label: '', disabled: !1, isLink: !0, clickable: !0, border: !0, align: 'left', name: '', icon: '', duration: 300 }, columnNotice: { text: '', icon: 'volume', mode: '', color: '#f9ae3d', bgColor: '#fdf6ec', fontSize: 14, speed: 80, step: !1, duration: 1500, disableTouch: !0 }, countDown: { time: 0, format: 'HH:mm:ss', autoStart: !0, millisecond: !1 }, countTo: { startVal: 0, endVal: 0, duration: 2e3, autoplay: !0, decimals: 0, useEasing: !0, decimal: '.', color: '#606266', fontSize: 22, bold: !1, separator: '' }, ...bc, divider: { dashed: !1, hairline: !0, dot: !1, textPosition: 'center', text: '', textSize: 14, textColor: '#909399', lineColor: '#dcdfe6' }, empty: { icon: '', text: '', textColor: '#c0c4cc', textSize: 14, iconColor: '#c0c4cc', iconSize: 90, mode: 'data', width: 160, height: 160, show: !0, marginTop: 0 }, form: { model: () => ({}), rules: () => ({}), errorType: 'message', borderBottom: !0, labelPosition: 'left', labelWidth: 45, labelAlign: 'left', labelStyle: () => ({}) }, formItem: { label: '', prop: '', borderBottom: '', labelWidth: '', rightIcon: '', leftIcon: '', required: !1, leftIconStyle: '' }, gap: { bgColor: 'transparent', height: 20, marginTop: 0, marginBottom: 0, customStyle: {} }, grid: { col: 3, border: !1, align: 'left' }, gridItem: { name: null, bgColor: 'transparent' }, ...wc, image: { src: '', mode: 'aspectFill', width: '300', height: '225', shape: 'square', radius: 0, lazyLoad: !0, showMenuByLongpress: !0, loadingIcon: 'photo', errorIcon: 'error-circle', showLoading: !0, showError: !0, fade: !0, webp: !1, duration: 500, bgColor: '#f3f4f6' }, indexAnchor: { text: '', color: '#606266', size: 14, bgColor: '#dedede', height: 32 }, indexList: { inactiveColor: '#606266', activeColor: '#5677fc', indexList: () => [], sticky: !0, customNavHeight: 0 }, input: { value: '', type: 'text', fixed: !1, disabled: !1, disabledColor: '#f5f7fa', clearable: !1, password: !1, maxlength: -1, placeholder: null, placeholderClass: 'input-placeholder', placeholderStyle: 'color: #c0c4cc', showWordLimit: !1, confirmType: 'done', confirmHold: !1, holdKeyboard: !1, focus: !1, autoBlur: !1, disableDefaultPadding: !1, cursor: -1, cursorSpacing: 30, selectionStart: -1, selectionEnd: -1, adjustPosition: !0, inputAlign: 'left', fontSize: '15px', color: '#303133', prefixIcon: '', prefixIconStyle: '', suffixIcon: '', suffixIconStyle: '', border: 'surround', readonly: !1, shape: 'square', formatter: null }, keyboard: { mode: 'number', dotDisabled: !1, tooltip: !0, showTips: !0, tips: '', showCancel: !0, showConfirm: !0, random: !1, safeAreaInsetBottom: !0, closeOnClickOverlay: !0, show: !1, overlay: !0, zIndex: 10075, cancelText: '取消', confirmText: '确定', autoChange: !1 }, line: { color: '#d6d7d9', length: '100%', direction: 'row', hairline: !0, margin: 0, dashed: !1 }, lineProgress: { activeColor: '#19be6b', inactiveColor: '#ececec', percentage: 0, showText: !0, height: 12 }, ...Ac, list: { showScrollbar: !1, lowerThreshold: 50, upperThreshold: 0, scrollTop: 0, offsetAccuracy: 10, enableFlex: !1, pagingEnabled: !1, scrollable: !0, scrollIntoView: '', scrollWithAnimation: !1, enableBackToTop: !1, height: 0, width: 0, preLoadScreen: 1 }, listItem: { anchor: '' }, ...{ loadingIcon: { show: !0, color: xc['u-tips-color'], textColor: xc['u-tips-color'], vertical: !1, mode: 'spinner', size: 24, textSize: 15, text: '', timingFunction: 'ease-in-out', duration: 1200, inactiveColor: '' } }, loadingPage: { loadingText: '正在加载', image: '', loadingMode: 'circle', loading: !1, bgColor: '#ffffff', color: '#C8C8C8', fontSize: 19, iconSize: 28, loadingColor: '#C8C8C8' }, loadmore: { status: 'loadmore', bgColor: 'transparent', icon: !0, fontSize: 14, iconSize: 17, color: '#606266', loadingIcon: 'spinner', loadmoreText: '加载更多', loadingText: '正在加载...', nomoreText: '没有更多了', isDot: !1, iconColor: '#b7b7b7', marginTop: 10, marginBottom: 10, height: 'auto', line: !1, lineColor: '#E6E8EB', dashed: !1 }, modal: { show: !1, title: '', content: '', confirmText: '确认', cancelText: '取消', showConfirmButton: !0, showCancelButton: !1, confirmColor: '#2979ff', cancelColor: '#606266', buttonReverse: !1, zoom: !0, asyncClose: !1, closeOnClickOverlay: !1, negativeTop: 0, width: '650rpx', confirmButtonShape: '' }, ...{ navbar: { safeAreaInsetTop: !0, placeholder: !1, fixed: !0, border: !1, leftIcon: 'arrow-left', leftText: '', rightText: '', rightIcon: '', title: '', bgColor: '#ffffff', titleWidth: '400rpx', height: '44px', leftIconSize: 20, leftIconColor: kc.mainColor, autoBack: !1, titleStyle: '' } }, noNetwork: { tips: '哎呀，网络信号丢失', zIndex: '', image: 'data:image/png;base64,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' }, noticeBar: { text: () => [], direction: 'row', step: !1, icon: 'volume', mode: '', color: '#f9ae3d', bgColor: '#fdf6ec', speed: 80, fontSize: 14, duration: 2e3, disableTouch: !0, url: '', linkType: 'navigateTo' }, notify: { top: 0, type: 'primary', color: '#ffffff', bgColor: '', message: '', duration: 3e3, fontSize: 15, safeAreaInsetTop: !1 }, ...{ numberBox: { name: '', value: 0, min: 1, max: Number.MAX_SAFE_INTEGER, step: 1, integer: !1, disabled: !1, disabledInput: !1, asyncChange: !1, inputWidth: 35, showMinus: !0, showPlus: !0, decimalLength: null, longPress: !0, color: '#323233', buttonSize: 30, bgColor: '#EBECEE', cursorSpacing: 100, disableMinus: !1, disablePlus: !1, iconStyle: '' } }, numberKeyboard: { mode: 'number', dotDisabled: !1, random: !1 }, overlay: { show: !1, zIndex: 10070, duration: 300, opacity: 0.5 }, parse: { copyLink: !0, errorImg: '', lazyLoad: !1, loadingImg: '', pauseVideo: !0, previewImg: !0, setTitle: !0, showImgMenu: !0 }, picker: { show: !1, showToolbar: !0, title: '', columns: () => [], loading: !1, itemHeight: 44, cancelText: '取消', confirmText: '确定', cancelColor: '#909193', confirmColor: '#3c9cff', visibleItemCount: 5, keyName: 'text', closeOnClickOverlay: !1, defaultIndex: () => [], immediateChange: !1 }, popup: { show: !1, overlay: !0, mode: 'bottom', duration: 300, closeable: !1, overlayStyle: () => {}, closeOnClickOverlay: !0, zIndex: 10075, safeAreaInsetBottom: !0, safeAreaInsetTop: !1, closeIconPos: 'top-right', round: 0, zoom: !0, bgColor: '', overlayOpacity: 0.5 }, radio: { name: '', shape: '', disabled: '', labelDisabled: '', activeColor: '', inactiveColor: '', iconSize: '', labelSize: '', label: '', labelColor: '', size: '', iconColor: '', placement: '' }, radioGroup: { value: '', disabled: !1, shape: 'circle', activeColor: '#2979ff', inactiveColor: '#c8c9cc', name: '', size: 18, placement: 'row', label: '', labelColor: '#303133', labelSize: 14, labelDisabled: !1, iconColor: '#ffffff', iconSize: 12, borderBottom: !1, iconPlacement: 'left' }, rate: { value: 1, count: 5, disabled: !1, size: 18, inactiveColor: '#b2b2b2', activeColor: '#FA3534', gutter: 4, minCount: 1, allowHalf: !1, activeIcon: 'star-fill', inactiveIcon: 'star', touchable: !0 }, readMore: { showHeight: 400, toggle: !1, closeText: '展开阅读全文', openText: '收起', color: '#2979ff', fontSize: 14, textIndent: '2em', name: '' }, row: { gutter: 0, justify: 'start', align: 'center' }, rowNotice: { text: '', icon: 'volume', mode: '', color: '#f9ae3d', bgColor: '#fdf6ec', fontSize: 14, speed: 80 }, scrollList: { indicatorWidth: 50, indicatorBarWidth: 20, indicator: !0, indicatorColor: '#f2f2f2', indicatorActiveColor: '#3c9cff', indicatorStyle: '' }, search: { shape: 'round', bgColor: '#f2f2f2', placeholder: '请输入关键字', clearabled: !0, focus: !1, showAction: !0, actionStyle: () => ({}), actionText: '搜索', inputAlign: 'left', inputStyle: () => ({}), disabled: !1, borderColor: 'transparent', searchIconColor: '#909399', searchIconSize: 22, color: '#606266', placeholderColor: '#909399', searchIcon: 'search', margin: '0', animation: !1, value: '', maxlength: '-1', height: 32, label: null }, section: { title: '', subTitle: '更多', right: !0, fontSize: 15, bold: !0, color: '#303133', subColor: '#909399', showLine: !0, lineColor: '', arrow: !0 }, skeleton: { loading: !0, animate: !0, rows: 0, rowsWidth: '100%', rowsHeight: 18, title: !0, titleWidth: '50%', titleHeight: 18, avatar: !1, avatarSize: 32, avatarShape: 'circle' }, slider: { value: 0, blockSize: 18, min: 0, max: 100, step: 1, activeColor: '#2979ff', inactiveColor: '#c0c4cc', blockColor: '#ffffff', showValue: !1, disabled: !1, blockStyle: () => {} }, statusBar: { bgColor: 'transparent' }, steps: { direction: 'row', current: 0, activeColor: '#3c9cff', inactiveColor: '#969799', activeIcon: '', inactiveIcon: '', dot: !1 }, stepsItem: { title: '', desc: '', iconSize: 17, error: !1 }, sticky: { offsetTop: 0, customNavHeight: 0, disabled: !1, bgColor: 'transparent', zIndex: '', index: '' }, subsection: { list: [], current: 0, activeColor: '#3c9cff', inactiveColor: '#303133', mode: 'button', fontSize: 12, bold: !0, bgColor: '#eeeeef', keyName: 'name' }, swipeAction: { autoClose: !0 }, swipeActionItem: { show: !1, name: '', disabled: !1, threshold: 20, autoClose: !0, options: [], duration: 300 }, swiper: { list: () => [], indicator: !1, indicatorActiveColor: '#FFFFFF', indicatorInactiveColor: 'rgba(255, 255, 255, 0.35)', indicatorStyle: '', indicatorMode: 'line', autoplay: !0, current: 0, currentItemId: '', interval: 3e3, duration: 300, circular: !1, previousMargin: 0, nextMargin: 0, acceleration: !1, displayMultipleItems: 1, easingFunction: 'default', keyName: 'url', imgMode: 'aspectFill', height: 130, bgColor: '#f3f4f6', radius: 4, loading: !1, showTitle: !1 }, swiperIndicator: { length: 0, current: 0, indicatorActiveColor: '', indicatorInactiveColor: '', indicatorMode: 'line' }, switch: { loading: !1, disabled: !1, size: 25, activeColor: '#2979ff', inactiveColor: '#ffffff', value: !1, activeValue: !0, inactiveValue: !1, asyncChange: !1, space: 0 }, tabbar: { value: null, safeAreaInsetBottom: !0, border: !0, zIndex: 1, activeColor: '#1989fa', inactiveColor: '#7d7e80', fixed: !0, placeholder: !0 }, tabbarItem: { name: null, icon: '', badge: null, dot: !1, text: '', badgeStyle: 'top: 6px;right:2px;' }, tabs: { duration: 300, list: () => [], lineColor: '#3c9cff', activeStyle: () => ({ color: '#303133' }), inactiveStyle: () => ({ color: '#606266' }), lineWidth: 20, lineHeight: 3, lineBgSize: 'cover', itemStyle: () => ({ height: '44px' }), scrollable: !0, current: 0, keyName: 'name' }, tag: { type: 'primary', disabled: !1, size: 'medium', shape: 'square', text: '', bgColor: '', color: '', borderColor: '', closeColor: '#C6C7CB', name: '', plainFill: !1, plain: !1, closable: !1, show: !0, icon: '' }, text: { type: '', show: !0, text: '', prefixIcon: '', suffixIcon: '', mode: '', href: '', format: '', call: !1, openType: '', bold: !1, block: !1, lines: '', color: '#303133', size: 15, iconStyle: () => ({ fontSize: '15px' }), decoration: 'none', margin: 0, lineHeight: '', align: 'left', wordWrap: 'normal' }, textarea: { value: '', placeholder: '', placeholderClass: 'textarea-placeholder', placeholderStyle: 'color: #c0c4cc', height: 70, confirmType: 'done', disabled: !1, count: !1, focus: !1, autoHeight: !1, fixed: !1, cursorSpacing: 0, cursor: '', showConfirmBar: !0, selectionStart: -1, selectionEnd: -1, adjustPosition: !0, disableDefaultPadding: !1, holdKeyboard: !1, maxlength: 140, border: 'surround', formatter: null }, toast: { zIndex: 10090, loading: !1, text: '', icon: '', type: '', loadingMode: '', show: '', overlay: !1, position: 'center', params: () => {}, duration: 2e3, isTab: !1, url: '', callback: null, back: !1 }, toolbar: { show: !0, cancelText: '取消', confirmText: '确认', cancelColor: '#909193', confirmColor: '#3c9cff', title: '' }, tooltip: { text: '', copyText: '', size: 14, color: '#606266', bgColor: 'transparent', direction: 'top', zIndex: 10071, showCopy: !0, buttons: () => [], overlay: !0, showToast: !0 }, transition: { show: !1, mode: 'fade', duration: '300', timingFunction: 'ease-out' }, ...{ upload: { accept: 'image', capture: () => ['album', 'camera'], compressed: !0, camera: 'back', maxDuration: 60, uploadIcon: 'camera-fill', uploadIconColor: '#D3D4D6', useBeforeRead: !1, previewFullImage: !0, maxCount: 52, disabled: !1, imageMode: 'aspectFill', name: '', sizeType: () => ['original', 'compressed'], multiple: !1, deletable: !0, maxSize: Number.MAX_VALUE, fileList: () => [], uploadText: '', width: 80, height: 80, previewImage: !0 } } }; let Tc = 'none'; Tc = 'vue3', Tc = 'mp', Tc = 'weixin'; const Ec = {
  route: Ka,
  date: gc.timeFormat,
  colorGradient: Xa.colorGradient,
  hexToRgb: Xa.hexToRgb,
  rgbToHex: Xa.rgbToHex,
  colorToRgba: Xa.colorToRgba,
  test: nc,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: new class {
    constructor(e = {}) { let t; t = e, Object.prototype.toString.call(t) !== '[object Object]' && (e = {}, console.warn('设置全局参数必须接收一个Object')), this.config = Va({ ...Wa, ...e }), this.interceptors = { request: new Ha(), response: new Ha() } }setConfig(e) { this.config = e(this.config) }middleware(e) {
      e = ((e, t = {}) => {
        const n = t.method || e.method || 'GET'; let o = { baseURL: e.baseURL || '', method: n, url: t.url || '', params: t.params || {}, custom: { ...e.custom || {}, ...t.custom || {} }, header: Ra(e.header || {}, t.header || {}) }; if (o = { ...o, ...$a(['getTask', 'validateStatus'], e, t) }, n === 'DOWNLOAD') { ; }
        else if (n === 'UPLOAD') { delete o.header['content-type'], delete o.header['Content-Type'], ['filePath', 'name', 'formData'].forEach(((e) => { Ua(t[e]) || (o[e] = t[e]) })) }
        else { const n = ['data', 'timeout', 'dataType', 'responseType']; o = { ...o, ...$a(n, e, t) } } return o
      })(this.config, e); const t = [za, void 0]; let n = Promise.resolve(e); for (this.interceptors.request.forEach(((e) => { t.unshift(e.fulfilled, e.rejected) })), this.interceptors.response.forEach(((e) => { t.push(e.fulfilled, e.rejected) })); t.length;)n = n.then(t.shift(), t.shift()); return n
    }

    request(e = {}) { return this.middleware(e) }get(e, t = {}) { return this.middleware({ url: e, method: 'GET', ...t }) }post(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'POST', ...n }) }put(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'PUT', ...n }) }delete(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'DELETE', ...n }) }connect(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'CONNECT', ...n }) }head(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'HEAD', ...n }) }options(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'OPTIONS', ...n }) }trace(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'TRACE', ...n }) }upload(e, t = {}) { return t.url = e, t.method = 'UPLOAD', this.middleware(t) }download(e, t = {}) { return t.url = e, t.method = 'DOWNLOAD', this.middleware(t) }
  }(),
  config: mc,
  zIndex: { toast: 10090, noNetwork: 10080, popup: 10075, mask: 10070, navbar: 980, topTips: 975, sticky: 970, indexListSticky: 965 },
  debounce(e, t = 500, n = !1) {
    if (rc !== null && clearTimeout(rc), n) { const n = !rc; rc = setTimeout(() => { rc = null }, t), n && typeof e == 'function' && e() }
    else { rc = setTimeout(() => { typeof e == 'function' && e() }, t) }
  },
  throttle(e, t = 500, n = !0) { n ? oc || (oc = !0, typeof e == 'function' && e(), setTimeout(() => { oc = !1 }, t)) : oc || (oc = !0, setTimeout(() => { oc = !1, typeof e == 'function' && e() }, t)) },
  mixin: ja,
  mpMixin: La,
  props: Pc,
  ...gc,
  color: kc,
  platform: 'weixin',
}; jn.$u = Ec; const Oc = { install: (e) => { e.config.globalProperties.$u = Ec, e.config.globalProperties.$nextTick = (e) => { e() }, e.mixin(ja) } }; function Ic(e) { return (Ic = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (e) { return typeof e } : function (e) { return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e })(e) } function Cc(e, t, n) {
  return (t = (function (e) {
    const t = (function (e, t) {
      if (Ic(e) !== 'object' || e === null)
        return e; const n = e[Symbol.toPrimitive]; if (void 0 !== n) {
        const o = n.call(e, 'string'); if (Ic(o) !== 'object')
          return o; throw new TypeError('@@toPrimitive must return a primitive value.')
      } return String(e)
    }(e)); return Ic(t) === 'symbol' ? t : `${t}`
  }(t))) in e
    ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
    : e[t] = n, e
} let Bc; let _c; const jc = Symbol('__ROUTER__'); const Lc = Symbol('__ROUTE__'); (_c = Bc || (Bc = {})).push = 'navigateTo', _c.replace = 'redirectTo', _c.replaceAll = 'reLaunch', _c.pushTab = 'switchTab', _c.back = 'navigateBack'; const Nc = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab', 'navigateBack']; function Fc(e) { const t = {}; const n = e.split('?'); let o = ''; let r = []; n.length > 1 && (o = n[1]), r = o.split('&'); for (let i = 0; r.length > i; i++)r[i].split('=').length === 2 && (t[r[i].split('=')[0]] = r[i].split('=')[1]); return t } function Dc(e, t, n) { return e.replace(RegExp(t, 'g'), n) } function Rc(e) { return e == null || Object.keys(e).length === 0 } function Uc(e, t) { const n = Object.keys(e); if (Object.getOwnPropertySymbols) { let o = Object.getOwnPropertySymbols(e); t && (o = o.filter(((t) => { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, o) } return n } function Mc(e) { for (let t = 1; arguments.length > t; t++) { var n = arguments[t] != null ? arguments[t] : {}; t % 2 ? Uc(Object(n), !0).forEach(((t) => { Cc(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uc(Object(n)).forEach(((t) => { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function qc(e, t, n) { const o = Qc(e, t); switch (n) { case 'push':jn.navigateTo({ url: o }); break; case 'replace':jn.redirectTo({ url: o }); break; case 'pushTab':jn.switchTab({ url: o }); break; case 'replaceAll':jn.reLaunch({ url: o }); break; default:throw new Error('无效的路由类型，请确保提供正确的路由类型') } } function Qc(e, t) {
  let n; let o = ''; let r = {}; if (typeof e == 'string') { o = e }
  else {
    if (e.name) {
      const i = t.routes.find(((t) => { return t.name === e.name })); if (!i || !i.path)
        throw new Error('您正在尝试访问的路由未在路由表中定义。请检查您的路由配置。'); o = i.path, r = e.params
    }
    else { e.path && (n = Dc(n = '/'.concat(e.path.split('?')[0]), '//', '/'), n = Dc(n, 'https:/', 'https://'), o = Dc(n, 'http:/', 'http://'), r = Mc(Mc({}, Fc(e.path)), e.query || {})) }r && (o = (function (e, t) { for (const n in t)e.includes('?') ? e += '&'.concat(n, '=').concat(t[n]) : e += '?'.concat(n, '=').concat(t[n]); return e }(o, r = (function (e) {
      const t = {}; if (e)
        for (const n in e) { let o = e[n]; void 0 === o && (o = ''), t[n] = o } return t
    }(r)))))
  } return o
} function zc(e) { let t; const n = (t = getCurrentPages()).length > 0 ? t[t.length - 1] : void 0; if (n && n.route && e.routes) { const o = Hc('/'.concat(n.route), e); return n.$page && (o.fullPath = n.$page.fullPath ? n.$page.fullPath : '', o.query = n.$page.fullPath ? Fc(n.$page.fullPath) : {}, o.params = n.$page.fullPath ? Fc(n.$page.fullPath) : {}), o } } function Hc(e, t) { e = e.split('?')[0]; const n = t.routes.find(((t) => { return t.path === e || t.aliasPath === e })); return JSON.parse(JSON.stringify(n)) } function $c(e, t, n) { e.guardHooks[t] = [n] } const Wc = { navigateTo: jn.navigateTo, redirectTo: jn.redirectTo, reLaunch: jn.reLaunch, switchTab: jn.switchTab, navigateBack: jn.navigateBack }; function Vc(e, t) { const n = Object.keys(e); if (Object.getOwnPropertySymbols) { let o = Object.getOwnPropertySymbols(e); t && (o = o.filter(((t) => { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, o) } return n } function Kc(e) { for (let t = 1; arguments.length > t; t++) { var n = arguments[t] != null ? arguments[t] : {}; t % 2 ? Vc(Object(n), !0).forEach(((t) => { Cc(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vc(Object(n)).forEach(((t) => { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }
/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let Jc; const Gc = e => Jc = e; const Xc = Symbol(); function Yc(e) { return e && typeof e == 'object' && Object.prototype.toString.call(e) === '[object Object]' && typeof e.toJSON != 'function' } let Zc, el; (el = Zc || (Zc = {})).direct = 'direct', el.patchObject = 'patch object', el.patchFunction = 'patch function'; function tl() {} function nl(e, t, n, o = tl) { e.push(t); const r = () => { const n = e.indexOf(t); n > -1 && (e.splice(n, 1), o()) }; return !n && Dn() && (function (e) { Ln && Ln.cleanups.push(e) }(r)), r } function ol(e, ...t) { e.slice().forEach(((e) => { e(...t) })) } function rl(e, t) {
  e instanceof Map && t instanceof Map && t.forEach(((t, n) => e.set(n, t))), e instanceof Set && t instanceof Set && t.forEach(e.add, e); for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue; const o = t[n]; const r = e[n]; Yc(r) && Yc(o) && e.hasOwnProperty(n) && !nr(o) && !Vo(o) ? e[n] = rl(r, o) : e[n] = o
  } return e
} const il = Symbol(); const { assign: sl } = Object; function al(e, t, n = {}, o, r, i) {
  let s; const a = sl({ actions: {} }, n); const c = { deep: !0 }; let l; let u; let f; let p = Xo([]); let d = Xo([]); const h = o.state.value[e]; let g; function m(t) { let n; l = u = !1, typeof t == 'function' ? (t(o.state.value[e]), n = { type: Zc.patchFunction, storeId: e, events: f }) : (rl(o.state.value[e], t), n = { type: Zc.patchObject, payload: t, storeId: e, events: f }); const r = g = Symbol(); Tr().then((() => { g === r && (l = !0) })), u = !0, ol(p, n, o.state.value[e]) }i || h || (o.state.value[e] = {}), or({}); const y = i ? function () { const { state: e } = n; const t = e ? e() : {}; this.$patch(((e) => { sl(e, t) })) } : tl; function b(t, n) {
    return function () {
      Gc(o); const r = Array.from(arguments); const i = []; const s = []; let a; ol(d, { args: r, name: t, store: v, after(e) { i.push(e) }, onError(e) { s.push(e) } }); try { a = n.apply(this && this.$id === e ? this : v, r) }
      catch (c) { throw ol(s, c), c } return a instanceof Promise ? a.then((e => (ol(i, e), e))).catch((e => (ol(s, e), Promise.reject(e)))) : (ol(i, a), a)
    }
  } const v = Ho({ _p: o, $id: e, $onAction: nl.bind(null, d), $patch: m, $reset: y, $subscribe(t, n = {}) { const r = nl(p, t, n.detached, () => i()); const i = s.run((() => qr(() => o.state.value[e], (o) => { (n.flush === 'sync' ? u : l) && t({ storeId: e, type: Zc.direct, events: f }, o) }, sl({}, c, n)))); return r }, $dispose() { s.stop(), p = [], d = [], o._s.delete(e) } }); o._s.set(e, v); const w = o._e.run((() => (s = Fn(), s.run((() => t()))))); for (const x in w) {
    const t = w[x]; if (nr(t) && (!nr(A = t) || !A.effect) || Vo(t)) { i || (!h || Yc(S = t) && S.hasOwnProperty(il) || (nr(t) ? t.value = h[x] : rl(t, h[x])), o.state.value[e][x] = t) }
    else if (typeof t == 'function') { const e = b(x, t); w[x] = e, a.actions[x] = t }
  } let S, A; return sl(v, w), sl(Go(v), w), Object.defineProperty(v, '$state', { get: () => o.state.value[e], set: (e) => { m(((t) => { sl(t, e) })) } }), o._p.forEach(((e) => { sl(v, s.run((() => e({ store: v, app: o._a, pinia: o, options: a })))) })), h && i && n.hydrate && n.hydrate(v.$state, h), l = !0, u = !0, v
} const cl = Object.prototype.toString; function ll(e) { return cl.call(e) === '[object Array]' } function ul(e, t) {
  if (e != null) {
    if (typeof e != 'object' && (e = [e]), ll(e))
      for (let n = 0, o = e.length; n < o; n++)t.call(null, e[n], n, e); else for (const r in e)Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
  }
} function fl() { const e = {}; function t(t, n) { typeof e[n] == 'object' && typeof t == 'object' ? e[n] = fl(e[n], t) : e[n] = typeof t == 'object' ? fl({}, t) : t } for (let n = 0, o = arguments.length; n < o; n++)ul(arguments[n], t); return e } function pl(e) { return void 0 === e } function dl(e) { return encodeURIComponent(e).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']') } function hl(e, t, n) {
  if (!t)
    return e; let o, r; if (n) { o = n(t) }
  else if (r = t, typeof URLSearchParams != 'undefined' && r instanceof URLSearchParams) { o = t.toString() }
  else { const i = []; ul(t, (e, t) => { e != null && (ll(e) ? t += '[]' : e = [e], ul(e, (e) => { !(function (e) { return cl.call(e) === '[object Date]' }(e)) ? (function (e) { return e !== null && typeof e == 'object' }(e)) && (e = JSON.stringify(e)) : e = e.toISOString(), i.push(`${dl(t)}=${dl(e)}`) })) }), o = i.join('&') } if (o) { const s = e.indexOf('#'); s !== -1 && (e = e.slice(0, s)), e += (!e.includes('?') ? '?' : '&') + o } return e
} function gl(e, t) { const n = {}; return e.forEach(((e) => { pl(t[e]) || (n[e] = t[e]) })), n } function ml(e) {
  return (e => new Promise(((t, n) => {
    const o = hl((r = e.baseURL, i = e.url, r && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i) ? (function (e, t) { return t ? `${e.replace(/\/+$/, '')}/${t.replace(/^\/+/, '')}` : e }(r, i)) : i), e.params, e.paramsSerializer); let r, i; const s = {
      url: o,
      header: e.header,
      complete: (r) => {
        e.fullPath = o, r.config = e, r.rawData = r.data; try { let t = !1; const n = typeof e.forcedJSONParsing; n === 'boolean' ? t = e.forcedJSONParsing : n === 'object' && (t = (e.forcedJSONParsing.include || []).includes(e.method)), t && typeof r.data == 'string' && (r.data = JSON.parse(r.data)) }
        catch (_c) {}!(function (e, t, n) { const o = n.config.validateStatus; const r = n.statusCode; !r || o && !o(r) ? t(n) : e(n) }(t, n, r))
      },
    }; let a; if (e.method === 'UPLOAD') { delete s.header['content-type'], delete s.header['Content-Type']; const t = { filePath: e.filePath, name: e.name }; const n = ['timeout', 'formData']; a = jn.uploadFile({ ...s, ...t, ...gl(n, e) }) }
    else if (e.method === 'DOWNLOAD') { const t = ['timeout', 'filePath']; a = jn.downloadFile({ ...s, ...gl(t, e) }) }
    else { const t = ['data', 'method', 'timeout', 'dataType', 'responseType', 'enableHttp2', 'enableQuic', 'enableCache', 'enableHttpDNS', 'httpDNSServiceId', 'enableChunked', 'forceCellularNetwork']; a = jn.request({ ...s, ...gl(t, e) }) }e.getTask && e.getTask(a, e)
  })))(e)
} function yl() { this.handlers = [] }yl.prototype.use = function (e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, yl.prototype.eject = function (e) { this.handlers[e] && (this.handlers[e] = null) }, yl.prototype.forEach = function (e) { this.handlers.forEach(((t) => { t !== null && e(t) })) }; function bl(e, t, n) { const o = {}; return e.forEach(((e) => { pl(n[e]) ? pl(t[e]) || (o[e] = t[e]) : o[e] = n[e] })), o } const vl = { baseURL: '', header: {}, method: 'GET', dataType: 'json', paramsSerializer: null, responseType: 'text', custom: {}, timeout: 6e4, validateStatus(e) { return e >= 200 && e < 300 }, forcedJSONParsing: !0 }; const wl = (function () {
  function e(e, t) { return t != null && e instanceof t } let t, n, o; try { t = Map }
  catch (a) { t = function () {} } try { n = Set }
  catch (a) { n = function () {} } try { o = Promise }
  catch (a) { o = function () {} } function r(i, a, c, l, u) {
    typeof a == 'object' && (c = a.depth, l = a.prototype, u = a.includeNonEnumerable, a = a.circular); const f = []; const p = []; const d = typeof Buffer != 'undefined'; return void 0 === a && (a = !0), void 0 === c && (c = 1 / 0), (function i(c, h) {
      if (c === null)
        return null; if (h === 0)
        return c; let g, m; if (typeof c != 'object')
        return c; if (e(c, t)) { g = new t() }
      else if (e(c, n)) { g = new n() }
      else if (e(c, o)) { g = new o(((e, t) => { c.then((t) => { e(i(t, h - 1)) }, (e) => { t(i(e, h - 1)) }) })) }
      else if (r.__isArray(c)) { g = [] }
      else if (r.__isRegExp(c)) { g = new RegExp(c.source, s(c)), c.lastIndex && (g.lastIndex = c.lastIndex) }
      else if (r.__isDate(c)) { g = new Date(c.getTime()) }
      else {
        if (d && Buffer.isBuffer(c))
          return Buffer.from ? g = Buffer.from(c) : (g = Buffer.alloc(c.length), c.copy(g)), g; e(c, Error) ? g = Object.create(c) : void 0 === l ? (m = Object.getPrototypeOf(c), g = Object.create(m)) : (g = Object.create(l), m = l)
      } if (a) {
        const y = f.indexOf(c); if (y != -1)
          return p[y]; f.push(c), p.push(g)
      } for (var b in e(c, t) && c.forEach(((e, t) => { const n = i(t, h - 1); const o = i(e, h - 1); g.set(n, o) })), e(c, n) && c.forEach(((e) => { const t = i(e, h - 1); g.add(t) })), c) {
        Object.getOwnPropertyDescriptor(c, b) && (g[b] = i(c[b], h - 1)); try {
          if (Object.getOwnPropertyDescriptor(c, b).set === 'undefined')
            continue; g[b] = i(c[b], h - 1)
        }
        catch (_c) {
          if (_c instanceof TypeError)
            continue; if (_c instanceof ReferenceError)
            continue
        }
      } if (Object.getOwnPropertySymbols) { const v = Object.getOwnPropertySymbols(c); for (b = 0; b < v.length; b++) { const w = v[b]; (!(A = Object.getOwnPropertyDescriptor(c, w)) || A.enumerable || u) && (g[w] = i(c[w], h - 1), Object.defineProperty(g, w, A)) } } if (u) { const S = Object.getOwnPropertyNames(c); for (b = 0; b < S.length; b++) { var A; const x = S[b]; (A = Object.getOwnPropertyDescriptor(c, x)) && A.enumerable || (g[x] = i(c[x], h - 1), Object.defineProperty(g, x, A)) } } return g
    }(i, c))
  } function i(e) { return Object.prototype.toString.call(e) } function s(e) { let t = ''; return e.global && (t += 'g'), e.ignoreCase && (t += 'i'), e.multiline && (t += 'm'), t } return r.clonePrototype = function (e) {
    if (e === null)
      return null; const t = function () {}; return t.prototype = e, new t()
  }, r.__objToStr = i, r.__isDate = function (e) { return typeof e == 'object' && i(e) === '[object Date]' }, r.__isArray = function (e) { return typeof e == 'object' && i(e) === '[object Array]' }, r.__isRegExp = function (e) { return typeof e == 'object' && i(e) === '[object RegExp]' }, r.__getRegExpFlags = s, r
}()); const Sl = typeof alert == 'function'; function Al(e, t, n) {
  const o = e.storage; const r = e.key || t.$id; const i = Sl || (n == null ? void 0 : n.enforceCustomStorage); if (e.paths) { const n = e.paths.reduce((e, n) => (e[n] = t.$state[n], e), {}); i && o ? o.setItem(r, JSON.stringify(n)) : jn.setStorage({ key: r, data: JSON.stringify(n) }) }
  else { i && o ? o.setItem(r, JSON.stringify(t.$state)) : jn.setStorage({ key: r, data: JSON.stringify(t.$state) }) }
} const xl = e => (t, n = zi()) => { !Vi && Xr(e, t, n) }; const kl = xl(V); const Pl = xl(J); const Tl = xl(ee); const El = xl(le); const Ol = xl(ue); function Il(e, t) { return ['[object Object]', '[object File]'].includes(Object.prototype.toString.call(e)) ? Object.keys(e).reduce((n, o) => (t.includes(o) || (n[o] = e[o]), n), {}) : {} } function Cl(e) { return e.tempFiles.map((e => ({ ...Il(e, ['path']), url: e.path, size: e.size }))) } const Bl = { watch: { accept: { immediate: !0, handler(e) {} } } }; const _l = { props: { accept: { type: String, default: Pc.upload.accept }, capture: { type: [String, Array], default: Pc.upload.capture }, compressed: { type: Boolean, default: Pc.upload.compressed }, camera: { type: String, default: Pc.upload.camera }, maxDuration: { type: Number, default: Pc.upload.maxDuration }, uploadIcon: { type: String, default: Pc.upload.uploadIcon }, uploadIconColor: { type: String, default: Pc.upload.uploadIconColor }, useBeforeRead: { type: Boolean, default: Pc.upload.useBeforeRead }, afterRead: { type: Function, default: null }, beforeRead: { type: Function, default: null }, previewFullImage: { type: Boolean, default: Pc.upload.previewFullImage }, maxCount: { type: [String, Number], default: Pc.upload.maxCount }, disabled: { type: Boolean, default: Pc.upload.disabled }, imageMode: { type: String, default: Pc.upload.imageMode }, name: { type: String, default: Pc.upload.name }, sizeType: { type: Array, default: Pc.upload.sizeType }, multiple: { type: Boolean, default: Pc.upload.multiple }, deletable: { type: Boolean, default: Pc.upload.deletable }, maxSize: { type: [String, Number], default: Pc.upload.maxSize }, fileList: { type: Array, default: Pc.upload.fileList }, uploadText: { type: String, default: Pc.upload.uploadText }, width: { type: [String, Number], default: Pc.upload.width }, height: { type: [String, Number], default: Pc.upload.height }, previewImage: { type: Boolean, default: Pc.upload.previewImage } } }; const jl = { props: { label: { type: String, default: Pc.formItem.label }, prop: { type: String, default: Pc.formItem.prop }, borderBottom: { type: [String, Boolean], default: Pc.formItem.borderBottom }, labelWidth: { type: [String, Number], default: Pc.formItem.labelWidth }, rightIcon: { type: String, default: Pc.formItem.rightIcon }, leftIcon: { type: String, default: Pc.formItem.leftIcon }, required: { type: Boolean, default: Pc.formItem.required }, leftIconStyle: { type: [String, Object], default: Pc.formItem.leftIconStyle } } }; const Ll = { props: { model: { type: Object, default: Pc.form.model }, rules: { type: [Object, Function, Array], default: Pc.form.rules }, errorType: { type: String, default: Pc.form.errorType }, borderBottom: { type: Boolean, default: Pc.form.borderBottom }, labelPosition: { type: String, default: Pc.form.labelPosition }, labelWidth: { type: [String, Number], default: Pc.form.labelWidth }, labelAlign: { type: String, default: Pc.form.labelAlign }, labelStyle: { type: Object, default: Pc.form.labelStyle } } }; const Nl = /%[sdj%]/g; const Fl = function () {}; function Dl(e) {
  if (!e || !e.length)
    return null; const t = {}; return e.forEach(((e) => { const { field: n } = e; t[n] = t[n] || [], t[n].push(e) })), t
} function Rl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; let o = 1; const r = t[0]; const i = t.length; if (typeof r == 'function')
    return r.apply(null, t.slice(1)); if (typeof r == 'string') {
    let e = String(r).replace(Nl, (e) => {
      if (e === '%%')
        return '%'; if (o >= i)
        return e; switch (e) {
        case '%s':return String(t[o++]); case '%d':return Number(t[o++]); case '%j':try { return JSON.stringify(t[o++]) }
        catch (n) { return '[Circular]' } break; default:return e
      }
    }); for (let n = t[o]; o < i; n = t[++o])e += ` ${n}`; return e
  } return r
} function Ul(e, t) { return e == null || (!(t !== 'array' || !Array.isArray(e) || e.length) || !(!(function (e) { return e === 'string' || e === 'url' || e === 'hex' || e === 'email' || e === 'pattern' }(t)) || typeof e != 'string' || e)) } function Ml(e, t, n) {
  let o = 0; const r = e.length; !(function i(s) {
    if (s && s.length)
      return void n(s); const a = o; o += 1, a < r ? t(e[a], i) : n([])
  }([]))
} function ql(e, t, n, o) {
  if (t.first) { const t = new Promise(((t, r) => { const i = (function (e) { const t = []; return Object.keys(e).forEach(((n) => { t.push.apply(t, e[n]) })), t }(e)); Ml(i, n, (e) => { return o(e), e.length ? r({ errors: e, fields: Dl(e) }) : t() }) })); return t.catch((e => e)), t } let r = t.firstFields || []; !0 === r && (r = Object.keys(e)); const i = Object.keys(e); const s = i.length; let a = 0; const c = []; const l = new Promise(((t, l) => {
    const u = function (e) {
      if (c.push.apply(c, e), a++, a === s)
        return o(c), c.length ? l({ errors: c, fields: Dl(c) }) : t()
    }; i.length || (o(c), t()), i.forEach(((t) => { const o = e[t]; r.includes(t) ? Ml(o, n, u) : (function (e, t, n) { const o = []; let r = 0; const i = e.length; function s(e) { o.push.apply(o, e), r++, r === i && n(o) }e.forEach(((e) => { t(e, s) })) }(o, n, u)) }))
  })); return l.catch((e => e)), l
} function Ql(e) { return function (t) { return t && t.message ? (t.field = t.field || e.fullField, t) : { message: typeof t == 'function' ? t() : t, field: t.field || e.fullField } } } function zl(e, t) {
  if (t)
    for (const n in t) if (t.hasOwnProperty(n)) { const o = t[n]; typeof o == 'object' && typeof e[n] == 'object' ? e[n] = { ...e[n], ...o } : e[n] = o } return e
} function Hl(e, t, n, o, r, i) { !e.required || n.hasOwnProperty(e.field) && !Ul(t, i || e.type) || o.push(Rl(r.messages.required, e.fullField)) } typeof process != 'undefined' && process.env; const $l = { email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'), hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i }; var Wl = {
  integer(e) { return /^(-)?\d+$/.test(e) },
  float(e) { return /^(-)?\d+(\.\d+)?$/.test(e) },
  array(e) { return Array.isArray(e) },
  regexp(e) {
    if (e instanceof RegExp)
      return !0; try { return !!new RegExp(e) }
    catch (_c) { return !1 }
  },
  date(e) { return typeof e.getTime == 'function' && typeof e.getMonth == 'function' && typeof e.getYear == 'function' },
  number(e) { return !isNaN(e) && typeof +e == 'number' },
  object(e) { return typeof e == 'object' && !Wl.array(e) },
  method(e) { return typeof e == 'function' },
  email(e) { return typeof e == 'string' && !!e.match($l.email) && e.length < 255 },
  url(e) { return typeof e == 'string' && !!e.match($l.url) },
  hex(e) { return typeof e == 'string' && !!e.match($l.hex) },
}; const Vl = 'enum'; const Kl = {
  required: Hl,
  whitespace(e, t, n, o, r) { (/^\s+$/.test(t) || t === '') && o.push(Rl(r.messages.whitespace, e.fullField)) },
  type(e, t, n, o, r) {
    if (e.required && void 0 === t)
      return void Hl(e, t, n, o, r); const i = e.type; ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'].includes(i) ? Wl[i](t) || o.push(Rl(r.messages.types[i], e.fullField, e.type)) : i && typeof t !== e.type && o.push(Rl(r.messages.types[i], e.fullField, e.type))
  },
  range(e, t, n, o, r) {
    const i = typeof e.len == 'number'; const s = typeof e.min == 'number'; const a = typeof e.max == 'number'; const c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; let l = t; let u = null; const f = typeof t == 'number'; const p = typeof t == 'string'; const d = Array.isArray(t); if (f ? u = 'number' : p ? u = 'string' : d && (u = 'array'), !u)
      return !1; d && (l = t.length), p && (l = t.replace(c, '_').length), i ? l !== e.len && o.push(Rl(r.messages[u].len, e.fullField, e.len)) : s && !a && l < e.min ? o.push(Rl(r.messages[u].min, e.fullField, e.min)) : a && !s && l > e.max ? o.push(Rl(r.messages[u].max, e.fullField, e.max)) : s && a && (l < e.min || l > e.max) && o.push(Rl(r.messages[u].range, e.fullField, e.min, e.max))
  },
  enum(e, t, n, o, r) { e[Vl] = Array.isArray(e[Vl]) ? e[Vl] : [], !e[Vl].includes(t) && o.push(Rl(r.messages[Vl], e.fullField, e[Vl].join(', '))) },
  pattern(e, t, n, o, r) {
    if (e.pattern) {
      if (e.pattern instanceof RegExp)
        e.pattern.lastIndex = 0, e.pattern.test(t) || o.push(Rl(r.messages.pattern.mismatch, e.fullField, t, e.pattern)); else if (typeof e.pattern == 'string')
        new RegExp(e.pattern).test(t) || o.push(Rl(r.messages.pattern.mismatch, e.fullField, t, e.pattern))
    }
  },
}; function Jl(e, t, n, o, r) {
  const i = e.type; const s = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
    if (Ul(t, i) && !e.required)
      return n(); Kl.required(e, t, o, s, r, i), Ul(t, i) || Kl.type(e, t, o, s, r)
  }n(s)
} const Gl = {
  string(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t, 'string') && !e.required)
        return n(); Kl.required(e, t, o, i, r, 'string'), Ul(t, 'string') || (Kl.type(e, t, o, i, r), Kl.range(e, t, o, i, r), Kl.pattern(e, t, o, i, r), !0 === e.whitespace && Kl.whitespace(e, t, o, i, r))
    }n(i)
  },
  method(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t) && !e.required)
        return n(); Kl.required(e, t, o, i, r), void 0 !== t && Kl.type(e, t, o, i, r)
    }n(i)
  },
  number(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (t === '' && (t = void 0), Ul(t) && !e.required)
        return n(); Kl.required(e, t, o, i, r), void 0 !== t && (Kl.type(e, t, o, i, r), Kl.range(e, t, o, i, r))
    }n(i)
  },
  boolean(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t) && !e.required)
        return n(); Kl.required(e, t, o, i, r), void 0 !== t && Kl.type(e, t, o, i, r)
    }n(i)
  },
  regexp(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t) && !e.required)
        return n(); Kl.required(e, t, o, i, r), Ul(t) || Kl.type(e, t, o, i, r)
    }n(i)
  },
  integer(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t) && !e.required)
        return n(); Kl.required(e, t, o, i, r), void 0 !== t && (Kl.type(e, t, o, i, r), Kl.range(e, t, o, i, r))
    }n(i)
  },
  float(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t) && !e.required)
        return n(); Kl.required(e, t, o, i, r), void 0 !== t && (Kl.type(e, t, o, i, r), Kl.range(e, t, o, i, r))
    }n(i)
  },
  array(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t, 'array') && !e.required)
        return n(); Kl.required(e, t, o, i, r, 'array'), Ul(t, 'array') || (Kl.type(e, t, o, i, r), Kl.range(e, t, o, i, r))
    }n(i)
  },
  object(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t) && !e.required)
        return n(); Kl.required(e, t, o, i, r), void 0 !== t && Kl.type(e, t, o, i, r)
    }n(i)
  },
  enum(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t) && !e.required)
        return n(); Kl.required(e, t, o, i, r), void 0 !== t && Kl.enum(e, t, o, i, r)
    }n(i)
  },
  pattern(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t, 'string') && !e.required)
        return n(); Kl.required(e, t, o, i, r), Ul(t, 'string') || Kl.pattern(e, t, o, i, r)
    }n(i)
  },
  date(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t) && !e.required)
        return n(); if (Kl.required(e, t, o, i, r), !Ul(t)) { let n; n = typeof t == 'number' ? new Date(t) : t, Kl.type(e, n, o, i, r), n && Kl.range(e, n.getTime(), o, i, r) }
    }n(i)
  },
  url: Jl,
  hex: Jl,
  email: Jl,
  required(e, t, n, o, r) { const i = []; const s = Array.isArray(t) ? 'array' : typeof t; Kl.required(e, t, o, i, r, s), n(i) },
  any(e, t, n, o, r) {
    const i = []; if (e.required || !e.required && o.hasOwnProperty(e.field)) {
      if (Ul(t) && !e.required)
        return n(); Kl.required(e, t, o, i, r)
    }n(i)
  },
}; function Xl() { return { default: 'Validation error on field %s', required: '%s is required', enum: '%s must be one of %s', whitespace: '%s cannot be empty', date: { format: '%s date %s is invalid for format %s', parse: '%s date could not be parsed, %s is invalid ', invalid: '%s date %s is invalid' }, types: { string: '%s is not a %s', method: '%s is not a %s (function)', array: '%s is not an %s', object: '%s is not an %s', number: '%s is not a %s', date: '%s is not a %s', boolean: '%s is not a %s', integer: '%s is not an %s', float: '%s is not a %s', regexp: '%s is not a valid %s', email: '%s is not a valid %s', url: '%s is not a valid %s', hex: '%s is not a valid %s' }, string: { len: '%s must be exactly %s characters', min: '%s must be at least %s characters', max: '%s cannot be longer than %s characters', range: '%s must be between %s and %s characters' }, number: { len: '%s must equal %s', min: '%s cannot be less than %s', max: '%s cannot be greater than %s', range: '%s must be between %s and %s' }, array: { len: '%s must be exactly %s in length', min: '%s cannot be less than %s in length', max: '%s cannot be greater than %s in length', range: '%s must be between %s and %s in length' }, pattern: { mismatch: '%s value %s does not match pattern %s' }, clone() { const e = JSON.parse(JSON.stringify(this)); return e.clone = this.clone, e } } } const Yl = Xl(); function Zl(e) { this.rules = null, this._messages = Yl, this.define(e) }Zl.prototype = {
  messages(e) { return e && (this._messages = zl(Xl(), e)), this._messages },
  define(e) {
    if (!e)
      throw new Error('Cannot configure a schema with no rules'); if (typeof e != 'object' || Array.isArray(e))
      throw new Error('Rules must be an object'); let t, n; for (t in this.rules = {}, e)e.hasOwnProperty(t) && (n = e[t], this.rules[t] = Array.isArray(n) ? n : [n])
  },
  validate(e, t, n) {
    const o = this; void 0 === t && (t = {}), void 0 === n && (n = function () {}); let r; let i; let s = e; let a = t; let c = n; if (typeof a == 'function' && (c = a, a = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(), Promise.resolve(); if (a.messages) { let e = this.messages(); e === Yl && (e = Xl()), zl(e, a.messages), a.messages = e }
    else { a.messages = this.messages() } const l = {}; (a.keys || Object.keys(this.rules)).forEach(((t) => { r = o.rules[t], i = s[t], r.forEach(((n) => { let r = n; typeof r.transform == 'function' && (s === e && (s = { ...s }), i = s[t] = r.transform(i)), r = typeof r == 'function' ? { validator: r } : { ...r }, r.validator = o.getValidationMethod(r), r.field = t, r.fullField = r.fullField || t, r.type = o.getType(r), r.validator && (l[t] = l[t] || [], l[t].push({ rule: r, value: i, source: s, field: t })) })) })); const u = {}; return ql(l, a, (e, t) => {
      const { rule: n } = e; let o; let r = !(n.type !== 'object' && n.type !== 'array' || typeof n.fields != 'object' && typeof n.defaultField != 'object'); function i(e, t) { return { ...t, fullField: `${n.fullField}.${e}` } } function s(o) {
        void 0 === o && (o = []); let s = o; if (Array.isArray(s) || (s = [s]), !a.suppressWarning && s.length && Zl.warning('async-validator:', s), s.length && n.message && (s = [].concat(n.message)), s = s.map(Ql(n)), a.first && s.length)
          return u[n.field] = 1, t(s); if (r) {
          if (n.required && !e.value)
            return s = n.message ? [].concat(n.message).map(Ql(n)) : a.error ? [a.error(n, Rl(a.messages.required, n.field))] : [], t(s); let o = {}; if (n.defaultField)
            for (const t in e.value)e.value.hasOwnProperty(t) && (o[t] = n.defaultField); o = { ...o, ...e.rule.fields }; for (const e in o) if (o.hasOwnProperty(e)) { const t = Array.isArray(o[e]) ? o[e] : [o[e]]; o[e] = t.map(i.bind(null, e)) } const r = new Zl(o); r.messages(a.messages), e.rule.options && (e.rule.options.messages = a.messages, e.rule.options.error = a.error), r.validate(e.value, e.rule.options || a, (e) => { const n = []; s && s.length && n.push.apply(n, s), e && e.length && n.push.apply(n, e), t(n.length ? n : null) })
        }
        else { t(s) }
      }r = r && (n.required || !n.required && e.value), n.field = e.field, n.asyncValidator ? o = n.asyncValidator(n, e.value, s, e.source, a) : n.validator && (o = n.validator(n, e.value, s, e.source, a), !0 === o ? s() : !1 === o ? s(n.message || `${n.field} fails`) : Array.isArray(o) ? s(o) : o instanceof Error && s(o.message)), o && o.then && o.then(() => s(), e => s(e))
    }, (e) => {
      !(function (e) {
        let t; let n = []; let o = {}; function r(e) {
          if (Array.isArray(e)) { let t; n = (t = n).concat.apply(t, e) }
          else { n.push(e) }
        } for (t = 0; t < e.length; t++)r(e[t]); n.length ? o = Dl(n) : (n = null, o = null), c(n, o)
      }(e))
    })
  },
  getType(e) {
    if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = 'pattern'), typeof e.validator != 'function' && e.type && !Gl.hasOwnProperty(e.type))
      throw new Error(Rl('Unknown rule type %s', e.type)); return e.type || 'string'
  },
  getValidationMethod(e) {
    if (typeof e.validator == 'function')
      return e.validator; const t = Object.keys(e); const n = t.indexOf('message'); return n !== -1 && t.splice(n, 1), t.length === 1 && t[0] === 'required' ? Gl.required : Gl[this.getType(e)] || !1
  },
}, Zl.register = function (e, t) {
  if (typeof t != 'function')
    throw new Error('Cannot register a validator by type, validator is not a function'); Gl[e] = t
}, Zl.warning = Fl, Zl.messages = Yl; const eu = { props: { value: { type: [String, Number], default: Pc.textarea.value }, modelValue: { type: [String, Number], default: Pc.textarea.value }, placeholder: { type: [String, Number], default: Pc.textarea.placeholder }, placeholderClass: { type: String, default: Pc.input.placeholderClass }, placeholderStyle: { type: [String, Object], default: Pc.input.placeholderStyle }, height: { type: [String, Number], default: Pc.textarea.height }, confirmType: { type: String, default: Pc.textarea.confirmType }, disabled: { type: Boolean, default: Pc.textarea.disabled }, count: { type: Boolean, default: Pc.textarea.count }, focus: { type: Boolean, default: Pc.textarea.focus }, autoHeight: { type: Boolean, default: Pc.textarea.autoHeight }, fixed: { type: Boolean, default: Pc.textarea.fixed }, cursorSpacing: { type: Number, default: Pc.textarea.cursorSpacing }, cursor: { type: [String, Number], default: Pc.textarea.cursor }, showConfirmBar: { type: Boolean, default: Pc.textarea.showConfirmBar }, selectionStart: { type: Number, default: Pc.textarea.selectionStart }, selectionEnd: { type: Number, default: Pc.textarea.selectionEnd }, adjustPosition: { type: Boolean, default: Pc.textarea.adjustPosition }, disableDefaultPadding: { type: Boolean, default: Pc.textarea.disableDefaultPadding }, holdKeyboard: { type: Boolean, default: Pc.textarea.holdKeyboard }, maxlength: { type: [String, Number], default: Pc.textarea.maxlength }, border: { type: String, default: Pc.textarea.border }, formatter: { type: [Function, null], default: Pc.textarea.formatter }, ignoreCompositionEvent: { type: Boolean, default: !0 } } }; const tu = { props: { name: { type: String, default: Pc.icon.name }, color: { type: String, default: Pc.icon.color }, size: { type: [String, Number], default: Pc.icon.size }, bold: { type: Boolean, default: Pc.icon.bold }, index: { type: [String, Number], default: Pc.icon.index }, hoverClass: { type: String, default: Pc.icon.hoverClass }, customPrefix: { type: String, default: Pc.icon.customPrefix }, label: { type: [String, Number], default: Pc.icon.label }, labelPos: { type: String, default: Pc.icon.labelPos }, labelSize: { type: [String, Number], default: Pc.icon.labelSize }, labelColor: { type: String, default: Pc.icon.labelColor }, space: { type: [String, Number], default: Pc.icon.space }, imgMode: { type: String, default: Pc.icon.imgMode }, width: { type: [String, Number], default: Pc.icon.width }, height: { type: [String, Number], default: Pc.icon.height }, top: { type: [String, Number], default: Pc.icon.top }, stop: { type: Boolean, default: Pc.icon.stop } } }; const nu = { pages: [{ path: 'pages/index/index', name: 'index', style: { navigationBarTitleText: '首页', navigationStyle: 'custom', enablePullDownRefresh: !1 } }, { path: 'pages/kitchen/index', name: 'kitchen', style: { navigationBarTitleText: '灵感厨房', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/newcamp/index', name: 'newcamp', style: { navigationBarTitleText: '新品共创营', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/shopping/index', name: 'shopping', style: { navigationBarTitleText: '我的积分', enablePullDownRefresh: !0, navigationStyle: 'custom' } }, { path: 'pages/user/index', style: { navigationBarTitleText: '我的', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/kitchen/postone/index', name: 'postone', style: { navigationBarTitleText: '话题名称', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/kitchen/posttwo/index', name: 'posttwo', style: { navigationBarTitleText: '随手拍', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/kitchen/postthree/index', name: 'postthree', style: { navigationBarTitleText: '试吃官', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/kitchen/postfour/index', name: 'postfour', style: { navigationBarTitleText: '我就蘸亨氏', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/kitchen/message/index', name: 'message', style: { navigationBarTitleText: '发布灵感', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/kitchen/topic/index', name: 'topic', style: { navigationBarTitleText: '话题详情', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/index/details/index', name: 'details', style: { navigationBarTitleText: '内容详情', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/shopping/location/index', name: 'location', style: { navigationBarTitleText: '选择收货地址', navigationStyle: 'custom', enablePullDownRefresh: !1 } }, { path: 'pages/user/information/index', name: 'information', style: { navigationBarTitleText: '个人资料', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/user/release/index', name: 'release', style: { navigationBarTitleText: '我的发布', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/user/contactus/index', name: 'contactus', style: { navigationBarTitleText: '联系我们', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/user/about/index', name: 'about', style: { navigationBarTitleText: '关于我们', navigationStyle: 'custom', enablePullDownRefresh: !1 } }, { path: 'pages/shopping/address/index', name: 'address', style: { navigationBarTitleText: '我的地址', navigationStyle: 'custom', enablePullDownRefresh: !1 } }, { path: 'pages/user/application/index', name: 'application', style: { navigationBarTitleText: '移动应用使用条款', enablePullDownRefresh: !1 } }, { path: 'pages/user/exchange/index', name: 'exchange', style: { navigationBarTitleText: '积分兑换说明', enablePullDownRefresh: !1 } }, { path: 'pages/shopping/details/index', name: 'details', style: { navigationBarTitleText: '商品详情页', enablePullDownRefresh: !1, navigationStyle: 'custom' } }, { path: 'pages/shopping/addAdress/index', name: 'addAdress', style: { navigationBarTitleText: '添加地址', navigationStyle: 'custom', enablePullDownRefresh: !1 } }, { path: 'pages/user/user-privacy/index', name: 'addAdress', style: { navigationBarTitleText: '用户隐私条款', navigationStyle: 'custom', enablePullDownRefresh: !1 } }, { path: 'pages/user/clauses/index', name: 'clause', style: { navigationBarTitleText: '移动应用使用条款', navigationStyle: 'custom', enablePullDownRefresh: !1 } }, { path: 'pages/user/detail/index', name: 'detail', style: { navigationBarTitleText: '积分兑换明细', navigationStyle: 'custom', enablePullDownRefresh: !1 } }], tabBar: { custom: !0, color: '#2c2c2c', selectedColor: '#ff8936', backgroundColor: '#fff', borderStyle: 'white', list: [{ pagePath: 'pages/index/index', text: '首页' }, { pagePath: 'pages/kitchen/index', text: '灵感厨房' }, { pagePath: 'pages/newcamp/index', text: '新品共创营' }, { pagePath: 'pages/shopping/index', text: '积分商场' }, { pagePath: 'pages/user/index', text: '我的' }] }, easycom: { custom: { '^u-(.*)': 'uview-plus/components/u-$1/u-$1.vue', '^shu-(.*)': '~/components/common/$1/index.vue' } }, globalStyle: { navigationBarTextStyle: 'black', navigationBarTitleText: 'uni-app', navigationBarBackgroundColor: '#FFFFFF', backgroundColor: '#FFFFFF' } }; function ou(e, t, n) { return e(n = { path: t, exports: {}, require(e, t) { return (function () { throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs') }(t == null && n.path)) } }, n.exports), n.exports } const ru = ou(((e, t) => {
  let n; e.exports = (n = n || (function (e, t) {
    const n = Object.create || (function () { function e() {} return function (t) { let n; return e.prototype = t, n = new e(), e.prototype = null, n } }()); const o = {}; const r = o.lib = {}; const i = r.Base = { extend(e) { const t = n(this); return e && t.mixIn(e), t.hasOwnProperty('init') && this.init !== t.init || (t.init = function () { t.$super.init.apply(this, arguments) }), t.init.prototype = t, t.$super = this, t }, create() { const e = this.extend(); return e.init.apply(e, arguments), e }, init() {}, mixIn(e) { for (const t in e)e.hasOwnProperty(t) && (this[t] = e[t]); e.hasOwnProperty('toString') && (this.toString = e.toString) }, clone() { return this.init.prototype.extend(this) } }; var s = r.WordArray = i.extend({
      init(e, t) { e = this.words = e || [], this.sigBytes = t != null ? t : 4 * e.length },
      toString(e) { return (e || c).stringify(this) },
      concat(e) {
        const t = this.words; const n = e.words; const o = this.sigBytes; const r = e.sigBytes; if (this.clamp(), o % 4)
          for (var i = 0; i < r; i++) { const s = n[i >>> 2] >>> 24 - i % 4 * 8 & 255; t[o + i >>> 2] |= s << 24 - (o + i) % 4 * 8 } else for (i = 0; i < r; i += 4)t[o + i >>> 2] = n[i >>> 2]; return this.sigBytes += r, this
      },
      clamp() { const t = this.words; const n = this.sigBytes; t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4) },
      clone() { const e = i.clone.call(this); return e.words = this.words.slice(0), e },
      random(t) { for (var n, o = [], r = function (t) { let n = 987654321; const o = 4294967295; return function () { let r = ((n = 36969 * (65535 & n) + (n >> 16) & o) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & o) & o; return r /= 4294967296, (r += 0.5) * (e.random() > 0.5 ? 1 : -1) } }, i = 0; i < t; i += 4) { const a = r(4294967296 * (n || e.random())); n = 987654071 * a(), o.push(4294967296 * a() | 0) } return new s.init(o, t) },
    }); const a = o.enc = {}; var c = a.Hex = { stringify(e) { for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) { const i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255; o.push((i >>> 4).toString(16)), o.push((15 & i).toString(16)) } return o.join('') }, parse(e) { for (var t = e.length, n = [], o = 0; o < t; o += 2)n[o >>> 3] |= Number.parseInt(e.substr(o, 2), 16) << 24 - o % 8 * 4; return new s.init(n, t / 2) } }; const l = a.Latin1 = { stringify(e) { for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) { const i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255; o.push(String.fromCharCode(i)) } return o.join('') }, parse(e) { for (var t = e.length, n = [], o = 0; o < t; o++)n[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8; return new s.init(n, t) } }; const u = a.Utf8 = {
      stringify(e) {
        try { return decodeURIComponent(escape(l.stringify(e))) }
        catch (t) { throw new Error('Malformed UTF-8 data') }
      },
      parse(e) { return l.parse(unescape(encodeURIComponent(e))) },
    }; const f = r.BufferedBlockAlgorithm = i.extend({ reset() { this._data = new s.init(), this._nDataBytes = 0 }, _append(e) { typeof e == 'string' && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes }, _process(t) { const n = this._data; const o = n.words; const r = n.sigBytes; const i = this.blockSize; let a = r / (4 * i); const c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i; const l = e.min(4 * c, r); if (c) { for (let u = 0; u < c; u += i) this._doProcessBlock(o, u); var f = o.splice(0, c); n.sigBytes -= l } return new s.init(f, l) }, clone() { const e = i.clone.call(this); return e._data = this._data.clone(), e }, _minBufferSize: 0 }); r.Hasher = f.extend({ cfg: i.extend(), init(e) { this.cfg = this.cfg.extend(e), this.reset() }, reset() { f.reset.call(this), this._doReset() }, update(e) { return this._append(e), this._process(), this }, finalize(e) { return e && this._append(e), this._doFinalize() }, blockSize: 16, _createHelper(e) { return function (t, n) { return new e.init(n).finalize(t) } }, _createHmacHelper(e) { return function (t, n) { return new p.HMAC.init(e, n).finalize(t) } } }); var p = o.algo = {}; return o
  }(Math)), n)
})); const iu = ru; const su = (ou(((e, t) => { let n; e.exports = (n = iu, (function (e) { const t = n; const o = t.lib; const r = o.WordArray; const i = o.Hasher; const s = t.algo; const a = []; !(function () { for (let t = 0; t < 64; t++)a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0 }()); const c = s.MD5 = i.extend({ _doReset() { this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]) }, _doProcessBlock(e, t) { for (let n = 0; n < 16; n++) { const o = t + n; const r = e[o]; e[o] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8) } const i = this._hash.words; const s = e[t + 0]; const c = e[t + 1]; const d = e[t + 2]; const h = e[t + 3]; const g = e[t + 4]; const m = e[t + 5]; const y = e[t + 6]; const b = e[t + 7]; const v = e[t + 8]; const w = e[t + 9]; const S = e[t + 10]; const A = e[t + 11]; const x = e[t + 12]; const k = e[t + 13]; const P = e[t + 14]; const T = e[t + 15]; let E = i[0]; let O = i[1]; let I = i[2]; let C = i[3]; E = l(E, O, I, C, s, 7, a[0]), C = l(C, E, O, I, c, 12, a[1]), I = l(I, C, E, O, d, 17, a[2]), O = l(O, I, C, E, h, 22, a[3]), E = l(E, O, I, C, g, 7, a[4]), C = l(C, E, O, I, m, 12, a[5]), I = l(I, C, E, O, y, 17, a[6]), O = l(O, I, C, E, b, 22, a[7]), E = l(E, O, I, C, v, 7, a[8]), C = l(C, E, O, I, w, 12, a[9]), I = l(I, C, E, O, S, 17, a[10]), O = l(O, I, C, E, A, 22, a[11]), E = l(E, O, I, C, x, 7, a[12]), C = l(C, E, O, I, k, 12, a[13]), I = l(I, C, E, O, P, 17, a[14]), E = u(E, O = l(O, I, C, E, T, 22, a[15]), I, C, c, 5, a[16]), C = u(C, E, O, I, y, 9, a[17]), I = u(I, C, E, O, A, 14, a[18]), O = u(O, I, C, E, s, 20, a[19]), E = u(E, O, I, C, m, 5, a[20]), C = u(C, E, O, I, S, 9, a[21]), I = u(I, C, E, O, T, 14, a[22]), O = u(O, I, C, E, g, 20, a[23]), E = u(E, O, I, C, w, 5, a[24]), C = u(C, E, O, I, P, 9, a[25]), I = u(I, C, E, O, h, 14, a[26]), O = u(O, I, C, E, v, 20, a[27]), E = u(E, O, I, C, k, 5, a[28]), C = u(C, E, O, I, d, 9, a[29]), I = u(I, C, E, O, b, 14, a[30]), E = f(E, O = u(O, I, C, E, x, 20, a[31]), I, C, m, 4, a[32]), C = f(C, E, O, I, v, 11, a[33]), I = f(I, C, E, O, A, 16, a[34]), O = f(O, I, C, E, P, 23, a[35]), E = f(E, O, I, C, c, 4, a[36]), C = f(C, E, O, I, g, 11, a[37]), I = f(I, C, E, O, b, 16, a[38]), O = f(O, I, C, E, S, 23, a[39]), E = f(E, O, I, C, k, 4, a[40]), C = f(C, E, O, I, s, 11, a[41]), I = f(I, C, E, O, h, 16, a[42]), O = f(O, I, C, E, y, 23, a[43]), E = f(E, O, I, C, w, 4, a[44]), C = f(C, E, O, I, x, 11, a[45]), I = f(I, C, E, O, T, 16, a[46]), E = p(E, O = f(O, I, C, E, d, 23, a[47]), I, C, s, 6, a[48]), C = p(C, E, O, I, b, 10, a[49]), I = p(I, C, E, O, P, 15, a[50]), O = p(O, I, C, E, m, 21, a[51]), E = p(E, O, I, C, x, 6, a[52]), C = p(C, E, O, I, h, 10, a[53]), I = p(I, C, E, O, S, 15, a[54]), O = p(O, I, C, E, c, 21, a[55]), E = p(E, O, I, C, v, 6, a[56]), C = p(C, E, O, I, T, 10, a[57]), I = p(I, C, E, O, y, 15, a[58]), O = p(O, I, C, E, k, 21, a[59]), E = p(E, O, I, C, g, 6, a[60]), C = p(C, E, O, I, A, 10, a[61]), I = p(I, C, E, O, d, 15, a[62]), O = p(O, I, C, E, w, 21, a[63]), i[0] = i[0] + E | 0, i[1] = i[1] + O | 0, i[2] = i[2] + I | 0, i[3] = i[3] + C | 0 }, _doFinalize() { const t = this._data; const n = t.words; const o = 8 * this._nDataBytes; const r = 8 * t.sigBytes; n[r >>> 5] |= 128 << 24 - r % 32; const i = e.floor(o / 4294967296); const s = o; n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), t.sigBytes = 4 * (n.length + 1), this._process(); for (var a = this._hash, c = a.words, l = 0; l < 4; l++) { const u = c[l]; c[l] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8) } return a }, clone() { const e = i.clone.call(this); return e._hash = this._hash.clone(), e } }); function l(e, t, n, o, r, i, s) { const a = e + (t & n | ~t & o) + r + s; return (a << i | a >>> 32 - i) + t } function u(e, t, n, o, r, i, s) { const a = e + (t & o | n & ~o) + r + s; return (a << i | a >>> 32 - i) + t } function f(e, t, n, o, r, i, s) { const a = e + (t ^ n ^ o) + r + s; return (a << i | a >>> 32 - i) + t } function p(e, t, n, o, r, i, s) { const a = e + (n ^ (t | ~o)) + r + s; return (a << i | a >>> 32 - i) + t }t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c) }(Math)), n.MD5) })), ou(((e, t) => { let n, o, r; e.exports = (o = (n = iu).lib.Base, r = n.enc.Utf8, void (n.algo.HMAC = o.extend({ init(e, t) { e = this._hasher = new e.init(), typeof t == 'string' && (t = r.parse(t)); const n = e.blockSize; const o = 4 * n; t.sigBytes > o && (t = e.finalize(t)), t.clamp(); for (var i = this._oKey = t.clone(), s = this._iKey = t.clone(), a = i.words, c = s.words, l = 0; l < n; l++)a[l] ^= 1549556828, c[l] ^= 909522486; i.sigBytes = s.sigBytes = o, this.reset() }, reset() { const e = this._hasher; e.reset(), e.update(this._iKey) }, update(e) { return this._hasher.update(e), this }, finalize(e) { const t = this._hasher; const n = t.finalize(e); return t.reset(), t.finalize(this._oKey.clone().concat(n)) } }))) })), ou(((e, t) => { e.exports = iu.HmacMD5 }))); const au = ou(((e, t) => { e.exports = iu.enc.Utf8 })); const cu = ou(((e, t) => {
  let n, o, r; e.exports = (r = (o = n = iu).lib.WordArray, o.enc.Base64 = {
    stringify(e) {
      const t = e.words; const n = e.sigBytes; const o = this._map; e.clamp(); for (var r = [], i = 0; i < n; i += 3) for (let s = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + 0.75 * a < n; a++)r.push(o.charAt(s >>> 6 * (3 - a) & 63)); const c = o.charAt(64); if (c)
        for (;r.length % 4;)r.push(c); return r.join('')
    },
    parse(e) { let t = e.length; const n = this._map; let o = this._reverseMap; if (!o) { o = this._reverseMap = []; for (let i = 0; i < n.length; i++)o[n.charCodeAt(i)] = i } const s = n.charAt(64); if (s) { const a = e.indexOf(s); a !== -1 && (t = a) } return (function (e, t, n) { for (var o = [], i = 0, s = 0; s < t; s++) if (s % 4) { const a = n[e.charCodeAt(s - 1)] << s % 4 * 2; const c = n[e.charCodeAt(s)] >>> 6 - s % 4 * 2; o[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++ } return r.create(o, i) }(e, t, o)) },
    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  }, n.enc.Base64)
})); const lu = 'FUNCTION'; const uu = 'pending'; const fu = 'rejected'; function pu(e) { return Object.prototype.toString.call(e).slice(8, -1).toLowerCase() } function du(e) { return pu(e) === 'object' } function hu(e) { return typeof e == 'function' } function gu(e) {
  return function () {
    try { return e.apply(e, arguments) }
    catch (t) { console.error(t) }
  }
} const mu = 'REJECTED'; const yu = 'NOT_PENDING'; class bu {
  constructor({ createPromise: e, retryRule: t = mu } = {}) { this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t } get needRetry() {
    if (!this.status)
      return !0; switch (this.retryRule) { case mu:return this.status === fu; case yu:return this.status !== uu }
  }

  exec() { return this.needRetry ? (this.status = uu, this.promise = this.createPromise().then(e => (this.status = 'fullfilled', Promise.resolve(e)), e => (this.status = fu, Promise.reject(e))), this.promise) : this.promise }
} function vu(e) { return e && typeof e == 'string' ? JSON.parse(e) : e } const wu = vu([]); const Su = 'mp-weixin'; vu(''); const Au = vu('[]') || []; let xu = ''; try { xu = '' }
catch (_c) {} const ku = {}; function Pu(e, t = {}) { let n, o; return n = ku, o = e, Object.prototype.hasOwnProperty.call(n, o) || (ku[e] = t), ku[e] } const Tu = ['invoke', 'success', 'fail', 'complete']; const Eu = Pu('_globalUniCloudInterceptor'); function Ou(e, t) { Eu[e] || (Eu[e] = {}), du(t) && Object.keys(t).forEach(((n) => { Tu.includes(n) && (function (e, t, n) { let o = Eu[e][t]; o || (o = Eu[e][t] = []), !o.includes(n) && hu(n) && o.push(n) }(e, n, t[n])) })) } function Iu(e, t) {
  Eu[e] || (Eu[e] = {}), du(t)
    ? Object.keys(t).forEach(((n) => {
      Tu.includes(n) && (function (e, t, n) {
        const o = Eu[e][t]; if (!o)
          return; const r = o.indexOf(n); r > -1 && o.splice(r, 1)
      }(e, n, t[n]))
    }))
    : delete Eu[e]
} function Cu(e, t) { return e && e.length !== 0 ? e.reduce((e, n) => e.then((() => n(t))), Promise.resolve()) : Promise.resolve() } function Bu(e, t) { return Eu[e] && Eu[e][t] || [] } function _u(e) { Ou('callObject', e) } const ju = Pu('_globalUniCloudListener'); const Lu = 'response'; const Nu = 'needLogin'; const Fu = 'refreshToken'; const Du = 'clientdb'; const Ru = 'cloudfunction'; const Uu = 'cloudobject'; function Mu(e) { return ju[e] || (ju[e] = []), ju[e] } function qu(e, t) { const n = Mu(e); n.includes(t) || n.push(t) } function Qu(e, t) { const n = Mu(e); const o = n.indexOf(t); o !== -1 && n.splice(o, 1) } function zu(e, t) { const n = Mu(e); for (let o = 0; o < n.length; o++)(0, n[o])(t) } let Hu; let $u = !1; function Wu() { return Hu || (Hu = new Promise(((e) => { $u && e(), (function t() { if (typeof getCurrentPages == 'function') { const t = getCurrentPages(); t && t[0] && ($u = !0, e()) }$u || setTimeout(() => { t() }, 30) }()) })), Hu) } function Vu(e) { const t = {}; for (const n in e) { const o = e[n]; hu(o) && (t[n] = gu(o)) } return t } class Ku extends Error {
  constructor(e) { super(e.message), this.errMsg = e.message || e.errMsg || 'unknown system error', this.code = this.errCode = e.code || e.errCode || 'SYSTEM_ERROR', this.errSubject = this.subject = e.subject || e.errSubject, this.cause = e.cause, this.requestId = e.requestId }toJson(e = 0) {
    if (!(e >= 10))
      return e++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause }
  }
} const Ju = { request: e => jn.request(e), uploadFile: e => jn.uploadFile(e), setStorageSync: (e, t) => jn.setStorageSync(e, t), getStorageSync: e => jn.getStorageSync(e), removeStorageSync: e => jn.removeStorageSync(e), clearStorageSync: () => jn.clearStorageSync() }; function Gu(e) { return e && Gu(e.__v_raw) || e } function Xu() { return { token: Ju.getStorageSync('uni_id_token') || Ju.getStorageSync('uniIdToken'), tokenExpired: Ju.getStorageSync('uni_id_token_expired') } } function Yu({ token: e, tokenExpired: t } = {}) { e && Ju.setStorageSync('uni_id_token', e), t && Ju.setStorageSync('uni_id_token_expired', t) } let Zu, ef; function tf() { return Zu || (Zu = jn.getSystemInfoSync()), Zu } function nf() {
  let e, t; try {
    if (jn.getLaunchOptionsSync) {
      if (jn.getLaunchOptionsSync.toString().includes('not yet implemented'))
        return; const { scene: n, channel: o } = jn.getLaunchOptionsSync(); e = o, t = n
    }
  }
  catch (n) {} return { channel: e, scene: t }
} function of() {
  const e = jn.getLocale && jn.getLocale() || 'en'; if (ef)
    return { ...ef, locale: e, LOCALE: e }; const t = tf(); const { deviceId: n, osName: o, uniPlatform: r, appId: i } = t; const s = ['pixelRatio', 'brand', 'model', 'system', 'language', 'version', 'platform', 'host', 'SDKVersion', 'swanNativeVersion', 'app', 'AppPlatform', 'fontSizeSetting']; for (let a = 0; a < s.length; a++) delete t[s[a]]; return ef = { PLATFORM: r, OS: o, APPID: i, DEVICEID: n, ...nf(), ...t }, { ...ef, locale: e, LOCALE: e }
} const rf = function (e, t) { let n = ''; return Object.keys(e).sort().forEach(((t) => { e[t] && (n = `${n}&${t}=${e[t]}`) })), n = n.slice(1), su(n, t).toString() }; const sf = function (e, t) {
  return new Promise(((n, o) => {
    t(Object.assign(e, {
      complete(e) {
        e || (e = {}); const t = e.data && e.data.header && e.data.header['x-serverless-request-id'] || e.header && e.header['request-id']; if (!e.statusCode || e.statusCode >= 400)
          return o(new Ku({ code: 'SYS_ERR', message: e.errMsg || 'request:fail', requestId: t })); const r = e.data; if (r.error)
          return o(new Ku({ code: r.error.code, message: r.error.message, requestId: t })); r.result = r.data, r.requestId = t, delete r.data, n(r)
      },
    }))
  }))
}; const af = function (e) { return cu.stringify(au.parse(e)) }; const cf = { 'uniCloud.init.paramRequired': '{param} required', 'uniCloud.uploadFile.fileError': 'filePath should be instance of File' }; const { t: lf } = (function (e, t = {}, n, o) {
  typeof e != 'string' && ([e, t] = [t, e]), typeof e != 'string' && (e = void 0 !== jn && jn.getLocale ? jn.getLocale() : typeof global != 'undefined' && global.getLocale ? global.getLocale() : Me), typeof n != 'string' && (n = typeof __uniConfig != 'undefined' && __uniConfig.fallbackLocale || Me); const r = new Ve({ locale: e, fallbackLocale: n, messages: t, watcher: o }); let i = (e, t) => {
    if (typeof getApp != 'function') { i = function (e, t) { return r.t(e, t) } }
    else { let e = !1; i = function (t, n) { const o = getApp().$vm; return o && (o.$locale, e || (e = !0, (function (e, t) { e.$watchLocale ? e.$watchLocale(((e) => { t.setLocale(e) })) : e.$watch(() => e.$locale, (e) => { t.setLocale(e) }) }(o, r)))), r.t(t, n) } } return i(e, t)
  }; return { i18n: r, f: (e, t, n) => r.f(e, t, n), t: (e, t) => i(e, t), add: (e, t, n = !0) => r.add(e, t, n), watch: e => r.watchLocale(e), getLocale: () => r.getLocale(), setLocale: e => r.setLocale(e) }
}({ 'zh-Hans': { 'uniCloud.init.paramRequired': '缺少参数：{param}', 'uniCloud.uploadFile.fileError': 'filePath应为File对象' }, 'zh-Hant': { 'uniCloud.init.paramRequired': '缺少参数：{param}', 'uniCloud.uploadFile.fileError': 'filePath应为File对象' }, 'en': cf, 'fr': { 'uniCloud.init.paramRequired': '{param} required', 'uniCloud.uploadFile.fileError': 'filePath should be instance of File' }, 'es': { 'uniCloud.init.paramRequired': '{param} required', 'uniCloud.uploadFile.fileError': 'filePath should be instance of File' }, 'ja': cf }, 'zh-Hans')); const uf = class {
  constructor(e) {
    ['spaceId', 'clientSecret'].forEach(((t) => {
      if (!Object.prototype.hasOwnProperty.call(e, t))
        throw new Error(lf('uniCloud.init.paramRequired', { param: t }))
    })), this.config = Object.assign({}, { endpoint: e.spaceId.indexOf('mp-') === 0 ? 'https://api.next.bspapp.com' : 'https://api.bspapp.com' }, e), this.config.provider = 'aliyun', this.config.requestUrl = `${this.config.endpoint}/client`, this.config.envType = this.config.envType || 'public', this.config.accessTokenKey = `access_token_${this.config.spaceId}`, this.adapter = Ju, this._getAccessTokenPromiseHub = new bu({
      createPromise: () => this.requestAuth(this.setupRequest({ method: 'serverless.auth.user.anonymousAuthorize', params: '{}' }, 'auth')).then(((e) => {
        if (!e.result || !e.result.accessToken)
          throw new Ku({ code: 'AUTH_FAILED', message: '获取accessToken失败' }); this.setAccessToken(e.result.accessToken)
      })),
      retryRule: yu,
    })
  }

  get hasAccessToken() { return !!this.accessToken }setAccessToken(e) { this.accessToken = e }requestWrapped(e) { return sf(e, this.adapter.request) }requestAuth(e) { return this.requestWrapped(e) }request(e, t) { return Promise.resolve().then((() => this.hasAccessToken ? t ? this.requestWrapped(e) : this.requestWrapped(e).catch((t => new Promise(((e, n) => { !t || t.code !== 'GATEWAY_INVALID_TOKEN' && t.code !== 'InvalidParameter.InvalidToken' ? n(t) : e() })).then((() => this.getAccessToken())).then((() => { const t = this.rebuildRequest(e); return this.request(t, !0) })))) : this.getAccessToken().then((() => { const t = this.rebuildRequest(e); return this.request(t, !0) })))) }rebuildRequest(e) { const t = Object.assign({}, e); return t.data.token = this.accessToken, t.header['x-basement-token'] = this.accessToken, t.header['x-serverless-sign'] = rf(t.data, this.config.clientSecret), t }setupRequest(e, t) { const n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }); const o = { 'Content-Type': 'application/json' }; return t !== 'auth' && (n.token = this.accessToken, o['x-basement-token'] = this.accessToken), o['x-serverless-sign'] = rf(n, this.config.clientSecret), { url: this.config.requestUrl, method: 'POST', data: n, dataType: 'json', header: o } }getAccessToken() { return this._getAccessTokenPromiseHub.exec() } async authorize() { await this.getAccessToken() }callFunction(e) { const t = { method: 'serverless.function.runtime.invoke', params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) }; return this.request(this.setupRequest(t)) }getOSSUploadOptionsFromPath(e) { const t = { method: 'serverless.file.resource.generateProximalSign', params: JSON.stringify(e) }; return this.request(this.setupRequest(t)) }uploadFileToOSS({ url: e, formData: t, name: n, filePath: o, fileType: r, onUploadProgress: i }) { return new Promise(((s, a) => { const c = this.adapter.uploadFile({ url: e, formData: t, name: n, filePath: o, fileType: r, header: { 'X-OSS-server-side-encrpytion': 'AES256' }, success(e) { e && e.statusCode < 400 ? s(e) : a(new Ku({ code: 'UPLOAD_FAILED', message: '文件上传失败' })) }, fail(e) { a(new Ku({ code: e.code || 'UPLOAD_FAILED', message: e.message || e.errMsg || '文件上传失败' })) } }); typeof i == 'function' && c && typeof c.onProgressUpdate == 'function' && c.onProgressUpdate(((e) => { i({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend }) })) })) }reportOSSUpload(e) { const t = { method: 'serverless.file.resource.report', params: JSON.stringify(e) }; return this.request(this.setupRequest(t)) } async uploadFile({ filePath: e, cloudPath: t, fileType: n = 'image', cloudPathAsRealPath: o = !1, onUploadProgress: r, config: i }) {
    if (pu(t) !== 'string')
      throw new Ku({ code: 'INVALID_PARAM', message: 'cloudPath必须为字符串类型' }); if (!(t = t.trim()))
      throw new Ku({ code: 'INVALID_PARAM', message: 'cloudPath不可为空' }); if (/:\/\//.test(t))
      throw new Ku({ code: 'INVALID_PARAM', message: 'cloudPath不合法' }); const s = i && i.envType || this.config.envType; if (o && (t[0] !== '/' && (t = `/${t}`), t.includes('\\')))
      throw new Ku({ code: 'INVALID_PARAM', message: '使用cloudPath作为路径时，cloudPath不可包含“\\”' }); const a = (await this.getOSSUploadOptionsFromPath({ env: s, filename: o ? t.split('/').pop() : t, fileId: o ? t : void 0 })).result; const c = `https://${a.cdnDomain}/${a.ossPath}`; const { securityToken: l, accessKeyId: u, signature: f, host: p, ossPath: d, id: h, policy: g, ossCallbackUrl: m } = a; const y = { 'Cache-Control': 'max-age=2592000', 'Content-Disposition': 'attachment', 'OSSAccessKeyId': u, 'Signature': f, 'host': p, 'id': h, 'key': d, 'policy': g, 'success_action_status': 200 }; if (l && (y['x-oss-security-token'] = l), m) { const e = JSON.stringify({ callbackUrl: m, callbackBody: JSON.stringify({ fileId: h, spaceId: this.config.spaceId }), callbackBodyType: 'application/json' }); y.callback = af(e) } const b = { url: `https://${a.host}`, formData: y, fileName: 'file', name: 'file', filePath: e, fileType: n }; if (await this.uploadFileToOSS(Object.assign({}, b, { onUploadProgress: r })), m)
      return { success: !0, filePath: e, fileID: c }; if ((await this.reportOSSUpload({ id: h })).success)
      return { success: !0, filePath: e, fileID: c }; throw new Ku({ code: 'UPLOAD_FAILED', message: '文件上传失败' })
  }

  getTempFileURL({ fileList: e } = {}) { return new Promise(((t, n) => { Array.isArray(e) && e.length !== 0 || n(new Ku({ code: 'INVALID_PARAM', message: 'fileList的元素必须是非空的字符串' })), t({ fileList: e.map((e => ({ fileID: e, tempFileURL: e }))) }) })) } async getFileInfo({ fileList: e } = {}) {
    if (!Array.isArray(e) || e.length === 0)
      throw new Ku({ code: 'INVALID_PARAM', message: 'fileList的元素必须是非空的字符串' }); const t = { method: 'serverless.file.resource.info', params: JSON.stringify({ id: e.map((e => e.split('?')[0])).join(',') }) }; return { fileList: (await this.request(this.setupRequest(t))).result }
  }
}; const ff = { init(e) { const t = new uf(e); const n = { signInAnonymously() { return t.authorize() }, getLoginState() { return Promise.resolve(!1) } }; return t.auth = function () { return n }, t.customAuth = t.auth, t } }; const pf = typeof location != 'undefined' && location.protocol === 'http:' ? 'http:' : 'https:'; let df; !(function (e) { e.local = 'local', e.none = 'none', e.session = 'session' }(df || (df = {}))); const hf = function () {}; function gf() { let e; if (!Promise) { e = () => {}, e.promise = {}; const t = () => { throw new Ku({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' }) }; return Object.defineProperty(e.promise, 'then', { get: t }), Object.defineProperty(e.promise, 'catch', { get: t }), e } const t = new Promise(((t, n) => { e = (e, o) => e ? n(e) : t(o) })); return e.promise = t, e } function mf(e) { return void 0 === e } function yf(e) { return Object.prototype.toString.call(e) === '[object Null]' } let bf; !(function (e) { e.WEB = 'web', e.WX_MP = 'wx_mp' }(bf || (bf = {}))); const vf = { adapter: null, runtime: void 0 }; const wf = ['anonymousUuidKey']; class Sf extends hf {constructor() { super(), vf.adapter.root.tcbObject || (vf.adapter.root.tcbObject = {}) }setItem(e, t) { vf.adapter.root.tcbObject[e] = t }getItem(e) { return vf.adapter.root.tcbObject[e] }removeItem(e) { delete vf.adapter.root.tcbObject[e] }clear() { delete vf.adapter.root.tcbObject }} function Af(e, t) { switch (e) { case 'local':return t.localStorage || new Sf(); case 'none':return new Sf(); default:return t.sessionStorage || new Sf() } } class xf {
  constructor(e) { if (!this._storage) { this._persistence = vf.adapter.primaryStorage || e.persistence, this._storage = Af(this._persistence, vf.adapter); const t = `access_token_${e.env}`; const n = `access_token_expire_${e.env}`; const o = `refresh_token_${e.env}`; const r = `anonymous_uuid_${e.env}`; const i = `login_type_${e.env}`; const s = `user_info_${e.env}`; this.keys = { accessTokenKey: t, accessTokenExpireKey: n, refreshTokenKey: o, anonymousUuidKey: r, loginTypeKey: i, userInfoKey: s } } }updatePersistence(e) {
    if (e === this._persistence)
      return; const t = this._persistence === 'local'; this._persistence = e; const n = Af(e, vf.adapter); for (const o in this.keys) {
      const e = this.keys[o]; if (t && wf.includes(o))
        continue; const r = this._storage.getItem(e); mf(r) || yf(r) || (n.setItem(e, r), this._storage.removeItem(e))
    } this._storage = n
  }

  setStore(e, t, n) {
    if (!this._storage)
      return; const o = { version: n || 'localCachev1', content: t }; const r = JSON.stringify(o); try { this._storage.setItem(e, r) }
    catch (i) { throw i }
  }

  getStore(e, t) {
    try {
      if (!this._storage)
        return
    }
    catch (o) { return '' }t = t || 'localCachev1'; const n = this._storage.getItem(e); return n && n.includes(t) ? JSON.parse(n).content : ''
  }

  removeStore(e) { this._storage.removeItem(e) }
} const kf = {}; const Pf = {}; function Tf(e) { return kf[e] } class Ef {constructor(e, t) { this.data = t || null, this.name = e }} class Of extends Ef {constructor(e, t) { super('error', { error: e, data: t }), this.error = e }} const If = new class {
  constructor() { this._listeners = {} }on(e, t) { return n = e, o = t, (r = this._listeners)[n] = r[n] || [], r[n].push(o), this; let n, o, r }off(e, t) { return (function (e, t, n) { if (n && n[e]) { const o = n[e].indexOf(t); o !== -1 && n[e].splice(o, 1) } }(e, t, this._listeners)), this }fire(e, t) {
    if (e instanceof Of)
      return console.error(e.error), this; const n = typeof e == 'string' ? new Ef(e, t || {}) : e; const o = n.name; if (this._listens(o)) { n.target = this; const e = this._listeners[o] ? [...this._listeners[o]] : []; for (const t of e)t.call(this, n) } return this
  }

  _listens(e) { return this._listeners[e] && this._listeners[e].length > 0 }
}(); function Cf(e, t) { If.on(e, t) } function Bf(e, t = {}) { If.fire(e, t) } function _f(e, t) { If.off(e, t) } const jf = 'loginStateChanged'; const Lf = 'loginStateExpire'; const Nf = 'loginTypeChanged'; const Ff = 'anonymousConverted'; const Df = 'refreshAccessToken'; let Rf; !(function (e) { e.ANONYMOUS = 'ANONYMOUS', e.WECHAT = 'WECHAT', e.WECHAT_PUBLIC = 'WECHAT-PUBLIC', e.WECHAT_OPEN = 'WECHAT-OPEN', e.CUSTOM = 'CUSTOM', e.EMAIL = 'EMAIL', e.USERNAME = 'USERNAME', e.NULL = 'NULL' }(Rf || (Rf = {}))); const Uf = ['auth.getJwt', 'auth.logout', 'auth.signInWithTicket', 'auth.signInAnonymously', 'auth.signIn', 'auth.fetchAccessTokenWithRefreshToken', 'auth.signUpWithEmailAndPassword', 'auth.activateEndUserMail', 'auth.sendPasswordResetEmail', 'auth.resetPasswordWithToken', 'auth.isUsernameRegistered']; const Mf = { 'X-SDK-Version': '1.3.5' }; function qf(e, t, n) {
  const o = e[t]; e[t] = function (t) {
    const r = {}; const i = {}; n.forEach(((n) => { const { data: o, headers: s } = n.call(e, t); Object.assign(r, o), Object.assign(i, s) })); const s = t.data; return s && (() => {
      let e; if (e = s, Object.prototype.toString.call(e) !== '[object FormData]')
        t.data = { ...s, ...r }; else for (const t in r)s.append(t, r[t])
    })(), t.headers = { ...t.headers || {}, ...i }, o.call(e, t)
  }
} function Qf() { const e = Math.random().toString(16).slice(2); return { data: { seqId: e }, headers: { ...Mf, 'x-seqid': e } } } class zf {
  constructor(e = {}) { let t; this.config = e, this._reqClass = new vf.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ['post'] }), this._cache = Tf(this.config.env), this._localCache = (t = this.config.env, Pf[t]), qf(this._reqClass, 'post', [Qf]), qf(this._reqClass, 'upload', [Qf]), qf(this._reqClass, 'download', [Qf]) } async post(e) { return await this._reqClass.post(e) } async upload(e) { return await this._reqClass.upload(e) } async download(e) { return await this._reqClass.download(e) } async refreshAccessToken() {
    let e, t; this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()); try { e = await this._refreshAccessTokenPromise }
    catch (n) { t = n } if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)
      throw t; return e
  }

  async _refreshAccessToken() {
    const { accessTokenKey: e, accessTokenExpireKey: t, refreshTokenKey: n, loginTypeKey: o, anonymousUuidKey: r } = this._cache.keys; this._cache.removeStore(e), this._cache.removeStore(t); const i = this._cache.getStore(n); if (!i)
      throw new Ku({ message: '未登录CloudBase' }); const s = { refresh_token: i }; const a = await this.request('auth.fetchAccessTokenWithRefreshToken', s); if (a.data.code) { const { code: e } = a.data; if (e === 'SIGN_PARAM_INVALID' || e === 'REFRESH_TOKEN_EXPIRED' || e === 'INVALID_REFRESH_TOKEN') { if (this._cache.getStore(o) === Rf.ANONYMOUS && e === 'INVALID_REFRESH_TOKEN') { const e = this._cache.getStore(r); const t = this._cache.getStore(n); const o = await this.send('auth.signInAnonymously', { anonymous_uuid: e, refresh_token: t }); return this.setRefreshToken(o.refresh_token), this._refreshAccessToken() }Bf(Lf), this._cache.removeStore(n) } throw new Ku({ code: a.data.code, message: `刷新access token失败：${a.data.code}` }) } if (a.data.access_token)
      return Bf(Df), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }; a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken())
  }

  async getAccessToken() {
    const { accessTokenKey: e, accessTokenExpireKey: t, refreshTokenKey: n } = this._cache.keys; if (!this._cache.getStore(n))
      throw new Ku({ message: 'refresh token不存在，登录状态异常' }); const o = this._cache.getStore(e); const r = this._cache.getStore(t); let i = !0; return this._shouldRefreshAccessTokenHook && !(await this._shouldRefreshAccessTokenHook(o, r)) && (i = !1), (!o || !r || r < Date.now()) && i ? this.refreshAccessToken() : { accessToken: o, accessTokenExpire: r }
  }

  async request(e, t, n) {
    const o = `x-tcb-trace_${this.config.env}`; let r = 'application/x-www-form-urlencoded'; const i = { action: e, env: this.config.env, dataVersion: '2019-08-16', ...t }; if (!Uf.includes(e)) { const { refreshTokenKey: e } = this._cache.keys; this._cache.getStore(e) && (i.access_token = (await this.getAccessToken()).accessToken) } let s; if (e === 'storage.uploadFile') { s = new FormData(); for (const e in s)s.hasOwnProperty(e) && void 0 !== s[e] && s.append(e, i[e]); r = 'multipart/form-data' }
    else { r = 'application/json', s = {}; for (const e in i) void 0 !== i[e] && (s[e] = i[e]) } const a = { headers: { 'content-type': r } }; n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress); const c = this._localCache.getStore(o); c && (a.headers['X-TCB-Trace'] = c); const { parse: l, inQuery: u, search: f } = t; let p = { env: this.config.env }; l && (p.parse = !0), u && (p = { ...u, ...p }); let d = (function (e, t, n = {}) { const o = /\?/.test(t); let r = ''; for (const i in n)r === '' ? !o && (t += '?') : r += '&', r += `${i}=${encodeURIComponent(n[i])}`; return /^http(s)?\:\/\//.test(t += r) ? t : `${e}${t}` }(pf, '//tcb-api.tencentcloudapi.com/web', p)); f && (d += f); const h = await this.post({ url: d, data: s, ...a }); const g = h.header && h.header['x-tcb-trace']; if (g && this._localCache.setStore(o, g), Number(h.status) !== 200 && Number(h.statusCode) !== 200 || !h.data)
      throw new Ku({ code: 'NETWORK_ERROR', message: 'network request error' }); return h
  }

  async send(e, t = {}) {
    const n = await this.request(e, t, { onUploadProgress: t.onUploadProgress }); if (n.data.code === 'ACCESS_TOKEN_EXPIRED' && !Uf.includes(e)) {
      await this.refreshAccessToken(); const n = await this.request(e, t, { onUploadProgress: t.onUploadProgress }); if (n.data.code)
        throw new Ku({ code: n.data.code, message: n.data.message }); return n.data
    } if (n.data.code)
      throw new Ku({ code: n.data.code, message: n.data.message }); return n.data
  }

  setRefreshToken(e) { const { accessTokenKey: t, accessTokenExpireKey: n, refreshTokenKey: o } = this._cache.keys; this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(o, e) }
} const Hf = {}; function $f(e) { return Hf[e] } class Wf {constructor(e) { this.config = e, this._cache = Tf(e.env), this._request = $f(e.env) }setRefreshToken(e) { const { accessTokenKey: t, accessTokenExpireKey: n, refreshTokenKey: o } = this._cache.keys; this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(o, e) }setAccessToken(e, t) { const { accessTokenKey: n, accessTokenExpireKey: o } = this._cache.keys; this._cache.setStore(n, e), this._cache.setStore(o, t) } async refreshUserInfo() { const { data: e } = await this._request.send('auth.getUserInfo', {}); return this.setLocalUserInfo(e), e }setLocalUserInfo(e) { const { userInfoKey: t } = this._cache.keys; this._cache.setStore(t, e) }} class Vf {
  constructor(e) {
    if (!e)
      throw new Ku({ code: 'PARAM_ERROR', message: 'envId is not defined' }); this._envId = e, this._cache = Tf(this._envId), this._request = $f(this._envId), this.setUserInfo()
  }

  linkWithTicket(e) {
    if (typeof e != 'string')
      throw new Ku({ code: 'PARAM_ERROR', message: 'ticket must be string' }); return this._request.send('auth.linkWithTicket', { ticket: e })
  }

  linkWithRedirect(e) { e.signInWithRedirect() }updatePassword(e, t) { return this._request.send('auth.updatePassword', { oldPassword: t, newPassword: e }) }updateEmail(e) { return this._request.send('auth.updateEmail', { newEmail: e }) }updateUsername(e) {
    if (typeof e != 'string')
      throw new Ku({ code: 'PARAM_ERROR', message: 'username must be a string' }); return this._request.send('auth.updateUsername', { username: e })
  }

  async getLinkedUidList() { const { data: e } = await this._request.send('auth.getLinkedUidList', {}); let t = !1; const { users: n } = e; return n.forEach(((e) => { e.wxOpenId && e.wxPublicId && (t = !0) })), { users: n, hasPrimaryUid: t } }setPrimaryUid(e) { return this._request.send('auth.setPrimaryUid', { uid: e }) }unlink(e) { return this._request.send('auth.unlink', { platform: e }) } async update(e) { const { nickName: t, gender: n, avatarUrl: o, province: r, country: i, city: s } = e; const { data: a } = await this._request.send('auth.updateUserInfo', { nickName: t, gender: n, avatarUrl: o, province: r, country: i, city: s }); this.setLocalUserInfo(a) } async refresh() { const { data: e } = await this._request.send('auth.getUserInfo', {}); return this.setLocalUserInfo(e), e }setUserInfo() { const { userInfoKey: e } = this._cache.keys; const t = this._cache.getStore(e); ['uid', 'loginType', 'openid', 'wxOpenId', 'wxPublicId', 'unionId', 'qqMiniOpenId', 'email', 'hasPassword', 'customUserId', 'nickName', 'gender', 'avatarUrl'].forEach(((e) => { this[e] = t[e] })), this.location = { country: t.country, province: t.province, city: t.city } }setLocalUserInfo(e) { const { userInfoKey: t } = this._cache.keys; this._cache.setStore(t, e), this.setUserInfo() }
} class Kf {
  constructor(e) {
    if (!e)
      throw new Ku({ code: 'PARAM_ERROR', message: 'envId is not defined' }); this._cache = Tf(e); const { refreshTokenKey: t, accessTokenKey: n, accessTokenExpireKey: o } = this._cache.keys; const r = this._cache.getStore(t); const i = this._cache.getStore(n); const s = this._cache.getStore(o); this.credential = { refreshToken: r, accessToken: i, accessTokenExpire: s }, this.user = new Vf(e)
  }

  get isAnonymousAuth() { return this.loginType === Rf.ANONYMOUS } get isCustomAuth() { return this.loginType === Rf.CUSTOM } get isWeixinAuth() { return this.loginType === Rf.WECHAT || this.loginType === Rf.WECHAT_OPEN || this.loginType === Rf.WECHAT_PUBLIC } get loginType() { return this._cache.getStore(this._cache.keys.loginTypeKey) }
} class Jf extends Wf {
  async signIn() { this._cache.updatePersistence('local'); const { anonymousUuidKey: e, refreshTokenKey: t } = this._cache.keys; const n = this._cache.getStore(e) || void 0; const o = this._cache.getStore(t) || void 0; const r = await this._request.send('auth.signInAnonymously', { anonymous_uuid: n, refresh_token: o }); if (r.uuid && r.refresh_token) { this._setAnonymousUUID(r.uuid), this.setRefreshToken(r.refresh_token), await this._request.refreshAccessToken(), Bf(jf), Bf(Nf, { env: this.config.env, loginType: Rf.ANONYMOUS, persistence: 'local' }); const e = new Kf(this.config.env); return await e.user.refresh(), e } throw new Ku({ message: '匿名登录失败' }) } async linkAndRetrieveDataWithTicket(e) {
    const { anonymousUuidKey: t, refreshTokenKey: n } = this._cache.keys; const o = this._cache.getStore(t); const r = this._cache.getStore(n); const i = await this._request.send('auth.linkAndRetrieveDataWithTicket', { anonymous_uuid: o, refresh_token: r, ticket: e }); if (i.refresh_token)
      return this._clearAnonymousUUID(), this.setRefreshToken(i.refresh_token), await this._request.refreshAccessToken(), Bf(Ff, { env: this.config.env }), Bf(Nf, { loginType: Rf.CUSTOM, persistence: 'local' }), { credential: { refreshToken: i.refresh_token } }; throw new Ku({ message: '匿名转化失败' })
  }

  _setAnonymousUUID(e) { const { anonymousUuidKey: t, loginTypeKey: n } = this._cache.keys; this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Rf.ANONYMOUS) }_clearAnonymousUUID() { this._cache.removeStore(this._cache.keys.anonymousUuidKey) }
} class Gf extends Wf {
  async signIn(e) {
    if (typeof e != 'string')
      throw new Ku({ code: 'PARAM_ERROR', message: 'ticket must be a string' }); const { refreshTokenKey: t } = this._cache.keys; const n = await this._request.send('auth.signInWithTicket', { ticket: e, refresh_token: this._cache.getStore(t) || '' }); if (n.refresh_token)
      return this.setRefreshToken(n.refresh_token), await this._request.refreshAccessToken(), Bf(jf), Bf(Nf, { env: this.config.env, loginType: Rf.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new Kf(this.config.env); throw new Ku({ message: '自定义登录失败' })
  }
} class Xf extends Wf {
  async signIn(e, t) {
    if (typeof e != 'string')
      throw new Ku({ code: 'PARAM_ERROR', message: 'email must be a string' }); const { refreshTokenKey: n } = this._cache.keys; const o = await this._request.send('auth.signIn', { loginType: 'EMAIL', email: e, password: t, refresh_token: this._cache.getStore(n) || '' }); const { refresh_token: r, access_token: i, access_token_expire: s } = o; if (r)
      return this.setRefreshToken(r), i && s ? this.setAccessToken(i, s) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Bf(jf), Bf(Nf, { env: this.config.env, loginType: Rf.EMAIL, persistence: this.config.persistence }), new Kf(this.config.env); throw o.code ? new Ku({ code: o.code, message: `邮箱登录失败: ${o.message}` }) : new Ku({ message: '邮箱登录失败' })
  }

  async activate(e) { return this._request.send('auth.activateEndUserMail', { token: e }) } async resetPasswordWithToken(e, t) { return this._request.send('auth.resetPasswordWithToken', { token: e, newPassword: t }) }
} class Yf extends Wf {
  async signIn(e, t) {
    if (typeof e != 'string')
      throw new Ku({ code: 'PARAM_ERROR', message: 'username must be a string' }); typeof t != 'string' && (t = '', console.warn('password is empty')); const { refreshTokenKey: n } = this._cache.keys; const o = await this._request.send('auth.signIn', { loginType: Rf.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || '' }); const { refresh_token: r, access_token_expire: i, access_token: s } = o; if (r)
      return this.setRefreshToken(r), s && i ? this.setAccessToken(s, i) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Bf(jf), Bf(Nf, { env: this.config.env, loginType: Rf.USERNAME, persistence: this.config.persistence }), new Kf(this.config.env); throw o.code ? new Ku({ code: o.code, message: `用户名密码登录失败: ${o.message}` }) : new Ku({ message: '用户名密码登录失败' })
  }
} class Zf {
  constructor(e) { this.config = e, this._cache = Tf(e.env), this._request = $f(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Cf(Nf, this._onLoginTypeChanged) } get currentUser() { const e = this.hasLoginState(); return e && e.user || null } get loginType() { return this._cache.getStore(this._cache.keys.loginTypeKey) }anonymousAuthProvider() { return new Jf(this.config) }customAuthProvider() { return new Gf(this.config) }emailAuthProvider() { return new Xf(this.config) }usernameAuthProvider() { return new Yf(this.config) } async signInAnonymously() { return new Jf(this.config).signIn() } async signInWithEmailAndPassword(e, t) { return new Xf(this.config).signIn(e, t) }signInWithUsernameAndPassword(e, t) { return new Yf(this.config).signIn(e, t) } async linkAndRetrieveDataWithTicket(e) { return this._anonymousAuthProvider || (this._anonymousAuthProvider = new Jf(this.config)), Cf(Ff, this._onAnonymousConverted), await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e) } async signOut() {
    if (this.loginType === Rf.ANONYMOUS)
      throw new Ku({ message: '匿名用户不支持登出操作' }); const { refreshTokenKey: e, accessTokenKey: t, accessTokenExpireKey: n } = this._cache.keys; const o = this._cache.getStore(e); if (!o)
      return; const r = await this._request.send('auth.logout', { refresh_token: o }); return this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), Bf(jf), Bf(Nf, { env: this.config.env, loginType: Rf.NULL, persistence: this.config.persistence }), r
  }

  async signUpWithEmailAndPassword(e, t) { return this._request.send('auth.signUpWithEmailAndPassword', { email: e, password: t }) } async sendPasswordResetEmail(e) { return this._request.send('auth.sendPasswordResetEmail', { email: e }) }onLoginStateChanged(e) { Cf(jf, () => { const t = this.hasLoginState(); e.call(this, t) }); const t = this.hasLoginState(); e.call(this, t) }onLoginStateExpired(e) { Cf(Lf, e.bind(this)) }onAccessTokenRefreshed(e) { Cf(Df, e.bind(this)) }onAnonymousConverted(e) { Cf(Ff, e.bind(this)) }onLoginTypeChanged(e) { Cf(Nf, () => { const t = this.hasLoginState(); e.call(this, t) }) } async getAccessToken() { return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env } }hasLoginState() { const { refreshTokenKey: e } = this._cache.keys; return this._cache.getStore(e) ? new Kf(this.config.env) : null } async isUsernameRegistered(e) {
    if (typeof e != 'string')
      throw new Ku({ code: 'PARAM_ERROR', message: 'username must be a string' }); const { data: t } = await this._request.send('auth.isUsernameRegistered', { username: e }); return t && t.isRegistered
  }

  getLoginState() { return Promise.resolve(this.hasLoginState()) } async signInWithTicket(e) { return new Gf(this.config).signIn(e) }shouldRefreshAccessToken(e) { this._request._shouldRefreshAccessTokenHook = e.bind(this) }getUserInfo() { return this._request.send('auth.getUserInfo', {}).then((e => e.code ? e : { ...e.data, requestId: e.seqId })) }getAuthHeader() { const { refreshTokenKey: e, accessTokenKey: t } = this._cache.keys; const n = this._cache.getStore(e); return { 'x-cloudbase-credentials': `${this._cache.getStore(t)}/@@/${n}` } }_onAnonymousConverted(e) { const { env: t } = e.data; t === this.config.env && this._cache.updatePersistence(this.config.persistence) }_onLoginTypeChanged(e) { const { loginType: t, persistence: n, env: o } = e.data; o === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t)) }
} const ep = function (e, t) { t = t || gf(); const n = $f(this.config.env); const { cloudPath: o, filePath: r, onUploadProgress: i, fileType: s = 'image' } = e; return n.send('storage.getUploadMetadata', { path: o }).then(((e) => { const { data: { url: a, authorization: c, token: l, fileId: u, cosFileId: f }, requestId: p } = e; const d = { 'key': o, 'signature': c, 'x-cos-meta-fileid': f, 'success_action_status': '201', 'x-cos-security-token': l }; n.upload({ url: a, data: d, file: r, name: o, fileType: s, onUploadProgress: i }).then(((e) => { e.statusCode === 201 ? t(null, { fileID: u, requestId: p }) : t(new Ku({ code: 'STORAGE_REQUEST_FAIL', message: `STORAGE_REQUEST_FAIL: ${e.data}` })) })).catch(((e) => { t(e) })) })).catch(((e) => { t(e) })), t.promise }; const tp = function (e, t) { t = t || gf(); const n = $f(this.config.env); const { cloudPath: o } = e; return n.send('storage.getUploadMetadata', { path: o }).then(((e) => { t(null, e) })).catch(((e) => { t(e) })), t.promise }; const np = function ({ fileList: e }, t) {
  if (t = t || gf(), !e || !Array.isArray(e))
    return { code: 'INVALID_PARAM', message: 'fileList必须是非空的数组' }; for (const o of e) {
    if (!o || typeof o != 'string')
      return { code: 'INVALID_PARAM', message: 'fileList的元素必须是非空的字符串' }
  } const n = { fileid_list: e }; return $f(this.config.env).send('storage.batchDeleteFile', n).then(((e) => { e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId }) })).catch(((e) => { t(e) })), t.promise
}; const op = function ({ fileList: e }, t) { t = t || gf(), e && Array.isArray(e) || t(null, { code: 'INVALID_PARAM', message: 'fileList必须是非空的数组' }); const n = []; for (const r of e) typeof r == 'object' ? (r.hasOwnProperty('fileID') && r.hasOwnProperty('maxAge') || t(null, { code: 'INVALID_PARAM', message: 'fileList的元素必须是包含fileID和maxAge的对象' }), n.push({ fileid: r.fileID, max_age: r.maxAge })) : typeof r == 'string' ? n.push({ fileid: r }) : t(null, { code: 'INVALID_PARAM', message: 'fileList的元素必须是字符串' }); const o = { file_list: n }; return $f(this.config.env).send('storage.batchGetDownloadUrl', o).then(((e) => { e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId }) })).catch(((e) => { t(e) })), t.promise }; const rp = async function ({ fileID: e }, t) {
  const n = (await op.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0]; if (n.code !== 'SUCCESS')
    return t ? t(n) : new Promise(((e) => { e(n) })); const o = $f(this.config.env); let r = n.download_url; if (r = encodeURI(r), !t)
    return o.download({ url: r }); t(await o.download({ url: r }))
}; const ip = function ({ name: e, data: t, query: n, parse: o, search: r }, i) {
  const s = i || gf(); let a; try { a = t ? JSON.stringify(t) : '' }
  catch (l) { return Promise.reject(l) } if (!e)
    return Promise.reject(new Ku({ code: 'PARAM_ERROR', message: '函数名不能为空' })); const c = { inQuery: n, parse: o, search: r, function_name: e, request_data: a }; return $f(this.config.env).send('functions.invokeFunction', c).then(((e) => {
    if (e.code) { s(null, e) }
    else {
      let n = e.data.response_data; if (o) { s(null, { result: n, requestId: e.requestId }) }
      else {
        try { n = JSON.parse(e.data.response_data), s(null, { result: n, requestId: e.requestId }) }
        catch (t) { s(new Ku({ message: 'response data must be json' })) }
      }
    } return s.promise
  })).catch(((e) => { s(e) })), s.promise
}; const sp = { timeout: 15e3, persistence: 'session' }; const ap = {}; class cp {
  constructor(e) { this.config = e || this.config, this.authObj = void 0 }init(e) { switch (vf.adapter || (this.requestClient = new vf.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `请求在${(e.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...sp, ...e }, !0) { case this.config.timeout > 6e5:console.warn('timeout大于可配置上限[10分钟]，已重置为上限数值'), this.config.timeout = 6e5; break; case this.config.timeout < 100:console.warn('timeout小于可配置下限[100ms]，已重置为下限数值'), this.config.timeout = 100 } return new cp(this.config) }auth({ persistence: e } = {}) {
    if (this.authObj)
      return this.authObj; const t = e || vf.adapter.primaryStorage || sp.persistence; let n; return t !== this.config.persistence && (this.config.persistence = t), (function (e) { const { env: t } = e; kf[t] = new xf(e), Pf[t] = new xf({ ...e, persistence: 'local' }) }(this.config)), n = this.config, Hf[n.env] = new zf(n), this.authObj = new Zf(this.config), this.authObj
  }

  on(e, t) { return Cf.apply(this, [e, t]) }off(e, t) { return _f.apply(this, [e, t]) }callFunction(e, t) { return ip.apply(this, [e, t]) }deleteFile(e, t) { return np.apply(this, [e, t]) }getTempFileURL(e, t) { return op.apply(this, [e, t]) }downloadFile(e, t) { return rp.apply(this, [e, t]) }uploadFile(e, t) { return ep.apply(this, [e, t]) }getUploadMetadata(e, t) { return tp.apply(this, [e, t]) }registerExtension(e) { ap[e.name] = e } async invokeExtension(e, t) {
    const n = ap[e]; if (!n)
      throw new Ku({ message: `扩展${e} 必须先注册` }); return await n.invoke(t, this)
  }

  useAdapters(e) {
    const { adapter: t, runtime: n } = (function (e) {
      const t = (n = e, Object.prototype.toString.call(n) === '[object Array]' ? e : [e]); let n; for (const o of t) {
        const { isMatch: e, genAdapter: t, runtime: n } = o; if (e())
          return { adapter: t(), runtime: n }
      }
    }(e)) || {}; t && (vf.adapter = t), n && (vf.runtime = n)
  }
} const lp = new cp(); function up(e, t, n) { void 0 === n && (n = {}); const o = /\?/.test(t); let r = ''; for (const i in n)r === '' ? !o && (t += '?') : r += '&', r += `${i}=${encodeURIComponent(n[i])}`; return /^http(s)?:\/\//.test(t += r) ? t : `${e}${t}` } class fp {post(e) { const { url: t, data: n, headers: o } = e; return new Promise(((e, r) => { Ju.request({ url: up('https:', t), data: n, method: 'POST', header: o, success(t) { e(t) }, fail(e) { r(e) } }) })) }upload(e) { return new Promise(((t, n) => { const { url: o, file: r, data: i, headers: s, fileType: a } = e; const c = Ju.uploadFile({ url: up('https:', o), name: 'file', formData: Object.assign({}, i), filePath: r, fileType: a, header: s, success(e) { const n = { statusCode: e.statusCode, data: e.data || {} }; e.statusCode === 200 && i.success_action_status && (n.statusCode = Number.parseInt(i.success_action_status, 10)), t(n) }, fail(e) { n(new Error(e.errMsg || 'uploadFile:fail')) } }); typeof e.onUploadProgress == 'function' && c && typeof c.onProgressUpdate == 'function' && c.onProgressUpdate(((t) => { e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend }) })) })) }} const pp = { setItem(e, t) { Ju.setStorageSync(e, t) }, getItem: e => Ju.getStorageSync(e), removeItem(e) { Ju.removeStorageSync(e) }, clear() { Ju.clearStorageSync() } }; const dp = { genAdapter() { return { root: {}, reqClass: fp, localStorage: pp, primaryStorage: 'local' } }, isMatch() { return !0 }, runtime: 'uni_app' }; lp.useAdapters(dp); const hp = lp; const gp = hp.init; hp.init = function (e) {
  e.env = e.spaceId; const t = gp.call(this, e); t.config.provider = 'tencent', t.config.spaceId = e.spaceId; const n = t.auth; return t.auth = function (e) {
    const t = n.call(this, e); return ['linkAndRetrieveDataWithTicket', 'signInAnonymously', 'signOut', 'getAccessToken', 'getLoginState', 'signInWithTicket', 'getUserInfo'].forEach(((e) => {
      let n; t[e] = (n = t[e], function (e) {
        e = e || {}; const { success: t, fail: o, complete: r } = Vu(e); if (!(t || o || r))
          return n.call(this, e); n.call(this, e).then((e) => { t && t(e), r && r(e) }, (e) => { o && o(e), r && r(e) })
      }).bind(t)
    })), t
  }, t.customAuth = t.auth, t
}; const mp = hp; const yp = class extends uf {
  getAccessToken() { return new Promise(((e, t) => { const n = 'Anonymous_Access_token'; this.setAccessToken(n), e(n) })) }setupRequest(e, t) { const n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }); const o = { 'Content-Type': 'application/json' }; t !== 'auth' && (n.token = this.accessToken, o['x-basement-token'] = this.accessToken), o['x-serverless-sign'] = rf(n, this.config.clientSecret); const r = of(); o['x-client-info'] = encodeURIComponent(JSON.stringify(r)); const { token: i } = Xu(); return o['x-client-token'] = i, { url: this.config.requestUrl, method: 'POST', data: n, dataType: 'json', header: JSON.parse(JSON.stringify(o)) } }uploadFileToOSS({ url: e, formData: t, name: n, filePath: o, fileType: r, onUploadProgress: i }) { return new Promise(((s, a) => { const c = this.adapter.uploadFile({ url: e, formData: t, name: n, filePath: o, fileType: r, success(e) { e && e.statusCode < 400 ? s(e) : a(new Ku({ code: 'UPLOAD_FAILED', message: '文件上传失败' })) }, fail(e) { a(new Ku({ code: e.code || 'UPLOAD_FAILED', message: e.message || e.errMsg || '文件上传失败' })) } }); typeof i == 'function' && c && typeof c.onProgressUpdate == 'function' && c.onProgressUpdate(((e) => { i({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend }) })) })) }uploadFile({ filePath: e, cloudPath: t, fileType: n = 'image', onUploadProgress: o }) {
    if (!t)
      throw new Ku({ code: 'CLOUDPATH_REQUIRED', message: 'cloudPath不可为空' }); let r; return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(((t) => { const { url: i, formData: s, name: a } = t.result; r = t.result.fileUrl; const c = { url: i, formData: s, name: a, filePath: e, fileType: n }; return this.uploadFileToOSS(Object.assign({}, c, { onUploadProgress: o })) })).then((() => this.reportOSSUpload({ cloudPath: t }))).then((t => new Promise(((n, o) => { t.success ? n({ success: !0, filePath: e, fileID: r }) : o(new Ku({ code: 'UPLOAD_FAILED', message: '文件上传失败' })) }))))
  }

  deleteFile({ fileList: e }) {
    const t = { method: 'serverless.file.resource.delete', params: JSON.stringify({ fileList: e }) }; return this.request(this.setupRequest(t)).then(((e) => {
      if (e.success)
        return e.result; throw new Ku({ code: 'DELETE_FILE_FAILED', message: '删除文件失败' })
    }))
  }

  getTempFileURL({ fileList: e } = {}) {
    if (!Array.isArray(e) || e.length === 0)
      throw new Ku({ code: 'INVALID_PARAM', message: 'fileList的元素必须是非空的字符串' }); const t = { method: 'serverless.file.resource.getTempFileURL', params: JSON.stringify({ fileList: e }) }; return this.request(this.setupRequest(t)).then(((e) => {
      if (e.success)
        return { fileList: e.result.fileList.map((e => ({ fileID: e.fileID, tempFileURL: e.tempFileURL }))) }; throw new Ku({ code: 'GET_TEMP_FILE_URL_FAILED', message: '获取临时文件链接失败' })
    }))
  }
}; const bp = { init(e) { const t = new yp(e); const n = { signInAnonymously() { return t.authorize() }, getLoginState() { return Promise.resolve(!1) } }; return t.auth = function () { return n }, t.customAuth = t.auth, t } }; function vp({ data: e }) { let t; t = of(); const n = JSON.parse(JSON.stringify(e || {})); if (Object.assign(n, { clientInfo: t }), !n.uniIdToken) { const { token: e } = Xu(); e && (n.uniIdToken = e) } return n } const wp = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: '，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间', mode: 'append' }]; const Sp = /[\\^$.*+?()[\]{}|]/g; const Ap = RegExp(Sp.source); function xp(e, t, n) { return e.replace(new RegExp((o = t) && Ap.test(o) ? o.replace(Sp, '\\$&') : o, 'g'), n); let o } const kp = 'request'; const Pp = 'response'; const Tp = 'both'; const Ep = { code: 2e4, message: 'System error' }; const Op = { code: 20101, message: 'Invalid client' }; function Ip(e) { const { errSubject: t, subject: n, errCode: o, errMsg: r, code: i, message: s, cause: a } = e || {}; return new Ku({ subject: t || n || 'uni-secure-network', code: o || i || Ep.code, message: r || s, cause: a }) } let Cp; function Bp({ secretType: e } = {}) { return e === kp || e === Pp || e === Tp } function _p({ name: e, data: t = {} } = {}) { return Su === 'app' } function jp({ functionName: e, result: t, logPvd: n }) {} function Lp(e) {
  const t = e.callFunction; const n = function (n) {
    const o = n.name; n.data = vp.call(e, { data: n.data }); const r = { aliyun: 'aliyun', tencent: 'tcb', tcb: 'tcb' }[this.config.provider]; const i = Bp(n); const s = _p(n); const a = i || s; return t.call(this, n).then(e => (e.errCode = 0, !a && jp.call(this, { functionName: o, result: e, logPvd: r }), Promise.resolve(e)), e => (!a && jp.call(this, { functionName: o, result: e, logPvd: r }), e && e.message && (e.message = (function ({ message: e = '', extraInfo: t = {}, formatter: n = [] } = {}) {
      for (let o = 0; o < n.length; o++) {
        const { rule: r, content: i, mode: s } = n[o]; const a = e.match(r); if (!a)
          continue; let c = i; for (let e = 1; e < a.length; e++)c = xp(c, `{$${e}}`, a[e]); for (const e in t)c = xp(c, `{${e}}`, t[e]); return s === 'replace' ? c : e + c
      } return e
    }({ message: `[${n.name}]: ${e.message}`, formatter: wp, extraInfo: { functionName: o } }))), Promise.reject(e)))
  }; e.callFunction = function (t) {
    const { provider: o, spaceId: r } = e.config; const i = t.name; let s, a; return t.data = t.data || {}, s = n, s = s.bind(e), _p(t) || (a = (function ({ name: e, data: t = {} }) { return e === 'uni-id-co' && t.method === 'secureNetworkHandshakeByWeixin' }(t))
      ? s.call(e, t)
      : Bp(t)
        ? new Cp({ secretType: t.secretType, uniCloudIns: e }).wrapEncryptDataCallFunction(n.bind(e))(t)
        : (function ({ provider: e, spaceId: t, functionName: n } = {}) {
            const { appId: o, uniPlatform: r, osName: i } = tf(); let s = r; r === 'app' && (s = i); const a = (function ({ provider: e, spaceId: t } = {}) {
              if (!wu)
                return {}; let n; e = (n = e) === 'tencent' ? 'tcb' : n; const o = wu.find((n => n.provider === e && n.spaceId === t)); return o && o.config
            }({ provider: e, spaceId: t })); if (!a || !a.accessControl || !a.accessControl.enable)
              return !1; const c = a.accessControl.function || {}; const l = Object.keys(c); if (l.length === 0)
              return !0; const u = (function (e, t) { let n, o, r; for (let i = 0; i < e.length; i++) { const s = e[i]; s !== t ? s !== '*' ? s.split(',').map((e => e.trim())).includes(t) && (o = s) : r = s : n = s } return n || o || r }(l, n)); if (!u)
              return !1; if ((c[u] || []).find(((e = {}) => e.appId === o && (e.platform || '').toLowerCase() === s.toLowerCase())))
              return !0; throw console.error(`此应用[appId: ${o}, platform: ${s}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), Ip(Op)
          }({ provider: o, spaceId: r, functionName: i }))
            ? new Cp({ secretType: t.secretType, uniCloudIns: e }).wrapVerifyClientCallFunction(n.bind(e))(t)
            : s(t)), Object.defineProperty(a, 'result', { get: () => (console.warn('当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise'), {}) }), a
  }
}Cp = class {constructor() { throw Ip({ message: `Platform ${Su} is not enabled, please check whether secure network module is enabled in your manifest.json` }) }}; const Np = Symbol('CLIENT_DB_INTERNAL'); function Fp(e, t) {
  return e.then = 'DoNotReturnProxyWithAFunctionNamedThen', e._internalType = Np, e.inspect = null, e.__v_raw = void 0, new Proxy(e, {
    get(e, n, o) {
      if (n === '_uniClient')
        return null; if (typeof n == 'symbol')
        return e[n]; if (n in e || typeof n != 'string') { const t = e[n]; return typeof t == 'function' ? t.bind(e) : t } return t.get(e, n, o)
    },
  })
} function Dp(e) { return { on: (t, n) => { e[t] = e[t] || [], e[t].includes(n) || e[t].push(n) }, off: (t, n) => { e[t] = e[t] || []; const o = e[t].indexOf(n); o !== -1 && e[t].splice(o, 1) } } } const Rp = ['db.Geo', 'db.command', 'command.aggregate']; function Up(e, t) { return Rp.includes(`${e}.${t}`) } function Mp(e) { switch (pu(e = Gu(e))) { case 'array':return e.map((e => Mp(e))); case 'object':return e._internalType === Np || Object.keys(e).forEach(((t) => { e[t] = Mp(e[t]) })), e; case 'regexp':return { $regexp: { source: e.source, flags: e.flags } }; case 'date':return { $date: e.toISOString() }; default:return e } } function qp(e) { return e && e.content && e.content.$method } class Qp {
  constructor(e, t, n) { this.content = e, this.prevStage = t || null, this.udb = null, this._database = n }toJSON() { let e = this; const t = [e.content]; for (;e.prevStage;)e = e.prevStage, t.push(e.content); return { $db: t.reverse().map((e => ({ $method: e.$method, $param: Mp(e.$param) }))) } }toString() { return JSON.stringify(this.toJSON()) }getAction() { const e = this.toJSON().$db.find((e => e.$method === 'action')); return e && e.$param && e.$param[0] }getCommand() { return { $db: this.toJSON().$db.filter((e => e.$method !== 'action')) } } get isAggregate() {
    let e = this; for (;e;) {
      const t = qp(e); const n = qp(e.prevStage); if (t === 'aggregate' && n === 'collection' || t === 'pipeline')
        return !0; e = e.prevStage
    } return !1
  }

  get isCommand() {
    let e = this; for (;e;) {
      if (qp(e) === 'command')
        return !0; e = e.prevStage
    } return !1
  }

  get isAggregateCommand() {
    let e = this; for (;e;) {
      const t = qp(e); const n = qp(e.prevStage); if (t === 'aggregate' && n === 'command')
        return !0; e = e.prevStage
    } return !1
  }

  getNextStageFn(e) { const t = this; return function () { return zp({ $method: e, $param: Mp(Array.from(arguments)) }, t, t._database) } } get count() { return this.isAggregate ? this.getNextStageFn('count') : function () { return this._send('count', Array.from(arguments)) } } get remove() { return this.isCommand ? this.getNextStageFn('remove') : function () { return this._send('remove', Array.from(arguments)) } }get() { return this._send('get', Array.from(arguments)) } get add() { return this.isCommand ? this.getNextStageFn('add') : function () { return this._send('add', Array.from(arguments)) } }update() { return this._send('update', Array.from(arguments)) }end() { return this._send('end', Array.from(arguments)) } get set() { return this.isCommand ? this.getNextStageFn('set') : function () { throw new Error('JQL禁止使用set方法') } }_send(e, t) { const n = this.getAction(); const o = this.getCommand(); return o.$db.push({ $method: e, $param: Mp(t) }), this._database._callCloudFunction({ action: n, command: o }) }
} function zp(e, t, n) { return Fp(new Qp(e, t, n), { get(e, t) { let o = 'db'; return e && e.content && (o = e.content.$method), Up(o, t) ? zp({ $method: t }, e, n) : function () { return zp({ $method: t, $param: Mp(Array.from(arguments)) }, e, n) } } }) } function Hp({ path: e, method: t }) { return class {constructor() { this.param = Array.from(arguments) }toJSON() { return { $newDb: [...e.map((e => ({ $method: e }))), { $method: t, $param: this.param }] } }toString() { return JSON.stringify(this.toJSON()) }} } function $p(e, t = {}) { return Fp(new e(t), { get: (e, t) => Up('db', t) ? zp({ $method: t }, null, e) : function () { return zp({ $method: t, $param: Mp(Array.from(arguments)) }, null, e) } }) } class Wp extends class {
  constructor({ uniClient: e = {}, isJQL: t = !1 } = {}) { this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = Pu('_globalUniCloudDatabaseCallback')), t || (this.auth = Dp(this._authCallBacks)), this._isJQL = t, Object.assign(this, Dp(this._dbCallBacks)), this.env = Fp({}, { get: (e, t) => ({ $env: t }) }), this.Geo = Fp({}, { get: (e, t) => Hp({ path: ['Geo'], method: t }) }), this.serverDate = Hp({ path: [], method: 'serverDate' }), this.RegExp = Hp({ path: [], method: 'RegExp' }) }getCloudEnv(e) {
    if (typeof e != 'string' || !e.trim())
      throw new Error('getCloudEnv参数错误'); return { $env: e.replace('$cloudEnv_', '') }
  }

  _callback(e, t) { const n = this._dbCallBacks; n[e] && n[e].forEach(((e) => { e(...t) })) }_callbackAuth(e, t) { const n = this._authCallBacks; n[e] && n[e].forEach(((e) => { e(...t) })) }multiSend() {
    const e = Array.from(arguments); const t = e.map(((e) => {
      const t = e.getAction(); const n = e.getCommand(); if (n.$db[n.$db.length - 1].$method !== 'getTemp')
        throw new Error('multiSend只支持子命令内使用getTemp'); return { action: t, command: n }
    })); return this._callCloudFunction({ multiCommand: t, queryList: e })
  }
} {
  _parseResult(e) { return this._isJQL ? e.result : e }_callCloudFunction({ action: e, command: t, multiCommand: n, queryList: o }) {
    function r(e, t) {
      if (n && o)
        for (let n = 0; n < o.length; n++) { const r = o[n]; r.udb && typeof r.udb.setResult == 'function' && (t ? r.udb.setResult(t) : r.udb.setResult(e.result.dataList[n])) }
    } const i = this; const s = this._isJQL ? 'databaseForJQL' : 'database'; function a(e) { return i._callback('error', [e]), Cu(Bu(s, 'fail'), e).then((() => Cu(Bu(s, 'complete'), e))).then((() => (r(null, e), zu(Lu, { type: Du, content: e }), Promise.reject(e)))) } const c = Cu(Bu(s, 'invoke')); const l = this._uniClient; return c.then((() => l.callFunction({ name: 'DCloud-clientDB', type: 'CLIENT_DB', data: { action: e, command: t, multiCommand: n } }))).then((e) => {
      const { code: t, message: n, token: o, tokenExpired: c, systemInfo: l = [] } = e.result; if (l)
        for (let r = 0; r < l.length; r++) { const { level: e, message: t, detail: n } = l[r]; let o = `[System Info]${t}`; n && (o = `${o}\n详细信息：${n}`), (console[e] || console.log)(o) } if (t)
        return a(new Ku({ code: t, message: n, requestId: e.requestId })); e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, o && c && (Yu({ token: o, tokenExpired: c }), this._callbackAuth('refreshToken', [{ token: o, tokenExpired: c }]), this._callback('refreshToken', [{ token: o, tokenExpired: c }]), zu(Fu, { token: o, tokenExpired: c })); const u = [{ prop: 'affectedDocs', tips: 'affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代' }, { prop: 'code', tips: 'code不再推荐使用，请使用errCode替代' }, { prop: 'message', tips: 'message不再推荐使用，请使用errMsg替代' }]; for (let r = 0; r < u.length; r++) { const { prop: t, tips: n } = u[r]; if (t in e.result) { const o = e.result[t]; Object.defineProperty(e.result, t, { get: () => (console.warn(n), o) }) } } return f = e, Cu(Bu(s, 'success'), f).then((() => Cu(Bu(s, 'complete'), f))).then((() => { r(f, null); const e = i._parseResult(f); return zu(Lu, { type: Du, content: e }), Promise.resolve(e) })); let f
    }, e => (/fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn('clientDB未初始化，请在web控制台保存一次schema以开启clientDB'), a(new Ku({ code: e.code || 'SYSTEM_ERROR', message: e.message, requestId: e.requestId }))))
  }
} const Vp = 'token无效，跳转登录页面'; const Kp = 'token过期，跳转登录页面'; const Jp = { TOKEN_INVALID_TOKEN_EXPIRED: Kp, TOKEN_INVALID_INVALID_CLIENTID: Vp, TOKEN_INVALID: Vp, TOKEN_INVALID_WRONG_TOKEN: Vp, TOKEN_INVALID_ANONYMOUS_USER: Vp }; const Gp = { 'uni-id-token-expired': Kp, 'uni-id-check-token-failed': Vp, 'uni-id-token-not-exist': Vp, 'uni-id-check-device-feature-failed': Vp }; function Xp(e, t) { let n = ''; return n = e ? `${e}/${t}` : t, n.replace(/^\//, '') } function Yp(e = [], t = '') { const n = []; const o = []; return e.forEach(((e) => { !0 === e.needLogin ? n.push(Xp(t, e.path)) : !1 === e.needLogin && o.push(Xp(t, e.path)) })), { needLoginPage: n, notNeedLoginPage: o } } function Zp(e) { return e.split('?')[0].replace(/^\//, '') } function ed() { return (function (e) { let t = e && e.$page && e.$page.fullPath || ''; return t ? (t.charAt(0) !== '/' && (t = `/${t}`), t) : t }(function () { const e = getCurrentPages(); return e[e.length - 1] }())) } function td() { return Zp(ed()) } function nd(e = '', t = {}) {
  if (!e)
    return !1; if (!(t && t.list && t.list.length))
    return !1; const n = t.list; const o = Zp(e); return n.some((e => e.pagePath === o))
} const od = !!nu.uniIdRouter; const { loginPage: rd, routerNeedLogin: id, resToLogin: sd, needLoginPage: ad, notNeedLoginPage: cd, loginPageInTabBar: ld } = (function ({ pages: e = [], subPackages: t = [], uniIdRouter: n = {}, tabBar: o = {} } = nu) { const { loginPage: r, needLogin: i = [], resToLogin: s = !0 } = n; const { needLoginPage: a, notNeedLoginPage: c } = Yp(e); const { needLoginPage: l, notNeedLoginPage: u } = (function (e = []) { const t = []; const n = []; return e.forEach(((e) => { const { root: o, pages: r = [] } = e; const { needLoginPage: i, notNeedLoginPage: s } = Yp(r, o); t.push(...i), n.push(...s) })), { needLoginPage: t, notNeedLoginPage: n } }(t)); return { loginPage: r, routerNeedLogin: i, resToLogin: s, needLoginPage: [...a, ...l], notNeedLoginPage: [...c, ...u], loginPageInTabBar: nd(r, o) } }()); if (ad.includes(rd))
  throw new Error(`Login page [${rd}] should not be "needLogin", please check your pages.json`); function ud(e) {
  const t = td(); if (e.charAt(0) === '/')
    return e; const [n, o] = e.split('?'); const r = n.replace(/^\//, '').split('/'); const i = t.split('/'); i.pop(); for (let s = 0; s < r.length; s++) { const e = r[s]; e === '..' ? i.pop() : e !== '.' && i.push(e) } return i[0] === '' && i.shift(), `/${i.join('/')}${o ? `?${o}` : ''}`
} function fd({ redirect: e }) { const t = Zp(e); const n = Zp(rd); return td() !== n && t !== n } function pd({ api: e, redirect: t } = {}) {
  if (!t || !fd({ redirect: t }))
    return; const n = (r = t, (o = rd).charAt(0) !== '/' && (o = `/${o}`), r ? o.includes('?') ? `${o}&uniIdRedirectUrl=${encodeURIComponent(r)}` : `${o}?uniIdRedirectUrl=${encodeURIComponent(r)}` : o); let o, r; ld ? e !== 'navigateTo' && e !== 'redirectTo' || (e = 'switchTab') : e === 'switchTab' && (e = 'navigateTo'); const i = { navigateTo: jn.navigateTo, redirectTo: jn.redirectTo, switchTab: jn.switchTab, reLaunch: jn.reLaunch }; setTimeout((() => { i[e]({ url: n }) }))
} function dd({ url: e } = {}) {
  const t = { abortLoginPageJump: !1, autoToLoginPage: !1 }; const n = (function () {
    const { token: e, tokenExpired: t } = Xu(); let n; if (e) { if (t < Date.now()) { const e = 'uni-id-token-expired'; n = { errCode: e, errMsg: Gp[e] } } }
    else { const e = 'uni-id-check-token-failed'; n = { errCode: e, errMsg: Gp[e] } } return n
  }()); if ((function (e) { const t = Zp(ud(e)); return !(cd.includes(t)) && (ad.includes(t) || id.some(((t) => { return n = e, new RegExp(t).test(n); let n }))) }(e)) && n) {
    if (n.uniIdRedirectUrl = e, Mu(Nu).length > 0)
      return setTimeout(() => { zu(Nu, n) }, 0), t.abortLoginPageJump = !0, t; t.autoToLoginPage = !0
  } return t
} function hd() { !(function () { const e = ed(); const { abortLoginPageJump: t, autoToLoginPage: n } = dd({ url: e }); t || n && pd({ api: 'redirectTo', redirect: e }) }()); const e = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']; for (let t = 0; t < e.length; t++) { const n = e[t]; jn.addInterceptor(n, { invoke(e) { const { abortLoginPageJump: t, autoToLoginPage: o } = dd({ url: e.url }); return t ? e : o ? (pd({ api: n, redirect: ud(e.url) }), !1) : e } }) } } function gd() {
  this.onResponse(((e) => {
    const { type: t, content: n } = e; let o = !1; switch (t) {
      case 'cloudobject':o = (function (e) {
        if (typeof e != 'object')
          return !1; const { errCode: t } = e || {}; return t in Gp
      }(n)); break; case 'clientdb':o = (function (e) {
        if (typeof e != 'object')
          return !1; const { errCode: t } = e || {}; return t in Jp
      }(n))
    }o && (function (e = {}) {
      const t = Mu(Nu); Wu().then((() => {
        const n = ed(); if (n && fd({ redirect: n }))
          return t.length > 0 ? zu(Nu, Object.assign({ uniIdRedirectUrl: n }, e)) : void (rd && pd({ api: 'navigateTo', redirect: n }))
      }))
    }(n))
  }))
} function md(e) { let t; (t = e).onResponse = function (e) { qu(Lu, e) }, t.offResponse = function (e) { Qu(Lu, e) }, (function (e) { e.onNeedLogin = function (e) { qu(Nu, e) }, e.offNeedLogin = function (e) { Qu(Nu, e) }, od && (Pu('_globalUniCloudStatus').needLoginInit || (Pu('_globalUniCloudStatus').needLoginInit = !0, Wu().then((() => { hd.call(e) })), sd && gd.call(e))) }(e)), (function (e) { e.onRefreshToken = function (e) { qu(Fu, e) }, e.offRefreshToken = function (e) { Qu(Fu, e) } }(e)) } let yd; const bd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; const vd = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/; function wd() {
  const e = Xu().token || ''; const t = e.split('.'); if (!e || t.length !== 3)
    return { uid: null, role: [], permission: [], tokenExpired: 0 }; let n; try { n = JSON.parse((o = t[1], decodeURIComponent(yd(o).split('').map(((e) => { return `%${(`00${e.charCodeAt(0).toString(16)}`).slice(-2)}` })).join('')))) }
  catch (r) { throw new Error(`获取当前用户信息出错，详细错误信息为：${r.message}`) } let o; return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n
}yd = typeof atob != 'function'
  ? function (e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ''), !vd.test(e))
      throw new Error('Failed to execute \'atob\' on \'Window\': The string to be decoded is not correctly encoded.'); let t; e += '=='.slice(2 - (3 & e.length)); for (var n, o, r = '', i = 0; i < e.length;)t = bd.indexOf(e.charAt(i++)) << 18 | bd.indexOf(e.charAt(i++)) << 12 | (n = bd.indexOf(e.charAt(i++))) << 6 | (o = bd.indexOf(e.charAt(i++))), r += n === 64 ? String.fromCharCode(t >> 16 & 255) : o === 64 ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t); return r
  }
  : atob; const Sd = (function (e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e }(ou(((e, t) => {
  Object.defineProperty(t, '__esModule', { value: !0 }); const n = 'chooseAndUploadFile:ok'; const o = 'chooseAndUploadFile:fail'; function r(e, t) { return e.tempFiles.forEach(((e, n) => { e.name || (e.name = e.path.substring(e.path.lastIndexOf('/') + 1)), t && (e.fileType = t), e.cloudPath = `${Date.now()}_${n}${e.name.substring(e.name.lastIndexOf('.'))}` })), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map((e => e.path))), e } function i(e, t, { onChooseFile: o, onUploadProgress: r }) {
    return t.then(((e) => {
      if (o) {
        const t = o(e); if (void 0 !== t)
          return Promise.resolve(t).then((t => void 0 === t ? e : t))
      } return e
    })).then((t => !1 === t
      ? { errMsg: n, tempFilePaths: [], tempFiles: [] }
      : (function (e, t, o = 5, r) {
          (t = Object.assign({}, t)).errMsg = n; const i = t.tempFiles; const s = i.length; let a = 0; return new Promise(((n) => {
            for (;a < o;)c(); function c() {
              const o = a++; if (o >= s)
                return void (!i.find((e => !e.url && !e.errMsg)) && n(t)); const l = i[o]; e.uploadFile({ filePath: l.path, cloudPath: l.cloudPath, fileType: l.fileType, onUploadProgress(e) { e.index = o, e.tempFile = l, e.tempFilePath = l.path, r && r(e) } }).then(((e) => { l.url = e.fileID, o < s && c() })).catch(((e) => { l.errMsg = e.errMsg || e.message, o < s && c() }))
            }
          }))
        }(e, t, 5, r))))
  }t.initChooseAndUploadFile = function (e) {
    return function (t = { type: 'all' }) {
      return t.type === 'image'
        ? i(e, (function (e) { const { count: t, sizeType: n, sourceType: i = ['album', 'camera'], extension: s } = e; return new Promise(((e, a) => { jn.chooseImage({ count: t, sizeType: n, sourceType: i, extension: s, success(t) { e(r(t, 'image')) }, fail(e) { a({ errMsg: e.errMsg.replace('chooseImage:fail', o) }) } }) })) }(t)), t)
        : t.type === 'video'
          ? i(e, (function (e) { const { camera: t, compressed: n, maxDuration: i, sourceType: s = ['album', 'camera'], extension: a } = e; return new Promise(((e, c) => { jn.chooseVideo({ camera: t, compressed: n, maxDuration: i, sourceType: s, extension: a, success(t) { const { tempFilePath: n, duration: o, size: i, height: s, width: a } = t; e(r({ errMsg: 'chooseVideo:ok', tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || '', path: n, size: i, type: t.tempFile && t.tempFile.type || '', width: a, height: s, duration: o, fileType: 'video', cloudPath: '' }] }, 'video')) }, fail(e) { c({ errMsg: e.errMsg.replace('chooseVideo:fail', o) }) } }) })) }(t)), t)
          : i(e, (function (e) {
            const { count: t, extension: n } = e; return new Promise(((e, i) => {
              let s = jn.chooseFile; if (void 0 !== _n && typeof _n.chooseMessageFile == 'function' && (s = _n.chooseMessageFile), typeof s != 'function')
                return i({ errMsg: `${o} 请指定 type 类型，该平台仅支持选择 image 或 video。` }); s({ type: 'all', count: t, extension: n, success(t) { e(r(t)) }, fail(e) { i({ errMsg: e.errMsg.replace('chooseFile:fail', o) }) } })
            }))
          }(t)), t)
    }
  }
})))); function Ad(e) {
  return {
    props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: '' }, action: { type: String, default: '' }, field: { type: String, default: '' }, orderby: { type: String, default: '' }, where: { type: [String, Object], default: '' }, pageData: { type: String, default: 'add' }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: '' }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: '' }, groupField: { type: String, default: '' }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: '' }, loadtime: { type: String, default: 'auto' }, manual: { type: Boolean, default: !1 } },
    data: () => ({ mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: '', mixinDatacomPage: {} }),
    created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => { const e = []; return ['pageCurrent', 'pageSize', 'localdata', 'collection', 'action', 'field', 'orderby', 'where', 'getont', 'getcount', 'gettree', 'groupby', 'groupField', 'distinct'].forEach(((t) => { e.push(this[t]) })), e }, (e, t) => {
        if (this.loadtime === 'manual')
          return; let n = !1; const o = []; for (let r = 2; r < e.length; r++)e[r] !== t[r] && (o.push(e[r]), n = !0); e[0] !== t[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n, o)
      })
    },
    methods: { onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet({ getone: e = !1, success: t, fail: n } = {}) { this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = '', this.mixinDatacomGet().then(((n) => { this.mixinDatacomLoading = !1; const { data: o, count: r } = n.result; this.getcount && (this.mixinDatacomPage.count = r), this.mixinDatacomHasMore = o.length < this.pageSize; const i = e ? o.length ? o[0] : void 0 : o; this.mixinDatacomResData = i, t && t(i) })).catch(((e) => { this.mixinDatacomLoading = !1, this.mixinDatacomErrorMessage = e, n && n(e) }))) }, mixinDatacomGet(t = {}) { let n = e.database(this.spaceInfo); const o = t.action || this.action; o && (n = n.action(o)); const r = t.collection || this.collection; n = Array.isArray(r) ? n.collection(...r) : n.collection(r); const i = t.where || this.where; i && Object.keys(i).length && (n = n.where(i)); const s = t.field || this.field; s && (n = n.field(s)); const a = t.foreignKey || this.foreignKey; a && (n = n.foreignKey(a)); const c = t.groupby || this.groupby; c && (n = n.groupBy(c)); const l = t.groupField || this.groupField; l && (n = n.groupField(l)), !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct()); const u = t.orderby || this.orderby; u && (n = n.orderBy(u)); const f = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current; const p = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size; const d = void 0 !== t.getcount ? t.getcount : this.getcount; const h = void 0 !== t.gettree ? t.gettree : this.gettree; const g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath; const m = { getCount: d }; const y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith }; return h && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(p * (f - 1)).limit(p).get(m), n } },
  }
} function xd(e) { return Pu('_globalUniCloudSecureNetworkCache__{spaceId}'.replace('{spaceId}', e.config.spaceId)) } async function kd({ openid: e, callLoginByWeixin: t = !1 } = {}) {
  const n = xd(this); if (e && t)
    throw new Error('[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time'); if (e)
    return n.mpWeixinOpenid = e, {}; const o = await new Promise(((e, t) => { jn.login({ success(t) { e(t.code) }, fail(e) { t(new Error(e.errMsg)) } }) })); const r = this.importObject('uni-id-co', { customUI: !0 }); return await r.secureNetworkHandshakeByWeixin({ code: o, callLoginByWeixin: t }), n.mpWeixinCode = o, { code: o }
} async function Pd(e) { const t = xd(this); return t.initPromise || (t.initPromise = kd.call(this, e)), t.initPromise } function Td(e) { const t = { getSystemInfo: jn.getSystemInfo, getPushClientId: jn.getPushClientId }; return function (n) { return new Promise(((o, r) => { t[e]({ ...n, success(e) { o(e) }, fail(e) { r(e) } }) })) } } class Ed extends class {
  constructor() { this._callback = {} }addListener(e, t) { this._callback[e] || (this._callback[e] = []), this._callback[e].push(t) }on(e, t) { return this.addListener(e, t) }removeListener(e, t) {
    if (!t)
      throw new Error('The "listener" argument must be of type function. Received undefined'); const n = this._callback[e]; if (!n)
      return; const o = (function (e, t) {
      for (let n = e.length - 1; n >= 0; n--) {
        if (e[n] === t)
          return n
      } return -1
    }(n, t)); n.splice(o, 1)
  }

  off(e, t) { return this.removeListener(e, t) }removeAllListener(e) { delete this._callback[e] }emit(e, ...t) {
    const n = this._callback[e]; if (n)
      for (let o = 0; o < n.length; o++)n[o](...t)
  }
} {
  constructor() { super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [] }init() {
    return Promise.all([Td('getSystemInfo')(), Td('getPushClientId')()]).then(([{ appId: e } = {}, { cid: t } = {}] = []) => {
      if (!e)
        throw new Error('Invalid appId, please check the manifest.json file'); if (!t)
        throw new Error('Invalid push client id'); this._appId = e, this._pushClientId = t, this._seqId = `${Date.now()}-${Math.floor(9e5 * Math.random() + 1e5)}`, this.emit('open'), this._initMessageListener()
    }, (e) => { throw this.emit('error', e), this.close(), e })
  }

  async open() { return this.init() }_isUniCloudSSE(e) {
    if (e.type !== 'receive')
      return !1; const t = e && e.data && e.data.payload; return !(!t || t.channel !== 'UNI_CLOUD_SSE' || t.seqId !== this._seqId)
  }

  _receivePushMessage(e) {
    if (!this._isUniCloudSSE(e))
      return; const t = e && e.data && e.data.payload; const { action: n, messageId: o, message: r } = t; this._payloadQueue.push({ action: n, messageId: o, message: r }), this._consumMessage()
  }

  _consumMessage() {
    for (;;) {
      const e = this._payloadQueue.find((e => e.messageId === this._currentMessageId + 1)); if (!e)
        break; this._currentMessageId++, this._parseMessagePayload(e)
    }
  }

  _parseMessagePayload(e) { const { action: t, messageId: n, message: o } = e; t === 'end' ? this._end({ messageId: n, message: o }) : t === 'message' && this._appendMessage({ messageId: n, message: o }) }_appendMessage({ messageId: e, message: t } = {}) { this.emit('message', t) }_end({ messageId: e, message: t } = {}) { this.emit('end', t), this.close() }_initMessageListener() { jn.onPushMessage(this._uniPushMessageCallback) }_destroy() { jn.offPushMessage(this._uniPushMessageCallback) }toJSON() { return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId } }close() { this._destroy(), this.emit('close') }
} const Od = { tcb: mp, tencent: mp, aliyun: ff, private: bp }; let Id = new class {
  init(e) {
    let t = {}; const n = Od[e.provider]; if (!n)
      throw new Error('未提供正确的provider参数'); let o; return t = n.init(e), (function (e) { e._initPromiseHub || (e._initPromiseHub = new bu({ createPromise() { let t = Promise.resolve(); t = new Promise(((e) => { setTimeout(() => { e() }, 1) })); const n = e.auth(); return t.then((() => n.getLoginState())).then((e => e ? Promise.resolve() : n.signInAnonymously())) } })) }(t)), Lp(t), (function (e) { const t = e.uploadFile; e.uploadFile = function (e) { return t.call(this, e) } }(t)), (o = t).database = function (e) {
      if (e && Object.keys(e).length > 0)
        return o.init(e).database(); if (this._database)
        return this._database; const t = $p(Wp, { uniClient: o }); return this._database = t, t
    }, o.databaseForJQL = function (e) {
      if (e && Object.keys(e).length > 0)
        return o.init(e).databaseForJQL(); if (this._databaseForJQL)
        return this._databaseForJQL; const t = $p(Wp, { uniClient: o, isJQL: !0 }); return this._databaseForJQL = t, t
    }, (function (e) {
      e.getCurrentUserInfo = wd, e.chooseAndUploadFile = Sd.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() { return Ad(e) } }), e.SSEChannel = Ed, e.initSecureNetworkByWeixin = (function (e) { return function ({ openid: t, callLoginByWeixin: n = !1 } = {}) { return Pd.call(e, { openid: t, callLoginByWeixin: n }) } }(e)), e.importObject = (function (t) {
        return function (n, o = {}) {
          o = (function (e, t = {}) { return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), typeof t.secretMethods == 'object' && (e.secretMethods = t.secretMethods), e }({ customUI: !1, loadingOptions: { title: '加载中...', mask: !0 }, errorOptions: { type: 'modal', retry: !1 } }, o)); const { customUI: r, loadingOptions: i, errorOptions: s, parseSystemError: a } = o; const c = !r; return new Proxy({}, {
            get: (r, l) => (function ({ fn: e, interceptorName: t, getCallbackArgs: n } = {}) {
              return async function (...o) {
                const r = n ? n({ params: o }) : {}; let i, s; try { return await Cu(Bu(t, 'invoke'), { ...r }), i = await e(...o), await Cu(Bu(t, 'success'), { ...r, result: i }), i }
                catch (a) { throw s = a, await Cu(Bu(t, 'fail'), { ...r, error: s }), s }
                finally { await Cu(Bu(t, 'complete'), s ? { ...r, error: s } : { ...r, result: i }) }
              }
            }({
              fn: async function r(...u) {
                let f; c && jn.showLoading({ title: i.title, mask: i.mask }); const p = { name: n, type: 'OBJECT', data: { method: l, params: u } }; typeof o.secretMethods == 'object' && (function (e, t) { const n = t.data.method; const o = e.secretMethods || {}; const r = o[n] || o['*']; r && (t.secretType = r) }(o, p)); let d = !1; try { f = await t.callFunction(p) }
                catch (e) { d = !0, f = { result: new Ku(e) } } const { errSubject: h, errCode: g, errMsg: m, newToken: y } = f.result || {}; if (c && jn.hideLoading(), y && y.token && y.tokenExpired && (Yu(y), zu(Fu, { ...y })), g) {
                  let e = m; if (d && a && (e = (await a({ objectName: n, methodName: l, params: u, errSubject: h, errCode: g, errMsg: m })).errMsg || m), c) {
                    if (s.type === 'toast') { jn.showToast({ title: e, icon: 'none' }) }
                    else {
                      if (s.type !== 'modal')
                        throw new Error(`Invalid errorOptions.type: ${s.type}`); { const { confirm: t } = await (async function ({ title: e, content: t, showCancel: n, cancelText: o, confirmText: r } = {}) { return new Promise(((i, s) => { jn.showModal({ title: e, content: t, showCancel: n, cancelText: o, confirmText: r, success(e) { i(e) }, fail() { i({ confirm: !1, cancel: !0 }) } }) })) }({ title: '提示', content: e, showCancel: s.retry, cancelText: '取消', confirmText: s.retry ? '重试' : '确定' })); if (s.retry && t)
                        return r(...u) }
                    }
                  } const t = new Ku({ subject: h, code: g, message: m, requestId: f.requestId }); throw t.detail = f.result, zu(Lu, { type: Uu, content: t }), t
                } return zu(Lu, { type: Uu, content: f.result }), f.result
              },
              interceptorName: 'callObject',
              getCallbackArgs({ params: e } = {}) { return { objectName: n, methodName: l, params: e } },
            })),
          })
        }
      }(e))
    }(t)), ['callFunction', 'uploadFile', 'deleteFile', 'getTempFileURL', 'downloadFile', 'chooseAndUploadFile'].forEach(((e) => {
      if (!t[e])
        return; const n = t[e]; let o, r; t[e] = function () { return n.apply(t, Array.from(arguments)) }, t[e] = (o = t[e], r = e, function (e) {
        let t = !1; if (r === 'callFunction') { const n = e && e.type || lu; t = n !== lu } const n = r === 'callFunction' && !t; const i = this._initPromiseHub.exec(); e = e || {}; const { success: s, fail: a, complete: c } = Vu(e); const l = i.then((() => t ? Promise.resolve() : Cu(Bu(r, 'invoke'), e))).then((() => o.call(this, e))).then(e => t ? Promise.resolve(e) : Cu(Bu(r, 'success'), e).then((() => Cu(Bu(r, 'complete'), e))).then((() => (n && zu(Lu, { type: Ru, content: e }), Promise.resolve(e)))), e => t ? Promise.reject(e) : Cu(Bu(r, 'fail'), e).then((() => Cu(Bu(r, 'complete'), e))).then((() => (zu(Lu, { type: Ru, content: e }), Promise.reject(e))))); if (!(s || a || c))
          return l; l.then((e) => { s && s(e), c && c(e), n && zu(Lu, { type: Ru, content: e }) }, (e) => { a && a(e), c && c(e), n && zu(Lu, { type: Ru, content: e }) })
      }).bind(t)
    })), t.init = this.init, t
  }
}(); (() => {
  const e = Au; let t = {}; if (e && e.length === 1) { t = e[0], Id = Id.init(t), Id._isDefault = !0 }
  else { const t = ['auth', 'callFunction', 'uploadFile', 'deleteFile', 'getTempFileURL', 'downloadFile', 'database', 'getCurrentUSerInfo', 'importObject']; let n; n = e && e.length > 0 ? '应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间' : 'uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间', t.forEach(((e) => { Id[e] = function () { return console.error(n), Promise.reject(new Ku({ code: 'SYS_ERR', message: n })) } })) }Object.assign(Id, { get mixinDatacom() { return Ad(Id) } }), md(Id), Id.addInterceptor = Ou, Id.removeInterceptor = Iu, Id.interceptObject = _u
})(); const Cd = Id; const Bd = { props: { name: { type: [String, Number, null], default: Pc.tabbarItem.name }, icon: { icon: String, default: Pc.tabbarItem.icon }, badge: { type: [String, Number, null], default: Pc.tabbarItem.badge }, dot: { type: Boolean, default: Pc.tabbarItem.dot }, text: { type: String, default: Pc.tabbarItem.text }, badgeStyle: { type: [Object, String], default: Pc.tabbarItem.badgeStyle } } }; const _d = { props: { value: { type: [String, Number, null], default: Pc.tabbar.value }, safeAreaInsetBottom: { type: Boolean, default: Pc.tabbar.safeAreaInsetBottom }, border: { type: Boolean, default: Pc.tabbar.border }, zIndex: { type: [String, Number], default: Pc.tabbar.zIndex }, activeColor: { type: String, default: Pc.tabbar.activeColor }, inactiveColor: { type: String, default: Pc.tabbar.inactiveColor }, fixed: { type: Boolean, default: Pc.tabbar.fixed }, placeholder: { type: Boolean, default: Pc.tabbar.placeholder } } }; const jd = { props: { show: { type: Boolean, default: Pc.popup.show }, overlay: { type: Boolean, default: Pc.popup.overlay }, mode: { type: String, default: Pc.popup.mode }, duration: { type: [String, Number], default: Pc.popup.duration }, closeable: { type: Boolean, default: Pc.popup.closeable }, overlayStyle: { type: [Object, String], default: Pc.popup.overlayStyle }, closeOnClickOverlay: { type: Boolean, default: Pc.popup.closeOnClickOverlay }, zIndex: { type: [String, Number], default: Pc.popup.zIndex }, safeAreaInsetBottom: { type: Boolean, default: Pc.popup.safeAreaInsetBottom }, safeAreaInsetTop: { type: Boolean, default: Pc.popup.safeAreaInsetTop }, closeIconPos: { type: String, default: Pc.popup.closeIconPos }, round: { type: [Boolean, String, Number], default: Pc.popup.round }, zoom: { type: Boolean, default: Pc.popup.zoom }, bgColor: { type: String, default: Pc.popup.bgColor }, overlayOpacity: { type: [Number, String], default: Pc.popup.overlayOpacity } } }; const Ld = { props: { safeAreaInsetTop: { type: Boolean, default: Pc.navbar.safeAreaInsetTop }, placeholder: { type: Boolean, default: Pc.navbar.placeholder }, fixed: { type: Boolean, default: Pc.navbar.fixed }, border: { type: Boolean, default: Pc.navbar.border }, leftIcon: { type: String, default: Pc.navbar.leftIcon }, leftText: { type: String, default: Pc.navbar.leftText }, rightText: { type: String, default: Pc.navbar.rightText }, rightIcon: { type: String, default: Pc.navbar.rightIcon }, title: { type: [String, Number], default: Pc.navbar.title }, bgColor: { type: String, default: Pc.navbar.bgColor }, titleWidth: { type: [String, Number], default: Pc.navbar.titleWidth }, height: { type: [String, Number], default: Pc.navbar.height }, leftIconSize: { type: [String, Number], default: Pc.navbar.leftIconSize }, leftIconColor: { type: String, default: Pc.navbar.leftIconColor }, autoBack: { type: Boolean, default: Pc.navbar.autoBack }, titleStyle: { type: [String, Object], default: Pc.navbar.titleStyle } } }; const Nd = { props: { name: { type: [String, Number, Boolean], default: Pc.checkbox.name }, shape: { type: String, default: Pc.checkbox.shape }, size: { type: [String, Number], default: Pc.checkbox.size }, checked: { type: Boolean, default: Pc.checkbox.checked }, disabled: { type: [String, Boolean], default: Pc.checkbox.disabled }, activeColor: { type: String, default: Pc.checkbox.activeColor }, inactiveColor: { type: String, default: Pc.checkbox.inactiveColor }, iconSize: { type: [String, Number], default: Pc.checkbox.iconSize }, iconColor: { type: String, default: Pc.checkbox.iconColor }, label: { type: [String, Number], default: Pc.checkbox.label }, labelSize: { type: [String, Number], default: Pc.checkbox.labelSize }, labelColor: { type: String, default: Pc.checkbox.labelColor }, labelDisabled: { type: [String, Boolean], default: Pc.checkbox.labelDisabled } } }; const Fd = { props: { name: { type: String, default: Pc.checkboxGroup.name }, modelValue: { type: Array, default: Pc.checkboxGroup.value }, shape: { type: String, default: Pc.checkboxGroup.shape }, disabled: { type: Boolean, default: Pc.checkboxGroup.disabled }, activeColor: { type: String, default: Pc.checkboxGroup.activeColor }, inactiveColor: { type: String, default: Pc.checkboxGroup.inactiveColor }, size: { type: [String, Number], default: Pc.checkboxGroup.size }, placement: { type: String, default: Pc.checkboxGroup.placement }, labelSize: { type: [String, Number], default: Pc.checkboxGroup.labelSize }, labelColor: { type: [String], default: Pc.checkboxGroup.labelColor }, labelDisabled: { type: Boolean, default: Pc.checkboxGroup.labelDisabled }, iconColor: { type: String, default: Pc.checkboxGroup.iconColor }, iconSize: { type: [String, Number], default: Pc.checkboxGroup.iconSize }, iconPlacement: { type: String, default: Pc.checkboxGroup.iconPlacement }, borderBottom: { type: Boolean, default: Pc.checkboxGroup.borderBottom } } }; const Dd = { props: { lang: String, sessionFrom: String, sendMessageTitle: String, sendMessagePath: String, sendMessageImg: String, showMessageCard: Boolean, appParameter: String, formType: String, openType: String } }; const Rd = { props: { openType: String }, methods: { onGetUserInfo(e) { this.$emit('getuserinfo', e.detail) }, onContact(e) { this.$emit('contact', e.detail) }, onGetPhoneNumber(e) { this.$emit('getphonenumber', e.detail) }, onError(e) { this.$emit('error', e.detail) }, onLaunchApp(e) { this.$emit('launchapp', e.detail) }, onOpenSetting(e) { this.$emit('opensetting', e.detail) } } }; const Ud = { props: { hairline: { type: Boolean, default: Pc.button.hairline }, type: { type: String, default: Pc.button.type }, size: { type: String, default: Pc.button.size }, shape: { type: String, default: Pc.button.shape }, plain: { type: Boolean, default: Pc.button.plain }, disabled: { type: Boolean, default: Pc.button.disabled }, loading: { type: Boolean, default: Pc.button.loading }, loadingText: { type: [String, Number], default: Pc.button.loadingText }, loadingMode: { type: String, default: Pc.button.loadingMode }, loadingSize: { type: [String, Number], default: Pc.button.loadingSize }, openType: { type: String, default: Pc.button.openType }, formType: { type: String, default: Pc.button.formType }, appParameter: { type: String, default: Pc.button.appParameter }, hoverStopPropagation: { type: Boolean, default: Pc.button.hoverStopPropagation }, lang: { type: String, default: Pc.button.lang }, sessionFrom: { type: String, default: Pc.button.sessionFrom }, sendMessageTitle: { type: String, default: Pc.button.sendMessageTitle }, sendMessagePath: { type: String, default: Pc.button.sendMessagePath }, sendMessageImg: { type: String, default: Pc.button.sendMessageImg }, showMessageCard: { type: Boolean, default: Pc.button.showMessageCard }, dataName: { type: String, default: Pc.button.dataName }, throttleTime: { type: [String, Number], default: Pc.button.throttleTime }, hoverStartTime: { type: [String, Number], default: Pc.button.hoverStartTime }, hoverStayTime: { type: [String, Number], default: Pc.button.hoverStayTime }, text: { type: [String, Number], default: Pc.button.text }, icon: { type: String, default: Pc.button.icon }, iconColor: { type: String, default: Pc.button.icon }, color: { type: String, default: Pc.button.color } } }; const Md = { props: { show: { type: Boolean, default: Pc.modal.show }, title: { type: [String], default: Pc.modal.title }, content: { type: String, default: Pc.modal.content }, confirmText: { type: String, default: Pc.modal.confirmText }, cancelText: { type: String, default: Pc.modal.cancelText }, showConfirmButton: { type: Boolean, default: Pc.modal.showConfirmButton }, showCancelButton: { type: Boolean, default: Pc.modal.showCancelButton }, confirmColor: { type: String, default: Pc.modal.confirmColor }, cancelColor: { type: String, default: Pc.modal.cancelColor }, buttonReverse: { type: Boolean, default: Pc.modal.buttonReverse }, zoom: { type: Boolean, default: Pc.modal.zoom }, asyncClose: { type: Boolean, default: Pc.modal.asyncClose }, closeOnClickOverlay: { type: Boolean, default: Pc.modal.closeOnClickOverlay }, negativeTop: { type: [String, Number], default: Pc.modal.negativeTop }, width: { type: [String, Number], default: Pc.modal.width }, confirmButtonShape: { type: String, default: Pc.modal.confirmButtonShape } } }; typeof globalThis != 'undefined' ? globalThis : typeof window != 'undefined' ? window : typeof global != 'undefined' ? global : typeof self != 'undefined' && self; let qd = {}; ({ get exports() { return qd }, set exports(e) { qd = e } }).exports = (function () {
  const e = 1e3; const t = 6e4; const n = 36e5; const o = 'millisecond'; const r = 'second'; const i = 'minute'; const s = 'hour'; const a = 'day'; const c = 'week'; const l = 'month'; const u = 'quarter'; const f = 'year'; const p = 'date'; const d = 'Invalid Date'; const h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/; const g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g; const m = { name: 'en', weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), ordinal(e) { const t = ['th', 'st', 'nd', 'rd']; const n = e % 100; return `[${e}${t[(n - 20) % 10] || t[n] || t[0]}]` } }; const y = function (e, t, n) { const o = String(e); return !o || o.length >= t ? e : `${Array(t + 1 - o.length).join(n)}${e}` }; const b = {
    s: y,
    z(e) { const t = -e.utcOffset(); const n = Math.abs(t); const o = Math.floor(n / 60); const r = n % 60; return `${(t <= 0 ? '+' : '-') + y(o, 2, '0')}:${y(r, 2, '0')}` },
    m: function e(t, n) {
      if (t.date() < n.date())
        return -e(n, t); const o = 12 * (n.year() - t.year()) + (n.month() - t.month()); const r = t.clone().add(o, l); const i = n - r < 0; const s = t.clone().add(o + (i ? -1 : 1), l); return +(-(o + (n - r) / (i ? r - s : s - r)) || 0)
    },
    a(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) },
    p(e) { return { M: l, y: f, w: c, d: a, D: p, h: s, m: i, s: r, ms: o, Q: u }[e] || String(e || '').toLowerCase().replace(/s$/, '') },
    u(e) { return void 0 === e },
  }; let v = 'en'; const w = {}; w[v] = m; const S = function (e) { return e instanceof P }; const A = function e(t, n, o) {
    let r; if (!t)
      return v; if (typeof t == 'string') {
      const i = t.toLowerCase(); w[i] && (r = i), n && (w[i] = n, r = i); const s = t.split('-'); if (!r && s.length > 1)
        return e(s[0])
    }
    else { const a = t.name; w[a] = t, r = a } return !o && r && (v = r), r || !o && v
  }; const x = function (e, t) {
    if (S(e))
      return e.clone(); const n = typeof t == 'object' ? t : {}; return n.date = e, n.args = arguments, new P(n)
  }; const k = b; k.l = A, k.i = S, k.w = function (e, t) { return x(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset }) }; var P = (function () {
    function m(e) { this.$L = A(e.locale, null, !0), this.parse(e) } const y = m.prototype; return y.parse = function (e) {
      this.$d = (function (e) {
        const t = e.date; const n = e.utc; if (t === null)
          return new Date(Number.NaN); if (k.u(t))
          return new Date(); if (t instanceof Date)
          return new Date(t); if (typeof t == 'string' && !/Z$/i.test(t)) { const o = t.match(h); if (o) { const r = o[2] - 1 || 0; const i = (o[7] || '0').substring(0, 3); return n ? new Date(Date.UTC(o[1], r, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i)) : new Date(o[1], r, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i) } } return new Date(t)
      }(e)), this.$x = e.x || {}, this.init()
    }, y.init = function () { const e = this.$d; this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds() }, y.$utils = function () { return k }, y.isValid = function () { return !(this.$d.toString() === d) }, y.isSame = function (e, t) { const n = x(e); return this.startOf(t) <= n && n <= this.endOf(t) }, y.isAfter = function (e, t) { return x(e) < this.startOf(t) }, y.isBefore = function (e, t) { return this.endOf(t) < x(e) }, y.$g = function (e, t, n) { return k.u(e) ? this[t] : this.set(n, e) }, y.unix = function () { return Math.floor(this.valueOf() / 1e3) }, y.valueOf = function () { return this.$d.getTime() }, y.startOf = function (e, t) { const n = this; const o = !!k.u(t) || t; const u = k.p(e); const d = function (e, t) { const r = k.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n); return o ? r : r.endOf(a) }; const h = function (e, t) { return k.w(n.toDate()[e].apply(n.toDate('s'), (o ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n) }; const g = this.$W; const m = this.$M; const y = this.$D; const b = `set${this.$u ? 'UTC' : ''}`; switch (u) { case f:return o ? d(1, 0) : d(31, 11); case l:return o ? d(1, m) : d(0, m + 1); case c:var v = this.$locale().weekStart || 0; var w = (g < v ? g + 7 : g) - v; return d(o ? y - w : y + (6 - w), m); case a:case p:return h(`${b}Hours`, 0); case s:return h(`${b}Minutes`, 1); case i:return h(`${b}Seconds`, 2); case r:return h(`${b}Milliseconds`, 3); default:return this.clone() } }, y.endOf = function (e) { return this.startOf(e, !1) }, y.$set = function (e, t) {
      let n; const c = k.p(e); const u = `set${this.$u ? 'UTC' : ''}`; const d = (n = {}, n[a] = `${u}Date`, n[p] = `${u}Date`, n[l] = `${u}Month`, n[f] = `${u}FullYear`, n[s] = `${u}Hours`, n[i] = `${u}Minutes`, n[r] = `${u}Seconds`, n[o] = `${u}Milliseconds`, n)[c]; const h = c === a ? this.$D + (t - this.$W) : t; if (c === l || c === f) { const g = this.clone().set(p, 1); g.$d[d](h), g.init(), this.$d = g.set(p, Math.min(this.$D, g.daysInMonth())).$d }
      else { d && this.$d[d](h) } return this.init(), this
    }, y.set = function (e, t) { return this.clone().$set(e, t) }, y.get = function (e) { return this[k.p(e)]() }, y.add = function (o, u) {
      let p; const d = this; o = Number(o); const h = k.p(u); const g = function (e) { const t = x(d); return k.w(t.date(t.date() + Math.round(e * o)), d) }; if (h === l)
        return this.set(l, this.$M + o); if (h === f)
        return this.set(f, this.$y + o); if (h === a)
        return g(1); if (h === c)
        return g(7); const m = (p = {}, p[i] = t, p[s] = n, p[r] = e, p)[h] || 1; const y = this.$d.getTime() + o * m; return k.w(y, this)
    }, y.subtract = function (e, t) { return this.add(-1 * e, t) }, y.format = function (e) {
      const t = this; const n = this.$locale(); if (!this.isValid())
        return n.invalidDate || d; const o = e || 'YYYY-MM-DDTHH:mm:ssZ'; const r = k.z(this); const i = this.$H; const s = this.$m; const a = this.$M; const c = n.weekdays; const l = n.months; const u = n.meridiem; const f = function (e, n, r, i) { return e && (e[n] || e(t, o)) || r[n].slice(0, i) }; const p = function (e) { return k.s(i % 12 || 12, e, '0') }; const h = u || function (e, t, n) { const o = e < 12 ? 'AM' : 'PM'; return n ? o.toLowerCase() : o }; return o.replace(g, (e, o) => { return o || (function (e) { switch (e) { case 'YY':return String(t.$y).slice(-2); case 'YYYY':return k.s(t.$y, 4, '0'); case 'M':return a + 1; case 'MM':return k.s(a + 1, 2, '0'); case 'MMM':return f(n.monthsShort, a, l, 3); case 'MMMM':return f(l, a); case 'D':return t.$D; case 'DD':return k.s(t.$D, 2, '0'); case 'd':return String(t.$W); case 'dd':return f(n.weekdaysMin, t.$W, c, 2); case 'ddd':return f(n.weekdaysShort, t.$W, c, 3); case 'dddd':return c[t.$W]; case 'H':return String(i); case 'HH':return k.s(i, 2, '0'); case 'h':return p(1); case 'hh':return p(2); case 'a':return h(i, s, !0); case 'A':return h(i, s, !1); case 'm':return String(s); case 'mm':return k.s(s, 2, '0'); case 's':return String(t.$s); case 'ss':return k.s(t.$s, 2, '0'); case 'SSS':return k.s(t.$ms, 3, '0'); case 'Z':return r } return null }(e)) || r.replace(':', '') })
    }, y.utcOffset = function () { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, y.diff = function (o, p, d) { let h; const g = this; const m = k.p(p); const y = x(o); const b = (y.utcOffset() - this.utcOffset()) * t; const v = this - y; const w = function () { return k.m(g, y) }; switch (m) { case f:h = w() / 12; break; case l:h = w(); break; case u:h = w() / 3; break; case c:h = (v - b) / 6048e5; break; case a:h = (v - b) / 864e5; break; case s:h = v / n; break; case i:h = v / t; break; case r:h = v / e; break; default:h = v } return d ? h : k.a(h) }, y.daysInMonth = function () { return this.endOf(l).$D }, y.$locale = function () { return w[this.$L] }, y.locale = function (e, t) {
      if (!e)
        return this.$L; const n = this.clone(); const o = A(e, t, !0); return o && (n.$L = o), n
    }, y.clone = function () { return k.w(this.$d, this) }, y.toDate = function () { return new Date(this.valueOf()) }, y.toJSON = function () { return this.isValid() ? this.toISOString() : null }, y.toISOString = function () { return this.$d.toISOString() }, y.toString = function () { return this.$d.toUTCString() }, m
  }()); const T = P.prototype; return x.prototype = T, [['$ms', o], ['$s', r], ['$m', i], ['$H', s], ['$W', a], ['$M', l], ['$y', f], ['$D', p]].forEach(((e) => { T[e[1]] = function (t) { return this.$g(t, e[0], e[1]) } })), x.extend = function (e, t) { return e.$i || (e(t, P, x), e.$i = !0), x }, x.locale = A, x.isDayjs = S, x.unix = function (e) { return x(1e3 * e) }, x.en = w[v], x.Ls = w, x.p = {}, x
}()); const Qd = qd; const zd = { props: { show: { type: Boolean, default: Pc.loadingIcon.show }, color: { type: String, default: Pc.loadingIcon.color }, textColor: { type: String, default: Pc.loadingIcon.textColor }, vertical: { type: Boolean, default: Pc.loadingIcon.vertical }, mode: { type: String, default: Pc.loadingIcon.mode }, size: { type: [String, Number], default: Pc.loadingIcon.size }, textSize: { type: [String, Number], default: Pc.loadingIcon.textSize }, text: { type: [String, Number], default: Pc.loadingIcon.text }, timingFunction: { type: String, default: Pc.loadingIcon.timingFunction }, duration: { type: [String, Number], default: Pc.loadingIcon.duration }, inactiveColor: { type: String, default: Pc.loadingIcon.inactiveColor } } }; const Hd = { props: { color: { type: String, default: Pc.line.color }, length: { type: [String, Number], default: Pc.line.length }, direction: { type: String, default: Pc.line.direction }, hairline: { type: Boolean, default: Pc.line.hairline }, margin: { type: [String, Number], default: Pc.line.margin }, dashed: { type: Boolean, default: Pc.line.dashed } } }; const $d = { props: { show: { type: Boolean, default: Pc.actionSheet.show }, title: { type: String, default: Pc.actionSheet.title }, description: { type: String, default: Pc.actionSheet.description }, actions: { type: Array, default: Pc.actionSheet.actions }, cancelText: { type: String, default: Pc.actionSheet.cancelText }, closeOnClickAction: { type: Boolean, default: Pc.actionSheet.closeOnClickAction }, safeAreaInsetBottom: { type: Boolean, default: Pc.actionSheet.safeAreaInsetBottom }, openType: { type: String, default: Pc.actionSheet.openType }, closeOnClickOverlay: { type: Boolean, default: Pc.actionSheet.closeOnClickOverlay }, round: { type: [Boolean, String, Number], default: Pc.actionSheet.round } } }; const Wd = { props: { isDot: { type: Boolean, default: Pc.badge.isDot }, value: { type: [Number, String], default: Pc.badge.value }, modelValue: { type: [Number, String], default: Pc.badge.modelValue }, show: { type: Boolean, default: Pc.badge.show }, max: { type: [Number, String], default: Pc.badge.max }, type: { type: String, default: Pc.badge.type }, showZero: { type: Boolean, default: Pc.badge.showZero }, bgColor: { type: [String, null], default: Pc.badge.bgColor }, color: { type: [String, null], default: Pc.badge.color }, shape: { type: String, default: Pc.badge.shape }, numberType: { type: String, default: Pc.badge.numberType }, offset: { type: Array, default: Pc.badge.offset }, inverted: { type: Boolean, default: Pc.badge.inverted }, absolute: { type: Boolean, default: Pc.badge.absolute } } }; const Vd = { props: { show: { type: Boolean, default: Pc.overlay.show }, zIndex: { type: [String, Number], default: Pc.overlay.zIndex }, duration: { type: [String, Number], default: Pc.overlay.duration }, opacity: { type: [String, Number], default: Pc.overlay.opacity } } }; const Kd = { props: { bgColor: { type: String, default: Pc.statusBar.bgColor } } }; const Jd = { props: { show: { type: Boolean, default: Pc.transition.show }, mode: { type: String, default: Pc.transition.mode }, duration: { type: [String, Number], default: Pc.transition.duration }, timingFunction: { type: String, default: Pc.transition.timingFunction } } }; const Gd = e => ({ 'enter': `u-${e}-enter u-${e}-enter-active`, 'enter-to': `u-${e}-enter-to u-${e}-enter-active`, 'leave': `u-${e}-leave u-${e}-leave-active`, 'leave-to': `u-${e}-leave-to u-${e}-leave-active` }); const Xd = {
  methods: {
    clickHandler() { this.$emit('click') },
    async vueEnter() { const e = Gd(this.mode); this.status = 'enter', this.$emit('beforeEnter'), this.inited = !0, this.display = !0, this.classes = e.enter, await Tr(), this.$emit('enter'), this.transitionEnded = !1, this.$emit('afterEnter'), this.classes = e['enter-to'] },
    async vueLeave() {
      if (!this.display)
        return; const e = Gd(this.mode); this.status = 'leave', this.$emit('beforeLeave'), this.classes = e.leave, await Tr(), this.transitionEnded = !1, this.$emit('leave'), setTimeout(this.onTransitionEnd, this.duration), this.classes = e['leave-to']
    },
    onTransitionEnd() { this.transitionEnded || (this.transitionEnded = !0, this.$emit(this.status === 'leave' ? 'afterLeave' : 'afterEnter'), !this.show && this.display && (this.display = !1, this.inited = !1)) },
  },
}; const Yd = { props: { bgColor: { type: String, default: Pc.gap.bgColor }, height: { type: [String, Number], default: Pc.gap.height }, marginTop: { type: [String, Number], default: Pc.gap.marginTop }, marginBottom: { type: [String, Number], default: Pc.gap.marginBottom } } }; exports.Ds = Cd, exports.Request = class {
  constructor(e = {}) { let t; t = e, Object.prototype.toString.call(t) !== '[object Object]' && (e = {}, console.warn('设置全局参数必须接收一个Object')), this.config = wl({ ...vl, ...e }), this.interceptors = { request: new yl(), response: new yl() } }setConfig(e) { this.config = e(this.config) }middleware(e) {
    e = ((e, t = {}) => {
      const n = t.method || e.method || 'GET'; let o = { baseURL: t.baseURL || e.baseURL || '', method: n, url: t.url || '', params: t.params || {}, custom: { ...e.custom || {}, ...t.custom || {} }, header: fl(e.header || {}, t.header || {}) }; if (o = { ...o, ...bl(['getTask', 'validateStatus', 'paramsSerializer', 'forcedJSONParsing'], e, t) }, n === 'DOWNLOAD') { const n = ['timeout', 'filePath']; o = { ...o, ...bl(n, e, t) } }
      else if (n === 'UPLOAD') { delete o.header['content-type'], delete o.header['Content-Type'], ['filePath', 'name', 'timeout', 'formData'].forEach(((e) => { pl(t[e]) || (o[e] = t[e]) })), pl(o.timeout) && !pl(e.timeout) && (o.timeout = e.timeout) }
      else { const n = ['data', 'timeout', 'dataType', 'responseType', 'enableHttp2', 'enableQuic', 'enableCache', 'enableHttpDNS', 'httpDNSServiceId', 'enableChunked', 'forceCellularNetwork']; o = { ...o, ...bl(n, e, t) } } return o
    })(this.config, e); const t = [ml, void 0]; let n = Promise.resolve(e); for (this.interceptors.request.forEach(((e) => { t.unshift(e.fulfilled, e.rejected) })), this.interceptors.response.forEach(((e) => { t.push(e.fulfilled, e.rejected) })); t.length;)n = n.then(t.shift(), t.shift()); return n
  }

  request(e = {}) { return this.middleware(e) }get(e, t = {}) { return this.middleware({ url: e, method: 'GET', ...t }) }post(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'POST', ...n }) }put(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'PUT', ...n }) }delete(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'DELETE', ...n }) }connect(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'CONNECT', ...n }) }head(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'HEAD', ...n }) }options(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'OPTIONS', ...n }) }trace(e, t, n = {}) { return this.middleware({ url: e, data: t, method: 'TRACE', ...n }) }upload(e, t = {}) { return t.url = e, t.method = 'UPLOAD', this.middleware(t) }download(e, t = {}) { return t.url = e, t.method = 'DOWNLOAD', this.middleware(t) } get version() { return '3.1.0' }
}, exports.S = function (e) {
  let t; var n = {
    routes: e.routes,
    guardHooks: { beforeHooks: null, afterHooks: null },
    push(e) { return qc(e, this, 'push') },
    replace(e) { return qc(e, this, 'replace') },
    replaceAll(e) { return qc(e, this, 'replaceAll') },
    pushTab(e) { return qc(e, this, 'pushTab') },
    back(e) { return jn.navigateBack(e) },
    beforeEach(e) { $c(n, 'beforeHooks', e) },
    afterEach(e) { $c(n, 'afterHooks', e) },
    install(e) {
      const t = this; const n = this; e.provide(jc, this), e.provide(Lc, this.route), (function (e) {
        Nc.forEach(((t) => {
          jn[t] = function (n) {
            if (t === 'navigateBack') { Wc[t](n) }
            else if (e.guardHooks.beforeHooks && e.guardHooks.beforeHooks[0]) {
              const o = Hc(n.url, e); (r = e.guardHooks.beforeHooks[0], i = o, s = e.route.value, new Promise(((e, t) => {
                const n = function n(o) { n._called = !0, !1 === o ? t({}) : e(void 0 === o || !0 === o || o) }; const o = r.call(void 0, i, s, n); let a = Promise.resolve(o); if (r.length < 3 && (a = a.then(n)), r.length > 2) {
                  const c = 'The "next" callback was never called inside of '.concat(r.name ? `"${r.name}"` : '', ':\n').concat(`${r}`, '\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.'); if (o !== null && Ic(o) === 'object' && 'then' in o)
                    a = a.then(((e) => { return n._called ? e : (console.warn(c), Promise.reject(Error('Invalid navigation guard'))) })); else if (!n._called)
                    return console.warn(c), void t(Error('Invalid navigation guard'))
                }a.catch(((e) => { return t(e) }))
              }))).then(((o) => {
                if (!0 === o) { Wc[t](n) }
                else if (typeof o == 'string') { const r = Qc(o, e); Wc[t]({ url: r }) }
                else if (o.navType === 'back') { Wc.navigateBack(o) }
                else { const i = Qc(o, e); Wc[o.navType ? Bc[o.navType] : t]({ url: i }) }
              })).catch(((e) => { throw e }))
            }
            else { Wc[t](n) } let r, i, s
          }
        }))
      }(n)), e.mixin({ beforeCreate() { if (this.$mpType === 'page' && n.guardHooks.afterHooks && n.guardHooks.afterHooks[0]) { const e = n.route.value; const t = zc(n); n.guardHooks.afterHooks[0].call(null, t, e) } }, onLoad(e) { !Rc(e) && Rc(n.route.value.query) && Rc(n.route.value.params) && (n.route.value = Kc(Kc({}, n.route.value), {}, { query: e })) }, onShow() { let e; this.$mpType === 'page' && ((e = n).route.value = zc(e)) } }), Object.defineProperty(e.config.globalProperties, '$Router', { get() { return n } }), Object.defineProperty(e.config.globalProperties, '$Route', { enumerable: !0, get() { return sr(t.route) } })
    },
    route: (t = { path: '/' }, rr(t, !0)),
  }; return n
}, exports.Schema = Zl, exports.T = function () { const e = Ur(Lc); if (e) { const t = Ho(e.value); return qr(e, (e) => { Object.assign(t, e) }), t } throw new Error('useRoute 只可以在 Vue 上下文中使用，请确保你已经正确地注册了 "uni-mini-router" 并且当前正处于 Vue 上下文中') }, exports._export_sfc = (e, t) => { const n = e.__vccOpts || e; for (const [o, r] of t)n[o] = r; return n }, exports.button = Dd, exports.chooseFile = function ({ accept: e, multiple: t, capture: n, compressed: o, maxDuration: r, sizeType: i, camera: s, maxCount: a }) { return new Promise(((c, l) => { switch (e) { case 'image':jn.chooseImage({ count: t ? Math.min(a, 9) : 1, sourceType: n, sizeType: i, success: e => c(function (e) { return e.tempFiles.map((e => ({ ...Il(e, ['path']), type: 'image', url: e.path, thumb: e.path, size: e.size }))) }(e)), fail: l }); break; case 'media':_n.chooseMedia({ count: t ? Math.min(a, 9) : 1, sourceType: n, maxDuration: r, sizeType: i, camera: s, success: e => c(function (e) { return e.tempFiles.map((t => ({ ...Il(t, ['fileType', 'thumbTempFilePath', 'tempFilePath']), type: e.type, url: t.tempFilePath, thumb: e.type === 'video' ? t.thumbTempFilePath : t.tempFilePath, size: t.size }))) }(e)), fail: l }); break; case 'video':jn.chooseVideo({ sourceType: n, compressed: o, maxDuration: r, camera: s, success: e => c(function (e) { return [{ ...Il(e, ['tempFilePath', 'thumbTempFilePath', 'errMsg']), type: 'video', url: e.tempFilePath, thumb: e.thumbTempFilePath, size: e.size }] }(e)), fail: l }); break; case 'file':_n.chooseMessageFile({ count: t ? a : 1, type: e, success: e => c(Cl(e)), fail: l }); break; default:_n.chooseMessageFile({ count: t ? a : 1, type: 'all', success: e => c(Cl(e)), fail: l }) } })) }, exports.computed = Xi, exports.createPinia = function () { const e = Fn(!0); const t = e.run((() => or({}))); const n = []; let o = []; const r = Xo({ install(e) { Gc(r), r._a = e, e.provide(Xc, r), e.config.globalProperties.$pinia = r, o.forEach((e => n.push(e))), o = [] }, use(e) { return this._a ? n.push(e) : o.push(e), this }, _p: n, _a: null, _e: e, _s: new Map(), state: t }); return r }, exports.createSSRApp = Hs, exports.dayjs = Qd, exports.defineStore = function (e, t, n) { let o, r; const i = typeof t == 'function'; function s(e, n) { const s = zi(); (e = e || s && Ur(Xc, null)) && Gc(e), (e = Jc)._s.has(o) || (i ? al(o, t, r, e) : (function (e, t, n, o) { const { state: r, actions: i, getters: s } = t; const a = n.state.value[e]; let c; c = al(e, () => { a || (n.state.value[e] = r ? r() : {}); const t = lr(n.state.value[e]); return sl(t, i, Object.keys(s || {}).reduce((t, o) => (t[o] = Xo(Xi((() => { Gc(n); const t = n._s.get(e); return s[o].call(t, t) }))), t), {})) }, t, n, 0, !0) }(o, r, e))); return e._s.get(o) } return typeof e == 'string' ? (o = e, r = i ? n : t) : (r = e, o = e.id), s.$id = o, s }, exports.e = (e, ...t) => g(e, ...t), exports.f = (e, t) => (function (e, t) {
  let n; if (v(e) || x(e)) { n = Array.from({ length: e.length }); for (let o = 0, r = e.length; o < r; o++)n[o] = t(e[o], o, o) }
  else if (typeof e == 'number') { n = new Array(e); for (let o = 0; o < e; o++)n[o] = t(o + 1, o, o) }
  else if (P(e)) {
    if (e[Symbol.iterator]) { n = Array.from(e, (e, n) => t(e, n, n)) }
    else { const o = Object.keys(e); n = Array.from({ length: o.length }); for (let r = 0, i = o.length; r < i; r++) { const i = o[r]; n[r] = t(e[i], i, r) } }
  }
  else { n = [] } return n
}(e, t)), exports.icons = { 'uicon-level': '', 'uicon-column-line': '', 'uicon-checkbox-mark': '', 'uicon-folder': '', 'uicon-movie': '', 'uicon-star-fill': '', 'uicon-star': '', 'uicon-phone-fill': '', 'uicon-phone': '', 'uicon-apple-fill': '', 'uicon-chrome-circle-fill': '', 'uicon-backspace': '', 'uicon-attach': '', 'uicon-cut': '', 'uicon-empty-car': '', 'uicon-empty-coupon': '', 'uicon-empty-address': '', 'uicon-empty-favor': '', 'uicon-empty-permission': '', 'uicon-empty-news': '', 'uicon-empty-search': '', 'uicon-github-circle-fill': '', 'uicon-rmb': '', 'uicon-person-delete-fill': '', 'uicon-reload': '', 'uicon-order': '', 'uicon-server-man': '', 'uicon-search': '', 'uicon-fingerprint': '', 'uicon-more-dot-fill': '', 'uicon-scan': '', 'uicon-share-square': '', 'uicon-map': '', 'uicon-map-fill': '', 'uicon-tags': '', 'uicon-tags-fill': '', 'uicon-bookmark-fill': '', 'uicon-bookmark': '', 'uicon-eye': '', 'uicon-eye-fill': '', 'uicon-mic': '', 'uicon-mic-off': '', 'uicon-calendar': '', 'uicon-calendar-fill': '', 'uicon-trash': '', 'uicon-trash-fill': '', 'uicon-play-left': '', 'uicon-play-right': '', 'uicon-minus': '', 'uicon-plus': '', 'uicon-info': '', 'uicon-info-circle': '', 'uicon-info-circle-fill': '', 'uicon-question': '', 'uicon-error': '', 'uicon-close': '', 'uicon-checkmark': '', 'uicon-android-circle-fill': '', 'uicon-android-fill': '', 'uicon-ie': '', 'uicon-IE-circle-fill': '', 'uicon-google': '', 'uicon-google-circle-fill': '', 'uicon-setting-fill': '', 'uicon-setting': '', 'uicon-minus-square-fill': '', 'uicon-plus-square-fill': '', 'uicon-heart': '', 'uicon-heart-fill': '', 'uicon-camera': '', 'uicon-camera-fill': '', 'uicon-more-circle': '', 'uicon-more-circle-fill': '', 'uicon-chat': '', 'uicon-chat-fill': '', 'uicon-bag-fill': '', 'uicon-bag': '', 'uicon-error-circle-fill': '', 'uicon-error-circle': '', 'uicon-close-circle': '', 'uicon-close-circle-fill': '', 'uicon-checkmark-circle': '', 'uicon-checkmark-circle-fill': '', 'uicon-question-circle-fill': '', 'uicon-question-circle': '', 'uicon-share': '', 'uicon-share-fill': '', 'uicon-shopping-cart': '', 'uicon-shopping-cart-fill': '', 'uicon-bell': '', 'uicon-bell-fill': '', 'uicon-list': '', 'uicon-list-dot': '', 'uicon-zhihu': '', 'uicon-zhihu-circle-fill': '', 'uicon-zhifubao': '', 'uicon-zhifubao-circle-fill': '', 'uicon-weixin-circle-fill': '', 'uicon-weixin-fill': '', 'uicon-twitter-circle-fill': '', 'uicon-twitter': '', 'uicon-taobao-circle-fill': '', 'uicon-taobao': '', 'uicon-weibo-circle-fill': '', 'uicon-weibo': '', 'uicon-qq-fill': '', 'uicon-qq-circle-fill': '', 'uicon-moments-circel-fill': '', 'uicon-moments': '', 'uicon-qzone': '', 'uicon-qzone-circle-fill': '', 'uicon-baidu-circle-fill': '', 'uicon-baidu': '', 'uicon-facebook-circle-fill': '', 'uicon-facebook': '', 'uicon-car': '', 'uicon-car-fill': '', 'uicon-warning-fill': '', 'uicon-warning': '', 'uicon-clock-fill': '', 'uicon-clock': '', 'uicon-edit-pen': '', 'uicon-edit-pen-fill': '', 'uicon-email': '', 'uicon-email-fill': '', 'uicon-minus-circle': '', 'uicon-minus-circle-fill': '', 'uicon-plus-circle': '', 'uicon-plus-circle-fill': '', 'uicon-file-text': '', 'uicon-file-text-fill': '', 'uicon-pushpin': '', 'uicon-pushpin-fill': '', 'uicon-grid': '', 'uicon-grid-fill': '', 'uicon-play-circle': '', 'uicon-play-circle-fill': '', 'uicon-pause-circle-fill': '', 'uicon-pause': '', 'uicon-pause-circle': '', 'uicon-eye-off': '', 'uicon-eye-off-outline': '', 'uicon-gift-fill': '', 'uicon-gift': '', 'uicon-rmb-circle-fill': '', 'uicon-rmb-circle': '', 'uicon-kefu-ermai': '', 'uicon-server-fill': '', 'uicon-coupon-fill': '', 'uicon-coupon': '', 'uicon-integral': '', 'uicon-integral-fill': '', 'uicon-home-fill': '', 'uicon-home': '', 'uicon-hourglass-half-fill': '', 'uicon-hourglass': '', 'uicon-account': '', 'uicon-plus-people-fill': '', 'uicon-minus-people-fill': '', 'uicon-account-fill': '', 'uicon-thumb-down-fill': '', 'uicon-thumb-down': '', 'uicon-thumb-up': '', 'uicon-thumb-up-fill': '', 'uicon-lock-fill': '', 'uicon-lock-open': '', 'uicon-lock-opened-fill': '', 'uicon-lock': '', 'uicon-red-packet-fill': '', 'uicon-photo-fill': '', 'uicon-photo': '', 'uicon-volume-off-fill': '', 'uicon-volume-off': '', 'uicon-volume-fill': '', 'uicon-volume': '', 'uicon-red-packet': '', 'uicon-download': '', 'uicon-arrow-up-fill': '', 'uicon-arrow-down-fill': '', 'uicon-play-left-fill': '', 'uicon-play-right-fill': '', 'uicon-rewind-left-fill': '', 'uicon-rewind-right-fill': '', 'uicon-arrow-downward': '', 'uicon-arrow-leftward': '', 'uicon-arrow-rightward': '', 'uicon-arrow-upward': '', 'uicon-arrow-down': '', 'uicon-arrow-right': '', 'uicon-arrow-left': '', 'uicon-arrow-up': '', 'uicon-skip-back-left': '', 'uicon-skip-forward-right': '', 'uicon-rewind-right': '', 'uicon-rewind-left': '', 'uicon-arrow-right-double': '', 'uicon-arrow-left-double': '', 'uicon-wifi-off': '', 'uicon-wifi': '', 'uicon-empty-data': '', 'uicon-empty-history': '', 'uicon-empty-list': '', 'uicon-empty-page': '', 'uicon-empty-order': '', 'uicon-man': '', 'uicon-woman': '', 'uicon-man-add': '', 'uicon-man-add-fill': '', 'uicon-man-delete': '', 'uicon-man-delete-fill': '', 'uicon-zh': '', 'uicon-en': '' }, exports.index = jn, exports.index$1 = ({ options: e, store: t }) => { let n, o, r, i, s, a; if ((n = e.persist) == null ? void 0 : n.enabled) { const n = [{ key: t.$id, storage: ((o = e.persist) == null ? void 0 : o.H5Storage) || (window == null ? void 0 : window.sessionStorage) }]; const c = ((i = (r = e.persist) == null ? void 0 : r.strategies) == null ? void 0 : i.length) ? (s = e.persist) == null ? void 0 : s.strategies : n; c.forEach(((n) => { let o, r; const i = n.storage || ((o = e.persist) == null ? void 0 : o.H5Storage) || (window == null ? void 0 : window.sessionStorage); const s = n.key || t.$id; let a; a = Sl || ((r = e.persist) == null ? void 0 : r.enforceCustomStorage) ? i.getItem(s) : jn.getStorageSync(s), a && (t.$patch(JSON.parse(a)), Al(n, t, e.persist)) })), t.$subscribe(() => { c.forEach(((n) => { Al(n, t, e.persist) })) }, { detached: !!((a = e.persist) == null ? void 0 : a.detached) }) } }, exports.isRef = nr, exports.m = (e, t, n = !1) => (function (e, { number: t, trim: n }, o = !1) { return o ? (...o) => (n ? o = o.map((e => e.trim())) : t && (o = o.map(H)), e(...o)) : (o) => { const r = o.detail.value; return n ? o.detail.value = r.trim() : t && (o.detail.value = H(r)), e(o) } }(e, t, n)), exports.mixin = ja, exports.mixinUp = Bl, exports.mpMixin = La, exports.n = e => s(e), exports.nextTick$1 = Tr, exports.o = (e, t) => Ms(e, t), exports.onLaunch = Pl, exports.onLoad = Tl, exports.onMounted = ei, exports.onPullDownRefresh = Ol, exports.onReachBottom = El, exports.onShow = kl, exports.openType = Rd, exports.p = e => (function (e) { const { uid: t, __counter: n } = zi(); return `${t},${(Fs[t] || (Fs[t] = [])).push(Ri(e)) - 1},${n}` }(e)), exports.props = _l, exports.props$1 = jl, exports.props$10 = Fd, exports.props$11 = Ud, exports.props$12 = Md, exports.props$13 = zd, exports.props$14 = Hd, exports.props$15 = $d, exports.props$16 = Wd, exports.props$17 = { props: {} }, exports.props$18 = Vd, exports.props$19 = Kd, exports.props$2 = Ll, exports.props$20 = Jd, exports.props$21 = Yd, exports.props$3 = eu, exports.props$4 = tu, exports.props$5 = Bd, exports.props$6 = _d, exports.props$7 = jd, exports.props$8 = Ld, exports.props$9 = Nd, exports.r = (e, t, n) => Qs(e, t, n), exports.reactive = Ho, exports.ref = or, exports.resolveComponent = function (e, t) {
  return (function (e, t, n = !0, o = !1) {
    const r = Dr || Qi; if (r) {
      const n = r.type; if (e === li) {
        const e = (function (e, t = !0) { return A(e) ? e.displayName || e.name : e.name || t && e.__name }(n, !1)); if (e && (e === t || e === N(t) || e === R(N(t))))
          return n
      } const i = ui(r[e] || n[e], t) || ui(r.appContext[e], t); return !i && o ? n : i
    }
  }(li, e, !0, t)) || e
}, exports.s = e => zs(e), exports.sr = (e, t, n) => (function (e, t, n = {}) { const { $templateRefs: o } = zi(); o.push({ i: t, r: e, k: n.k, f: n.f }) }(e, t, n)), exports.storeToRefs = function (e) { { e = Go(e); const t = {}; for (const n in e) { const o = e[n]; (nr(o) || Vo(o)) && (t[n] = fr(e, n)) } return t } }, exports.t = e => (e => x(e) ? e : e == null ? '' : v(e) || P(e) && (e.toString === E || !A(e.toString)) ? JSON.stringify(e, a, 2) : String(e))(e), exports.toRefs = lr, exports.transition = Xd, exports.unref = sr, exports.uviewPlus = Oc, exports.w = function () {
  const e = Ur(jc); if (e)
    return e; throw new Error('useRouter 只可以在 Vue 上下文中使用，请确保你已经正确地注册了 "uni-mini-router" 并且当前正处于 Vue 上下文中')
}, exports.watch = qr, exports.wx$1 = _n
