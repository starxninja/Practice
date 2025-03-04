// const updateButton = document.getElementById("updateButton");

// updateButton.addEventListener("click", function () {
//   const items = document.querySelectorAll(".item");

//   items.forEach(function (item) {
//     item.textContent = "Updated!";
//   });
// });

// Using J-Query

$(document).ready(function () {
  $("#updateButton").on("click", function () {
    $(".item").text("Updated!");
  });
});
