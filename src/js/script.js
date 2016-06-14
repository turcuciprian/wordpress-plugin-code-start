(function() {
    //debug variable
    var debug = true;
    //The main module
    var pcs = angular.module('wpPCS', ['ui.bootstrap', 'ngAnimate', 'ngStorage']);
    // pcs.run(function($rootScope, $templateCache) {
    //     $rootScope.$on('$viewContentLoaded', function() {
    //         $templateCache.removeAll();
    //     });
    // });
    if (debug) {
        console.log('Module wpPCS initiated');
    }

    var mainCtrl = pcs.controller('mainCtrl', ['$scope', '$log', '$http', '$localStorage', function($scope, $log, $http, $localStorage) {
        if (debug) {
            console.log('inside controller');
        }
        $scope.mainArr = [];
        $scope.pcsExport = function(){
          if(debug){
            console.log('aaa');
          }

        };


    }]);
})();
