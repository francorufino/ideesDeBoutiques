const shoppingC = localStorage.getItem('counter');
localStorage.clear();
const updated = (document.querySelector('.carrinho').textContent = shoppingC);
if (
  updated === null ||
  updated === undefined ||
  updated === 0 ||
  updated === '0'
) {
  document.querySelector('.carrinho').textContent = 0;
}
