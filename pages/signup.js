// Declaring the necessary variables
let username=document.getElementById("signup-username-input");
let email=document.getElementById("signup-email-input");
let password=document.getElementById("signup-password-input");
let create_account=document.getElementById("signup-create-account");
let inputs=[username,email,password];

let email_condition = false;
let password_condtion = false;

// Call the createAccount function upon clicking the create_account button
create_account.onclick=createAccount;

function createAccount(){

    // Making sure that the border color is black
    for (let i=0; i<inputs.length; i++){
        inputs[i].style.borderBlockColor="black";
    }

    //// If all fields are filled 
    if (username.value != "" && email.value != "" && password.value != ""){

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