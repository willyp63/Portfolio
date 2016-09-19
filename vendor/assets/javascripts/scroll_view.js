$.fn.scrollView = function (options, complete) {
    defaultOptions = {duration: 1000, offset: 0};
    for (let optionName in options) { defaultOptions[optionName] = options[optionName]; }
    return this.each(function () {
        $('html, body').stop().animate({
            scrollTop: $(this).offset().top + defaultOptions.offset
        }, defaultOptions.duration, complete);
    });
};
