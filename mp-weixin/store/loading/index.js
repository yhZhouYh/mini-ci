'use strict'; const n = require('../../common/vendor.js')

const o = n.defineStore('loading', () => { const o = n.ref(0); return { addLoadingCounter() { o.value++ }, subLoadingCounter() { o.value-- }, resetLoading() { o.value = 0 }, loading: n.computed((() => o.value !== 0)) } }); exports.useLoadingStore = o
