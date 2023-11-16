/* Js do HEADER */

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 1) { // Quando você rolar mais de 100 pixels
      header.classList.add("header-fixed"); // Adicione a classe para tornar o cabeçalho fixo
    } else {
      header.classList.remove("header-fixed"); // Remova a classe para retornar ao posicionamento normal
    }
  });
  
  