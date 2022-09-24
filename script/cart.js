let qtdeCart = document.getElementById('counterCart');
let cartLocStorString = localStorage.getItem('cart');
let cartLocStorObject = JSON.parse(cartLocStorString);
if (cartLocStorObject != null) {
  var contagem = cartLocStorObject.length;
  qtdeCart.innerHTML = contagem;
} else {
  qtdeCart.innerHTML = 0;
}

const nada = document.getElementById('vazio');
const produtoString = localStorage.getItem('produto');
const produtoObjeto = JSON.parse(produtoString);
let sum = 0;

for (let i = 0; i < contagem; i++) {
  qtdeCart.textContent = contagem;
  const produtosTamanho = produtoObjeto.length;
  console.log('produtosTamanho' + produtosTamanho);
  console.log(typeof produtosTamanho);
  console.log(typeof produtoObjeto[i].preco);
  if (produtoObjeto[i].preco !== 0) {
    sum += produtoObjeto[i].preco;
  }

  const subtotRodape = document.getElementById('subtotal-cart-rodape');
  subtotRodape.textContent = `$${sum.toFixed(2)}`;

  const mostraProdutos = () => {
    const carrinhoEstaVazio = document.getElementById('empty-cart');
    const showCompras = document.getElementById('not-empty-cart');
    carrinhoEstaVazio.classList.remove('show');
    carrinhoEstaVazio.classList.add('hide');
    showCompras.classList.remove('hide');
    showCompras.classList.add('show');
  };

  const escondeProdutos = () => {
    carrinhoEstaVazio.classList.remove('hide');
    carrinhoEstaVazio.classList.add('show');
    showCompras.classList.remove('show');
    showCompras.classList.add('hide');
  };

  produtoObjeto.length > 0 ? mostraProdutos() : escondeProdutos();

  const shoppingC = localStorage.setItem('counter', produtosTamanho);

  const img = produtoObjeto[i].imgFile;
  const nome = produtoObjeto[i].nomeProd;
  const tipo = produtoObjeto[i].tipo;
  const preco = produtoObjeto[i].preco;
  const tamanhoRR = produtoObjeto[i].tamanhoR;
  const tamanhoSS = produtoObjeto[i].tamanhoS;
  const paiDoPai = document.getElementById('outter');
  const elemPaiCarrinho = document.createElement('div');
  elemPaiCarrinho.classList.add('container');
  const divProdutoContainer = document.createElement('div');
  divProdutoContainer.classList.add('box1');
  const imgTagCart = document.createElement('img');
  imgTagCart.setAttribute('id', 'img-id');
  imgTagCart.classList.add('cart');
  imgTagCart.src = img;
  const divProdutoDesc = document.createElement('div');
  divProdutoDesc.classList.add('box2');
  const ulProdDesc = document.createElement('ul');
  const liNomeProd = document.createElement('li');
  liNomeProd.textContent = nome.charAt(0).toUpperCase() + nome.slice(1);
  const liTipoProd = document.createElement('li');
  const liSizeRoupa = document.createElement('li');
  liTipoProd.textContent = tipo;
  liSizeRoupa.textContent = `clothes size: ${tamanhoRR}`;
  const liSizeSapato = document.createElement('li');
  liSizeSapato.textContent = `shoes size: ${tamanhoSS}`;
  const precoProdutoDiv = document.createElement('div');
  precoProdutoDiv.classList.add('box3');
  const ulPrecoProduto = document.createElement('ul');
  const liPrecoProduto = document.createElement('li');
  liPrecoProduto.textContent = '$' + preco.toFixed(2);
  const line = document.createElement('hr');
  line.classList.add('linha');

  paiDoPai.appendChild(elemPaiCarrinho);
  elemPaiCarrinho.appendChild(divProdutoContainer);
  divProdutoContainer.appendChild(imgTagCart);
  elemPaiCarrinho.appendChild(divProdutoDesc);
  divProdutoDesc.appendChild(ulProdDesc);
  ulProdDesc.appendChild(liNomeProd);
  ulProdDesc.appendChild(liTipoProd);
  ulProdDesc.appendChild(liSizeRoupa);
  ulProdDesc.appendChild(liSizeSapato);
  paiDoPai.appendChild(line);
  elemPaiCarrinho.appendChild(precoProdutoDiv);
  precoProdutoDiv.appendChild(ulPrecoProduto);
  ulPrecoProduto.appendChild(liPrecoProduto);
}

const btnPlOrder = document.getElementById('place-order-id');
btnPlOrder.addEventListener('click', function () {
  Swal.fire({
    customClass: {
      popup: 'sweetAlertCart',
      confimButton: 'confirm',
    },
    title: 'Your order has been placed!',
    confirmButtonColor: '#03396c',
    confirmButtonText: 'OK',
  });
  localStorage.clear();
  qtdeCarrinho = qtdeCart.textContent = 0;
  const carrinhoEstaVazio = document.getElementById('empty-cart');
  const showCompras = document.getElementById('not-empty-cart');
  carrinhoEstaVazio.classList.remove('hide');
  carrinhoEstaVazio.classList.add('show');
  showCompras.classList.remove('show');
  showCompras.classList.add('hide');
});
