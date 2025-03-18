const accessories = [
    { 
        name: "Apple AirPods Pro 2",
        type: "headphones",
        brand: "Apple",
        price: 11999,
        description: "Бездротові навушники з активним шумопоглинанням, просторовим звуком та MagSafe зарядкою"
    },
    { 
        name: "Samsung Galaxy Buds2 Pro",
        type: "headphones",
        brand: "Samsung",
        price: 6999,
        description: "Бездротові навушники з активним шумопоглинанням та Hi-Fi звуком"
    },
    { 
        name: "Оригінальний силіконовий чохол iPhone 14 Pro",
        type: "case",
        brand: "Apple",
        price: 1899,
        description: "Офіційний чохол з MagSafe та м'якою підкладкою з мікрофібри"
    },
    { 
        name: "Samsung Silicone Cover S23 Ultra",
        type: "case",
        brand: "Samsung",
        price: 1299,
        description: "Оригінальний силіконовий чохол з м'якою текстурою"
    },
    { 
        name: "Захисне скло iPhone 14 Pro Spigen",
        type: "screen",
        brand: "Apple",
        price: 799,
        description: "Загартоване скло з олеофобним покриттям та установочною рамкою"
    },
    { 
        name: "Apple MagSafe Charger",
        type: "charger",
        brand: "Apple",
        price: 1499,
        description: "Бездротовий зарядний пристрій з магнітним кріпленням"
    },
    { 
        name: "Samsung 45W Super Fast Charger",
        type: "charger",
        brand: "Samsung",
        price: 1299,
        description: "Швидкий зарядний пристрій з підтримкою PD 3.0"
    },
    { 
        name: "Xiaomi 20000mAh Power Bank 3 Pro",
        type: "powerbank",
        brand: "Xiaomi",
        price: 1699,
        description: "Повербанк з підтримкою швидкої зарядки та USB-C"
    },
    { 
        name: "Apple AirTag",
        type: "other",
        brand: "Apple",
        price: 1199,
        description: "Пристрій для відстеження речей з технологією UWB"
    },
    { 
        name: "Spigen Tough Armor iPhone 14",
        type: "case",
        brand: "Other",
        price: 999,
        description: "Захисний чохол з подвійним шаром захисту"
    },
    { 
        name: "Samsung SmartTag+",
        type: "other",
        brand: "Samsung",
        price: 999,
        description: "Пристрій для відстеження з Bluetooth та UWB"
    },
    { 
        name: "Apple Watch Magnetic Charger",
        type: "charger",
        brand: "Apple",
        price: 999,
        description: "Магнітний зарядний кабель для Apple Watch"
    },
    { 
        name: "Anker Nano Pro 40W",
        type: "charger",
        brand: "Other",
        price: 899,
        description: "Компактний зарядний пристрій з двома портами"
    },
    { 
        name: "PopSocket Classic",
        type: "holder",
        brand: "Other",
        price: 399,
        description: "Тримач для телефону з можливістю зміни дизайну"
    },
    { 
        name: "Baseus Car Mount",
        type: "holder",
        brand: "Other",
        price: 599,
        description: "Автомобільний тримач з бездротовою зарядкою"
    },
    { 
        name: "Apple Pencil 2nd Gen",
        type: "other",
        brand: "Apple",
        price: 4999,
        description: "Стилус для iPad з бездротовою зарядкою"
    },
    { 
        name: "Samsung S Pen Pro",
        type: "other",
        brand: "Samsung",
        price: 3999,
        description: "Професійний стилус для пристроїв Samsung"
    },
    { 
        name: "Xiaomi Mi Band 8",
        type: "other",
        brand: "Xiaomi",
        price: 1499,
        description: "Фітнес-браслет з кольоровим дисплеєм"
    },
    { 
        name: "Apple MagSafe Battery Pack",
        type: "powerbank",
        brand: "Apple",
        price: 3499,
        description: "Магнітний повербанк для iPhone"
    },
    { 
        name: "Samsung Wireless Charger Duo",
        type: "charger",
        brand: "Samsung",
        price: 2499,
        description: "Бездротова зарядка для двох пристроїв"
    },
    { 
        name: "Захисне скло Samsung S23 Ultra",
        type: "screen",
        brand: "Samsung",
        price: 699,
        description: "Ультратонке загартоване скло з олеофобним покриттям"
    },
    { 
        name: "Apple Magic Keyboard",
        type: "other",
        brand: "Apple",
        price: 9999,
        description: "Клавіатура-чохол для iPad Pro"
    },
    { 
        name: "Samsung Book Cover Keyboard",
        type: "other",
        brand: "Samsung",
        price: 7999,
        description: "Клавіатура-чохол для Galaxy Tab"
    },
    { 
        name: "JBL Tune 510BT",
        type: "headphones",
        brand: "Other",
        price: 1699,
        description: "Бездротові навушники з потужним басом"
    },
    { 
        name: "Xiaomi Redmi Buds 4 Pro",
        type: "headphones",
        brand: "Xiaomi",
        price: 2499,
        description: "Бездротові навушники з активним шумопоглинанням"
    },
    { 
        name: "ESR HaloLock MagSafe Stand",
        type: "holder",
        brand: "Other",
        price: 899,
        description: "Магнітна підставка для iPhone"
    },
    { 
        name: "Spigen Gearlock Bike Mount",
        type: "holder",
        brand: "Other",
        price: 999,
        description: "Велосипедний тримач для телефону"
    },
    { 
        name: "Apple Leather Wallet MagSafe",
        type: "other",
        brand: "Apple",
        price: 2199,
        description: "Шкіряний гаманець з MagSafe"
    },
    { 
        name: "Samsung Leather Wallet",
        type: "other",
        brand: "Samsung",
        price: 1699,
        description: "Шкіряний чохол-гаманець"
    },
    { 
        name: "Anker PowerCore 26800",
        type: "powerbank",
        brand: "Other",
        price: 2299,
        description: "Потужний повербанк з трьома портами"
    },
    { 
        name: "Apple USB-C to Lightning Cable",
        type: "charger",
        brand: "Apple",
        price: 799,
        description: "Оригінальний кабель для швидкої зарядки"
    },
    { 
        name: "Samsung 65W Trio Adapter",
        type: "charger",
        brand: "Samsung",
        price: 1999,
        description: "Зарядний пристрій з трьома портами"
    },
    { 
        name: "Belkin BoostCharge Pro",
        type: "charger",
        brand: "Other",
        price: 2999,
        description: "3-в-1 бездротова зарядна станція"
    },
    { 
        name: "UAG Monarch iPhone 14 Pro",
        type: "case",
        brand: "Other",
        price: 1899,
        description: "Протиударний чохол преміум класу"
    },
    { 
        name: "Spigen Liquid Air S23",
        type: "case",
        brand: "Other",
        price: 799,
        description: "Тонкий чохол з текстурованою поверхнею"
    },
    { 
        name: "Apple Watch Sport Band",
        type: "other",
        brand: "Apple",
        price: 1499,
        description: "Спортивний ремінець для Apple Watch"
    },
    { 
        name: "Samsung Galaxy Watch Band",
        type: "other",
        brand: "Samsung",
        price: 999,
        description: "Силіконовий ремінець для Galaxy Watch"
    },
    { 
        name: "Захисне скло iPad Pro 12.9",
        type: "screen",
        brand: "Apple",
        price: 1299,
        description: "Захисне скло з олеофобним покриттям"
    },
    { 
        name: "Samsung Tab S9 Screen Protector",
        type: "screen",
        brand: "Samsung",
        price: 999,
        description: "Захисна плівка з антибліковим покриттям"
    },
    { 
        name: "Apple AirPods Max",
        type: "headphones",
        brand: "Apple",
        price: 19999,
        description: "Преміум навушники з просторовим звуком"
    },
    { 
        name: "Sony WH-1000XM5",
        type: "headphones",
        brand: "Other",
        price: 14999,
        description: "Бездротові навушники з найкращим шумопоглинанням"
    },
    { 
        name: "Mophie 3-in-1 Stand",
        type: "charger",
        brand: "Other",
        price: 3499,
        description: "Бездротова зарядна станція для Apple пристроїв"
    },
    { 
        name: "Native Union Drop XL",
        type: "charger",
        brand: "Other",
        price: 2799,
        description: "Велика бездротова зарядна панель"
    },
    { 
        name: "Apple Magic Mouse",
        type: "other",
        brand: "Apple",
        price: 2999,
        description: "Бездротова миша з мультитач поверхнею"
    },
    { 
        name: "Samsung DeX Cable",
        type: "other",
        brand: "Samsung",
        price: 999,
        description: "Кабель для підключення до монітора"
    },
    { 
        name: "Anker 637 MagGo",
        type: "charger",
        brand: "Other",
        price: 2499,
        description: "Магнітна бездротова зарядка з додатковими портами"
    },
    { 
        name: "Apple MagSafe Duo Charger",
        type: "charger",
        brand: "Apple",
        price: 4999,
        description: "Подвійна бездротова зарядка для iPhone та Apple Watch"
    },
    { 
        name: "Samsung 15W Wireless Charger",
        type: "charger",
        brand: "Samsung",
        price: 1499,
        description: "Швидка бездротова зарядка з вентилятором охолодження"
    },
    { 
        name: "Apple Watch Ultra Band",
        type: "other",
        brand: "Apple",
        price: 2999,
        description: "Титановий ремінець для Apple Watch Ultra"
    },
    { 
        name: "Samsung Galaxy Watch Titanium Band",
        type: "other",
        brand: "Samsung",
        price: 2499,
        description: "Преміум ремінець для Galaxy Watch"
    },
    { 
        name: "Apple Polishing Cloth",
        type: "other",
        brand: "Apple",
        price: 699,
        description: "Спеціальна тканина для очищення екранів"
    },
    { 
        name: "Samsung Cleaning Kit",
        type: "other",
        brand: "Samsung",
        price: 499,
        description: "Набір для догляду за екраном"
    }
];

