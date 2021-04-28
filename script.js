"use strict";

let m = document.querySelector(".btn");
//addition of items
m.addEventListener("click", function () {
  let n = document.forms["order"]["noi"].value;
  for (let i = 0; i < n; i++) {
    document.querySelector(".order").appendChild(document.createElement("br"));
    let items = document.createElement("input");
    let quantity = document.createElement("input");
    items.setAttribute("type", "text");
    quantity.setAttribute("type", "number");
    document.querySelector(".order").appendChild(items);
    document.querySelector(".order").appendChild(quantity);
  }
});
