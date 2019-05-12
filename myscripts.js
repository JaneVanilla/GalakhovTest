$(document).ready(function() {
    $('form[id="second_form"]').validate({
        rules: {
            fname: 'required',
            user_email: {
                required: true,
                email: true,
            },
            user_phone: {
                required: true,
                number: true,
            }
        },
        messages: {
            fname: 'This field is required',
            user_email: 'Enter a valid email',
            user_phone: 'Enter a valid phone'
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

})


