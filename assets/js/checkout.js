// ==============================
// DEVSHREE FARMS WHATSAPP CHECKOUT
// ==============================

const checkoutBtn = document.getElementById("checkout-btn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        let message = "🌿 *Devshree Farms Order* %0A%0A";

        let total = 0;

        cart.forEach(item => {

            const subtotal = item.price * item.quantity;

            total += subtotal;

            message += `🛒 ${item.name}%0A`;
            message += `Qty: ${item.quantity}%0A`;
            message += `Price: ₹${subtotal}%0A%0A`;

        });

        message += "----------------------------%0A";
        message += `💰 Total: ₹${total}%0A%0A`;

        message += "Name:%0A";
        message += "Phone:%0A";
        message += "Address:%0A";

        const phone = "919627370088";

        window.open(
            `https://wa.me/${phone}?text=${message}`,
            "_blank"
        );

    });

}