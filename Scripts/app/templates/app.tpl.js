﻿app.run(['$templateCache', function ($templateCache) {
    //Шаблон pager таблицы
    $templateCache.put('list/pager.tpl.html',
        '<div class="ng-cloak ng-table-pager">\
                <ul class="pagination ng-table-pagination">\
                    <li ng-class="{\'disabled\': !page.active}" ng-repeat="page in pages" ng-switch="page.type">\
                        <a ng-switch-when="prev" ng-click="params.page(page.number)" href="">&laquo;</a>\
                        <a ng-switch-when="first" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a>\
                        <a ng-switch-when="page" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a>\
                        <a ng-switch-when="more" ng-click="params.page(page.number)" href="">&#8230;</a>\
                        <a ng-switch-when="last" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a>\
                        <a ng-switch-when="next" ng-click="params.page(page.number)" href="">&raquo;</a>\
                    </li>\
                    <li>\
                        <a href=""> Всего: {{params.total()}}</a>\
                    </li>\
                </ul>\
            </div>');
}]);