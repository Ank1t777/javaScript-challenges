# Understanding Inheritance in JavaScript

In JavaScript, inheritance is a mechanism that allows one object to acquire properties and methods of another object. This is commonly used to create specialized versions of a base object with added features. In this document, we'll walk through inheritance by using an `Event` and `Concert` example.

## Example Explanation

In our example, we have:
- An `Event` constructor function that initializes a generic event with properties like `name`, `location`, and `date`.
- A `Concert` constructor function that extends `Event` to represent a concert event with an additional property, `headliner`.

The `Concert` object "inherits" from `Event`, meaning it can use `Event`'s properties and methods, but it can also define its own.

### Step 1: Define the Base Constructor (`Event`)

The `Event` constructor initializes the main properties and has a method to return event details.

```javascript
function Event(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
    this.getDetails = function () {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
    };
}
