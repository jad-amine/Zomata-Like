let user_id = localStorage.getItem("id");
let email = localStorage.getItem("email");
let password = localStorage.getItem("password");
let name = localStorage.getItem("name");

document.querySelector("#username").innerHTML= name;
document.querySelector("#email").innerHTML= email;



function change_name(){
  let new_name = prompt("Enter you new Name: ");
  let data = new FormData();
  data.append('name', new_name);
  data.append('email', email);
  let url = 'http://localhost/ZOMATO/Zomato_Back-End/change_profile.php';
  axios.post(url, data)
    .then(e=>{
      let data = e.data;
      localStorage.setItem('name',data.name);
    });
}

function change_password(){
  let new_password = prompt("Enter you new Password: ");
  let data = new FormData();
  // data.append('name', name);
  data.append('email', email);
  data.append('password', new_password);
  let url = 'http://localhost/ZOMATO/Zomato_Back-End/change_profile.php';
  axios.post(url, data)
    .then(e=>{
      data = e.data[0].password;
      localStorage.setItem('password', data);
    });
}