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
    //视图切换
    switchImgTxt($("#imgTxtSelect"),$("#imgViewContainer"));
    rightOperate(".txt-view");
    
    //右键操作
    $("body").on("click",".right-operate li",function (event) {
        setRightOperateClick($(this));


    });
    function rightOperate(selecter) {
        $(document).one("click",function (event) {
            if($(event.target).parents('.right-operate').length == 1){
                // setRightOperateClick();
                return false;
            }else{
                $(".right-operate ").hide();
            }
        });
        $("body").on("contextmenu",".txt-view",function (event) {
            event.stopPropagation();
            var txt = window.getSelection?window.getSelection():document.selection.createRange().text;
            if(event.button == 2 && txt!= ""){
                //判断元素是否存在
                if($(".right-operate").length == 0 ){
                    //创建
                    $("body").append($('<ul class="list-group right-operate">\n' +
                        '                                <li class="list-group-item">加入到摘录</li>\n' +
                        '                                <li class="list-group-item">添加批注</li>\n' +
                        '                                <li class="list-group-item">瑕疵证据</li>\n' +
                        '                                <li class="list-group-item">疑问点</li>\n' +
                        '                                <li class="list-group-item">矛盾点</li>\n' +
                        '                                <li class="list-group-item">标注要素</li>\n' +
                        '                                <li class="list-group-item">加入到文书</li>\n' +
                        '                            </ul>'));
                }else if($(".right-operate").is(":hidden")){
                    //显示
                    $(".right-operate").show();
                }

                //获取鼠标抬起时候的坐标
                console.log(event);
                var clientX = event.clientX + 10;
                var clientY = event.clientY + 10;
                $(".right-operate").css({
                    "top":clientY,
                    "left":clientX,
                });


            }
            //阻止浏览器默认的右键事件
            return false;
        });
    }
    function setRightOperateClick($dom) {
        //获取文字信息
        var text = $dom.html();
        alert(text);
        $(".right-operate ").hide();

    }


});
