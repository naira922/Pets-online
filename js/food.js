let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Food (Dog)',
        image: 'food7.webp',
        price: 350
    },
    {
        id: 2,
        name: 'Food (Dog)',
        image:'food2.png',
        price: 460
    },
    {
        id: 3,
        name: 'Food (Dog)',
        image: 'food3.webp',
        price: 500
    },
    {
        id: 4,
        name: 'Food (Cat)',
        image: 'food4.jpg',
        price: 300
    },
    {
        id: 5,
        name: 'Food (Cat)',
        image: 'food5.jpg',
        price: 390
    },
    {
        id: 6,
        name: 'Food (Cat)',
        image: 'food6.webp',
        price: 500
    },
    {
        id: 7,
        name: 'Food (Bird)',
        image: 'food8.jpg',
        price: 350
    },
    {
        id: 8,
        name: 'Food (Bird)',
        image: 'food9.jpg',
        price: 470
    },
    {
        id: 9,
        name: ' Food (Bird)',
        image: 'food10.jpg',
        price: 500
    },
    {
        id: 10,
        name: ' Accessories (Dog)',
        image: 'd1.jpg',
        price: 460
    },
    {
        id: 11,
        name: ' Accessories (Dog)',
        image: 'd2.jpg',
        price: 350
    },
    {
        id: 12,
        name: '  Accessories (Dog)',
        image: 'd3.jpg',
        price: 500
    },
    {
        id: 13,
        name: ' Accessories (Cat)',
        image: 'c1.jpg',
        price: 250
    },
    {
        id: 14,
        name: ' Accessories (Cat)',
        image: 'c2.webp',
        price: 300
    },
    {
        id: 15,
        name: '  Accessories (Cat)',
        image: 'c3.png',
        price: 500
    },
    {
        id: 16,
        name: ' Accessories (bird)',
        image: 'b1.jpg',
        price: 300
    },
    {
        id: 17,
        name: ' Accessories (bird)',
        image: 'b2.jpg',
        price: 350
    },
    {
        id: 18,
        name: '  Accessories (bird)',
        image: 'b4.webp',
        price: 450
    },

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price}$</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{ // vlue = product
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(count == 2 ||  count == 3) {
            totalPrice = totalPrice - (totalPrice * (10/100)).toFixed(0);
        }
        else if (count == 4  || count == 5) {
            totalPrice = totalPrice - (totalPrice * (25/100)).toFixed(0);
        }
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}$</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})