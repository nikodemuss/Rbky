var slideNow = 1;

function nextSlide(n) {
    currentSlide(slideNow += n);
    console.log("run");
}

function dot(n){
    slideNow = n;
    currentSlide(slideNow);
}

function currentSlide(n) {
    let slides = document.getElementsByClassName("slides");
    let slideText  = document.getElementsByClassName("slide1");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideNow = 1;
    }
    else if (n < 1) {
        slideNow = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        // console.log("slides = " + slides[i]);
        slides[i].style.display = "none";
        slideText[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideNow - 1].style.display = "block";
    slideText[slideNow - 1].style.display = "block";
    dots[slideNow - 1].className += " active";
}
