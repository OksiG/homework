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

let product = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');
let quantityNow = document.getElementsByClassName('cart__product-count');

for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', function() {
        if (cart.children[i] !== undefined) {
            if (cart.children[i].dataset.id == (i + 1)) {            
            quantityNow[i].innerText = quantityNow[i].innerText + quantityCurrent[i].innerText;
            }
        } else {                   
            cart.insertAdjacentHTML('afterBegin', `
            <div class="cart__product" data-id="${product[i].dataset.id}">
                <img class="cart__product-image" src="${product[i].querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${quantityCurrent[i].innerText}</div>
            </div>        
            `);            
        }
    });
}

