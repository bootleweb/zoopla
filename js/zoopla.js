
// toggle the active section 
$("section").click(function(){
	$("section.active p").fadeOut("slow");
	$("section.active").removeClass("active");
	$(this).addClass("active");	
	$("section.active p").fadeIn("slow");
});