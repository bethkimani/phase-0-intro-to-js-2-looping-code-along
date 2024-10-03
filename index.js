// The gifts array
const gifts = ["teddy bear", "drone", "doll"];

// Function to wrap gifts with a message
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts); // Calling the function to wrap gifts

// Function to create thank you cards
function writeCards(names, event) {
  let thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    // Constructing the message using string interpolation
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return thankYouMessages; // Returning the array of thank you messages
}

// Example usage of writeCards
const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(messages); // Output the thank you messages
// Define the countDown function
function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrement the number
    }
  }
  
  // Example usage of countDown
  countDown(10); // This will log 10, 9, 8, ..., 0
  