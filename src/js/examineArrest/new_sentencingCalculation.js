$(function () {
    $(".icheck-label-box input").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });
    jeDate("#date",{
        format:"YYYY-MM-DD",
        isTime:false,
        // minDate:"2014-09-19 00:00:00"
    });

    createCauseTable();
    function createCauseTable(data) {
        if(!data){
            data = [];
            for(var i=0;i<60;i++){
                data.push({
                    content:'<div class="cause-list-item">\n' +
                    '                                <i class="icon iconfont icon-wenben"></i>\n' +
                    '                                <div class="cause-list-detail clearfix">\n' +
                    '                                    <div class="col-md-10">\n' +
                    '                                        <h5>葛某某诉康某等盗窃罪犯要求返还“私了”钱款纠纷案</h5>\n' +
                    '                                        <p class="fc-gray-deep fs12">公民的合法财产受法律保护，行为人因过错侵害他人财产权益，应当承担侵权责任。本案中，从公安机关调查的火灾当天赵有发和岳淑范放荒的</p>\n' +
                    '                                        <p class="btn-box">\n' +
                    '                                            <button class="btn btn-orange-hollow btn-mini">从犯</button>\n' +
                    '                                            <button class="btn btn-orange-hollow btn-mini">自首</button>\n' +
                    '                                            <button class="btn btn-orange-hollow btn-mini">多次盗窃</button>\n' +
                    '                                        </p>\n' +
                    '                                        <p class="fc-gray-light mb0 fs12">\n' +
                    '                                            <span>人民法院案例选案例</span>\n' +
                    '                                            <span>重庆市第四中级人民法院</span>\n' +
                    '                                            <span>2014.09.13</span>\n' +
                    '                                            <span>二审</span>\n' +
                    '                                        </p>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="col-md-2">\n' +
                    '                                        <div class="pull-right matching">\n' +
                    '                                            匹配率\n' +
                    '                                            <span class="num-big">26%</span>\n' +
                    '                                            <span class="loading-orange"></span>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                </div>\n' +
                    '                            </div>'

                })
            }
        }

        $("#table").bootstrapTable({
            columns:[
                {
                    field: 'content',
                }
            ],
            showColumns:false,// 列
            pagination: true, //分页
            paginationDetailHAlign:"right",
            paginationLoop:false,
            paginationPreText:'上一页',
            paginationNextText:'下一页',
            pageNumber:1,
            pageSize:10,
            pageList:[10, 25, 50],
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

