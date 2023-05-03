
const Colors = [];
var message = "";
var eventday = "";
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

// Get today's date
const today = new Date();

// Loop through the friends array
for (let i = 0; i < friends.length; i++) {
  const friend = friends[i];
  const birthday = friend.birthday;

  // Check if the friend's birthday is today
  if (birthday.getDate() === today.getDate() &&
    birthday.getMonth() === today.getMonth()) {
    Names.push(friend.name);
    message = "Happy Birthday";
    eventday = "yes";
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
  strings: [message],
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

if(eventday)
{
var end = Date.now() + (10 * 600);

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
}

if(eventday)
{// Define an array of messages
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
}
else
{
  var messages = [
    "In the end, everything will be okay. If it's not okay, it's not yet the end. - John Lennon",
    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
    "Be the change you wish to see in the world. - Mahatma Gandhi",
    "Life is not about waiting for the storm to pass, it's about learning to dance in the rain. - Vivian Greene"
  ];
}
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



particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: hexColors[0] },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: hexColors[1],
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
