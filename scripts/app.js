let name1 = localStorage.getItem('name');
sign_up_bttn = document.querySelector("#signup-btn");

if(name1){
  sign_up_bttn.innerText = 'welcome ' + name1;
};