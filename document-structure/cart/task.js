const quantity = document.getElementsByClassName('product__quantity-control');
const addProduct = document.getElementsByClassName('product__add');
let quantityCurrent = document.getElementsByClassName('product__quantity-value');

for (let i = 0; i < quantity.length; i++) {
    quantity[i].addEventListener('click', function () {
        for (let j = 0; j < quantityCurrent.length; j++) {
            if (quantity[i].classList.contains('product__quantity-control_dec') && quantityCurrent[j].innerText > 1) {
                quantityCurrent[j].innerText--;
            } else {
                quantityCurrent[j].innerText++;
            }
        }
    });
}

let product = document.querySelectorAll('.product');

const cart = document.querySelector('.cart__products');

for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', function() {
        if (cart.value != null) {
            alert('не пусто')

        } else {
            for (let j = 0; j < product.length; j++) {        
                cart.insertAdjacentHTML('afterBegin', `
                <div class="cart__product" data-id="${product[j].dataset.id}">
                <img class="cart__product-image" src="${product[j].querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${quantityCurrent[j]}</div>
                </div>          
                `);
            }
        }
    });
}

