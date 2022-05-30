let bttn = document.querySelector("#bttn");

bttn.onclick = send_data;

function send_data(){
  var name =document.querySelector("#username");
  var email =document.querySelector("#email");
  var pass =document.querySelector("#pass");
  let data = new FormData();
  data.append('name', `${name.value}`);
  data.append('email',  `${email.value}`);
  data.append('pass', `${pass.value}`);

  axios.post('http://localhost/Zomato/Zomato_Back-End/sign_up.php', 
    data)
  .then(function (response) {
    console.log(response.data);
  })
  .catch((e) => console.log(e));
    
};