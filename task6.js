//const clickButton = document.getElementById("clickButton");
// const clickCount = document.getElementById("clickCount");

// let counter = 0;

// clickButton.addEventListener("click", function () {
//   counter++;

//   clickCount.textContent = counter;
// });

// Using J-Query

const clickButton = document.getElementById("clickButton");
const clickCount = document.getElementById("clickCount");
let count = 0;

$(document).ready(function () {
  $("#clickButton").on("click", function () {
    count++;
    $("#clickCount").text(count);
  });
});
