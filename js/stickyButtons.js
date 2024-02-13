$(document).ready(function (e) {
    let scroll_offset = 120;
    $(window).scroll(function () {
        let $this = $(window);
        if ($(".sticky-btn").length) {
            if ($this.scrollTop() > scroll_offset) {
                $(".sticky-btn").addClass("revealed");
            } else {
                $(".sticky-btn").removeClass("revealed");
            }
        }
    });
});
