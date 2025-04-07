// Dados formulário
const formulario = document.getElementById("formulario");

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
function validarEGuardarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim(); // responsável por retirar o espaço no começo e no fim da string
  const cpf = document.getElementById("cpf").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const rua = document.getElementById("rua").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const complemento = document.getElementById("complemento").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();

  // Verificando se todos os campos estão preenchidos
  if (
    !nome ||
    !cpf ||
    !telefone ||
    !cep ||
    !rua ||
    !numero ||
    !complemento ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert("Por favor, preencha todos os campos");
    return; // Interrompe a execução
  }

  if (!isValidName(nome)) {
    alert("O nome deve conter apenas letras e espaços");
    return; // Interrompe a execução
  }
  if (!isValidCpf(cpf)) {
    alert("O CPF deve conter 11 dígitos numéricos");
    return; // Interrompe a execução
  }
  if (!isValidPhone(telefone)) {
    alert("O Telefone deve conter 11 dígitos numéricos");
    return; // Interrompe a execução
  }
  if (!isValidCEP(cep)) {
    alert("O CEP deve conter 8 dígitos numéricos");
    return; // Interrompe a execução
  }
  if (!isValidState(estado)) {
    alert("O Estado deve ser uma sigla de letras maiúsculas");
    return; // Interrompe a execução
  }

  // Se tudo estiver correto, salvar dados no localStorage
  const dadosFormulario = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };

  localStorage.setItem("dadosFormulario", JSON.stringify(dadosFormulario));
  formulario.reset();
  alert("Dados salvos com sucesso!");
}

// Adicionar evento de submissão do formulário
formulario.addEventListener("submit", validarEGuardarFormulario);
