// Declaring the necessary variables
let email=document.getElementById("login-email-input");
let password=document.getElementById("login-password-input");
let log_in=document.getElementById("login-create-account");
let inputs=[email,password];
let email_condition = false;
let password_condtion = false;

// Call the logIn function upon clicking the log_in button
log_in.onclick=logIn;

function logIn(){

    // Making sure that the border color is black
    for (let i=0; i<inputs.length; i++){
        inputs[i].style.borderBlockColor="black";
      }

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

        // If fields are filled correctly
        if (email_condition == true && password_condtion == true){
            
            // Emptying the fields
            for (let i=0; i<inputs.length; i++){
            inputs[i].value="";
            }
            // Send request POST
            axios.post("test.php",{
                email:email,
                password:password
            })
            .then((response) => {
                console.log(response);
            });
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