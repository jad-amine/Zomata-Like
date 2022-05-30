// Declaring the necessary variables
let email = document.getElementById("email");
let password = document.getElementById("pass");
let log_in = document.getElementById("bttn");
let inputs = [email,password];
let email_condition = false;
let password_condtion = false;


log_in.onclick = send_data;

// function send_data(){
//     let data = new FormData();
//     data.append('email', email.value);
//     data.append('password', password.value);
//     axios.post('http://localhost/Zomato/Zomato_Back-End/login.php', 
//     data)
//     .then(function (response) {
//         if(response.data.name){
//             console.log(response.data.name)
//             let id = response.data.user_id;
//             localStorage.setItem('id', id);
//             window.location.href = "../index.html";
//         } else{
//             console.log(response.data);
//             alert('user not found')
//         }
//     })
//     .catch((e) => console.log(e));
    
// }

//Call the logIn function upon clicking the log_in button
// log_in.onclick=logIn;

function send_data(){

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
        // var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        // if(password.value.match(passw)){ 
        // password_condtion=true;
        // }
        // else{ 
        // password.style.borderBlockColor="red";
        // alert('Password must be between 6-20 characters, containing at least one numeric digit, one uppercase and one lowercase letter!')
        // }

        // If fields are filled correctly
        if (email_condition == true){
            
            // // Emptying the fields
            // for (let i=0; i<inputs.length; i++){
            // inputs[i].value="";
            // }
            // Send request POST
        let data = new FormData();
        data.append('email', email.value);
        data.append('password', password.value);

        axios.post('http://localhost/Zomato/Zomato_Back-End/login.php', data)
        .then(function (response) {
            if(response.data.name){
            console.log(response.data.name)
            let id = response.data.user_id;
            localStorage.setItem('id', id);
            window.location.href = "../index.html";
            } else{
                console.log(response.data);
                alert('user not found')
            }
        })
        .catch((e) => console.log(e));
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