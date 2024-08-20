let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('swipe-left', 'swipe-right'));
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[slideIndex].classList.add('swipe-left');
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[slideIndex].classList.add('swipe-right');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

// Показать краткие характеристики машины
function showCarInfo(name, info) {
    var carInfoElement = document.getElementById('carInfo' + name);
    carInfoElement.innerHTML = info;
    carInfoElement.style.display = "block";
}

// Скрыть краткие характеристики машины
function hideCarInfo(name) {
    var carInfoElement = document.getElementById('carInfo' + name);
    carInfoElement.style.display = "none";
}
