let name1 = document.querySelector("#resto_name");
let category = document.querySelector("#resto_category");
let send_review = document.querySelector("#send_review");
let rating = document.querySelector("#rating");
let description = document.querySelector("#description");
let location1 = document.querySelector("#location");
let number = document.querySelector("#number");
let user_id = localStorage.getItem('id');
let review_section = document.querySelector("#review_section");


// Catch url query sent from category page
const urlSearchParams = new URLSearchParams(window.location.search);
var id = Object.fromEntries(urlSearchParams.entries());
id = id.id;

// Sending Get request to retrieve Restaurant information
let url = 'http://localhost/Zomato/Zomato_Back-End/get_restaurant.php?id=' + id;
axios.get(url).then(res => display(res));

//Displaying Restaurant information
function display(res){
  console.log(res.data);
  let restaurant = res.data;
  name1.innerHTML = restaurant[0].restaurant_name;
  category.innerHTML = restaurant[0].category;
  description.innerHTML = `Description: ${restaurant[0].description}`
  number.innerHTML = `Number: ${restaurant[0].number}`
  rating.innerHTML = `Rating: ${restaurant[0].rating}`
  location1.innerHTML = `location: ${restaurant[0].location}`
  let total_rating = 0;
  for (let i=0; i<restaurant.length; i++){
    let raw = restaurant[i];
    total_rating += raw.rating_value;
    let review = restaurant[i].review_text;
    let div = document.createElement("p")
    div.innerHTML = `<h4>${raw.name}</h4> <p>${review}</p><p> Rating :${raw.rating_value}</p><hr>`;
    review_section.appendChild(div);
  }
  rating.innerHTML = `Total Ratings:    ${total_rating/restaurant.length} / 5`
}

// Add review section
send_review.addEventListener("click", send_data);

// Sending POST request to add review
function send_data(){
  let review = document.querySelector("#review-area").value;
  let rating_value = document.querySelector("#rating-value").value;
  let data = new FormData();
  data.append('review_text', review)
  data.append('user_id', user_id)
  data.append('restaurant_id', id);
  data.append('rating_value', rating_value);

  axios.post('http://localhost/Zomato/Zomato_Back-End/add_review.php',data)
    .then(e=> location.reload() );
}

// location.reload()