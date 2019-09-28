$(document).ready(function () {
    $('.carousel-section').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

function lightBox(img) {
    var imgpath = '/Tinchi-test/assets/images/' + img;
    console.log(imgpath)
    $('#light-box-image').attr('src', imgpath)
    $('.light-box').addClass('open')
}

$(document).ready(function () {
    $('.close').click(function () {
        $('.light-box').removeClass('open');

    })
})

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}