function cadastro() {
  var email = emailInput.value;
  var valid = false;

  for (var i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      valid = true;
      break;
    }
  }

  if (valid) {
    console.log("Email válido.");
  } else {
    console.log("Email inválido. Por favor, insira um email válido.");
  }
}
