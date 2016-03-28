/**
 * Created by toshiba on 3/27/2016.
 */

(function () {
  'use strict';

  angular
    .module('app.newEmp')
    .constant('_URL','http://localhost:8080/nueva-empresa/api/')
    .constant ('_USER',{
      'create':'user/create',
      'login':'user/login',
      'users':'user/'
    }
  );
})();