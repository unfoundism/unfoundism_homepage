var excuted = false;

$(window).scroll(function () {
  var sct = $(this).scrollTop(); // 현재 스크롤된 높이
  var section2OST = parseInt($(".section2").offset().top) - 100;
  var $section2 = $(".section2");
  // console.log(sct, section2OST);
  if (sct >= section2OST && !excuted) {
    setTimeout(() => {
      $section2.find("h1").addClass("active");
    }, 300);
    setTimeout(() => {
      $section2.find(".step1").addClass("animate__fadeIn");
      $section2.find(".step1").css({
        display: "block",
        opacity: 1,
      });
      $section2.find(".step-button").css({
        display: "flex",
        opacity: 1,
      });
    }, 2500);
    excuted = true;
  }
});

$(() => {
  var $section2 = $(".section2");
  // emailJS 관련
  $("input[name=submit]").click(function () {
    var step5 = $section2.find(".step5 input[type=text]");
    var isChecked = $("#sub-checkbox--personal").is(":checked");
    result = true;
    for (i = 0; i < 4; i++) {
      if (step5.eq(i).val() == 0) {
        result = false;
      }
    }
    if (result != true) {
      $section2.find(`.step5 .alert`).eq(0).addClass("alertshow");
    } else if (isChecked != true) {
      $section2.find(`.step5 .alert`).eq(1).addClass("alertshow");
    } else if (result) {
      $section2.css("display", "none");
      $(".pop-up").css("display", "block");
      var templateParams = {
        //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
        projectType: $("input[name=projectType]").val(),
        projectName: $("input[name=projectName]").val(),
        projectPurpose: $("input[name=projectPurpose]").val(),
        projectBudget: $("select[name=projectBudget]").val(),
        projectDate: $("select[name=projectDate]").val(),
        company: $("input[name=company]").val(),
        name: $("input[name=name]").val(),
        email: $("input[name=email]").val(),
        phone: $("input[name=phone]").val(),
      };
      emailjs
        .send("service_98iqrf4", "template_45j26g5", templateParams)
        //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  });

  $(".input-group > input").click(function () {
    $(this).attr("placeholder", "");
    $(this).prev().addClass("active");
  });

  // step 관련
  var stepLength = $(".step").length;
  var nowStep = 1;
  $(".step-now").text(`${nowStep} / ${stepLength}`);
  // next 버튼 클릭이벤트
  $("button.next").click(function () {
    switch (nowStep) {
      case 1:
        if (
          $section2.find(`.step${nowStep} input[type=radio]`).is(":checked")
        ) {
          $section2.find(`.step${nowStep} .alert`).removeClass("alertshow");
          $section2.find(`.step${nowStep}`).css({
            display: "none",
            opacity: 0,
          });
          nowStep += 1;
          $(".step-now").text(`${nowStep} / ${stepLength}`);
          $section2.find(`.step${nowStep}`).css({
            display: "block",
            opacity: 1,
          });
          break;
        } else {
          $section2.find(`.step${nowStep} .alert`).addClass("alertshow");
          break;
        }
      case 2:
        if ($("input[name=projectName]").val() != 0) {
          $section2.find(`.step${nowStep} .alert`).removeClass("alertshow");
          $section2.find(`.step${nowStep}`).css({
            display: "none",
            opacity: 0,
          });
          nowStep += 1;
          $(".step-now").text(`${nowStep} / ${stepLength}`);
          $section2.find(`.step${nowStep}`).css({
            display: "block",
            opacity: 1,
          });
          break;
        } else {
          $section2.find(`.step${nowStep} .alert`).addClass("alertshow");
          break;
        }
      case 3:
        if (
          $section2.find(`.step${nowStep} input[type=radio]`).is(":checked")
        ) {
          $section2.find(`.step${nowStep} .alert`).removeClass("alertshow");
          $section2.find(`.step${nowStep}`).css({
            display: "none",
            opacity: 0,
          });
          nowStep += 1;
          $(".step-now").text(`${nowStep} / ${stepLength}`);
          $section2.find(`.step${nowStep}`).css({
            display: "block",
            opacity: 1,
          });
          break;
        } else {
          $section2.find(`.step${nowStep} .alert`).addClass("alertshow");
          break;
        }
      case 4:
        if ($("select[name=projectBudget]").val() == null) {
          $section2.find(`.step${nowStep} .alert`).eq(0).addClass("alertshow");
          break;
        } else if ($("select[name=projectDate]").val() == null) {
          $section2.find(`.step${nowStep} .alert`).eq(1).addClass("alertshow");
          break;
        } else {
          $section2
            .find(`.step${nowStep} .alert`)
            .eq(0)
            .removeClass("alertshow");
          $section2
            .find(`.step${nowStep} .alert`)
            .eq(1)
            .removeClass("alertshow");
          $section2.find(`.step${nowStep}`).css({
            display: "none",
            opacity: 0,
          });
          nowStep += 1;
          $(".step-now").text(`${nowStep} / ${stepLength}`);
          $section2.find(`.step${nowStep}`).css({
            display: "block",
            opacity: 1,
          });
          break;
        }
    }
  });
  // prev 버튼 클릭이벤트
  $("button.prev").click(function () {
    switch (nowStep) {
      case 2:
        $section2.find(`.step${nowStep}`).css({
          display: "none",
          opacity: 0,
        });
        nowStep -= 1;
        $(".step-now").text(`${nowStep} / ${stepLength}`);
        $section2.find(`.step${nowStep}`).css({
          display: "block",
          opacity: 1,
        });
        break;
      case 3:
        $section2.find(`.step${nowStep}`).css({
          display: "none",
          opacity: 0,
        });
        nowStep -= 1;
        $(".step-now").text(`${nowStep} / ${stepLength}`);
        $section2.find(`.step${nowStep}`).css({
          display: "block",
          opacity: 1,
        });
        break;
      case 4:
        $section2.find(`.step${nowStep}`).css({
          display: "none",
          opacity: 0,
        });
        nowStep -= 1;
        $(".step-now").text(`${nowStep} / ${stepLength}`);
        $section2.find(`.step${nowStep}`).css({
          display: "block",
          opacity: 1,
        });
        break;
      case 5:
        $section2.find(`.step${nowStep}`).css({
          display: "none",
          opacity: 0,
        });
        nowStep -= 1;
        $(".step-now").text(`${nowStep} / ${stepLength}`);
        $section2.find(`.step${nowStep}`).css({
          display: "block",
          opacity: 1,
        });
        break;
    }
  });
});

// select menu 관련
$(function () {
  $("#projectBudget").selectmenu();

  $("#projectDate").selectmenu();

  $("#number").selectmenu().selectmenu("menuWidget").addClass("overflow");

  $("#salutation").selectmenu();
});

// 전문보기 관련
$(() => {
  var $agrBtn = $(".button__sub-checkbox");
  var $agrCls = $(".agree_popup_close");
  var $agrPop = $(".agree_popuplayer");
  $agrBtn.click(function (e) {
    e.preventDefault();
    $agrPop.css("display", "block");
  });
  $agrCls.click((e) => {
    e.preventDefault();
    $agrPop.css("display", "none");
  });
});

function displaynone() {
  $(".pop-up").css("display", "none");
}
