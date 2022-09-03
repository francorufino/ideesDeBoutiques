let carrinho = [];
let tamanhoRoupaUser;
let tamanhoSapatoUser;
let wrapper;
let shoppingCart = localStorage.getItem('counter');
let shoppingCartNum = Number(shoppingCart);
let count = shoppingCartNum;
console.log(shoppingCartNum);

console.log('inicio carrinho' + shoppingCartNum);

function addToCart(nomeProduto) {
  const novoProduto = new Produto(
    nomeProduto,
    tamanhoRoupaUser,
    tamanhoSapatoUser,
  );
  novoProduto.stringificar();

  carrinho.push(novoProduto);
  console.log(novoProduto);
  console.log(carrinho);

  return novoProduto;
}

class Produto {
  constructor(nomeProd, tamanhoR, tamanhoS) {
    this.nomeProd = nomeProd;
    if (!PRODUTOS[nomeProd]) {
      console.log('PRODUTO INEXISTENTE OU MISSPELLED!!!');
    }
    this.tipo = PRODUTOS[nomeProd].tipo;
    this.preco = PRODUTOS[nomeProd].preco;
    this.tamanhoR = tamanhoR;
    this.tamanhoS = tamanhoS;
    this.imgFile = PRODUTOS[nomeProd].imgFile;
  }

  stringificar() {
    console.log(`O nome do produto eh: ${this.nomeProd} `);
    console.log(`O preco do produto eh: ${this.preco} `);
    console.log(`O tipo do produto eh: ${this.tipo} `);
    console.log(`O tamanho da roupa do user eh: ${this.tamanhoR} `);
    console.log(`O tamanho do sapato do user eh: ${this.tamanhoS} `);
    console.log(`O arquivo da foto eh: ${this.imgFile} `);
  }
}

//-----------------------------------------------------------------------------------------

// banco de dados:

//-----------------------------------------------------------------------------------------

