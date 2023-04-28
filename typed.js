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
