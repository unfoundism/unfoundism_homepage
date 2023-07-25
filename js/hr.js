$(() => {
  // emailJS 관련
  $("input[name=submit]").click(function () {
    var $name = $("input[name=name]"),
      $email = $("input[name=email]"),
      $phone = $("input[name=phone]"),
      $message = $("textarea[name=message]"),
      $projectType = $("input[name=projectType]");
    if ($name.val() == 0 || null || undefined) {
      $name.prev().addClass("label-top");
    } else if ($email.val() == 0 || null || undefined) {
      $email.prev().addClass("label-top");
    } else if ($phone.val() == 0 || null || undefined) {
      $phone.prev().addClass("label-top");
    } else if ($message.val() == 0 || null || undefined) {
      $message.prev().addClass("label-top");
    } else if ($projectType.val() == 0 || null || undefined) {
      $projectType.prev().addClass("label-top");
    } else {
      var templateParams = {
        //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
        name: $name.val(),
        phone: $phone.val(),
        email: $email.val(),
        message: $message.val(),
        projectType: $projectType.val(),
      };
      emailjs
        .send("service_98iqrf4", "template_hfyntdl", templateParams)
        //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
        .then(
          function (response) {
            $(".section5").css("display", "none");
            $(".submited-popup").css("display", "block");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  });

  // 확인 버튼 누르면 팝업 창 닫기
  $("#confirm").click(function () {
    $(this).parent().css("display", "none");
  });
});
