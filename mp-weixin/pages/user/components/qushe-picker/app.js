'use strict'; const e = require('../../../../common/vendor.js')

function t(e) { this.startYear = e.startYear || (new Date()).getFullYear() - 100, this.endYear = e.endYear || (new Date()).getFullYear() + 100, this.defaultValue = e.defaultValue ? new Date(e.defaultValue) : new Date(), this.dateMode = e.dateMode || 3, this.dateFormatArray = e.dateFormatArray || ['-', '-', ' ', ':', ':'] } function a(e) { this.itemArray = e.itemArray || [], this.linkage = e.linkage || !1, this.linkageNum = e.linkageNum || 2, this.defaultValue = e.defaultValue || null, this.steps = e.steps || {} } function i(e) { this.itemArray = e.itemArray || [], this.itemObject = e.itemObject || {}, this.linkage = e.linkage || !1, this.linkageNum = e.linkageNum || 2, this.defaultValue = e.defaultValue || null, this.steps = e.steps || {} } const s = { showToast(t) { e.index.showToast({ title: t, icon: 'none' }) }, showLoading(t, a) { e.index.showLoading({ title: t, mask: a || !1 }) }, hideLoading() { e.index.hideLoading() }, countDays(e, t) { const a = new Date(e, t[1] + 1, 0).getDate(); return t && (t[2] = t[2] < a - 1 ? t[2] : a - 1), { days: a, val: t } }, countYears(e, t) { const a = []; const i = t - e; for (let s = 0; s <= i; s++)a.push(e + s); return a }, creatDateObj: e => new t(e || {}), creatCustomObj: e => new a(e || {}), creatCustom2Obj: e => new i(e || {}) }; exports._app = s