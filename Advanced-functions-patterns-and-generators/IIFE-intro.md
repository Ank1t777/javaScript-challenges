# Introduction to IIFEs (Immediately Invoked Function Expressions)

In JavaScript, an **Immediately Invoked Function Expression (IIFE)** is a function that is executed immediately after it is defined. This pattern is often used to create a private scope for variables and avoid polluting the global namespace.

## Why Use IIFEs?

1. **Encapsulation**: Variables and functions inside an IIFE are not accessible from the outside, which helps prevent naming conflicts.
2. **Immediate Execution**: IIFEs are useful when you need to execute some code right away, such as initializing a configuration or setting up event listeners.
3. **Avoid Global Scope Pollution**: By wrapping code in an IIFE, you can avoid adding variables to the global scope.

## Syntax of an IIFE

An IIFE is defined using a function expression wrapped in parentheses, followed by another set of parentheses to invoke it. Here's the general syntax:

```javascript
(function() {
    // Code inside the IIFE
})();