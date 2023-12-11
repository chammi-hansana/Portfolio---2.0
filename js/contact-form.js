(function ($) {
    'use strict';
   
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response.text);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // Fail function
    function fail_func(error) {
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text(error.text);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }

    form.submit(function (e) {
        e.preventDefault();

        // Get form data
        form_data = {
            name: form.find('[name="name"]').val(),
            email: form.find('[name="email"]').val(),
            subject: form.find('[name="subject"]').val(),
            message: form.find('[name="message"]').val(),
        };

        // Send email using EmailJS
        emailjs.send('service_h8wd9da', 'template_kvar5ht', form_data)
            .then(done_func, fail_func);
            
    });

})(jQuery);
