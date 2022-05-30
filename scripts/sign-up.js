let bttn = document.querySelector("#bttn");
var name1 =document.querySelector("#username");
var email =document.querySelector("#email");
var pass =document.querySelector("#pass");
bttn.onclick = send_data;

function send_data(){

  let data = new FormData();
  data.append('name', name1.value);
  data.append('email',  email.value);
  data.append('pass', pass.value);

  axios.post('http://localhost/Zomato/Zomato_Back-End/sign_up.php', data)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (e) {
    console.log(e);
    }
  )
}


// axios.post('http://localhost/Zomato/Zomato_Back-End/sign_up.php', data)
//         .then(function (response) {
//             if(response.data.name){
//             console.log(response.data.name)
//             let id = response.data.user_id;
//             localStorage.setItem('id', id);
//             // window.location.href = "../index.html";
//             } else{
//                 console.log(response.data);
//                 alert('user not found')
//             }
//         })
//         .catch((e) => console.log(e));
        