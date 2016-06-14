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
            console.log('Export button clicked!');
          }
          var final ='<?php';
          final +='\n/*';
            final +='\nPlugin Name: '+$scope.pName;
            final +='\nPlugin URI: '+$scope.pURL;
            final +='\nDescription: '+$scope.pDescription;
            final +='\nVersion: 1.0.6';
            final +='\nAuthor: rootabout';
            final +='\nAuthor URI: http://admin-builder.com';
            final +='\nLicense: GPLv2 or later';
            final +='\nText Domain: aB';
           final +='\n*/';
           console.log(final);

           var link = document.createElement('a');
           link.setAttribute('download', +$scope.pName.replace(' ','-')+'.php');
           link.setAttribute('href', 'data:' + 'text;data:attachment/php;charset=utf-8,' + encodeURIComponent(final));
           // window.open("text;data:attachment/php;charset=utf-8," + encodeURIComponent(elHtml));
           link.click();

        };


    }]);
})();
