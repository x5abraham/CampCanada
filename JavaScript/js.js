$(document).ready(function(){
    $(".open1").click(function(){
        $(".closed1").slideToggle();
    });
});

$(document).ready(function(){
    $(".open2").click(function(){
        $(".closed2").slideToggle();
    });
});

$(document).ready(function(){
    $(".open3").click(function(){
        $(".closed3").slideToggle();
    });
});

$(document).ready(function(){
    $(".open4").click(function(){
        $(".closed4").slideToggle();
    });
});

$(document).ready(function(){
    $(".open5").click(function(){
        $(".closed5").slideToggle();
    });
});

$(document).ready(function(){
    $(".open6").click(function(){
        $(".closed6").slideToggle();
    });
});

$(document).ready(function(){
    $(".open7").click(function(){
        $(".closed7").slideToggle();
    });
});

$(document).ready(function(){
    $(".open8").click(function(){
        $(".closed8").slideToggle();
    });
});

var box = $('.greybox');
box.on('click', function(){
    box.toggleClass('greybox-change');
    if (box.hasClass('greybox-change'))
        console.log(".greybox");
    else
        console.log(".greybox");

});

var box = $('.redbox');
box.on('click', function(){
    box.toggleClass('redbox-change');
    if (box.hasClass('redbox-change'))
        console.log(".redbox");
    else
        console.log(".redbox");

});


$("a").click(function() {
    $('html,body').animate({
        scrollTop: $(".reddiv").offset().top},
        'slow');
});
