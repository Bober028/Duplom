const accessories = [
    { 
        name: "Apple AirPods Pro 2",
        type: "headphones",
        brand: "Apple",
        price: 11999,
        description: "Бездротові навушники з активним шумопоглинанням, просторовим звуком та MagSafe зарядкою",
        image: "images/airpodspro2.jpg"
    },
    { 
        name: "Samsung Galaxy Buds2 Pro",
        type: "headphones",
        brand: "Samsung",
        price: 6999,
        description: "Бездротові навушники з активним шумопоглинанням та Hi-Fi звуком",
        image: "images/buds2pro.jpg"
    },
    { 
        name: "Оригінальний силіконовий чохол iPhone 14 Pro",
        type: "case",
        brand: "Apple",
        price: 1899,
        description: "Офіційний чохол з MagSafe та м'якою підкладкою з мікрофібри",
        image: "images/iphone14procase.jpg"
    },
    { 
        name: "Samsung Silicone Cover S23 Ultra",
        type: "case",
        brand: "Samsung",
        price: 1299,
        description: "Оригінальний силіконовий чохол з м'якою текстурою",
        image: "images/s23ultracase.jpg"
    },
    { 
        name: "Захисне скло iPhone 14 Pro Spigen",
        type: "screen",
        brand: "Apple",
        price: 799,
        description: "Загартоване скло з олеофобним покриттям та установочною рамкою",
        image: "images/iphone14proglass.jpg"
    },
    { 
        name: "Apple MagSafe Charger",
        type: "charger",
        brand: "Apple",
        price: 1499,
        description: "Бездротовий зарядний пристрій з магнітним кріпленням",
        image: "images/magsafecharger.jpg"
    },
    { 
        name: "Samsung 45W Super Fast Charger",
        type: "charger",
        brand: "Samsung",
        price: 1299,
        description: "Швидкий зарядний пристрій з підтримкою PD 3.0",
        image: "images/samsung45wcharger.jpg"
    },
    { 
        name: "Xiaomi 20000mAh Power Bank 3 Pro",
        type: "powerbank",
        brand: "Xiaomi",
        price: 1699,
        description: "Повербанк з підтримкою швидкої зарядки та USB-C",
        image: "images/xiaomi20000mah.jpg"
    },
    { 
        name: "Spigen Tough Armor iPhone 14",
        type: "case",
        brand: "Other",
        price: 999,
        description: "Захисний чохол з подвійним шаром захисту",
        image: "images/spigentougharmor14.jpg"
    },
    { 
        name: "Apple Watch Magnetic Charger",
        type: "charger",
        brand: "Apple",
        price: 999,
        description: "Магнітний зарядний кабель для Apple Watch",
        image: "images/applewatchcharger.jpg"
    },
    { 
        name: "Anker Nano Pro 40W",
        type: "charger",
        brand: "Other",
        price: 899,
        description: "Компактний зарядний пристрій з двома портами",
        image: "images/ankernano40w.jpg"
    },
    { 
        name: "PopSocket Classic",
        type: "holder",
        brand: "Other",
        price: 399,
        description: "Тримач для телефону з можливістю зміни дизайну",
        image: "images/popsocketclassic.jpg"
    },
    { 
        name: "Baseus Car Mount",
        type: "holder",
        brand: "Other",
        price: 599,
        description: "Автомобільний тримач з бездротовою зарядкою",
        image: "images/baseuscarmount.jpg"
    },
    { 
        name: "Apple MagSafe Battery Pack",
        type: "powerbank",
        brand: "Apple",
        price: 3499,
        description: "Магнітний повербанк для iPhone",
        image: "images/magsafebatterypack.jpg"
    },
    { 
        name: "Samsung Wireless Charger Duo",
        type: "charger",
        brand: "Samsung",
        price: 2499,
        description: "Бездротова зарядка для двох пристроїв",
        image: "images/samsungduocharger.jpg"
    },
    { 
        name: "Захисне скло Samsung S23 Ultra",
        type: "screen",
        brand: "Samsung",
        price: 699,
        description: "Ультратонке загартоване скло з олеофобним покриттям",
        image: "images/s23ultraglass.jpg"
    },
    { 
        name: "JBL Tune 510BT",
        type: "headphones",
        brand: "Other",
        price: 1699,
        description: "Бездротові навушники з потужним басом",
        image: "images/jbltune510bt.jpg"
    },
    { 
        name: "Xiaomi Redmi Buds 4 Pro",
        type: "headphones",
        brand: "Xiaomi",
        price: 2499,
        description: "Бездротові навушники з активним шумопоглинанням",
        image: "images/redmibuds4pro.jpg"
    },
    { 
        name: "ESR HaloLock MagSafe Stand",
        type: "holder",
        brand: "Other",
        price: 899,
        description: "Магнітна підставка для iPhone",
        image: "images/esrhalolock.jpg"
    },
    { 
        name: "Spigen Gearlock Bike Mount",
        type: "holder",
        brand: "Other",
        price: 999,
        description: "Велосипедний тримач для телефону",
        image: "images/spigenbikelock.jpg"
    },
    { 
        name: "Apple USB-C to Lightning Cable",
        type: "charger",
        brand: "Apple",
        price: 799,
        description: "Оригінальний кабель для швидкої зарядки",
        image: "images/appleusbccable.jpg"
    },
    { 
        name: "Samsung 65W Trio Adapter",
        type: "charger",
        brand: "Samsung",
        price: 1999,
        description: "Зарядний пристрій з трьома портами",
        image: "images/samsung65wadapter.jpg"
    },
    { 
        name: "UAG Monarch iPhone 14 Pro",
        type: "case",
        brand: "Other",
        price: 1899,
        description: "Протиударний чохол преміум класу",
        image: "images/uagmonarch14pro.jpg"
    },
    { 
        name: "Spigen Liquid Air S23",
        type: "case",
        brand: "Other",
        price: 799,
        description: "Тонкий чохол з текстурованою поверхнею",
        image: "images/spigenliquidairs23.jpg"
    },
    { 
        name: "Захисне скло iPad Pro 12.9",
        type: "screen",
        brand: "Apple",
        price: 1299,
        description: "Захисне скло з олеофобним покриттям",
        image: "images/ipadpro129glass.jpg"
    },
    { 
        name: "Samsung Tab S9 Screen Protector",
        type: "screen",
        brand: "Samsung",
        price: 999,
        description: "Захисна плівка з антибліковим покриттям",
        image: "images/tabs9protector.jpg"
    },
    { 
        name: "Apple AirPods Max",
        type: "headphones",
        brand: "Apple",
        price: 19999,
        description: "Преміум навушники з просторовим звуком",
        image: "images/airpodsmax.jpg"
    },
    { 
        name: "Sony WH-1000XM5",
        type: "headphones",
        brand: "Other",
        price: 14999,
        description: "Бездротові навушники з найкращим шумопоглинанням",
        image: "images/sonywh1000xm5.jpg"
    },
    { 
        name: "Mophie 3-in-1 Stand",
        type: "charger",
        brand: "Other",
        price: 3499,
        description: "Бездротова зарядна станція для Apple пристроїв",
        image: "images/mophie3in1.jpg"
    },
    { 
        name: "Native Union Drop XL",
        type: "charger",
        brand: "Other",
        price: 2799,
        description: "Велика бездротова зарядна панель",
        image: "images/nativeunionxl.jpg"
    },
    { 
        name: "Anker 637 MagGo",
        type: "charger",
        brand: "Other",
        price: 2499,
        description: "Магнітна бездротова зарядка з додатковими портами",
        image: "images/anker637maggo.jpg"
    },
    { 
        name: "Apple MagSafe Duo Charger",
        type: "charger",
        brand: "Apple",
        price: 4999,
        description: "Подвійна бездротова зарядка для iPhone та Apple Watch",
        image: "images/magsafeduocharger.jpg"
    },
    { 
        name: "Samsung 15W Wireless Charger",
        type: "charger",
        brand: "Samsung",
        price: 1499,
        description: "Швидка бездротова зарядка з вентилятором охолодження",
        image: "images/samsung15wcharger.jpg"
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

function displayAccessories(accessoriesToShow = accessories) {
    const catalog = document.getElementById('accessories-catalog');
    catalog.innerHTML = '';
    
    // Розраховуємо індекси для поточної сторінки
    const startIndex = (accessoryCurrentPage - 1) * 8;
    const endIndex = startIndex + 8;
    
    // Отримуємо аксесуари для поточної сторінки
    const accessoriesOnPage = accessoriesToShow.slice(startIndex, endIndex);
    
    accessoriesOnPage.forEach(accessory => {
        const card = document.createElement('div');
        card.className = 'accessory-card';
        card.innerHTML = `
            <img src="${accessory.image}" alt="${accessory.name}" class="accessory-image">
            <h3 class="accessory-name">${accessory.name}</h3>
            <p class="accessory-brand">${accessory.brand}</p>
            <p class="accessory-price">${accessory.price} грн</p>
            <div class="card-buttons">
                <button class="view-details" onclick="showAccessoryDetails('${accessory.name}')">
                    <i class="fas fa-info-circle"></i> Деталі
                </button>
                <button class="buy-button" onclick="addToCart('${accessory.name}', ${accessory.price})">
                    <i class="fas fa-shopping-cart"></i> Купити
                </button>
            </div>
        `;
        catalog.appendChild(card);
    });

    // Оновлюємо номер сторінки
    document.getElementById("pageNumber").textContent = accessoryCurrentPage;
}

function showAccessoryDetails(accessoryName) {
    const accessory = accessories.find(item => item.name === accessoryName);
    if (!accessory) return;

    const modal = document.getElementById("phoneModal");
    const modalContent = modal.querySelector(".modal-content");
    
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="modal-image">
            <img id="modalImage" src="${accessory.image}" alt="${accessory.name}">
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

function addToCart(accessoryName, accessoryPrice) {
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
            price: accessoryPrice,
            quantity: 1,
            type: 'accessory'
        });
    }
    
    // Зберігаємо оновлений кошик
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Показуємо повідомлення про успішне додавання
    alert('Товар додано до кошика!');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.toggle('dark-mode'));
    const accessoryCards = document.querySelectorAll('.accessory-card');
    accessoryCards.forEach(card => card.classList.toggle('dark-mode'));
    
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
        const accessoryCards = document.querySelectorAll('.accessory-card');
        accessoryCards.forEach(card => card.classList.add('dark-mode'));
    }
}

// Застосовуємо тему при завантаженні сторінки
document.addEventListener('DOMContentLoaded', applyTheme); 