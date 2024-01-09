'use strict'; const e = require('../../utils/request/index.js')

exports.GetLgcfbanner = function (t) { return e.http.request({ method: 'POST', url: '/api/v2/models/lgcfbanner/records/search', data: t }) }, exports.GetLgjyz = function (t) { return e.http.request({ method: 'POST', url: '/api/v2/models/lgjyz/records/search', data: t }) }, exports.GetMyinfo = function (t) { return e.http.request({ method: 'GET', url: '/mini/api/content/info', data: t }) }, exports.GetMypage = function (t) { return e.http.request({ method: 'GET', url: '/mini/api/content/page', data: t }) }, exports.GetMysave = function (t) { return e.http.request({ method: 'POST', url: '/mini/api/content/save', data: t }) }, exports.GetMysearch = function (t) { return e.http.request({ method: 'post', url: '/api/v2/models/huati/records/search', data: t }) }, exports.GetShouyebanner = function (t) { return e.http.request({ method: 'POST', url: '/api/v2/models/shouyebanner/records/search', data: t }) }, exports.GetShouyexiaobanner = function (t) { return e.http.request({ method: 'POST', url: '/api/v2/models/shouyexiaobanner/records/search', data: t }) }, exports.GetUrlMysearch = function (t) { return e.http.request({ method: 'get', url: `/api/v2/models/huati/records/${t}` }) }
