$(document).ready(function() {

  function writeToLog(text, type) {
    $("#log").html("<p class=" + type + ">" + text + "</p>")
  }

  $("#button").click(function() {
    var  variable = $("#input").val();
    
    if (!variable) {
      writeToLog("Please enter fields", "alert")
    }
    else {
      writeToLog("Hello, " + variable, "success")
    }
  });
});
