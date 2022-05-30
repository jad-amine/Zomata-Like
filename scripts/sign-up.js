let bttn = document.querySelector("#bttn");

bttn.onclick = send_data;

function send_data(){
  var name =document.querySelector("#username");
  var email =document.querySelector("#email");
  var pass =document.querySelector("#pass");
  let data = {name: `${name.value}`, email:  `${email.value}`, pass:`${pass.value}`};
  axios({
    method: 'post',
    url: 'http://localhost/Zomato/Zomato_Back-End/sign_up.php',
    data: data,
  })
  .then(function (response) {
    console.log(response);
    }
  )
}

