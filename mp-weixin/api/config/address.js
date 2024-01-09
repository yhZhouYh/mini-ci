'use strict'; const t = require('../../utils/request/index.js')

exports.addAddressInfo = function (e) { return t.http.request({ method: 'POST', url: '/api/v2/address', data: e }) }, exports.getAddressList = function (e) { return t.http.request({ method: 'GET', url: '/api/v2/address', data: e }) }, exports.getAdress = function (e, r) { return t.http.request({ method: 'GET', url: `/api/v2/address/${e}`, data: r }) }, exports.updataAdress = function (e, r) { return t.http.request({ method: 'PUT', url: `/api/v2/address/${e}`, data: r }) }
