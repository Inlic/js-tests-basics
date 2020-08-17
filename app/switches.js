// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
    // input: 'Sunday', false
    // output: 1
//Example:
    // input: 'Sunday', true
    // output: 7

/* solution check with for loops and object */

function daysPosition(day, offset=false){
    let position_object = {
        weekday: ["sunday","monday","tuesday","wednesday","thursday","friday"],
        regular: [7,1,2,3,4,5,6],
        off: [1,2,3,4,5,6,7]
    }
    if(position_object.weekday.includes(day.toLowerCase())){
        for(i = 0; i <= position_object.weekday.length; i++){
            if(day.toLowerCase() === position_object.weekday[i] && !offset){
                return position_object.off[i]
            } else if(day.toLowerCase() === position_object.weekday[i] && offset){
                return position_object.regular[i]
            }
        }
    } else {
        return "That's not a day of the week"
    }
}

/*
function daysPosition(day, offset=false){
    switch(offset){
        case true:
            switch(day.toLowerCase()){
                case "sunday":
                    return 7
                case "monday":
                    return 1
                case "tuesday":
                    return 2
                case "wednesday":
                    return 3
                case "thursday":
                    return 4
                case "friday":
                    return 5
                case "saturday":
                    return 6
                default:
                    return "That's not a day of the week"
            } 
        case false:
            switch(day.toLowerCase()){
                case "sunday":
                    return 1
                case "monday":
                    return 2
                case "tuesday":
                    return 3
                case "wednesday":
                    return 4
                case "thursday":
                    return 5
                case "friday":
                    return 6
                case "saturday":
                    return 7
                default:
                    return "That's not a day of the week"
            }
        default:
            return "That's not a day of the week"
    }
}
*/

// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

 function golfScore(score, par) {
    let diff = score - par
    switch(diff){
        case -3:
            return "Ace"
        case -2:
            return "Eagle"
        case -1:
            return "Birdie"
        case 0:
            return "Par"
        case 1:
            return "Bogie"
        case 2:
            return "Double Bogie"
        default:
            return "Ouch"
    }
 }
 

// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
    // output: '-5 Hold'
// Example:
    // output: '2 Bet'

let count = 0

function cardCounter(card) {
    function betOrHold(){
        return (count > 0 ? " Bet":" Hold");
    }
    switch(card){
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
           count += 1
           return count + betOrHold()
        case "7":
        case "8":
        case "9":
            count += 0
            return count + betOrHold()
        case "10":
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1
            return count + betOrHold()
    }
}
