let currentSlideIndex = 1;
showSlides(currentSlideIndex);

function changeSlide(n) {
    showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlides(currentSlideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[currentSlideIndex - 1].style.display = "block";
    dots[currentSlideIndex - 1].className += " active";

    // Hide Prev button at first slide and Next button at last slide
    document.querySelector('.prev').style.display = (currentSlideIndex === 1) ? 'none' : 'block';
    document.querySelector('.next').style.display = (currentSlideIndex === slides.length) ? 'none' : 'block';
}
