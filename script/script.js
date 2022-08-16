let tamanhoRUser = '';
let tamanhoSUser = 0;
let annabelleObj = {};
let precoProduto = 0;
let carrinho = [];
console.log(carrinho);

function addToCart(nomeProduto) {
  const tamanhoRoupaUser = getSizeRoupa();
  const tamanhoSapatoUser = getSizeSapato();
  const novoProduto = new Produto(
    nomeProduto,
    tamanhoRoupaUser,
    tamanhoSapatoUser,
  );

  novoProduto.stringificar();

  let produtoEscolhido = nomeProduto.toUpperCase();
  carrinho.push(nomeProduto);
  console.log(carrinho);

  // alert(
  //   `Seu item ${produtoEscolhido} adicionado ao carrinho. Você vai arrasar com essa roupa!`,
  // );
  // calcularParcela();
}

class Produto {
  constructor(nomeProd, tamanhoR, tamanhoS) {
    this.nomeProd = nomeProd;
    if (!PRODUTOS[nomeProd]) {
      console.log('PRODUTO INEXISTENTE. ESCREVE DIREITO!!!');
    }
    this.tipo = PRODUTOS[nomeProd].tipo;
    this.preco = PRODUTOS[nomeProd].preco;
    this.tamanhoR = tamanhoR;
    this.tamanhoS = tamanhoS;
  }

  stringificar() {
    console.log(`O nome do produto eh: ${this.nomeProd} `);
    console.log(`O preco do produto eh: ${this.preco} `);
    console.log(`O tipo do produto eh: ${this.tipo} `);
    console.log(`O tamanho da roupa do user eh: ${this.tamanhoR} `);
    console.log(`O tamanho do sapato do user eh: ${this.tamanhoS} `);
  }
}

function getSizeRoupa() {
  const tamanhoRUser = prompt(
    'Qual o seu tamanho de roupa? PP, P, M, G, GG ou GGG',
  ).toLowerCase();
  return tamanhoRUser;
}
function getSizeSapato() {
  const tamanhoSUser = Number(
    prompt(
      'Digite o número de sapato que você usa. Trabalhamos com os tamanhos do 33 ao 40',
    ),
  );
  return tamanhoSUser;
}

function calcular(precoProduto, numParcelas) {
  if (numParcelas === 0 || numParcelas === 1) {
    const precoParcelado = precoProduto;
    alert(
      `Tudo bem! Você pagará uma unica parcela de $ ${precoParcelado} reais`,
    );
    return precoParcelado;
  } else if (numParcelas >= 2 && numParcelas <= 5) {
    const precoParcelado = (precoProduto / parcelaParseado).toFixed(2);
    alert(
      `Tudo bem! Você pagará duas parcelas sem juros de $ ${precoParcelado} reais cada`,
    );
    return precoParcelado;
  } else if (numParcelas >= 6 && numParcelas <= 10) {
    const precoParcelado = precoProduto / parcelaParseado;
    precoParcelado = (precoParcelado + precoParcelado * 0.1).toFixed(2);
    alert(
      `Tudo bem! Você pagará seis parcelas com juros de 10% totalizando o valor de $ ${precoParcelado} reais cada parcela`,
    );
    return precoParcelado;
  } else {
    erro();
    return;
  }
}

// function calcularParcela() {
//   let parcela = prompt(
//     'Você pode parcelar de 0 a 5 parcelas sem juros ou com acréscimo de 10% de juros de 6 a 10 parcelas ',
//   );
//   if (parcela != null) {
//     parcelaParseado = Number(parcela);
//     calcular(precoProduto, parcelaParseado);
//   } else {
//     erro();
//     return;
//   }
// }

function erro() {
  alert('Uh oh! Algo deu errado. Tente novamente!');
}

//-----------------------------------------------------------------------------------------

// banco de dados:

//-----------------------------------------------------------------------------------------

const PRODUTOS = {
  annabelle: { preco: 30, tipo: 'casual', qdeEstoque: 100 },
  juanee: { preco: 40, tipo: 'casual', qdeEstoque: 200 },
  francis: { preco: 35, tipo: 'casual', qdeEstoque: 100 },
  suzette: { preco: 45, tipo: 'business', qdeEstoque: 50 },
  desiree: { preco: 35, tipo: 'casual', qdeEstoque: 100 },
  marrie: { preco: 50, tipo: 'outing', qdeEstoque: 200 },
};

//-----------------------------------------------------------------------------------------

//carrinho animacao:

//-----------------------------------------------------------------------------------------

let count = 0;
//if add to cart btn clicked
$('.cart-btn').on('click', function () {
  let cart = $('.cart-nav');
  // find the img of that card which button is clicked by user
  let imgtodrag = $(this)
    .parent('.buttons')
    .parent('.content')
    .parent('.card')
    .find('img')
    .eq(0);
  if (imgtodrag) {
    // duplicate the img
    var imgclone = imgtodrag
      .clone()
      .offset({
        top: imgtodrag.offset().top,
        left: imgtodrag.offset().left,
      })
      .css({
        opacity: '0.8',
        position: 'absolute',
        height: '150px',
        width: '150px',
        'z-index': '100',
      })
      .appendTo($('body'))
      .animate(
        {
          top: cart.offset().top + 20,
          left: cart.offset().left + 30,
          width: 75,
          height: 75,
        },
        1000,
        'easeInOutExpo',
      );

    setTimeout(function () {
      count++;
      $('.cart-nav .item-count').text(count);
    }, 1500);

    imgclone.animate(
      {
        width: 0,
        height: 0,
      },
      function () {
        $(this).detach();
      },
    );
  }
});

//-----------------------------------------------------------------------------------------
