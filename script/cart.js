const shoppingC = localStorage.getItem('counter');
console.log('teste' + shoppingC);
document.querySelector('.carrinho').textContent = shoppingC;
