note-editorem
=============
* Project start at 06.11.2014 at 18 PM.<br>
* Project ended at 09.11.2014 at 20 PM.

<b><i>Comments</i></b>:
<br>
* Практически весь функционал задания релизован, за исключением корректой подстветки тегов при редактировании записи.
<br>
* Большую часть времени заняла попытка устранения\обхода бага с перемещением каретки курсора ,в начало строки ввода или в в середину тега, при редактировании заметок (после подстветки тегов). При этом никакого экспешеша не возникало.
<br>
* Как оказалось при трасеровке, он возникает в момент переприсвоения innerHTML элемента в JQuery (<b>5844</b> строка jquery.js (<b>elem.innerHTML = value;</b>)).
<br>
* К сожалению баг устранить так и не удалось, поэтому реализовано две версии редактирования текста заметки (с переключением через checkbox).
