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
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 1,
    },
    breakpoints: {
        576: {
            spaceBetween: 40
        },
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
});




Fancybox.bind("[data-fancybox]");

function initTwentytwenty() {
    $(function () {
        $(".images-container").twentytwenty(
            {
                no_overlay: true,
            }
        );
    });
};
initTwentytwenty();


$(".show-more-link").on("click", function () {
    $(this).parent().find('.__hidden').slideToggle("slow");
    $(this).addClass('hide');
});



const originsModalSlider = new Swiper('.origins-modal__slider', {
    slidesPerView: 1,
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


const modalTemplate = document.querySelector('.origins-modal');

document.addEventListener('click', (e) => {
    const target = e.target;
    if ((target.closest('.origins-modal') && !target.closest('.origins-modal__content')) || target.closest('[data-close-modal]')) {
        document.querySelector('.origins-modal').classList.remove("show");
        return;
    }

    if (target.closest('.origins-item')) {
        const originId = target.closest('.origins-item').getAttribute('data-origin-id');
        console.log(originId);
        const renderZone = modalTemplate.querySelector('#render-zone');
        $.ajax({
            type: 'POST',
            url: 'someUrl',
            dataType: 'html',
            data: {
                id: originId
            },
            success: function (data) {
                modalTemplate.classList.add('show');
                renderZone.innerHTML = data;
                if (renderZone.querySelector('.origins-modal__slider')) {
                    const originsModalSlider = new Swiper('.origins-modal__slider', {
                        slidesPerView: 1,
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
                }
                modalTemplate.classList.add('show');

            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status, thrownError);

                // Как будет готов аякс, этот код убрать
                modalTemplate.classList.add('show');
            },
        });
    }
})