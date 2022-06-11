console.log('hi')
let password = localStorage.getItem("password");
let to_add_after = document.querySelector(".admin-pr-add-edit")

let data = new FormData();
data.append('password', password);

axios.post('http://localhost/Zomato/Zomato_Back-End/get_all_restaurants.php', data)
.then(e=> show_restaurants(e.data));


function show_restaurants(items){
  for (let i=0; i<items.length;i++){
    let div = document.createElement('div')
    let resto = items[i]
    console.log('hi');
    
    div.innerHTML = `${resto.restaurant_name}`;
    to_add_after.appendChild(div);
    
  }

}