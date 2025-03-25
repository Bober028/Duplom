// script.js
const phones = [
  { name: "iPhone 14", brand: "Apple", price: 28000, year: 2022, description: "Apple iPhone 14 with A15 Bionic chip and improved camera system." },
  { name: "iPhone 13", brand: "Apple", price: 25000, year: 2021, description: "Apple iPhone 13 with A15 Bionic chip and great camera." },
  { name: "iPhone 12", brand: "Apple", price: 20000, year: 2020, description: "iPhone 12 with A14 chip and dual cameras." },
  { name: "Samsung Galaxy S23", brand: "Samsung", price: 28000, year: 2023, description: "Samsung Galaxy S23 with Snapdragon 8 Gen 2 and 200MP camera." },
  { name: "Samsung Galaxy S22", brand: "Samsung", price: 25000, year: 2022, description: "Samsung Galaxy S22 with 120Hz Dynamic AMOLED display and Snapdragon 8 Gen 1." },
  { name: "Samsung Galaxy S21", brand: "Samsung", price: 22000, year: 2021, description: "Samsung Galaxy S21 with AMOLED screen and Snapdragon 888." },
  { name: "Samsung Galaxy A54", brand: "Samsung", price: 16000, year: 2023, description: "Samsung Galaxy A54 with Super AMOLED display and 5G connectivity." },
  { name: "Xiaomi 13", brand: "Xiaomi", price: 23000, year: 2023, description: "Xiaomi 13 with Snapdragon 8 Gen 2 and Leica camera system." },
  { name: "Xiaomi Mi 11", brand: "Xiaomi", price: 17000, year: 2021, description: "Xiaomi Mi 11 with Snapdragon 888 and 108MP camera." },
  { name: "Xiaomi Redmi Note 12", brand: "Xiaomi", price: 12000, year: 2023, description: "Xiaomi Redmi Note 12 with Snapdragon 4 Gen 1 and 50MP camera." },
  { name: "OnePlus 11", brand: "OnePlus", price: 28000, year: 2023, description: "OnePlus 11 with Snapdragon 8 Gen 2 and Hasselblad camera." },
  { name: "OnePlus 9 Pro", brand: "OnePlus", price: 24000, year: 2021, description: "OnePlus 9 Pro with Snapdragon 888 and excellent performance." },
  { name: "OnePlus Nord 2T", brand: "OnePlus", price: 18000, year: 2022, description: "OnePlus Nord 2T with MediaTek Dimensity 1300 and fast charging." },
  { name: "Google Pixel 7 Pro", brand: "Google", price: 35000, year: 2022, description: "Google Pixel 7 Pro with Tensor G2 chip and 5x optical zoom camera." },
  { name: "Google Pixel 6", brand: "Google", price: 20000, year: 2021, description: "Google Pixel 6 with Tensor chip and clean Android experience." },
  { name: "Google Pixel 6a", brand: "Google", price: 15000, year: 2022, description: "Google Pixel 6a with Tensor chip and 6.1-inch OLED display." },
  { name: "Motorola Edge 40", brand: "Motorola", price: 23000, year: 2023, description: "Motorola Edge 40 with AMOLED display and MediaTek Dimensity 8020." },
  { name: "Motorola Edge 30", brand: "Motorola", price: 21000, year: 2022, description: "Motorola Edge 30 with Snapdragon 778G and 144Hz OLED display." },
  { name: "Realme GT 2 Pro", brand: "Realme", price: 25000, year: 2022, description: "Realme GT 2 Pro with Snapdragon 8 Gen 1 and 120Hz AMOLED display." },
  { name: "Oppo Find X5 Pro", brand: "Oppo", price: 32000, year: 2022, description: "Oppo Find X5 Pro with Snapdragon 8 Gen 1 and Hasselblad camera." },
  { name: "Oppo Reno 8 Pro", brand: "Oppo", price: 25000, year: 2022, description: "Oppo Reno 8 Pro with MediaTek Dimensity 8100-Max and AMOLED display." },
  { name: "Huawei P50 Pro", brand: "Huawei", price: 35000, year: 2021, description: "Huawei P50 Pro with Snapdragon 888 and 50MP Leica camera." },
  { name: "Huawei Mate 40 Pro", brand: "Huawei", price: 38000, year: 2020, description: "Huawei Mate 40 Pro with Kirin 9000 and 50MP camera." },
  { name: "Asus Zenfone 9", brand: "Asus", price: 24000, year: 2022, description: "Asus Zenfone 9 with Snapdragon 8 Gen 1 and 120Hz AMOLED display." },
  { name: "Asus ROG Phone 6", brand: "Asus", price: 30000, year: 2022, description: "Asus ROG Phone 6 with Snapdragon 8 Gen 1 and gaming features." },
  { name: "Vivo X80 Pro", brand: "Vivo", price: 29000, year: 2022, description: "Vivo X80 Pro with Snapdragon 8 Gen 1 and 50MP camera." },
  { name: "Vivo V23 Pro", brand: "Vivo", price: 23000, year: 2022, description: "Vivo V23 Pro with MediaTek Dimensity 1200 and AMOLED display." },
  { name: "Sony Xperia 1 IV", brand: "Sony", price: 45000, year: 2022, description: "Sony Xperia 1 IV with Snapdragon 8 Gen 1 and 4K OLED display." },
  { name: "Sony Xperia 5 III", brand: "Sony", price: 35000, year: 2021, description: "Sony Xperia 5 III with Snapdragon 888 and 120Hz OLED display." },
  { name: "LG Velvet", brand: "LG", price: 19000, year: 2020, description: "LG Velvet with Snapdragon 765G and OLED display." },
  { name: "LG Wing", brand: "LG", price: 25000, year: 2020, description: "LG Wing with Snapdragon 765G and unique swivel screen." },
  { name: "Nokia X20", brand: "Nokia", price: 17000, year: 2021, description: "Nokia X20 with Snapdragon 480 and clean Android experience." },
  { name: "Nokia G50", brand: "Nokia", price: 15000, year: 2021, description: "Nokia G50 with Snapdragon 480 and 6.82-inch display." },
  { name: "Infinix Zero 5G", brand: "Infinix", price: 18000, year: 2022, description: "Infinix Zero 5G with MediaTek Dimensity 920 and 120Hz display." },
  { name: "Infinix Note 12", brand: "Infinix", price: 15000, year: 2022, description: "Infinix Note 12 with MediaTek Helio G96 and 6.7-inch display." },
  { name: "Tecno Phantom X", brand: "Tecno", price: 25000, year: 2021, description: "Tecno Phantom X with MediaTek Helio G95 and 90Hz AMOLED display." },
  { name: "Tecno Spark 8 Pro", brand: "Tecno", price: 14000, year: 2021, description: "Tecno Spark 8 Pro with MediaTek Helio G85 and 48MP camera." },
  { name: "ZTE Axon 20", brand: "ZTE", price: 22000, year: 2020, description: "ZTE Axon 20 with Snapdragon 765G and under-display camera." },
  { name: "ZTE Blade V30", brand: "ZTE", price: 17000, year: 2021, description: "ZTE Blade V30 with Unisoc T618 and 90Hz display." },
  { name: "Alcatel 1B", brand: "Alcatel", price: 7000, year: 2021, description: "Alcatel 1B with Snapdragon 215 and 5.5-inch display." },
  { name: "Alcatel 3L", brand: "Alcatel", price: 9000, year: 2021, description: "Alcatel 3L with MediaTek Helio A22 and 6.22-inch display." },
  { name: "LG K52", brand: "LG", price: 13000, year: 2020, description: "LG K52 with MediaTek Helio P35 and 6.6-inch display." },
  { name: "Samsung Galaxy A32", brand: "Samsung", price: 16000, year: 2021, description: "Samsung Galaxy A32 with MediaTek Helio G80 and AMOLED display." },
  { name: "Samsung Galaxy A72", brand: "Samsung", price: 22000, year: 2021, description: "Samsung Galaxy A72 with Snapdragon 720G and 90Hz AMOLED display." },
  { name: "Huawei Nova 9", brand: "Huawei", price: 20000, year: 2021, description: "Huawei Nova 9 with Snapdragon 778G and 50MP camera." },
  { name: "Realme 8 Pro", brand: "Realme", price: 17000, year: 2021, description: "Realme 8 Pro with Snapdragon 720G and 108MP camera." },
  { name: "Xiaomi Poco M4 Pro", brand: "Xiaomi", price: 15000, year: 2021, description: "Xiaomi Poco M4 Pro with MediaTek Dimensity 810 and 90Hz display." },
  { name: "Xiaomi Redmi Note 11", brand: "Xiaomi", price: 14000, year: 2022, description: "Xiaomi Redmi Note 11 with Snapdragon 680 and 90Hz AMOLED display." },
  { name: "Vivo Y33s", brand: "Vivo", price: 15000, year: 2021, description: "Vivo Y33s with MediaTek Helio G80 and 50MP camera." }
];

