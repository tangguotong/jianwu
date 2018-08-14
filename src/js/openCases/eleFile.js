$(function () {
//        bootstrapTable
    $("#checkTable").bootstrapTable({
        pagination:true,
        pageSize:1,
        showHeader:false,
        pageList:[10, 25, 50, 100],
        columns:[
            {
                field:"file1",
                title:"序号"
            },
            {
                field:"file2",
                title:"案件必要材料名称"
            },
            {
                field:"file3",
                title:"证据初步审查"
            }
        ],
        data:[
            {
                file1:'<input type="checkbox" class="checkboxs hidden" id="check1">\n' +
                '                        <label for="check1">\n' +
                '                            <div class="check-item">\n' +
                '                                <span class="check-img"></span>\n' +
                '                                <div class="check-message">\n' +
                '                                    <span class="pull-left fc-gray-deep">001.jpg</span>\n' +
                '                                    <span class="pull-right fc-blue">2条标注</span>\n' +
                '                                </div>\n' +
                '                                <img src="../../images/openCases/file-img.png" alt="">\n' +
                '                            </div>\n' +
                '                        </label>',
                file2:'<input type="checkbox" class="checkboxs hidden" id="check2">\n' +
                '                        <label for="check2">\n' +
                '                            <div class="check-item">\n' +
                '                                <span class="check-img"></span>\n' +
                '                                <div class="check-message">\n' +
                '                                    <span class="pull-left fc-gray-deep">001.jpg</span>\n' +
                '                                    <span class="pull-right fc-blue">2条标注</span>\n' +
                '                                </div>\n' +
                '                                <img src="../../images/openCases/file-img.png" alt="">\n' +
                '                            </div>\n' +
                '                        </label>',
                file3:'<input type="checkbox" class="checkboxs hidden" id="check3">\n' +
                '                        <label for="check3">\n' +
                '                            <div class="check-item">\n' +
                '                                <span class="check-img"></span>\n' +
                '                                <div class="check-message">\n' +
                '                                    <span class="pull-left fc-gray-deep">001.jpg</span>\n' +
                '                                    <span class="pull-right fc-blue">2条标注</span>\n' +
                '                                </div>\n' +
                '                                <img src="../../images/openCases/file-img.png" alt="">\n' +
                '                            </div>\n' +
                '                        </label>'
            },
            {
                file1:'<input type="checkbox" class="checkboxs hidden" id="check2">\n' +
                '                        <label for="check2">\n' +
                '                            <div class="check-item">\n' +
                '                                <span class="check-img"></span>\n' +
                '                                <div class="check-message">\n' +
                '                                    <span class="pull-left fc-gray-deep">001.jpg</span>\n' +
                '                                    <span class="pull-right fc-blue">2条标注</span>\n' +
                '                                </div>\n' +
                '                                <img src="../../images/openCases/file-img.png" alt="">\n' +
                '                            </div>\n' +
                '                        </label>',
                file2:'<input type="checkbox" class="checkboxs hidden" id="check1">\n' +
                '                        <label for="check1">\n' +
                '                            <div class="check-item">\n' +
                '                                <span class="check-img"></span>\n' +
                '                                <div class="check-message">\n' +
                '                                    <span class="pull-left fc-gray-deep">001.jpg</span>\n' +
                '                                    <span class="pull-right fc-blue">2条标注</span>\n' +
                '                                </div>\n' +
                '                                <img src="../../images/openCases/file-img.png" alt="">\n' +
                '                            </div>\n' +
                '                        </label>',
                file3:'<input type="checkbox" class="checkboxs hidden" id="check1">\n' +
                '                        <label for="check1">\n' +
                '                            <div class="check-item">\n' +
                '                                <span class="check-img"></span>\n' +
                '                                <div class="check-message">\n' +
                '                                    <span class="pull-left fc-gray-deep">001.jpg</span>\n' +
                '                                    <span class="pull-right fc-blue">2条标注</span>\n' +
                '                                </div>\n' +
                '                                <img src="../../images/openCases/file-img.png" alt="">\n' +
                '                            </div>\n' +
                '                        </label>'
            },
        ]

    });

    //单选
    $(".checkboxs").on("change",function () {
        if($(this).prop('checked')){
            $(this).siblings('label').find('.check-item').addClass("checked")
        }else{
            $(this).siblings('label').find('.check-item').removeClass("checked");
        }
    });
    //全选和反选
    $('#checkAll').on('ifUnchecked', function (event) {
        $(".checkboxs").prop("checked",true);
        $(".check-item").removeClass("checked");
    });
    $('#checkAll').on('ifChecked', function (event) {
        $(".checkboxs").prop("checked",true);
        $(".check-item").addClass("checked")
    });
    //初始化icheck
    $("#checkAll").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });

});