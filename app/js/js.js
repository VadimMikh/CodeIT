$(document).ready(function() {

    // Slider 
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      speed: 600,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      pauseOnHover: false
    });

    // Sidebar-accordion
    $('.sidemenu-item').on('click', function(event) {
        event.preventDefault();
        if($(this).next('.sub-sidemenu').length) {
            $(this).closest('.sidemenu').find('.sub-sidemenu').not($(this).next('.sub-sidemenu')).slideUp(400);
            $(this).next('.sub-sidemenu').slideToggle(400);
        }
    });
    if (window.innerWidth <= 768) {
        $('.sub-sidemenu').hide();
    }

    //Fancybox popup
    $(".feedback").fancybox({
        openEffect: 'fade',
        openSpeed: 600
    });

    // Form validation 
    $('.feed').find('input[type="submit"]').click(function() {
        var inpEmail = $('.feed').find('input[name="email"]'),
            inpTel = $('.feed').find('input[name="phone"]'),
            inpName = $('.feed').find('input[name="name"]');
        if(!/.+@.+\..+/i.test(inpEmail.val())) {
            inpEmail.addClass('error').val('').attr('placeholder', 'Введите правильный Email');
        } 
        if(!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(inpTel.val())) {
            inpTel.addClass('error').val('').attr('placeholder', 'Введите правильный номер');
        }
        if(inpName.val() === "") {
            inpName.addClass('error').val('').attr('placeholder', 'Введите Ваше имя');
        }
        if (!/.+@.+\..+/i.test(inpEmail.val()) || !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(inpName.val()) || inpTel.val() == '') {
            return false;
        }
        return true;
    });
    $('input[name]').on('focus',  function() {
        $(this).removeClass('error').removeAttr('placeholder');
    });

    $('.open_menu').on('click', function(event) {
        event.preventDefault();
        $('html').addClass('menu-opned');
    });
    $('.close_menu').on('click', function(event) {
        event.preventDefault();
        $('html').removeClass('menu-opned');
    });
});