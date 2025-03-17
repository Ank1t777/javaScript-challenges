# Introduction to Closures in JavaScript

Closures are a fundamental concept in JavaScript that allow functions to have access to variables from an outer function even after the outer function has finished executing. This is possible because functions in JavaScript form closures around the scope in which they were created.

## Example: Managing Player Scores

Let's look at an example to understand closures better. Consider the following code that manages the scores of players:

```javascript
function scorePoint(playerName) {
    let score = 0;
    return {
        displayScore: function() {
            console.log(`${playerName} has ${score} points`);
        },
        incrementScore: function() {
            score++;
        },
        decrementScore: function() {
            score--;
        }  
    };
}

const player1 = scorePoint('Vicky');
const player2 = scorePoint('Leo');
player2.incrementScore();
player2.incrementScore();
player2.decrementScore();
player1.incrementScore();
player2.decrementScore();
player1.incrementScore();

player1.displayScore(); // Vicky has 2 points
player2.displayScore(); // Leo has 0 points