var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          390: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        },
      });