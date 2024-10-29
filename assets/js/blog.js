$(document).ready(function() {
    // Animate post cards on scroll
    $(window).scroll(function() {
        $('.post-card').each(function() {
            const postPosition = $(this).offset().top;
            const scrollPosition = $(window).scrollTop() + $(window).height();
            
            if (scrollPosition > postPosition) {
                $(this).css('opacity', '1');
            }
        });
    });

    // Smooth scroll
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});