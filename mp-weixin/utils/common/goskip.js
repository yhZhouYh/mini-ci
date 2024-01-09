'use strict'; const e = require('../../common/vendor.js'); const i = require('../../router/index.js')

exports.goskip = function (s) { i.router.routes.some((e => (e == null ? void 0 : e.path) === `/${s == null ? void 0 : s.split('?')[0]}`)) && (s == 'pages/index/index' || s == 'pages/kitchen/index' || s == 'pages/newcamp/index' || s == 'pages/shopping/index' || s == 'pages/user/index' ? e.index.switchTab({ url: `/${s}` }) : i.router.push({ path: s })) }
