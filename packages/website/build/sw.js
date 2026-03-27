(() => {
"use strict";
var __webpack_modules__ = ({
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/Deferred.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Deferred: () => (Deferred)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkboxError: () => (WorkboxError)
});
/* import */ var _models_messages_messageGenerator_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messageGenerator.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__rspack_import_0.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: () => (finalAssertExports)
});
/* import */ var _private_WorkboxError_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__rspack_import_0.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cacheMatchIgnoreParams: () => (cacheMatchIgnoreParams)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cacheNames: () => (cacheNames)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  canConstructResponseFromBodyStream: () => (canConstructResponseFromBodyStream)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  executeQuotaErrorCallbacks: () => (executeQuotaErrorCallbacks)
});
/* import */ var _private_logger_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _models_quotaErrorCallbacks_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* import */ var _version_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_2);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__rspack_import_0.logger.log(`About to run ${_models_quotaErrorCallbacks_js__rspack_import_1.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__rspack_import_1.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__rspack_import_0.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__rspack_import_0.logger.log('Finished running callbacks.');
    }
}



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getFriendlyURL: () => (getFriendlyURL)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  logger: () => (logger)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/timeout.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  timeout: () => (timeout)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/waitUntil.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  waitUntil: () => (waitUntil)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js"() {

// @ts-ignore
try {
    self['workbox:core:7.2.0'] && _();
}
catch (e) { }


},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/copyResponse.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  copyResponse: () => (copyResponse)
});
/* import */ var _private_canConstructResponseFromBodyStream_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* import */ var _private_WorkboxError_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_2);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__rspack_import_1.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__rspack_import_0.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messageGenerator.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  messageGenerator: () => (messageGenerator)
});
/* import */ var _messages_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messages.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__rspack_import_0.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messages.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  messages: () => (messages)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


},
"../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/quotaErrorCallbacks.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  quotaErrorCallbacks: () => (quotaErrorCallbacks)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheController.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: () => (PrecacheController)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* import */ var workbox_core_private_cacheNames_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* import */ var workbox_core_private_logger_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var workbox_core_private_waitUntil_js__rspack_import_4 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/waitUntil.js");
/* import */ var _utils_createCacheKey_js__rspack_import_5 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/createCacheKey.js");
/* import */ var _utils_PrecacheInstallReportPlugin_js__rspack_import_6 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* import */ var _utils_PrecacheCacheKeyPlugin_js__rspack_import_7 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* import */ var _utils_printCleanupDetails_js__rspack_import_8 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* import */ var _utils_printInstallDetails_js__rspack_import_9 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* import */ var _PrecacheStrategy_js__rspack_import_10 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* import */ var _version_js__rspack_import_11 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_11_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_11);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__rspack_import_10.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__rspack_import_1.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__rspack_import_7.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__rspack_import_5.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__rspack_import_3.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__rspack_import_3.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__rspack_import_2.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__rspack_import_4.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__rspack_import_6.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__rspack_import_9.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__rspack_import_4.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__rspack_import_8.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__rspack_import_3.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheFallbackPlugin: () => (PrecacheFallbackPlugin)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    }
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheRoute: () => (PrecacheRoute)
});
/* import */ var workbox_core_private_logger_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var workbox_routing_Route_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js");
/* import */ var _utils_generateURLVariations_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* import */ var _version_js__rspack_import_4 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_4);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__rspack_import_2.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__rspack_import_3.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__rspack_import_0.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheStrategy.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheStrategy: () => (PrecacheStrategy)
});
/* import */ var workbox_core_copyResponse_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/copyResponse.js");
/* import */ var workbox_core_private_cacheNames_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var workbox_core_private_logger_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_4 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var workbox_strategies_Strategy_js__rspack_import_5 = __webpack_require__("../../node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/Strategy.js");
/* import */ var _version_js__rspack_import_6 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_6);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__rspack_import_5.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__rspack_import_1.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__rspack_import_3.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__rspack_import_2.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__rspack_import_3.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_2.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__rspack_import_4.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__rspack_import_2.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__rspack_import_3.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_2.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__rspack_import_3.logger.log(request);
            workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
            workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__rspack_import_3.logger.log(response);
            workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
            workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__rspack_import_4.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__rspack_import_0.copyResponse)(response) : response;
    },
};



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_types.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js"() {

// @ts-ignore
try {
    self['workbox:precaching:7.2.0'] && _();
}
catch (e) { }


},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addPlugins.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addPlugins: () => (addPlugins)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addRoute: () => (addRoute)
});
/* import */ var workbox_routing_registerRoute_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/registerRoute.js");
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _PrecacheRoute_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* import */ var _version_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_3);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_1.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__rspack_import_2.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__rspack_import_0.registerRoute)(precacheRoute);
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cleanupOutdatedCaches: () => (cleanupOutdatedCaches)
});
/* import */ var workbox_core_private_cacheNames_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* import */ var workbox_core_private_logger_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _utils_deleteOutdatedCaches_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* import */ var _version_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_3);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__rspack_import_0.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__rspack_import_2.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__rspack_import_1.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/createHandlerBoundToURL.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createHandlerBoundToURL: () => (createHandlerBoundToURL)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/getCacheKeyForURL.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCacheKeyForURL: () => (getCacheKeyForURL)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: () => (/* reexport safe */ _PrecacheController_js__rspack_import_8.PrecacheController),
  PrecacheFallbackPlugin: () => (/* reexport safe */ _PrecacheFallbackPlugin_js__rspack_import_11.PrecacheFallbackPlugin),
  PrecacheRoute: () => (/* reexport safe */ _PrecacheRoute_js__rspack_import_9.PrecacheRoute),
  PrecacheStrategy: () => (/* reexport safe */ _PrecacheStrategy_js__rspack_import_10.PrecacheStrategy),
  addPlugins: () => (/* reexport safe */ _addPlugins_js__rspack_import_0.addPlugins),
  addRoute: () => (/* reexport safe */ _addRoute_js__rspack_import_1.addRoute),
  cleanupOutdatedCaches: () => (/* reexport safe */ _cleanupOutdatedCaches_js__rspack_import_2.cleanupOutdatedCaches),
  createHandlerBoundToURL: () => (/* reexport safe */ _createHandlerBoundToURL_js__rspack_import_3.createHandlerBoundToURL),
  getCacheKeyForURL: () => (/* reexport safe */ _getCacheKeyForURL_js__rspack_import_4.getCacheKeyForURL),
  matchPrecache: () => (/* reexport safe */ _matchPrecache_js__rspack_import_5.matchPrecache),
  precache: () => (/* reexport safe */ _precache_js__rspack_import_6.precache),
  precacheAndRoute: () => (/* reexport safe */ _precacheAndRoute_js__rspack_import_7.precacheAndRoute)
});
/* import */ var _addPlugins_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addPlugins.js");
/* import */ var _addRoute_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addRoute.js");
/* import */ var _cleanupOutdatedCaches_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* import */ var _createHandlerBoundToURL_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* import */ var _getCacheKeyForURL_js__rspack_import_4 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* import */ var _matchPrecache_js__rspack_import_5 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/matchPrecache.js");
/* import */ var _precache_js__rspack_import_6 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precache.js");
/* import */ var _precacheAndRoute_js__rspack_import_7 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precacheAndRoute.js");
/* import */ var _PrecacheController_js__rspack_import_8 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheController.js");
/* import */ var _PrecacheRoute_js__rspack_import_9 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* import */ var _PrecacheStrategy_js__rspack_import_10 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* import */ var _PrecacheFallbackPlugin_js__rspack_import_11 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* import */ var _version_js__rspack_import_12 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_12_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_12);
/* import */ var _types_js__rspack_import_13 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/matchPrecache.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  matchPrecache: () => (matchPrecache)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precache.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  precache: () => (precache)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precacheAndRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  precacheAndRoute: () => (precacheAndRoute)
});
/* import */ var _addRoute_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addRoute.js");
/* import */ var _precache_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precache.js");
/* import */ var _version_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_2);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__rspack_import_1.precache)(entries);
    (0,_addRoute_js__rspack_import_0.addRoute)(options);
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheCacheKeyPlugin: () => (PrecacheCacheKeyPlugin)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheInstallReportPlugin: () => (PrecacheInstallReportPlugin)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/createCacheKey.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCacheKey: () => (createCacheKey)
});
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__rspack_import_0.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__rspack_import_0.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  deleteOutdatedCaches: () => (deleteOutdatedCaches)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/generateURLVariations.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  generateURLVariations: () => (generateURLVariations)
});
/* import */ var _removeIgnoredSearchParams_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__rspack_import_0.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOrCreatePrecacheController: () => (getOrCreatePrecacheController)
});
/* import */ var _PrecacheController_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__rspack_import_0.PrecacheController();
    }
    return precacheController;
};


},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printCleanupDetails.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printCleanupDetails: () => (printCleanupDetails)
});
/* import */ var workbox_core_private_logger_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__rspack_import_0.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__rspack_import_0.logger.log(url);
    }
    workbox_core_private_logger_js__rspack_import_0.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__rspack_import_0.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__rspack_import_0.logger.groupEnd();
    }
}


},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printInstallDetails.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printInstallDetails: () => (printInstallDetails)
});
/* import */ var workbox_core_private_logger_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__rspack_import_0.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__rspack_import_0.logger.log(url);
    }
    workbox_core_private_logger_js__rspack_import_0.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__rspack_import_0.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__rspack_import_0.logger.groupEnd();
    }
}


},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  removeIgnoredSearchParams: () => (removeIgnoredSearchParams)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


},
"../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/RegExpRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RegExpRoute: () => (RegExpRoute)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* import */ var workbox_core_private_logger_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _Route_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js");
/* import */ var _version_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_3);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__rspack_import_2.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__rspack_import_1.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



},
"../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Route: () => (Route)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* import */ var _utils_constants_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/constants.js");
/* import */ var _utils_normalizeHandler_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* import */ var _version_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_3);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__rspack_import_1.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__rspack_import_0.assert.isOneOf(method, _utils_constants_js__rspack_import_1.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__rspack_import_2.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__rspack_import_2.normalizeHandler)(handler);
    }
}



},
"../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Router.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Router: () => (Router)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var _utils_constants_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/constants.js");
/* import */ var workbox_core_private_logger_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _utils_normalizeHandler_js__rspack_import_4 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_5 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_6 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_6);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__rspack_import_3.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__rspack_import_3.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__rspack_import_3.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__rspack_import_3.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__rspack_import_3.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__rspack_import_3.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__rspack_import_3.logger.error(err);
                        workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__rspack_import_3.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__rspack_import_3.logger.error(err);
                        workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__rspack_import_3.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__rspack_import_2.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__rspack_import_4.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__rspack_import_4.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__rspack_import_0.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__rspack_import_0.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__rspack_import_0.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__rspack_import_0.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__rspack_import_5.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__rspack_import_5.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



},
"../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js"() {

// @ts-ignore
try {
    self['workbox:routing:7.2.0'] && _();
}
catch (e) { }


},
"../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/registerRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerRoute: () => (registerRoute)
});
/* import */ var workbox_core_private_logger_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _Route_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js");
/* import */ var _RegExpRoute_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/RegExpRoute.js");
/* import */ var _utils_getOrCreateDefaultRouter_js__rspack_import_4 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* import */ var _version_js__rspack_import_5 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_5);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__rspack_import_1.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__rspack_import_0.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__rspack_import_0.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__rspack_import_2.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__rspack_import_3.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__rspack_import_2.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__rspack_import_2.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__rspack_import_1.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__rspack_import_4.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



},
"../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/constants.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  defaultMethod: () => (defaultMethod),
  validMethods: () => (validMethods)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


},
"../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOrCreateDefaultRouter: () => (getOrCreateDefaultRouter)
});
/* import */ var _Router_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Router.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__rspack_import_0.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


},
"../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/normalizeHandler.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  normalizeHandler: () => (normalizeHandler)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


},
"../../node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/Strategy.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Strategy: () => (Strategy)
});
/* import */ var workbox_core_private_cacheNames_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var workbox_core_private_logger_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var _StrategyHandler_js__rspack_import_4 = __webpack_require__("../../node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/StrategyHandler.js");
/* import */ var _version_js__rspack_import_5 = __webpack_require__("../../node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/_version.js");
/* import */ var _version_js__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_5);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__rspack_import_0.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__rspack_import_4.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__rspack_import_1.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__rspack_import_2.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__rspack_import_3.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


},
"../../node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/StrategyHandler.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StrategyHandler: () => (StrategyHandler)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* import */ var workbox_core_private_cacheMatchIgnoreParams_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* import */ var workbox_core_private_Deferred_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/Deferred.js");
/* import */ var workbox_core_private_executeQuotaErrorCallbacks_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_4 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var workbox_core_private_logger_js__rspack_import_5 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_timeout_js__rspack_import_6 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/timeout.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_7 = __webpack_require__("../../node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_8 = __webpack_require__("../../node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/_version.js");
/* import */ var _version_js__rspack_import_8_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_8);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__rspack_import_2.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__rspack_import_5.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__rspack_import_7.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__rspack_import_5.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillBeUsed()
     * - cachedResponseWillBeUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillBeUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__rspack_import_6.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__rspack_import_7.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__rspack_import_5.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__rspack_import_7.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__rspack_import_1.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__rspack_import_5.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__rspack_import_3.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__rspack_import_5.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__rspack_import_5.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



},
"../../node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/_version.js"() {

// @ts-ignore
try {
    self['workbox:strategies:7.2.0'] && _();
}
catch (e) { }


},
"../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.mjs"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: () => (/* reexport safe */ _index_js__rspack_import_0.PrecacheController),
  PrecacheFallbackPlugin: () => (/* reexport safe */ _index_js__rspack_import_0.PrecacheFallbackPlugin),
  PrecacheRoute: () => (/* reexport safe */ _index_js__rspack_import_0.PrecacheRoute),
  PrecacheStrategy: () => (/* reexport safe */ _index_js__rspack_import_0.PrecacheStrategy),
  addPlugins: () => (/* reexport safe */ _index_js__rspack_import_0.addPlugins),
  addRoute: () => (/* reexport safe */ _index_js__rspack_import_0.addRoute),
  cleanupOutdatedCaches: () => (/* reexport safe */ _index_js__rspack_import_0.cleanupOutdatedCaches),
  createHandlerBoundToURL: () => (/* reexport safe */ _index_js__rspack_import_0.createHandlerBoundToURL),
  getCacheKeyForURL: () => (/* reexport safe */ _index_js__rspack_import_0.getCacheKeyForURL),
  matchPrecache: () => (/* reexport safe */ _index_js__rspack_import_0.matchPrecache),
  precache: () => (/* reexport safe */ _index_js__rspack_import_0.precache),
  precacheAndRoute: () => (/* reexport safe */ _index_js__rspack_import_0.precacheAndRoute)
});
/* import */ var _index_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.js");


},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.7.4")
})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.7.4";
})();
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* import */ var workbox_precaching__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://x.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"c7e96e31ac186a5bfb0414089496fcc5","url":"404.html"},{"revision":"088456b0156e9d4d8382480e2247b89a","url":"assets/css/styles.2c1b834a.css"},{"revision":"4faf6d896c4f4a8d8fe0a05c6de9b6c4","url":"assets/js/0.857423ef.js"},{"revision":"cba8b32bb6ffcd7ca31f3a71f2e5e0da","url":"assets/js/01a85c17.31d7c131.js"},{"revision":"5f262d0d94257d2308caa1b34d8dbf76","url":"assets/js/02d7ff3c.dccd38c7.js"},{"revision":"531a52e9b1e925aff8a00ca6e265960a","url":"assets/js/033558ef.eb2abe39.js"},{"revision":"663bfa67a0d3f2931ed8e982ed21fb23","url":"assets/js/0341ea21.8f0165c5.js"},{"revision":"549ce894482eb4e6b5d5fb989c96e774","url":"assets/js/03dcb828.75a807b2.js"},{"revision":"d49d40b2f501959733cc072a6baa268f","url":"assets/js/041abebd.2abc0359.js"},{"revision":"aaf8031d9410bbcd5624d418e8d83063","url":"assets/js/043418cf.b55d415c.js"},{"revision":"aaf31235fd539fb479f831a4ee5462af","url":"assets/js/0466c4d9.48187d91.js"},{"revision":"4be9ce52d97e101351fe279bd53446f7","url":"assets/js/046a529c.18b0517f.js"},{"revision":"ea4f750a4441b1b988053195b42c7af9","url":"assets/js/05dd0033.ed85ad12.js"},{"revision":"2400a5d1445ebcb7dc8d71073f5be71d","url":"assets/js/05fc022f.ed222a89.js"},{"revision":"b4952d0c951cd611b6bd3d2560899a43","url":"assets/js/06553e5f.1710e58c.js"},{"revision":"132606d92b827bb16e799f5c0b5bfd45","url":"assets/js/07027ca8.07fbd4a8.js"},{"revision":"10a0439a68766e247ee0d4b170308d04","url":"assets/js/075959c7.860a72d3.js"},{"revision":"2e6542cdeeb3e57cb5af789ccf319645","url":"assets/js/07dcffa0.4b754e79.js"},{"revision":"751bb038bee0981f12d20c456a1dc792","url":"assets/js/0876d0f8.ede47904.js"},{"revision":"5c41a7df27ca4b04b31fdca67fd50f07","url":"assets/js/08c00c20.b25ac41b.js"},{"revision":"68b98d23f0388b4c6074515372bb84e9","url":"assets/js/0b9bd52d.6190c2dd.js"},{"revision":"a93a00d340b7bc3fbc5f6f898199570b","url":"assets/js/0cb004eb.b64fcf7e.js"},{"revision":"53631c590d99cae7c02ef6b482b61ff2","url":"assets/js/0d8cc21f.b5357d9a.js"},{"revision":"024258cb86e172c987ca22461f7a3ae7","url":"assets/js/0dc788de.9ef8617c.js"},{"revision":"d94a01b74dd24afd5676bcd3e5623334","url":"assets/js/0ebcc795.c10858b3.js"},{"revision":"79285f5f12ee89f99ae26402b2babe62","url":"assets/js/10775d05.f6618eb7.js"},{"revision":"5880a066e3c6cf1ec29cc0d92e3b5936","url":"assets/js/11758453.ca428616.js"},{"revision":"abeff6ef96c8721f4b2f197334666279","url":"assets/js/129d5367.4ee65684.js"},{"revision":"392834d461f2ff39b09f9766ee517a89","url":"assets/js/12aa2c8c.2e330044.js"},{"revision":"f7537f7b391ef4c6571673d0a88c2ceb","url":"assets/js/13531353.a263936e.js"},{"revision":"366120549d19551e735638ae44a18ef5","url":"assets/js/1468.8843064c.js"},{"revision":"bc0d3b40a4406d0d0c02bfb82dd61be1","url":"assets/js/158.abe6c935.js"},{"revision":"e636682e417e6e9d6e2aa5e2d870085d","url":"assets/js/1681308f.0f6d6f8f.js"},{"revision":"99af498db8f0f76d37fab8d8632a1644","url":"assets/js/16c3aa7f.d71b98e0.js"},{"revision":"6af4d85d99d8676ae8d9fd0b529f8dc7","url":"assets/js/1703eefb.f58a1f3a.js"},{"revision":"f37addd2e6c540297573ae64836ba440","url":"assets/js/170afc8f.b46b3698.js"},{"revision":"89b04ac2b810955dcc7f1de445e0b2c3","url":"assets/js/1749193b.538175e3.js"},{"revision":"4191dee8c8c4473f5f4b261a24e24e12","url":"assets/js/17896441.cbd45a5a.js"},{"revision":"d56628c501016c06d52fde094079999d","url":"assets/js/1903511a.e7804e2e.js"},{"revision":"c6e4a5a43785c2be373769991a3018d7","url":"assets/js/1a12a673.3a2e2527.js"},{"revision":"9d5cdc7210cfafb6da5f53aae62e2942","url":"assets/js/1a4e3797.4547240c.js"},{"revision":"77ed2e247c6f1ef8028416b48a466ac6","url":"assets/js/1a79164e.9dc48c07.js"},{"revision":"998fe4a38068294f10d66276d95bca7d","url":"assets/js/1b141026.fad2bf73.js"},{"revision":"2599caaf66fe1da854bb93bb7895c858","url":"assets/js/1be9b934.889b0abe.js"},{"revision":"3fadf8fd563c24335515489b019ed24f","url":"assets/js/1c3d6ec7.ed512338.js"},{"revision":"e9836c5f19efefd207e5e81f0b89ddaa","url":"assets/js/1c5cff36.a7de42a9.js"},{"revision":"6133021de6a4021f926f8c518aea6b4f","url":"assets/js/1d71fb6c.1b1071a0.js"},{"revision":"521a5dc4e7ead916f4cea0f97815f3df","url":"assets/js/1df93b7f.da254cf8.js"},{"revision":"b0dc16bea032cf822f71b6861d099f12","url":"assets/js/1e50e68f.b5070c4f.js"},{"revision":"83c54ea3445b7cae094af5fa6194439b","url":"assets/js/1f28a7ec.a52b83a7.js"},{"revision":"fe21d6121dd54bb79ea15ace9d643fa7","url":"assets/js/20b3c6d0.5bb80bd8.js"},{"revision":"d6c050ef1c75eb4db6f885c319b2a672","url":"assets/js/20f85cff.e865708f.js"},{"revision":"5c8319b9db2f83dcda85027297f213eb","url":"assets/js/27569c03.203cb430.js"},{"revision":"8f8313c841d05c72d1e30f4341f1dcea","url":"assets/js/2831413c.2abf2f54.js"},{"revision":"f04708f51c81704aae0db2f4b1dc24a7","url":"assets/js/2864f544.23890c44.js"},{"revision":"4b3a52af1308de18e247c5702fbf1bfd","url":"assets/js/2876.712d9b33.js"},{"revision":"297195331a383caf89e3ab3fbaad5f42","url":"assets/js/28e8fb90.71ce87cb.js"},{"revision":"24e87fe7169f318c6bafb1ddab851a3a","url":"assets/js/2a0c500b.b07252d1.js"},{"revision":"cf686c44c21d4fab84a6f46085f8dec3","url":"assets/js/2bf937b4.1ab977bd.js"},{"revision":"4a31460e433587a9af31a9973e4cc561","url":"assets/js/2cb9007f.5b5362b7.js"},{"revision":"e2354e2eeceeb581a2cd97a900f642fd","url":"assets/js/2db69acd.05a4083a.js"},{"revision":"df4a1c4b1b30ee66109065f82cedea22","url":"assets/js/2dd4cef3.72c578ca.js"},{"revision":"846d30a9a6223faf0cee3144814d4f58","url":"assets/js/2df29dd6.ad532986.js"},{"revision":"b88a75c329d5320cd07f7f939c3debc3","url":"assets/js/2e97943b.d9c8b405.js"},{"revision":"87505743d9217020c5ece8de829d80c3","url":"assets/js/2f210215.759e9382.js"},{"revision":"fdda8035e819781e52ee58ae20302f11","url":"assets/js/30e81592.681d8f36.js"},{"revision":"4c39a377e0c4401cf816be93caf02667","url":"assets/js/3136.92837a37.js"},{"revision":"2b5977f5f3e5bfd9bdaa9f6ac05d2d38","url":"assets/js/3207465f.23762e32.js"},{"revision":"3ea472e3cd761edf5084e8af29c46034","url":"assets/js/3217192f.78ccedd4.js"},{"revision":"1d60592684cfea248901136de33bea9d","url":"assets/js/337bb98d.14b82653.js"},{"revision":"16abbae10d40844df01c92d9df937688","url":"assets/js/338da531.567ed2d0.js"},{"revision":"e610083fc8bf497a1c589b500b363d9b","url":"assets/js/3455c302.95367be1.js"},{"revision":"1e532a4f042fd52d01aa4e47c3520653","url":"assets/js/349ba911.f8be378f.js"},{"revision":"d93fa0c812d1286905fea1a72b803709","url":"assets/js/3513.11a4b218.js"},{"revision":"9b764b09f1e8dd1c0441f10b7f1401fa","url":"assets/js/35b78b3b.be110f43.js"},{"revision":"dddb52816889ec0af3bd1a47d8d5d00b","url":"assets/js/36720592.4836efb8.js"},{"revision":"7c4d79cb24e6b21f320c11a33a855ca7","url":"assets/js/3684a828.1bd069eb.js"},{"revision":"111ed45e65b75134992ec44ebeffa837","url":"assets/js/36994c47.a8d503bd.js"},{"revision":"277b1aa39d96bee988788f871d9b3065","url":"assets/js/3721eef1.e9c088ad.js"},{"revision":"d49c5311f985ea20a3dc3c4675d2c4ef","url":"assets/js/37da7d7f.57e9f241.js"},{"revision":"acbd1e58792867d24dd9330204781173","url":"assets/js/37f731ce.f11bef07.js"},{"revision":"c6d7a217d18f02bbd2d92e63a79c0c1b","url":"assets/js/38cc0a44.a8e66573.js"},{"revision":"55bb9e7bab39a2c68219ec74376508af","url":"assets/js/399c0679.8a1764d2.js"},{"revision":"c779587b6a9fb305d9077e85ad8cdf47","url":"assets/js/3a2db09e.431123fa.js"},{"revision":"84b16c6709a56517037e8c585ad68cac","url":"assets/js/3b753a9e.a2c36e7a.js"},{"revision":"3c7b23055dc32a2cab5dcbbe4dc630ed","url":"assets/js/3d84d671.f043a570.js"},{"revision":"76f8a23c91445848589d20c847a5c30f","url":"assets/js/3dad9047.880d4eb8.js"},{"revision":"5d6f5157a376cd52cb66d1da488504ab","url":"assets/js/3e5df077.311bdaae.js"},{"revision":"35eb0455536cd46c46a084961eb20cad","url":"assets/js/3f0fad88.55731ffb.js"},{"revision":"1eaed25500e0cc92488b359caae59941","url":"assets/js/3fcf94c6.db3679b2.js"},{"revision":"657c81162e86ae7d8bf45ba0eaccf89c","url":"assets/js/3fe5c5bb.5aa053bd.js"},{"revision":"7c3e16a77ea965ffa6627d0ba16f7069","url":"assets/js/426ec72e.df7f4eee.js"},{"revision":"4035ed94ed8a803803c2b38fea26ca24","url":"assets/js/43b0bb3a.86a9ddc7.js"},{"revision":"f36c55c7b7e98d2ee0781d4e26627860","url":"assets/js/4409.04df5b8d.js"},{"revision":"da7f0ab57f97dd407258292033859dee","url":"assets/js/4419a2b6.fc56c230.js"},{"revision":"954e955df6278ff11cbe2f126cb5cae5","url":"assets/js/45bfaa30.239c8342.js"},{"revision":"2c194a34ae48ee3c5318b687bca00150","url":"assets/js/45c93a33.24a031f7.js"},{"revision":"d97f4bc60cc5ca6d9de1d2da9fd707cb","url":"assets/js/461eb328.bab4c2c2.js"},{"revision":"efbcbe4ea6aa4f732187dfae26756ffd","url":"assets/js/46693ed1.6b018085.js"},{"revision":"237d786ef4deddef2e0060bc5fa7b721","url":"assets/js/472cba27.d46655ab.js"},{"revision":"8d75eeb920e016b9beaa63ab3545afb3","url":"assets/js/4741cb33.34005f1f.js"},{"revision":"b5a0898127a830ee51cc43e89a78185a","url":"assets/js/47572dc7.0954627d.js"},{"revision":"7e038809d80142d9b93d74c054e52998","url":"assets/js/48628d60.44cb10fb.js"},{"revision":"dcb770366debe5051e9569e68520e2cc","url":"assets/js/4944d1af.f5ca3c44.js"},{"revision":"aa86bec055488a1af49307da05c20f1d","url":"assets/js/4c0b289f.442489ce.js"},{"revision":"52ba61f11ffb2b9809adfaa62e8a0f55","url":"assets/js/4cafb32f.3c6f476f.js"},{"revision":"261d35eab5786e8614902226c4400c04","url":"assets/js/4ccc72b5.48456c7c.js"},{"revision":"09a964ba50135860e9bf25e1a88ada48","url":"assets/js/4d299ce9.74f2dc90.js"},{"revision":"38ae20c3a50b12398e55c8bbefe115fb","url":"assets/js/4f24138e.c6fa4f05.js"},{"revision":"f04afc6317379cec622d7c4ca3458b99","url":"assets/js/4f353006.851a3a71.js"},{"revision":"2bc9ba86a8dd69ef183ad2060de12e4d","url":"assets/js/4f5b95fb.fbe10a10.js"},{"revision":"0eb84398c76ccfcf2a4c920fda217ea0","url":"assets/js/4f6c1b53.844bf8b4.js"},{"revision":"81d4bef7c5df2292e661fa7eebba13a6","url":"assets/js/501058eb.96bcfbbf.js"},{"revision":"112f638aaf9cbe758417900b209a3dba","url":"assets/js/5126.7a776c7a.js"},{"revision":"26784a55ab3cf99fc72e23afd8abf43b","url":"assets/js/53ef8c8c.e7b08c9b.js"},{"revision":"05d99479ef5a5a471e55506bc489149f","url":"assets/js/55b2f05d.c244d477.js"},{"revision":"126a51fcb5848cf527ba7d798c384352","url":"assets/js/56082b9d.5a1aae93.js"},{"revision":"437413f14482977f36d67e343c8b9626","url":"assets/js/56b5227e.81aed50d.js"},{"revision":"5394c6cad21184626579c56b1e1ff47c","url":"assets/js/58259761.54c5967d.js"},{"revision":"be7b3c6f07eb8e056586403242939b0e","url":"assets/js/59176472.2c25c403.js"},{"revision":"5b4a9aa5d395ccff49d3ed8d0e7fcf66","url":"assets/js/59caa285.725385c3.js"},{"revision":"df1d994e518c8ef8c25fe45ce05a768f","url":"assets/js/5bcffa70.d74ba47c.js"},{"revision":"9fe37d3badf238db15f81a75c79cfc46","url":"assets/js/5c09d473.3370f09b.js"},{"revision":"3666cce99f76894eeaf87e7eb5703711","url":"assets/js/5ccd99c1.368ee39f.js"},{"revision":"94a76f291e56a98c9a62e2b1c736ac66","url":"assets/js/5e5de49f.d46b4d21.js"},{"revision":"134d3a714aee3c97105549e85f98adda","url":"assets/js/5e95c892.11216c98.js"},{"revision":"bb42286df5dc7464ed1037d7b96f4594","url":"assets/js/5eba63e2.c317419a.js"},{"revision":"948c3b73b51592fe8b7ccb5095f0d4a1","url":"assets/js/5f04515a.d28180a7.js"},{"revision":"03358f22efe599c01ffcf1028ced9549","url":"assets/js/5fbaa4cb.58969e43.js"},{"revision":"6774aeb6802e1409660a00d961c43524","url":"assets/js/616659e4.1db5e9ba.js"},{"revision":"2cec645073a9b5e845d6cf9bccca0776","url":"assets/js/61a70014.f8daaf77.js"},{"revision":"8c09dd5c9ae894a9562ab1b65050a2a5","url":"assets/js/621db11d.fa6a50de.js"},{"revision":"32cab0e87bb5a9ce7b771d092c42ae82","url":"assets/js/628067ee.da3efc42.js"},{"revision":"b2736ec74a6c22bfc860062295aeb5fb","url":"assets/js/6459.a8954a57.js"},{"revision":"3cacbdcd6738e9a62e8fadf3466bba2a","url":"assets/js/6509.e75b99d7.js"},{"revision":"9d6ebdca40617c751fdbb4a8929bb32e","url":"assets/js/65514a8b.ca911fa7.js"},{"revision":"8c70d4715a39b4c97fb696eeeb62deba","url":"assets/js/658997e5.beec9ad5.js"},{"revision":"8ed5b18567a17ea30b33486ed0815789","url":"assets/js/668d038d.f22c2f58.js"},{"revision":"b7c0f21cdf763ee4b4cafbcba163ef82","url":"assets/js/6875c492.8bb719ad.js"},{"revision":"34003728e9c45f0b59477aa66e3b778b","url":"assets/js/688e1d34.c8eed6b0.js"},{"revision":"e63fbc8aa805aefca2941d2ecf08f669","url":"assets/js/68b9bcd7.f1c5e022.js"},{"revision":"e24f4e52b4828c11232d31c1d189d9c2","url":"assets/js/68d07108.e7ae9583.js"},{"revision":"21e2eb675e7e61853450d427ae3efbac","url":"assets/js/6939.96512002.js"},{"revision":"0a3b650342e8d09f731e6a579ce4b3e3","url":"assets/js/6945046d.27097669.js"},{"revision":"e8cf2e9ff8d7654a4c8fd3331ed42f65","url":"assets/js/69c6d958.878b4ade.js"},{"revision":"40c0e6b5a6ee86eb40c8b62edc191556","url":"assets/js/6be2c223.5edcec94.js"},{"revision":"bce3f02828c49618151a02c6cc6e8173","url":"assets/js/6c11e88a.60bf551f.js"},{"revision":"cf2acc4b0983f30c0337728e36ef9938","url":"assets/js/6c74094b.cbeb484d.js"},{"revision":"a4d54a3158d81235a228029e5ad6c46d","url":"assets/js/6e8d9dba.e6275d8c.js"},{"revision":"b60fa8b5872ca34593c5e7cb66ed6dac","url":"assets/js/6f06f4ad.8505aff1.js"},{"revision":"e3b8b7e970dc3b50249d43a59e235095","url":"assets/js/6fe31f20.cf8abece.js"},{"revision":"4fe5a39921fcde16f084432e45716ba0","url":"assets/js/6fffeb92.c02ab2a6.js"},{"revision":"9f3013b43f7a857e870629bf7d27e16a","url":"assets/js/705f0e63.09027ae0.js"},{"revision":"0811d2098d09680d499dfebd10e4dcea","url":"assets/js/706e313b.2c39a9cb.js"},{"revision":"0b6ba2d0f1250a3571304bfbab228038","url":"assets/js/708c5d98.920fcbfd.js"},{"revision":"e6c8635cd8b9d1888a1e14e17dfd58ac","url":"assets/js/729dfcf2.a9837c8d.js"},{"revision":"11b3c1ce87ee15a686af0380782abf4a","url":"assets/js/740a169f.8b09e97f.js"},{"revision":"38763daa880e6f6342b05813e3c7b7bb","url":"assets/js/7410.550787f5.js"},{"revision":"a8c7b5887bc3e758c3b410181e40deb1","url":"assets/js/741c8532.583d224b.js"},{"revision":"9943fc6c703bf7925de3e5be9388f3c7","url":"assets/js/74271d73.ccbdc997.js"},{"revision":"20e2ee97d9f821fa452ebcc804adf687","url":"assets/js/745a0d75.72395638.js"},{"revision":"4cc2d650895c2c2202ef9af8c07532a9","url":"assets/js/747533bf.c93ef0be.js"},{"revision":"72a9e384d303c89c9088b603b9c143f4","url":"assets/js/74778198.0129cafe.js"},{"revision":"978ec5e380458e3eaca3f962b3dab20d","url":"assets/js/761c49eb.e6240426.js"},{"revision":"dc03f35e6f697226abee1156cf1dbd83","url":"assets/js/768.c2e175fd.js"},{"revision":"5a153b796fa1062b43944d6ac7461d8f","url":"assets/js/7729ec19.680a77c8.js"},{"revision":"82a612189d128999e7ffce300dc76f4a","url":"assets/js/77a4c7dc.0240ca74.js"},{"revision":"d6901d8c414fac87970b2ac359ff2060","url":"assets/js/7888.33596bbc.js"},{"revision":"904af4707850e3015a73d38eda747240","url":"assets/js/788cfecc.8d20768a.js"},{"revision":"15c732b43b5aace02993defce98a7b44","url":"assets/js/78caa0ca.5e865b9c.js"},{"revision":"7dc5e431bae49495584b965d512dd2de","url":"assets/js/794458d3.1776dfe7.js"},{"revision":"db7fff30485aa8d52accca8a8ba27242","url":"assets/js/79c6e179.87b89b78.js"},{"revision":"093bd8923efc489810d1ef1376096fc1","url":"assets/js/79f3f4c3.612ddee1.js"},{"revision":"05b796858a52a87ae8d1fca99c4c3edd","url":"assets/js/7b0d4d2a.de55da60.js"},{"revision":"3c4830cbcbd54bc9e2b2363678391dc2","url":"assets/js/7bd741ab.4cb377ab.js"},{"revision":"55cfeedc5aeea681912f46c32e2b3698","url":"assets/js/7cca66c8.e3ae6b7c.js"},{"revision":"fcde782da45278f6be4614ebd0b9ef16","url":"assets/js/7e5bf132.8169ccad.js"},{"revision":"ff7da786d4f063084a29bd50d695aff0","url":"assets/js/8073.df6d4bd6.js"},{"revision":"92834a217a8ef705f3ff5634041abd58","url":"assets/js/814f3328.e0dbfee4.js"},{"revision":"97c47458af092a59c6e874419ba69df4","url":"assets/js/8182fbba.89b3003f.js"},{"revision":"8742e71fe90f547bab53d786f674a876","url":"assets/js/81d7df49.71f268a3.js"},{"revision":"783a52329c5a8b75ec39b3c2216b0cfd","url":"assets/js/8321.556f3911.js"},{"revision":"3ec5e773fecfe21b2473a78513e31f8e","url":"assets/js/832fe255.aec366f0.js"},{"revision":"7250cdaac0390975350792f0be62fd64","url":"assets/js/835644da.b72ebd05.js"},{"revision":"0de89c32eb6006d088f5f39637e9193a","url":"assets/js/83762e81.712ce883.js"},{"revision":"ade71f066cb7ebcce5cddfd940af3260","url":"assets/js/84191490.dac0c446.js"},{"revision":"81ad37dbf8aec36d95a31bb275cc13cb","url":"assets/js/8571.edbdfa92.js"},{"revision":"c580b20dee18ae6b98741392f431bfaf","url":"assets/js/86df24e0.cba4dc22.js"},{"revision":"757f27c2de40aa653ec09df0651d6c54","url":"assets/js/8719167c.2aede88d.js"},{"revision":"5c94d91f0c1644d3647e64cdf8e4290d","url":"assets/js/875c23d4.a2d0e390.js"},{"revision":"fb1dbceebddb1f2e453a1c246de3baac","url":"assets/js/87a28cb6.45fffadf.js"},{"revision":"f7759397cdb87add028641f47294a83c","url":"assets/js/8863026f.8521238c.js"},{"revision":"447330629a165ac2b71ea8a837444eb0","url":"assets/js/8a8a8d12.9fae3dbb.js"},{"revision":"3fc04849849543f191f6139406bf7324","url":"assets/js/8ae8df02.65602c60.js"},{"revision":"d2f4b18eaae7de94067c9d172d27f020","url":"assets/js/8afe7a36.f336b8c7.js"},{"revision":"f868e73d999ff83dfffc35b38ec48e80","url":"assets/js/8b473417.c7544684.js"},{"revision":"dcd18e7b8dd8961f500d0732940f7325","url":"assets/js/8c237176.2b4a6884.js"},{"revision":"8fa46a6c1f1a0e5a8a15b5f7dd575ac5","url":"assets/js/8d05d3b9.48659026.js"},{"revision":"c876b12cd2472976bac7b2b3329bbc1e","url":"assets/js/8d680937.1fc5d74c.js"},{"revision":"b1da2c9cd85b117a545edb4ba503efa4","url":"assets/js/8e34c248.fc7937dc.js"},{"revision":"c0001783dfffa793a1bb04c1bed16b34","url":"assets/js/8ea09047.3806ef8c.js"},{"revision":"c83e0a67f1aaadb437a4e23bff82a730","url":"assets/js/8eb7d3b7.c94b89f5.js"},{"revision":"04571f975797e660cefdf76be19ca8fe","url":"assets/js/8eb7ea3d.e85a05c5.js"},{"revision":"045f7f0ee2d5a7f6e50bf39ffc65f3b3","url":"assets/js/8ecf5665.5ce76f3a.js"},{"revision":"fc9d14418142b138875fc54256ebde10","url":"assets/js/8fb68466.b6bea217.js"},{"revision":"c050e359b587080959c0cbfeaa40e160","url":"assets/js/90012922.9dc915f4.js"},{"revision":"6331c1d3263f683df15058b5737da406","url":"assets/js/9126.fa49b00a.js"},{"revision":"244f936c343a1e6e2f674c6d61236d72","url":"assets/js/923572fc.dc426937.js"},{"revision":"c7cf98ed3412394734469b5b9ceb6745","url":"assets/js/9591.4df9b90b.js"},{"revision":"d2d02551b563977a071d74a58da0537b","url":"assets/js/9635d8cd.2d8049a8.js"},{"revision":"85ca784a8f61a8d95e745107ff7635e1","url":"assets/js/967f84c6.810acae9.js"},{"revision":"6221279724e160424c77674684a546e1","url":"assets/js/9789907a.3b5b489a.js"},{"revision":"14ea553682651ca1d7f1f595e0ad701b","url":"assets/js/981e23ba.a23ea8d4.js"},{"revision":"4cea82ae50ee814a140db3f9ac07065e","url":"assets/js/9860.92866ef0.js"},{"revision":"5347711fe3138d30a1b0c93e7eda4fc8","url":"assets/js/992e7591.3eaec0b6.js"},{"revision":"347f022227d686b418a613786b092c40","url":"assets/js/999e89ae.a32b7040.js"},{"revision":"2021630df6959bb03af6c3330d559f88","url":"assets/js/9af15fca.a944f8b6.js"},{"revision":"52089300170b59f82ab8e6389b9df367","url":"assets/js/9c4fcbe3.ab1632d6.js"},{"revision":"a1166b4fdef446a3ee680ea8a29f0525","url":"assets/js/9c5f277f.d10f2ecd.js"},{"revision":"2a5fd173c9d3dead3da2b00f01608ab1","url":"assets/js/9c7f5174.fac2d7b9.js"},{"revision":"ca7f87452992d16698c57f9f8e8bc69e","url":"assets/js/9dc6e56d.b6f31ad0.js"},{"revision":"6f2c397b3692fe4d857c9649e3eca0fe","url":"assets/js/9e4087bc.4893073b.js"},{"revision":"f8313402d8f4a6aee74407e48bc6afda","url":"assets/js/a00c7636.667a77a5.js"},{"revision":"44d4bfe7737766634239ecec87da4ea8","url":"assets/js/a0250632.eca208da.js"},{"revision":"b224fea011cbbb15fd299ee8ea9b625e","url":"assets/js/a1c09ed5.9802d287.js"},{"revision":"f10a9032cb681ecc4b81187b49fe2347","url":"assets/js/a337d291.5205d9ec.js"},{"revision":"29f8857da1a4858faea71efac512661c","url":"assets/js/a36997ca.b7da46a2.js"},{"revision":"9263654719f89feb167d9e5ddfa1ce55","url":"assets/js/a478bba5.263abb38.js"},{"revision":"3a42158f8d1ade07d27378abf11c079a","url":"assets/js/a5d0d54a.e723968e.js"},{"revision":"fa244c31c5736a8f5d952542bea972cd","url":"assets/js/a6aa9e1f.69c568c8.js"},{"revision":"34465705d205ca1c0bef6cc07498baf9","url":"assets/js/a6c1eabf.eca2e799.js"},{"revision":"8c8028b1964a8d607f5b54e409e36954","url":"assets/js/a7456010.955429ca.js"},{"revision":"7a41cf0a4ba871effcc1206b3204ee91","url":"assets/js/a76999a3.e4b7ea03.js"},{"revision":"0798ce727870db529a1589eaab8f142b","url":"assets/js/a7b13d33.0e0f9665.js"},{"revision":"201a3d041982a5dfbd031782c792ab58","url":"assets/js/a7bd4aaa.514cc282.js"},{"revision":"a0ae08832c9f1efbef4d85571f75b7e3","url":"assets/js/a83073ba.4051d571.js"},{"revision":"ed5e734ad15a442fe8d63b98bc42f809","url":"assets/js/a8e4abbf.24642526.js"},{"revision":"58c1cd432afbe94baca1226442b85307","url":"assets/js/a94703ab.e3411a31.js"},{"revision":"95e05d02ff17791a228d71402ffe281c","url":"assets/js/a9b066a5.8186723a.js"},{"revision":"96bb745f8b27f06060f5a40c6e104327","url":"assets/js/ac88f401.94b5853f.js"},{"revision":"01c2e5c8ce4d4992034fce85a872a1db","url":"assets/js/accc368c.2267f53f.js"},{"revision":"7d5e4fc6510d8e17654dd30bc163e70b","url":"assets/js/acecf23e.d61e7861.js"},{"revision":"907ab528680a267e03894550f9b48df3","url":"assets/js/af690be2.cc2d7a5d.js"},{"revision":"f5ced7a822625b764f78a9fa8ff20423","url":"assets/js/af8066c0.730241ed.js"},{"revision":"13daf27ea3387c7d4895e8d87e5d741e","url":"assets/js/b0b51527.0badaaf4.js"},{"revision":"08197a595a8a4fb2ff5672ed13a4dd18","url":"assets/js/b0f34ff6.3a60365c.js"},{"revision":"2cb307fcecdcfb11e8bda2a97e7f2924","url":"assets/js/b12d2d8a.1ef1c3c5.js"},{"revision":"80f09481afce274636efb3bc6f7b6da5","url":"assets/js/b20e7dd6.af756854.js"},{"revision":"ee238eee00976008df1bbc3b7710ce56","url":"assets/js/b2b5e2b8.b7f9fc23.js"},{"revision":"182f524261c016b4ea5b28c142c8edc3","url":"assets/js/b3341e65.16a0e68a.js"},{"revision":"db40651dfcd136426258e6b59481cb69","url":"assets/js/b3688bb5.5c8061d3.js"},{"revision":"3a37497dcc26efb40f2fa7e8ec083e77","url":"assets/js/b419cb6f.944afc7a.js"},{"revision":"4efdb97d6a94804742dcffdd5fa04470","url":"assets/js/b4353ca1.efa13106.js"},{"revision":"36c6f54b2bd2f85f663ab3ccc9ff8929","url":"assets/js/b78f392b.4fa3c6d9.js"},{"revision":"7f766dde91d64f201e2cfdc2b9531cb8","url":"assets/js/b86ddee6.5b16f78f.js"},{"revision":"3f5e2d61ed809bae8febfe3d3da59e7b","url":"assets/js/b86ef79d.a6f8b051.js"},{"revision":"ddff4cd29758b603c6dd7368508b1834","url":"assets/js/b8de5fb0.215329a1.js"},{"revision":"82243934d2c9c782b98c810fc4c1963c","url":"assets/js/b9f0dfd0.88e84387.js"},{"revision":"449696d3caaef656e436633dbb5a6544","url":"assets/js/bb534d42.adce91f2.js"},{"revision":"8da2a864f5108ee9e261cc385789497d","url":"assets/js/bb6a9ae7.58667f02.js"},{"revision":"8d76ce552757b5881053cc53272bcf26","url":"assets/js/bdcae5c5.d8bf0fe6.js"},{"revision":"01010c061d6c3ec34dd851e5c85d2bcb","url":"assets/js/bf179d5e.508b9045.js"},{"revision":"625ef2ccf6eb705860f6b943acb29a95","url":"assets/js/c0b9a768.fbb80312.js"},{"revision":"e41ffab13a16d4e011d1f21a92bf70e8","url":"assets/js/c0c59237.b8723d51.js"},{"revision":"95ccc6b5bb9210fc5bfc5c89d3c97995","url":"assets/js/c141421f.bb91e9a5.js"},{"revision":"b9a7b4abc3c5a0c1acabe534b02405a0","url":"assets/js/c15d9823.ec610949.js"},{"revision":"0cda00cb07636724da1a93ad113568d1","url":"assets/js/c16f7475.e528aed7.js"},{"revision":"b82bc71c5b658136fe5db96be04a923e","url":"assets/js/c21ca49f.40ed1170.js"},{"revision":"42b527b4c285cdaf24d2e44f5ad31066","url":"assets/js/c2f5a91c.45244147.js"},{"revision":"9abc6d145bb06513dbf83dd483d4393b","url":"assets/js/c31d8245.f7768149.js"},{"revision":"2ccf6970b99d5b70f2d5671e2b7e570b","url":"assets/js/c3f9c7d1.9709be6a.js"},{"revision":"42f46d3bc2eb7218cd816e04752ec08e","url":"assets/js/c6b65a80.7bf923a5.js"},{"revision":"5aaa84543726771f9c8160cc61c3628f","url":"assets/js/c92cce4f.efbb9539.js"},{"revision":"3df45983169b3903a6bce82e9a4f5dd4","url":"assets/js/c997b33f.dad52c70.js"},{"revision":"c704fb1c68eaf6e67535c2b8dec8cea5","url":"assets/js/ca53c4fe.ba5690ed.js"},{"revision":"7d66b48b96f34e847287a8637657ed37","url":"assets/js/cad2367e.e26a7496.js"},{"revision":"387bef07329213fb0976ae22f543e6f4","url":"assets/js/cb5fe387.46fe9124.js"},{"revision":"8cabf07f92cf2d47c9300f1ad7ea65b7","url":"assets/js/cc6a20fa.1d4a8718.js"},{"revision":"e2ea34cdcd1a8d5b8ed1814e6c381018","url":"assets/js/ccc49370.32237bf9.js"},{"revision":"5977d87472c4975eb132f84b54154424","url":"assets/js/cd90d89b.b219df82.js"},{"revision":"50bc68e74bb0b705ef29754977b2b8dd","url":"assets/js/ce3cc804.fa0d382a.js"},{"revision":"98a2e98a530306c30c37255960e235ef","url":"assets/js/ce77d86e.89f0c48f.js"},{"revision":"51bd271aa169eade5cbd5370c79683b1","url":"assets/js/cefe0883.25e9cb20.js"},{"revision":"352df613530e9760497e693860eda6c3","url":"assets/js/cf9d90c3.fbc2c03d.js"},{"revision":"c96dacd1956ee9e30a3ba5c74b23b710","url":"assets/js/d0337b59.5e269d33.js"},{"revision":"7a80bc7a0694a977b2c506c59464377a","url":"assets/js/d05a454b.0a7fe678.js"},{"revision":"86910664e72beaf536ee6d764a44a504","url":"assets/js/d11812ed.c2436103.js"},{"revision":"816b3aba964ccf4eac0a071cbd450c0d","url":"assets/js/d2063e06.9bc24ccf.js"},{"revision":"f96a4b49bc87bee0f1bc88b064f1fe76","url":"assets/js/d291704a.3b397a5d.js"},{"revision":"2d9185f82ea538d32e909ad6669c193f","url":"assets/js/d349856d.6299d653.js"},{"revision":"58d1bb9caebdb8ed62350b366e0f49f5","url":"assets/js/d4534b0b.2726c7ab.js"},{"revision":"245977b969d76734656ffd1f7a2b5399","url":"assets/js/d48e063d.0c32105b.js"},{"revision":"561bca1e4c968b339642372a7cf1af75","url":"assets/js/d4cb92f3.29901d71.js"},{"revision":"1504533590d79cc34db6ed041e672c65","url":"assets/js/d6af4c9d.2c678176.js"},{"revision":"bf2268d572133318c399a358f1cd76a0","url":"assets/js/d82339bc.1567ff03.js"},{"revision":"1e2120d828efaace9cc987d4d30c0925","url":"assets/js/d874ae11.43116565.js"},{"revision":"a01702d1077e5d99b33a566e6d977abd","url":"assets/js/d8c9e80b.7f207c5d.js"},{"revision":"7cc76fb674fd7228f82b78f903fbdcaf","url":"assets/js/d99d6bd0.717b80c3.js"},{"revision":"42db8c71b8c11ad25dcc79850265e717","url":"assets/js/dae76d1e.3b347bd0.js"},{"revision":"def586cebca49c808b594480e2d7cfef","url":"assets/js/db84588d.5568b896.js"},{"revision":"1a86f51c6bae11f02e5b62c10553c9eb","url":"assets/js/dc9e3d96.6045071b.js"},{"revision":"616945bfa168b9b0a3df4698d41ff63a","url":"assets/js/dcadf437.002fd9ae.js"},{"revision":"df085f973f4bab049964653841a8d609","url":"assets/js/ddb9df4d.d8b72b1f.js"},{"revision":"a0a2cd1e1a91563562f84c159a2932b6","url":"assets/js/ddf03248.700c2f4c.js"},{"revision":"0bff0b7951f4dd1728b311b2c16f55c6","url":"assets/js/de9c8563.a22d9af5.js"},{"revision":"58c5642157dd302d1a8d5b3e6b696f52","url":"assets/js/de9dd018.64da0c23.js"},{"revision":"693621d0c3a7e48c81f5278ea4db6374","url":"assets/js/deafa4e5.9b729220.js"},{"revision":"1f09e71137d2ba51bfff8141537e3d04","url":"assets/js/dfa535eb.1e96f172.js"},{"revision":"c2b6664d39585d6325c18748c2b1cf83","url":"assets/js/e0579d55.5a23fe3e.js"},{"revision":"ace31f5350c4ea4ed6d3911809abe409","url":"assets/js/e24986b8.dd613ab8.js"},{"revision":"1d6e2c12b60291541d5735e4c6b681aa","url":"assets/js/e5fd65d3.808a42e5.js"},{"revision":"cd3306b3d8a68e06425b6d87f296c6e8","url":"assets/js/e862bac2.6e4b5411.js"},{"revision":"ddafb98d2cd7b4fc258b05197d31b773","url":"assets/js/e8d99bc3.a409d0f7.js"},{"revision":"46a1caaa39ae64a107f457807d35c659","url":"assets/js/e9baf1fa.82525e62.js"},{"revision":"669ad513f99bc475837bfb7623ae4ee8","url":"assets/js/ea1b0c8a.9da22f24.js"},{"revision":"f78acdeb57fc605f6b03f4db1f427647","url":"assets/js/ea51a2f2.1b055e48.js"},{"revision":"135a55101f0c6b134c45ea18afee0eb9","url":"assets/js/ea88091d.ae3b6ef4.js"},{"revision":"ad3ec053a132d4a2f90ba161f1539d1b","url":"assets/js/ea9fe14a.25e56182.js"},{"revision":"5ee15bfc750e409c4e655ec4d23b9736","url":"assets/js/eb061ae5.49769ba0.js"},{"revision":"4ea01387dc837f62843703f566eef9f2","url":"assets/js/eb353b50.d8d4ec18.js"},{"revision":"6ea18830fbd814376611048d76c00e3a","url":"assets/js/eb77ef72.9062ac9d.js"},{"revision":"c608abac3c17e8b0cb4830ff861a9438","url":"assets/js/ec868cf4.c0f4b066.js"},{"revision":"8e3cff367c61f2d9a7a4a157d2ba1cfa","url":"assets/js/ef75aa72.ed2a9468.js"},{"revision":"f32a6af725c36159afd3cf996f2aae9d","url":"assets/js/ef8b811a.a9441d5b.js"},{"revision":"7653ba6f6095dbc0e750a46ada9affa8","url":"assets/js/efabdd73.77abb47a.js"},{"revision":"de86cd1bba1f0d236616bd7a6834c4c6","url":"assets/js/f62dd9b2.376a4a5b.js"},{"revision":"4341a868a9f389435751c8b63a8c6e3c","url":"assets/js/f6e27949.1cb49402.js"},{"revision":"53f10dae10145d04fcfc2fb0f0cbeb3d","url":"assets/js/f725c10e.9d2e77ce.js"},{"revision":"d3770d482ae6304f156ba9253211a5e0","url":"assets/js/f74d077d.d64c9294.js"},{"revision":"d68babfb7e3ba546ba3b0146e1d45b3d","url":"assets/js/f81c1134.05255474.js"},{"revision":"b39266412665253e7b7e7e4e04810421","url":"assets/js/f897c88e.168280cf.js"},{"revision":"2e0ccf729f9eabe97e2d2058738a393a","url":"assets/js/f8bf1a4b.f9fc3a6e.js"},{"revision":"40f34a57198b39076d11860042c8eeb3","url":"assets/js/f907c6c8.d7a8dcad.js"},{"revision":"4eb625d5ab3e52326a10e3cb92018e32","url":"assets/js/faf9db9b.48a5f39f.js"},{"revision":"2467dd576f1a07ba51c4f6c8823d7350","url":"assets/js/fbcdf3ff.d95161b4.js"},{"revision":"c73a32da805683ee34342de33d97c1c8","url":"assets/js/fca48e83.23c6110c.js"},{"revision":"44b427e656e5064819f72a1d629b64c7","url":"assets/js/fcad7ab5.fc1b89ee.js"},{"revision":"9b119d44bdf1ca463c031b89e431f1fe","url":"assets/js/fcdc70db.6646765d.js"},{"revision":"e3ad21e795c3cdcffbca759de5db0314","url":"assets/js/fd55ca99.fd3e5a17.js"},{"revision":"8dadfa92fb591684cf5fa3fae15efaa6","url":"assets/js/fd714e9a.fe84f7bd.js"},{"revision":"3bf1f7d4620cd7366872c3dbc7f9293b","url":"assets/js/fe18e260.5981f7c8.js"},{"revision":"46b9a38b40f2de593b16fbf680415bbf","url":"assets/js/fe5fc83b.e2c86970.js"},{"revision":"96a423d7505f8ac6af880b1ef75b0b42","url":"assets/js/ff61bad8.109240a1.js"},{"revision":"955fa3d953d03639901a98da1472ffaa","url":"assets/js/main.4311262a.js"},{"revision":"63feef9819925255acb04626d3043216","url":"assets/js/runtime~main.552cfefd.js"},{"revision":"fc6c1afd5b60763ba4f9d85a2f9b1ec2","url":"blog/announcing-typescript-eslint-v6-beta/index.html"},{"revision":"e0d3b38f362aaa281704fa7108b2c07c","url":"blog/announcing-typescript-eslint-v6/index.html"},{"revision":"172c0f671f055bab5346305aab01f3b9","url":"blog/announcing-typescript-eslint-v7/index.html"},{"revision":"00c74e2226b1cc2ae872aabf59ac4bbf","url":"blog/announcing-typescript-eslint-v8-beta/index.html"},{"revision":"ccc6e65ebf31ffffe2a7107fb6f8a509","url":"blog/announcing-typescript-eslint-v8/index.html"},{"revision":"2dfb4bc3d97e1cafe73398cf287e179e","url":"blog/archive/index.html"},{"revision":"3af79193d196a65c798be7f2c19b8f51","url":"blog/asts-and-typescript-eslint/index.html"},{"revision":"52b7c70f673f503a23d7082637c72c01","url":"blog/authors/index.html"},{"revision":"ded45a96ea4c29aaca8ea59a4e663269","url":"blog/automated-rule-docs-with-docusaurus-and-remark/index.html"},{"revision":"868fad9132833e5dbcda5796ec27f69e","url":"blog/avoiding-anys/index.html"},{"revision":"7d9db5215b8e2e9ee78f0f188337b4b3","url":"blog/changes-to-consistent-type-imports-with-decorators/index.html"},{"revision":"a0ab5f16feedc632205cd74bd00b05e7","url":"blog/consistent-type-imports-and-exports-why-and-how/index.html"},{"revision":"a053c6e66e84c94a61ba11b203efe283","url":"blog/deprecating-formatting-rules/index.html"},{"revision":"0d0bad52340725e9b2d4f967ef868572","url":"blog/index.html"},{"revision":"3dbcff99533a24d600ae1a164dfb71ca","url":"blog/page/2/index.html"},{"revision":"7c6b7dc78be5773db029ed4b756e2965","url":"blog/parser-options-project-true/index.html"},{"revision":"dcfddfb4f5d80a903078f4e8488ee765","url":"blog/project-service/index.html"},{"revision":"db34b0ad241d4b7269773139f39daa7c","url":"blog/revamping-the-ban-types-rule/index.html"},{"revision":"15878070b70419ff7bfd14fb02866795","url":"blog/tags/abstract-syntax-tree/index.html"},{"revision":"bf0fe942d4538a3d697e2112251a3773","url":"blog/tags/any/index.html"},{"revision":"af5eafe653c683b5931ed29196364e61","url":"blog/tags/ast/index.html"},{"revision":"fe5de4031d3c69d87a62e5f5aebc5a5a","url":"blog/tags/ban-types/index.html"},{"revision":"38fb219baae810d41ce99b6a470aadba","url":"blog/tags/breaking-changes/index.html"},{"revision":"c6c97c1859d7512b41c5bf759f7ee364","url":"blog/tags/consistent-type-imports/index.html"},{"revision":"4a3ef8be9f5c2965fd01c90180908548","url":"blog/tags/documentation/index.html"},{"revision":"6e8cc1026ab83426f4c3f3bc1142a900","url":"blog/tags/docusaurus/index.html"},{"revision":"477798d083f267bb7422eb2c120570b9","url":"blog/tags/emit-decorator-metadata/index.html"},{"revision":"2bfe7a4f42ee4fe9bb4119971b1c7253","url":"blog/tags/experimental-decorators/index.html"},{"revision":"0c996d32932d6908d706bc63372c7fde","url":"blog/tags/exports/index.html"},{"revision":"6a31a99827af19e5d0edddb3ae3c676b","url":"blog/tags/flat-configs/index.html"},{"revision":"c896fd59189419879a294c19df3cf5c5","url":"blog/tags/formatter/index.html"},{"revision":"f8201d4a1309743a36004e5a18f065f9","url":"blog/tags/formatting/index.html"},{"revision":"46dd75c7bbf46ea18e0e8739242269b7","url":"blog/tags/imports/index.html"},{"revision":"80fec6bd8495686a15120cdfb1476203","url":"blog/tags/index.html"},{"revision":"e8d77dc0e8193bc6629cc1136c9f0aab","url":"blog/tags/interfaces/index.html"},{"revision":"4fe51f8ccbfeccce7701b5086173c9b3","url":"blog/tags/no-empty-object-type/index.html"},{"revision":"8757e5cf652311e7a4cd122a509498ff","url":"blog/tags/no-explicit-any/index.html"},{"revision":"b021722cf21a65b7e7a90dabc8fe0460","url":"blog/tags/no-implicit-any/index.html"},{"revision":"9c71f880b40d3d312c12ac086f7513aa","url":"blog/tags/no-restricted-types/index.html"},{"revision":"15c20591150e93f774818c8101b24969","url":"blog/tags/no-unsafe-function-type/index.html"},{"revision":"38f53b3e6e572abb4caa57a5b67d5fc2","url":"blog/tags/no-unsafe/index.html"},{"revision":"cf15911527f2e8f323ed25b11f8ec8fa","url":"blog/tags/no-wrapper-object-types/index.html"},{"revision":"85f8c68fe680ee5b8e9366976367cc54","url":"blog/tags/objects/index.html"},{"revision":"5203f9005c43cbb47126471ee39758da","url":"blog/tags/parser-options/index.html"},{"revision":"5df2d1ca6da74d49a804f6fe175f6591","url":"blog/tags/parser/index.html"},{"revision":"d206fc9d9b9c387ae8790e9b57d93c59","url":"blog/tags/parsing/index.html"},{"revision":"f3bb370a90466b5c81127b1598bf1171","url":"blog/tags/prettier/index.html"},{"revision":"ef187eca71337320551effc3ebfd4b90","url":"blog/tags/project-service/index.html"},{"revision":"ee7089baf9f958b3f052a6445c2e3e9f","url":"blog/tags/project/index.html"},{"revision":"68d5188b258c6f586f224c08299d9a6d","url":"blog/tags/remark/index.html"},{"revision":"0e7df25ac962ee4d61ce068d7cc07607","url":"blog/tags/style/index.html"},{"revision":"d61b36105b115072cb83e21294750c2a","url":"blog/tags/stylistic/index.html"},{"revision":"cbfaea67e2c8d189fee21fd0addd1e23","url":"blog/tags/transpiling/index.html"},{"revision":"af425f193b667ad7cb495dfb1942bfd1","url":"blog/tags/tsconfig/index.html"},{"revision":"ffb0193a584d81ce60540d653f633c4c","url":"blog/tags/type-information/index.html"},{"revision":"37b4656010ca0a5d7977976b625dbfe1","url":"blog/tags/typed-linting/index.html"},{"revision":"50fa9672d5e12a93606af136e683c841","url":"blog/tags/types/index.html"},{"revision":"d2fb6f79182dfaf874ce6fd327e50699","url":"blog/tags/typescript-eslint/index.html"},{"revision":"0eea33184650721565db62efaba29769","url":"blog/tags/typescript/index.html"},{"revision":"88ca20b5f4e6db5caa6320867bf681ab","url":"blog/tags/v-5/index.html"},{"revision":"2d7190b7f6dbf8d63cb1c8a06fc5adfd","url":"blog/tags/v-6/index.html"},{"revision":"4b29e477264588cb54790b7857e8682b","url":"blog/tags/v-7/index.html"},{"revision":"48e19b09284465bc325510b0e09c2a31","url":"blog/tags/v-8/index.html"},{"revision":"67be213cba3957e0ed1e9466c29660a7","url":"blog/typed-linting/index.html"},{"revision":"b92d0300f0aed6b8750aa3a2dca8019a","url":"contributing/ai-policy/index.html"},{"revision":"39ab3283b065b312d55e72b39130744d","url":"contributing/discussions/index.html"},{"revision":"22024c3a55434f517624c4040b071345","url":"contributing/index.html"},{"revision":"3f6689f100a1c800ddb471d54d46c4fe","url":"contributing/issues/index.html"},{"revision":"81b43583c0510f00f0c063724f8e7019","url":"contributing/local-development/index.html"},{"revision":"84bbba43f38d9f2ea72458dd86978a43","url":"contributing/local-development/local-linking/index.html"},{"revision":"562e0b99da369b6c02853f0bade0a318","url":"contributing/pull-requests/index.html"},{"revision":"ab3b4dd0fa97d33a5347f04602f50ff1","url":"developers/custom-rules/index.html"},{"revision":"ce810e491194d643535e1d801533faba","url":"developers/eslint-plugins/index.html"},{"revision":"64541b3ce94b346ca5ee4b625d5e6db7","url":"developers/index.html"},{"revision":"0e979a13b01ef39edfa5331e89b30f05","url":"getting-started/index.html"},{"revision":"3c6682fd6173246cd07b6462a8c2c6db","url":"getting-started/legacy-eslint-setup/index.html"},{"revision":"6a7bf5ba4f9ca731887233f8e5e8f7a3","url":"getting-started/typed-linting/index.html"},{"revision":"97a82c98f3c007b9bc78209e389bb2ba","url":"getting-started/typed-linting/monorepos/index.html"},{"revision":"3c8ac7de80f028457f346e9704f8418a","url":"index.html"},{"revision":"6b0e487a7826d034983ae236955b7ac7","url":"linting/configs/index.html"},{"revision":"228f3d2e5106ba6a5d96f046836124bd","url":"linting/troubleshooting/formatting/index.html"},{"revision":"20b26ee19456308886384b5db2aa16b5","url":"linting/troubleshooting/index.html"},{"revision":"ca2a9d52037ad4b5f5429e7540efd293","url":"linting/troubleshooting/tslint/index.html"},{"revision":"97a82c98f3c007b9bc78209e389bb2ba","url":"linting/troubleshooting/typed-linting/Monorepos/index.html"},{"revision":"db9c8c9a27f6661c0d50482a2fcfd3d0","url":"linting/troubleshooting/typed-linting/Performance-troubleshooting/index.html"},{"revision":"50d9e8976af053893779f27ca822724e","url":"linting/typed-linting/index.html"},{"revision":"0139ae83befc9aa5512ac611daf8d298","url":"maintenance/branding/index.html"},{"revision":"0f11c4976107db529a33effebd6ec89f","url":"maintenance/contributor-tiers/index.html"},{"revision":"7914a538a457e6f3423d9c89b1a4da4d","url":"maintenance/governance/index.html"},{"revision":"dbe26d568b8f780fc2e74c5759b9230d","url":"maintenance/index.html"},{"revision":"0025d7809cc2a62f56a140f3234796bc","url":"maintenance/issues/index.html"},{"revision":"2302e5796ed81322a940b536370a356a","url":"maintenance/issues/rule-deprecations-and-deletions/index.html"},{"revision":"f043bb294eff466d451b21c29236014e","url":"maintenance/issues/rule-deprecations/index.html"},{"revision":"243e8284923e6c41382ad4a0fd273c6b","url":"maintenance/pull-requests/dependency-version-upgrades/index.html"},{"revision":"8b48d32cec01f04c6625f49075e4954a","url":"maintenance/pull-requests/index.html"},{"revision":"a1acd050ca691a164a4f76e5fe53495b","url":"maintenance/releases/index.html"},{"revision":"55d1c4f1114e4ef061093f2b24d36a33","url":"maintenance/team/index.html"},{"revision":"decbeccd55be1776a804c5ded9b242a4","url":"manifest.json"},{"revision":"3983cb95794ea2af3e96974e858a8119","url":"packages/ast-spec/generated/index.html"},{"revision":"8b2f9a4ac9d5e4e62b85bf886b3d0a68","url":"packages/eslint-plugin-tslint/index.html"},{"revision":"d67ef98bb14a162db39b225fb07e1459","url":"packages/eslint-plugin/index.html"},{"revision":"cb2e8929b74eb895430aea8b963db811","url":"packages/index.html"},{"revision":"02118b198f9d07e16ead8f5ca8034f54","url":"packages/parser/index.html"},{"revision":"7883cc3f0576348d05c574d898e59ada","url":"packages/project-service/generated/index.html"},{"revision":"5ab4d96fcfa6cc93aa7391a16bf72ad5","url":"packages/project-service/index.html"},{"revision":"597cd509b2604c1a3c5eeeb629eae0c6","url":"packages/rule-schema-to-typescript-types/generated/index.html"},{"revision":"36b10b0162884d834d236178bda496d0","url":"packages/rule-schema-to-typescript-types/index.html"},{"revision":"efb1db405f3d764bfac8abf712bda9e1","url":"packages/rule-tester/index.html"},{"revision":"f0ef03066813524a9f5ae9680027af78","url":"packages/scope-manager/index.html"},{"revision":"936b5fb7b37b1e261c8a9c54afcdeca5","url":"packages/tsconfig-utils/generated/index.html"},{"revision":"baafbba59811dcdc6d48cfaec0af76ab","url":"packages/tsconfig-utils/index.html"},{"revision":"7c0ed1d083e8285d324604199d72f9e2","url":"packages/type-utils/generated/index.html"},{"revision":"2b0974241c76ae9a4237607cb6e9af36","url":"packages/type-utils/index.html"},{"revision":"8d312771e9845f0905742e8a3b347ed3","url":"packages/type-utils/type-or-value-specifier/index.html"},{"revision":"583aa4728d709050d4c20db039f97469","url":"packages/typescript-eslint/index.html"},{"revision":"57dee88ce69929f15c6e2ebd852410b8","url":"packages/typescript-estree/ast-spec/index.html"},{"revision":"2a2b7a7881a64e554dca016be5559e80","url":"packages/typescript-estree/index.html"},{"revision":"e438a7b1807ea916b5e946de9dc35f51","url":"packages/utils/index.html"},{"revision":"05f1afc212092c03903c85a83c2d4986","url":"play/index.html"},{"revision":"12365df44b9199c3a7066de98e451d9a","url":"rules/adjacent-overload-signatures/index.html"},{"revision":"fbf04e8ec87563cd2b11184f2dd98623","url":"rules/array-type/index.html"},{"revision":"ee9f51314efa644e07c85c48562e4ac4","url":"rules/await-thenable/index.html"},{"revision":"090be097ad8ab7d3ed20695b1bbaf37d","url":"rules/ban-ts-comment/index.html"},{"revision":"e145d76b5fa11820318a8c81b2c70eaa","url":"rules/ban-tslint-comment/index.html"},{"revision":"5c91b0347dea15d622d598c26f44454f","url":"rules/ban-types/index.html"},{"revision":"16caa6b4df70bfce2fbde5885b3ac0f3","url":"rules/block-spacing/index.html"},{"revision":"dd9a4b4462e2bd1032ceed34f0f7c572","url":"rules/brace-style/index.html"},{"revision":"850d4681efe9e6ea4e4b912a4a32e663","url":"rules/camelcase/index.html"},{"revision":"316575e570ad0b51d3889a2cc7cfdc86","url":"rules/class-literal-property-style/index.html"},{"revision":"f719fc1269e5350d6fa5025ccb962699","url":"rules/class-methods-use-this/index.html"},{"revision":"5b52f750520e6ca3b18a1e575153e433","url":"rules/comma-dangle/index.html"},{"revision":"0ab7de4633b13f12389ab053c10b4985","url":"rules/comma-spacing/index.html"},{"revision":"874d1d03c71b200e01998ba0b95a3c05","url":"rules/consistent-generic-constructors/index.html"},{"revision":"52b7996dc7eea55258ce036df3be671d","url":"rules/consistent-indexed-object-style/index.html"},{"revision":"afe72942846ea641707f96411f898b73","url":"rules/consistent-return/index.html"},{"revision":"b6f2884a127a06bea70a1dcaf225c603","url":"rules/consistent-type-assertions/index.html"},{"revision":"639c37855f09cd33d9848afdad36505e","url":"rules/consistent-type-definitions/index.html"},{"revision":"1e88f14bd8d1929c8bfcb08710978186","url":"rules/consistent-type-exports/index.html"},{"revision":"5689455ab6c3a60c1ab99b24ef7d48e8","url":"rules/consistent-type-imports/index.html"},{"revision":"5866b467af883308ec43e41a528b5530","url":"rules/default-param-last/index.html"},{"revision":"bba296c4eb0bbdaa0e79360d7ffd37e9","url":"rules/dot-notation/index.html"},{"revision":"8bfeafcb301c52c0533d1115be4f5e7c","url":"rules/explicit-function-return-type/index.html"},{"revision":"1428d1c9aad598f7e7453d354765d8fd","url":"rules/explicit-member-accessibility/index.html"},{"revision":"4ecbcfd40e2ca9d436a3a6813fef2820","url":"rules/explicit-module-boundary-types/index.html"},{"revision":"e4664583d685fea33155f1e4ca59531d","url":"rules/func-call-spacing/index.html"},{"revision":"1b0a52d85327b6ab220486238faeb9ee","url":"rules/indent/index.html"},{"revision":"ac9b0a6460f21246d533b9184ecabdf1","url":"rules/index.html"},{"revision":"dc7ab70979e845c8e1935907c1251eef","url":"rules/init-declarations/index.html"},{"revision":"b3eaa8ea68b6532cfa37907c8d8eeef4","url":"rules/key-spacing/index.html"},{"revision":"98f8b9017862a146bb43deac69f04f98","url":"rules/keyword-spacing/index.html"},{"revision":"eb57f6b6cce5925a36ea6a3c3c83ea28","url":"rules/lines-around-comment/index.html"},{"revision":"5442e93a859a27064752c15dc1478550","url":"rules/lines-between-class-members/index.html"},{"revision":"8de0a0b87bccb554b27648307abca00f","url":"rules/max-params/index.html"},{"revision":"c47fc4d16f72720325d3449ab13ca3f8","url":"rules/member-delimiter-style/index.html"},{"revision":"a81e54df0b84aa5cf0beafbed72e31e5","url":"rules/member-ordering/index.html"},{"revision":"3d13757d1921146db9b6e483fd12bc18","url":"rules/method-signature-style/index.html"},{"revision":"e84c07ad882cd96c5d571ae127eddb57","url":"rules/naming-convention/index.html"},{"revision":"8e2b2705f4b803e59a275ad2375d55d2","url":"rules/no-array-constructor/index.html"},{"revision":"f95f761af42589d9db595b8771a2f36c","url":"rules/no-array-delete/index.html"},{"revision":"ef9acd4f319d929de9076b89eee1798c","url":"rules/no-base-to-string/index.html"},{"revision":"a4400525cb579ac14be064d0fe7f80c7","url":"rules/no-confusing-non-null-assertion/index.html"},{"revision":"f4640b550bc1a0a0a6a9cf4bd62b815a","url":"rules/no-confusing-void-expression/index.html"},{"revision":"03fe9ea7be275d4db63991a2e3fafab0","url":"rules/no-deprecated/index.html"},{"revision":"4e99ee00ea03130ac561501a11b8b3c6","url":"rules/no-dupe-class-members/index.html"},{"revision":"9565b2cd7852754557010ab686f4540e","url":"rules/no-duplicate-enum-values/index.html"},{"revision":"d2ed6a54d9d03d7cf43cc77578844b3f","url":"rules/no-duplicate-imports/index.html"},{"revision":"b8337a08da51de7e1d959d6525ee9320","url":"rules/no-duplicate-type-constituents/index.html"},{"revision":"8a46a179999acbc5933b787f5b719e8d","url":"rules/no-dynamic-delete/index.html"},{"revision":"d05c2cd2a0e0d0a70101c0bef4076325","url":"rules/no-empty-function/index.html"},{"revision":"8c885439600ddb14aae1cf908a624fca","url":"rules/no-empty-interface/index.html"},{"revision":"eeece2e539a6ae2f827854395c011396","url":"rules/no-empty-object-type/index.html"},{"revision":"529171a01072c0f56dbe9d07b2887896","url":"rules/no-explicit-any/index.html"},{"revision":"d4d34a131b8bb2fbb87adaaba14c773a","url":"rules/no-extra-non-null-assertion/index.html"},{"revision":"341a93e249f32b81d93e7dd7398b59fd","url":"rules/no-extra-parens/index.html"},{"revision":"3185d4d1e77b56677781646dac5ada08","url":"rules/no-extra-semi/index.html"},{"revision":"302072b9c90fb6b287dc7f9f38db99b0","url":"rules/no-extraneous-class/index.html"},{"revision":"ea6521733d3b32fe9268a5b6910ce080","url":"rules/no-floating-promises/index.html"},{"revision":"e9b74aac0405d0ea6a308c9c1dcd4936","url":"rules/no-for-in-array/index.html"},{"revision":"ab004d5a23e98aab34ff8facc084d568","url":"rules/no-implied-eval/index.html"},{"revision":"c675d1a4936edac63f65ba217b3b0ab7","url":"rules/no-import-type-side-effects/index.html"},{"revision":"327e4e3b8e8366de74c2c292599e563f","url":"rules/no-inferrable-types/index.html"},{"revision":"3810b10815f01d318ffd79e057d95d56","url":"rules/no-invalid-this/index.html"},{"revision":"ffed596f6d4b68ebe5ff3e11fcda5377","url":"rules/no-invalid-void-type/index.html"},{"revision":"9cb2fc7f5fdae3f5472dbb3cff24a1f9","url":"rules/no-loop-func/index.html"},{"revision":"7fe5e4a0a93ad1871b57aa79f7f5cc55","url":"rules/no-loss-of-precision/index.html"},{"revision":"c4ea668e759b243451d9f46d654214ba","url":"rules/no-magic-numbers/index.html"},{"revision":"595bfabe416fc2f5116343bef365980b","url":"rules/no-meaningless-void-operator/index.html"},{"revision":"09e9631e2d0a3207adcc7c5a17f604da","url":"rules/no-misused-new/index.html"},{"revision":"faa9fd2dd1771eb59d648ed3dd2cb6a7","url":"rules/no-misused-promises/index.html"},{"revision":"9f7209026d0afc28b4e215b236f0a0e4","url":"rules/no-misused-spread/index.html"},{"revision":"2aac8ef8ab2db57a507ecfcee149937c","url":"rules/no-mixed-enums/index.html"},{"revision":"48c117cc3810eeffc43ae3bd7aa5a456","url":"rules/no-namespace/index.html"},{"revision":"e3ad1823b2c4ebdbd6cabc7e8b0d5ed5","url":"rules/no-non-null-asserted-nullish-coalescing/index.html"},{"revision":"efd577551af3bcc9e0aff824750d7d4b","url":"rules/no-non-null-asserted-optional-chain/index.html"},{"revision":"9184189bfb9138d28e8c2cc2626162d7","url":"rules/no-non-null-assertion/index.html"},{"revision":"5d08a8897265dbb118f950e436a3393c","url":"rules/no-parameter-properties/index.html"},{"revision":"3eb0cca04f05f684b2d619baea1bf170","url":"rules/no-redeclare/index.html"},{"revision":"47e20abf13e545b86118a9afe55998b7","url":"rules/no-redundant-type-constituents/index.html"},{"revision":"1b0575bce11382981c4d077f38bf0e8c","url":"rules/no-require-imports/index.html"},{"revision":"0c222a6a46dfd7ec092e67b8d2798022","url":"rules/no-restricted-imports/index.html"},{"revision":"a82cab0dcc19f889304aeaf3fdea0722","url":"rules/no-restricted-types/index.html"},{"revision":"99aa746b624bbc5d9ea1fa5df275db57","url":"rules/no-shadow/index.html"},{"revision":"4408ec4d119bf88c96fa8935ff5f61a5","url":"rules/no-this-alias/index.html"},{"revision":"ea64c8dbd7965327472cb93689347889","url":"rules/no-type-alias/index.html"},{"revision":"ef7056298cd1d30c6376936569e8ec42","url":"rules/no-unnecessary-boolean-literal-compare/index.html"},{"revision":"3745fa49305d05000eb47698b32fb83b","url":"rules/no-unnecessary-condition/index.html"},{"revision":"c3891492795590a52e1fd407edfc8fc7","url":"rules/no-unnecessary-parameter-property-assignment/index.html"},{"revision":"1042855e1483eb4947619c13c67af902","url":"rules/no-unnecessary-qualifier/index.html"},{"revision":"21b48b862c8d3b82947779a8fb405f5a","url":"rules/no-unnecessary-template-expression/index.html"},{"revision":"f1f493d45f148021f053f7b4d76437c9","url":"rules/no-unnecessary-type-arguments/index.html"},{"revision":"08435ce583d7c13d795a2b814cc5b9dd","url":"rules/no-unnecessary-type-assertion/index.html"},{"revision":"bc9bf6bfb6a582ef536fe4b0d7c7005a","url":"rules/no-unnecessary-type-constraint/index.html"},{"revision":"2ecdf96dfec770c8e05e7e091e9f0530","url":"rules/no-unnecessary-type-conversion/index.html"},{"revision":"aa37deb34dab44c37aa45587ed8e918c","url":"rules/no-unnecessary-type-parameters/index.html"},{"revision":"c1d13fa5a1aca75dc54b840635252e26","url":"rules/no-unsafe-argument/index.html"},{"revision":"d69d1313d8683cc5ebf38fe675866dbb","url":"rules/no-unsafe-assignment/index.html"},{"revision":"7f85ec7e02d076eb8bb1f14eee6202b7","url":"rules/no-unsafe-call/index.html"},{"revision":"1428970730cbbfcea83d31dcf55b7e8d","url":"rules/no-unsafe-declaration-merging/index.html"},{"revision":"0bae8ff9591393120644f70721b77d4a","url":"rules/no-unsafe-enum-comparison/index.html"},{"revision":"fa1db266d629c1aa74bd08ab9f810238","url":"rules/no-unsafe-function-type/index.html"},{"revision":"e012a0664674508a59fdbf1e96d16dec","url":"rules/no-unsafe-member-access/index.html"},{"revision":"d7cd3aab04e9d57d19e04ac7ec9553ff","url":"rules/no-unsafe-return/index.html"},{"revision":"ae2247cffa584fab9a05c1aedcc967d1","url":"rules/no-unsafe-type-assertion/index.html"},{"revision":"d522cbf99a03ae27a9786d60722eca1e","url":"rules/no-unsafe-unary-minus/index.html"},{"revision":"a20ac56671e457cf3d12a801969aad6c","url":"rules/no-unused-expressions/index.html"},{"revision":"3df94dc524c55a4f4761b4f6f7ec1f66","url":"rules/no-unused-private-class-members/index.html"},{"revision":"d8ba0b06ed79c06b1fe0c530a221fff9","url":"rules/no-unused-vars/index.html"},{"revision":"30db6eac90508e3ebf90a0bf88ba0e7e","url":"rules/no-use-before-define/index.html"},{"revision":"8b4e80dd0505cfbfcb722556710f9c47","url":"rules/no-useless-constructor/index.html"},{"revision":"1c346277130826e0f51097ab1fc1924f","url":"rules/no-useless-default-assignment/index.html"},{"revision":"4e4621fec1fde223a118884de4797646","url":"rules/no-useless-empty-export/index.html"},{"revision":"0e0e435dc5513453a52a0977692b3fe1","url":"rules/no-useless-template-literals/index.html"},{"revision":"cab057fd65635c528137b46ab8902e9f","url":"rules/no-var-requires/index.html"},{"revision":"3f01a968f39c583f5e9be6fb137d5bc1","url":"rules/no-wrapper-object-types/index.html"},{"revision":"44ebcf71e292c1e20b57b3e071fcf339","url":"rules/non-nullable-type-assertion-style/index.html"},{"revision":"1803cc08e1c10e16402b7af8266b0dcd","url":"rules/object-curly-spacing/index.html"},{"revision":"dcb8052edc719f7ccc298046ef941987","url":"rules/only-throw-error/index.html"},{"revision":"4aa38f907a31cec076592150b20848a6","url":"rules/padding-line-between-statements/index.html"},{"revision":"8e6ca909fea383fb3d26e8022f45371b","url":"rules/parameter-properties/index.html"},{"revision":"90675fc9965a4947ef0168a376086550","url":"rules/prefer-as-const/index.html"},{"revision":"f2b644aeee7a2dc02d629962b2a4f51b","url":"rules/prefer-destructuring/index.html"},{"revision":"792af12c149d52fd4acb9526a96eeb27","url":"rules/prefer-enum-initializers/index.html"},{"revision":"65a24e562b846348df2928e272bd360b","url":"rules/prefer-find/index.html"},{"revision":"b320a2ed38d456c6db44a17ed19b9cee","url":"rules/prefer-for-of/index.html"},{"revision":"31bbe375c092b3a24cf0d07d7374e5f0","url":"rules/prefer-function-type/index.html"},{"revision":"6a6f9d513b534f3a008d33b78f693404","url":"rules/prefer-includes/index.html"},{"revision":"f854126e751d4cecd2c43bb37e6fb1ee","url":"rules/prefer-literal-enum-member/index.html"},{"revision":"e6d44ffe0481b102bc5de13b02672788","url":"rules/prefer-namespace-keyword/index.html"},{"revision":"f050a15bcc40612a333ce459511bb2b1","url":"rules/prefer-nullish-coalescing/index.html"},{"revision":"62fdd545007832f892db217a66cb205a","url":"rules/prefer-optional-chain/index.html"},{"revision":"141403f39b2b8063507b5ec942a44df0","url":"rules/prefer-promise-reject-errors/index.html"},{"revision":"f83277663a9b92d5a1e7a3bf9c60bc5e","url":"rules/prefer-readonly-parameter-types/index.html"},{"revision":"b18a8a3141330b534cc5097f280f3410","url":"rules/prefer-readonly/index.html"},{"revision":"acc3a9d923123b5060cef2836017c6ed","url":"rules/prefer-reduce-type-parameter/index.html"},{"revision":"0f6c887a91d382d011f211730a99dd6b","url":"rules/prefer-regexp-exec/index.html"},{"revision":"b3fb58aff5e95872c422a9e61ace4ea6","url":"rules/prefer-return-this-type/index.html"},{"revision":"4c855b230509e89d1cf2a2063a686b71","url":"rules/prefer-string-starts-ends-with/index.html"},{"revision":"f8ab0ad56d78b19accd5b4a2bf1335c6","url":"rules/prefer-ts-expect-error/index.html"},{"revision":"f45dd4d8adcd285c806dcfb97ecac17a","url":"rules/promise-function-async/index.html"},{"revision":"1c93422e675be62efcb731949fe0f6eb","url":"rules/quotes/index.html"},{"revision":"cfb2f0258aa714ed5867735bb549977c","url":"rules/related-getter-setter-pairs/index.html"},{"revision":"c6fc2cf0c58d9a12308db9803bd9fc56","url":"rules/require-array-sort-compare/index.html"},{"revision":"1f0eab81e5556437cdac253a892ff16a","url":"rules/require-await/index.html"},{"revision":"847ce26108f0d41299d2c005ab0b52db","url":"rules/restrict-plus-operands/index.html"},{"revision":"25e0866952e2eddf0b5aa43106a3d8bc","url":"rules/restrict-template-expressions/index.html"},{"revision":"bab1a442c93e42422fd90465d5507d7a","url":"rules/return-await/index.html"},{"revision":"98411d2a5f0d056414d87cafdafb5708","url":"rules/semi/index.html"},{"revision":"6ac0afd49c74f46ac505d8b3743324eb","url":"rules/sort-type-constituents/index.html"},{"revision":"c04efafa96ca89a37fd726e430d4ff1b","url":"rules/sort-type-union-intersection-members/index.html"},{"revision":"d43810d0fd509d6d4cdd60b35520a192","url":"rules/space-before-blocks/index.html"},{"revision":"610c637b7032ca6fe716fea5dff3fa35","url":"rules/space-before-function-paren/index.html"},{"revision":"5ecd5a4a2e43d45456f7939b8ff4d0be","url":"rules/space-infix-ops/index.html"},{"revision":"fea61f97261e3514a0fc33a264ee7a35","url":"rules/strict-boolean-expressions/index.html"},{"revision":"cb48a5b74a78ba86b997cb778bdc1d5f","url":"rules/strict-void-return/index.html"},{"revision":"9658dc753ec0e5a77d0329444c21b3f2","url":"rules/switch-exhaustiveness-check/index.html"},{"revision":"591e532400bb3563eac830e1431e7e6d","url":"rules/triple-slash-reference/index.html"},{"revision":"341bb6dd0ad8b3c0fc103fb975b1953c","url":"rules/type-annotation-spacing/index.html"},{"revision":"6cf58a66fe5b0c719eb28a9ba22e647c","url":"rules/typedef/index.html"},{"revision":"fe4a7f0172af5a2ec078fb1e063106f2","url":"rules/unbound-method/index.html"},{"revision":"1501c7d563ea35d571d7c0921f2b2f19","url":"rules/unified-signatures/index.html"},{"revision":"ef904e2a454226a8b80eeb63fa6c2b60","url":"rules/use-unknown-in-catch-callback-variable/index.html"},{"revision":"bcb94bd33829e1a3909a481a3738fa5c","url":"search/index.html"},{"revision":"124f8d468612ab4bebfc98e8ae1663ec","url":"troubleshooting/faqs/eslint/index.html"},{"revision":"bb3bb64a2e3edf321b1b3e4380c105bb","url":"troubleshooting/faqs/frameworks/index.html"},{"revision":"ac329bed8bd90370db0568f6d2b6b686","url":"troubleshooting/faqs/general/index.html"},{"revision":"20b26ee19456308886384b5db2aa16b5","url":"troubleshooting/faqs/index.html"},{"revision":"20676caee2dc6970c7545af23c56a5fa","url":"troubleshooting/faqs/javascript/index.html"},{"revision":"b39b354fe28d11ee7b175c2df2353f35","url":"troubleshooting/faqs/typescript/index.html"},{"revision":"228f3d2e5106ba6a5d96f046836124bd","url":"troubleshooting/formatting/index.html"},{"revision":"20b26ee19456308886384b5db2aa16b5","url":"troubleshooting/index.html"},{"revision":"db9c8c9a27f6661c0d50482a2fcfd3d0","url":"troubleshooting/performance-troubleshooting/index.html"},{"revision":"ca2a9d52037ad4b5f5429e7540efd293","url":"troubleshooting/tslint/index.html"},{"revision":"4bffc493a17f48bcfed213e97f69c083","url":"troubleshooting/typed-linting/index.html"},{"revision":"c5d424a4ba2940a70071d4bbc42ae1fe","url":"troubleshooting/typed-linting/monorepos/index.html"},{"revision":"85c1bdc9bb14fd9f87cf5afd2b145ce8","url":"troubleshooting/typed-linting/performance/index.html"},{"revision":"b41ebfd5dfd88f7a62fb93f7dc98d619","url":"users/configs/index.html"},{"revision":"b08eff51cbad64710e14267bb5242448","url":"users/dependency-versions/index.html"},{"revision":"8a42918b9192e9fd92f077a6d12d5c93","url":"users/index.html"},{"revision":"49e0f8c2328f3f6025c6e93a2e3e2b81","url":"users/releases/index.html"},{"revision":"e733a9243eeb6ef04ad5faf6926fdf68","url":"users/versioning/index.html"},{"revision":"bc160f1eaae17804d8c0365ef2c79b10","url":"users/what-about-formatting/index.html"},{"revision":"0c8dab0394ee04f1274bb89bbe382cf0","url":"users/what-about-tslint/index.html"},{"revision":"bd8389449d48af907f990156a4ff2d27","url":"assets/files/logo-5f3f0115a5bfbf931855329a4e0e7331.png"},{"revision":"ba319bb9f7273e499b160676633104a4","url":"assets/files/logo-62ab572de114d03f1ec685d989f92cd6.svg"},{"revision":"7ac1cab95a2a3ae186bcd184e0f0e043","url":"assets/images/ast-explorer-remark-3c6fd8bff356b5b2db817e33023ae87e.png"},{"revision":"c77f2dbcd469e44bf53cd31fed319483","url":"img/bluesky.svg"},{"revision":"4efecca0a8f4a3e20d1bafeb76e28057","url":"img/bug-report.svg"},{"revision":"3e303e981fce21bead66c9f7070e70b8","url":"img/discord.svg"},{"revision":"4e9f4c93cce4f0373ea4f259afbb23ff","url":"img/eslint.svg"},{"revision":"3000bd5cd346e20391d874b12d778867","url":"img/favicon.ico"},{"revision":"9809f0458f95cdd837173b4ab0672323","url":"img/favicon/android-chrome-192x192.png"},{"revision":"5e4d7bddd96247aaef3976e1f69e42b0","url":"img/favicon/android-chrome-512x512.png"},{"revision":"6cd23c43523adcf8c45838235b0255b1","url":"img/favicon/apple-touch-icon.png"},{"revision":"4b2a3e0bc9d1b182f2136edb61e9dc69","url":"img/favicon/favicon-16x16.png"},{"revision":"ff32b493f4f3268e4834c325813be716","url":"img/favicon/favicon-32x32.png"},{"revision":"81659d363de12f6cdd0fdf46bbe4f8e1","url":"img/favicon/mstile-150x150.png"},{"revision":"fd1732ba0697d537acaa8886d8b9a7eb","url":"img/favicon/mstile-310x310.png"},{"revision":"a10bbe756a8af64155166d6feee171a5","url":"img/favicon/safari-pinned-tab.svg"},{"revision":"db18f4b5a5abcc1fe0c94695eb9596a9","url":"img/github.svg"},{"revision":"a4785a8ac88f2b0762e4e353b583d804","url":"img/logo_maskable.png"},{"revision":"df41dfeca4a21b3f8db8c04a5c532eff","url":"img/logo-twitter-card.png"},{"revision":"bd8389449d48af907f990156a4ff2d27","url":"img/logo.png"},{"revision":"ba319bb9f7273e499b160676633104a4","url":"img/logo.svg"},{"revision":"fbf8a696169e594fadf98a05790123ad","url":"img/mastodon.svg"},{"revision":"ef2d71a7e95f9b432140bc6780b4b0bc","url":"img/open-collective.svg"},{"revision":"4805909241be806f815ce4b938c0b26f","url":"img/squiggle.svg"},{"revision":"8fff7f0534ff24457683164bacbf1885","url":"img/stack-overflow.svg"},{"revision":"b3a54ae3b5a331e18f0ecddadd96e9d8","url":"img/team/armano2.jpg"},{"revision":"6af5e48b1c6939301b7d1cb22b502a46","url":"img/team/auvred.jpg"},{"revision":"6905389b2338e7fca65c6f7855b40f9e","url":"img/team/bradzacher.jpg"},{"revision":"e17c6b413115d52d907b46e37379cf04","url":"img/team/jameshenry.jpg"},{"revision":"313936aeb85a5c5d0821da28559524b9","url":"img/team/josh-cena.jpg"},{"revision":"78f89e9ed8a80bf02378c5e192d761fb","url":"img/team/joshuakgoldberg.jpg"},{"revision":"47e2d2716283ca77525275b5c282fe40","url":"img/team/kirkwaiblinger.jpg"},{"revision":"4b7ef0fd6f6ca436f3546664ca620403","url":"img/team/ronami.jpg"},{"revision":"5b4a0d9777e8ac51151e4c8bd25255d1","url":"img/typescript.svg"},{"revision":"ace331df31a0042c52f2ddb6000f8fbe","url":"img/www.svg"}];
    const controller = new workbox_precaching__rspack_import_0.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

})()
;
//# sourceMappingURL=sw.js.map