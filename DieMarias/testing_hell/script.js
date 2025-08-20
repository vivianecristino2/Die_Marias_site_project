// Create the button
const button = document.createElement("button");
button.textContent = "☰ Menu";
button.style.fontSize = "18px";
button.style.backgroundColor = "#333";
button.style.color = "white";
button.style.border = "none";
button.style.padding = "10px 20px";
button.style.cursor = "pointer";

// Create the menu container
const menu = document.createElement("div");
menu.style.display = "none";
menu.style.backgroundColor = "#f1f1f1";
menu.style.padding = "10px";
menu.style.marginTop = "5px";

// Menu items
const links = ["PT", "DE", "EN"];
links.forEach(text => {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = text;
  link.style.display = "block";
  link.style.color = "#333";
  link.style.padding = "8px";
  link.style.textDecoration = "none";
  link.addEventListener("mouseover", () => link.style.backgroundColor = "#ddd");
  link.addEventListener("mouseout", () => link.style.backgroundColor = "transparent");
  menu.appendChild(link);
});

// Toggle functionality
button.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Append to page
const app = document.getElementById("app");
app.appendChild(button);
app.appendChild(menu);
