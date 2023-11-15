/* Js do HEADER */

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 1) { // Quando você rolar mais de 100 pixels
      header.classList.add("header-fixed"); // Adicione a classe para tornar o cabeçalho fixo
    } else {
      header.classList.remove("header-fixed"); // Remova a classe para retornar ao posicionamento normal
    }
  });
  

  /* Carrinho */

document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-items li');
    const totalPriceElement = document.getElementById('total-price');

    // Calcular o preço total inicial
    let totalPrice = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').innerText.replace('$', ''));
        totalPrice += price;
    });

    // Atualizar o preço total na página
    updateTotalPrice();

    // Adicionar evento de clique para remover itens
    cartItems.forEach(item => {
        const removeButton = item.querySelector('.remove-item');
        const price = parseFloat(item.querySelector('.item-price').innerText.replace('$', ''));

        removeButton.addEventListener('click', function () {
            item.remove();
            totalPrice -= price;
            updateTotalPrice();
        });
    });

    function updateTotalPrice() {
        totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
    }
});





