var btn = $('#button');


$("#button").mouseenter(function () {
    $(".cardData").css("visibility", "visible")
})

$("#button").mouseout(function () {
    $(".cardData").css("visibility", "hidden")
})
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
