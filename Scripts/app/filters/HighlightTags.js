/** Фильтр придания тексту с # тэгами класса "badge" */
app.filter('highlightTags', function () {
    return function (text, search, withHash) {
        var result = '';
        if (angular.isObject(text))
        {
            for (var j=0;j<text.length;j++){
                result += ' '+text[j];
            }
            result = result.substring(1,result.length);
            for (var i=0;i<search.length;i++)
            {
                result = result.replace(new RegExp(withHash?'#'+search[i]:search[i],'g'), '<i class="badge">$&</i>');
            }
        }
        else{
            result = text;
            for (var i=0;i<search.length;i++)
            {
                result = result.replace(new RegExp(withHash?'#'+search[i]:search[i],'g'), '<i class="badge">$&</i>');
            }
        }
        return result;
    };
});