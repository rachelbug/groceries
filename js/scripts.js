$(document).ready(function() {

  var reveal = function() {
    $("#response").fadeIn(10000);
  };

  $("form#form").submit(function(event) {

    var groceries = ["item1", "item2", "item3", "item4"];

    var tightList = [];


    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      tightList.push(userInput);
    });

    var superTightList = tightList.map(function(tight1) {
      return tight1.toUpperCase();
    });

    superTightList.sort();

    $("#form").fadeOut(5000, reveal);

    superTightList.forEach(function(list) {
      $("#response").append("<li>" + list + "</li>")
    });





    event.preventDefault();

  });
});
