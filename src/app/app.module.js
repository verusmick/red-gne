(function () {
  'use strict';
  angular.module('app', [
    'triangular',
    'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
    'ui.router', 'pascalprecht.translate', 'LocalStorageModule', 'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'uiGmapgoogle-maps', 'hljs', 'md.data.table', angularDragula(angular), 'ngFileUpload',
     //'seed-module',
    'app.newEmp',
    // uncomment above to activate the example seed module
    //'app.examples',
  ]).constant('APP_LANGUAGES', [{ // create a constant for languages so they can be added to both triangular & translate
    name: 'LANGUAGES.CHINESE',
    key: 'zh'
  }, {
    name: 'LANGUAGES.ENGLISH',
    key: 'en'
  }, {
    name: 'LANGUAGES.FRENCH',
    key: 'fr'
  }, {
    name: 'LANGUAGES.PORTUGUESE',
    key: 'pt'
  }]).constant('API_CONFIG', {    // set a constant for the API we are connecting to
    //'url': 'http://triangular-api.oxygenna.com//'
  }).constant('_',
    window._
  ). run(function(){
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '316100561820956',
          xfbml      : true,
          version    : 'v2.3'
        });
      };
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    });
})();