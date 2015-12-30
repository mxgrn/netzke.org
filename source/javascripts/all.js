//= require jquery  
//= require bootstrap-sprockets
//= require_tree .

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({always_show_close: true, width: 1000});
});
