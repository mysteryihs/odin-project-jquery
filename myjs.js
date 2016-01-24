$(document).ready(function() {
	for (i=0; i<225; i++) {
		$("#container").append("<div class= 'grid'></div>");
    }
  $(".grid").hover(function(){
  	$(this).css("background-color","blue");
  });
  $("#newgrid").click(function() {
  	var grids = prompt("How many grids by grids do you want?");
    if (grids > 64) {
    	alert("Please pick 64 or lower");
    }
    else {
    	$("#container").empty();
    	$("#container").css("width", ((grids * 25) + grids * 2) + "px")
    	for (i=0; i<grids * grids; i++) {
			$("#container").append("<div class= 'grid'></div>");
    	};
    };
    $(".grid").hover(function(){
  		$(this).css("background-color","blue");
  });
  });
});