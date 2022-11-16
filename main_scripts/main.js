/*$(function () {
    $('.open-menu').click(function () {
        $('.hbl').toggleClass('.shown-menu')
    })
}); */




//validate_form 

const re = new RegExp('/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/');

function validateEmail(email) {
    return re.test(email);
};

$('#s_email').click((e) => {
    e.preventDefault();
    const email = $('form#justEmail').serializeArray()[0].value;
    alert(validateEmail(email));
});

/*$('button.btn').click((e) => {
    e.preventDefault();
    console.log($('form#form').serializeArray());
    const login = $('form#form').serializeArray()[0].value;
    console.log(validateLogin(login));
    if (validateLogin(login)) {
       $('p.result').html('All right!')
    } else {
        $('p.result').html('Try again.')
    }
});*/