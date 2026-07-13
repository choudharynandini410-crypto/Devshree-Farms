// ======================================
// DEVSHREE FARMS CART PAGE
// ======================================

// Get cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// HTML Elements
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Display Cart
function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <h2>Your cart is empty 🛒</h2>
            <p><a href="index.html">Continue Shopping</a></p>
        `;

        cartTotal.textContent = 0;
        return;
    }

    cart.forEach(product => {

        const subtotal = product.price * product.quantity;
        total += subtotal;

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `

            <div>

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

            </div>

            <div>

                <button class="minus" data-id="${product.id}">−</button>

                <strong style="margin:0 15px;">
                    ${product.quantity}
                </strong>

                <button class="plus" data-id="${product.id}">+</button>

            </div>

            <div>

                ₹${subtotal}

            </div>

            <button class="remove" data-id="${product.id}">
                🗑
            </button>

        `;

        cartItems.appendChild(item);

    });

    cartTotal.textContent = total;

    attachEvents();

}

displayCart();


// ============================
// Buttons
// ============================

function attachEvents() {

    // PLUS
    document.querySelectorAll(".plus").forEach(btn => {

        btn.onclick = () => {

            const product = cart.find(item => item.id === btn.dataset.id);

            product.quantity++;

            saveCart();

        };

    });

    // MINUS
    document.querySelectorAll(".minus").forEach(btn => {

        btn.onclick = () => {

            const product = cart.find(item => item.id === btn.dataset.id);

            if(product.quantity > 1){

                product.quantity--;

            }

            saveCart();

        };

    });

    // REMOVE
    document.querySelectorAll(".remove").forEach(btn => {

        btn.onclick = () => {

            cart = cart.filter(item => item.id !== btn.dataset.id);

            saveCart();

        };

    });

}


// ============================
// Save Cart
// ============================

function saveCart(){

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}