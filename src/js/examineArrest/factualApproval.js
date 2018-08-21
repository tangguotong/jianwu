$(function () {
    showNext();

    var $step = $("#step");
    $step.step({
        index: 0,
        time: 500,
        title: ["案件受理", "证据审查", "事实认定", "证据充分性判断", "量刑计算","逮捕必要性评估","案案件监督"]
    });

    $("input").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });



    // $(".tab0li").click(function(){
    // 	$(this).addClass("activetwo").siblings().removeClass("activetwo");
    // 	$(this).children(".circle").addClass("activethree");
    // 	$(this).siblings().children(".circle").removeClass("activethree")
    // })
    
    $(".jzevidence .textareaw").focus(function(){
           $(this).parents().find(".contrast").fadeIn();
      });
    $(".jzevidence .textareaw").blur(function(){
           $(this).parents().find(".contrast").fadeOut();
    });
    
     $(".ltevidence .textareaws").focus(function(){
           $(this).siblings().find(".contrasts").fadeIn();
      });
    $(".ltevidence .textareaws").blur(function(){
           $(this).parents().find(".contrasts").fadeOut();
     });
});