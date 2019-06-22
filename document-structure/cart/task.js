const quantity = document.getElementsByClassName('product__quantity-control');
const addProduct = document.getElementsByClassName('product__add');
let quantityCurrent = document.getElementsByClassName('product__quantity-value');


function changeQuantity () {
    for (let i = 0; i < quantityCurrent.length; i++) { 

        if (quantity.classList.contains('product__quantity-control_dec') && quantityCurrent[i] > 1) {
            quantityCurrent[i]--;
        } else {
            quantityCurrent[i]++;
        }
    }
}

for (let i = 0; i < quantity.length; i++) {
    quantity[i].addEventListener('click', changeQuantity);
}

for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', function() {
        let product = document.querySelector('.product');
        let id = product.dataset.id;
        let img = product.querySelector('img').getAttribute('src');
        const cart = document.querySelector('.cart__products');

        if (cart != null)

        cart.innerHTML += `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${quantityCurrent}</div>
        </div>          
        `;


    });
}