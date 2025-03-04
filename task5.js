// const itemInput = document.getElementById("input");
// const addItemButton = document.getElementById("addItem");
// const itemList = document.getElementById("itemList");

// addItemButton.addEventListener("click", function () {
//   const ItemTxt = itemInput.value;

//   if (ItemTxt.trim() !== "") {
//     const listItem = document.createElement("li");
//     listItem.textContent = ItemTxt;

//     itemList.appendChild(listItem);

//     itemInput.value = "";
//   } else {
//     alert("Please enter item first");
//   }
// });

// Using jQuery

$(document).ready(function () {
  $("#addItem").on("click", function () {
    const newItem = $("#input").val();

    if (newItem.trim() !== "") {
      const listItem = $("<li></li>").text(newItem);

      $("#itemList").append(listItem);

      $("#input").val("");
    } else {
      alert("Please enter item first");
    }
  });
});
