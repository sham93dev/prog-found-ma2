// Q1 Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

var petArray = ["cat", "cow", "dog"];

// Q2 Console log the value of the second item in petArray.

console.log(petArray[1]);

// Q3 Add the item "sheep" to petArray using the push method.

petArray.push("sheep");

// Q4 Console log how many items there are now in petArray using the length method.

console.log(petArray.length);

// Q5 Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.

var catObject = {
    name: "Acoita",
    colour: "Grey",
    age: 2
}

// Q6 Console log the value of the third property of catObject.

 console.log(catObject.age);

// Q7 Take the value of catObject (the {} part) and place it inside an array called catArray.

 var catArray = {
    name: "Acoita",
    colour: "Grey",
    age: 2
}

// Q8  Loop through catArray and console log each property of each object inside (there will be only 1 object inside).

for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}


// Q9 Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.

function logToConsole(myName) {
    console.log(myName);
}

logToConsole("Shamil");

// Q10 Call the logToConsole function and pass in the value "donkey".

logToConsole("donkey");

