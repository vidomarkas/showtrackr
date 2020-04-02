$(document).ready(function() {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "60px",
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
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

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

tab1.addEventListener("click", () => {
  tab1.classList.add("interfaces-tab", "interfaces-tab--active");
  tab2.classList.remove("interfaces-tab--active");
  tab3.classList.remove("interfaces-tab--active");
  console.log("tab1");
});
tab2.addEventListener("click", () => {
  tab2.classList.add("interfaces-tab", "interfaces-tab--active");
  tab1.classList.remove("interfaces-tab--active");
  tab3.classList.remove("interfaces-tab--active");
  console.log("tab2");
});
tab3.addEventListener("click", () => {
  tab3.classList.add("interfaces-tab", "interfaces-tab--active");
  tab1.classList.remove("interfaces-tab--active");
  tab2.classList.remove("interfaces-tab--active");
  console.log("tab3");
});

AOS.init();
