

console.log('hi');

const urlSearchParams = new URLSearchParams(window.location.search);
var category = Object.fromEntries(urlSearchParams.entries());
category = category.category;
console.log(category);
document.querySelector("#category-name").innerHTML = category;
let url = 'http://localhost/ZOMATO/Zomato_Back-End/get_restaurants_by_category.php?category=' + category;
console.log(url);

axios.get(url)
  .then(res => { 
    console.log(res);
    populate(res) })
  .catch(e=> console.log(e));


function populate(res){
  let restaurants = res.data;
  for (let i = 0; i < restaurants.length; i++){
    
    // console.log(restaurants[i]);
    let name = restaurants[i].restaurant_name;
    let id = restaurants[i].restaurant_id;
    let location = restaurants[i].location;
    let description = restaurants[i].description;
    let number = restaurants[i].number;
    let section = document.querySelector("#restaurants");
    let div = document.createElement("div");
    
    div.classList.add('restaurants');
    div.innerHTML = `<div><h1>${name}</h1><p>📍<b>Location</b>: ${location} 📜<b>Description:</b>${description}, 📞<b>Number:</b>${number}</p><button class="restos" id=${id}>View Restaurant</button></div>` //`<div><p>${name}</p><img class="resto" src="../public/mc.jfif" alt=""></div>`
    // div.appendChild(button);
    section.appendChild(div);
    document.getElementById(`${id}`).addEventListener("click", send_id);
  }
}

function send_id(item){
  let id = item.srcElement.id;
  let url1 = './resto.html?id=' + id;
  window.location.href = url1;
}
