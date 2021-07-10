//Initialize the slides
var slideIndex = 1;
showSlides(slideIndex);

//Next and previous controls
function slideSelect(n){
    showSlides(slideIndex += n);
}

//Dot controls
function curSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var index = 0;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    //Check index out of bounds
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    //Reset slides
    for(index = 0; index < slides.length; index++){
        slides[index].style.display = "none";
    }

    //Reset dots
    for(index = 0; index < dots.length; index++){
        dots[index].className = dots[index].className.replace(" active", "");
    }

    //Set active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}