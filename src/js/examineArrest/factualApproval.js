$(function () {
    $(".tab0li").click(function(){
    	$(this).addClass("activetwo").siblings().removeClass("activetwo");
    	$(this).children(".circle").addClass("activethree");
    	$(this).siblings().children(".circle").removeClass("activethree")
    })
});
