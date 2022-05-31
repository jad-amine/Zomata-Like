let name1 = localStorage.getItem('name');
sign_up_bttn = document.querySelector("#signup-btn");

if(name1){
  sign_up_bttn.innerText = 'welcome ' + name1;
};

let italian = document.getElementById("Italian");
let sea = document.getElementById("SeaFood");
let pizza = document.getElementById("Pizza");
let burger = document.getElementById("Burgers");
let oriental = document.getElementById("Oriental");
let dessert = document.getElementById("Desert");

let categories = [italian,sea,pizza,burger,oriental,dessert];

categories.forEach(item => {
  item.addEventListener("click", send_id);
});


function send_id(item){
  let category = item.srcElement.id;
  let url = './pages/category.html?category=' + category;
  window.location.href = url;
}

