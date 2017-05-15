
//
// Capture user-email and send confirmation
function capture() {
  var emailValue;
  //stop form submit
  event.preventDefault();
  emailValue = document.customerEmail.email.value;
  document.customerEmail.email.value = "";
  console.log("Thanks for signing up for our mailing list: " + emailValue);
}

//
// products array
//
var products = [
  { name: "Reversible Plaid", price: 26.99, id: "item001", added: false, quantity: 0 },
  { name: "Fringed Plaid", price: 18.99,    id: "item002", added: false, quantity: 0 },
  { name: "Multi Color", price: 22.99,      id: "item003", added: false, quantity: 0 },
  { name: "Northern Lights", price: 29.99,  id: "item004", added: false, quantity: 0 },
  { name: "Ombre Infinity", price: 11.99,   id: "item005", added: false, quantity: 0 },
  { name: "Ashby Twill", price: 70.99,      id: "item006", added: false, quantity: 0 },
  { name: "Wool Cable Knit", price: 49.99,  id: "item007", added: false, quantity: 0 },
  { name: "Etro Paisley-Print Silk", price: 26.99, id: "item008", added: false, quantity: 0 }
];

var cart = [];

function addRemoveItem(val) {
  event.preventDefault();

  // var item =  document.getElementById( val ).textContent;
  var length = products.length;
  var whichIndex = false;

  for(var i = 0; i < length && !whichIndex; i++) {
    var scarf = products[i];
    if( scarf.id === val) {
      whichIndex = true;

      if(scarf.added == false)  {
         products[i].added = true;
         products[i].quantity =  products[i].quantity + 1;
         console.log("You added: " + scarf.name);

        //  addItem(scarf);
      }else {
        products[i].added = false;
        products[i].quantity =  products[i].quantity - 1;
        console.log("You removed: " + scarf.name);
        // addItem(scarf);
      }
    }
  }
}



//
// add item to cart
function addToCart(val1, val2, val3) {
  var length = cart.length;
  var isAdded = false;


  for(var i = 0; i < length && !isAdded; i++) {
    var scarf = cart[i];
    if( scarf.id === val1) {
      isAdded = true;
    }
  }

  if(!isAdded) {
    var scarf = {name: val2, price: val3, id: val1};
    // console.log("The added item is:" + scarf.name);
    // console.log("Its price is:" + scarf.price);
    // console.log("Its Id is:" + scarf.id);
    cart.push(scarf);
  }

  var cartlength = cart.length;
  console.log("The cart has: " + cartlength + " items.");
}




//
// remove item from cart
function removeFromCart(val1, val2, val3) {
  var length = cart.length;
  var isFound = false;


  for(var i = 0; i < length && !isFound; i++) {
    var scarf = cart[i];
    if( scarf.id === val1) {
      isFound = true;

        cart.splice(i , 1);
      // console.log("The element is :" + val2);
      // console.log("The index of the element is :" + i);
    }
  }

  var cartlength = cart.length;
  console.log("The cart has: " + cartlength + " items.");
}




//
// Add products to the cart
function addItem(val) {
  event.preventDefault();

  // var item =  document.getElementById( val ).textContent;
  // var item =  val.quantity;
  // console.log("You added the following item: " + val.name);
  // console.log("It's price is: " + val.price);
  // console.log("Was it added before? " + val.added);
  // console.log("How many times have you added this item: " + val.quantity);
  // // cart.push(item);
  var length = products.length;
  var whichIndex = false;

  for(var i = 0; i < length && !whichIndex; i++) {
    var scarf = products[i];
    if( scarf.id === val) {
      whichIndex = true;

      // cart2.push(scarf);
      cart.push(val);

      var cartlength = cart.length;

      console.log("The cart has: " + cartlength + " items.");

      // if(scarf.added == false)  {
      //    cart[i].added = true;
      //    cart[i].quantity =  cart[i].quantity + 1;
      //    console.log("You added: " + scarf.name);
      //
      //   //  addItem(scarf);
      // }else {
      //   cart[i].added = false;
      //   cart[i].quantity =  cart[i].quantity - 1;
      //   console.log("You removed: " + scarf.name);
      //   // addItem(scarf);
      // }
    }
  }
}






//
// remove item from cart
function removeItem(val) {
  event.preventDefault();

  var length = products.length;
  var whichIndex = false;

// console.log("Item id is:" + val);
//   if(cart2.indexOf(val) > 0) {
//     var a = cart2.pop();
//     console.log("Item index  is:" + a);
//     var cartlength = cart2.length;
//
//     console.log("The cart has: " + cartlength + " items.");
// }
  for(var i = 0; i < length && !whichIndex; i++) {
    var scarf = products[i];
    if( scarf.id === val) {
      whichIndex = true;
      var indx = cart.indexOf(val);

      if (indx > -1) {
        cart.splice(indx , 1);
      }
      console.log("The element is :" + val);
      console.log("The index of the element is :" + indx);
      // cart2.pop();

      var cartlength = cart.length;

      console.log("The cart has: " + cartlength + " items.");
    }
  }
}
