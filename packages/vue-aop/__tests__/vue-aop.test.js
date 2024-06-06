'use strict';

const vueAop = require('..');
const assert = require('assert').strict;

assert.strictEqual(vueAop(), 'Hello from vueAop');
console.info('vueAop tests passed');
