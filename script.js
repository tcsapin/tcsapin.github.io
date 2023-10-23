// Menu

function myFunction(x) {    
    
    x.classList.toggle("change");

    var y = document.getElementById('navbar');
    var z = document.defaultView.getComputedStyle(y);

    if (z.display.match('none')) // or display === 'none'
    {
        y.style.display = 'flex';

    } else {

        y.style.display = 'none';

    }
    
  }