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
      isUserFacebook: false,
      current: {},
      assignCurrentUser: assignCurrentUser,
      assignCurrentUserFB : assignCurrentUserFB,
      register: register,
      login: login,
      facebookLogin: facebookLogin
    };

    function assignCurrentUser(data) {
      this.current = {
        archived: data.archived,
        firstName: data.firstName,
        lastName: data.lastName,
        userRoles: data.userRoles,
        id: data.id,
        email: data.email,
        username: data.username,
        token: data.token,
        imgProfile:'assets/images/avatars/avatar-5.png'
      }
    }

    function assignCurrentUserFB(data) {
      this.current = {
        archived: data.archived,
        firstName: data.first_name,
        lastName: data.last_name,
        userRoles: '',
        id: '',
        email: '',
        username: data.name,
        token: '',
        auth:data.auth,
        imgProfile:data.imgProfile
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

    function login(params) {
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

    function facebookLogin() {
      var objUser = {};
      FB.login(function (response) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function (response) {
              console.log('Good to see you, ' + response.name + '.');
              objUser = response;
              objUser['auth'] = FB.getAuthResponse();
              FB.api(
                "/" + objUser.id + "/picture?type=large",
                function (response) {
                  if (response && !response.error) {
                    user.isUserFacebook = true;
                    objUser['imgProfile'] =response.data.url;
                    console.log('final',objUser);
                    user.assignCurrentUserFB(objUser);
                    $rootScope.$emit('user.successLoginFB', user.current);
                  }
                }
              );
            }
          );
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }

    return user;
  }
})
();