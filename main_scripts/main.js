$(function () {
    $('.open-menu').click(function (){
        $('.hbl').toggleClass('showMenu')
    });
});


$('#s_email').click((e) => {
    e.preventDefault();
    console.log($('form#justEmail').serializeArray());
    const email = $('form#justEmail').serializeArray()[0].value;
    alert(email);
    console.log(navigator.userAgent);
});
