function adicionarSacola() {
    var customAlert = document.getElementById("customAlert");
    var alertMessage = document.getElementById("alertMessage");

    // Altera o texto do alerta
    alertMessage.innerHTML = "Adicionado à Sacola!";

    // Exibe o alerta
    customAlert.style.display = "block";

    // Oculta o alerta após alguns segundos (opcional)
    setTimeout(function() {
        customAlert.style.display = "none";
    }, 2000); // Tempo em milissegundos (3 segundos no exemplo)
}
