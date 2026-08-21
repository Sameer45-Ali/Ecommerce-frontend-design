/**
 * Authentication & Account Management Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  const tabSignIn = document.getElementById("tabSignIn");
  const tabSignUp = document.getElementById("tabSignUp");
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");

  // Tab switching
  tabSignIn?.addEventListener("click", () => {
    tabSignIn.classList.add("active");
    tabSignUp.classList.remove("active");
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
  });

  tabSignUp?.addEventListener("click", () => {
    tabSignUp.classList.add("active");
    tabSignIn.classList.remove("active");
    signUpForm.style.display = "block";
    signInForm.style.display = "none";
  });

  // Password visibility toggle
  document.querySelectorAll(".password-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      if (input && input.type === "password") {
        input.type = "text";
        btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      } else if (input) {
        input.type = "password";
        btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
      }
    });
  });

  // Demo Login Autofill
  document.getElementById("demoLoginBtn")?.addEventListener("click", () => {
    const emailInput = document.getElementById("loginEmail");
    const passInput = document.getElementById("loginPassword");
    if (emailInput && passInput) {
      emailInput.value = "demo.user@example.com";
      passInput.value = "SecurePass123!";
      showToast("Demo credentials filled!", "success");
    }
  });

  // Sign In Form Submit
  signInForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail")?.value;
    showToast(`Welcome back, ${email.split('@')[0]}! Redirecting...`, "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1200);
  });

  // Sign Up Form Submit
  signUpForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName")?.value;
    showToast(`Account successfully created for ${name}!`, "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1200);
  });
});