let qtdeCart = document.getElementById('counterCart');
let cartLocStorString = localStorage.getItem('cart');
let cartLocStorObject = JSON.parse(cartLocStorString);
if (cartLocStorObject != null) {
  var contagem = cartLocStorObject.length;
  qtdeCart.innerHTML = contagem;
} else {
  qtdeCart.innerHTML = 0;
}
