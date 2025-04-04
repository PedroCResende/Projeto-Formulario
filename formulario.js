// Função para verificar se o valor contém apenas letras e espaços (validação para o campo Nome)
function isValidName(string) {
  for (let index = 0; index < string.length; index++) {
    let char = string[index];

    if (
      !(
        (char >= "A" && char <= "Z") ||
        (char >= "a" && char <= "z") ||
        char === " "
      )
    ) {
      return false;
    }
  }

  return true;
}

// Função para validar o CPF (11 digitos numéricos)

function isValidCpf(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

// Função para validar o telefone (11 digitos numéricos)

function isValidPhone(phone) {
  return phone.length === 11 && !isNaN(phone);
}
// Função para validar o CEP (8 digitos numéricos)
function isValidCEP(cep) {
  return cep.length === 8 && !isNaN(cep);
}

// Função para validar o estado (2 digitos e letra maiúscula)

function isValidState(state) {
  return (
    state.length === 2 &&
    state[0] >= "A" &&
    state[0] <= "Z" &&
    state[1] >= "A" &&
    state[1] <= "Z"
  );
}

// Função para realizar validações
function validarEGuardarFormulario(evento) {
  evento.preventDefault();
}
