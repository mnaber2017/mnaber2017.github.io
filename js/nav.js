$(document).ready(function () {
	
	$("#sidebar >  #myNav > li > a").click(function () {
		if($(this).attr("class") != "active")
			{
	$("#sidebar > #myNav > li > ul").slideUp(500);
	$(this).next().slideToggle(500);	
	$("#sidebar > #myNav > li > a").removeClass("active");
	$(this).addClass("link active");
/*	 $.cookie("select_cat", $(this).attr("class"));		*/	 
	} 
		else {
			 $("#sidebar > #myNav> li > a").removeClass("active");
		     $("#sidebar > #myNav > li > ul").slideUp(500);
		     /*  $.cookie('select_cat', '');*/
		}	
		});
	
	 $('#sidebar > #myNav> li > ul > li> a').click(function(){
		if($(this).attr("class") != "active_sub")
		    {  $('#sidebar > #myNav> li > ul > li> a').removeClass("active_sub");
				$(this).addClass("active_sub");
		       
			}
		});
    		/*if ($.cookie("select_cat") != '') {
    			$("#sidebar> #myNav > ul > li>a" +

    				$.cookie("select_cat")).addClass("link active").next().show();
    		}*/
	
});