let currentPage = 1;
const phonesPerPage = 8;
let currentPhone = null;
let currentAccessory = null;

// Глобальна змінна для зберігання вибраного рейтингу
let selectedRating = 0;

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

function filterPhones() {
  const brand = document.getElementById("brand").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const year = document.getElementById("year").value;

  const filteredPhones = phones.filter(phone => {
    if (brand !== "all" && phone.brand !== brand) return false;
    if (minPrice && phone.price < minPrice) return false;
    if (maxPrice && phone.price > maxPrice) return false;
    if (year && phone.year !== parseInt(year)) return false;
    return true;
  });

  displayPhones(filteredPhones);
}

function displayPhones(phones) {
    const container = document.getElementById('catalog');
    container.innerHTML = '';

    const startIndex = (currentPage - 1) * phonesPerPage;
    const endIndex = startIndex + phonesPerPage;
    const phonesToShow = phones.slice(startIndex, endIndex);

    phonesToShow.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.className = 'phone-card';
        
        const imageName = formatImageName(phone.name);
        console.log(`Форматування імені для ${phone.name} -> images/${imageName}.jpg`);
        
        const img = document.createElement('img');
        img.src = `images/${imageName}.jpg`;
        img.alt = phone.name;
        img.className = 'phone-image';
        
        img.onerror = function() {
            console.error(`Помилка завантаження зображення для ${phone.name} (${imageName}.jpg)`);
            this.src = 'images/placeholder.jpg';
        };

        // Створюємо елементи для інформації про телефон
        const title = document.createElement('h3');
        title.textContent = phone.name;

        const brand = document.createElement('p');
        brand.className = 'brand';
        brand.textContent = phone.brand;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = `${phone.price} грн`;

        // Створюємо контейнер для кнопок
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'card-buttons';

        // Створюємо кнопку "Деталі"
        const detailsButton = document.createElement('button');
        detailsButton.className = 'details-button';
        detailsButton.innerHTML = '<i class="fas fa-info-circle"></i> Деталі';
        detailsButton.onclick = () => showPhoneDetails(phone);

        // Створюємо кнопку "Купити"
        const buyButton = document.createElement('button');
        buyButton.className = 'buy-button';
        buyButton.innerHTML = '<i class="fas fa-shopping-cart"></i> Купити';
        buyButton.onclick = () => addToCart(phone);

        // Додаємо кнопки в їх контейнер
        buttonsContainer.appendChild(detailsButton);
        buttonsContainer.appendChild(buyButton);

        // Додаємо всі елементи в картку телефону
        phoneCard.appendChild(img);
        phoneCard.appendChild(title);
        phoneCard.appendChild(brand);
        phoneCard.appendChild(price);
        phoneCard.appendChild(buttonsContainer);
        
        container.appendChild(phoneCard);
    });

    // Оновлюємо номер сторінки
    document.getElementById('pageNumber').textContent = currentPage;
}

