'use strict'; const e = require('../../../common/vendor.js')

if (!Array) { (e.resolveComponent('shu-nav-bar') + e.resolveComponent('shu-loading'))() }Math || ((() => '../../../components/common/nav-bar/index.js') + (() => '../../../components/common/loading/index.js'))(); const n = { __name: 'index', setup(n) { const o = e.reactive({ title: '移动应用使用条款' }); return (n, t) => ({ a: e.p({ title: e.unref(o).title }) }) } }; const o = e._export_sfc(n, [['__scopeId', 'data-v-34be7eb1']]); wx.createPage(o)
