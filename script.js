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