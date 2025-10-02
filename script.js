    // Login form validation
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-button");
    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!email || !password) {
                alert("Please fill in both Email and Password.");
                event.preventDefault();
            } else {
                window.location.href = "index.html";
            }
        });
    }
});