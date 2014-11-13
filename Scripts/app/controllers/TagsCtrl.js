function TagsCtrl(NoteService) {
    this.notes = NoteService;
    this.tempTag ='';
    /** Добавить тэг*/
    this.addTag = function(){
        this.notes.tagList.push(this.tempTag);
        this.tempTag = '';
    };
    /** Удалить тэг*/
    this.deleteTag =  function($index){
        for (var i= 0; i < this.notes.noteList.length;i++){
            for (var j=0; j< this.notes.noteList[i].tag.length;j++)
            {
                if (this.notes.noteList[i].tag[j] == this.notes.tagList[$index])
                {
                    this.notes.noteList[i].tag.splice(j, 1);
                }
            }
        }
        this.notes.tagList.splice($index, 1);
    };
};
app.controller('TagsCtrl', TagsCtrl);