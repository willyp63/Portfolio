$.fn.scrollView = function (duration) {
    return this.each(function () {
        $('html, body').stop().animate({
            scrollTop: $(this).offset().top
        }, duration);
    });
};
