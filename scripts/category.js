

console.log('hi');

const urlSearchParams = new URLSearchParams(window.location.search);
var category = Object.fromEntries(urlSearchParams.entries());
category = category.category;
document.querySelector("#category-name").innerHTML = category;
let url = 'http://localhost/ZOMATO/Zomato_Back-End/get_restaurants_by_category.php?category=' + category;
console.log(url);

axios.get(url)
  .then(res => { populate(res) })
  .catch(e=> console.log(e));


function populate(res){
  let restaurants = res.data;

  for (let i = 0; i < restaurants.length; i++){
    console.log(restaurants[i]);
    let name = restaurants[i].restaurant_name;
    let location = restaurants[i].location;
    let description = restaurants[i].description;
    let number = restaurants[i].number;
    let section = document.querySelector("#restaurants");
    let div = document.createElement("div");
    div.classList.add('restaurants');
    // div.className("restaurants");
    div.innerHTML = `<div><h1>${name}</h1><p>📍<b>Location</b>: ${location} 📜<b>Description:</b>${description}, 📞<b>Number:</b>${number}</p></div>` //`<div><p>${name}</p><img class="resto" src="../public/mc.jfif" alt=""></div>`
    section.appendChild(div);
    // console.log(restaurants[i].restaurant_name);
    
    // <div class="restaurants">
    //   <div><p>${name}</p><img class="resto" src="../public/mc.jfif" alt=""></div>
    //   <div><p>Roadster</p><img class="resto" src="../public/roadster.jfif" alt=""></div>
    //   </div>
  }
}