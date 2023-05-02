var hour = new Date().getHours();
var message = "";

if (hour >= 5 && hour < 12) {
  message = "Good morning!";
} else if (hour >= 12 && hour < 18) {
  message = "Good afternoon!";
} else if (hour >= 18 && hour < 22) {
  message = "Good evening!";
} else {
  message = "Good night!";
}

var typed = new Typed('#typed-text', {
  strings: [message+" Boss"],
  typeSpeed: 100,
  loop: true,
  showCursor: false
});


    // generate a random RGB color string
    function getRandomColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }