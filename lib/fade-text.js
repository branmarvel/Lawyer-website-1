var classes = ["#eCommerce", "#PyME", "#Startups"];

(function displayClass(i) {
  $("#tst span")
    .text(classes[i])
    .fadeIn(1000, function () {
      $(this)
        .delay(600)
        .fadeOut(1000, function () {
          displayClass((i + 1) % classes.length);
        });
    });
})(0);
