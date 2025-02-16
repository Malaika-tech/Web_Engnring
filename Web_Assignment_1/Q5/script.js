let products = [
    {id: 1, name: "Laptop", price: 80000},
    {id: 2, name: "Phone", price: 50000},
    {id: 3, name: "Smartwatch", price: 3000},
    {id: 4, name: "Headphones", price: 2000}
];

const promoCodes = ['students', 'extras'];
let selectedProducts = new Set();
let purchaseCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    initializeProducts();

    const rollNumberInput = document.getElementById('rollNumber');
    const promoCodeInput = document.getElementById('promoCodes');

    if (rollNumberInput) rollNumberInput.addEventListener('input', updateCart);
    if (promoCodeInput) promoCodeInput.addEventListener('input', updateCart);
});

const initializeProducts = () => {
    const productList = document.getElementById("productList");

    if (!productList) {
        console.error("Error: productList element not found!");
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <input type="checkbox" data-id="${product.id}"> 
            ${product.name} - $${product.price}
        `;
        productList.appendChild(productCard);
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateCart);
    });
};

const validRollNumber = (rollNumber) => {
    const rollPattern = /^\d{2}[A-Z]-\d{4}$/;
    if (!rollPattern.test(rollNumber)) {
        alert("Please enter a valid roll number (e.g., 21F-9445)");
        return false;
    }
    return true;
};

const getDiscount = (rollNumber) => {
    const middleNums = rollNumber.split('-')[1].substring(0, 2);
    const discount = parseInt(middleNums);
    return purchaseCount >= 2 ? Math.min(discount, 60) : Math.min(discount, 50);
};

const getPromoCode = (promoCode) => {
    if (promoCode === 'students') return 10;
    if (promoCode === 'extras') return 5;
    return 0;
};

const updateCart = () => {
    const rollNumberInput = document.getElementById('rollNumber');
    const promoCodeInput = document.getElementById('promoCodes');
    const rollNumError = document.getElementById('rollNumberError');

    if (!rollNumberInput || !promoCodeInput) {
        console.error("Error: Input fields not found.");
        return;
    }

    const rollNumber = rollNumberInput.value.trim();
    const promoCode = promoCodeInput.value.trim();

    if (!validRollNumber(rollNumber)) {
        rollNumError.style.display = 'block';
        return;
    }
    rollNumError.style.display = 'none';

    selectedProducts.clear();
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const product = products.find(p => p.id === parseInt(checkbox.dataset.id));
        if (product) selectedProducts.add(product);
    });

    if (selectedProducts.size === 0) {
        alert("Please select at least one product.");
        return;
    }

    const baseDiscount = getDiscount(rollNumber);
    const promoDiscount = getPromoCode(promoCode);
    const totalDiscount = baseDiscount + promoDiscount;

    const selectedProductsArray = Array.from(selectedProducts);
    const originalTotal = selectedProductsArray.reduce((sum, product) => sum + product.price, 0);
    const finalPrice = originalTotal * (1 - totalDiscount / 100);

    const selectedProductsDiv = document.getElementById('selectedProducts');
    const discountInfoDiv = document.getElementById('discountInfo');
    const totalPriceDiv = document.getElementById('totalPrice');

    selectedProductsDiv.innerHTML = selectedProductsArray.map(product =>
        `${product.name} - $${product.price}`
    ).join('<br>');

    discountInfoDiv.innerHTML = `
        Roll Number Discount: ${baseDiscount}%<br>
        ${promoDiscount ? `Promo Code Discount: ${promoDiscount}%<br>` : ''}
        Total Discount: ${totalDiscount}%
    `;

    totalPriceDiv.innerHTML = `
        Original Total: $${originalTotal.toFixed(2)}<br>
        Final Price: $${finalPrice.toFixed(2)}
    `;

    purchaseCount++;
};
