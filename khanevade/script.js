// مسدود کردن کلیک راست
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // جلوگیری از باز شدن منوی راست کلیک
    alert('کلیک راست در این صفحه غیرفعال است.'); // نمایش پیام به کاربر
});

// مسدود کردن ذخیره صفحه (Ctrl + S یا راست کلیک + ذخیره)
document.addEventListener('keydown', function(event) {
    // اگر کلید Ctrl + S فشار داده شد
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // جلوگیری از ذخیره صفحه
        alert('ذخیره صفحه در این سایت غیرفعال است.'); // نمایش پیام به کاربر
    }
});

// مسدود کردن کشیدن و رها کردن تصاویر
document.addEventListener('dragstart', function(event) {
    if (event.target.tagName === 'IMG') { // اگر کاربر سعی کند تصویری را بکشد
        event.preventDefault(); // جلوگیری از کشیدن تصویر
    }
});

// نمایش شماره تماس
function showPhoneNumber() {
    const phoneNumber = document.getElementById('phone-number');
    phoneNumber.style.display = 'block'; // نمایش شماره تماس
}

// تابع برای هدایت به صفحه تماس با استفاده از لینک واقعی
function redirectToCall() {
    // ایجاد یک لینک موقت
    const link = document.createElement('a');
    link.href = 'tel:09055094214'; // تنظیم لینک تماس
    link.style.display = 'none'; // مخفی کردن لینک
    document.body.appendChild(link); // اضافه کردن لینک به صفحه

    // کلیک خودکار روی لینک
    link.click();

    // حذف لینک پس از ۱ ثانیه
    setTimeout(() => {
        document.body.removeChild(link);
    }, 1000);
}

// اسکرول نرم برای بخش تماس و نمایش شماره
document.querySelector('.contact-button').addEventListener('click', function() {
    const contactSection = document.querySelector('.contact-seller');
    contactSection.scrollIntoView({ behavior: 'smooth' }); // اسکرول نرم به بخش تماس

    // نمایش شماره تماس
    showPhoneNumber();

    // هدایت به صفحه تماس
    redirectToCall();
});