$(function () {
    //初始化流程进度条
    var $step = $("#step");
    $step.step({
        index: 0,
        time: 500,
        title: ["案件受理", "证据审查", "事实审定", "证据充分性判断", "量刑计算","文书编写","案件监督"]
    });
    $step.toStep(5);//调到第六步
    showRightNav();

    showNext();


    //初始化编辑器
    var E = window.wangEditor
    var editor2 = new E('.right-written')
    editor2.create();
    editor2.txt.html('<h2 class="text-center">用 JS 设置的内容</h2>' +
        '<h2 class="text-center">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>' +
        '<h2 class="text-center mb20">用 JS 设置的内容</h2>');
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
        // var height = parseInt($(".wrapper").css('min-height')) - 62 -55 -70;
        $(".w-e-text-container").css("height","auto")
        $(".w-e-text-container").css("z-index","3")
        $(".w-e-text").css("overflow","hidden")
    }


    createCaseTable(false,$("#table1"));
    createCaseTable(false,$("#table2"));
    function createCaseTable(data,$table) {
        if(!data){
            data = [];
            for(var i=0;i<60;i++){
                data.push({
                    content:'<div class="cause-list-item">\n' +
                    '        <i class="icon iconfont icon-wenben mr20"></i>\n' +
                    '        <div class="cause-list-detail  ml20 clearfix">\n' +
                    '            <div class="clearfix">\n' +
                    '                <h5 class="pull-left">葛某某诉康某等盗窃罪犯要求</h5>\n' +
                    '                <div class="pull-right matching">\n' +
                    '                    匹配率\n' +
                    '                    <span class="num-big">26%</span>\n' +
                    '                    <span class="loading-orange"></span>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '            <p class="fc-gray-light fs12">\n' +
                    '                <span>人民法院案例选案例</span>\n' +
                    '                <span>2014.09.13</span>\n' +
                    '                <span>二审</span>\n' +
                    '            </p>\n' +
                    '            <p class="btn-box mb0">\n' +
                    '                <button class="btn btn-orange-hollow btn-mini">从犯</button>\n' +
                    '                <button class="btn btn-orange-hollow btn-mini">自首</button>\n' +
                    '                <button class="btn btn-orange-hollow btn-mini">多次盗窃</button>\n' +
                    '            </p>\n' +
                    '        </div>\n' +
                    '    </div>'

                })
            }
        }

        $table.bootstrapTable({
            columns:[
                {
                    field: 'content',
                }
            ],
            showColumns:false,// 列
            pagination: true, //分页
            paginationDetailHAlign:"right",
            paginationLoop:false,
            // paginationPreText:'上一页',
            // paginationNextText:'下一页',
            pageNumber:1,
            pageSize:5,
            pageList:[5,10, 25, 50],
            buttonsAlign: "center", //按钮对齐方式
            showHeader:false,
            showFooter:false,
            onlyInfoPagination:false,
            paginationShowPageGo:true,
            formatShowingRows:function () {
                return"";
            },
            formatRecordsPerPage:function (pageNumber) {
                return pageNumber;
            },
            data:data
        })
    }
});