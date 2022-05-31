let name1 = localStorage.getItem('name');
let sign_up_bttn = document.querySelector("#signup-btn");
let login_bttn = document.querySelector("#login-btn");


if(name1){
  sign_up_bttn.innerText = 'welcome ' + name1;
  login_bttn.innerText = 'Log out ';
  login_bttn.onclick = ()=> {
    localStorage.clear();
    location.reload()
  };
  sign_up_bttn.onclick = () => console.log('you are already logged in');
};

let italian = document.getElementById("Italian");
let sea = document.getElementById("SeaFood");
let pizza = document.getElementById("Pizza");
let burger = document.getElementById("Burgers");
let oriental = document.getElementById("Oriental");
let dessert = document.getElementById("Dessert");

let categories = [italian,sea,pizza,burger,oriental,dessert];

categories.forEach(item => {
  item.addEventListener("click", send_id);
});


function send_id(item){
  let category = item.srcElement.id;
  let url = './pages/category.html?category=' + category;
  window.location.href = url;
}

