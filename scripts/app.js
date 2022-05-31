let name1 = localStorage.getItem('name');
sign_up_bttn = document.querySelector("#signup-btn");

if(name1){
  sign_up_bttn.innerText = 'welcome ' + name1;
};

let italian = document.getElementById("italian-food")
let sea = document.getElementById("SeaFood")
let pizza = document.getElementById("pizza-food")
let burger = document.getElementById("junky")
let oriental = document.getElementById("oriental-food")
let dessert = document.getElementById("deserts-food")

let categories = [italian,sea,pizza,burger,oriental,dessert];

categories.forEach(item => {
  item.addEventListener("click", send_id);
});


function send_id(item){
  let category = item.srcElement.id;

  
  let url = 'http://localhost/ZOMATO/Zomato_Back-End/get_restaurants_by_category.php?category=' + category;
  axios.get(url)
    .then(res => console.log(res.data));
}

