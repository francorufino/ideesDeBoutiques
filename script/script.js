let carrinho = [];
let tamanhoRoupaUser;
let tamanhoSapatoUser;

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
  ).toUpperCase();
  // localStorage.setItem('myValue', tamanhoRUser);
  // window.location.href = 'index.html';
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

//-----------------------------------------------------------------------------------------

// banco de dados:

//-----------------------------------------------------------------------------------------

var PRODUTOS = {
  annabelle: { preco: 30, tipo: 'relaxed', qdeEstoque: 100 },
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

var myform = document.getElementById('modalForm');
document
  .getElementById('btnModalSub')
  .addEventListener('click', function (event) {
    // myform.submit();
    event.preventDefault();
    tamanhoRoupaUser = document.getElementById('sizeClothes').value;
    tamanhoSapatoUser = document.getElementById('sizeShoes').value;
    document.querySelector('.bg-modal').style.display = 'none';
    console.log(tamanhoRoupaUser, tamanhoSapatoUser);
  });

document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.bg-modal').style.display = 'none';
});
