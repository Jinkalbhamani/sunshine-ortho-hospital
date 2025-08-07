const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });


  document.querySelectorAll('.question').forEach(button => {
    button.addEventListener('click', () => {
      const Item = button.parentElement;
      Item.classList.toggle('active');
    });
  });