import telebot
from telebot import types
import json
import os
import requests
from urllib.parse import urlencode

# Замініть на ваш токен
TOKEN = '7463432820:AAH98TsRf5yRAu2mspCtupZT9q-UhQHZ3Bw'
bot = telebot.TeleBot(TOKEN)

# Завантаження даних
def load_phones():
    with open('phones.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def load_accessories():
    with open('accessories.json', 'r', encoding='utf-8') as f:
        return json.load(f)

phones = load_phones()
accessories = load_accessories()

# Завантаження даних про телефони
def load_phones_data():
    try:
        with open('phones.json', 'r', encoding='utf-8') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

# Завантаження даних про аксесуари
def load_accessories_data():
    try:
        with open('accessories.json', 'r', encoding='utf-8') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

# Функція для створення посилання на кошик з товаром
def create_cart_link(product_id):
    base_url = "http://127.0.0.1:5501/cart.html"
    params = {'product': product_id}
    return f"{base_url}?{urlencode(params)}"

# Функція для перевірки доступності зображення
def is_image_available(url):
    try:
        response = requests.head(url)
        return response.status_code == 200
    except:
        return False

# Створення головного меню
def create_main_menu():
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    phones_btn = types.KeyboardButton('📱 Телефони')
    accessories_btn = types.KeyboardButton('🎧 Аксесуари')
    cart_btn = types.KeyboardButton('🛒 Кошик')
    contacts_btn = types.KeyboardButton('📞 Контакти')
    markup.add(phones_btn, accessories_btn)
    markup.add(cart_btn, contacts_btn)
    return markup

# Створення меню фільтрів для телефонів
def create_phone_filters():
    markup = types.InlineKeyboardMarkup(row_width=2)
    brands = list(set(phone['brand'] for phone in phones))
    for brand in brands:
        markup.add(types.InlineKeyboardButton(brand, callback_data=f'phone_brand_{brand}'))
    markup.add(types.InlineKeyboardButton('◀️ Назад', callback_data='back_to_main'))
    return markup

# Створення меню фільтрів для аксесуарів
def create_accessory_filters():
    markup = types.InlineKeyboardMarkup(row_width=2)
    types_list = list(set(accessory['type'] for accessory in accessories))
    for type_name in types_list:
        markup.add(types.InlineKeyboardButton(type_name, callback_data=f'accessory_type_{type_name}'))
    markup.add(types.InlineKeyboardButton('◀️ Назад', callback_data='back_to_main'))
    return markup

# Відправка каталогу телефонів
def send_phones_catalog(message, phones_to_show=None):
    if phones_to_show is None:
        phones_to_show = phones
    
    for phone in phones_to_show:
        try:
            # Відправляємо фото
            with open(f"images/{phone['model'].lower().replace(' ', '')}.jpg", 'rb') as photo:
                caption = f"📱 {phone['brand']} {phone['model']}\n"
                caption += f"💰 Ціна: {phone['price']} грн\n"
                caption += f"📝 {phone['description']}"
                
                markup = types.InlineKeyboardMarkup()
                buy_btn = types.InlineKeyboardButton('🛒 Купити', callback_data=f'buy_phone_{phone["model"]}')
                markup.add(buy_btn)
                
                bot.send_photo(message.chat.id, photo, caption=caption, reply_markup=markup)
        except Exception as e:
            print(f"Помилка при відправці фото {phone['model']}: {e}")
            # Якщо фото не знайдено, відправляємо тільки текст
            caption = f"📱 {phone['brand']} {phone['model']}\n"
            caption += f"💰 Ціна: {phone['price']} грн\n"
            caption += f"📝 {phone['description']}"
            
            markup = types.InlineKeyboardMarkup()
            buy_btn = types.InlineKeyboardButton('🛒 Купити', callback_data=f'buy_phone_{phone["model"]}')
            markup.add(buy_btn)
            
            bot.send_message(message.chat.id, caption, reply_markup=markup)

# Відправка каталогу аксесуарів
def send_accessories_catalog(message, accessories_to_show=None):
    if accessories_to_show is None:
        accessories_to_show = accessories
    
    for accessory in accessories_to_show:
        try:
            # Відправляємо фото
            with open(accessory['image'], 'rb') as photo:
                caption = f"🎧 {accessory['name']}\n"
                caption += f"💰 Ціна: {accessory['price']} грн\n"
                caption += f"📝 {accessory['description']}"
                
                markup = types.InlineKeyboardMarkup()
                buy_btn = types.InlineKeyboardButton('🛒 Купити', callback_data=f'buy_accessory_{accessory["name"]}')
                markup.add(buy_btn)
                
                bot.send_photo(message.chat.id, photo, caption=caption, reply_markup=markup)
        except Exception as e:
            print(f"Помилка при відправці фото {accessory['name']}: {e}")
            # Якщо фото не знайдено, відправляємо тільки текст
            caption = f"🎧 {accessory['name']}\n"
            caption += f"💰 Ціна: {accessory['price']} грн\n"
            caption += f"📝 {accessory['description']}"
            
            markup = types.InlineKeyboardMarkup()
            buy_btn = types.InlineKeyboardButton('🛒 Купити', callback_data=f'buy_accessory_{accessory["name"]}')
            markup.add(buy_btn)
            
            bot.send_message(message.chat.id, caption, reply_markup=markup)

# Обробник команди /start
@bot.message_handler(commands=['start'])
def start(message):
    welcome_text = "👋 Вітаю! Я бот магазину MobiWorld.\n\n"
    welcome_text += "Оберіть опцію з меню нижче:"
    bot.send_message(message.chat.id, welcome_text, reply_markup=create_main_menu())

# Обробник текстових повідомлень
@bot.message_handler(func=lambda message: True)
def handle_text(message):
    if message.text == '📱 Телефони':
        markup = create_phone_filters()
        bot.send_message(message.chat.id, "Оберіть бренд:", reply_markup=markup)
    elif message.text == '🎧 Аксесуари':
        markup = create_accessory_filters()
        bot.send_message(message.chat.id, "Оберіть тип аксесуара:", reply_markup=markup)
    elif message.text == '🛒 Кошик':
        bot.send_message(message.chat.id, "🛒 Ваш кошик порожній")
    elif message.text == '📞 Контакти':
        contacts_text = "📞 Наші контакти:\n\n"
        contacts_text += "📍 Адреса: м. Київ, вул. Прикладна, 1\n"
        contacts_text += "📞 Телефон: +380 (44) 123-45-67\n"
        contacts_text += "✉️ Email: info@mobiworld.com\n"
        contacts_text += "🌐 Сайт: www.mobiworld.com"
        bot.send_message(message.chat.id, contacts_text)

# Обробник callback-запитів
@bot.callback_query_handler(func=lambda call: True)
def handle_callback(call):
    if call.data.startswith('phone_brand_'):
        brand = call.data.split('_')[2]
        filtered_phones = [phone for phone in phones if phone['brand'] == brand]
        send_phones_catalog(call.message, filtered_phones)
    elif call.data.startswith('accessory_type_'):
        type_name = call.data.split('_')[2]
        filtered_accessories = [acc for acc in accessories if acc['type'] == type_name]
        send_accessories_catalog(call.message, filtered_accessories)
    elif call.data == 'back_to_main':
        bot.send_message(call.message.chat.id, "Оберіть опцію з меню:", reply_markup=create_main_menu())
    elif call.data.startswith('buy_'):
        item_type = call.data.split('_')[1]
        item_name = call.data.split('_')[2]
        bot.send_message(call.message.chat.id, f"🛒 Товар {item_name} додано до кошика!")

# Запуск бота
if __name__ == '__main__':
    print("Бот запущено...")
    bot.polling(none_stop=True) 