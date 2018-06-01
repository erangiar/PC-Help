$(".modal").each(function (l) { $(this).on("show.bs.modal", function (l) { var o = $(this).attr("data-easein"); "shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ? $(".modal-dialog").velocity("callout." + o) : "tada" == o ? $(".modal-dialog").velocity("callout." + o) : "flash" == o ? $(".modal-dialog").velocity("callout." + o) : "bounce" == o ? $(".modal-dialog").velocity("callout." + o) : "swing" == o ? $(".modal-dialog").velocity("callout." + o) : $(".modal-dialog").velocity("transition." + o) }) });



$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

$(".inputcontrol").on("click", function() {
    $(".alert").removeClass("in").show();
	$(".alert").delay(200).addClass("in").fadeOut(5000);
});