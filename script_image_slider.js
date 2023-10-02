// Initialize variables
var slideIndex = 0;
var timeoutHandle = window.setTimeout(0);

// call click function
currentDiv(slideIndex);

// click function
function currentDiv(n) {    
    // call clearTimeout
    window.clearTimeout(timeoutHandle);

    // call image slider function
    showDivs(slideIndex = n);
  }
  
  // image slider function
  function showDivs(n) {    

    // call clearTimeout
    window.clearTimeout(timeoutHandle);

    // initialize variables
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    
    if (n > x.length) {slideIndex = 0}
    
    // show them
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    slideIndex++;    
    if (slideIndex > x.length) {slideIndex = 1;}
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";    

    // then call setTimeout again to reset the timer
    timeoutHandle = window.setTimeout(showDivs, 10000); // Change image every 10 seconds
    
  }