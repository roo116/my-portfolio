// JQuery dom manipulation

$(document).ready(function () {
  $("#about-section").hide();
  $("#projects").hide();
  $("#contact-section").hide();
  $("#resume-section").hide();
});

$("#about").click(function () {
  $("#resume-section").hide();
  $("#projects").hide();
  $("#contact-section").hide();
  $("#about-section").toggle("fast");
});

$("#project").click(function () {
  $("#about-section").hide();
  $("#contact-section").hide();
  $("#resume-section").hide();
  $("#projects").toggle("fast");
});

$("#contact").click(function () {
  $("#about-section").hide();
  $("#projects").hide();
  $("#resume-section").hide();
  $("#contact-section").toggle("fast");
});

$("#resume").click(function () {
  $("#about-section").hide();
  $("#projects").hide();
  $("#contact-section").hide();
  $("#resume-section").toggle("fast");
});
