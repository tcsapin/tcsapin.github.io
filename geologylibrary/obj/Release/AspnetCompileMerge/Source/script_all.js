// Function Date & Time
function showDateTime()
{
    document.getElementById("date").innerHTML = Date();
}

// Function to show notifications
function showNotifications()
{
    var x;
    var y = confirm("Show Notifications?");

    if (y == true)
    {
        alert("We will spam with notifications!");
    }
    else {
        alert("You don't love us :'( ");
    }
    document.getElementById().innerHTML = x;
}

// Function to check whether both passwords
// is same or not.
function checkEmailPassword(form)
{
    email1 = form.email1.value;
    email2 = form.email2.value;
    password1 = form.password1.value;
    password2 = form.password2.value;

    // If email & password not entered
    if (email1 == ' ')
    {
        alert("Please enter Email");
    }
    else if (password1 == ' ')
    {
        alert("Please enter Password");
    }

    // If confirm email & password not entered
    else if (email2 == ' ')
    {
        alert("Please enter confirm Email");
    }

    else if (password2 == ' ')
    {
        alert("Please enter confirm password");
    }
    // If Not same return false.
    else if (email1 != email2)
    {
        alert('\nEmail did not match: Please Try again...')
        return false;
    }
    else if (password1 != password2)
    {
        alert("\nPassword did not match: Please try again...");
        return false;
    }

    // If same return true.
    else
    {
        alert("Email & Password Match: Welcome to Geology Library");
        return true;
    }
}

// Function for Sign In
function showCredentials() {
    var x;
    var text;
    var username = prompt("Userame:");
    while (username.length == 0)
    {
        username = prompt("Please enter your Userame:");
    }
    
    if (username != null)
    {
        if (username.length != 0)
        {
            var password = prompt("Password:");
            while (password.length == 0)
            {
                password = prompt("Please enter your Password:");
            }
            if (password != 0)
            {
                text = chooseGreeting(x) + " " + username + "!!\nWelcome to Geology Library!!";
            }            
        }       
    }
    else
    {
        text = "Cancelled";
        return false;
    }

    alert(text);
}

/* Greeting Alert */
function chooseGreeting(h) {
    var h = new Date().getHours;
    var x;

    if (h < 12)
    {
        x = "Good Morning";
    }
    else if (h >= 12 && time <= 18)
    {
        x = "Good Afternoon";
    }
    else
    { //19, 20, 21, 22, 23
        x = "Good Night";
    }
    return x;
}

// Function to Confirm Privacy
function showConfirm()
{
    var x;
    if (document.getElementById("privacy").checked != true) {
        x = confirm("Do you disagree with terms and conditions?");
        if (x == true)
        {
            alert("OK! You disagree with terms and conditions!");
        }
        else
        {
            alert("Cancelled! You still agree with the terms and conditions!");
            document.getElementById("privacy").checked = true;
        }
    }
    else
    {
        x = confirm("Do you agree with terms and conditions?");
        if (x == true)
        {
            alert("OK! You agree with the terms and conditions!")
        }
        else
        {
            alert("Cancelled! You still disagree with terms and conditions!");
            document.getElementById("privacy").checked = false;
        }
    }
}

/********************/
// Function for animation
function showCreation()
{
    var b1 = document.getElementById("groundWest");
    b1.classList.add("animation1");
    var b2 = document.getElementById("groundEast");
    b2.classList.add("animation2");
    var b3 = document.getElementById("underground");
    b3.classList.add("animation3");
    var b4 = document.getElementById("creationbtn");
    b4.classList.add("animation4");
}

/*********************/
/*
// Function to show/hide information when the user press the button 
function showIgneous()
{
    //andesite
    $(document).ready(function () {
        $("#andesitebtn").click(function () {
            $("#andesiteinfo").toggle();
            $("#basaltinfo").hide();
            $("#daciteinfo").hide();
            $("#dioriteinfo").hide();
            $("#gabbroinfo").hide();
            $("#graniteinfo").hide();
            $("#granodioriteinfo").hide();
        });
    });
    //basalt
    $(document).ready(function () {
        $("#basaltbtn").click(function () {
            $("#andesiteinfo").hide();
            $("#basaltinfo").toggle();
            $("#daciteinfo").hide();
            $("#dioriteinfo").hide();
            $("#gabbroinfo").hide();
            $("#graniteinfo").hide();
            $("#granodioriteinfo").hide();
        });
    });
    //dacite
    $(document).ready(function () {
        $("#dacitebtn").click(function () {
            $("#andesiteinfo").hide();
            $("#basaltinfo").hide();
            $("#daciteinfo").toggle();
            $("#dioriteinfo").hide();
            $("#gabbroinfo").hide();
            $("#graniteinfo").hide();
            $("#granodioriteinfo").hide();
        });
    });
    //diorite
    $(document).ready(function () {
        $("#dioritebtn").click(function () {
            $("#andesiteinfo").hide();
            $("#basaltinfo").hide();
            $("#daciteinfo").hide();
            $("#dioriteinfo").toggle();
            $("#gabbroinfo").hide();
            $("#graniteinfo").hide();
            $("#granodioriteinfo").hide();
        });
    });
    //gabbro
    $(document).ready(function () {
        $("#gabbrobtn").click(function () {
            $("#andesiteinfo").hide();
            $("#basaltinfo").hide();
            $("#daciteinfo").hide();
            $("#dioriteinfo").hide();
            $("#gabbroinfo").toggle();
            $("#graniteinfo").hide();
            $("#granodioriteinfo").hide();
        });
    });
    //granite
    $(document).ready(function () {
        $("#granitebtn").click(function () {
            $("#andesiteinfo").hide();
            $("#basaltinfo").hide();
            $("#daciteinfo").hide();
            $("#dioriteinfo").hide();
            $("#gabbroinfo").hide();
            $("#graniteinfo").toggle();
            $("#obsidianinfo").hide();
        });
    });
    //granodiorite
    $(document).ready(function () {
        $("#granodioritebtn").click(function() {
            $("#andesiteinfo").hide();
            $("#basaltinfo").hide();
            $("#daciteinfo").hide();
            $("#dioriteinfo").hide();
            $("#gabbroinfo").hide();
            $("#graniteinfo").hide();
            $("#granodioriteinfo").toggle();
        });
    });
}
*/