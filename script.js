document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const username = document.querySelector(
      'input[placeholder="Username or Email"]'
    ).value;
    const password = document.querySelector(
      'input[placeholder="Password"]'
    ).value;

    // Username validation (must contain @)
    if (!username.includes("@")) {
      alert("Username must contain @");
      return;
    }

    // Password validation (cannot be empty)
    if (password === "") {
      alert("Password is required");
      return;
    }

    // If both validations pass, proceed with form submission
    alert("Login successful!");
    this.submit();
  });
