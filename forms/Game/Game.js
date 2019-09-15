// Invitation to play the game
let playerInvite = prompt("Would you like to play The Big Adventure?")
if (playerInvite == "yes") {
  alert("This is your Mission: There are 6 rooms you need to visit: Bed Room, Living Room, Dining Room, Bath Room, Movie Room, and Craft Room. You must visit each of the six rooms at least once to win the game. The program will not stop until you win.")
  alert("In this game you may only move your avatar in Forward, Right, or Left directions. Your avatar may only move one space at a time. To initiate a move you must input the direction which you would like to move e.g. to move forward one space you must input: forward into the prompt")
} else {
  alert("Ending Session...Goodbye!");
}
// Creating an array to house the rooms in the game

let rooms = ["Bed Room", " Living Room", " Dining Room", " Bath Room", " Movie Room", " Craft Room"]

// Tracks how many rooms are left 
// roomsLeft = rooms.length

// Entering first move
let initialMove = prompt("Start now by entering your first move.")
if (initialMove == "forward") {
  alert("You are now in the" + rooms[1])
  rooms.splice(1, 1)
  roomsLeft = rooms.length
  alert(`You have ${roomsLeft} rooms remaining`)
} else if (initialMove == "right") {
  alert("You are now in the" + rooms[5])
  rooms.splice(5, 1)
  roomsLeft = rooms.length
  alert(`You have ${roomsLeft} rooms remaining`)
} else if (initialMove == "left") {
  alert("You are now in the" + rooms[2])
  rooms.splice(2, 1)
  roomsLeft = rooms.length
  alert(`You have ${roomsLeft} rooms remaining`)
} else { 
    alert("Invalid move - out of bounds")
} 