function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
    this.getDetails = function() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}



/*
Challenge:
    1. Remove getDetails from the Event constructor's body 
       and add it to the Event constructor’s prototype. 
*/

Event.prototype.cancelEvent = function() {
    return 'Event Cancelled'
}

function Concert(name, location, date, headliner) {
    Event.call(this, name, location, date)
    this.headliner = headliner
    // this.getDetails = function() {
        
    // }
}

Concert.prototype = Object.create(Event.prototype)
Concert.prototype.constructor = Concert

const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
const concert2 = new Concert("Concert Two", "Highlands Park", "2024-08-08", "Dave Notes")
const concert3 = new Concert("Concert Three", "Highlands Park", "2024-08-08", "Dave Notes")
console.log(concert)
console.log(concert2)
console.log(concert3)