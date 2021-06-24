/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["Marine.html","5b50c1f39897b11075ff14db31ba0fac"],["bait&beer.html","3a8e205b0ef73acccde9d297db217c41"],["contact.html","c92db5f9a3265e78861722abbce4177d"],["edit.html","de732cdcb433e41d21ed8f3d2cbeb807"],["engine-quote-tool.html","ed22284ddff2e37f8c008c50b1a48d95"],["golf-carts.html","70f5bfd359c5cda0451452709b11810c"],["images/beer&bait1.jpg","ab0e0973cd121dec1f8e6b42622b6089"],["images/beer&bait1_full.jpg","e0c4aa39acb43e2cf9300c513f89a4d4"],["images/beer&bait2.jpg","8803b234941884eb5580dcf59bfb25eb"],["images/beer&bait2_full.jpg","265c1661cb7777765755dd1422282aed"],["images/boating.jpg","52b53e8eef942a0aaa6b6a57c071d68f"],["images/carts/cubs.jpg","c92fd2e21c9119bc873eb0df855e6120"],["images/carts/cubs_crop.jpg","df7b59a5699c03ee702e2673635afd0a"],["images/carts/doggo.jpg","f8f0151e75423aea85017c87b8c7e05e"],["images/carts/doggo_crop.jpg","47a16fd1f5dedcba343c3606669a628c"],["images/carts/golf-cart_crop.jpg","c3907b9c1fe5f3fdd81f784c8e48dd09"],["images/carts/harley.jpg","f601f0717fa11664adb383c716cdc1a4"],["images/diamond-plate-background-black.jpg","af9327c0e65970e0988213fb3a5383f6"],["images/diamond-plate-background.jpg","3b48e1fdd4235a1ff542b21e2f30825e"],["images/engine.jpg","e20b191b064c2d9233e16bbabd2aa5af"],["images/gatorhead.svg","f709fa6e377e222691ada5b3d50db55a"],["images/golf-cart.jpg","f1df4993a25460d090db6af58a0d2335"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/header_shadow.png","8d5ce56d79b7a1b919b972515b16a88f"],["images/inside.jpg","bbc7526aa9db5172005c8247c9694042"],["images/loading.svg","de72e351e9f6a2d517f5a9972c1e480d"],["images/logo-full.png","0048f95a856dddd92965afdedaec80c0"],["images/logo-on-dark.png","c13b6ca0f60dbe1c1722793fa356efa1"],["images/logo.svg","180efc5f712dfe46b57ab1a2dd68705a"],["images/newsletter_aug19.png","76be28f9ef8f194750801b0870efa95f"],["images/newsletter_aug20.jpg","6e157d5d731604485e8894fc8dc5aac2"],["images/newsletter_jun19.jpg","2be6ca765f19231601742755945601bd"],["images/newsletter_jun20.jpg","7d326ce4cbd958074d08e3479bb26980"],["images/newsletter_june21.jpg","1e4ca48f569eccb44a0528f23cc279c3"],["images/newsletter_mar20.jpg","6c21ae0bf27c782ae5c53c1ac5be5d7a"],["images/newsletter_march21.jpg","bd6853ff4d799b7fa06688c3571b1ac6"],["images/overhead.jpg","911501fcec396075c0b886ecb98a782f"],["images/touch/chrome-touch-icon-192x192.png","8c42daa9c9d6a3d0b65ca31d9e7a9cc9"],["images/touch/favicon-152.png","d948d6b676da137b09afa42dcb1b9ef4"],["index.html","a5de0fffef97b76d3bfef39dea303c3d"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/contact-page.js","fb2a003bac0c42b96e04692fceb9d92f"],["scripts/engine-page.js","932d8e7b225a27894dc7b2c51777944f"],["scripts/golf-cart-page.js","348adf3d0f98e791d23de5bc17d033f9"],["scripts/home-page.js","cba4fdd6b30c8fa14d7a270bb1fa0885"],["scripts/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["scripts/marine-page.js","6e561e580b0fc8d798e476161d680b9b"],["scripts/services-page.js","6412e53e3d55282e4317246fb4b6fcee"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["services.html","98136cf257e5f9ade06018cc9a8ed1bc"],["styles/engine-quote-tool-style.css","e623635f4205d6fb8b529e6ad38a3f4f"],["styles/gator.css","a3910c41f2480c3aaf6588560e91759a"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




