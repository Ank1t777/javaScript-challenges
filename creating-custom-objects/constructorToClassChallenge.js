/*
Challenge:
Rebuild this constructor function as a class.
*/


function Character(name) {
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function (item) {
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const wizard = new Character('Merlin')
wizard.addItem('a wand')
