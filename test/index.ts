/// <reference path="../bundle.d.ts" />
/// <reference path="../typings/index.d.ts" />

import falcorRouter = require('falcor-router')
import assert = require('assert')

assert.deepEqual(typeof falcorRouter.createClass, 'function')
