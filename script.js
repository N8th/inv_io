function checkLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username && password) {
    window.location.href = "welcome.html";
  } else {
    alert("Please enter both username and password.");
  }
}

document.getElementById("item_form").addEventListener("submit", function (e) {
  e.preventDefault();

  let newItem = {
    partNo: document.getElementById("partNo").value,
    serialNo: document.getElementById("serialNo").value,
    name: document.getElementById("name").value,
    quantity: document.getElementById("quantity").value,
    price: document.getElementById("price").value,
    owner: document.getElementById("owner").value,
    location: document.getElementById("location").value,
    status: document.getElementById("status").value,
  };

  addItem(newItem);
  displayItems();
  clearForm();
});

function addItem(item) {
  let items = JSON.parse(localStorage.getItem("itemsDatabase")) || [];
  items.push(item);
  localStorage.setItem("itemsDatabase", JSON.stringify(items));
}

function clearForm() {
  document.getElementById("item_form").reset();
}

function displayItems() {
  let items = JSON.parse(localStorage.getItem("itemsDatabase")) || [];
  let itemsList = document.getElementById("items_list");
  itemsList.innerHTML = "";

  let table = document.createElement("table");
  table.className = "items_table";

  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  [
    "Part No.",
    "Serial No.",
    "Name",
    "Quantity",
    "Price",
    "Owner",
    "location",
    "Status",
  ].forEach((headerText) => {
    let header = document.createElement("th");
    header.innerText = headerText;
    headerRow.appendChild(header);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  let tbody = document.createElement("tbody");
  items.forEach((item) => {
    let row = document.createElement("tr");
    Object.values(item).forEach((text) => {
      let cell = document.createElement("td");
      cell.innerText = text;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  itemsList.appendChild(table);
}

document.addEventListener("DOMContentLoaded", displayItems);
