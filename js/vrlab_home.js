//*play video when in-view*//
$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('video').not("[autoplay='autoplay']");
    var tolerancePixel = $(window).height() * 0.5;

    function checkMedia() {
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        //if ($(window).scrollTop() > $(window).height() - tolerancePixel) {
        media.each(function(index, el) {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if (scrollTop < yBottomMedia && scrollBottom > yTopMedia) {
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });
    }
    $(document).on('scroll', checkMedia);
    $(".modal").on('hidden.bs.modal', checkMedia);
});

//*pause video when FULL VIDEO BUTTON is clicked*//
$('.btn-video').click(function() {
    $('video').each(function() {
        $(this).get(0).pause();
    });
})
//*pause video in the modals when it is closed*//
$(".modal").on('hidden.bs.modal', function(e) {
    $(this).find('iframe').attr("src", $(this).find('iframe').attr("src"));
});