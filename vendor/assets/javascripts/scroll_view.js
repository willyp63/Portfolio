$.fn.scrollView = function (options, complete) {
    defaultOptions = {duration: 1000, offset: 0};
    for (var option in options) { defaultOptions[option] = options[option]; }
    return this.each(function () {
        $('html, body').stop().animate({
            scrollTop: $(this).offset().top + defaultOptions.offset
        }, defaultOptions.duration, complete);
    });
};
