$(document).on('scroll', function() {	
	/* skill bar animation based off 'data-percentage' values */
    var top = $(this).scrollTop();    
    if(top > 1400) {
        $(".bar div").each(function(key, bar) {
           var percentage = $(this).parent().data('percentage');
            $(this).animate({
               "width" : percentage + "%" 
            }, 1500);
            if(key >= 6) {
                $(document).off('scroll');
            }
        });
    }
    
});