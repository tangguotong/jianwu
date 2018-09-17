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


    
    //事实审定总览函数
    function setTrueTable(data) {
        $("#truthTable").bootstrapTable({
            columns:[
                {
                    field:"field0",
                    title:"罪名/犯罪嫌疑人"
                },
                {
                    field:"field1",
                    title:"盗窃罪"
                },
                {
                    field:"field2",
                    title:"故意伤害罪"
                },
                {
                    field:"field3",
                    title:"掩饰隐藏犯罪所得"
                },
            ],
            data:data
        })
    }
});