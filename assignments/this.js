/* The four principles of "this";
* in your own words, explain the four principles for the "this" keyword below.
*
* 1. Window/global object binding: This is the default. When global, "this" is the window/console. In strict mode, will return "undefined".
* 2. Implicit binding: when a function is called with a dot, the object to the left of the dot is "this". Only applies to objects with          methods.
* 3. Explicit binding: When a "call" or "apply" method is used, "this" is explicitly defined when the argument is passed into the function      invocation.
* 4. New binding: When a constructor function is used, "this" refers to the object created by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function bestDog() {
    console.log(this.dogName);
};

let dogName = "Kai Dog";

bestDog();

// Principle 2

// code example for Implicit Binding

let faveSnack = {
    name: "chips",
    flavor: "jalapeno",
    speak: function () {
        console.log(`My favorite snack is ${this.flavor} ${this.name}.`)
    }
};

faveSnack.speak();

// Principle 3

// code example for New Binding

function Closet (item, designer, color) {
    this.item = item;
    this.designer = designer;
    this.color = color;
}

let closetOne = new Closet("Dress", "Givenchy", "Navy blue");

console.log(closetOne);

// Principle 4

// code example for Explicit Binding

function goesBy(){
    console.log(this.name)
}

let favePet = {
    name: "Hedwig",
    species: "Snowy owl",
    color: "white"
}

goesBy.call(favePet);