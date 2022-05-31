let resto_name = document.getElementById("resto-name");
let resto_category = document.getElementById("resto-category")
let resto_location = document.getElementById("resto-location")
let resto_description = document.getElementById("resto-description")
let resto_number = document.getElementById("resto-number")

let add_resto = document.getElementById("add-resto-info-btn")

add_resto.onclick = sendRestoData

function sendRestoData(){
    // Get restaurant Data
    let data = new FormData();
    data.append('restaurant_name', resto_name.value)
    data.append('category', resto_category.value)
    data.append('description', resto_description.value)
    data.append('location', resto_location.value)
    data.append('number', resto_number.value)
    // Send request POST
    axios.post("http://localhost/Zomato/Zomato_Back-End/add_restaurant.php", data)
    .then((response) => {
        console.log(response.data);
    })
    .catch(e => console.log(e));
    
    

    
    /*
    console.log("hello")
    console.log(resto_name.value)
    console.log(resto_category.value)
    console.log(resto_location.value)
    console.log(resto_description.value)
    console.log(resto_number.value)
    */
    resto_name.value=""
    resto_category.value=""
    resto_location.value=""
    resto_description.value=""
    resto_number.value=""
}