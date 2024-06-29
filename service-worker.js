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
var PrecacheConfig = [["Marine.html","59662aabc7503c30945888304af5ec63"],["bait&beer.html","3a8e205b0ef73acccde9d297db217c41"],["contact.html","5e08e7598c33a4f5e1049efe9e7e963e"],["edit.html","de732cdcb433e41d21ed8f3d2cbeb807"],["engine-quote-tool.html","ed22284ddff2e37f8c008c50b1a48d95"],["golf-carts-old.html","70f5bfd359c5cda0451452709b11810c"],["golf-carts.html","7189cc310197e16a3e0c971dfc83302d"],["images/beer&bait1.jpg","ab0e0973cd121dec1f8e6b42622b6089"],["images/beer&bait1_full.jpg","e0c4aa39acb43e2cf9300c513f89a4d4"],["images/beer&bait2.jpg","8803b234941884eb5580dcf59bfb25eb"],["images/beer&bait2_full.jpg","265c1661cb7777765755dd1422282aed"],["images/boating.jpg","52b53e8eef942a0aaa6b6a57c071d68f"],["images/carts/3side/3side1.png","33e93c52105e1e31a868a417e999698c"],["images/carts/3side/3side2.png","3d01b0a96d930c106b1a6245a9e5531c"],["images/carts/3side/3side3.png","78df8cf49d738d29110359ad4f7a6c53"],["images/carts/3side/3side4.png","c669d317b252a32eb631787b4e12a99c"],["images/carts/3side/3side5.png","5a02aca8bd98ddec500126d4a4349783"],["images/carts/3side/3side6.png","7bf7a3a9445275561df7775745f9e7d6"],["images/carts/4side/4side1.png","1ebbb36c9a9b5e8e3569c00fc2ab9472"],["images/carts/4side/4side2.png","124a81a3ad0a19a40c9e87a7a7562df5"],["images/carts/4side/4side3.png","5b11ab3af1c3a8579f18e7986aad1ffb"],["images/carts/4side/4side4.png","da706a1ad0028243b055a4f6aae47111"],["images/carts/4side/4side5.png","bd4b278143ffa4593715c50fd8e89f67"],["images/carts/4side/4side6.png","44ed9e086f4aae62382382c51a9e6136"],["images/carts/DoorWorks Authorized Dealer.png","cad8488fd595aa5adb62a955c8a71469"],["images/carts/cubs.jpg","c92fd2e21c9119bc873eb0df855e6120"],["images/carts/cubs_crop.jpg","df7b59a5699c03ee702e2673635afd0a"],["images/carts/doggo.jpg","f8f0151e75423aea85017c87b8c7e05e"],["images/carts/doggo_crop.jpg","47a16fd1f5dedcba343c3606669a628c"],["images/carts/golf-cart_crop.jpg","c3907b9c1fe5f3fdd81f784c8e48dd09"],["images/carts/harley.jpg","f601f0717fa11664adb383c716cdc1a4"],["images/carts/hinged/Support Hinged 1.png","0a411453f9dbc1ec776cdcb6c3244c19"],["images/carts/hinged/Support Hinged 2.png","bfbd6d8a4c1775a628c903ba4153617b"],["images/carts/hinged/Support Hinged 3.png","08cc1bb3c00def1400752aad1abafa50"],["images/carts/hinged/Support Hinged.png","9a0ed3b7cc2cbfbe51897158d0f02152"],["images/carts/track/track1.png","43c21f8108f0754379d5f4f3e2c35627"],["images/carts/track/track2.png","57f447cbbb15a10b57c9aea8c33db955"],["images/carts/track/track3.png","a81adcf00ad370f35aecbde214221153"],["images/carts/track/track4.png","6765f653c5da89984ef8c0ca1aad10ec"],["images/carts/track/track5.png","445118d337341a866b8c9de068ee0331"],["images/carts/track/track6.png","a3e89c91a2421b64a3ae6331f2e9c7d0"],["images/carts/track/track7.png","ea46b7b5655bb1902b6d30c550b97c87"],["images/carts/track/track8.png","6361521fd151071d8e7f13c1ec0e18ed"],["images/diamond-plate-background-black.jpg","af9327c0e65970e0988213fb3a5383f6"],["images/diamond-plate-background.jpg","3b48e1fdd4235a1ff542b21e2f30825e"],["images/engine.jpg","e20b191b064c2d9233e16bbabd2aa5af"],["images/gatorhead.svg","f709fa6e377e222691ada5b3d50db55a"],["images/golf-cart.jpg","f1df4993a25460d090db6af58a0d2335"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/header_shadow.png","8d5ce56d79b7a1b919b972515b16a88f"],["images/inside.jpg","bbc7526aa9db5172005c8247c9694042"],["images/loading.svg","de72e351e9f6a2d517f5a9972c1e480d"],["images/logo-full.png","0048f95a856dddd92965afdedaec80c0"],["images/logo-on-dark.png","c13b6ca0f60dbe1c1722793fa356efa1"],["images/logo.svg","180efc5f712dfe46b57ab1a2dd68705a"],["images/newsletter_apr22.jpg","8138661cd5ab166defa67bef391e3489"],["images/newsletter_apr23.jpg","cfe49357d95634cfe2221700730672ca"],["images/newsletter_aug19.png","76be28f9ef8f194750801b0870efa95f"],["images/newsletter_aug20.jpg","6e157d5d731604485e8894fc8dc5aac2"],["images/newsletter_aug21.jpg","fdbad0fe5d2ae765e548b362c6578e49"],["images/newsletter_aug22.jpg","2cbc1fc09da469488b31c80f33d78624"],["images/newsletter_aug23.png","2371ca5a6dfeff05f98a8d41bf7d35d4"],["images/newsletter_july21.jpg","1e4ca48f569eccb44a0528f23cc279c3"],["images/newsletter_jun19.jpg","2be6ca765f19231601742755945601bd"],["images/newsletter_jun20.jpg","7d326ce4cbd958074d08e3479bb26980"],["images/newsletter_jun22.jpg","99a3629dfd5c00327da17e4fb1bafddf"],["images/newsletter_jun23.jpg","1d2e75887dbf31cfbc533cb5a13c41f2"],["images/newsletter_jun24.png","3258e550d0eb471778ae9605905ed0d2"],["images/newsletter_mar20.jpg","6c21ae0bf27c782ae5c53c1ac5be5d7a"],["images/newsletter_march21.jpg","bd6853ff4d799b7fa06688c3571b1ac6"],["images/newsletter_may24.png","7a3a7ee58569bdb04e4837365821ee50"],["images/overhead.jpg","911501fcec396075c0b886ecb98a782f"],["images/touch/chrome-touch-icon-192x192.png","8c42daa9c9d6a3d0b65ca31d9e7a9cc9"],["images/touch/favicon-152.png","d948d6b676da137b09afa42dcb1b9ef4"],["index.html","3e8590bca60e4e4c7c1370414988f9c2"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/contact-page.js","fb2a003bac0c42b96e04692fceb9d92f"],["scripts/engine-page.js","932d8e7b225a27894dc7b2c51777944f"],["scripts/golf-cart-page.js","1b2d6be4ea7c61bbf97435618125eba1"],["scripts/home-page.js","cba4fdd6b30c8fa14d7a270bb1fa0885"],["scripts/jquery.min.js","12108007906290015100837a6a61e9f4"],["scripts/marine-page.js","6e561e580b0fc8d798e476161d680b9b"],["scripts/services-page.js","6412e53e3d55282e4317246fb4b6fcee"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["services.html","98136cf257e5f9ade06018cc9a8ed1bc"],["styles/engine-quote-tool-style.css","e623635f4205d6fb8b529e6ad38a3f4f"],["styles/gator.css","d646c1288f79e1891f9bcf14ba63f3ef"]];
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




