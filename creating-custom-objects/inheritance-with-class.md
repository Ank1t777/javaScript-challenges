# JavaScript Class Inheritance

In JavaScript, **inheritance** is a fundamental concept in object-oriented programming where a class can inherit properties and methods from another class. This allows for code reuse and a structured, hierarchical way of organizing related classes.

JavaScript implements inheritance using the `class` and `extends` keywords.

## Example: `Event` and `Concert` Classes

In the following example, we have two classes: `Event` and `Concert`. The `Concert` class inherits from the `Event` class, meaning it has access to all the properties and methods of `Event`.

### Base Class: `Event`

The `Event` class represents a generic event with the following properties:
- `name`: Name of the event.
- `location`: Location of the event.
- `date`: Date of the event.

It also includes a method:
- `getDetails()`: Returns a string describing the event details.

```javascript
class Event {
    constructor(name, location, date) {
        this.name = name
        this.location = location
        this.date = date
    }

    getDetails() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}
