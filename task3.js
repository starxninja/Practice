// const form = document.querySelector("#emailForm");
// const emailInput = document.querySelector("#email");
// const errorMessage = document.querySelector("#error-message");

// const isValidEmail = (email) => {
//   return email.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const email = emailInput.value;

//   if (!isValidEmail(email)) {
//     errorMessage.textContent = "";
//     errorMessage.textContent = "Please enter a valid email address.";
//     emailInput.value = "";
//   } else {
//     errorMessage.textContent = "";
//     alert("Form submitted successfully!");
//     emailInput.value = "";
//   }
// });
$(document).ready(function () {
  $("#emailForm").on("submit", function (event) {
    event.preventDefault();

    const email = $("#email").val().trim();

    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailPattern.test(email)) {
      $("#error-message").text("");
      alert("Form submitted successfully!");
      $("#email").val("");
    } else {
      $("#error-message").text("Please enter a valid email address.");
      $("#email").val("");
    }
  });
});
