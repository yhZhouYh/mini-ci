'use strict'; const t = require('../../utils/request/index.js')

exports.updateMobile = function (e) { return t.http.request({ method: 'PUT', url: '/api/v2/wechat/user/mobile', data: e }) }, exports.userCurrent = function (e) { return t.http.request({ method: 'GET', url: '/api/v2/users/wechat', data: e }) }, exports.userLogin = function (e) { return t.http.request({ method: 'POST', url: '/api/v2/wechat/login', data: e, custom: { noAuth: !0 } }) }
