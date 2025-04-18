

const infiniteGallery = new Swiper('.infinite-gallery', {
    slidesPerView: 'auto',
    loop: true,
    speed: 1200,
    allowTouchMove: false,
    autoplay: {
        delay: 2400,
    },
});




const verticalVideoSlider = new Swiper('.vertical-video-slider', {
    slidesPerView: 'auto',
    speed: 800,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 1,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const beforeAfterSlider = new Swiper('.before-after-slider', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 40,
    noSwipingClass: 'twentytwenty-handle',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 1,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // on: {
    //     slideChangeTransitionEnd() {
    //         initTwentytwenty()
    //     }
    // }
});




Fancybox.bind("[data-fancybox]", {
    // Your custom options
});



function initTwentytwenty() {
    $(function () {
        $(".images-container").twentytwenty(
            {
                no_overlay: true, //Do not show the overlay with before and after
            }
        );
    });
};
initTwentytwenty();

