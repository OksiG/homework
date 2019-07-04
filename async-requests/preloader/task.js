const loader = document.getElementById('loader');
const items = document.getElementById('items');

let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.addEventListener('readystatechange', function() {
    if (request.readyState == request.DONE && request.status == 200) {
        loader.classList.remove('loader_active');

        let data = JSON.parse(request.responseText);
        
        for (let key in data) {
            let valute = `<div class="item">
                            <!--<div class="item__code">
                                ${data[key].CharCode}
                            </div>
                             <div class="item__value">
                                ${data[key].Value}
                            </div>
                            <div class="item__currency">
                                ${data[key].Name}
                            </div>-->
                        </div>`
            
            items.insertAdjacentHTML('beforeEnd', valute);
        }

    }

});
request.send();