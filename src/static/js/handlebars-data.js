var headSource = $('#header').html();
var filterSource = $('#filtering').html();
var archiveSource =$('#archive').html();
var data = {
    appTitle: 'Simple task management app',
    removeText: 'Remove completed items',
    showWord: 'Show',
    dataFiltering:
    {
        showAll: 'All',
        showCurrent: 'Current',
        showDone: 'Completed'
    }
};

var headTemplate = Handlebars.compile(headSource);
var filterTemplate = Handlebars.compile(filterSource);
var archiveTemplate = Handlebars.compile(archiveSource);

$('section[data-handlebar=main]').prepend(headTemplate(data));
//$('section[data-handlebar=filtering]').prepend(filterTemplate(data));
$('section[data-handlebar=archive]').prepend(archiveTemplate(data)).after(filterTemplate(data));