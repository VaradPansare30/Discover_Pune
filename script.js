function showPlace(place) {
    var slides = document.getElementsByClassName("slides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    document.getElementById(place).style.display = "block"; 

};

