var cacheName = 'studApp-v1.0.0';
var filesToCache = [
	'https://chooseyourfuture.fi/studentmobileapp.com/app/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/idb.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_artsandcrafts.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_artsandculture.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_cafes.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_experiences.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_fun.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_groceries.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_health.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_housing.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_music.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_nightlife.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_outdoors.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_publicholidays.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_religion.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_restaurants.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_safety.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_services.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_shopping.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_socialhabits.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_sports.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_studentlunch.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/info_pages/info_transport.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/scripts/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/scripts/autoscroll.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/scripts/dashboard.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/scripts/events.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/scripts/events.JSON',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/scripts/lists.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/scripts/profile.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/campusMap.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/city.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/events.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/index.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/leCss.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/leScripts.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/map.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/profile.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/en/study.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_artsandcrafts.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_artsandculture.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_cafes.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_experiences.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_fun.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_groceries.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_health.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_housing.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_music.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_nightlife.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_outdoors.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_publicholidays.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_religion.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_restaurants.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_safety.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_services.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_shopping.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_socialhabits.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_sports.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_studentlunch.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/info_pages/info_transport.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/scripts/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/scripts/autoscroll.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/scripts/dashboard.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/scripts/events.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/scripts/events.JSON',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/scripts/lists.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/scripts/profile.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/campusMap.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/city.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/events.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/index.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/leCss.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/leScripts.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/map.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/profile.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/fi/study.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/accomodation_AdobeStock_63180709.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/art craft 2.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/art craft 3.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/art_culture.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/bars_AdobeStock_101533629.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/cafe 4.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/campusMap.jpg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/culture.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/culture_experience.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/culture_holidays.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/culture-social habits.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/events_dash.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/food_AdobeStock_106177123.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/games_AdobeStock_84860408.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/groceries.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/health 2.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/health_AdobeStock_124602758.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/hobbies.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/hum-publiikki-15_hires.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/-leiska-189.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/lunch.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/music 1.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/night life 2.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/outdoors 4.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/public offices_AdobeStock_80901455.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/religion 2.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/restaurants.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/safety_AdobeStock_91945534.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/school lunch.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/shopping 2.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/sports 3.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/study.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Images/transport.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_36x36.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_48x48.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_57x57.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_60x60.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_72x72.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_96x96.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_114x114.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_120x120.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_144x144.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_180x180.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_192x192.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_512x512.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/homeIcons/CYF_App_1024x1024.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/accomodation.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/account.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/Arrow.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/artandculture.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/art_crafts.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/cafes.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/campus_map_black_circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/campus_map_black_rectangle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/campus_map_white_circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/campus_map_white_rectangle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/Check.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/city info black circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/city info white circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/city_info_black_circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/city_info_white_circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/cross.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/Edit pen.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/entertainment.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/events black circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/events_black_circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/events_white_circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/experience.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/groceries.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/habits.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/health.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/holidays.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/home.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/home_black.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/home_white.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/maps black circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/maps white circle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/marker current location color 3.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/marker location.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/minus.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/music.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/nightlife.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/outdoors.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/places_icon.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/plus.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/religion.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/restaurant.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/safety.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/search.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/services.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/shopping.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/sports.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/Star.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/student_lunch.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/study_info_black_circle_v2.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/study_info_white_circle_v2.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/tab triangle.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/transport.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/Resources/Icons/trash.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/footer.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/header.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/home-black.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/img/user-white.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/haka.svg',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/index.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/leCss.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/login-footer.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/login-footer@2x.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/login-footer@3x.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/login-header (1).png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/login-header.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/login/login-header@2x.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/bootstrap/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/bootstrap/css/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/bootstrap/css/bootstrap.min.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/bootstrap/css/bootstrap.min.css.map',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/bootstrap/js/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/bootstrap/js/bootstrap.bundle.min.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/bootstrap/js/bootstrap.bundle.min.js.map',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/external/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/external/jquery/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/external/jquery/jquery.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/images/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/images/ui-icons_444444_256x240.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/images/ui-icons_555555_256x240.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/images/ui-icons_777620_256x240.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/images/ui-icons_777777_256x240.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/images/ui-icons_cc0000_256x240.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/images/ui-icons_ffffff_256x240.png',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/AUTHORS.txt',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/index.html',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/jquery-ui.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/jquery-ui.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/jquery-ui.min.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/jquery-ui.min.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/jquery-ui.structure.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/jquery-ui.structure.min.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/jquery-ui.theme.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/jquery-ui.theme.min.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/LICENSE.txt',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-ui-1.12.1/package.json',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/jquery/jquery-3.2.1.min.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/datetime/',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/datetime/picker.common.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/datetime/picker.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/datetime/picker.esm.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/datetime/picker.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/datetime/picker.min.css',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/resources/datetime/picker.min.js',
	'https://chooseyourfuture.fi/studentmobileapp.com/app/progress.js'
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
	var dataUrlEventsEn = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/en/events.html');
	var dataUrlEventsFi = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/fi/events.html');
	var dataUrlMapsEn = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/en/map.html');
	var dataUrlMapsFi = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/fi/map.html');
	var dataUrlEventsListEn = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/en/scripts/events.JSON');
	var dataUrlEventsListFi = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/fi/scripts/events.JSON');
	var dataUrlEventsScriptsFi = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/fi/scripts/events.js');
	var dataUrlEventsScriptsEn = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/en/scripts/events.js');
	var dataUrlMapScriptsFi = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/fi/leScripts.js');
	var dataUrlMapScriptsEn = e.request.url.indexOf('https://chooseyourfuture.fi/studentmobileapp.com/app/en/leScripts.js');
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
