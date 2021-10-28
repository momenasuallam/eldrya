$(".changelanguage").click(function () {
  $("body").toggleClass(function () {
    return $(this).is(".rtl, .ltr")
      ? "rtl ltr"
      : "rtl";
  });
   
    if ($(".flagimg").attr("src") === "images/uk.png") {
      $(".flagimg").attr("src", "images/uae-flag.png");
    } else {
      $(".flagimg").attr("src", "images/uk.png");
    }
});

