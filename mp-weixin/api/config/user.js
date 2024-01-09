'use strict'; const t = require('../../utils/request/index.js')

exports.checkImg = function (e) { return t.http.request({ method: 'GET', url: '/mini/api/common/checkImg', data: e }) }, exports.keepUserInfo = function (e) { return t.http.request({ method: 'PUT', url: '/mini/api/wechat/users', data: e }) }, exports.releaseMy = function (e) { return t.http.request({ method: 'GET', url: '/mini/api/content/myPublish', data: e }) }, exports.textDetection = function (e) { return t.http.request({ method: 'GET', url: '/mini/api/common/checkMsg', data: e }) }
