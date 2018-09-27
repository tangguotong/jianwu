$(function () {
    showNext();
    setImgContainerSize();
    imgNextPrev();//图片轮播
    //全文快照
    showFullTxtFast();

    var $step = $("#step");
    $step.step({
        index: 0,
        time: 500,
        title: ["案件受理", "证据审查", "事实认定", "证据充分性判断", "量刑计算","逮捕必要性评估","案案件监督"]
    });

    //罪行下拉框选择
    $('.multiple-select').select2({"theme":"krajee","width":"100%","placeholder":"请选择罪行","language":"zh-CN"});
    //图片视图下拉框
    switchImgTxt($(".img-txt-view-select"),$("#imgTxtContainer"));

    

    $("#closeU").on("click",function () {
        $(".hidden-modal-box").fadeOut();
    });
    $(".evi-box li").on("click",function () {
        if($(this).hasClass("active")){
            $(this).removeClass("active")
        }else{
            $(this).addClass("active")
        }
    });

    var examining = "<span class='icon-box'><i class='icon iconfont icon-yinzhang1 fc-green'></i>正在审查</span>";//正在审查
    var examined = "<span class='icon-box'><i class='icon iconfont icon-time-fill fc-orange'></i>已审查</span>";//已审查
    var noexamine = "<span class='icon-box'><i class='icon iconfont icon-hulve fc-gray-deep'></i>未审查</span>";//未审查
    var data = [
        {
            field0:"王晓斌",
            field1:examining,
            field2:'--',
            field3:noexamine,
        },
        {
            field0:"王晓斌1",
            field1:examined,
            field2:noexamine,
            field3:noexamine,
        }
    ];
    setTrueTable(data);//事实审定总览函数

    


    //计算图片容器的大小
    function setImgContainerSize() {
        var height = $(window).height() - 62 -55  -52 - 72;
        $('.img-page-box').css('height', height);
        $(".text-area-container").css('height', height - 75);

    }
    //全文快照
    function showFullTxtFast() {
        $(".text-area-footer .icon-box").tooltip({
            "html":true,
            "placement":"right",
            "title":' <div class="panel panel-full-text mb0">\n' +
            '                                        <div class="panel-heading">\n' +
            '                                            <p class="panel-title">全文快照</p>\n' +
            '                                        </div>\n' +
            '                                        <div class="panel-body">\n' +
            '                                            <p class="full-content">\n' +
            '                                                大约是 <span class="fc-orange">2107年12月6日星期一，我刚下班。2017年12月6日晚上，趁x x不注意，拿了放在桌子上的一部白色苹果手机和一对戒</span>\n' +
            '                                            </p>\n' +
            '                                            <p class="text-from">证据要素出自：<a href="#">《犯罪嫌疑人供述》（第一次）</a></p>\n' +
            '                                        </div>\n' +
            '                                    </div>',

        });
    }


});