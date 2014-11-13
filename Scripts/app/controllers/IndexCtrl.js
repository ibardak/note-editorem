function IndexCtrl($scope, $location, NoteService) {
    this.notes = NoteService;
    this.tag_search = undefined;
    /** Создать новую заметку  */
    this.createNew = function()
    {
        NoteService.clearNote();
        $location.path('/new');
    }
    /** Редактирование Тэгов*/
    this.tagEdit = function(){
        $location.path('/tags');
    };
    /** Показывать ли объекты на панели*/
    this.checkpage = function(){
        return $location.path() == '/';
    }
    /** watcher поиска по тегу (для сбороса фильтра) */
    $scope.$watch('index.tag_search',angular.bind(this, function(newValue,oldValue){
        if (newValue == '') {
            this.tag_search = undefined;
        }
    }));
};
app.controller('IndexCtrl', IndexCtrl);