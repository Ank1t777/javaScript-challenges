# JavaScript `.call()` and `.apply()` Methods

In JavaScript, `.call()` and `.apply()` are methods used to invoke functions with a specific `this` context. They allow us to borrow functions from one object and use them with another. Both methods serve similar purposes, but they differ in how they pass arguments to the function.

Let's look at an example to understand how these methods work in practice.

## Example Code

```javascript
function displayPolitician(currentSituation) {
    console.log(`${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`);
}

const politician1 = {
    name: 'Carly Fowler',
    age: 40
};

const politician2 = {
    name: 'Dave Bland',
    age: 55
};

// Using `.apply()`
displayPolitician.apply(politician1, ['In jail for corruption']);

// Using `.call()`
displayPolitician.call(politician2, 'Resigned due to incompetence');
