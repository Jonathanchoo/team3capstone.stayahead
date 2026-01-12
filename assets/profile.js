// js for profile.html 
const isLoggedIn = localStorage.getItem("isLoggedIn"); // check local storage if user is logged in
const username = localStorage.getItem("username"); 

if (!isLoggedIn) {
    window.location.href = "signuplogin.html";  // if not log in to return user to log in page
}

document.getElementById("profile-username").textContent = username; // to be confirmed id of elemen
