// const highlightDivs = document.getElementsByClassName("highlightDiv");

// const highlightDiv = highlightDivs[0];

// highlightDiv.addEventListener("mouseenter", function () {
//   highlightDiv.style.backgroundColor = "yellow";
// });

// highlightDiv.addEventListener("mouseleave", function () {
//   highlightDiv.style.backgroundColor = "#e0e0e0";
// });

// Using J-Query

$(document).ready(function () {
  $(".highlightDiv").on("mouseenter", function () {
    $(this).css("background-color", "yellow");
  });

  $(".highlightDiv").on("mouseleave", function () {
    $(this).css("background-color", "initial");
  });
});