var PRODUTOS = {
  pamela: {
    preco: 25,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb.jpeg',
  },

  rachel: {
    preco: 28,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb1.jpeg',
  },

  paris: {
    preco: 27,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb6.jpeg',
  },

  erika: {
    preco: 23,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb9.jpeg',
  },

  emilia: {
    preco: 20,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb11.jpeg',
  },

  rosanna: {
    preco: 29,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb12.jpeg',
  },

  rita: {
    preco: 25,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb14.jpeg',
  },

  jessica: {
    preco: 23,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb17.jpeg',
  },

  noelly: {
    preco: 22,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb18.jpeg',
  },

  nicole: {
    preco: 20,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb19.jpeg',
  },

  marina: {
    preco: 28,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb20.jpeg',
  },

  berenice: {
    preco: 27,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb21.jpeg',
  },

  anamar: {
    preco: 23,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb22.jpeg',
  },

  amanda: {
    preco: 29,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb23.jpeg',
  },

  aline: {
    preco: 28,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb24.jpeg',
  },

  gloria: {
    preco: 27,
    tipo: 'beach',
    qdeEstoque: 200,
    imgFile: './images/bb910.jpeg',
  },

  marcy: {
    preco: 39,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/c4.jpeg',
  },

  juanee: {
    preco: 50,
    tipo: 'business',
    qdeEstoque: 100,
    imgFile: './images/business.jpeg',
  },
  louise: {
    preco: 40,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/c2.jpeg',
  },
  francis: {
    preco: 35,
    tipo: 'casual',
    qdeEstoque: 100,
    imgFile: './images/casual3.jpeg',
  },
  annabelle: {
    preco: 50,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/c7.jpeg',
  },
  suzette: {
    preco: 45,
    tipo: 'casual',
    qdeEstoque: 50,
    imgFile: './images/casual4.jpeg',
  },
  desiree: {
    preco: 35,
    tipo: 'casual',
    qdeEstoque: 100,
    imgFile: './images/casual5.jpeg',
  },
  isabelle: {
    preco: 31,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/c3.jpeg',
  },

  sabrina: {
    preco: 32,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/casual50.jpeg',
  },
  andrea: {
    preco: 28,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/c14.jpeg',
  },

  josefinne: {
    preco: 50,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: '/images/classic7.jpeg',
  },
  emilly: {
    preco: 41,
    tipo: 'party',
    qdeEstoque: 200,
    imgFile: './images/f1.jpeg',
  },
  mirella: {
    preco: 29,
    tipo: 'outing',
    qdeEstoque: 200,
    imgFile: './images/casual54.jpeg',
  },
  lis: {
    preco: 50,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/casual51.jpeg',
  },
  leone: {
    preco: 41,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/c5.jpeg',
  },
  lorrane: {
    preco: 40,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/c6.jpeg',
  },
  jaqueline: {
    preco: 32,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/casual52.jpeg',
  },
  blanche: {
    preco: 50,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/c9.jpeg',
  },
  bruna: {
    preco: 53,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/c11.jpeg',
  },
  natalie: {
    preco: 37,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/casual55.jpeg',
  },

  samantha: {
    preco: 59,
    tipo: 'outing',
    qdeEstoque: 200,
    imgFile: './images/c10.jpeg',
  },
  gia: {
    preco: 22,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/casual56.jpeg',
  },
  sophie: {
    preco: 39,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic2.jpeg',
  },
  florence: {
    preco: 41,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic3.jpeg',
  },
  anne: {
    preco: 48,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic4.jpeg',
  },
  dominique: {
    preco: 42,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic5.jpeg',
  },
  charlotte: {
    preco: 50,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic6.jpeg',
  },
  annelise: {
    preco: 38,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic8.jpeg',
  },

  violetta: {
    preco: 55,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic10.jpeg',
  },
  aime: {
    preco: 43,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic11.jpeg',
  },

  marrie: {
    preco: 47,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic13.jpeg',
  },

  fernanda: {
    preco: 58,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic15.jpeg',
  },

  gregoria: {
    preco: 52,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/classic50.jpeg',
  },
  alexa: {
    preco: 28,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/color11.jpeg',
  },
  ivonne: {
    preco: 21,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/colors2.jpeg',
  },
  tyssa: {
    preco: 19,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/colors3.jpeg',
  },
  yolanne: {
    preco: 24,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/colors10.jpeg',
  },
  tressa: {
    preco: 38,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/colors12.jpeg',
  },
  ruth: {
    preco: 50,
    tipo: 'outing',
    qdeEstoque: 200,
    imgFile: './images/colors20.jpeg',
  },
  paulinne: {
    preco: 28,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/colors50.jpeg',
  },

  dorothy: {
    preco: 68,
    tipo: 'party',
    qdeEstoque: 200,
    imgFile: './images/f14.png',
  },
  monique: {
    preco: 32,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: './images/colors7.jpeg',
  },
  olivia: {
    preco: 70,
    tipo: 'gala',
    qdeEstoque: 200,
    imgFile: './images/g1.jpeg',
  },
  selenna: {
    preco: 68,
    tipo: 'gala',
    qdeEstoque: 200,
    imgFile: './images/f15.jpeg',
  },
  roxanna: {
    preco: 50,
    tipo: 'outing',
    qdeEstoque: 200,
    imgFile: './images/f16.jpeg',
  },
  amelia: {
    preco: 63,
    tipo: 'gala',
    qdeEstoque: 200,
    imgFile: './images/g2.jpeg',
  },
  teresa: {
    preco: 18,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gym1.jpeg',
  },
  eva: {
    preco: 19,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gym2.jpeg',
  },
  paige: {
    preco: 21,
    tipo: 'relaxed',
    qdeEstoque: 200,
    imgFile: './images/relaxed.jpeg',
  },
  angelinne: {
    preco: 23,
    tipo: 'relaxed',
    qdeEstoque: 200,
    imgFile: './images/gym3.jpeg',
  },

  berta: {
    preco: 78,
    tipo: 'gala',
    qdeEstoque: 200,
    imgFile: './images/g3.jpeg',
  },

  milanni: {
    preco: 25,
    tipo: 'relaxed',
    qdeEstoque: 200,
    imgFile: './images/relaxed1.jpeg',
  },

  mia: {
    preco: 67,
    tipo: 'gala',
    qdeEstoque: 200,
    imgFile: './images/g5.jpeg',
  },

  harper: {
    preco: 77,
    tipo: 'gala',
    qdeEstoque: 200,
    imgFile: './images/g6.jpeg',
  },

  abigail: {
    preco: 55,
    tipo: 'party',
    qdeEstoque: 200,
    imgFile: './images/g8.jpeg',
  },

  rebecca: {
    preco: 27,
    tipo: 'relaxed',
    qdeEstoque: 200,
    imgFile: './images/relaxed2.jpeg',
  },

  ariel: {
    preco: 79,
    tipo: 'gala',
    qdeEstoque: 200,
    imgFile: './images/g11.jpeg',
  },

  chloe: {
    preco: 55,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n1.jpeg',
  },

  zilda: {
    preco: 23,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint.jpeg',
  },

  milla: {
    preco: 51,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n2.jpeg',
  },

  nora: {
    preco: 52,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n3.jpeg',
  },

  maddison: {
    preco: 56,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n5.jpeg',
  },

  nova: {
    preco: 50,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n6.jpeg',
  },

  dora: {
    preco: 23,
    tipo: 'relaxed',
    qdeEstoque: 200,
    imgFile: './images/gym3.jpeg',
  },

  aurora: {
    preco: 50,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n8.jpeg',
  },

  rilley: {
    preco: 51,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n9.jpeg',
  },

  chiara: {
    preco: 54,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n10.jpeg',
  },

  willie: {
    preco: 59,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n11.jpeg',
  },

  hanna: {
    preco: 58,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n12.jpeg',
  },

  amarilles: {
    preco: 54,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n13.jpeg',
  },

  naomi: {
    preco: 59,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n14.jpeg',
  },

  maya: {
    preco: 60,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n15.jpeg',
  },

  brooklyn: {
    preco: 53,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n16.jpeg',
  },

  alice: {
    preco: 58,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n17.jpeg',
  },

  aubrey: {
    preco: 57,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n18.jpeg',
  },

  autumn: {
    preco: 50,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n19.jpeg',
  },

  norelin: {
    preco: 15,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint1.jpeg',
  },

  winter: {
    preco: 19,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint10.jpeg',
  },

  ellenna: {
    preco: 20,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint11.jpeg',
  },

  summer: {
    preco: 19,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint15.jpeg',
  },

  brenda: {
    preco: 17,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint16.jpeg',
  },

  jenniffer: {
    preco: 18,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint3.jpeg',
  },

  elliott: {
    preco: 17,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint4.jpeg',
  },

  zuleika: {
    preco: 19,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint5.jpeg',
  },

  flora: {
    preco: 16,
    tipo: 'gym',
    qdeEstoque: 200,
    imgFile: './images/gympint6.png',
  },

  quinn: {
    preco: 58,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/n21.jpeg',
  },

  serennetty: {
    preco: 60,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n22.jpeg',
  },

  cora: {
    preco: 55,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n23.jpeg',
  },

  piper: {
    preco: 50,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n24.jpeg',
  },

  peyton: {
    preco: 54,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n25.jpeg',
  },

  rose: {
    preco: 51,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n27.jpeg',
  },

  pennelope: {
    preco: 62,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n28.jpeg',
  },

  brielle: {
    preco: 58,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n29.jpeg',
  },

  remi: {
    preco: 54,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n30.jpeg',
  },

  mackenzie: {
    preco: 56,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n31.jpeg',
  },

  charlie: {
    preco: 52,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n32.jpeg',
  },

  daisy: {
    preco: 52,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n33.jpeg',
  },

  yollie: {
    preco: 53,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n34.jpeg',
  },

  reese: {
    preco: 55,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n35.jpeg',
  },

  sienna: {
    preco: 56,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n36.jpeg',
  },

  keylanny: {
    preco: 59,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n37.jpeg',
  },

  freya: {
    preco: 49,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/n38.jpeg',
  },

  gennevieve: {
    preco: 58,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n39.jpeg',
  },

  ember: {
    preco: 59,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n41.jpeg',
  },

  catalina: {
    preco: 57,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/n42.jpeg',
  },

  ariella: {
    preco: 48,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/n43.jpeg',
  },

  millie: {
    preco: 42,
    tipo: 'classic',
    qdeEstoque: 200,
    imgFile: './images/n44.jpeg',
  },

  june: {
    preco: 53,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n45.jpeg',
  },

  julliet: {
    preco: 52,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n46.jpeg',
  },

  molly: {
    preco: 51,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n48.jpeg',
  },

  margot: {
    preco: 50,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n60.jpeg',
  },

  london: {
    preco: 50,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n64.jpeg',
  },

  zara: {
    preco: 52,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n65.jpeg',
  },

  leila: {
    preco: 50,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n66.jpeg',
  },

  ellise: {
    preco: 56,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n69.jpeg',
  },

  lila: {
    preco: 59,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n70.jpeg',
  },

  alanna: {
    preco: 47,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n71.jpeg',
  },

  grettha: {
    preco: 57,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n75.jpeg',
  },

  adelaide: {
    preco: 53,
    tipo: 'business',
    qdeEstoque: 200,
    imgFile: './images/n81.jpeg',
  },
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CRIANDO OS CARDS VIA DOM E DO TAMANHO DO BANCO DE DADOS

for (const obj in PRODUTOS) {
  console.log(
    `${obj}: ${PRODUTOS[obj].preco}, ${PRODUTOS[obj].tipo}, ${PRODUTOS[obj].qdeEstoque}, ${PRODUTOS[obj].imgFile}`,
  );

  const elemPai = document.getElementById('wrapper');

  const divCardContainer = document.createElement('div');
  divCardContainer.setAttribute('id', 'card-id');
  divCardContainer.classList.add('card');
  divCardContainer.classList.add('image');
  divCardContainer.setAttribute('data-name', `${PRODUTOS[obj].tipo}`);

  const imgTag = document.createElement('img');
  imgTag.setAttribute('id', 'img-id');
  imgTag.classList.add('img');
  imgTag.src = `${PRODUTOS[obj].imgFile}`;

  const divContainerDescProduto = document.createElement('div');
  divContainerDescProduto.setAttribute('id', 'cont-desc-prod-id');
  divContainerDescProduto.classList.add('content');
  divContainerDescProduto.classList.add(`${obj}`);

  const divRow = document.createElement('div');
  divRow.setAttribute('id', 'row-id');
  divRow.classList.add('row');

  const divDetailsWrapper = document.createElement('div');
  divDetailsWrapper.setAttribute('id', 'details-id');
  divDetailsWrapper.classList.add('details');

  const spanNomeProduto = document.createElement('span');
  spanNomeProduto.setAttribute('id', `${obj}`);
  spanNomeProduto.classList.add(`${obj}`);
  spanNomeProduto.textContent = `${obj}`.charAt(0).toUpperCase() + obj.slice(1);

  const paragTipoProduto = document.createElement('p');
  paragTipoProduto.setAttribute('id', 'pTipoP-id');
  paragTipoProduto.classList.add('tipoProduto');
  paragTipoProduto.textContent = `${PRODUTOS[obj].tipo}`;

  const divPrecoProd = document.createElement('div');
  divPrecoProd.setAttribute('id', 'price');
  divPrecoProd.classList.add('price');
  divPrecoProd.textContent = `$${PRODUTOS[obj].preco}`;

  const divContainerButtons = document.createElement('div');
  divContainerButtons.setAttribute('id', 'div-cont-btns-id');
  divContainerButtons.classList.add('buttons');

  const btnBuyNow = document.createElement('button');
  btnBuyNow.setAttribute('id', 'buy-now-id');
  btnBuyNow.classList.add('btnBuyNow');
  btnBuyNow.textContent = 'BUY NOW';

  const btnAddToCart = document.createElement('button');
  btnAddToCart.setAttribute('id', 'add-to-cart-id');
  btnAddToCart.classList.add('cart-btn');
  btnAddToCart.classList.add(`buy${obj}`);
  btnAddToCart.textContent = 'ADD TO CART';

  //
  btnAddToCart.addEventListener('click', function () {
    addToCart(`${obj}`);
    wrapper = document.getElementById('wrapper');
    console.log(wrapper);
    console.log('container');

    const produtoEmFormatoJSON = JSON.stringify(carrinho);
    localStorage.setItem('produto', produtoEmFormatoJSON);
    console.log('carrinho json ' + produtoEmFormatoJSON);
  });

  elemPai.appendChild(divCardContainer);
  divCardContainer.appendChild(imgTag);
  divCardContainer.appendChild(divContainerDescProduto);
  divContainerDescProduto.appendChild(divRow);
  divRow.appendChild(divDetailsWrapper);
  divDetailsWrapper.appendChild(spanNomeProduto);
  divDetailsWrapper.appendChild(paragTipoProduto);
  divRow.appendChild(divPrecoProd);
  divContainerDescProduto.appendChild(divContainerButtons);
  divContainerButtons.appendChild(btnBuyNow);
  divContainerButtons.appendChild(btnAddToCart);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//carrinho animacao:

//-----------------------------------------------------------------------------------------

count = 0;

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
        'z-index': '1000',
      })
      .appendTo($('body'))
      .animate(
        {
          top: cart.offset().top + 20,
          left: cart.offset().left + 30,
          width: 75,
          height: 75,
        },
        2500,
        'easeInOutExpo',
      );
    console.log('inicio carrinho la' + shoppingCartNum);
    setTimeout(function () {
      count++;
      $('.cart-nav .item-count').text(count);
      $('.cart-nav .item-count.carrinho').text(count);
      return count;
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

//
// $(document).ready(function () {
//   $(window).scroll(function () {
//     if (this.scrollY > 20) {
//       $('.navbar').addClass('sticky');
//     } else {
//       $('.navbar').removeClass('sticky');
//     }
//     if (this.scrollY > 500) {
//       $('.scroll-up-btn').addClass('show');
//     } else {
//       $('.scroll-up-btn').removeClass('show');
//     }
//   });

// $('.scroll-up-btn').click(function () {
//   $('html').animate({ scrollTop: 0 });
// });

// $('.menu-btn').click(function () {
//   $('.navbar .menu').toggleClass('active');
//   $('.menu-btn i').toggleClass('active');
// });
// });

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//MODAL
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// sessionStorage.setItem('shown', true);

// if (!sessionStorage.getItem('shown')) {
//   showModal();
// } else {
//   sessionStorage.setItem('shown', true);
// }

// function showModal() {

//   document.write("<!DOCTYPE HTML>");
//   document.write("<html>");
//   document.write("    <head>");
//   document.write("        <title>Test<\/title>");
//   document.write("    <\/head>");
//   document.write("    <body>");
//   document.write("        <h1> Hello !!! <\/h1>");
//   document.write("    <\/body>");
//   document.write("<\/html>");

// <div id="modalFormContainer" class="bg-modal">
//     <div class="modal-content">
//       <div class="close">+</div>
//       <h1>Hello gorgeous!</h1>
//       <h4>Let's get you started!</h4>
//       <form id="modalForm" action="">
//         <div class="div-form">
//           <input id="sizeClothes" type="text" placeholder="Type your clothing size">
//           <input id="sizeShoes" type="number" placeholder="Type your shoe size">
//         </div>
//         <div class="div-btn">
//           <a id="btnModalSub" href="" class=" buttom">Submit</a>
//         </div>
//         <div>
//           <h6 class="dontworry">Don't worry, you can change them later on, if you need.</h6>
//         </div>
//       </form>

//     </div>
//   </div>

//   // var myform = document.getElementById('modalForm');
//   // document
//   //   .getElementById('btnModalSub')
//   //   .addEventListener('click', function (event) {
//   //     // myform.submit();
//   //     event.preventDefault();
//   //     tamanhoRoupaUser = document
//   //       .getElementById('sizeClothes')
//   //       .value.toUpperCase();
//   //     tamanhoSapatoUser = document.getElementById('sizeShoes').value;
//   //     document.querySelector('.bg-modal').style.display = 'none';
//   //     console.log(tamanhoRoupaUser, tamanhoSapatoUser);
//   //   });
// }

// document.querySelector('.close').addEventListener('click', function () {
//   document.querySelector('.bg-modal').style.display = 'none';
// });

// // setTimeout(showModal, 1000);
// // function showModal() {
//   $('#modalFormContainer').show();
// }

// var is_modal_show = sessionStorage.getItem('alreadyShow');
// if (is_modal_show != 'alredy shown') {
//   $('#modalFormContainer').show();
//   sessionStorage.setItem('alreadyShow', 'alredy shown');
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
