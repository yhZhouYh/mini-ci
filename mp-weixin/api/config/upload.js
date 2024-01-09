'use strict'; const t = require('../../utils/request/index.js')

exports.getOSSToken = function () { return t.http.request({ method: 'GET', url: '/api/v2/cloud/oss_token', data: { type: 1 } }) }
