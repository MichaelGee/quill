//Hide the span
$ ("span").hide();

$("#input").hover(
    function() {
    $("span").fadeIn();
  }
);
 
$("#input").mouseleave(
    function() {
    $("span").fadeOut();
  }
);