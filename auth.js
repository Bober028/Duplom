// Функції для роботи з автентифікацією
function showAuthModal() {
    document.getElementById('authModal').style.display = 'block';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

function showAuthTab(tabName) {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginTab = document.querySelector('.auth-tab:nth-child(1)');
    const registerTab = document.querySelector('.auth-tab:nth-child(2)');

    if (tabName === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    } else {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
    }
}

// Функції для роботи з базою даних
function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Перевірка авторизації
function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated;
}

// Функція для відображення помилок
function showError(message) {
    // Створюємо затемнення
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Створюємо повідомлення про помилку
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    // Видаляємо повідомлення та затемнення через 3 секунди
    setTimeout(() => {
        errorDiv.remove();
        overlay.remove();
    }, 3000);
}

// Функція для валідації email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Функція для валідації пароля
function validatePassword(password) {
    return password.length >= 6;
}

// Функція для відображення успішного повідомлення
function showSuccess(message) {
    // Створюємо затемнення
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Створюємо повідомлення про успіх
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);

    // Видаляємо повідомлення та затемнення через 2 секунди
    setTimeout(() => {
        successDiv.remove();
        overlay.remove();
    }, 2000);
}

// Функція для очищення форми
function clearForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = '';
        });
    }
}

// Функція для роботи з профілем користувача
function showProfileModal() {
    const modal = document.getElementById('profileModal');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userData = users.find(u => u.email === user.email);

    if (userData) {
        document.getElementById('profileName').textContent = userData.name;
        document.getElementById('profileEmail').textContent = userData.email;
        document.getElementById('profileDate').textContent = userData.registrationDate || 'Не вказано';
    }

    modal.style.display = 'block';
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'none';
}

// Функція реєстрації
function register(event) {
    if (event) {
        event.preventDefault();
    }
    
    // Визначаємо, чи це модальне вікно чи окрема сторінка
    const isModal = document.getElementById('authModal')?.style.display === 'block';
    
    // Отримуємо значення полів в залежності від контексту
    const name = document.getElementById('name')?.value || document.getElementById('registerName')?.value;
    const email = document.getElementById('email')?.value || document.getElementById('registerEmail')?.value;
    const password = document.getElementById('password')?.value || document.getElementById('registerPassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;

    if (!name || !email || !password || !confirmPassword) {
        showError('Будь ласка, заповніть всі поля');
        return;
    }

    if (!validateEmail(email)) {
        showError('Будь ласка, введіть коректний email');
        return;
    }

    if (!validatePassword(password)) {
        showError('Пароль повинен містити мінімум 6 символів');
        return;
    }

    if (password !== confirmPassword) {
        showError('Паролі не співпадають');
        return;
    }

    // Отримуємо список користувачів
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Перевіряємо, чи email вже зареєстрований
    if (users.some(user => user.email === email)) {
        showError('Користувач з таким email вже існує');
        return;
    }

    // Створюємо нового користувача
    const newUser = {
        name,
        email,
        password,
        registrationDate: new Date().toISOString()
    };

    // Додаємо користувача до списку
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Автоматично логінимо користувача
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    if (isModal) {
        closeAuthModal();
    } else {
        window.location.href = 'index.html';
    }
    
    showSuccess('Ви успішно зареєструвалися');
    updateAuthButton();
}

// Функція входу
function login(event) {
    if (event) {
        event.preventDefault();
    }
    
    // Визначаємо, чи це модальне вікно чи окрема сторінка
    const isModal = document.getElementById('authModal')?.style.display === 'block';
    
    // Отримуємо значення полів в залежності від контексту
    const email = document.getElementById('loginEmail')?.value;
    const password = document.getElementById('loginPassword')?.value;

    if (!email || !password) {
        showError('Будь ласка, заповніть всі поля');
        return;
    }

    // Отримуємо збережені дані користувача
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        if (isModal) {
            closeAuthModal();
        } else {
            window.location.href = 'index.html';
        }
        
        showSuccess('Ви успішно увійшли в систему');
        updateAuthButton();
    } else {
        showError('Неправильний email або пароль');
    }
}

// Функція для оновлення кнопок авторизації
function updateAuthButton() {
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    if (isAuthenticated && currentUser) {
        if (authButtons) authButtons.style.display = 'none';
        if (userProfile) {
            userProfile.style.display = 'flex';
        }
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userProfile) userProfile.style.display = 'none';
    }
}

// Функція виходу
function logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userName');
    window.location.href = 'index.html';
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            register(e);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            login(e);
        });
    }

    // Додаємо обробники для кнопок в модальному вікні
    const loginButton = document.querySelector('#loginForm button');
    const registerButton = document.querySelector('#registerForm button');

    if (loginButton) {
        loginButton.onclick = (e) => {
            e.preventDefault();
            login();
        };
    }

    if (registerButton) {
        registerButton.onclick = (e) => {
            e.preventDefault();
            register();
        };
    }

    updateAuthButton();
    updateUserInterface();
});

function updateUserInterface() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userProfile = document.getElementById('userProfile');
    const userNameElement = document.getElementById('userName');

    if (isAuthenticated && currentUser.name) {
        userProfile.style.display = 'flex';
        userNameElement.textContent = currentUser.name;
    } else {
        userProfile.style.display = 'none';
    }
} 