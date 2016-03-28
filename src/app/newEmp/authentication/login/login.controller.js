(function () {
  'use strict';

  angular
    .module('app.newEmp.authentication')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController($state, triSettings, utilsDataFunctions, User, $rootScope) {
    var vm = this;
    var utils = utilsDataFunctions;
    var userModel = User;
    var parserObjectToSend;
    var customToast = {};
    //vm.disabledButton = true;
    vm.loginClick = loginClick;
    vm.triSettings = triSettings;
    vm.user = {
      email: '',
      password: '',
      username: '',
      rememberMe: false, // seted harcode,
      uuid: utils.generateUUID()
    };
    vm.socialLogins = [
      {
        icon: 'fa fa-facebook',
        color: '#337ab7',
        url: '#',
        method:userModel.facebookLogin
      }
    ];


    parserObjectToSend = function (objectToSend) {
      if (!_.isEmpty(objectToSend)) {
        objectToSend.password = utils.encoding64(objectToSend.password);
        delete objectToSend.email;
        return objectToSend;
      }
    };

    function loginClick() {
      var userToSend = _.clone(vm.user);
      userToSend = parserObjectToSend(userToSend);
      userModel.login(userToSend);

    }

    /**
     * Lisen successLogin request
     * */

    $rootScope.$on('user.successLogin', function (event, data) {
      if(data){
        $state.go('triangular.admin-default.profile');
      }
    });

    /**
     * Lisen successLogin Facebook request
     * */

    $rootScope.$on('user.successLoginFB', function (event, data) {
      if(data){
        console.log('------->', data);
        $state.go('triangular.admin-default.profile');
      }
    });

    /**
     * Lisen errorLogin request
     * */
    $rootScope.$on('user.errorLogin', function (event, data) {
      if(data){
        customToast.message = data;
        customToast.delay = 4000;
        utils.openCustomToast(customToast);
      }
    });


  }
})();