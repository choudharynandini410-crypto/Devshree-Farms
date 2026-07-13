// ===============================
// DEVSHREE FARMS SHOPPING CART
// ===============================

// Load cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Counter
function updateCartCount() {

    const counter = document.getElementById("cart-count");

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    counter.textContent = totalItems;

}

updateCartCount();

// Select all Add to Cart buttons
const buttons = document.querySelectorAll(".product-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        // Check if product already exists
        const existingProduct = cart.find(item => item.id === id);

        if (existingProduct) {

            existingProduct.quantity += quantity;

        } else {
            const quantity = Number(
    button.parentElement.querySelector(".qty").innerText
);

            cart.push({
                id,
                name,
                price,
                quantity
            });

        }

        // Save
        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        // Toast Notification

const toast = document.getElementById("toast");
const toastText = document.getElementById("toast-text");

toastText.innerText = name + " added successfully!";

toast.classList.add("show");

setTimeout(() => {

    toast.classList.remove("show");

},3000);

    });

});

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scroll =
window.scrollY;

const height =
document.documentElement.scrollHeight
-
window.innerHeight;

const progress =
(scroll/height)*100;

progressBar.style.width =
progress+"%";

});
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);

// Run once when page loads
revealSections();
console.log("App.js Loaded");

// ==========================
// TESTIMONIAL SLIDER
// ==========================

const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

if (testimonials.length > 0) {

    setInterval(() => {

        testimonials[current].classList.remove("active");

        current++;

        if (current >= testimonials.length) {

            current = 0;

        }

        testimonials[current].classList.add("active");

    }, 4000);

}
// ==========================
// FAQ ACCORDION
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

item.classList.toggle("active");

});

});
// ==========================
// BACK TO TOP
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}
// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// ==========================
// PRODUCT SEARCH
// ==========================

// ==========================
// PRODUCT SEARCH
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");

    const productCards = document.querySelectorAll(".product-card");

    if (!searchInput) {
        console.log("Search input not found");
        return;
    }

    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase().trim();

        productCards.forEach(card => {

            const productName = card.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});
// ==========================
// QUANTITY SELECTOR
// ==========================

document.querySelectorAll(".product-card").forEach(card => {

    const minus = card.querySelector(".minus");
    const plus = card.querySelector(".plus");
    const qty = card.querySelector(".qty");

    let count = 1;

    plus.addEventListener("click", () => {

        count++;

        qty.innerText = count;

    });

    minus.addEventListener("click", () => {

        if(count > 1){

            count--;

            qty.innerText = count;

        }

    });

});
// ==========================
// BUY NOW
// ==========================
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = button.dataset.price;

        const message =
`Hello Devshree Farms,
I want to buy:

Product: ${name}
Price: ₹${price}

Please confirm my order.`;

        window.open(
            `https://wa.me/919627370088?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

});
// ==========================
// PRODUCT SORTING
// ==========================

const sortSelect = document.getElementById("sortProducts");
const productsGrid = document.querySelector(".products-grid");

if (sortSelect && productsGrid) {

    sortSelect.addEventListener("change", () => {

        const cards = Array.from(productsGrid.querySelectorAll(".product-card"));

        if (sortSelect.value === "low") {

            cards.sort((a, b) => {

                return Number(a.querySelector(".product-btn").dataset.price) -
                       Number(b.querySelector(".product-btn").dataset.price);

            });

        }

        if (sortSelect.value === "high") {

            cards.sort((a, b) => {

                return Number(b.querySelector(".product-btn").dataset.price) -
                       Number(a.querySelector(".product-btn").dataset.price);

            });

        }

        if (sortSelect.value === "name") {

            cards.sort((a, b) => {

                return a.querySelector("h3").textContent.localeCompare(
                    b.querySelector("h3").textContent
                );

            });

        }

        cards.forEach(card => productsGrid.appendChild(card));

    });

}
// ==========================
// PRODUCT DETAILS MODAL
// ==========================

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalCart = document.getElementById("modalCart");
const modalBuy = document.getElementById("modalBuy");
const closeModal = document.querySelector(".close-modal");

// Open Modal
document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("click", (e) => {

        // Don't open when Add to Cart or Buy Now is clicked
        if (
            e.target.classList.contains("product-btn") ||
            e.target.classList.contains("buy-btn") ||
            e.target.classList.contains("plus") ||
            e.target.classList.contains("minus")
        ) {
            return;
        }

        modalImage.src = card.querySelector("img").src;
        modalTitle.innerText = card.querySelector("h3").innerText;
        modalPrice.innerText = card.querySelector("h4").innerText;
        modalDescription.innerText = card.querySelector("p").innerText;
modalCart.dataset.id = card.querySelector(".product-btn").dataset.id;
modalCart.dataset.name = card.querySelector(".product-btn").dataset.name;
modalCart.dataset.price = card.querySelector(".product-btn").dataset.price;

modalBuy.dataset.id = card.querySelector(".buy-btn").dataset.id;
modalBuy.dataset.name = card.querySelector(".buy-btn").dataset.name;
modalBuy.dataset.price = card.querySelector(".buy-btn").dataset.price;
        modal.classList.add("show");

    });

});

// Close Button
closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});

// Close when clicking outside
window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

});
// ==========================
// MODAL ADD TO CART
// ==========================

modalCart.addEventListener("click", () => {

    const id = modalCart.dataset.id;
    const name = modalCart.dataset.name;
    const price = Number(modalCart.dataset.price);

    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id,
            name,
            price,
            quantity:1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    modal.classList.remove("show");

});
// ==========================
// MODAL BUY NOW
// ==========================

modalBuy.addEventListener("click", () => {

    const name = modalBuy.dataset.name;
    const price = modalBuy.dataset.price;

    const message =
`Hello Devshree Farms,
I want to buy:

Product: ${name}
Price: ₹${price}

Please confirm my order.`;

    window.open(
        `https://wa.me/919627370088?text=${encodeURIComponent(message)}`,
        "_blank"
    );

    modal.classList.remove("show");

});