$(function () {
    $("#enterpriseGroup").click(function () {
        if ($(this).is(":checked")) {
            $("#enterpriseResult").hide();
            $("#localUnitResult").hide();
            $("#legalUnitResult").hide();
            $("#reportingUnitResult").hide();
            $("#vatResult").hide();
            $("#payeResult").hide();
            $("#companyNumberResult").hide();
        } else {
          $("#enterpriseResult").show();
          $("#localUnitResult").show();
          $("#legalUnitResult").show();
          $("#reportingUnitResult").show();
          $("#vatResult").show();
          $("#payeResult").show();
          $("#companyNumberResult").show();
        }
    });
});
