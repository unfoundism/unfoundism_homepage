$(() => {
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    afterLoad: (anchorLink, index) => {
      // console.log(`this section is ${index}`);
      var section2 = $(".section2");
      var $nav = $("nav");

      if (index >= 2) {
        $nav.addClass("sticky");
      } else {
        $nav.removeClass("sticky");
      }

      if (index == 2 && !section2.hasClass("actived")) {
        $(".ani-number").animateNumber(
          { number: 100 },
          {
            easing: "easeInOutCubic",
            duration: 1000,
          }
        );
        section2.addClass("actived");
      }

      var $animate = $(".section3 .animate__animated");
      if (index == 3 && !$animate.hasClass("actived")) {
        $animate.each(function () {
          $(this).addClass("animate__fadeInLeft").addClass("actived");
        });
      }

      var section4 = $(".section4 .wrapper");
      if (index == 4) {
        setTimeout(() => {
          section4.find(".step1").addClass("animate__fadeIn");
        }, 100);
        setTimeout(() => {
          section4.find(".step2").addClass("animate__fadeIn");
        }, 500);
        setTimeout(() => {
          section4.find(".step3").addClass("animate__fadeIn");
        }, 1100);
      }

      var section5 = $(".section5");
      if (index == 5) {
        section5.find(".contents").addClass("animate__fadeInUp");
        setTimeout(function () {
          section5.find(".next-button").addClass("animate__fadeIn");
        }, 1500);
      }
    },
  });
});
