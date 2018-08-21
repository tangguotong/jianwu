$(function () {
    $(".tab0li").click(function(){
    	$(this).addClass("activetwo").siblings().removeClass("activetwo");
    	$(this).children(".circle").addClass("activethree");
    	$(this).siblings().children(".circle").removeClass("activethree")
    })
    
    $(".jzevidence .textareaw").focus(function(){
           $(this).parents().find(".contrast").fadeIn();
      });
    $(".jzevidence .textareaw").blur(function(){
           $(this).parents().find(".contrast").fadeOut();
     });
});