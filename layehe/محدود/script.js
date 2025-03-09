// مسدود کردن کلیک راست
document.addEventListener('contextmenu', function(event) {
    try {
        event.preventDefault();
        alert('کلیک راست در این صفحه غیرفعال است.');
    } catch (error) {
        console.error('خطا در مسدود کردن کلیک راست:', error);
    }
});

// مسدود کردن ذخیره صفحه (Ctrl + S)
document.addEventListener('keydown', function(event) {
    try {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            alert('ذخیره صفحه در این سایت غیرفعال است.');
        }
    } catch (error) {
        console.error('خطا در مسدود کردن ذخیره صفحه:', error);
    }
});

// مسدود کردن کشیدن تصاویر
document.addEventListener('dragstart', function(event) {
    try {
        if (event.target.tagName === 'IMG') {
            event.preventDefault();
        }
    } catch (error) {
        console.error('خطا در مسدود کردن کشیدن تصاویر:', error);
    }
});

// نمایش شماره تماس
function showPhoneNumber() {
    try {
        const phoneNumber = document.getElementById('phone-number');
        phoneNumber.style.display = 'block';
    } catch (error) {
        console.error('خطا در نمایش شماره تماس:', error);
    }
}

// هدایت به صفحه تماس
function redirectToCall() {
    try {
        const link = document.createElement('a');
        link.href = 'tel:09903583689';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
            document.body.removeChild(link);
        }, 1000);
    } catch (error) {
        console.error('خطا در هدایت به صفحه تماس:', error);
    }
}

// اسکرول نرم و نمایش شماره تماس
document.querySelector('.contact-button').addEventListener('click', function() {
    try {
        const contactSection = document.querySelector('.contact-seller');
        contactSection.scrollIntoView({ behavior: 'smooth' });
        showPhoneNumber();
        redirectToCall();
    } catch (error) {
        console.error('خطا در اسکرول و نمایش شماره تماس:', error);
    }
});