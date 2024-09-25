const books = {
  "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  "b002": { title: "1984", price: 15.99, isAvailable: false },
  "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

/*
Challenge:
  1. Create an array of values using Object.values
  2. Iterate over it and log out each book price.
*/

const bookValues = Object.values(books);

// console.log(bookValues);

bookValues.forEach(value => console.log(value.price))
