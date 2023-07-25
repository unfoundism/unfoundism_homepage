$(() => {
  $(".hamburger-button").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  var $nav = $("nav");
  // 스크롤 이벤트
  $(window).scroll(function () {
    var sct = $(this).scrollTop();
    if (sct > 100) {
      $nav.addClass("sticky");
    } else {
      $nav.removeClass("sticky");
    }
  });
});
