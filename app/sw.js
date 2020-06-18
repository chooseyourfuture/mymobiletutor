var cacheName = 'studApp-v1.0.0';
var baseUrl = baseUrl + 'https://studentmobileapp.com/app';
var filesToCache = [
	baseUrl + '/',
	baseUrl + '/idb.js',
	baseUrl + '/en/',
	baseUrl + '/en/info_pages/',
	baseUrl + '/en/info_pages/info_artsandcrafts.html',
	baseUrl + '/en/info_pages/info_artsandculture.html',
	baseUrl + '/en/info_pages/info_cafes.html',
	baseUrl + '/en/info_pages/info_experiences.html',
	baseUrl + '/en/info_pages/info_fun.html',
	baseUrl + '/en/info_pages/info_groceries.html',
	baseUrl + '/en/info_pages/info_health.html',
	baseUrl + '/en/info_pages/info_housing.html',
	baseUrl + '/en/info_pages/info_music.html',
	baseUrl + '/en/info_pages/info_nightlife.html',
	baseUrl + '/en/info_pages/info_outdoors.html',
	baseUrl + '/en/info_pages/info_publicholidays.html',
	baseUrl + '/en/info_pages/info_religion.html',
	baseUrl + '/en/info_pages/info_restaurants.html',
	baseUrl + '/en/info_pages/info_safety.html',
	baseUrl + '/en/info_pages/info_services.html',
	baseUrl + '/en/info_pages/info_shopping.html',
	baseUrl + '/en/info_pages/info_socialhabits.html',
	baseUrl + '/en/info_pages/info_sports.html',
	baseUrl + '/en/info_pages/info_studentlunch.html',
	baseUrl + '/en/info_pages/info_transport.html',
	baseUrl + '/en/scripts/',
	baseUrl + '/en/scripts/autoscroll.js',
	baseUrl + '/en/scripts/dashboard.js',
	baseUrl + '/en/scripts/events.js',
	baseUrl + '/en/scripts/events.JSON',
	baseUrl + '/en/scripts/lists.js',
	baseUrl + '/en/scripts/profile.js',
	baseUrl + '/en/campusMap.html',
	baseUrl + '/en/city.html',
	baseUrl + '/en/events.html',
	baseUrl + '/en/index.html',
	baseUrl + '/en/leCss.css',
	baseUrl + '/en/leScripts.js',
	baseUrl + '/en/map.html',
	baseUrl + '/en/profile.html',
	baseUrl + '/en/study.html',
	baseUrl + '/fi/',
	baseUrl + '/fi/info_pages/',
	baseUrl + '/fi/info_pages/info_artsandcrafts.html',
	baseUrl + '/fi/info_pages/info_artsandculture.html',
	baseUrl + '/fi/info_pages/info_cafes.html',
	baseUrl + '/fi/info_pages/info_experiences.html',
	baseUrl + '/fi/info_pages/info_fun.html',
	baseUrl + '/fi/info_pages/info_groceries.html',
	baseUrl + '/fi/info_pages/info_health.html',
	baseUrl + '/fi/info_pages/info_housing.html',
	baseUrl + '/fi/info_pages/info_music.html',
	baseUrl + '/fi/info_pages/info_nightlife.html',
	baseUrl + '/fi/info_pages/info_outdoors.html',
	baseUrl + '/fi/info_pages/info_publicholidays.html',
	baseUrl + '/fi/info_pages/info_religion.html',
	baseUrl + '/fi/info_pages/info_restaurants.html',
	baseUrl + '/fi/info_pages/info_safety.html',
	baseUrl + '/fi/info_pages/info_services.html',
	baseUrl + '/fi/info_pages/info_shopping.html',
	baseUrl + '/fi/info_pages/info_socialhabits.html',
	baseUrl + '/fi/info_pages/info_sports.html',
	baseUrl + '/fi/info_pages/info_studentlunch.html',
	baseUrl + '/fi/info_pages/info_transport.html',
	baseUrl + '/fi/scripts/',
	baseUrl + '/fi/scripts/autoscroll.js',
	baseUrl + '/fi/scripts/dashboard.js',
	baseUrl + '/fi/scripts/events.js',
	baseUrl + '/fi/scripts/events.JSON',
	baseUrl + '/fi/scripts/lists.js',
	baseUrl + '/fi/scripts/profile.js',
	baseUrl + '/fi/campusMap.html',
	baseUrl + '/fi/city.html',
	baseUrl + '/fi/events.html',
	baseUrl + '/fi/index.html',
	baseUrl + '/fi/leCss.css',
	baseUrl + '/fi/leScripts.js',
	baseUrl + '/fi/map.html',
	baseUrl + '/fi/profile.html',
	baseUrl + '/fi/study.html',
	baseUrl + '/img/',
	baseUrl + '/img/Images/',
	baseUrl + '/img/Images/accomodation_AdobeStock_63180709.png',
	baseUrl + '/img/Images/art craft 2.png',
	baseUrl + '/img/Images/art craft 3.png',
	baseUrl + '/img/Images/art_culture.png',
	baseUrl + '/img/Images/bars_AdobeStock_101533629.png',
	baseUrl + '/img/Images/cafe 4.png',
	baseUrl + '/img/Images/campusMap.jpg',
	baseUrl + '/img/Images/culture.png',
	baseUrl + '/img/Images/culture_experience.png',
	baseUrl + '/img/Images/culture_holidays.png',
	baseUrl + '/img/Images/culture-social habits.png',
	baseUrl + '/img/Images/events_dash.png',
	baseUrl + '/img/Images/food_AdobeStock_106177123.png',
	baseUrl + '/img/Images/games_AdobeStock_84860408.png',
	baseUrl + '/img/Images/groceries.png',
	baseUrl + '/img/Images/health 2.png',
	baseUrl + '/img/Images/health_AdobeStock_124602758.png',
	baseUrl + '/img/Images/hobbies.png',
	baseUrl + '/img/Images/hum-publiikki-15_hires.png',
	baseUrl + '/img/Images/-leiska-189.png',
	baseUrl + '/img/Images/lunch.png',
	baseUrl + '/img/Images/music 1.png',
	baseUrl + '/img/Images/night life 2.png',
	baseUrl + '/img/Images/outdoors 4.png',
	baseUrl + '/img/Images/public offices_AdobeStock_80901455.png',
	baseUrl + '/img/Images/religion 2.png',
	baseUrl + '/img/Images/restaurants.png',
	baseUrl + '/img/Images/safety_AdobeStock_91945534.png',
	baseUrl + '/img/Images/school lunch.png',
	baseUrl + '/img/Images/shopping 2.png',
	baseUrl + '/img/Images/sports 3.png',
	baseUrl + '/img/Images/study.png',
	baseUrl + '/img/Images/transport.png',
	baseUrl + '/img/Resources/',
	baseUrl + '/img/Resources/homeIcons/',
	baseUrl + '/img/Resources/homeIcons/CYF_App_36x36.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_48x48.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_57x57.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_60x60.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_72x72.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_96x96.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_114x114.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_120x120.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_144x144.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_180x180.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_192x192.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_512x512.png',
	baseUrl + '/img/Resources/homeIcons/CYF_App_1024x1024.png',
	baseUrl + '/img/Resources/Icons/',
	baseUrl + '/img/Resources/Icons/accomodation.svg',
	baseUrl + '/img/Resources/Icons/account.svg',
	baseUrl + '/img/Resources/Icons/Arrow.svg',
	baseUrl + '/img/Resources/Icons/artandculture.svg',
	baseUrl + '/img/Resources/Icons/art_crafts.svg',
	baseUrl + '/img/Resources/Icons/cafes.svg',
	baseUrl + '/img/Resources/Icons/campus_map_black_circle.svg',
	baseUrl + '/img/Resources/Icons/campus_map_black_rectangle.svg',
	baseUrl + '/img/Resources/Icons/campus_map_white_circle.svg',
	baseUrl + '/img/Resources/Icons/campus_map_white_rectangle.svg',
	baseUrl + '/img/Resources/Icons/Check.svg',
	baseUrl + '/img/Resources/Icons/city info black circle.svg',
	baseUrl + '/img/Resources/Icons/city info white circle.svg',
	baseUrl + '/img/Resources/Icons/city_info_black_circle.svg',
	baseUrl + '/img/Resources/Icons/city_info_white_circle.svg',
	baseUrl + '/img/Resources/Icons/cross.svg',
	baseUrl + '/img/Resources/Icons/Edit pen.svg',
	baseUrl + '/img/Resources/Icons/entertainment.svg',
	baseUrl + '/img/Resources/Icons/events black circle.svg',
	baseUrl + '/img/Resources/Icons/events_black_circle.svg',
	baseUrl + '/img/Resources/Icons/events_white_circle.svg',
	baseUrl + '/img/Resources/Icons/experience.svg',
	baseUrl + '/img/Resources/Icons/groceries.svg',
	baseUrl + '/img/Resources/Icons/habits.svg',
	baseUrl + '/img/Resources/Icons/health.svg',
	baseUrl + '/img/Resources/Icons/holidays.svg',
	baseUrl + '/img/Resources/Icons/home.svg',
	baseUrl + '/img/Resources/Icons/home_black.svg',
	baseUrl + '/img/Resources/Icons/home_white.svg',
	baseUrl + '/img/Resources/Icons/maps black circle.svg',
	baseUrl + '/img/Resources/Icons/maps white circle.svg',
	baseUrl + '/img/Resources/Icons/marker current location color 3.svg',
	baseUrl + '/img/Resources/Icons/marker location.svg',
	baseUrl + '/img/Resources/Icons/minus.svg',
	baseUrl + '/img/Resources/Icons/music.svg',
	baseUrl + '/img/Resources/Icons/nightlife.svg',
	baseUrl + '/img/Resources/Icons/outdoors.svg',
	baseUrl + '/img/Resources/Icons/places_icon.svg',
	baseUrl + '/img/Resources/Icons/plus.svg',
	baseUrl + '/img/Resources/Icons/religion.svg',
	baseUrl + '/img/Resources/Icons/restaurant.svg',
	baseUrl + '/img/Resources/Icons/safety.svg',
	baseUrl + '/img/Resources/Icons/search.svg',
	baseUrl + '/img/Resources/Icons/services.svg',
	baseUrl + '/img/Resources/Icons/shopping.svg',
	baseUrl + '/img/Resources/Icons/sports.svg',
	baseUrl + '/img/Resources/Icons/Star.svg',
	baseUrl + '/img/Resources/Icons/student_lunch.svg',
	baseUrl + '/img/Resources/Icons/study_info_black_circle_v2.svg',
	baseUrl + '/img/Resources/Icons/study_info_white_circle_v2.svg',
	baseUrl + '/img/Resources/Icons/tab triangle.svg',
	baseUrl + '/img/Resources/Icons/transport.svg',
	baseUrl + '/img/Resources/Icons/trash.svg',
	baseUrl + '/img/footer.png',
	baseUrl + '/img/header.png',
	baseUrl + '/img/home-black.png',
	baseUrl + '/img/user-white.png',
	baseUrl + '/login/',
	baseUrl + '/login/haka.svg',
	baseUrl + '/login/index.html',
	baseUrl + '/login/leCss.css',
	baseUrl + '/login/login-footer.png',
	baseUrl + '/login/login-footer@2x.png',
	baseUrl + '/login/login-footer@3x.png',
	baseUrl + '/login/login-header (1).png',
	baseUrl + '/login/login-header.png',
	baseUrl + '/login/login-header@2x.png',
	baseUrl + '/resources/',
	baseUrl + '/resources/bootstrap/',
	baseUrl + '/resources/bootstrap/css/',
	baseUrl + '/resources/bootstrap/css/bootstrap.min.css',
	baseUrl + '/resources/bootstrap/css/bootstrap.min.css.map',
	baseUrl + '/resources/bootstrap/js/',
	baseUrl + '/resources/bootstrap/js/bootstrap.bundle.min.js',
	baseUrl + '/resources/bootstrap/js/bootstrap.bundle.min.js.map',
	baseUrl + '/resources/jquery/',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/external/',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/external/jquery/',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/external/jquery/jquery.js',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/images/',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/images/ui-icons_444444_256x240.png',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/images/ui-icons_555555_256x240.png',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/images/ui-icons_777620_256x240.png',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/images/ui-icons_777777_256x240.png',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/images/ui-icons_cc0000_256x240.png',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/images/ui-icons_ffffff_256x240.png',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/AUTHORS.txt',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/index.html',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/jquery-ui.css',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/jquery-ui.js',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/jquery-ui.min.css',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/jquery-ui.min.js',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/jquery-ui.structure.css',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/jquery-ui.structure.min.css',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/jquery-ui.theme.css',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/jquery-ui.theme.min.css',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/LICENSE.txt',
	baseUrl + '/resources/jquery/jquery-ui-1.12.1/package.json',
	baseUrl + '/resources/jquery/jquery-3.2.1.min.js',
	baseUrl + '/resources/datetime/',
	baseUrl + '/resources/datetime/picker.common.js',
	baseUrl + '/resources/datetime/picker.css',
	baseUrl + '/resources/datetime/picker.esm.js',
	baseUrl + '/resources/datetime/picker.js',
	baseUrl + '/resources/datetime/picker.min.css',
	baseUrl + '/resources/datetime/picker.min.js',
	baseUrl + '/progress.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
	//console.log('[Service Worker] Fetch', e.request.url); For debugging
	var dataUrlEventsEn = e.request.url.indexOf(baseUrl + '/en/events.html');
	var dataUrlEventsFi = e.request.url.indexOf(baseUrl + '/fi/events.html');
	var dataUrlMapsEn = e.request.url.indexOf(baseUrl + '/en/map.html');
	var dataUrlMapsFi = e.request.url.indexOf(baseUrl + '/fi/map.html');
	var dataUrlEventsListEn = e.request.url.indexOf(baseUrl + '/en/scripts/events.JSON');
	var dataUrlEventsListFi = e.request.url.indexOf(baseUrl + '/fi/scripts/events.JSON');
	var dataUrlEventsScriptsFi = e.request.url.indexOf(baseUrl + '/fi/scripts/events.js');
	var dataUrlEventsScriptsEn = e.request.url.indexOf(baseUrl + '/en/scripts/events.js');
	var dataUrlMapScriptsFi = e.request.url.indexOf(baseUrl + '/fi/leScripts.js');
	var dataUrlMapScriptsEn = e.request.url.indexOf(baseUrl + '/en/leScripts.js');
  if (dataUrlEventsEn > -1 || dataUrlEventsFi > -1 || dataUrlMapsEn > -1 || dataUrlMapsFi > -1 || dataUrlEventsListEn > -1 || dataUrlEventsListFi > -1 || dataUrlEventsScriptsFi > -1 || dataUrlEventsScriptsEn > -1 || dataUrlMapScriptsFi > -1 || dataUrlMapScriptsEn > -1) {
    /* Thynote:
     * "Cache then network" strategy
     * Go online and update file to cache, only display offline if unavailable. Used for events and maps.
	 * Theoretically also updates these pages pages every time. 
     */
    e.respondWith(
      caches.open(filesToCache).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    /*
     * The app is asking for app shell files/Static stuff. So might as well serve cached stuff
     * "Cache, falling back to the network" offline strategy
     *
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   *
   *Taken from tutorial/labs, will have to test if it is still a thing eventually.
   */
  return self.clients.claim();
});
