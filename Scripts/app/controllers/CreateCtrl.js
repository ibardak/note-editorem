function CreateCtrl($location, NoteService) {
    this.notes = NoteService;
    /** Создать заметку*/
    this.createNewNote = function()
    {
        this.notes.createNote();
        $location.path('/');
    };
};
app.controller('CreateCtrl', CreateCtrl);