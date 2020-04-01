$(document).ready(function() {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "60px",
    variableWidth: true,
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});

console.log("hello");
