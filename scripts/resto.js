let name1 = document.querySelector("#resto_name");
let category = document.querySelector("#resto_category");
let send_review = document.querySelector("#send_review");
let user_id = localStorage.getItem('id');


const urlSearchParams = new URLSearchParams(window.location.search);
var id = Object.fromEntries(urlSearchParams.entries());
id = id.id;

let url = 'http://localhost/Zomato/Zomato_Back-End/get_restaurant.php?id=' + id;

axios.get(url).then(res => display(res));

function display(res){
  console.log(res.data);
  let restaurant = res.data;
  name1.innerHTML = restaurant[0].restaurant_name;
  category.innerHTML = restaurant[0].category
}

send_review.addEventListener("click", send_data);

function send_data(){
  let review = document.querySelector("#review-area").value;
  let data = new FormData();
  data.append('review_text', review)
  data.append('user_id', user_id)
  data.append('restaurant_id', id);
  axios.post('http://localhost/Zomato/Zomato_Back-End/add_review.php',data)
    .then(e=>console.log(e, e.data))
}