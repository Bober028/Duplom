// script.js
const phones = [
  { name: "iPhone 14", brand: "Apple", price: 28000, year: 2022, description: "Apple iPhone 14 with A15 Bionic chip and improved camera system." },
  { name: "iPhone 13", brand: "Apple", price: 25000, year: 2021, description: "Apple iPhone 13 with A15 Bionic chip and great camera." },
  { name: "iPhone 12", brand: "Apple", price: 20000, year: 2020, description: "iPhone 12 with A14 chip and dual cameras." },
  { name: "iPhone SE (2022)", brand: "Apple", price: 17000, year: 2022, description: "iPhone SE with A15 Bionic chip in a compact form factor." },
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
  { name: "Realme 9 Pro+", brand: "Realme", price: 18000, year: 2022, description: "Realme 9 Pro+ with MediaTek Dimensity 920 and 50MP camera." },
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
  { name: "Poco F4", brand: "Poco", price: 22000, year: 2022, description: "Poco F4 with Snapdragon 870 and AMOLED display." },
  { name: "Poco X4 Pro", brand: "Poco", price: 19000, year: 2022, description: "Poco X4 Pro with Snapdragon 695 and 120Hz AMOLED display." },
  { name: "Infinix Zero 5G", brand: "Infinix", price: 18000, year: 2022, description: "Infinix Zero 5G with MediaTek Dimensity 920 and 120Hz display." },
  { name: "Infinix Note 12", brand: "Infinix", price: 15000, year: 2022, description: "Infinix Note 12 with MediaTek Helio G96 and 6.7-inch display." },
  { name: "Tecno Phantom X", brand: "Tecno", price: 25000, year: 2021, description: "Tecno Phantom X with MediaTek Helio G95 and 90Hz AMOLED display." },
  { name: "Tecno Spark 8 Pro", brand: "Tecno", price: 14000, year: 2021, description: "Tecno Spark 8 Pro with MediaTek Helio G85 and 48MP camera." },
  { name: "ZTE Axon 20", brand: "ZTE", price: 22000, year: 2020, description: "ZTE Axon 20 with Snapdragon 765G and under-display camera." },
  { name: "ZTE Blade V30", brand: "ZTE", price: 17000, year: 2021, description: "ZTE Blade V30 with Unisoc T618 and 90Hz display." },
  { name: "Alcatel 1B", brand: "Alcatel", price: 7000, year: 2021, description: "Alcatel 1B with Snapdragon 215 and 5.5-inch display." },
  { name: "Alcatel 3L", brand: "Alcatel", price: 9000, year: 2021, description: "Alcatel 3L with MediaTek Helio A22 and 6.22-inch display." },
  { name: "LG K52", brand: "LG", price: 13000, year: 2020, description: "LG K52 with MediaTek Helio P35 and 6.6-inch display." },
  { name: "Nokia 5.4", brand: "Nokia", price: 12000, year: 2020, description: "Nokia 5.4 with Snapdragon 662 and 48MP camera." },
  { name: "Nokia 8.3 5G", brand: "Nokia", price: 25000, year: 2022, description: "Nokia 8.3 5G with Snapdragon 765G and Zeiss optics." },
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

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.classList.toggle('dark-mode'));
  const phoneCards = document.querySelectorAll('.phone-card');
  phoneCards.forEach(card => card.classList.toggle('dark-mode'));
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

function displayPhones(phonesToDisplay) {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";
  const startIndex = (currentPage - 1) * phonesPerPage;
  const endIndex = startIndex + phonesPerPage;

  const phonesOnPage = phonesToDisplay.slice(startIndex, endIndex);
  phonesOnPage.forEach(phone => {
    const phoneCard = document.createElement('div');
    phoneCard.classList.add('phone-card');
    if (document.body.classList.contains('dark-mode')) {
      phoneCard.classList.add('dark-mode');
    }
    phoneCard.innerHTML = `
      <h3>${phone.name}</h3>
      <p>${phone.brand}</p>
      <p>${phone.price} грн</p>
      <div class="card-buttons">
        <button class="view-details" onclick="showDetails('${phone.name}')">
          <i class="fas fa-info-circle"></i> Деталі
        </button>
        <button class="buy-button" onclick="addToCart(${JSON.stringify(phone).replace(/"/g, '&quot;')})">
          <i class="fas fa-shopping-cart"></i> Купити
        </button>
      </div>
    `;
    catalog.appendChild(phoneCard);
  });

  document.getElementById("pageNumber").textContent = currentPage;
}

function showDetails(phoneName) {
  currentPhone = phones.find(p => p.name === phoneName);
  document.getElementById("modalTitle").textContent = currentPhone.name;
  document.getElementById("modalPrice").textContent = currentPhone.price;
  document.getElementById("modalYear").textContent = currentPhone.year;
  document.getElementById("modalDescription").textContent = currentPhone.description;
  document.getElementById("modalImage").src = `images/${currentPhone.brand.toLowerCase()}/${currentPhone.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  document.getElementById("phoneModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("phoneModal").style.display = "none";
}

function changePage(direction) {
  currentPage += direction;
  if (currentPage < 1) currentPage = 1;
  filterPhones();
}

window.onload = function() {
  filterPhones();
};