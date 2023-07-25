$(() => {
  var $nav = $("nav");
  var executed = false; // 반복재생 안되도록
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    afterLoad: (anchorLink, index) => {
      if (index >= 2) {
        $nav.addClass("sticky");
      } else {
        $nav.removeClass("sticky");
      }

      var $animate = $(".section3 .animate__animated");

      if (index == 2) {
        $(".section2").find(".text").addClass("animate__fadeInUp");
      }

      if (index == 3 && executed != true) {
        executed = true;
        var dataSets = "animate__fadeIn";
        $animate.removeClass(dataSets);
        setTimeout(function () {
          $animate.eq(0).addClass(dataSets);
        }, 100);
        setTimeout(function () {
          $animate.eq(1).addClass(dataSets);
        }, 600);
        setTimeout(function () {
          $animate.eq(2).addClass(dataSets);
        }, 1100);
        setTimeout(function () {
          $animate.eq(3).addClass(dataSets);
        }, 1600);
        setTimeout(function () {
          $animate.eq(4).addClass(dataSets);
        }, 2100);
      }

      var mobile = window.matchMedia("screen and (max-width: 768px)");
      var section4Steps = $(".section4");

      if (index == 4) {
        if (mobile.matches) {
          setTimeout(function () {
            section4Steps.find(".step1").addClass("show");
          }, 100);
          setTimeout(function () {
            section4Steps.find(".step1").addClass("hide");
          }, 2100);
          setTimeout(function () {
            section4Steps.find(".step2").addClass("show");
          }, 2200);
          setTimeout(function () {
            section4Steps.find(".step2").addClass("hide");
          }, 4200);
          setTimeout(function () {
            section4Steps.find(".step3").addClass("show");
          }, 4300);
        } else {
          setTimeout(() => {
            section4Steps.find(".step1").addClass("animate__fadeInRight");
          }, 100);
          setTimeout(() => {
            section4Steps.find(".step2").addClass("animate__fadeInRight");
          }, 500);
          setTimeout(() => {
            section4Steps.find(".step3").addClass("animate__fadeInRight");
          }, 1100);
        }
      } else {
        if (mobile.matches) {
          section4Steps.find(".step").removeClass("show hide");
        }
      }

      if (index == 5) {
        $(".section5 .img").addClass("animate__fadeInUp");
      }
      if (index == 6) {
        $(".section6 .img").addClass("animate__fadeInUp");
      }
      if (index == 7) {
        $(".section7 .img").addClass("animate__fadeInUp");
      }
      if (index == 8) {
        var section8 = $(".section8");
        section8.find(".img").addClass("animate__fadeInUp");
        setTimeout(function () {
          section8.find(".next-button").addClass("animate__fadeIn");
        }, 1500);
      }
    },
  }); //fullpage
});
