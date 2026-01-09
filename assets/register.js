const registerbtn = getElementById('register-submit');

const userEmailSaved = JSON.parse(localStorage.getItem("userEmailString"));
const userScoreSaved = JSON.parse(localStorage.getItem("userScoreString"));
function autofill(){
    if(userEmailSaved){
        document.getElementById("emailInput").value = userEmailSaved; 
    }
};
autofill();
alert("ran");
registerbtn.addEventListener('click', function (event) {
    event.preventDefault(); 
    const userEmail = document.getElementById('emailInput').value;
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    const repeatpassword = document.getElementById('repeatPasswordInput').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()\[\]{}|\\/\-+=_.:;,\<\>])(?=.*[^\s]).{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9]([._-]?[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

    if((!emailRegex.test(userEmail))|| userEmail === ""){
        document.getElementById('invalidEmail').classList.remove("d-none");
        return;
    }

    if((!usernameRegex.test(username))|| username === ""){
        document.getElementById('invalidUsername').classList.remove("d-none");
        return;
    }

    if((!passwordRegex.test(password))|| password === ""){
        document.getElementById('invalidPassword').classList.remove("d-none");
        return;
    }

    if((!emailRegex.test(repeatpassword))|| repeatpassword === "" || repeatpassword !== "password" ){
        document.getElementById('invalidRepeatpassword').classList.remove("d-none");
        return;
    }


    console.log ("Account Registered");
    alert("Registration Successful");

    
});