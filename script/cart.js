// const shoppingC = localStorage.getItem('counter');
// //localStorage.clear();
// const updated = (document.querySelector('.carrinho').textContent = shoppingC);
// if (
//   updated === null ||
//   updated === undefined ||
//   updated === 0 ||
//   updated === '0'
// ) {
//   document.querySelector('.carrinho').textContent = 0;
// }

let qtdeCart = document.getElementById('counterCart');
let qtdeCarrinho = (qtdeCart.textContent = 0);
let sum = 0;
const produto = localStorage.getItem('produto');
const produtoObjeto = JSON.parse(produto);

const nada = document.getElementById('vazio');

for (let i = 0; i < produtoObjeto.length; i++) {
  qtdeCart.textContent = produtoObjeto.length;
  const sera = produtoObjeto.length;
  console.log('sera' + sera);
  console.log(typeof sera);
  console.log(typeof produtoObjeto[i].preco);
  if (produtoObjeto[i].preco !== 0) {
    sum += produtoObjeto[i].preco;
  }

  //const subtot = document.getElementById('subtotal-cart');
  const subtotRodape = document.getElementById('subtotal-cart-rodape');
  //subtot.textContent = `$${sum.toFixed(2)}`;
  subtotRodape.textContent = `$${sum.toFixed(2)}`;

  if (produtoObjeto.length > 0) {
    const carrinhoEstaVazio = document.getElementById('empty-cart');
    const showCompras = document.getElementById('not-empty-cart');
    carrinhoEstaVazio.classList.remove('show');
    carrinhoEstaVazio.classList.add('hide');
    showCompras.classList.remove('hide');
    showCompras.classList.add('show');
  } else {
    carrinhoEstaVazio.classList.remove('hide');
    carrinhoEstaVazio.classList.add('show');
    showCompras.classList.remove('show');
    showCompras.classList.add('hide');
  }

  // if (qtdeCart > 0) {
  //   nada.classList.add('hide');
  // } else {
  //   nada.classList.remove('show');
  // }

  const shoppingC = localStorage.setItem('counter', sera);

  const img = produtoObjeto[i].imgFile;
  const nome = produtoObjeto[i].nomeProd;
  const tipo = produtoObjeto[i].tipo;
  const preco = produtoObjeto[i].preco;
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
  liSizeRoupa.textContent = `tamanhoRoupaUser`;
  const liSizeSapato = document.createElement('li');
  liSizeSapato.textContent = `tamanhoSapatoUser`;
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

//localStorage.clear();
