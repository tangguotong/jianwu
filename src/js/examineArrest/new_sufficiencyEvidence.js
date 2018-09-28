$(function () {
    showNext();
    togglePanel();//收起看板

    var $step = $("#step");
    $step.step({
        index: 0,
        time: 500,
        title: ["案件受理", "证据审查", "事实认定", "证据充分性判断", "量刑计算","逮捕必要性评估","案案件监督"]
    });
/*事实审定总览*/
    var examined = "<span class='icon-box'><i class='icon iconfont icon-time-fill fc-orange'></i>正在判断...</span>";//已审查
    var data = [
        {
            field0:"王晓斌",
            field1:examined,
            field2:'--',
            field3:"未判断",
            field4:"<span class='fc-blue'>补充侦查</span>",

        },
        {
            field0:"王晓斌1",
            field1:"<span class='fc-orange'>充分性评分89分</span>",
            field2:"未判断",
            field3:"未判断",
            field4:"<span>已退回</span>",
        }
    ];
    setJudgeTable(data);
    
    
    //充分性判断总览表格函数
    function setJudgeTable(data) {
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
                {
                    field:"field4",
                    title:"操作"
                },
            ],
            data:data
        })
    }

});