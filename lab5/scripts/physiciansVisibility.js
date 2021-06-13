$(document).ready(function () {
    $("#physicians").hide();
    $("#personalInformation").hide();
    $("#request").hide();
    $("#payment").hide();

    $("input[name='btnradio']").click(function () {
        if ($("#btnradio1").is(":checked") || $("#btnradio2").is(":checked") ||$("#btnradio3").is(":checked") ||$("#btnradio4").is(":checked") ||$("#btnradio5").is(":checked") ){
            $("#physicians").show();
        }
    })

    $("input[name='physicians']").click(function () {
        if ($("#jotaro").is(":checked") || $("#joseph").is(":checked") || $("#boa").is(":checked")){
            $("#personalInformation").show();
            $("#payment").show();
        }
    })

    $("button[name='yes']").click(function () {
        $("#checkout").remove();
        $("#request").show();
    })

})