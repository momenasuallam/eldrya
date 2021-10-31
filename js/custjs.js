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

// $(".legtn1").change(function () {
//   var v1 = 0;
//   v1++;
//   var valueinput1 = $(".chargesval1").val();
//   alert(valueinput1);
//   var newvalin = valueinput1 + v1;
//   $(".chargesval1").val(newvalin);

// });
// $(document).ready(function () {
//   var total= 0;
//   $(".legtn1").on("change", function () {
//     // Print entered value in a div box parseInt($(this).val()) + 1
//    total = $(".chargesval1").val(parseInt($(this).val()) + 2);
//      $(".totalamount").val(total + 1);
//   });
//    $(".legtn2").on("change", function () {
//      // Print entered value in a div box parseInt($(this).val()) + 1
//      $(".chargesval2").val(parseInt($(this).val()) + 1);
//    });
//     $(".legtn3").on("change", function () {
//       // Print entered value in a div box parseInt($(this).val()) + 1
//       $(".chargesval3").val(parseInt($(this).val()) + 1);
//     });
//      $(".legtn4").on("change", function () {
//        // Print entered value in a div box parseInt($(this).val()) + 1
//        $(".chargesval4").val(parseInt($(this).val()) + 1);
//      });

      

// });
