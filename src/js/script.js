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
          final +='/*';
            final +='Plugin Name: '+$scope.pName;
            final +='Plugin URI: http://admin-builder.com';
            final +='Description: A plugin that generates admin panel pages & posts, meta boxes and fields (with unlimited textbox, textarea, checkbox, custom select (dropdown box), datepicker, timepicker, colorpicker, upload media fields, with configurable options)';
            final +='Version: 1.0.6';
            final +='Author: rootabout';
            final +='Author URI: http://admin-builder.com';
            final +='License: GPLv2 or later';
            final +='Text Domain: aB';
           final +='*/';
           console.log(final);
        };


    }]);
})();
