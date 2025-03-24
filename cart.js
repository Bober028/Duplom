// Функції для роботи з кошиком
function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(phone) {
    const cart = getCart();
    cart.push(phone);
    saveCart(cart);
    updateCartCount();
    alert("Телефон додано до кошика!");
}

function removeFromCart(phoneName) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.name !== phoneName);
    saveCart(updatedCart);
    displayCart();
    updateCartCount();
}

function displayCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");
    const cart = getCart();
    
    if (!cartItems) return; // Перевіряємо чи ми на сторінці кошика
    
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Кошик порожній</p>";
        totalPrice.textContent = "0";
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} грн</div>
            </div>
            <div class="cart-item-actions">
                <button class="remove-from-cart" onclick="removeFromCart('${item.name}')">
                    Видалити
                </button>
            </div>
        </div>
    `).join("");

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = total;
}

function updateCartCount() {
    const cart = getCart();
    const cartButton = document.querySelector(".cart-button");
    if (cartButton) {
        const count = cart.length;
        cartButton.innerHTML = count > 0 ? `🛒 Кошик (${count})` : "🛒 Кошик";
    }
}

function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Ваш кошик порожній!');
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Будь ласка, увійдіть в систему для оформлення замовлення!');
        return;
    }

    if (confirm('Підтвердіть оформлення замовлення?')) {
        alert('Замовлення оформлено! Дякуємо за покупку!');
        saveCart([]); // Очищаємо кошик
        displayCart();
        updateCartCount();
    }
}

// Оновлюємо відображення кошика при завантаженні сторінки
window.addEventListener('load', function() {
    displayCart();
    updateCartCount();
});

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.classList.toggle('dark-mode'));
  
  // Зберігаємо поточну тему в localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

// Функція для застосування збереженої теми
function applyTheme() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.add('dark-mode'));
  }
}

// Застосовуємо тему при завантаженні сторінки
document.addEventListener('DOMContentLoaded', applyTheme); 