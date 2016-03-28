(function () {
  'use strict';

  angular.module('app').config(translateConfig);

  /* @ngInject */
  function translateConfig(triSettingsProvider, triRouteProvider, APP_LANGUAGES) {
    var now = new Date();
    // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
    triSettingsProvider.setName('Nueva Empresa');
    triSettingsProvider.setCopyright('&copy;' + now.getFullYear() + 'rednuevaempresa.com');
    triSettingsProvider.setLogo('assets/images/logo.png');
    triSettingsProvider.setLogoMax('assets/images/newEmp/logo.png');
    triSettingsProvider.setLogoTrans('assets/images/newEmp/logo2.png');
    // set current version of app (shown in footer)
    triSettingsProvider.setVersion('0.1');
    // set the document title that appears on the browser tab
    triRouteProvider.setTitle('Nueva Empresa');
    triRouteProvider.setSeparator('|');

    // setup available languages in triangular
    for (var lang = APP_LANGUAGES.length - 1; lang >= 0; lang--) {
      triSettingsProvider.addLanguage({
        name: APP_LANGUAGES[lang].name,
        key: APP_LANGUAGES[lang].key
      });
    }
  }
})();