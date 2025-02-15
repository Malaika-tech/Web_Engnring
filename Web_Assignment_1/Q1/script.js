document.addEventListener("DOMContentLoaded", function () {
const Product = [
    {
        name: "Lenovo Thinkpad E16",
        price:"Rs159,653.30 PKR",
        image:"https://p3-ofp.static.pub//fes/cms/2024/04/01/gu1e1p92tx34ttqx4sp8rs2vidfqtr912870.png",
        description:"The Lenovo ThinkPad E16: A durable, high-performance business laptop built for productivity with powerful Intel processors, ample memory, fast storage, and robust security."

    },
    {
        name: "wireless headphones",
        price:"Rs8,400 PKR",
        image:"https://www.pngarts.com/files/9/Wireless-Headphones-PNG-Free-Download.png",
        description:"Noise-cancelling wireless headphones with deep bass"

    },
    {
        name: "Smart Watch",
        price: "Rs26,725 PKR",
        image: "https://png.pngtree.com/png-clipart/20240418/original/pngtree-the-smartwatch-banner-png-image_14878614.png",
        description: "A stylish smartwatch with fitness tracking"

    }
];

const productContainer = document.getElementById("productContainer");

Product.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `<div class="card-inner">
    <div class="card-front">
    <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
            <div class="card-back">
                <p>${product.description}</p>
                <button class="buy-btn">Buy Now</button>
            </div>
        </div>`;

        card.querySelector(".buy-btn").addEventListener("click",()=>{
            console.log(`Purchased:  ${product.name}`);
        });
productContainer.appendChild(card);
       
});
const footer = document.createElement("footer");
footer.innerHTML = `&copy; 2025 Malaika Naveed. All rights reserved.<button id="theme-toggle">🌙</button>`;
document.body.appendChild(footer);
const themeToggle=document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
  } else {
      themeToggle.textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
          themeToggle.textContent = "☀️";
      } else {
          localStorage.setItem("theme", "light");
          themeToggle.textContent = "🌙";
      }
  });
});