// Функція для ініціалізації обробників подій відгуків
function initializeReviewHandlers() {
    const addReviewBtn = document.getElementById('addReviewBtn');
    const reviewForm = document.getElementById('reviewForm');
    const starButtons = document.querySelectorAll('.star-button');
    const submitReviewBtn = document.querySelector('.submit-review');

    if (addReviewBtn) {
        addReviewBtn.addEventListener('click', () => {
            const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
            if (!isAuthenticated) {
                showError('Будь ласка, увійдіть в систему, щоб залишити відгук');
                return;
            }
            reviewForm.style.display = reviewForm.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Обробка кліків по зірочках
    starButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedRating = parseInt(button.dataset.rating);
            updateStarRating(selectedRating);
        });
    });

    // Обробка відправки відгуку
    if (submitReviewBtn) {
        submitReviewBtn.addEventListener('click', submitReview);
    }
}

// Функція для оновлення відображення зірочок
function updateStarRating(rating) {
    const starButtons = document.querySelectorAll('.star-button');
    starButtons.forEach((button, index) => {
        button.classList.toggle('active', index < rating);
    });
}

// Функція для відправки відгуку
function submitReview() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
        showError('Будь ласка, увійдіть в систему, щоб залишити відгук');
        return;
    }

    const reviewText = document.querySelector('.review-textarea').value.trim();
    if (!reviewText) {
        showError('Будь ласка, напишіть текст відгуку');
        return;
    }

    if (!selectedRating) {
        showError('Будь ласка, виберіть рейтинг');
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const review = {
        userId: currentUser.email,
        userName: currentUser.name,
        rating: selectedRating,
        text: reviewText,
        date: new Date().toISOString(),
        productId: currentPhone.name
    };

    // Зберігаємо відгук
    saveReview(review);
    
    // Оновлюємо відображення відгуків
    displayReviews(currentPhone.name);
    
    // Очищаємо форму
    document.querySelector('.review-textarea').value = '';
    selectedRating = 0;
    updateStarRating(0);
    
    // Ховаємо форму
    document.getElementById('reviewForm').style.display = 'none';
    
    showSuccess('Відгук успішно додано');
}

