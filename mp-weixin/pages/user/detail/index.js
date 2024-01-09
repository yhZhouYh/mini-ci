'use strict'; const e = require('../../../common/vendor.js')

if (!Array) { (e.resolveComponent('shu-nav-bar') + e.resolveComponent('shu-loading'))() }Math || ((() => '../../../components/common/nav-bar/index.js') + (() => '../../../components/common/loading/index.js'))(); const n = { __name: 'index', setup(n) { const o = e.reactive({ title: '积分兑换明细' }); return (n, t) => ({ a: e.p({ title: e.unref(o).title }) }) } }; wx.createPage(n)
