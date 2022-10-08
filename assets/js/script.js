
$(document).ready(function () {
  $("#about-section").hide();
  $("#projects").hide();
});

$("#about").click(function () {
  $("#projects").hide();
  $("#about-section").toggle("fast");
});

$("#project").click(function () {
  $("#about-section").hide();
  $("#projects").toggle("fast");
});