// Функція для збереження відгуку
function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[review.productId]) {
        reviews[review.productId] = [];
    }
    reviews[review.productId].push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Функція для відображення відгуків
function displayReviews(productId) {
    const reviewsList = document.getElementById('reviewsList');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const productReviews = reviews[productId] || [];
    
    reviewsList.innerHTML = productReviews.length === 0 
        ? '<p class="no-reviews">Поки що немає відгуків</p>'
        : productReviews.map(review => `
            <div class="review-item">
                <div class="review-header">
                    <span class="review-author">${review.userName}</span>
                    <span class="review-date">${formatDate(review.date)}</span>
                </div>
                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
                <div class="review-text">${review.text}</div>
            </div>
        `).join('');
}

// Функція для форматування дати
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function showPhoneDetails(phone) {
    if (!phone) return;
    
    const modal = document.getElementById('phoneModal');
    const modalImage = document.getElementById('phoneModalImage');
    const modalTitle = document.getElementById('phoneModalTitle');
    const modalPrice = document.getElementById('phoneModalPrice');
    const modalBrand = document.getElementById('phoneModalBrand');
    const modalYear = document.getElementById('phoneModalYear');
    const modalDescription = document.getElementById('phoneModalDescription');
    
    const imageName = formatImageName(phone.name);
    modalImage.src = `images/${imageName}.jpg`;
    modalImage.onerror = () => {
        modalImage.src = 'images/placeholder.jpg';
    };
    
    modalTitle.textContent = phone.name;
    modalPrice.textContent = `${phone.price} грн`;
    modalBrand.textContent = `Бренд: ${phone.brand}`;
    modalYear.textContent = `Рік: ${phone.year}`;
    modalDescription.textContent = phone.description;
    
    modal.style.display = 'flex';
    currentPhone = phone;
    
    // Ініціалізуємо обробники подій відгуків
    initializeReviewHandlers();
    // Відображаємо існуючі відгуки
    displayReviews(phone.name);
    
    // Скидаємо форму відгуку
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.style.display = 'none';
        reviewForm.querySelector('.review-textarea').value = '';
        selectedRating = 0;
        updateStarRating(0);
    }
}

function closePhoneModal() {
    const modal = document.getElementById('phoneModal');
    modal.style.display = 'none';
    currentPhone = null;
}

function changePage(direction) {
    const filteredPhones = phones.filter(phone => {
        const brand = document.getElementById("brand").value;
        const minPrice = document.getElementById("minPrice").value;
        const maxPrice = document.getElementById("maxPrice").value;
        const year = document.getElementById("year").value;

        if (brand !== "all" && phone.brand !== brand) return false;
        if (minPrice && phone.price < minPrice) return false;
        if (maxPrice && phone.price > maxPrice) return false;
        if (year && phone.year !== parseInt(year)) return false;
        return true;
    });

    const maxPages = Math.ceil(filteredPhones.length / phonesPerPage);
    currentPage += direction;
    
    if (currentPage < 1) currentPage = 1;
    if (currentPage > maxPages) currentPage = maxPages;
    
    displayPhones(filteredPhones);
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    displayPhones(phones);
});

