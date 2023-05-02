
const Colors = [];
var message = "";
const Names = [];


// generate a random RGB color string
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// set random color for each stop element
var stop1 = document.getElementById("stop1");
var stop2 = document.getElementById("stop2");
stop1.style.stopColor = getRandomColor();
stop2.style.stopColor = getRandomColor();

var divCon = document.getElementById("name");
divCon.style.color = stop1.style.stopColor;
Colors.push(stop1.style.stopColor);
Colors.push(stop2.style.stopColor);


// Define the rgbToHex() function as before
function rgbToHex(rgbString) {
  var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  delete(parts[0]);
  for (var i = 1; i <= 3; ++i) {
    parts[i] = parseInt(parts[i]).toString(16);
    if (parts[i].length == 1) parts[i] = '0' + parts[i];
  }
  return '#' + parts.join('');
}

// Convert the RGB colors to hexadecimal using map()
var hexColors = Colors.map(rgbToHex);

// Use the friends array defined in friends.js
//console.log(friends);
//console.log(randmsg);



// Get today's date
const today = new Date();

// Loop through the friends array
for (let i = 0; i < friends.length; i++) {
  const friend = friends[i];
  const birthday = friend.birthday;

  // Check if the friend's birthday is today
  if (birthday.getDate() === today.getDate() &&
    birthday.getMonth() === today.getMonth()) {
    // Display a birthday message with the friend's name
    //console.log(`Happy birthday, ${friend.name}!`);
    Names.push(friend.name);
    message = "Happy Birthday";
  }
}

var hour = new Date().getHours();

if (!message) {
  if (hour >= 5 && hour < 12) {
    message = "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    message = "Good afternoon!";
  } else if (hour >= 18 && hour < 22) {
    message = "Good evening!";
  } else {
    message = "Good night!";
  }
}
var typed = new Typed('#typed-text', {
  strings: [message + "-"],
  typeSpeed: 100,
  loop: false,
  showCursor: false,
  onComplete: function () {
    // Call the second typing function here
    var typedName = new Typed('#name', {
      strings: Names,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: false
    });
    // Call the backspace method after a delay of 2 seconds
    setTimeout(function () {
      typed.backspace(5); // Delete 5 characters from the end of the current string
    }, 2000);
  }
});

var end = Date.now() + (10 * 600);

// go Buckeyes!
//var colors = [stop1.style.stopColor, stop2.style.stopColor];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: hexColors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: hexColors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());

// Define an array of messages
var messages = [
  "Wishing you a very happy birthday filled with all the things you love the most. Have a great one!",
  "Another year older, another year wiser. Happy birthday and cheers to all the great things to come!",
  "May your birthday be as special as you are and may all your dreams come true. Enjoy your day to the fullest!",
  "Sending you warm wishes on your birthday and hoping that this year brings you everything you've been hoping for.",
  "Happy birthday to an amazing friend! May your day be filled with laughter, love, and all the people who make you happy",
  "Wishing you a day filled with happiness, love, and all the things that bring a smile to your face. Happy birthday!",
  "Here's to another year of adventures, laughs, and making memories together. Happy birthday to an awesome person!",
  "You're not getting older, you're getting better. Happy birthday and here's to a year of growth, success, and happiness.",
  "I hope your birthday is filled with sunshine, rainbows, and all the good things that life has to offer. Enjoy your special day!"
];

// Generate a random index
var randomIndex = Math.floor(Math.random() * messages.length);

// Get the message at the random index
var message = messages[randomIndex];

// Call the second typing function here
var typedName = new Typed('#rand-msg', {
  strings: [message],
  typeSpeed: 80,
  loop: false,
  showCursor: false
});
// Display the message
//console.log(message);