import { app } from "../firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

const auth = getAuth(app);

// Handle Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account created!");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("Registration failed: " + error.message);
      });
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Welcome back!");
        window.location.href = "lobby.html"; // update as needed
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}