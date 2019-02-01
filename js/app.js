var title = document.createElement('h1');
title.id = 'head1';
title.innerHTML = 'Shopping Cart';
document.getElementById('container1').appendChild(title);


var prodImg1 = document.createElement('img');
prodImg1.id = 'photo1'
prodImg1.setAttribute('src', 'images/toothbrush-silicone-finger.jpg');
prodImg1.setAttribute('width', '10%');
prodImg1.setAttribute('height', '10%');
prodImg1.setAttribute('alt', 'Finger Toothbrush');
document.getElementById('finger').appendChild(prodImg1);

var prodImg2 = document.createElement('img');
prodImg2.id = 'photo2';
prodImg2.setAttribute('src', 'images/51egd19JazL.jpg');
prodImg2.setAttribute('width', '10%');
prodImg2.setAttribute('height', '10%');
prodImg2.setAttribute('alt', 'Barry Manilow Best Album');
document.getElementById('barry').appendChild(prodImg2);

var prodImg3 = document.createElement('img');
prodImg3.setAttribute('src', 'images/253437_1_230c.jpeg');
prodImg3.setAttribute('width', '10%');
prodImg3.setAttribute('height', '10%');
prodImg3.setAttribute('alt', 'Ramen Oreos :P');
document.getElementById('ramen').appendChild(prodImg3);

var prodImg4 = document.createElement('img');
prodImg4.setAttribute('src', 'images/woof-washer-hoop-dog-shower-7914.jpg');
prodImg4.setAttribute('width', '10%');
prodImg4.setAttribute('height', '10%');
prodImg4.setAttribute('alt', 'Woof Washer Woof!');
document.getElementById('woof').appendChild(prodImg4);

var prodImg5 = document.createElement('img');
prodImg5.setAttribute('src', 'images/T1bux8FbxeXXXXXXXX_!!0-item_pic.jpg');
prodImg5.setAttribute('width', '10%');
prodImg5.setAttribute('height', '10%');
prodImg5.setAttribute('alt', 'Sweaty Pants');
document.getElementById('sauna').appendChild(prodImg5);

var prodImg6 = document.createElement('img');
prodImg6.setAttribute('src', 'images/hugme2.jpg');
prodImg6.setAttribute('width', '10%');
prodImg6.setAttribute('height', '10%');
prodImg6.setAttribute('alt', 'Please Hug Me Pillow');
document.getElementById('hug').appendChild(prodImg6);


var shopCart = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];


for(var i=0; i<shopCart.length; i++){
    var newProduct = document.createElement('div');
    newProduct.className = 'coolStuff';
    newProduct.innerHTML = shopCart[i].product;
    document.getElementById('container2').appendChild(newProduct);

    var newDesc = document.createElement('div');
    newDesc.className = 'purpose';
    newDesc.innerHTML = shopCart[i].description;
    document.getElementById('container2').appendChild(newDesc);

    var newPrice = document.createElement('div');
    newPrice.className = 'payUp';
    newPrice.innerHTML = '$' + shopCart[i].price;
    document.getElementById('container2').appendChild(newPrice);

}