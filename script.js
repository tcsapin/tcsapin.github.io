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

/* Creating the grid */
// function grid(el) {
//     var container = document.createElement("div");
//     container.id = "main";
//     container.className = "container";

//     for (i=0; i<16; i+=1) {
//         var row = document.createElement("div");
//         row.className = "row";
//         row.id = "row" + i;
      
//         for (k=0; k<16; k+=1) {
//             var box = document.createElement("div"); 
//             box.className = "box";
//             row.appendChild(box);
//         };
      
//         container.appendChild(row);      
//     };
  
//     el.appendChild(container);
// };

// grid(document.body);


// Function that include external files https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}