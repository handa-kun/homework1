//hamburger-btn
$(function () {
    $('.open-menu').click(function (){
        $('.hbl').toggleClass('showMenu')
    });
});

//validate 
const re = new RegExp('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$');

function validateEmail(email) {
    return re.test(email);
}

$('#s_email').click((e) => {
    console.log(navigator.userAgent);
    console.log($('form#justEmail').serializeArray());
    const email = $('form#justEmail').serializeArray()[0].value;
    console.log(validateEmail(email));
    if (validateEmail(email)) {
       alert(email);
    } else {
        alert('Try again!');
    }
    e.preventDefault();
    e.target.reset();
});


$('#full-form').click((e) => {
    console.log(navigator.userAgent);
    console.log($('form#fForm').serializeArray());
    const login = $('form#fForm').serializeArray()[0].value;
    const email = $('form#fForm').serializeArray()[1].value;
    const text = $('form#fForm').serializeArray()[2].value;
    console.log(validateEmail(email));
    if (validateEmail(email)) {
        alert(`${login}\n${email}\n${text}`);
    } else {
        alert('Try again!');
    }
    e.preventDefault();
    e.target.reset();
});

