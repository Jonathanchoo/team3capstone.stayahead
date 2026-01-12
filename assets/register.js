const registerbtn = document.getElementById('register-submit');

const userEmailSaved = JSON.parse(localStorage.getItem("userEmailString"));
const userScoreSaved = JSON.parse(localStorage.getItem("userScoreString"));
function autofill() {
    if (userEmailSaved) {
        document.getElementById("emailInput").value = userEmailSaved;
    }
};
autofill(); // auto fill email

registerbtn.addEventListener('click', async function (event) {
    event.preventDefault();
    const userEmail = document.getElementById('emailInput').value;
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    const repeatpassword = document.getElementById('repeatPasswordInput').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()\[\]{}|\\/\-+=_.:;,\<\>])(?=.*[^\s]).{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9]([._-]?[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

    if ((!emailRegex.test(userEmail)) || userEmail === "") {
        document.getElementById('invalidEmail').classList.remove("d-none");
        return;
    }

    if ((!usernameRegex.test(username)) || username === "") {
        document.getElementById('invalidUsername').classList.remove("d-none");
        return;
    }

    if ((!passwordRegex.test(password)) || password === "") {
        document.getElementById('invalidPassword').classList.remove("d-none");
        return;
    }

    if (repeatpassword === "" || repeatpassword !== password) {
        document.getElementById('invalidRepeatpassword').classList.remove("d-none");
        return;
    }

    // TODO: send data to backend for validation
    const formData = {
        email: userEmail,
        username: username,
        password: password,
        score: userScoreSaved
    }

    try {
        const response = await fetch(
            "http://localhost:3000/register",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            }
        );

        if (response.ok) {
            //TODO: Registration success, authentication to go profile page
            localStorage.setItem("isLoggedIn", "true"); // this 2 line to be confirmed **
            localStorage.setItem("username", username); // **
            window.location.href = "profile.html";
            return;

        } else {
            // manage error 400, 403, 500 
            alert("Registration unsucessful.")
        }
    } catch (error) {
        alert("An error has occured. Please try again.")
    }
    alert("Registration Successful"); // this line to be removed after testing
    localStorage.removeItem("userEmailString");
    localStorage.removeItem("userscore");
});