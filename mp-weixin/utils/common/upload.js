'use strict'; const e = require('../../common/vendor.js'); const o = require('../../store/login/index.js')

exports.uploadImg = function (t) { const { info: i } = o.useLoginStore(); return new Promise(((o, n) => { e.index.uploadFile({ url: 'https://kraft-dev.shuinfo.com/mini/api/common/upload', filePath: t, name: 'file', header: { authorization: `${i.auth_token}`, openId: i.open_id }, formData: {}, success(e) { typeof e.data == 'string' && (e = JSON.parse(e.data)), e.code === 200 ? o(e.data || {}) : n() }, fail: n }) })) }
