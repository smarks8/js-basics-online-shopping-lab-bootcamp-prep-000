var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item; 
 var itemPrice = Math.floor(Math.random() * 100) + 1
 var itemObj = {
   [itemName]: itemPrice
 };
 cart.push(itemObj)
 console.log(`${item} has been added to your cart.`)
 return cart; 
}

function viewCart() {
  if(!cart.length){
    console.log('Your shopping cart is empty.')
  }
  
  var result = 'In your cart, you have ';
  
  for(var i =0; i<arr.length;i++){
    var currentObj = arr[i];
    var currentKey = Object.keys(arr[i]);
    var currentPrice = currentObj[currentKey];
    
    result += `${currentKey} at ${currentPrice}`
    
    if(i === arr.length-1){
      result += '.'
    } else if(i === arr.length-2){
      result += ' and '
    } else {
      result += ', '
    }
  }
  return result;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
