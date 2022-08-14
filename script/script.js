let produtoEscolhido = '';
let tamanhoRUser = '';
let tamanhoSUser = 0;
let annabelleObj = {};
let precoProduto = 0;
let precoParcelado = precoProduto;
let parcelaParseado = 1;

function addToCart(nomeProduto) {
  if (nomeProduto === 'annabelle') {
    getSizes();
    const annabelleObj = new Produto(
      'anabelle',
      30,
      tamanhoRUser,
      tamanhoSUser,
    );
    annabelleObj.setarPrecoProduto(30);
    produtoEscolhido = annabelleObj.nomeProd.toUpperCase();
  } else if (nomeProduto === 'juanee') {
    getSizes();
    const juaneeObj = new Produto('juanee', 40, tamanhoRUser, tamanhoSUser);
    juaneeObj.setarPrecoProduto(juaneeObj.preco);
    produtoEscolhido = juaneeObj.nomeProd.toUpperCase();
  }
  alert(
    `Seu item ${produtoEscolhido} adicionado ao carrinho. Você vai arrasar com essa roupa!`,
  );
  calcularParcela();
}

class Produto {
  constructor(nomeProd, preco, tamanhoR, tamanhoS) {
    this.nomeProd = nomeProd;
    this.preco = preco;
    this.tamanhoR = tamanhoR;
    this.tamanhoS = tamanhoS;
  }

  setarPrecoProduto(preco) {
    this.preco = preco;
    precoProduto = preco;
    console.log('Preco do produto agoa eh' + precoProduto);
  }
}

function getSizes() {
  tamanhoRUser = prompt(
    'Qual o seu tamanho de roupa? PP, P, M, G, GG ou GGG',
  ).toLowerCase();
  tamanhoSUser = Number(
    prompt(
      'Digite o número de sapato que você usa. Trabalhamos com os tamanhos do 33 ao 40',
    ),
  );
}

function calcular(precoProduto, numParcelas) {
  if (numParcelas === 0 || numParcelas === 1) {
    precoParcelado = precoProduto;
    alert(
      `Tudo bem! Você pagará uma unica parcela de $ ${precoParcelado} reais`,
    );
  } else if (numParcelas >= 2 && numParcelas <= 5) {
    precoParcelado = (precoProduto / parcelaParseado).toFixed(2);
    alert(
      `Tudo bem! Você pagará duas parcelas sem juros de $ ${precoParcelado} reais cada`,
    );
  } else if (numParcelas >= 6 && numParcelas <= 10) {
    precoParcelado = precoProduto / parcelaParseado;
    precoParcelado = (precoParcelado + precoParcelado * 0.1).toFixed(2);
    alert(
      `Tudo bem! Você pagará seis parcelas com juros de 10% totalizando o valor de $ ${precoParcelado} reais cada parcela`,
    );
  } else {
    erro();
    return;
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
