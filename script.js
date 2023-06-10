window.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = document.querySelector("input[type='text']");
    var emailInput = document.querySelector("input[type='email']");
    var messageInput = document.querySelector("textarea");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Por favor, completa todos los campos del formulario.");
    } else if (!isValidEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
    } else {
      alert("¡Mensaje enviado correctamente!");

      // Limpiar el formulario
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }
  });

  function isValidEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
});
