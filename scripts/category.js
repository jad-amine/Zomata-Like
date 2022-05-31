

console.log('hi');

const urlSearchParams = new URLSearchParams(window.location.search);
var category = Object.fromEntries(urlSearchParams.entries());
category = category.category;
document.querySelector("#category-name").innerHTML = category;;
let url = 'http://localhost/ZOMATO/Zomato_Back-End/get_restaurants_by_category.php?category=' + category;
console.log(url);
axios.get(url).then(res => console.log(res.data));

// function display(data){

// }