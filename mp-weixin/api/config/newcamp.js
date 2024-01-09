'use strict'; const e = require('../../utils/request/index.js')

exports.getBanner = function (r) { return e.http.request({ method: 'POST', url: `/api/v2//models/${r.model_key}/records/search` }) }
