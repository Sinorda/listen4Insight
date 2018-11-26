$(document).ready(function() {
    $('#main>div').hide();
    //$('#main>div:first').show();
    //$('#side .nav-link:first').addClass('active');

    $('div#colors').show();
    $('#side .nav-link#colors').addClass('active');

    $('#side .nav-link').click(function(event) {

        let content = $(this).attr('id');
        $('#main>div').hide();
        $('#side .nav-link').removeClass('active');
        $('div#' + content).fadeIn();
        $(this).addClass('active');


        event.preventDefault();
    })

})