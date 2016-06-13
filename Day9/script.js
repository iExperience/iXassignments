$(document).on('mousemove', function(e){
    $('#box').css({
       left:  e.pageX,
       top:   e.pageY
    });
    $("body").keyup(function(e) {
    	console.log("key", e);
    	if(e.keyCode === 71) {
    		console.log("hit");
    		$(".text").css("color", "green");
    	}
    });

    var count = 0;
    $("body").click(function() {
        count++;
        $("#count").text(count)
    })
});