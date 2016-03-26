(function() {
    'use strict';

    angular
        .module('app.newEmp.authentication')
        .controller('SignupController', SignupController);

    /* @ngInject */
    function SignupController($scope, $state, $mdToast, $http, $filter, triSettings, API_CONFIG, utilsDataFunctions) {
        var vm = this;
        vm.triSettings = triSettings;
        vm.signupClick = signupClick;
        vm.utils = utilsDataFunctions;
        vm.countrySelector= {};
        vm.user = {
            name: '',
            email: '',
            password: '',
            confirm: ''
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
      function selectedItemChange(data){
        console.log('---->', data);

      }


        function signupClick() {
            $http({
                method: 'POST',
                url: API_CONFIG.url + 'signup',
                data: $scope.user
            }).
            success(function(data) {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('SIGNUP.MESSAGES.CONFIRM_SENT') + ' ' + data.email)
                    .position('bottom right')
                    .action($filter('translate')('SIGNUP.MESSAGES.LOGIN_NOW'))
                    .highlightAction(true)
                    .hideDelay(0)
                ).then(function() {
                    $state.go('public.auth.login');
                });
            }).
            error(function() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('SIGNUP.MESSAGES.NO_SIGNUP'))
                    .position('bottom right')
                    .hideDelay(5000)
                );
            });
        }
    }
})();