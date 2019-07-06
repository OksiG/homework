const quantity = document.getElementsByClassName('product__quantity-control');
const addProduct = document.getElementsByClassName('product__add');
let quantityCurrent = document.getElementsByClassName('product__quantity-value');

for (let i = 0; i < quantity.length; i++) {
    quantity[i].addEventListener('click', function () {
        if (quantity[i].classList.contains('product__quantity-control_dec') && quantity[i].nextElementSibling.innerText > 0) {
            quantity[i].nextElementSibling.innerText--;
        } else {
            quantity[i].previousElementSibling.innerText++;
        }
        
    });
}


const cart = document.querySelector('.cart__products');


for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', function(e) {
        const product = e.target.closest('.product');
        const id = product.dataset.id;
        const countFromProduct = +event.target.parentNode.querySelector('.product__quantity-value').innerText;

        for (let item of cart.children) {

            if (item.dataset.id === id) {
                let quantityNow = item.querySelector('.cart__product-count');
                let total = +quantityNow.innerText;
                quantityNow.innerText = total + countFromProduct;

                return false;
            }
        }

        cart.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${product.querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerText}</div>
            </div>        
            `);   
    });
}