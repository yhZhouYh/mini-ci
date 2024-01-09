'use strict'; const n = require('../common/vendor.js')

let e = null; exports.pinia = function () { return e == null && (e = n.createPinia(), e._p && !e._p.length && e._p.push(n.index$1)), e }
