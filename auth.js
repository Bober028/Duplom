// Функції для роботи з автентифікацією
function showAuthModal() {
    document.getElementById("authModal").style.display = "flex";
}

function closeAuthModal() {
    document.getElementById("authModal").style.display = "none";
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const tabs = document.querySelectorAll(".auth-tab");
    
    tabs.forEach(t => t.classList.remove("active"));
    
    if (tab === "login") {
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
        tabs[0].classList.add("active");
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
        tabs[1].classList.add("active");
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

function register() {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Будь ласка, заповніть всі поля");
        return;
    }

    if (password !== confirmPassword) {
        alert("Паролі не співпадають");
        return;
    }

    const users = getUsers();
    
    if (users.some(user => user.email === email)) {
        alert("Користувач з таким email вже існує");
        return;
    }

    users.push({
        name,
        email,
        password // В реальному проекті пароль має бути захешований
    });

    saveUsers(users);
    
    // Очищаємо поля форми
    document.getElementById("registerName").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";
    document.getElementById("confirmPassword").value = "";
    
    alert("Реєстрація успішна!");
    closeAuthModal();
    updateAuthButton();
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Будь ласка, заповніть всі поля");
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        
        // Очищаємо поля форми
        document.getElementById("loginEmail").value = "";
        document.getElementById("loginPassword").value = "";
        
        alert("Вхід успішний!");
        closeAuthModal();
        updateAuthButton();
    } else {
        alert("Невірний email або пароль");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    updateAuthButton();
}

function updateAuthButton() {
    const authButton = document.querySelector(".auth-button");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        authButton.textContent = `Вийти (${currentUser.name})`;
        authButton.onclick = logout;
    } else {
        authButton.textContent = "Увійти/Зареєструватися";
        authButton.onclick = showAuthModal;
    }
}

// Оновлюємо кнопку при завантаженні сторінки
window.addEventListener('load', function() {
    updateAuthButton();
}); 