'use strict'
Object.defineProperty(exports, '__esModule', {
  value: true,
})
function _export(target, all) {
  for (var name in all)
    Object.defineProperty(target, name, {
      enumerable: true,
      get: all[name],
    })
}
_export(exports, {
  default: function () {
    return loadConfig
  },
  getEnabledExperimentalFeatures: function () {
    return getEnabledExperimentalFeatures
  },
  normalizeConfig: function () {
    return _configshared.normalizeConfig
  },
  warnOptionHasBeenDeprecated: function () {
    return warnOptionHasBeenDeprecated
  },
  warnOptionHasBeenMovedOutOfExperimental: function () {
    return warnOptionHasBeenMovedOutOfExperimental
  },
})
var _fs = require('fs')
var _path = require('path')
var _url = require('url')
var _findup = /*#__PURE__*/ _interop_require_default(
  require('next/dist/compiled/find-up')
)
var _log = /*#__PURE__*/ _interop_require_wildcard(
  require('../build/output/log')
)
var _constants = require('../shared/lib/constants')
var _configshared = require('./config-shared')
var _configutils = require('./config-utils')
var _imageconfig = require('../shared/lib/image-config')
var _env = require('@next/env')
var _flushandexit = require('../telemetry/flush-and-exit')
var _findroot = require('../lib/find-root')
var _setuphttpagentenv = require('./setup-http-agent-env')
var _pathhasprefix = require('../shared/lib/router/utils/path-has-prefix')
var _matchremotepattern = require('../shared/lib/match-remote-pattern')
var _zod = require('next/dist/compiled/zod')
var _ciinfo = require('../telemetry/ci-info')
var _transpileconfig = require('../build/transpile-config')
function _array_like_to_array(arr, len) {
  if (len == null || len > arr.length) len = arr.length
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
  return arr2
}
function _array_with_holes(arr) {
  if (Array.isArray(arr)) return arr
}
function _array_without_holes(arr) {
  if (Array.isArray(arr)) return _array_like_to_array(arr)
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
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}
function _interop_require_default(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
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
function _iterable_to_array(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter)
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
function _non_iterable_spread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}
    var ownKeys = Object.keys(source)
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable
        })
      )
    }
    ownKeys.forEach(function (key) {
      _define_property(target, key, source[key])
    })
  }
  return target
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object)
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object)
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable
      })
    }
    keys.push.apply(keys, symbols)
  }
  return keys
}
function _object_spread_props(target, source) {
  source = source != null ? source : {}
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
  } else {
    ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(
        target,
        key,
        Object.getOwnPropertyDescriptor(source, key)
      )
    })
  }
  return target
}
function _sliced_to_array(arr, i) {
  return (
    _array_with_holes(arr) ||
    _iterable_to_array_limit(arr, i) ||
    _unsupported_iterable_to_array(arr, i) ||
    _non_iterable_rest()
  )
}
function _to_consumable_array(arr) {
  return (
    _array_without_holes(arr) ||
    _iterable_to_array(arr) ||
    _unsupported_iterable_to_array(arr) ||
    _non_iterable_spread()
  )
}
function _type_of(obj) {
  '@swc/helpers - typeof'
  return obj && typeof Symbol !== 'undefined' && obj.constructor === Symbol
    ? 'symbol'
    : typeof obj
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
function processZodErrorMessage(issue) {
  var message = issue.message
  var path = ''
  if (issue.path.length > 0) {
    if (issue.path.length === 1) {
      var identifier = issue.path[0]
      if (typeof identifier === 'number') {
        // The first identifier inside path is a number
        path = 'index '.concat(identifier)
      } else {
        path = '"'.concat(identifier, '"')
      }
    } else {
      // joined path to be shown in the error message
      path = '"'.concat(
        issue.path.reduce(function (acc, cur) {
          if (typeof cur === 'number') {
            // array index
            return ''.concat(acc, '[').concat(cur, ']')
          }
          if (cur.includes('"')) {
            // escape quotes
            return ''.concat(acc, '["').concat(cur.replaceAll('"', '\\"'), '"]')
          }
          // dot notation
          var separator = acc.length === 0 ? '' : '.'
          return acc + separator + cur
        }, ''),
        '"'
      )
    }
  }
  if (
    issue.code === 'invalid_type' &&
    issue.received === _zod.ZodParsedType.undefined
  ) {
    // missing key in object
    return ''.concat(path, ' is missing, expected ').concat(issue.expected)
  }
  if (issue.code === 'invalid_enum_value') {
    // Remove "Invalid enum value" prefix from zod default error message
    return 'Expected '
      .concat(_zod.util.joinValues(issue.options), ", received '")
      .concat(issue.received, "' at ")
      .concat(path)
  }
  return message + (path ? ' at '.concat(path) : '')
}
function normalizeZodErrors(error) {
  var shouldExit = false
  return [
    error.issues.flatMap(function (issue) {
      var messages = [processZodErrorMessage(issue)]
      if (issue.path[0] === 'images') {
        // We exit the build when encountering an error in the images config
        shouldExit = true
      }
      if ('unionErrors' in issue) {
        issue.unionErrors.map(normalizeZodErrors).forEach(function (param) {
          var _param = _sliced_to_array(param, 2),
            unionMessages = _param[0],
            unionShouldExit = _param[1]
          var _messages
          ;(_messages = messages).push.apply(
            _messages,
            _to_consumable_array(unionMessages)
          )
          // If any of the union results shows exit the build, we exit the build
          shouldExit = shouldExit || unionShouldExit
        })
      }
      return messages
    }),
    shouldExit,
  ]
}
function warnOptionHasBeenDeprecated(
  config,
  nestedPropertyKey,
  reason,
  silent
) {
  if (!silent) {
    var current = config
    var found = true
    var nestedPropertyKeys = nestedPropertyKey.split('.')
    var _iteratorNormalCompletion = true,
      _didIteratorError = false,
      _iteratorError = undefined
    try {
      for (
        var _iterator = nestedPropertyKeys[Symbol.iterator](), _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        _iteratorNormalCompletion = true
      ) {
        var key = _step.value
        if (current[key] !== undefined) {
          current = current[key]
        } else {
          found = false
          break
        }
      }
    } catch (err) {
      _didIteratorError = true
      _iteratorError = err
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return()
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError
        }
      }
    }
    if (found) {
      _log.warn(reason)
    }
  }
}
function warnOptionHasBeenMovedOutOfExperimental(
  config,
  oldKey,
  newKey,
  configFileName,
  silent
) {
  if (config.experimental && oldKey in config.experimental) {
    if (!silent) {
      _log.warn(
        '`'.concat(oldKey, '` has been moved out of `experimental`') +
          (newKey.includes('.') ? ' and into `'.concat(newKey, '`') : '') +
          '. Please update your '.concat(configFileName, ' file accordingly.')
      )
    }
    var current = config
    var newKeys = newKey.split('.')
    while (newKeys.length > 1) {
      var key = newKeys.shift()
      current[key] = current[key] || {}
      current = current[key]
    }
    current[newKeys.shift()] = config.experimental[oldKey]
  }
  return config
}
function assignDefaults(dir, userConfig, silent) {
  var _defaultConfig_experimental,
    _result_experimental,
    _result_experimental1,
    _result_experimental2,
    _result_experimental3,
    _result_experimental4,
    _result_experimental_serverActions,
    _result_experimental5,
    _result_experimental6,
    _result_experimental7,
    _result_experimental8,
    _result_experimental9,
    _result_devIndicators,
    _result_experimental10
  var configFileName = userConfig.configFileName
  if (typeof userConfig.exportTrailingSlash !== 'undefined') {
    if (!silent) {
      _log.warn(
        'The "exportTrailingSlash" option has been renamed to "trailingSlash". Please update your '.concat(
          configFileName,
          '.'
        )
      )
    }
    if (typeof userConfig.trailingSlash === 'undefined') {
      userConfig.trailingSlash = userConfig.exportTrailingSlash
    }
    delete userConfig.exportTrailingSlash
  }
  var config = Object.keys(userConfig).reduce(function (currentConfig, key) {
    var value = userConfig[key]
    if (value === undefined || value === null) {
      return currentConfig
    }
    if (key === 'distDir') {
      if (typeof value !== 'string') {
        throw new Error(
          'Specified distDir is not a string, found type "'.concat(
            typeof value === 'undefined' ? 'undefined' : _type_of(value),
            '"'
          )
        )
      }
      var userDistDir = value.trim()
      // don't allow public as the distDir as this is a reserved folder for
      // public files
      if (userDistDir === 'public') {
        throw new Error(
          "The 'public' directory is reserved in Next.js and can not be set as the 'distDir'. https://nextjs.org/docs/messages/can-not-output-to-public"
        )
      }
      // make sure distDir isn't an empty string as it can result in the provided
      // directory being deleted in development mode
      if (userDistDir.length === 0) {
        throw new Error(
          'Invalid distDir provided, distDir can not be an empty string. Please remove this config or set it to undefined'
        )
      }
    }
    if (key === 'pageExtensions') {
      if (!Array.isArray(value)) {
        throw new Error(
          'Specified pageExtensions is not an array of strings, found "'.concat(
            value,
            '". Please update this config or remove it.'
          )
        )
      }
      if (!value.length) {
        throw new Error(
          'Specified pageExtensions is an empty array. Please update it with the relevant extensions or remove it.'
        )
      }
      value.forEach(function (ext) {
        if (typeof ext !== 'string') {
          throw new Error(
            'Specified pageExtensions is not an array of strings, found "'
              .concat(ext, '" of type "')
              .concat(
                typeof ext === 'undefined' ? 'undefined' : _type_of(ext),
                '". Please update this config or remove it.'
              )
          )
        }
      })
    }
    if (!!value && value.constructor === Object) {
      currentConfig[key] = _object_spread(
        {},
        _configshared.defaultConfig[key],
        Object.keys(value).reduce(function (c, k) {
          var v = value[k]
          if (v !== undefined && v !== null) {
            c[k] = v
          }
          return c
        }, {})
      )
    } else {
      currentConfig[key] = value
    }
    return currentConfig
  }, {})
  // TODO: remove once we've made PPR default
  // If this was defaulted to true, it implies that the configuration was
  // overridden for testing to be defaulted on.
  if (
    (_defaultConfig_experimental = _configshared.defaultConfig.experimental) ===
      null || _defaultConfig_experimental === void 0
      ? void 0
      : _defaultConfig_experimental.ppr
  ) {
    _log.warn(
      '`experimental.ppr` has been defaulted to `true` because `__NEXT_EXPERIMENTAL_PPR` was set to `true` during testing.'
    )
  }
  var result = _object_spread({}, _configshared.defaultConfig, config)
  if (
    ((_result_experimental = result.experimental) === null ||
    _result_experimental === void 0
      ? void 0
      : _result_experimental.ppr) &&
    !process.env.__NEXT_VERSION.includes('canary') &&
    !process.env.__NEXT_TEST_MODE
  ) {
    throw new Error(
      'The experimental.ppr preview feature can only be enabled when using the latest canary version of Next.js. See more info here: https://nextjs.org/docs/messages/ppr-preview'
    )
  }
  if (result.output === 'export') {
    if (result.i18n) {
      throw new Error(
        'Specified "i18n" cannot be used with "output: export". See more info here: https://nextjs.org/docs/messages/export-no-i18n'
      )
    }
    if (!_ciinfo.hasNextSupport) {
      if (result.rewrites) {
        _log.warn(
          'Specified "rewrites" will not automatically work with "output: export". See more info here: https://nextjs.org/docs/messages/export-no-custom-routes'
        )
      }
      if (result.redirects) {
        _log.warn(
          'Specified "redirects" will not automatically work with "output: export". See more info here: https://nextjs.org/docs/messages/export-no-custom-routes'
        )
      }
      if (result.headers) {
        _log.warn(
          'Specified "headers" will not automatically work with "output: export". See more info here: https://nextjs.org/docs/messages/export-no-custom-routes'
        )
      }
    }
  }
  if (typeof result.assetPrefix !== 'string') {
    throw new Error(
      'Specified assetPrefix is not a string, found type "'.concat(
        _type_of(result.assetPrefix),
        '" https://nextjs.org/docs/messages/invalid-assetprefix'
      )
    )
  }
  if (typeof result.basePath !== 'string') {
    throw new Error(
      'Specified basePath is not a string, found type "'.concat(
        _type_of(result.basePath),
        '"'
      )
    )
  }
  // TODO: remove after next minor (current v13.1.1)
  if (
    Array.isArray(
      (_result_experimental1 = result.experimental) === null ||
        _result_experimental1 === void 0
        ? void 0
        : _result_experimental1.outputFileTracingIgnores
    )
  ) {
    var _result_experimental_outputFileTracingExcludes_
    if (!result.experimental) {
      result.experimental = {}
    }
    if (!result.experimental.outputFileTracingExcludes) {
      result.experimental.outputFileTracingExcludes = {}
    }
    if (!result.experimental.outputFileTracingExcludes['**/*']) {
      result.experimental.outputFileTracingExcludes['**/*'] = []
    }
    ;(_result_experimental_outputFileTracingExcludes_ =
      result.experimental.outputFileTracingExcludes['**/*']).push.apply(
      _result_experimental_outputFileTracingExcludes_,
      _to_consumable_array(result.experimental.outputFileTracingIgnores || [])
    )
    _log.warn(
      '`outputFileTracingIgnores` has been moved to `experimental.outputFileTracingExcludes`. Please update your '.concat(
        configFileName,
        ' file accordingly.'
      )
    )
  }
  if (result.basePath !== '') {
    if (result.basePath === '/') {
      throw new Error(
        'Specified basePath /. basePath has to be either an empty string or a path prefix"'
      )
    }
    if (!result.basePath.startsWith('/')) {
      throw new Error(
        'Specified basePath has to start with a /, found "'.concat(
          result.basePath,
          '"'
        )
      )
    }
    if (result.basePath !== '/') {
      var _result_amp
      if (result.basePath.endsWith('/')) {
        throw new Error(
          'Specified basePath should not end with /, found "'.concat(
            result.basePath,
            '"'
          )
        )
      }
      if (result.assetPrefix === '') {
        result.assetPrefix = result.basePath
      }
      if (
        ((_result_amp = result.amp) === null || _result_amp === void 0
          ? void 0
          : _result_amp.canonicalBase) === ''
      ) {
        result.amp.canonicalBase = result.basePath
      }
    }
  }
  if (result === null || result === void 0 ? void 0 : result.images) {
    var images = result.images
    if (typeof images !== 'object') {
      throw new Error(
        'Specified images should be an object received '.concat(
          typeof images === 'undefined' ? 'undefined' : _type_of(images),
          '.\nSee more info here: https://nextjs.org/docs/messages/invalid-images-config'
        )
      )
    }
    if (images.remotePatterns) {
      var _config_assetPrefix
      if (!Array.isArray(images.remotePatterns)) {
        throw new Error(
          'Specified images.remotePatterns should be an Array received '.concat(
            _type_of(images.remotePatterns),
            '.\nSee more info here: https://nextjs.org/docs/messages/invalid-images-config'
          )
        )
      }
      // static images are automatically prefixed with assetPrefix
      // so we need to ensure _next/image allows downloading from
      // this resource
      if (
        (_config_assetPrefix = config.assetPrefix) === null ||
        _config_assetPrefix === void 0
          ? void 0
          : _config_assetPrefix.startsWith('http')
      ) {
        try {
          var url = new URL(config.assetPrefix)
          var hasMatchForAssetPrefix = images.remotePatterns.some(function (
            pattern
          ) {
            return (0, _matchremotepattern.matchRemotePattern)(pattern, url)
          })
          // avoid double-pushing the same remote if it already can be matched
          if (!hasMatchForAssetPrefix) {
            var _images_remotePatterns
            ;(_images_remotePatterns = images.remotePatterns) === null ||
            _images_remotePatterns === void 0
              ? void 0
              : _images_remotePatterns.push({
                  hostname: url.hostname,
                  protocol: url.protocol.replace(/:$/, ''),
                  port: url.port,
                })
          }
        } catch (error) {
          throw new Error(
            'Invalid assetPrefix provided. Original error: '.concat(error)
          )
        }
      }
    }
    if (images.domains) {
      if (!Array.isArray(images.domains)) {
        throw new Error(
          'Specified images.domains should be an Array received '.concat(
            _type_of(images.domains),
            '.\nSee more info here: https://nextjs.org/docs/messages/invalid-images-config'
          )
        )
      }
    }
    if (!images.loader) {
      images.loader = 'default'
    }
    if (
      images.loader !== 'default' &&
      images.loader !== 'custom' &&
      images.path === _imageconfig.imageConfigDefault.path
    ) {
      throw new Error(
        'Specified images.loader property ('.concat(
          images.loader,
          ') also requires images.path property to be assigned to a URL prefix.\nSee more info here: https://nextjs.org/docs/api-reference/next/legacy/image#loader-configuration'
        )
      )
    }
    if (
      images.path === _imageconfig.imageConfigDefault.path &&
      result.basePath &&
      !(0, _pathhasprefix.pathHasPrefix)(images.path, result.basePath)
    ) {
      images.path = ''.concat(result.basePath).concat(images.path)
    }
    // Append trailing slash for non-default loaders and when trailingSlash is set
    if (
      images.path &&
      !images.path.endsWith('/') &&
      (images.loader !== 'default' || result.trailingSlash)
    ) {
      images.path += '/'
    }
    if (images.loaderFile) {
      if (images.loader !== 'default' && images.loader !== 'custom') {
        throw new Error(
          'Specified images.loader property ('.concat(
            images.loader,
            ') cannot be used with images.loaderFile property. Please set images.loader to "custom".'
          )
        )
      }
      var absolutePath = (0, _path.join)(dir, images.loaderFile)
      if (!(0, _fs.existsSync)(absolutePath)) {
        throw new Error(
          'Specified images.loaderFile does not exist at "'.concat(
            absolutePath,
            '".'
          )
        )
      }
      images.loaderFile = absolutePath
    }
  }
  if (
    (_result_experimental2 = result.experimental) === null ||
    _result_experimental2 === void 0
      ? void 0
      : _result_experimental2.incrementalCacheHandlerPath
  ) {
    // TODO: Remove this warning in Next.js 15
    warnOptionHasBeenDeprecated(
      result,
      'experimental.incrementalCacheHandlerPath',
      'The "experimental.incrementalCacheHandlerPath" option has been renamed to "cacheHandler". Please update your next.config.js.',
      silent
    )
  }
  if (
    (_result_experimental3 = result.experimental) === null ||
    _result_experimental3 === void 0
      ? void 0
      : _result_experimental3.isrMemoryCacheSize
  ) {
    // TODO: Remove this warning in Next.js 15
    warnOptionHasBeenDeprecated(
      result,
      'experimental.isrMemoryCacheSize',
      'The "experimental.isrMemoryCacheSize" option has been renamed to "cacheMaxMemorySize". Please update your next.config.js.',
      silent
    )
  }
  if (
    typeof ((_result_experimental4 = result.experimental) === null ||
    _result_experimental4 === void 0
      ? void 0
      : _result_experimental4.serverActions) === 'boolean'
  ) {
    // TODO: Remove this warning in Next.js 15
    warnOptionHasBeenDeprecated(
      result,
      'experimental.serverActions',
      'Server Actions are available by default now, `experimental.serverActions` option can be safely removed.',
      silent
    )
  }
  if (result.swcMinify === false) {
    // TODO: Remove this warning in Next.js 15
    warnOptionHasBeenDeprecated(
      result,
      'swcMinify',
      'Disabling SWC Minifer will not be an option in the next major version. Please report any issues you may be experiencing to https://github.com/vercel/next.js/issues',
      silent
    )
  }
  if (result.outputFileTracing === false) {
    // TODO: Remove this warning in Next.js 15
    warnOptionHasBeenDeprecated(
      result,
      'outputFileTracing',
      'Disabling outputFileTracing will not be an option in the next major version. Please report any issues you may be experiencing to https://github.com/vercel/next.js/issues',
      silent
    )
  }
  warnOptionHasBeenMovedOutOfExperimental(
    result,
    'relay',
    'compiler.relay',
    configFileName,
    silent
  )
  warnOptionHasBeenMovedOutOfExperimental(
    result,
    'styledComponents',
    'compiler.styledComponents',
    configFileName,
    silent
  )
  warnOptionHasBeenMovedOutOfExperimental(
    result,
    'emotion',
    'compiler.emotion',
    configFileName,
    silent
  )
  warnOptionHasBeenMovedOutOfExperimental(
    result,
    'reactRemoveProperties',
    'compiler.reactRemoveProperties',
    configFileName,
    silent
  )
  warnOptionHasBeenMovedOutOfExperimental(
    result,
    'removeConsole',
    'compiler.removeConsole',
    configFileName,
    silent
  )
  if (result.experimental.outputStandalone) {
    if (!silent) {
      _log.warn(
        'experimental.outputStandalone has been renamed to "output: \'standalone\'", please move the config.'
      )
    }
    result.output = 'standalone'
  }
  if (
    typeof ((_result_experimental5 = result.experimental) === null ||
    _result_experimental5 === void 0
      ? void 0
      : (_result_experimental_serverActions =
          _result_experimental5.serverActions) === null ||
        _result_experimental_serverActions === void 0
      ? void 0
      : _result_experimental_serverActions.bodySizeLimit) !== 'undefined'
  ) {
    var _result_experimental_serverActions1
    var value = parseInt(
      (_result_experimental_serverActions1 =
        result.experimental.serverActions) === null ||
        _result_experimental_serverActions1 === void 0
        ? void 0
        : _result_experimental_serverActions1.bodySizeLimit.toString()
    )
    if (isNaN(value) || value < 1) {
      throw new Error(
        'Server Actions Size Limit must be a valid number or filesize format lager than 1MB: https://nextjs.org/docs/app/api-reference/functions/server-actions#size-limitation'
      )
    }
  }
  warnOptionHasBeenMovedOutOfExperimental(
    result,
    'transpilePackages',
    'transpilePackages',
    configFileName,
    silent
  )
  warnOptionHasBeenMovedOutOfExperimental(
    result,
    'skipMiddlewareUrlNormalize',
    'skipMiddlewareUrlNormalize',
    configFileName,
    silent
  )
  warnOptionHasBeenMovedOutOfExperimental(
    result,
    'skipTrailingSlashRedirect',
    'skipTrailingSlashRedirect',
    configFileName,
    silent
  )
  if (
    ((_result_experimental6 = result.experimental) === null ||
    _result_experimental6 === void 0
      ? void 0
      : _result_experimental6.outputFileTracingRoot) &&
    !(0, _path.isAbsolute)(result.experimental.outputFileTracingRoot)
  ) {
    result.experimental.outputFileTracingRoot = (0, _path.resolve)(
      result.experimental.outputFileTracingRoot
    )
    if (!silent) {
      _log.warn(
        'experimental.outputFileTracingRoot should be absolute, using: '.concat(
          result.experimental.outputFileTracingRoot
        )
      )
    }
  }
  // only leverage deploymentId
  if (
    ((_result_experimental7 = result.experimental) === null ||
    _result_experimental7 === void 0
      ? void 0
      : _result_experimental7.useDeploymentId) &&
    process.env.NEXT_DEPLOYMENT_ID
  ) {
    if (!result.experimental) {
      result.experimental = {}
    }
    result.experimental.deploymentId = process.env.NEXT_DEPLOYMENT_ID
  }
  // can't use this one without the other
  if (
    (_result_experimental8 = result.experimental) === null ||
    _result_experimental8 === void 0
      ? void 0
      : _result_experimental8.useDeploymentIdServerActions
  ) {
    result.experimental.useDeploymentId = true
  }
  // use the closest lockfile as tracing root
  if (
    !((_result_experimental9 = result.experimental) === null ||
    _result_experimental9 === void 0
      ? void 0
      : _result_experimental9.outputFileTracingRoot)
  ) {
    var rootDir = (0, _findroot.findRootDir)(dir)
    if (rootDir) {
      if (!result.experimental) {
        result.experimental = {}
      }
      if (!_configshared.defaultConfig.experimental) {
        _configshared.defaultConfig.experimental = {}
      }
      result.experimental.outputFileTracingRoot = rootDir
      _configshared.defaultConfig.experimental.outputFileTracingRoot =
        result.experimental.outputFileTracingRoot
    }
  }
  if (result.output === 'standalone' && !result.outputFileTracing) {
    if (!silent) {
      _log.warn(
        '"output: \'standalone\'" requires outputFileTracing not be disabled please enable it to leverage the standalone build'
      )
    }
    result.output = undefined
  }
  ;(0, _setuphttpagentenv.setHttpClientAndAgentOptions)(
    result || _configshared.defaultConfig
  )
  if (result.i18n) {
    var i18n = result.i18n
    var i18nType = typeof i18n === 'undefined' ? 'undefined' : _type_of(i18n)
    if (i18nType !== 'object') {
      throw new Error(
        'Specified i18n should be an object received '.concat(
          i18nType,
          '.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config'
        )
      )
    }
    if (!Array.isArray(i18n.locales)) {
      throw new Error(
        'Specified i18n.locales should be an Array received '.concat(
          _type_of(i18n.locales),
          '.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config'
        )
      )
    }
    if (i18n.locales.length > 100 && !silent) {
      _log.warn(
        'Received '.concat(
          i18n.locales.length,
          ' i18n.locales items which exceeds the recommended max of 100.\nSee more info here: https://nextjs.org/docs/advanced-features/i18n-routing#how-does-this-work-with-static-generation'
        )
      )
    }
    var defaultLocaleType = _type_of(i18n.defaultLocale)
    if (!i18n.defaultLocale || defaultLocaleType !== 'string') {
      throw new Error(
        'Specified i18n.defaultLocale should be a string.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config'
      )
    }
    if (typeof i18n.domains !== 'undefined' && !Array.isArray(i18n.domains)) {
      throw new Error(
        "Specified i18n.domains must be an array of domain objects e.g. [ { domain: 'example.fr', defaultLocale: 'fr', locales: ['fr'] } ] received ".concat(
          _type_of(i18n.domains),
          '.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config'
        )
      )
    }
    if (i18n.domains) {
      var invalidDomainItems = i18n.domains.filter(function (item) {
        var _i18n_domains
        if (!item || typeof item !== 'object') return true
        if (!item.defaultLocale) return true
        if (!item.domain || typeof item.domain !== 'string') return true
        if (item.domain.includes(':')) {
          console.warn(
            'i18n domain: "'.concat(
              item.domain,
              '" is invalid it should be a valid domain without protocol (https://) or port (:3000) e.g. example.vercel.sh'
            )
          )
          return true
        }
        var defaultLocaleDuplicate =
          (_i18n_domains = i18n.domains) === null || _i18n_domains === void 0
            ? void 0
            : _i18n_domains.find(function (altItem) {
                return (
                  altItem.defaultLocale === item.defaultLocale &&
                  altItem.domain !== item.domain
                )
              })
        if (!silent && defaultLocaleDuplicate) {
          console.warn(
            'Both '
              .concat(item.domain, ' and ')
              .concat(
                defaultLocaleDuplicate.domain,
                ' configured the defaultLocale '
              )
              .concat(
                item.defaultLocale,
                " but only one can. Change one item's default locale to continue"
              )
          )
          return true
        }
        var hasInvalidLocale = false
        if (Array.isArray(item.locales)) {
          var _iteratorNormalCompletion = true,
            _didIteratorError = false,
            _iteratorError = undefined
          try {
            for (
              var _iterator = item.locales[Symbol.iterator](), _step;
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = true
            ) {
              var locale = _step.value
              if (typeof locale !== 'string') hasInvalidLocale = true
              var _iteratorNormalCompletion1 = true,
                _didIteratorError1 = false,
                _iteratorError1 = undefined
              try {
                for (
                  var _iterator1 = (i18n.domains || [])[Symbol.iterator](),
                    _step1;
                  !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next())
                    .done);
                  _iteratorNormalCompletion1 = true
                ) {
                  var domainItem = _step1.value
                  if (domainItem === item) continue
                  if (
                    domainItem.locales &&
                    domainItem.locales.includes(locale)
                  ) {
                    console.warn(
                      'Both '
                        .concat(item.domain, ' and ')
                        .concat(domainItem.domain, ' configured the locale (')
                        .concat(
                          locale,
                          ') but only one can. Remove it from one i18n.domains config to continue'
                        )
                    )
                    hasInvalidLocale = true
                    break
                  }
                }
              } catch (err) {
                _didIteratorError1 = true
                _iteratorError1 = err
              } finally {
                try {
                  if (
                    !_iteratorNormalCompletion1 &&
                    _iterator1.return != null
                  ) {
                    _iterator1.return()
                  }
                } finally {
                  if (_didIteratorError1) {
                    throw _iteratorError1
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError = true
            _iteratorError = err
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return()
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError
              }
            }
          }
        }
        return hasInvalidLocale
      })
      if (invalidDomainItems.length > 0) {
        throw new Error(
          'Invalid i18n.domains values:\n'.concat(
            invalidDomainItems
              .map(function (item) {
                return JSON.stringify(item)
              })
              .join('\n'),
            "\n\ndomains value must follow format { domain: 'example.fr', defaultLocale: 'fr', locales: ['fr'] }.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config"
          )
        )
      }
    }
    if (!Array.isArray(i18n.locales)) {
      throw new Error(
        'Specified i18n.locales must be an array of locale strings e.g. ["en-US", "nl-NL"] received '.concat(
          _type_of(i18n.locales),
          '.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config'
        )
      )
    }
    var invalidLocales = i18n.locales.filter(function (locale) {
      return typeof locale !== 'string'
    })
    if (invalidLocales.length > 0) {
      throw new Error(
        'Specified i18n.locales contains invalid values ('.concat(
          invalidLocales.map(String).join(', '),
          '), locales must be valid locale tags provided as strings e.g. "en-US".\n'
        ) +
          'See here for list of valid language sub-tags: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry'
      )
    }
    if (!i18n.locales.includes(i18n.defaultLocale)) {
      throw new Error(
        'Specified i18n.defaultLocale should be included in i18n.locales.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config'
      )
    }
    var normalizedLocales = new Set()
    var duplicateLocales = new Set()
    i18n.locales.forEach(function (locale) {
      var localeLower = locale.toLowerCase()
      if (normalizedLocales.has(localeLower)) {
        duplicateLocales.add(locale)
      }
      normalizedLocales.add(localeLower)
    })
    if (duplicateLocales.size > 0) {
      throw new Error(
        'Specified i18n.locales contains the following duplicate locales:\n' +
          ''.concat(_to_consumable_array(duplicateLocales).join(', '), '\n') +
          'Each locale should be listed only once.\n' +
          'See more info here: https://nextjs.org/docs/messages/invalid-i18n-config'
      )
    }
    // make sure default Locale is at the front
    i18n.locales = [i18n.defaultLocale].concat(
      _to_consumable_array(
        i18n.locales.filter(function (locale) {
          return locale !== i18n.defaultLocale
        })
      )
    )
    var localeDetectionType = _type_of(i18n.localeDetection)
    if (
      localeDetectionType !== 'boolean' &&
      localeDetectionType !== 'undefined'
    ) {
      throw new Error(
        'Specified i18n.localeDetection should be undefined or a boolean received '.concat(
          localeDetectionType,
          '.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config'
        )
      )
    }
  }
  if (
    (_result_devIndicators = result.devIndicators) === null ||
    _result_devIndicators === void 0
      ? void 0
      : _result_devIndicators.buildActivityPosition
  ) {
    var buildActivityPosition = result.devIndicators.buildActivityPosition
    var allowedValues = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
    if (!allowedValues.includes(buildActivityPosition)) {
      throw new Error(
        'Invalid "devIndicator.buildActivityPosition" provided, expected one of '
          .concat(allowedValues.join(', '), ', received ')
          .concat(buildActivityPosition)
      )
    }
  }
  var userProvidedModularizeImports = result.modularizeImports
  // Unfortunately these packages end up re-exporting 10600 modules, for example: https://unpkg.com/browse/@mui/icons-material@5.11.16/esm/index.js.
  // Leveraging modularizeImports tremendously reduces compile times for these.
  result.modularizeImports = _object_spread_props(
    _object_spread({}, userProvidedModularizeImports || {}),
    {
      // This is intentionally added after the user-provided modularizeImports config.
      '@mui/icons-material': {
        transform: '@mui/icons-material/{{member}}',
      },
      lodash: {
        transform: 'lodash/{{member}}',
      },
    }
  )
  var userProvidedOptimizePackageImports =
    ((_result_experimental10 = result.experimental) === null ||
    _result_experimental10 === void 0
      ? void 0
      : _result_experimental10.optimizePackageImports) || []
  if (!result.experimental) {
    result.experimental = {}
  }
  result.experimental.optimizePackageImports = _to_consumable_array(
    new Set(
      _to_consumable_array(userProvidedOptimizePackageImports).concat([
        'lucide-react',
        'date-fns',
        'lodash-es',
        'ramda',
        'antd',
        'react-bootstrap',
        'ahooks',
        '@ant-design/icons',
        '@headlessui/react',
        '@headlessui-float/react',
        '@heroicons/react/20/solid',
        '@heroicons/react/24/solid',
        '@heroicons/react/24/outline',
        '@visx/visx',
        '@tremor/react',
        'rxjs',
        '@mui/material',
        '@mui/icons-material',
        'recharts',
        'react-use',
        '@material-ui/core',
        '@material-ui/icons',
        '@tabler/icons-react',
        'mui-core',
        // We don't support wildcard imports for these configs, e.g. `react-icons/*`
        // so we need to add them manually.
        // In the future, we should consider automatically detecting packages that
        // need to be optimized.
        'react-icons/ai',
        'react-icons/bi',
        'react-icons/bs',
        'react-icons/cg',
        'react-icons/ci',
        'react-icons/di',
        'react-icons/fa',
        'react-icons/fa6',
        'react-icons/fc',
        'react-icons/fi',
        'react-icons/gi',
        'react-icons/go',
        'react-icons/gr',
        'react-icons/hi',
        'react-icons/hi2',
        'react-icons/im',
        'react-icons/io',
        'react-icons/io5',
        'react-icons/lia',
        'react-icons/lib',
        'react-icons/lu',
        'react-icons/md',
        'react-icons/pi',
        'react-icons/ri',
        'react-icons/rx',
        'react-icons/si',
        'react-icons/sl',
        'react-icons/tb',
        'react-icons/tfi',
        'react-icons/ti',
        'react-icons/vsc',
        'react-icons/wi',
      ])
    )
  )
  return result
}
function loadConfig(phase, dir) {
  return _loadConfig.apply(this, arguments)
}
function _loadConfig() {
  _loadConfig = _async_to_generator(function (phase, dir) {
    var _ref,
      customConfig,
      rawConfig,
      _ref_silent,
      silent,
      onLoadUserConfig,
      curLog,
      configFileName,
      path,
      _userConfig_amp,
      _userConfig_experimental_turbo,
      _userConfig_experimental,
      _userConfig_experimental_turbo1,
      _userConfig_experimental1,
      isTypeScript,
      userConfigModule,
      envBefore,
      newEnv,
      _iteratorNormalCompletion,
      _didIteratorError,
      _iteratorError,
      _iterator,
      _step,
      key,
      err1,
      userConfig,
      configSchema,
      state,
      messages,
      _normalizeZodErrors,
      errorMessages,
      shouldExit,
      _iteratorNormalCompletion1,
      _didIteratorError1,
      _iteratorError1,
      _iterator1,
      _step1,
      error,
      _iteratorNormalCompletion2,
      _didIteratorError2,
      _iteratorError2,
      _iterator2,
      _step2,
      message,
      _iteratorNormalCompletion3,
      _didIteratorError3,
      _iteratorError3,
      _iterator3,
      _step3,
      message1,
      canonicalBase,
      rules,
      _iteratorNormalCompletion4,
      _didIteratorError4,
      _iteratorError4,
      _iterator4,
      _step4,
      _step_value,
      ext,
      loaders,
      completeConfig,
      configBaseName,
      unsupportedConfig,
      completeConfig1
    var _arguments = arguments
    return _ts_generator(this, function (_state) {
      switch (_state.label) {
        case 0:
          ;(_ref =
            _arguments.length > 2 && _arguments[2] !== void 0
              ? _arguments[2]
              : {}),
            (customConfig = _ref.customConfig),
            (rawConfig = _ref.rawConfig),
            (_ref_silent = _ref.silent),
            (silent = _ref_silent === void 0 ? true : _ref_silent),
            (onLoadUserConfig = _ref.onLoadUserConfig)
          if (!process.env.__NEXT_PRIVATE_RENDER_WORKER) {
            try {
              ;(0, _configutils.loadWebpackHook)()
            } catch (err) {
              // this can fail in standalone mode as the files
              // aren't traced/included
              if (!process.env.__NEXT_PRIVATE_STANDALONE_CONFIG) {
                throw err
              }
            }
          }
          if (process.env.__NEXT_PRIVATE_STANDALONE_CONFIG) {
            return [2, JSON.parse(process.env.__NEXT_PRIVATE_STANDALONE_CONFIG)]
          }
          // For the render worker, we directly return the serialized config from the
          // parent worker (router worker) to avoid loading it again.
          // This is because loading the config might be expensive especiall when people
          // have Webpack plugins added.
          // Because of this change, unserializable fields like `.webpack` won't be
          // existing here but the render worker shouldn't use these as well.
          if (process.env.__NEXT_PRIVATE_RENDER_WORKER_CONFIG) {
            return [
              2,
              JSON.parse(process.env.__NEXT_PRIVATE_RENDER_WORKER_CONFIG),
            ]
          }
          curLog = silent
            ? {
                warn: function () {},
                info: function () {},
                error: function () {},
              }
            : _log(0, _env.loadEnvConfig)(
            dir,
            phase === _constants.PHASE_DEVELOPMENT_SERVER,
            curLog
          )
          configFileName = 'next.config.js'
          if (customConfig) {
            return [
              2,
              assignDefaults(
                dir,
                _object_spread(
                  {
                    configOrigin: 'server',
                    configFileName: configFileName,
                  },
                  customConfig
                ),
                silent
              ),
            ]
          }
          return [
            4,
            (0, _findup.default)(_constants.CONFIG_FILES, {
              cwd: dir,
            }),
          ]
        case 1:
          path = _state.sent()
          if (!(path === null || path === void 0 ? void 0 : path.length))
            return [3, 14]
          configFileName = (0, _path.basename)(path)
          isTypeScript = configFileName.endsWith('ts') // .ts, .mts
          _state.label = 2
        case 2:
          _state.trys.push([2, 8, , 9])
          envBefore = Object.assign({}, process.env)
          if (!(process.env.__NEXT_TEST_MODE === 'jest')) return [3, 3]
          // dynamic import does not currently work inside of vm which
          // jest relies on so we fall back to require for this case
          // https://github.com/nodejs/node/issues/35889
          userConfigModule = require(path)
          return [3, 7]
        case 3:
          if (!isTypeScript) return [3, 5]
          return [
            4,
            (0, _transpileconfig.transpileConfig)({
              nextConfigPath: path,
              nextConfigName: configFileName,
              cwd: dir,
            }),
          ]
        case 4:
          userConfigModule = _state.sent()
          return [3, 7]
        case 5:
          return [
            4,
            Promise.resolve((0, _url.pathToFileURL)(path).href).then(function (
              p
            ) {
              return /*#__PURE__*/ _interop_require_wildcard(require(p))
            }),
          ]
        case 6:
          userConfigModule = _state.sent()
          _state.label = 7
        case 7:
          newEnv = {}
          ;(_iteratorNormalCompletion = true),
            (_didIteratorError = false),
            (_iteratorError = undefined)
          try {
            for (
              _iterator = Object.keys(process.env)[Symbol.iterator]();
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = true
            ) {
              key = _step.value
              if (envBefore[key] !== process.env[key]) {
                newEnv[key] = process.env[key]
              }
            }
          } catch (err) {
            _didIteratorError = true
            _iteratorError = err
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return()
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError
              }
            }
          }
          ;(0, _env.updateInitialEnv)(newEnv)
          if (rawConfig) {
            return [2, userConfigModule]
          }
          return [3, 9]
        case 8:
          err1 = _state.sent()
          // TODO: Modify docs to add cases of failing next.config.ts transformation
          curLog.error(
            'Failed to load '.concat(
              configFileName,
              ', see more info here https://nextjs.org/docs/messages/next-config-error'
            )
          )
          throw err1
        case 9:
          return [
            4,
            (0, _configshared.normalizeConfig)(
              phase,
              userConfigModule.default || userConfigModule
            ),
          ]
        case 10:
          userConfig = _state.sent()
          if (!!process.env.NEXT_MINIMAL) return [3, 13]
          // We only validate the config against schema in non minimal mode
          configSchema = require('./config-schema').configSchema
          state = configSchema.safeParse(userConfig)
          if (!!state.success) return [3, 13]
          // error message header
          messages = ['Invalid '.concat(configFileName, ' options detected: ')]
          ;(_normalizeZodErrors = _sliced_to_array(
            normalizeZodErrors(state.error),
            2
          )),
            (errorMessages = _normalizeZodErrors[0]),
            (shouldExit = _normalizeZodErrors[1])
          ;(_iteratorNormalCompletion1 = true),
            (_didIteratorError1 = false),
            (_iteratorError1 = undefined)
          try {
            // ident list item
            for (
              _iterator1 = errorMessages[Symbol.iterator]();
              !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done);
              _iteratorNormalCompletion1 = true
            ) {
              error = _step1.value
              messages.push('    '.concat(error))
            }
          } catch (err) {
            _didIteratorError1 = true
            _iteratorError1 = err
          } finally {
            try {
              if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return()
              }
            } finally {
              if (_didIteratorError1) {
                throw _iteratorError1
              }
            }
          }
          // error message footer
          messages.push(
            'See more info here: https://nextjs.org/docs/messages/invalid-next-config'
          )
          if (!shouldExit) return [3, 12]
          ;(_iteratorNormalCompletion2 = true),
            (_didIteratorError2 = false),
            (_iteratorError2 = undefined)
          try {
            for (
              _iterator2 = messages[Symbol.iterator]();
              !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
              _iteratorNormalCompletion2 = true
            ) {
              message = _step2.value
              console.error(message)
            }
          } catch (err) {
            _didIteratorError2 = true
            _iteratorError2 = err
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return()
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2
              }
            }
          }
          return [4, (0, _flushandexit.flushAndExit)(1)]
        case 11:
          _state.sent()
          return [3, 13]
        case 12:
          ;(_iteratorNormalCompletion3 = true),
            (_didIteratorError3 = false),
            (_iteratorError3 = undefined)
          try {
            for (
              _iterator3 = messages[Symbol.iterator]();
              !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
              _iteratorNormalCompletion3 = true
            ) {
              message1 = _step3.value
              curLog.warn(message1)
            }
          } catch (err) {
            _didIteratorError3 = true
            _iteratorError3 = err
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return()
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3
              }
            }
          }
          _state.label = 13
        case 13:
          if (userConfig.target && userConfig.target !== 'server') {
            throw new Error(
              'The "target" property is no longer supported in '.concat(
                configFileName,
                '.\n'
              ) +
                'See more info here https://nextjs.org/docs/messages/deprecated-target-config'
            )
          }
          if (
            (_userConfig_amp = userConfig.amp) === null ||
            _userConfig_amp === void 0
              ? void 0
              : _userConfig_amp.canonicalBase
          ) {
            canonicalBase = (userConfig.amp || {}).canonicalBase
            userConfig.amp = userConfig.amp || {}
            userConfig.amp.canonicalBase =
              (canonicalBase.endsWith('/')
                ? canonicalBase.slice(0, -1)
                : canonicalBase) || ''
          }
          if (
            ((_userConfig_experimental = userConfig.experimental) === null ||
            _userConfig_experimental === void 0
              ? void 0
              : (_userConfig_experimental_turbo =
                  _userConfig_experimental.turbo) === null ||
                _userConfig_experimental_turbo === void 0
              ? void 0
              : _userConfig_experimental_turbo.loaders) &&
            !((_userConfig_experimental1 = userConfig.experimental) === null ||
            _userConfig_experimental1 === void 0
              ? void 0
              : (_userConfig_experimental_turbo1 =
                  _userConfig_experimental1.turbo) === null ||
                _userConfig_experimental_turbo1 === void 0
              ? void 0
              : _userConfig_experimental_turbo1.rules)
          ) {
            curLog.warn(
              'experimental.turbo.loaders is now deprecated. Please update next.config.js to use experimental.turbo.rules as soon as possible.\n' +
                'The new option is similar, but the key should be a glob instead of an extension.\n' +
                'Example: loaders: { ".mdx": ["mdx-loader"] } -> rules: { "*.mdx": ["mdx-loader"] }" }\n' +
                'See more info here https://nextjs.org/docs/app/api-reference/next-config-js/turbo'
            )
            rules = {}
            ;(_iteratorNormalCompletion4 = true),
              (_didIteratorError4 = false),
              (_iteratorError4 = undefined)
            try {
              for (
                _iterator4 = Object.entries(
                  userConfig.experimental.turbo.loaders
                )[Symbol.iterator]();
                !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next())
                  .done);
                _iteratorNormalCompletion4 = true
              ) {
                ;(_step_value = _sliced_to_array(_step4.value, 2)),
                  (ext = _step_value[0]),
                  (loaders = _step_value[1])
                rules['*' + ext] = loaders
              }
            } catch (err) {
              _didIteratorError4 = true
              _iteratorError4 = err
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return()
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4
                }
              }
            }
            userConfig.experimental.turbo.rules = rules
          }
          onLoadUserConfig === null || onLoadUserConfig === void 0
            ? void 0
            : onLoadUserConfig(userConfig)
          completeConfig = assignDefaults(
            dir,
            _object_spread(
              {
                configOrigin: (0, _path.relative)(dir, path),
                configFile: path,
                configFileName: configFileName,
              },
              userConfig
            ),
            silent
          )
          return [2, completeConfig]
        case 14:
          configBaseName = (0, _path.basename)(
            _constants.CONFIG_FILES[0],
            (0, _path.extname)(_constants.CONFIG_FILES[0])
          )
          unsupportedConfig = _findup.default.sync(
            [
              ''.concat(configBaseName, '.jsx'),
              ''.concat(configBaseName, '.tsx'),
              ''.concat(configBaseName, '.json'),
            ],
            {
              cwd: dir,
            }
          )
          if (
            unsupportedConfig === null || unsupportedConfig === void 0
              ? void 0
              : unsupportedConfig.length
          ) {
            throw new Error(
              "Configuring Next.js via '".concat(
                (0, _path.basename)(unsupportedConfig),
                "' is not supported. Please replace the file with 'next.config.js', 'next.config.mjs', or 'next.config.ts'."
              )
            )
          }
          _state.label = 15
        case 15:
          // always call assignDefaults to ensure settings like
          // reactRoot can be updated correctly even with no next.config.js
          completeConfig1 = assignDefaults(
            dir,
            _configshared.defaultConfig,
            silent
          )
          completeConfig1.configFileName = configFileName
          ;(0, _setuphttpagentenv.setHttpClientAndAgentOptions)(completeConfig1)
          return [2, completeConfig1]
      }
    })
  })
  return _loadConfig.apply(this, arguments)
}
function getEnabledExperimentalFeatures(userNextConfigExperimental) {
  var enabledExperiments = []
  if (!userNextConfigExperimental) return enabledExperiments
  // defaultConfig.experimental is predefined and will never be undefined
  // This is only a type guard for the typescript
  if (_configshared.defaultConfig.experimental) {
    var _iteratorNormalCompletion = true,
      _didIteratorError = false,
      _iteratorError = undefined
    try {
      for (
        var _iterator = Object.keys(userNextConfigExperimental)[
            Symbol.iterator
          ](),
          _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        _iteratorNormalCompletion = true
      ) {
        var featureName = _step.value
        if (
          featureName in _configshared.defaultConfig.experimental &&
          userNextConfigExperimental[featureName] !==
            _configshared.defaultConfig.experimental[featureName]
        ) {
          enabledExperiments.push(featureName)
        }
      }
    } catch (err) {
      _didIteratorError = true
      _iteratorError = err
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return()
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError
        }
      }
    }
  }
  return enabledExperiments
}
