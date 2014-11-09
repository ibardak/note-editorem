function ListCtrl($location, $filter, ngTableParams, NoteService) {
    this.notes = NoteService;
    /** Редактировать выбранную заметку */
    this.editNote =  function(item){
        angular.copy(item, this.notes.note);
        $location.path('/edit');
    };
    /** Параметры таблицы */
    this.tableParams = new ngTableParams(
        {   // params
            page: 1,
            count: 10
        },
        {   //settings
            total: this.notes.noteList.length,
            getData: function ($defer, params) {
                var orderedData = params.sorting() ?
                    $filter('orderBy')(NoteService.noteList, params.orderBy()) :
                    NoteService.noteList;
                params.total(orderedData.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        }
    );
    /** Сортировка при динамических столбцах */
    this.tableParams_sort = function (column, tableParams) {
            tableParams.sorting(column.name, tableParams.isSortBy(column.name, 'asc') ? 'desc' : 'asc');
    };

};
app.controller('ListCtrl', ListCtrl);
