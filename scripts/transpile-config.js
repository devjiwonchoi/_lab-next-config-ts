'use strict'
Object.defineProperty(exports, '__esModule', {
  value: true,
})
Object.defineProperty(exports, 'transpileConfig', {
  enumerable: true,
  get: function () {
    return transpileConfig
  },
})
var _promises = require('fs/promises')
var _path = require('path')
var _swc = require('./swc')
var _compiler = require('./compiler')
var _profilingplugin = require('./webpack/plugins/profiling-plugin')
var _jsconfigpathsplugin = require('./webpack/plugins/jsconfig-paths-plugin')
var _trace = require('../trace')
function _array_like_to_array(arr, len) {
  if (len == null || len > arr.length) len = arr.length
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
  return arr2
}
function _array_with_holes(arr) {
  if (Array.isArray(arr)) return arr
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg)
    var value = info.value
  } catch (error) {
    reject(error)
    return
  }
  if (info.done) {
    resolve(value)
  } else {
    Promise.resolve(value).then(_next, _throw)
  }
}
function _async_to_generator(fn) {
  return function () {
    var self = this,
      args = arguments
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args)
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
      }
      _next(undefined)
    })
  }
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null
  var cacheBabelInterop = new WeakMap()
  var cacheNodeInterop = new WeakMap()
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop
  })(nodeInterop)
}
function _interop_require_wildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {
      default: obj,
    }
  }
  var cache = _getRequireWildcardCache(nodeInterop)
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {
    __proto__: null,
  }
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}
function _iterable_to_array_limit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator']
  if (_i == null) return
  var _arr = []
  var _n = true
  var _d = false
  var _s, _e
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value)
      if (i && _arr.length === i) break
    }
  } catch (err) {
    _d = true
    _e = err
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']()
    } finally {
      if (_d) throw _e
    }
  }
  return _arr
}
function _non_iterable_rest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}
function _sliced_to_array(arr, i) {
  return (
    _array_with_holes(arr) ||
    _iterable_to_array_limit(arr, i) ||
    _unsupported_iterable_to_array(arr, i) ||
    _non_iterable_rest()
  )
}
function _unsupported_iterable_to_array(o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _array_like_to_array(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(n)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _array_like_to_array(o, minLen)
}
function _ts_generator(thisArg, body) {
  var f,
    y,
    t,
    g,
    _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1]
        return t[1]
      },
      trys: [],
      ops: [],
    }
  return (
    (g = {
      next: verb(0),
      throw: verb(1),
      return: verb(2),
    }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this
      }),
    g
  )
  function verb(n) {
    return function (v) {
      return step([n, v])
    }
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.')
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t
        if (((y = 0), t)) op = [op[0] & 2, t.value]
        switch (op[0]) {
          case 0:
          case 1:
            t = op
            break
          case 4:
            _.label++
            return {
              value: op[1],
              done: false,
            }
          case 5:
            _.label++
            y = op[1]
            op = [0]
            continue
          case 7:
            op = _.ops.pop()
            _.trys.pop()
            continue
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0
              continue
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1]
              break
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1]
              t = op
              break
            }
            if (t && _.label < t[2]) {
              _.label = t[2]
              _.ops.push(op)
              break
            }
            if (t[2]) _.ops.pop()
            _.trys.pop()
            continue
        }
        op = body.call(thisArg, _)
      } catch (e) {
        op = [6, e]
        y = 0
      } finally {
        f = t = 0
      }
    if (op[0] & 5) throw op[1]
    return {
      value: op[0] ? op[1] : void 0,
      done: true,
    }
  }
}
var swcOptions = {
  jsc: {
    target: 'es5',
    parser: {
      syntax: 'typescript',
    },
  },
  module: {
    type: 'commonjs',
  },
  isModule: 'unknown',
}
function _runWebpack(_) {
  return __runWebpack.apply(this, arguments)
}
function __runWebpack() {
  __runWebpack = _async_to_generator(function (param) {
    var nextConfigPath,
      nextCompiledConfigName,
      cwd,
      distDir,
      isESM,
      resolvedBaseUrl,
      tsConfig,
      _tsConfig_compilerOptions,
      nextBuildSpan,
      runWebpackSpan,
      _tsConfig_compilerOptions_paths,
      webpackConfig,
      _ref,
      errors
    return _ts_generator(this, function (_state) {
      switch (_state.label) {
        case 0:
          ;(nextConfigPath = param.nextConfigPath),
            (nextCompiledConfigName = param.nextCompiledConfigName),
            (cwd = param.cwd),
            (distDir = param.distDir),
            (isESM = param.isESM),
            (resolvedBaseUrl = param.resolvedBaseUrl),
            (tsConfig = param.tsConfig)
          nextBuildSpan = (0, _trace.trace)('next-config-ts')
          runWebpackSpan = nextBuildSpan.traceChild('run-webpack-compiler')
          webpackConfig = {
            mode: 'production',
            entry: nextConfigPath,
            experiments: {
              // Needed for output.libraryTarget: 'module'
              outputModule: isESM,
            },
            output: {
              filename: nextCompiledConfigName,
              path: (0, _path.join)(cwd, distDir),
              libraryTarget: isESM ? 'module' : 'commonjs2',
            },
            // Set node.__dirname to true, and context to cwd.
            // This will ensure __dirname points to cwd not `.next`.
            // See https://webpack.js.org/configuration/node/#node__dirname
            node: {
              __dirname: true,
              // __filename will be `next.config.ts` instead of the original absolute path behavior.
              __filename: true,
            },
            context: cwd,
            // Resolve Node.js API like `fs`, and also allow to use ESM.
            target: ['node', 'es2020'],
            resolve: {
              modules: ['node_modules'],
              extensions: ['.ts', '.mts', '.cts', '.js', '.mjs', '.cjs'],
              // Need to resolve @swc/helpers/_/ alias for next config as async function:
              // Module not found: Can't resolve '@swc/helpers/_/_async_to_generator'
              alias: {
                '@swc/helpers/_': (0, _path.join)(
                  (0, _path.dirname)(
                    require.resolve('@swc/helpers/package.json')
                  ),
                  '_'
                ),
              },
              plugins: [
                new _jsconfigpathsplugin.JsConfigPathsPlugin(
                  (_tsConfig_compilerOptions_paths =
                    (_tsConfig_compilerOptions = tsConfig.compilerOptions) ===
                      null || _tsConfig_compilerOptions === void 0
                      ? void 0
                      : _tsConfig_compilerOptions.paths) !== null &&
                  _tsConfig_compilerOptions_paths !== void 0
                    ? _tsConfig_compilerOptions_paths
                    : {},
                  resolvedBaseUrl
                ),
              ],
            },
            plugins: [
              new _profilingplugin.ProfilingPlugin({
                runWebpackSpan: runWebpackSpan,
                rootDir: cwd,
              }),
            ],
            module: {
              rules: [
                {
                  test: /\.(ts|mts)$/,
                  exclude: /node_modules/,
                  loader: require.resolve('./webpack/loaders/next-swc-loader'),
                  options: {
                    rootDir: cwd,
                    isServer: false,
                    hasReactRefresh: false,
                    // Seems like no need to pass nextConfig to SWC loader
                    nextConfig: {},
                    jsConfig: tsConfig,
                    swcCacheDir: (0, _path.join)(cwd, distDir, 'cache', 'swc'),
                    supportedBrowsers: undefined,
                  },
                },
              ],
            },
          }
          // Support tsconfig baseUrl
          // Only add the baseUrl if it's explicitly set in tsconfig
          if (!resolvedBaseUrl.isImplicit) {
            webpackConfig.resolve.modules.push(resolvedBaseUrl.baseUrl)
          }
          return [
            4,
            (0, _compiler.runCompiler)(webpackConfig, {
              runWebpackSpan: runWebpackSpan,
            }),
          ]
        case 1:
          ;(_ref = _sliced_to_array.apply(void 0, [_state.sent(), 1])),
            (errors = _ref[0].errors)
          if (errors.length > 0) {
            throw new Error(errors[0].message)
          }
          return [2]
      }
    })
  })
  return __runWebpack.apply(this, arguments)
}
function transpileConfig(_) {
  return _transpileConfig.apply(this, arguments)
}
function _transpileConfig() {
  _transpileConfig = _async_to_generator(function (param) {
    var nextConfigPath,
      nextConfigName,
      cwd,
      tsConfig,
      packageJson,
      _,
      _1,
      e,
      isESM,
      nextCompiledConfigName,
      distDir,
      _tsConfig_compilerOptions,
      _tsConfig_compilerOptions1,
      nextConfigTS,
      code,
      hasNoImportOrRequire,
      nextCompiledConfigPath,
      nextCompiledConfig,
      _nextCompiledConfig_default,
      _tsConfig_compilerOptions_baseUrl,
      resolvedBaseUrl,
      nextCompiledConfigPath1,
      nextCompiledConfig1,
      _nextCompiledConfig_default1,
      error
    return _ts_generator(this, function (_state) {
      switch (_state.label) {
        case 0:
          ;(nextConfigPath = param.nextConfigPath),
            (nextConfigName = param.nextConfigName),
            (cwd = param.cwd)
          tsConfig = {}
          packageJson = {}
          _state.label = 1
        case 1:
          _state.trys.push([1, 4, , 5])
          _ = JSON.parse
          return [
            4,
            (0, _promises.readFile)(
              (0, _path.join)(cwd, 'tsconfig.json'),
              'utf8'
            ),
          ]
        case 2:
          // TODO: Use dynamic import when repo TS upgraded >= 5.3
          tsConfig = _.apply(JSON, [_state.sent()])
          _1 = JSON.parse
          return [
            4,
            (0, _promises.readFile)(
              (0, _path.join)(cwd, 'package.json'),
              'utf8'
            ),
          ]
        case 3:
          packageJson = _1.apply(JSON, [_state.sent()])
          return [3, 5]
        case 4:
          e = _state.sent()
          return [3, 5]
        case 5:
          // package.json type: module or next.config.mts
          isESM =
            (0, _path.extname)(nextConfigName) === '.mts' ||
            packageJson.type === 'module'
          // On CJS projects, importing Native ESM will need the config to be `.mjs`.
          // Therefore the config needs to be `next.config.mts`.
          // On ESM projects, it won't matter if the config is `.mjs` or `.js` in ESM format.
          nextCompiledConfigName = 'next.compiled.config'.concat(
            isESM ? '.mjs' : '.js'
          )
          // Since .next will be gitignored, it is OK to use it although distDir might be set on nextConfig.
          distDir = '.next'
          _state.label = 6
        case 6:
          _state.trys.push([6, 15, , 16])
          return [4, (0, _promises.readFile)(nextConfigPath, 'utf8')]
        case 7:
          nextConfigTS = _state.sent()
          return [4, (0, _swc.transform)(nextConfigTS, swcOptions)]
        case 8:
          code = _state.sent().code
          // Since the code is transpiled to CJS, we only need to check for require.
          // SWC will also drop types and unused imports.
          hasNoImportOrRequire = !code.includes('require(')
          if (!hasNoImportOrRequire) return [3, 12]
          nextCompiledConfigPath = (0, _path.join)(
            cwd,
            distDir,
            'next.compiled.config.cjs'
          )
          return [
            4,
            (0, _promises.mkdir)((0, _path.dirname)(nextCompiledConfigPath), {
              recursive: true,
            }),
          ]
        case 9:
          _state.sent()
          return [4, (0, _promises.writeFile)(nextCompiledConfigPath, code)]
        case 10:
          _state.sent()
          return [
            4,
            Promise.resolve(nextCompiledConfigPath).then(function (p) {
              return /*#__PURE__*/ _interop_require_wildcard(require(p))
            }),
          ]
        case 11:
          nextCompiledConfig = _state.sent()
          return [
            2,
            (_nextCompiledConfig_default = nextCompiledConfig.default) !==
              null && _nextCompiledConfig_default !== void 0
              ? _nextCompiledConfig_default
              : nextCompiledConfig,
          ]
        case 12:
          resolvedBaseUrl = {
            // Use cwd if baseUrl is not set.
            baseUrl: (0, _path.join)(
              cwd,
              (_tsConfig_compilerOptions_baseUrl =
                (_tsConfig_compilerOptions = tsConfig.compilerOptions) ===
                  null || _tsConfig_compilerOptions === void 0
                  ? void 0
                  : _tsConfig_compilerOptions.baseUrl) !== null &&
                _tsConfig_compilerOptions_baseUrl !== void 0
                ? _tsConfig_compilerOptions_baseUrl
                : ''
            ),
            // If baseUrl is not set, it's implicit (cwd).
            isImplicit: Boolean(
              !((_tsConfig_compilerOptions1 = tsConfig.compilerOptions) ===
                null || _tsConfig_compilerOptions1 === void 0
                ? void 0
                : _tsConfig_compilerOptions1.baseUrl)
            ),
          }
          return [
            4,
            _runWebpack({
              nextConfigPath: nextConfigPath,
              nextCompiledConfigName: nextCompiledConfigName,
              cwd: cwd,
              distDir: distDir,
              isESM: isESM,
              resolvedBaseUrl: resolvedBaseUrl,
              tsConfig: tsConfig,
            }),
          ]
        case 13:
          _state.sent()
          nextCompiledConfigPath1 = (0, _path.join)(
            cwd,
            distDir,
            nextCompiledConfigName
          )
          return [
            4,
            Promise.resolve(nextCompiledConfigPath1).then(function (p) {
              return /*#__PURE__*/ _interop_require_wildcard(require(p))
            }),
          ]
        case 14:
          nextCompiledConfig1 = _state.sent()
          // For named-exported configs, we do not supoort it but proceeds as something like:
          //  ⚠ Invalid next.config.ts options detected:
          //  ⚠     Unrecognized key(s) in object: 'config'
          // So we try to return the default if exits, otherwise return-
          // the whole object as is to prevent returning undefined and preserve the current behavior.
          return [
            2,
            (_nextCompiledConfig_default1 = nextCompiledConfig1.default) !==
              null && _nextCompiledConfig_default1 !== void 0
              ? _nextCompiledConfig_default1
              : nextCompiledConfig1,
          ]
        case 15:
          error = _state.sent()
          throw error
        case 16:
          return [2]
      }
    })
  })
  return _transpileConfig.apply(this, arguments)
}
