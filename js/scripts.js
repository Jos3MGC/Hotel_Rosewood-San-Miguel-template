$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});

function validateForm() {
    var names = document.getElementById("names").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    if (names === "" || lastName === "" || phone === "" || email === "") {
        handleMessage('error', 'Error', 'Por favor, complete todos los campos.');
        return;
    } else if (!validatePhoneNumber(phone)) {
        handleMessage('error', 'Error', 'Por favor, verifique su número de teléfono.');
        return;
    } else {
        // Aquí puedes realizar acciones adicionales antes de enviar el formulario
        clearForm();
        handleMessage('success', 'Exito', 'Se ha enviado con éxito el formulario.');
    }
}

function validateContactForm() {
    var names = document.getElementById("namesContact").value;
    var package = document.getElementById("package").value;
    var phone = document.getElementById("phoneContact").value;
    var email = document.getElementById("emailContact").value;

    if (names === "" || package === "" || phone === "" || email === "") {
        handleMessage('error', 'Error', 'Por favor, complete todos los campos.');
        return;
    } else if (!validatePhoneNumber(phone)) {
        handleMessage('error', 'Error', 'Por favor, verifique su número de teléfono.');
        return;
    } else {
        // Aquí puedes realizar acciones adicionales antes de enviar el formulario
        clearFormContact();
        handleMessage('success', 'Exito', 'Se ha enviado con éxito el formulario.');
    }
}

function clearForm() {
    document.getElementById("names").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}

function clearFormContact() {
    document.getElementById("namesContact").value = "";
    document.getElementById("package").value = "";
    document.getElementById("phoneContact").value = "";
    document.getElementById("emailContact").value = "";
}

function handleMessage(icon, title, text) {
    Swal.fire({
        icon: `${icon}`,
        title: `${title}`,
        text: `${text}`,
    });
}

function validatePhoneNumber(phoneNumber) {
    // Eliminar espacios en blanco y guiones (si los hay)
    const cleanPhoneNumber = phoneNumber.replace(/\s|-/g, "");

    // Validar si tiene exactamente 10 dígitos
    return /^\d{10}$/.test(cleanPhoneNumber);
}