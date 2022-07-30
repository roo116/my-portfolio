
$(document).ready(function () {
  $("#about-me").hide();
  $(".work-section").hide();
});

$("#about").click(function () {
  $("#about-me").toggle("slow");
});



$("#work").click(function () {
  $("#about-me").hide();
  $(".work-section").toggle("fast");
});
