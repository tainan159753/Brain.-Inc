/* Js do HEADER */

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 1) { // Quando você rolar mais de 100 pixels
      header.classList.add("header-fixed"); // Adicione a classe para tornar o cabeçalho fixo
    } else {
      header.classList.remove("header-fixed"); // Remova a classe para retornar ao posicionamento normal
    }
  });
  
  /* fotos de capa slide */

    let currentSlide = 0;
  let isPaused = false;
  const slides = document.querySelectorAll('.fotomas img');
  const totalSlides = slides.length;
  let intervalId;
  
  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }
  
  function nextSlide() {
    if (!isPaused) {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  }
  
  function prevSlide() {
    if (!isPaused) {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }
  }
  
  intervalId = setInterval(nextSlide, 3500);
  
  document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);
    // Inicia automaticamente o slide ao carregar a página
    nextSlide();
  });

 /* Teste */

  document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        perView: 3, // Ajuste o número de imagens a serem exibidas em telas maiores
        breakpoints: {
            768: {
                perView: 1 // Número de imagens a serem exibidas em telas menores
            }
        }
    }).mount();
});

