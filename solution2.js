const books = {
  "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  "b002": { title: "1984", price: 15.99, isAvailable: false },
  "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

// Object.entries returns an array of arrays, where each inner 
// array contains two elements: the key and the value of each 
// property in the object.

const bookEntries = Object.entries(books);

//console.log(bookEntries)

// const filteredIItems = bookEntries.filter(entry => entry[1].price > 16)
// // console.log(filteredIItems)
// filteredIItems.map(entry => {
//   console.log(`ID: ${entry[0]} book: ${entry[1].title} £${entry[1].price}`)
// })

bookEntries.filter(([id, book]) => book.price > 16).forEach(([id, book]) => console.log(`ID: ${id} book: ${book.title} £${book.price}`))

/*
Challenge:
  1. Use Object.entries to create an array from 'books'.
  2. Use an array method to filter out the books 
     which cost less than 16.
  3. Iterate over the remaining books and log a string 
     for each book in this format:
     ID: b001 Book: To Kill a Mockingbird £18.99
Bonus points:
  1. Make your code DRYer by destructuring the array 
     where it is passed into a method.
  2. Chain the array methods together.
*/


/*
    Expected Output:
    ID: b001 Book: To Kill a Mockingbird £18.99
    ID: b004 Book: Moby Dick £22.5
*/