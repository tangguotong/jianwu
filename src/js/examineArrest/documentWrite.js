$(function () {
    //初始化流程进度条
    var $step = $("#step");
    $step.step({
        index: 0,
        time: 500,
        title: ["案件受理", "证据审查", "事实认定", "证据充分性判断", "量刑计算","逮捕必要性评估","案案件监督"]
    });

    showNext();


    //电子卷宗的点击事件
    $('#eleFile').on('click',function () {
        //计算电子卷宗的高和top值
        var top = ($(window).height()-$(window).height()*0.8)/2 +35;
        var height = $(window).height()*0.8;
        $('.ele-pop-box').css({
            "height":$(window).height()*0.8,
            "top":top
        });
        $('.ele-pop-box').fadeIn();

        //退出按钮点击事件
        $('.exit-img').on('click',function () {
            $('.ele-pop-box').fadeOut();
        });
    });
});