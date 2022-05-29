// Declaring the necessary variables
let email=document.getElementById("login-email-input");
let password=document.getElementById("login-password-input");
let create_account=document.getElementById("login-create-account");
let inputs=[email,password];
let email_condition = false;
let password_condtion = false;

// Call the createAccount function upon clicking the create_account button
create_account.onclick=createAccount;

function createAccount(){

    //// If all fields are filled 
  if (email.value != "" && password.value != ""){

    //--- To check the email format if valid or no
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mail_format)){
      email_condition=true;
    }
    else{
      email.style.borderBlockColor="red";
      alert("Enter a valid email address! (example@gmail.com)");
    }

    //--- To check the password format if strong or no
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(password.value.match(passw)){ 
      password_condtion=true;
    }
    else{ 
      password.style.borderBlockColor="red";
      alert('Password must be between 6-20 characters, containing at least one numeric digit, one uppercase and one lowercase letter!')
    }
    }
}    