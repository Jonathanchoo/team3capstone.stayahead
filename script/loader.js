let spinner = null;

// EventListener to instantiate the navController
document.addEventListener("DOMContentLoaded", async (event) => {
    /*
     * *********************************************************************
     * Instantiate a spinner, currently used in login.html
     * *********************************************************************
    */
    spinner = new Spinner();
    
    /*
    * *********************************************************************
    * Display or hider userProfile link.
    * *********************************************************************
    */

    const token = isAuthenticated();   
    
    const profileContainer = document.getElementById("profileContainer");
    const profileNameContainer = document.getElementById("profileNameContainer");
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");
    const m_loginLink = document.getElementById("m_loginLink");
    const m_logoutLink = document.getElementById("m_logoutLink");
    
    if(!token){
        // User is not logged in
        profileContainer.classList.add("d-none");
        // desktop view
        loginLink.classList.remove("d-none");
        logoutLink.classList.add("d-none");
        // mobile view
        m_loginLink.classList.remove("d-none");
        m_logoutLink.classList.add("d-none");
        
    }
    else{
        // User is logged in
        const user = decodeUser(token);
        profileNameContainer.textContent = user.email;
        // desktop view
        loginLink.classList.add("d-none");
        logoutLink.classList.remove("d-none");
        logoutLink.addEventListener("click", () => {
          logout();
        })
        // mobile_view
        m_loginLink.classList.add("d-none");
        m_logoutLink.classList.remove("d-none");
        m_logoutLink.addEventListener("click", () => {
          logout();
        })
    }
});