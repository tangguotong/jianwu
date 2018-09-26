$(function () {
    showNext();//监听屏幕滚动.显示固定头部的下一步
    setSecondScreenHeight();
    setleftFileShowHide();//左侧文件夹图标的切换/
    var $step = $("#step");
    $step.step({
        index: 0,
        time: 500,
        title: ["案件受理", "证据审查", "事实认定", "证据充分性判断", "量刑计算","逮捕必要性评估","案案件监督"]
    });
    //罪行下拉框选择
    $('.multiple-select').select2({"theme":"krajee","width":"100%","placeholder":"请选择罪行","language":"zh-CN"})

    //计算第二屏高度
    function setSecondScreenHeight() {
        var height = parseInt($(".wrapper").css('min-height')) - 62 -55 -70;
        $('.second-screen').css('height',height);
        $(".label-container").css("height",height - 150);
    }
    //电子卷宗按钮点击事件
    $('#eleFile').on('click',function () {
        showEleFilePop();
    });


});
