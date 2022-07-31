
$(document).ready(function () {
  $("#about-me").hide();
  $(".work-section").hide();
});

$("#about").click(function () {
  $(".work-section").hide();
  $("#about-me").toggle("fast");
});



$("#work").click(function () {
  $("#about-me").hide();
  $(".work-section").toggle("fast");
});
