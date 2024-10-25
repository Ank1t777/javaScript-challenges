# Factory Functions in JavaScript

A **factory function** is a design pattern in JavaScript where a function is used to create and return objects. Unlike constructor functions, factory functions do not require the `new` keyword, and they provide more flexibility in creating objects.

## What is a Factory Function?

A factory function is simply a function that returns an object. It allows for creating multiple instances of similar objects without the complexity of classes or constructor functions.

### Example of a Factory Function

Here's an example of a factory function called `gamer` that creates a player object with a name, score, and a method to increment the score:

```javascript
function gamer(name, score) {
    return {
        name,
        score,
        incrementScore() {
            this.score++
        }
    }
}
