<!DOCTYPE html>
<html>
  <head>
    <title>Add/View</title>
    <link rel="icon" type="image/x-icon" href="./images/skunk_logo.png" />
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <link rel="icon" href="./images/skunk_logo.png">
  <link rel="stylesheet" href="styles.css" />
  <body>
    <div class="hero">
      <a href="https://setnaio.com/">
        <img
          src="./images/SetnaIO_Animation.gif"
          alt="Setna IO Animation"
          id="plane_animation"
        />
      </a>
      <a href="./welcome.html">
        <img src="./images/skunk_logo.png" alt="Skunk Logo" id="skunk_image" />
      </a>
    </div>

    <div class="container add_items_container">
      <div class="section" id="add_item_section">
        <h2>Add Item</h2>
        <form id="item_form">
          <label for="partNo">Part No.:</label>
          <input type="text" id="partNo" name="partNo" /><br />

          <label for="serialNo">Serial No.:</label>
          <input type="text" id="serialNo" name="serialNo" /><br />

          <label for="name">Name:</label>
          <input type="text" id="name" name="name" /><br />

          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" /><br />

          <label for="price">Price:</label>
          <input type="number" step="0.01" id="price" name="price" /><br />

          <label for="owner">Owner:</label>
          <input type="text" id="owner" name="owner" /><br />

          <label for="location">Location:</label>
          <input type="text" id="location" name="location" /><br />

          <label for="status">Status:</label>
          <select id="status" name="status">
            <option value="New">New</option>
            <option value="Used">Used</option>
            <option value="Broken">Broken</option>
            <option value="Lost">Lost</option>
          <br />

          <input type="submit" value="Add Item" />
        </form>
      </div>
      <!-- used to hide the full inventory, this will be on a seperate page later -->
      <!-- you can also scroll down to see instead -->
      <div class="pageGap">
        <a href="#view_items_section">View all Inventory</a>
      </div>
      <div class="container inventory_container">
        <div class="section" id="view_items_section">
          <h2 class="white_text">Items List</h2>
          <!-- temporary button. future will use an api not local storage -->
          <button id="clearButton" onclick="localStorage.clear();">clear all items</button>
          <!-- temporary button. future will use an api not local storage -->
          <br>
          <div id="items_list"></div>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
