'use strict';
//---------------------------------------------------------------------------   Declare app level module which depends on filters, and services
var app = angular.module('main', [  'ngRoute',
                                    'ngAnimate',
                                    'ngSanitize',
                                    'mgcrea.ngStrap',
                                    'ngTable']);
//---------------------------------------------------------------------------
// ROUTE
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/',
        {
            templateUrl:'Views/list.html',
            controllerAs: 'list',
            controller:'ListCtrl',
            title: 'Текстовый редактор Заметки+'
        });
    $routeProvider.when('/new',
        {
            templateUrl: 'Views/create.html',
            controller: 'CreateCtrl',
            controllerAs: 'create',
            title: 'Добавление Заметки'
        });
    $routeProvider.when('/edit',
        {
            templateUrl: 'Views/edit.html',
            controller: 'EditCtrl',
            controllerAs: 'edit',
            title: 'Редактирование Заметки'
        });
    $routeProvider.when('/tags',
        {
            templateUrl: 'Views/tags.html',
            controller: 'TagsCtrl',
            controllerAs: 'tags',
            title: 'Редактирование Тэгов'
        });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);
//---------------------------------------------------------------------------
app.run(function ($rootScope) {
    $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
        $rootScope.title = currentRoute.title;
        $rootScope.version = angular.version.full;
    });
});