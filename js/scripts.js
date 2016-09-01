$(document).on("scroll", function() {	
	/* skill bar animation based off 'data-percentage' values */
	
	/* gets the position of the scoll bar */
    var top = $(this).scrollTop();
	
	/* gets the position of the skills element */
	var skillTop = $("#skills").offset().top - 200;
	
	/* 
		if the scroll position is greater than the skills element
		then start skill bar animation
	*/
    if(top > skillTop) {
        $(".bar div").each(function(key, bar) {
			/* sets the percentage from the html data attr */
			var percentage = $(this).parent().data("percentage");
			/* starts animation based off of data attr percentage */
            $(this).animate({
               "width" : percentage + "%" 
            }, 1500);
			
			/* 
				stops scroll function after all animations have been completed
			*/
            if(key >= 6) {
                $(document).off("scroll");
            }
        });
    }
    
});
	