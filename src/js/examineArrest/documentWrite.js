$(function () {
    //初始化流程进度条
    var $step = $("#step");
    $step.step({
        index: 0,
        time: 500,
        title: ["案件受理", "证据审查", "事实审定", "证据充分性判断", "量刑计算","文书编写","案件监督"]
    });
    $step.toStep(5);//调到第六步

    showNext();


    //初始化编辑器
    var E = window.wangEditor
    var editor2 = new E('.right-written')
    editor2.create();
    editor2.txt.html('<h2 class="text-center">用 JS 设置的内容</h2>');
    setHeight();
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

    function setHeight() {
        var height = parseInt($(".wrapper").css('min-height')) - 62 -55 -70;
        $(".label-container").css("height",height-170);
        $(".w-e-text-container").css("height",height-170-32)
    }
});