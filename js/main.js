$(document).ready(function() {
  $(".slider").slick({
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    variableWidth: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
$(document).ready(function() {
  $(".slider-reviews").slick({
    prevArrow: ".review-arrow-prev",
    nextArrow: ".review-arrow-next",
    variableWidth: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "250px",
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "150px"
        }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });
});
