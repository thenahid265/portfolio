$(function () {
    // counter part by js
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // type part by js
    var typed = new Typed('.type', {
        strings: [
            'Web Designer.',
            'Freelancer.',
            'Web Developer.'],
        typeSpeed: 100,
        loop: true
    });

    // particles part by js
    particlesJS.load('particles-js', 'assets/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    //back to top part by js
    $(".back_to_top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });

    // wow part by js

    new WOW().init();

    // progressbar by js
    $('.jqueryscript').rProgressbar({
        percentage: 90,
        fillBackgroundColor: 'red',
        backgroundColor: 'rgb(64, 224, 108)',
        borderRadius: '10px',
        height: '15px',
        width: '100%',
        duration: 3000
    });
    $('.jquey').rProgressbar({
        percentage: 80,
        fillBackgroundColor: 'red',
        backgroundColor: 'rgb(64, 224, 108)',
        borderRadius: '10px',
        height: '15px',
        width: '100%',
        duration: 3000
    });
    $('.bootstrap').rProgressbar({
        percentage: 70,
        fillBackgroundColor: 'red',
        backgroundColor: 'rgb(64, 224, 108)',
        borderRadius: '10px',
        height: '15px',
        width: '100%',
        duration: 3000
    });
    $('.javascript').rProgressbar({
        percentage: 50,
        fillBackgroundColor: 'red',
        backgroundColor: 'rgb(64, 224, 108)',
        borderRadius: '10px',
        height: '15px',
        width: '100%',
        duration: 3000
    });
});

