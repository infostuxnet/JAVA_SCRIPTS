$(document).ready(function () {
//    $('.ico-tiempo').hover(function () {
//        $('.ico-tiempo').css('background-color', '#2a4691');
//    });
//    $('.ico-tiempo').mouseout(function () {
//        $('.ico-tiempo').css('background-color', '#5597d4');
//    });
    $('.ico-tiempo').hover(function () {
        $('.ico-tiempo').css('background-color', '#2a4691');
    });
    $('.ico-tiempo').mouseout(function () {
        $('.ico-tiempo').css('background-color', '#5597d4');
    });

    $('.ico-clima').hover(function () {
        $('.ico-clima').css('background-color', '#2a4691');
    });
    $('.ico-clima').mouseout(function () {
        $('.ico-clima').css('background-color', '#5597d4');
    });

    $('.ico-rios').hover(function () {
        $('.ico-rios').css('background-color', '#2a4691');
    });
    $('.ico-rios').mouseout(function () {
        $('.ico-rios').css('background-color', '#5597d4');
    });

    $('.ico-agro').hover(function () {
        $('.ico-agro').css('background-color', '#2a4691');
    });
    $('.ico-agro').mouseout(function () {
        $('.ico-agro').css('background-color', '#5597d4');
    });

    $('.ico-ruv').hover(function () {
        $('.ico-ruv').css('background-color', '#2a4691');
    });
    $('.ico-ruv').mouseout(function () {
        $('.ico-ruv').css('background-color', '#5597d4');
    });

    $('.ico-elnino').hover(function () {
        $('.ico-elnino').css('background-color', '#2a4691');
    });
    $('.ico-elnino').mouseout(function () {
        $('.ico-elnino').css('background-color', '#5597d4');
    });

    $('.ico-satel').hover(function () {
        $('.ico-satel').css('background-color', '#2a4691');
    });
    $('.ico-satel').mouseout(function () {
        $('.ico-satel').css('background-color', '#5597d4');
    });

    $('.ico-bdata').hover(function () {
        $('.ico-bdata').css('background-color', '#2a4691');
    });
    $('.ico-bdata').mouseout(function () {
        $('.ico-bdata').css('background-color', '#5597d4');
    });

});




//<!-- facebook -->
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//<!-- Fin facebook -->



//<!-- menu -->
$(document).ready(function () {
    $(".dropdown").hover(
            function () {
                //$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true).slideDown("100");
                $(this).toggleClass('open');
            },
            function () {
                //$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true).slideUp("100");
                $(this).toggleClass('open');
            }
    );
    
    $(".dropdown").click(
            function () {
                //$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true).slideDown("100");
                $(this).toggleClass('open');
            },
            function () {
                //$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true).slideUp("100");
                $(this).toggleClass('open');
            }
    );
});
//<!-- Fin menu -->