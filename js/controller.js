(function() {
    'use strict';

    angular
        .module('myapp')
        .controller('MainController', MainController);

    	// MainController.$inject = ['ui-'];

    /* @ngInject */
    function MainController() {
        var vm = this;
        vm.title = 'MainController';
        vm.navs = ["Home", "Portfolio", "Profile"];

        activate();

        ////////////////

        function activate() {
        	console.log(vm.navs);
        }
    }
})();