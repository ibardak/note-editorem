function EditCtrl($scope,$location, NoteService) {
    this.notes = NoteService;
    /** Обновить заметку */
    this.updateNote = function() {
        this.notes.updateNote();
        $location.path('/')
    };
    /** Удалить заметку */
    this.deleteNote = function() {
        this.notes.deleteNote();
        $location.path('/')
    };
    /** Нажатие на любую кнопку (в данному случае на поле текста заметки)*/
    this.keyPress = function(e){
        this.notes.findTagOnTyping(e.target.innerText);
    }
};
app.controller('EditCtrl', EditCtrl);
