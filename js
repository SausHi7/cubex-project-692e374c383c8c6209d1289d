// Your JS here
// Simple menu data
const menu = [
  { name: "Cheese Burger", price: "R45" },
  { name: "Chicken Wrap", price: "R40" },
  { name: "Veggie Salad", price: "R35" },
  { name: "Grilled Chicken", price: "R60" }
];

const container = document.getElementById("menu-items");

// Render menu dynamically
menu.forEach(item => {
  const div = document.createElement("div");
  div.className = "menu-item";

  div.innerHTML = `
    <span>${item.name}</span>
    <span>${item.price}</span>
  `;

  container.appendChild(div);
});
