let name1 = document.querySelector("#resto_name");
let category = document.querySelector("#resto_category");

const urlSearchParams = new URLSearchParams(window.location.search);
var id = Object.fromEntries(urlSearchParams.entries());
id = id.id;

let url = 'http://localhost/Zomato/Zomato_Back-End/get_restaurant.php?id=' + id;

axios.get(url).then(res => display(res));

function display(res){
  let restaurant = res.data;
  name1.innerHTML = restaurant.restaurant_name;
  category.innerHTML = restaurant.category
}