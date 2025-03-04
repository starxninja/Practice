// document
//   .querySelector(".changeTextButton")
//   .addEventListener("click", function () {
//     document.querySelector(".text").textContent = "Usman Ali(Text Changed)";
//   });

// Using J-Query
$(document).ready(function () {
  $(".changeTextButton").on("click", function () {
    $(".text").text("Usman Ali(Text Changed)");
  });
});
