document
  .getElementById("signupForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const verificationCode = document.getElementById("verificationCode").value;

    // Front-end validation goes here (e.g., checking required fields, email format, etc.)

    // Send data to the backend
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        mobileNumber,
        verificationCode,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message);
      // Redirect the user to the login page or another success page
    } else {
      const errorData = await response.json();
      console.error(errorData.error);
    }
  });
