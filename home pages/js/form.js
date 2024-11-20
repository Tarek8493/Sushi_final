

function order() {
    let orderparagraph = document.getElementById("order")
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let PN = document.getElementById("PN").value;
let orderNumber = Math.floor(Math.random() * 10000); 
orderparagraph.innerHTML = "thank you " + fname + " you order number is "+ orderNumber + " please make sure this is you phone number( "+ PN +")" ;}