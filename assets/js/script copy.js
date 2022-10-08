
$(document).ready(function () {
  $("#about-section").hide();
  $("#contact-section").hide();
  $("#projects").hide();
});

$("#about").click(function () {
  $("#contact-section").hide();
  $("#projects").hide();
  $("#about-section").toggle("fast");
});

$("#contact").click(function () {
  $("#projects").hide();
  $("#about-section").hide();
  $("#contact-section").toggle("fast");
});

$("#projects").click(function () {
  $("#about-section").hide();
  $("#contact-section").hide();
  $("#projects").toggle("fast");
});
