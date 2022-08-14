const annabelle = document.querySelector('.buy1');
let precoProduto = 100;
let precoParcelado = precoProduto;
let parcelaParseado = 1;

function calcular(precoProduto, numParcelas) {
  if (numParcelas === 0 || numParcelas === 1) {
    precoParcelado = precoProduto;
    alert(
      `Tudo bem! Você pagará uma unica parcela de $ ${precoParcelado} reais`,
    );
  } else if (numParcelas >= 2 && numParcelas <= 5) {
    precoParcelado = precoProduto / parcelaParseado;
    alert(
      `Tudo bem! Você pagará duas parcelas sem juros de $ ${precoParcelado} reais cada`,
    );
  } else if (numParcelas >= 6 && numParcelas <= 10) {
    precoParcelado = precoProduto / parcelaParseado;
    precoParcelado = precoParcelado + precoParcelado * 0.1;
    alert(
      `Tudo bem! Você pagará seis parcelas com juros de 10% totalizando o valor de $ ${precoParcelado} reais cada parcela`,
    );
  } else {
    erro();
    return;
  }
}

function addToCart() {
  if (annabelle) {
    alert(
      'O item ANNABELLE adicionado ao carrinho. Você vai ficar mais linda com essa roupa!',
    );
    calcularParcela();
  }
}

function calcularParcela() {
  let parcela = prompt(
    'Você pode parcelar de 0 a 5 parcelas sem juros ou com acréscimo de 10% de juros de 6 a 10 parcelas ',
  );
  if (parcela != null) {
    parcelaParseado = Number(parcela);
    calcular(precoProduto, parcelaParseado);
  } else {
    erro();
    return;
  }
}

function erro() {
  alert('Uh oh! Algo deu errado. Tente novamente!');
}
