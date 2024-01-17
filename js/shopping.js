let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// add class active in classList TO display asid cart 
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
// Remove class active from classList 
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Eskimo Dog',
        image: 'eskimo1.jpg',
        price: 2500
    },
    {
        id: 2,
        name: 'Golden Dog',
        image:'golden.jpeg',
        price: 2560
    },
    {
        id: 3,
        name: 'German Dog',
        image: 'german1.webp',
        price: 3000
    },
    {
        id: 4,
        name: 'Birman Cat',
        image: 'birman.jpg',
        price: 1200
    },
    {
        id: 5,
        name: 'Siamese Cat',
        image: 'siamse.jpg',
        price: 2000
    },
    {
        id: 6,
        name: 'Sphynx Cat',
        image: 'sphynx.jpg',
        price: 3000
    },
    {
        id: 7,
        name: 'Blue Jay Bird',
        image: 'bluebird.jpg',
        price: 3000
    },
    {
        id: 8,
        name: 'Columbidae Bird',
        image: 'bird2.jpg',
        price: 2500
    },
    {
        id: 9,
        name: ' Budgerigar Bird',
        image: 'bird3.jpg',
        price: 2600
    },

];
let listCards  = [];
// write div of cards in HTML 
function initApp(){
    products.forEach((value, key) =>{
        // div that contain one animal
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}$</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
// call function
initApp();

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    // appear cart in cartList
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{ // value = product
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(count == 2 ||  count == 3) {
            totalPrice = totalPrice - (totalPrice * (10/100));
        }
        else if (count == 4  || count == 5) {
            totalPrice = totalPrice - (totalPrice * (25/100));
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

// Dark mood
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', ()=> {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})