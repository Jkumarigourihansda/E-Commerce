// slider.js

// Example slider logic (JavaScript)
const slides = document.querySelectorAll('.slider-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Example CSS (add this to your CSS file or in a <style> tag)
/*
.slider-container {
    position: relative;
    width: 600px;
    height: 300px;
    overflow: hidden;
}

.slider-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease;
    top: 0;
    left: 0;
}

.slider-slide.active {
    opacity: 1;
    z-index: 1;
    animation: slideIn 1s;
}

@keyframes slideIn {
    from {
        transform: translateX(50px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
*/

// Example HTML structure:
/*
<div class="slider-container">
    <div class="slider-slide active">Slide 1</div>
    <div class="slider-slide">Slide 2</div>
    <div class="slider-slide">Slide 3</div>
</div>
*/