function showAccessoryDetails(accessory) {
    if (!accessory) return;
    
    const modal = document.getElementById('accessoryModal');
    const modalImage = document.getElementById('accessoryModalImage');
    const modalTitle = document.getElementById('accessoryModalTitle');
    const modalPrice = document.getElementById('accessoryModalPrice');
    const modalBrand = document.getElementById('accessoryModalBrand');
    const modalType = document.getElementById('accessoryModalType');
    const modalDescription = document.getElementById('accessoryModalDescription');
    
    modalImage.src = accessory.image;
    modalImage.onerror = () => {
        modalImage.src = 'placeholder.jpg';
    };
    
    modalTitle.textContent = accessory.name;
    modalPrice.textContent = `${accessory.price} грн`;
    modalBrand.textContent = `Бренд: ${accessory.brand}`;
    modalType.textContent = `Тип: ${accessory.type}`;
    modalDescription.textContent = accessory.description;
    
    modal.style.display = 'block';
    currentAccessory = accessory;
}

function closeAccessoryModal() {
    const modal = document.getElementById('accessoryModal');
    modal.style.display = 'none';
    currentAccessory = null;
}

// Закриття модального вікна при кліку поза ним
window.onclick = function(event) {
    const phoneModal = document.getElementById('phoneModal');
    const accessoryModal = document.getElementById('accessoryModal');
    
    if (event.target === phoneModal) {
        closePhoneModal();
    }
    if (event.target === accessoryModal) {
        closeAccessoryModal();
    }
}

// Функція для додавання в кошик
function addToCart(phone) {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
        showAuthModal();
        return;
    }

    showConfirmPurchaseModal(phone);
}

function showConfirmPurchaseModal(phone) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content confirm-purchase">
            <button class="close-button" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="confirm-header">
                <i class="fas fa-shopping-cart"></i>
                <h2>Підтвердження покупки</h2>
            </div>
            
            <div class="confirm-details">
                <img src="images/${formatImageName(phone.name)}.jpg" alt="${phone.name}" class="confirm-image">
                <div class="confirm-info">
                    <h3>${phone.name}</h3>
                    <p class="confirm-price">${phone.price} грн</p>
                    <p class="confirm-brand">Бренд: ${phone.brand}</p>
                    <p class="confirm-year">Рік: ${phone.year}</p>
                </div>
            </div>
            
            <div class="confirm-buttons">
                <button class="cancel-button" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i> Скасувати
                </button>
                <button class="confirm-button" onclick="confirmPurchase(${JSON.stringify(phone).replace(/"/g, '&quot;')})">
                    <i class="fas fa-check"></i> Підтвердити
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function confirmPurchase(phone) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(phone);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Закриваємо модальне вікно підтвердження
    const confirmModal = document.querySelector('.modal');
    if (confirmModal) confirmModal.remove();
    
    // Показуємо повідомлення про успіх
    showSuccess('Товар додано до кошика');
}

// Функція для показу повідомлення про успіх
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);

    setTimeout(() => {
        successDiv.remove();
    }, 2000);
}

function displayAccessories(accessories) {
    const container = document.getElementById('accessories');
    container.innerHTML = '';

    accessories.forEach(accessory => {
        const card = document.createElement('div');
        card.className = 'accessory-card';
        
        const img = document.createElement('img');
        img.src = `images/${accessory.image}`;
        img.alt = accessory.name;
        img.className = 'accessory-image';
        
        img.onerror = function() {
            this.src = 'images/placeholder.jpg';
        };

        const title = document.createElement('h3');
        title.className = 'accessory-name';
        title.textContent = accessory.name;

        const brand = document.createElement('p');
        brand.className = 'accessory-brand';
        brand.textContent = accessory.brand;

        const price = document.createElement('p');
        price.className = 'accessory-price';
        price.textContent = `${accessory.price} грн`;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'card-buttons';

        const detailsButton = document.createElement('button');
        detailsButton.className = 'details-button';
        detailsButton.innerHTML = '<i class="fas fa-info-circle"></i> Деталі';
        detailsButton.onclick = () => showAccessoryDetails(accessory);

        const buyButton = document.createElement('button');
        buyButton.className = 'buy-button';
        buyButton.innerHTML = '<i class="fas fa-shopping-cart"></i> Купити';
        buyButton.onclick = () => addAccessoryToCart(accessory);

        buttonsContainer.appendChild(detailsButton);
        buttonsContainer.appendChild(buyButton);

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(brand);
        card.appendChild(price);
        card.appendChild(buttonsContainer);

        container.appendChild(card);
    });
}