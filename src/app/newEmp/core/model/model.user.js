/**
 * Created by toshiba on 3/27/2016.
 */

(function () {
  'use strict';

  angular
    .module('app.newEmp')
    .factory('User', userModel);

  /* @ngInject */
  function userModel($http, _URL, _USER) {
    var user = {
      register:register
    };

    function register(params, forSuccess, forError) {
      return $http({
        url: _URL + _USER.create,
        method: "POST",
        data: params,
        headers: {Api_key: 'root'}
      }).success(function (data) {
        forSuccess(data);
      }).error(function (data) {
        forError(data);
      })
    }
    return user;
  }
})
();