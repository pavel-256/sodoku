$(document).ready(() => {
  // the loading animtion
  var counter = 0;

  // Start the changing images
  setInterval(() => {
    if (counter == 9) {
      counter = 0;
    }

    changeImage(counter);
    counter++;
  }, 3000);

  // Set the percentage off
  loading();
});

let changeImage = (counter) => {
  let images = [
    // icons from font awesome
    '<i class="fa fa-fighter-jet"></i>',
    '<i class="fa fa-gamepad"></i>',
    '<i class="fa fa-headphones"></i>',
    '<i class="fa fa-cubes"></i>',
    '<i class="fa fa-paw"></i>',
    '<i class="fa fa-rocket"></i>',
    '<i class="fa fa-ticket"></i>',
    '<i class="fa fa-pie-chart"></i>',
    '<i class="fa fa-codepen"></i>',
  ];

  $(".loader .image").html("" + images[counter] + "");
};

let loading = () => {
  let num = 0;
  // set the numbers
  for (i = 0; i <= 100; i++) {
    setTimeout(function () {
      $(".loader span").html(num + "%");

      if (num == 100) {
        loading();
      }
      num++;
    }, i * 120);
  }
};
// set time out 12 second countdown
let timeOut = () => {
  setTimeout(() => {
    window.location.href = "./board.html";
  }, 12000);
};

timeOut();
