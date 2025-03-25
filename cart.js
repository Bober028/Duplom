// Функції для роботи з кошиком
function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(phone) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(phone);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    alert('Товар додано до кошика!');
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Ваш кошик порожній</div>';
        document.getElementById('checkoutButton').disabled = true;
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => {
        const imagePath = `images/${formatImageName(item.name)}.jpg`;
        return `
            <div class="cart-item">
                <img src="${imagePath}" alt="${item.name}" class="cart-item-image" 
                    onerror="this.src='images/placeholder.jpg'">
                <div class="cart-item-details">
                    <div class="cart-item-info">
                        <h3 class="cart-item-name">${item.name}</h3>
                        <p class="cart-item-brand">Бренд: ${item.brand}</p>
                        <p class="cart-item-price">${item.price} грн</p>
                    </div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-button" onclick="updateQuantity(${index}, -1)">-</button>
                            <span class="quantity-value">${item.quantity || 1}</span>
                            <button class="quantity-button" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                        <button class="remove-button" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i>
                            Видалити
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    updateCartTotal();
}

function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart[index]) {
        cart[index].quantity = Math.max(1, (cart[index].quantity || 1) + change);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartTotal();
    }
}

function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    
    document.getElementById('totalAmount').textContent = total.toLocaleString();
    
    // Оновлюємо стан кнопки оформлення замовлення
    const checkoutButton = document.getElementById('checkoutButton');
    if (checkoutButton) {
        checkoutButton.disabled = cart.length === 0;
    }
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Ваш кошик порожній');
        return;
    }
    
    // Тут буде логіка оформлення замовлення
    alert('Дякуємо за замовлення! Ми зв\'яжемося з вами найближчим часом.');
    
    // Очищаємо кошик після успішного замовлення
    localStorage.removeItem('cart');
    displayCart();
    updateCartTotal();
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
    updateCartTotal();
    updateCartCounter();
    
    // Перевіряємо, чи увімкнена темна тема
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-theme');
    }
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

function formatImageName(phoneName) {
    let imageName = phoneName.toLowerCase();
    
    // Спеціальні випадки для конкретних моделей
    const specialCases = {
        'iphone se (2022)': 'iphonese2022',
        'realme 9 pro+': 'realme9proplus',
        'nokia 5.4': 'nokia54',
        'nokia 8.3 5g': 'nokia835g'
    };

    // Перевіряємо, чи є ця назва в спеціальних випадках
    if (specialCases[imageName]) {
        return specialCases[imageName];
    }
    
    // Спеціальна обробка для Samsung Galaxy
    if (imageName.includes('samsung galaxy')) {
        imageName = 'samsunggalaxy' + imageName.split('samsung galaxy')[1].trim();
    }
    
    // Спеціальна обробка для iPhone
    if (imageName.includes('iphone')) {
        imageName = 'iphone' + imageName.split('iphone')[1].trim();
    }
    
    return imageName
        .replace(/ /g, '')           // Видаляємо пробіли
        .replace(/[()]/g, '')        // Видаляємо дужки
        .replace(/[+]/g, 'plus')     // Замінюємо + на plus
        .replace(/[.]/g, '')         // Видаляємо крапки
        .replace(/[^a-z0-9]/g, '');  // Видаляємо всі інші спеціальні символи
}

// Функція для оновлення лічильника кошика
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const counter = document.getElementById('cartCounter');
    if (counter) {
        counter.textContent = cart.length;
        counter.style.display = cart.length > 0 ? 'flex' : 'none';
    }
} 