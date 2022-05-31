let bttn = document.querySelector("#bttn");
var name1 =document.querySelector("#username");
var email =document.querySelector("#email");
var pass =document.querySelector("#pass");
var inputs = [name1, email, pass];
bttn.onclick = createAccount;


function createAccount(){

  // Making sure that the border color is black
  for (let i=0; i<inputs.length; i++){
      inputs[i].style.borderBlockColor="black";
  }

  //// If all fields are filled 
  if (name1.value != "" && email.value != "" && pass.value != ""){

      //--- To check the email format if valid or no
      var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(email.value.match(mail_format)){
      email_condition=true;
      }
      else{
      email.style.borderBlockColor="red";
      alert("Enter a valid email address! (example@gmail.com)");
      }



      // If all condition are correct
      if (email_condition == true){
          
          // // Emptying the fields
          // for (let i=0; i<inputs.length; i++){
          //     inputs[i].value="";
          // }

          // Sending post request
          let data = new FormData();
          data.append('name', name1.value);
          data.append('email',  email.value);
          data.append('password', pass.value);
        
          axios.post('http://localhost/Zomato/Zomato_Back-End/sign_up.php', data)
          .then(function (response) {
            console.log(response.data);
            if(response.data.password){
              let id = response.data.user_id;
              localStorage.setItem("password", response.data.password);
              let name = response.data.name;
              let email = response.data.email;
              localStorage.setItem('email', email);
              localStorage.setItem('id', id);
              localStorage.setItem('name', name);
              window.location.href = "../index.html";
            }else{
              alert(response.data);
            };
          })
          .catch(function (e) {
            console.log(e);
            }
          )
        }  
      }
  //// Else there is/are empty field(s)
  else{

      // Coloring the border color red of the empty field
      for (let i=0; i<inputs.length; i++){
      if (inputs[i].value == ""){
          inputs[i].style.borderBlockColor="red";   
      } 
      } 
  
      // Alert msg when value of title, description, or password is "" empty.
      alert("You can't leave any field empty");

  }

}