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
  annabelle: {
    preco: 30,
    tipo: 'relaxed',
    qdeEstoque: 100,
    imgFile: '/images/relaxed.jpeg',
  },
  juanee: {
    preco: 40,
    tipo: 'casual',
    qdeEstoque: 200,
    imgFile: '/images/casua52.jpeg',
  },
  francis: {
    preco: 35,
    tipo: 'casual',
    qdeEstoque: 100,
    imgFile: '/images/casual53.jpeg',
  },
  suzette: {
    preco: 45,
    tipo: 'business',
    qdeEstoque: 50,
    imgFile: '/images/business.jpeg',
  },
  desiree: {
    preco: 35,
    tipo: 'casual',
    qdeEstoque: 100,
    imgFile: '/images/casual3.jpeg',
  },
  marrie: {
    preco: 50,
    tipo: 'outing',
    qdeEstoque: 200,
    imgFile: '/images/classic7.jpeg',
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
