$(function () {
    $("#showPasswordToggle").click(function () {
        if ($(this).is(":checked")) {
            $("#enterprise").hide();
            $("#local-unit-one").hide();
            $("#ch-unit-one").hide();
            $("#ch-unit-two").hide();
            $("#lu-unit-one").hide();
            $("#lu-unit-two").hide();
            $("#lu-unit-three").hide();
            $("#lu-unit-four").hide();
            $("#lu-unit-five").hide();
            $("#pagination").hide();
        } else {
          $("#enterprise").show();
          $("#local-unit-one").show();
          $("#ch-unit-one").show();
          $("#ch-unit-two").show();
          $("#lu-unit-one").show();
          $("#lu-unit-two").show();
          $("#lu-unit-three").show();
          $("#lu-unit-four").show();
          $("#lu-unit-five").show();
          $("#pagination").show();
        }
    });
});
