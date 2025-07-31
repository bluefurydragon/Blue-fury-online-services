// Simple auth using localStorage (not secure, for demo only)
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("register-username").value;
      const pass = document.getElementById("register-password").value;
      localStorage.setItem("user", user);
      localStorage.setItem("pass", pass);
      alert("Registered! Now sign in.");
      window.location.href = "login.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("login-username").value;
      const pass = document.getElementById("login-password").value;
      const savedUser = localStorage.getItem("user");
      const savedPass = localStorage.getItem("pass");

      if (user === savedUser && pass === savedPass) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";
      } else {
        alert("Invalid credentials.");
      }
    });
  }
});
