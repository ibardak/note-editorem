function NoteService(NotificationService) {
    //------------------------------
    /** Получить максимальный ID заметок */
    this.getMaxID = function(){
        var maxID = 0;
        for (var i=0; i < this.noteList.length;i++){
            if (this.noteList[i].id > maxID){
                maxID = this.noteList[i].id;
            }
        }
        return maxID;
    };
    //------------------------------
    /** Список заметок */
    this.noteList = [   {id:1,title: 'Title1',   text :'some text',    tag:['shop'] },
                        {id:2,title: 'Title2',   text :'some text',    tag:['book'] },
                        {id:3,title: 'Title3',  text :'some #text',    tag:['book','text'] },
                        {id:4,title: 'Title4',  text :'some text',  tag:['deal'] }];
    /** Шаблон заметки (для создания\редактирования) */
    this.note = { id: this.getMaxID()+1, title: '', text :'', tag:[] };
    this.paramList = {  0: {name: 'id',     title:'ID',         widget: 'label',    highlight:false,    withHash:false},
                        1: {name: 'title',  title:'Название',   widget: 'text',     highlight:false,    withHash:false},
                        2: {name: 'text',   title:'Текст',      widget: 'textarea', highlight:true,     withHash:true},
                        3: {name: 'tag',    title:'Теги',       widget: 'select',   highlight:true,     withHash:false}
    };
    /** Список тэгов*/
    this.tagList = ['shop','book','deal','text'];
    //------------------------------
    /** Создать новую заметку */
    this.createNote = function(){
        try {
            this.findTagOnTyping(this.note.text + '.');
            this.noteList.push(angular.copy(this.note));
            NotificationService.success('Заметка создана!');
        }
        catch (e){
            NotificationService.error(e.toString());
        }
    };
    /** Очистить данные выбранной\создаваемой заметки */
    this.clearNote = function(){
        this.note = { id: this.getMaxID()+1, title: '', text :'', tag:[] };
    };
    /** Удалить выбранную заметку */
    this.deleteNote = function()    {
        try {
            for (var i = 0; i < this.noteList.length; i++) {
                if (this.noteList[i].id == this.note.id) {
                    this.noteList.splice(i, 1);
                }
            }
            NotificationService.info('Заметка удалена!');
        }
        catch (e){
            NotificationService.error(e.toString());
        }
    };
    /** Редатировать выбранную заметку */
    this.updateNote =  function(){
        try {
            for (var i = 0; i < this.noteList.length; i++) {
                if (this.noteList[i].id == this.note.id) {
                    angular.copy(this.note, this.noteList[i]);
                }
            }
            this.findTagOnTyping(this.note.text + '.');
            NotificationService.success('Заметка отредактирована!');
        }
        catch (e){
            NotificationService.error(e.toString());
        }
    };
    //------------------------------
    /** Добавление тэгов по #tag при наборе текста */
    /** Можно и через $watcher сделать, но через ng-change и ng-keyup быстрее работает*/
    this.findTagOnTyping = function(value){
        var re= /\B#[\wА-Яа-я@\-\\=]+[.,\s]/g;
        var result;
        var m;
        while ((m = re.exec(value)) != null) {
            if (m.index === re.lastIndex) {
                re.lastIndex++;
            }
            result=m[0];
            if (result != undefined){
                result = result.substring(1, result.length-1);
                if (this.note.tag.length == 0){
                    this.note.tag.push(result);
                    pushData(result, this.tagList);
                    return;
                }
                pushData(result, this.note.tag);
                pushData(result, this.tagList);
            };
        }
    }
    function pushData(source,target){
        var cnt =0;
        for (var i=0; i<target.length;i++)
        {
            if (source == target[i]){
                cnt = 1;
            }
        }if (cnt == 0) {
            target.push(source);
        }
    }
}
app.service('NoteService', NoteService);
