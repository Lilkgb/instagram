$(document).ready(function() {
  $("#add").submit(function(event) {
    event.preventDefault();
    var comment = $("#add1").val();
    $(".comment").append("<p class='inputText'>"+"<b>"+"User"+"</b>" + " " + comment + "</p>");
  });
});
