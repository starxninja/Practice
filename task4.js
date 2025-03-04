// const toggleButton = document.getElementById("toggleBtn");
// const extraInfo = document.getElementById("extraInfo");

// toggleButton.addEventListener("click", function () {
//   extraInfo.classList.toggle("hidden");

//   if (extraInfo.classList.contains("hidden")) {
//     toggleButton.textContent = "Show Info";
//   } else {
//     toggleButton.textContent = "Hide Info";
//   }
// });

// Using J-Query
$(document).ready(function () {
  $("#toggleBtn").on("click", function () {
    document.getElementById("extraInfo").classList.toggle("hidden");

    const isHidden = $("#extraInfo").hasClass("hidden");
    $(this).text(isHidden ? "Show Content" : "Hide Content");
  });
});
