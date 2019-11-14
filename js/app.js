// let output = document.getElementById('output');

// // output.innerText = "afternoon";

// let ptoPerPayCheck = 4; 
// let paychecksPerYear = 24;
// let ptoPerYear = ptoPerPayCheck * paychecksPerYear;
// let ptoInDays = ptoPerYear / 8;

// output.innerText = "You have " + ptoInDays + " Days of PTO. Enjoy";

//ZERO BASED INDEX

//methods that only return a single elemnt node.
//Getelementbyid()
var itemOne = document.getElementById('one');
console.log(itemOne);

//queryselectors
var itemOneQuery = document.querySelector('li.hot');
//THis uses CSS selector syntax. selecting a or more elements. But Will only return the first element of the selected ones.
console.log(itemOneQuery);

//Methods that will return one or multiple elements BUT as a NODELIST

//Classname
var itemOneClassName = document.getElementsByClassName('hot');
//Will grab all the attributes with the class name 'hot'
console.log(itemOneClassName);

//Tagname
var itemOneTagName = document.getElementsByTagName('li');
//This will grab all the elements by their tag name 'li'
console.log(itemOneTagName);

//querySelectorAll
var itemOneQueryAll = document.querySelectorAll('li.hot');
//Like the other queryselector but will grab all the li with the classnane hot.
console.log(itemOneQueryAll);
