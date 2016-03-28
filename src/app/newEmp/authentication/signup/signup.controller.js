(function () {
  'use strict';

  angular
    .module('app.newEmp.authentication')
    .controller('SignupController', SignupController);

  /* @ngInject */
  function SignupController($scope, $state, $mdToast, $http, $filter, triSettings, API_CONFIG, utilsDataFunctions, User) {

    var vm = this;
    var userModel = User;
    vm.triSettings = triSettings;
    vm.signupClick = registration;
    vm.utils = utilsDataFunctions;
    vm.flagValidationForm = false;
    vm.user = {
      firstName:'',
      lastName:'',
      //username: 'test'+ _.random(1000, 1000000),
      username: '',
      password: '',
      passwordRepeat: '',
      email: '',
      isHashed:true,
      country: null
    };

    vm.countrySelector = {
      countries: this.utils.getCountries(),
      placeholder: $filter('translate')('SIGNUP.COUNTRY.PLACEHOLDER'),
      objSelected: null,
      searchText: null,
      searchTextChange: null,
      querySearch: querySearch,
      selectedItemChange: selectedItemChange
    };

    var customToast = {};

    /**
     * Search for countries
     */
    function querySearch(query) {
      var results = query ? vm.countrySelector.countries.filter(createFilterFor(query)) : vm.countrySelector.countries;
      return results;
    }

    /**
     * Create filter function for a query string
     */

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(country) {
        var lowercaseCountry = angular.lowercase(country.name);
        return (lowercaseCountry.indexOf(lowercaseQuery) === 0);
      };
    }

    /**
     *Select country and parser in the User map
     * */

    function selectedItemChange(data) {
      vm.user.country = data ? data.code : null;
    }

    /**
     * form Validation
     * */

    $scope.$watchCollection('vm.user', function (data) {
      if (data) {
        if (data.password == data.passwordRepeat) {
          for (var i in data) {
            if (!!data[i]) {
              vm.flagValidationForm = true;
            }
            else {
              vm.flagValidationForm = false;
              break
            }
          }
        } else {
          vm.flagValidationForm = false;
        }
      }
    });

    /**
     * Set given user before to send
     *
     * @param {object} user
     */
    var parserObjectToSend = function (objectToSend){
      if(!_.isEmpty(objectToSend)){
        objectToSend.password = vm.utils.encoding64(objectToSend.password);
        objectToSend.passwordRepeat = vm.utils.encoding64(objectToSend.passwordRepeat);
        return objectToSend;
      }
    };

    $scope.goToLogin = function(){
      $mdToast.hide();
      $state.go('authentication.login');
    };

    function registration() {
      vm.flagValidationForm = false;
      var userToSend = _.clone(vm.user);
      userToSend = parserObjectToSend(userToSend);
      userModel.register(userToSend,
        function success(data) {
          customToast.message = 'Congratulation, Your account has been created. An email is being sent to the address you provided. Please check for this message.';
          customToast.labelButton = 'Back To Login';
          customToast.success = $scope.goToLogin;
          customToast.delay = 20000;
          vm.utils.openCustomToast(customToast);
        },
        function errorSuccess(data) {
          vm.flagValidationForm = true;
          var message = data ? data.error : $filter('translate')('SIGNUP.MESSAGES.NO_SIGNUP');
          $mdToast.show(
            $mdToast.simple()
              .content(message)
              .position('top right')
              .hideDelay(5000)
          );
        })
    }
  }
})();