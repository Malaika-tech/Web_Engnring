let products = [
    {id: 1, name: "Laptop", price: 80000},
{id: 2, name: "Phone", price: 50000},
{id: 3, name: "Smartwatch", price: 3000},
{id: 4, name: "Headphones", price: 2000}];

let selectedProducts = new Set();
let purchaseCount = 0;

const productList = document.getElementById("productList");
products.forEach(product =>{
    let li = document.createElement("li");
    li.textContent = `${product.name} - PKR ${product.price}`;
    li.onclick = () => toggleProduct(product.id);
    productList.appendChild(li);
});
const toggleProduct = (productId) => {
    if (selectedProducts.has(productId)) {
        selectedProducts.delete(productId);
    } else {
        selectedProducts.add(productId);
    }
    updatePrice();
};

// Extract discount percentage from roll number
const getDiscount = () => {
    let rollNumber = document.getElementById("rollNumber").value;
    let match = rollNumber.match(/\d{2,}/g);  // Extract digits
    if (!match) return 0;

    let middleDigits = match[0].slice(1, 3);  // Get middle two digits
    let discount = parseInt(middleDigits) || 0;
    
    return Math.min(discount, purchaseCount >= 2 ? 60 : 50); // Max 50% (60% after 2 purchases)
};

// Calculate total and discounted price
const updatePrice = () => {
    let selectedItems = [...selectedProducts].map(id => products.find(p => p.id === id));
    let totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
    
    let discount = getDiscount();
    let discountedPrice = totalPrice - (totalPrice * discount / 100);

    // Apply promo code discount
    let promoCode = document.getElementById("promoCode").value;
    if (promoCode === "EXTRA10") {
        discountedPrice -= discountedPrice * 0.10; // Extra 10% off
    }

    document.getElementById("totalPrice").textContent = totalPrice;
    document.getElementById("discountedPrice").textContent = Math.round(discountedPrice);
};

// Confirm purchase
const purchase = () => {
    if (selectedProducts.size === 0) {
        alert("Please select at least one product.");
        return;
    }
    
    purchaseCount++;
    alert("Purchase successful!");
    selectedProducts.clear();
    updatePrice();
};