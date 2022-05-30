let resto_name=document.getElementById("resto-name");
let resto_category=document.getElementById("resto-category")
let resto_location=document.getElementById("resto-location")
let resto_description=document.getElementById("resto-description")
let resto_number=document.getElementById("resto-number")

let add_resto=document.getElementById("add-resto-info-btn")

add_resto.onclick=sendRestoData

function sendRestoData(){
    // Send request POST
    axios.post("./test.php",{
        name : resto_name.value,
        category : resto_category.value,
        description : resto_description.value,
        location : resto_location.value,
        number : resto_number.value
    })
    .then((response) => {
        console.log(response);
    });
    
    

    
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