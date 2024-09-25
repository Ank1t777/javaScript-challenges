const books = {
  "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  "b002": { title: "1984", price: 15.99, isAvailable: false },
  "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

/*
Challenge:
  1. Use Object.keys to get an array of keys. 
     You can store it in a const 'bookKeys'. 
  2. Iterate over bookKeys twice.
     A) First log each individual key in the array.
     B) Then log only the book titles.
*/

const bookKeys = Object.keys(books);

bookKeys.forEach(key => {
        console.log(key);
})

bookKeys.forEach(value => {
        console.log(books[value].title);
})
/*
Output: b001
        b002
        b003
        b004
Output: To Kill a Mockingbird
        1984
        The Great Gatsby
        Moby Dick
*/
