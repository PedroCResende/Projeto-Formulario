// Função para alternar a exibição do formulário de desconto
function toggleDiscount() {
  const discountBody = document.getElementById("apply-discount-body");
  const icon = document.getElementById("toggle-icon");

  // Alternar a visibilidade do formulário de desconto
  if (
    discountBody.style.display === "none" ||
    discountBody.style.display === ""
  ) {
    discountBody.style.display = "block";
    icon.classList.add("bxs-chevron-up");
    icon.classList.remove("bxs-chevron-down");
  } else {
    discountBody.style.display = "none";
    icon.classList.add("bxs-chevron-down");
    icon.classList.remove("bxs-chevron-up");
  }
}

const discountCupons = {
  DESCONTO10: 0.1, // 10%
  DESCONTO20: 0.2,
  DESCONTO50: 0.5,
};

// Função para aplicar o desconto
function applyDiscount() {
  const discountCode = document
    .getElementById("discount-code")
    .value.trim()
    .toUpperCase();
  const discountMessageElement = document.getElementById("discount-message"); // Elemento Span da mensagem de desconto

  const totalPriceElement = document.getElementById("total-price");

  const originalPrice = 1200; // Preço original fixo

  // Verificar se o cupom de desconto é válido
  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    const discountedPrice = originalPrice * (1 - discount); // Lógica para aplicar o desconto

    // Atualiza o preço com o desconto
    totalPriceElement.innerText = `Preço Total: R$ ${discountedPrice.toFixed(
      2
    )}`;
    discountMessageElement.innerText = `Desconto de ${discountCode} aplicado com sucesso!`;
    discountMessageElement.style.color = "green";
  } else {
    totalPriceElement.innerText = `Preço Total: R$ ${originalPrice.toFixed(2)}`; // Mostra o preço original se o cupom for inválido
    discountMessageElement.innerText = "Cupom de desconto inválido.";
    discountMessageElement.style.color = "red";
  }

  //armazenar o cupom no localStorage
  localStorage.setItem("discount", discountCode);

  //LImpar o campo Input
  document.getElementById("discount-code").value = "";
}

function checkStoredDiscount() {
  const storedDiscount = localStorage.getItem("discount");
  const discountMessageElement = document.getElementById("discount-message");

  //Verificar se há cupom no localStorage
  if (storedDiscount) {
    //limpar o desconto
    localStorage.removeItem("discount");
  }

  discountMessageElement.innerText = "";
}

window.onload = checkStoredDiscount;
