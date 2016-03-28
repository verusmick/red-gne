/**
 * Created by toshiba on 3/27/2016.
 */

(function () {
  'use strict';

  angular
    .module('app.newEmp')
    .factory('User', userModel);

  /* @ngInject */
  function userModel($http, _URL, _USER, $rootScope) {
    var user = {
      current:{},
      assignCurrentUser:assignCurrentUser,
      register:register,
      login:login
    };

    function assignCurrentUser (data){
      this.current = {
        archived: data.archived,
        firstName: data.firstName,
        lastName: data.lastName,
        userRoles: data.userRoles,
        id: data.id,
        email: data.email,
        username: data.username,
        token: data.token
      }
    }

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

    function login (params){
      return $http({
        url: _URL + _USER.login,
        method: "POST",
        data: params,
        headers: {Api_key: 'root'}
      }).success(function (data) {
        user.assignCurrentUser(data);
        $rootScope.$emit('user.successLogin', user.current);
      }).error(function (data) {
        $rootScope.$emit('user.errorLogin', data.error);
      })
    }
    return user;
  }
})
();