let accessoryCurrentPage = 1;
const itemsPerPage = 8;

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    console.log('Accessories array length:', accessories.length);
    
    // Перевіряємо наявність всіх необхідних елементів
    const catalog = document.getElementById("accessories-catalog");
    const typeSelect = document.getElementById("accessoryType");
    const brandSelect = document.getElementById("brand");
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const pageNumber = document.getElementById("pageNumber");

    console.log('Elements found:', {
        catalog: !!catalog,
        typeSelect: !!typeSelect,
        brandSelect: !!brandSelect,
        minPriceInput: !!minPriceInput,
        maxPriceInput: !!maxPriceInput,
        pageNumber: !!pageNumber
    });

    if (!catalog) {
        console.error('Catalog element not found!');
        return;
    }

    // Перевіряємо, чи увімкнена темна тема
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Викликаємо фільтрацію
    filterAccessories();
});

function filterAccessories() {
    console.log('Filtering accessories...');
    const type = document.getElementById("accessoryType")?.value || "all";
    const brand = document.getElementById("brand")?.value || "all";
    const minPrice = parseInt(document.getElementById("minPrice")?.value) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice")?.value) || Infinity;

    console.log('Filters:', { type, brand, minPrice, maxPrice });
    console.log('Total accessories before filtering:', accessories.length);

    const filteredAccessories = accessories.filter(item => {
        const typeMatch = type === "all" || item.type === type;
        const brandMatch = brand === "all" || item.brand === brand;
        const priceMatch = item.price >= minPrice && (maxPrice === Infinity || item.price <= maxPrice);
        
        return typeMatch && brandMatch && priceMatch;
    });

    console.log('Filtered accessories:', filteredAccessories.length);
    console.log('Sample of filtered items:', filteredAccessories.slice(0, 2));
    
    displayAccessories(filteredAccessories);
}

