let name1 = localStorage.getItem('name');
sign_up_bttn = document.querySelector("#signup-btn");

if(name1){
  sign_up_bttn.innerText = 'welcome ' + name1;
};

let italian = document.getElementById("italian-food")
let sea = document.getElementById("sea-food")
let pizza = document.getElementById("pizza-food")
let burger = document.getElementById("burger-food")
let oriental = document.getElementById("oriental-food")
let dessert = document.getElementById("deserts-food")


