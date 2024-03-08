//var age = 15;

//alert("I am "+age+" years old"); //1

// Check if local storage is supported //2
   /* if (typeof(Storage) !== "undefined") {
        // Check if the visit count is already stored
        if (localStorage.getItem("visitCount") === null) {
            // If not, initialize the visit count to 1
            localStorage.setItem("visitCount", 1);
            console.log("Welcome! First visit.");
            alert("Welcome! First visit.")
        } else {
            // If stored, increment the visit count
            let visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
            localStorage.setItem("visitCount", visitCount);
            console.log("Welcome back! Visit count: " + visitCount);
            alert("Welcome back! Visit count: " + visitCount);
        }
    } else {
        // Local storage is not supported
        console.log("Local storage is not supported, unable to count visits.");
    }*/

//var birthYear = "My birth year is "+ "1985";
//alert(birthYear);

var vistor_name;
var product_title;
var quantity;

var defaultAnswer = "Shahrukh";
var dflt_product_title = "Microwave";
var dflt_quantity = 4;



function sendDataToHTML() {
    // Get data from the prompt

   var visitor_name = prompt("Please enter your name", defaultAnswer);

   var product_title = prompt("Please enter product title", dflt_product_title);

   var quantity = prompt("Please enter quantity",dflt_quantity); 

   var userInput = visitor_name + " "+ product_title + " "+ quantity;
   console.log(userInput);
   alert(userInput);


    // Check if the user entered something
    if (userInput !== null) {
        // Update the HTML with the user's data
        var outputContainer = document.getElementById("output-container");
        outputContainer.innerHTML = "User entered: " + userInput;
    }
}

// Call the function when the page loads (optional)
sendDataToHTML();




    





