function displayAccessories(accessoriesToDisplay) {
    console.log('Displaying accessories...');
    const catalog = document.getElementById("accessories-catalog");
    if (!catalog) {
        console.error('Catalog element not found!');
        return;
    }
    
    catalog.innerHTML = "";
    
    const startIndex = (accessoryCurrentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageCount = Math.ceil(accessoriesToDisplay.length / itemsPerPage);

    console.log('Pagination:', { 
        currentPage: accessoryCurrentPage, 
        startIndex, 
        endIndex, 
        pageCount,
        totalItems: accessoriesToDisplay.length 
    });

    // Перевіряємо, чи не вийшли за межі
    if (accessoryCurrentPage > pageCount) {
        accessoryCurrentPage = pageCount || 1;
    }
    if (accessoryCurrentPage < 1) {
        accessoryCurrentPage = 1;
    }

    const itemsOnPage = accessoriesToDisplay.slice(startIndex, endIndex);
    console.log('Items to display on current page:', itemsOnPage.length);
    
    if (itemsOnPage.length === 0) {
        console.log('No items to display');
        catalog.innerHTML = "<p class='no-results'>Нічого не знайдено</p>";
        return;
    }

    itemsOnPage.forEach((item, index) => {
        console.log(`Creating card ${index + 1}:`, item.name);
        const card = document.createElement('div');
        card.classList.add('accessory-card');
        if (document.body.classList.contains('dark-mode')) {
            card.classList.add('dark-mode');
        }
        
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p class="brand">${item.brand}</p>
            <p class="price">${item.price} грн</p>
            <div class="card-buttons">
                <button class="view-details" onclick="showAccessoryDetails('${item.name}')">
                    <i class="fas fa-info-circle"></i> Деталі
                </button>
                <button class="buy-button" onclick="addToCart('${item.name}')">
                    <i class="fas fa-shopping-cart"></i> Купити
                </button>
            </div>
        `;
        catalog.appendChild(card);
    });

    const pageNumberElement = document.getElementById("pageNumber");
    if (pageNumberElement) {
        pageNumberElement.textContent = accessoryCurrentPage;
    }
    console.log('Display completed');
}

function showAccessoryDetails(accessoryName) {
    const accessory = accessories.find(item => item.name === accessoryName);
    if (!accessory) return;

    const modal = document.getElementById("phoneModal");
    const modalContent = modal.querySelector(".modal-content");
    
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="modal-image">
            <img id="modalImage" src="images/accessories/${accessory.type.toLowerCase()}/${accessoryName.toLowerCase().replace(/\s+/g, '-')}.jpg" alt="${accessory.name}">
        </div>
        <div class="modal-info">
            <h2 id="modalTitle">${accessory.name}</h2>
            <p><strong>Ціна:</strong> <span id="modalPrice">${accessory.price}</span> грн</p>
            <p><strong>Бренд:</strong> <span id="modalBrand">${accessory.brand}</span></p>
            <p><strong>Тип:</strong> <span id="modalType">${accessory.type}</span></p>
            <p><strong>Опис:</strong> <span id="modalDescription">${accessory.description}</span></p>
            <button class="buy-button" onclick="addToCart(${JSON.stringify(accessory).replace(/"/g, '&quot;')})">
                <i class="fas fa-shopping-cart"></i> Купити
            </button>
        </div>
    `;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("phoneModal").style.display = "none";
}

function changePage(direction) {
    accessoryCurrentPage += direction;
    if (accessoryCurrentPage < 1) accessoryCurrentPage = 1;
    filterAccessories();
}

function addToCart(accessoryName) {
    const accessory = accessories.find(item => item.name === accessoryName);
    if (!accessory) return;

    // Отримуємо поточний кошик або створюємо новий
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Перевіряємо, чи товар вже є в кошику
    const existingItem = cart.find(item => item.name === accessory.name);
    
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({
            name: accessory.name,
            price: accessory.price,
            quantity: 1,
            type: 'accessory'
        });
    }
    
    // Зберігаємо оновлений кошик
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Показуємо повідомлення про успішне додавання
    alert('Товар додано до кошика!');
} 