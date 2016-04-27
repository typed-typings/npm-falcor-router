/// <reference path="../bundle/main.d.ts" />
/// <reference path="../typings/main.d.ts" />

import falcorRouter = require('falcor-router')
import assert = require('assert')

assert.deepEqual(typeof falcorRouter.createClass, 'function')
