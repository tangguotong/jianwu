$(function () {
    var $step = $("#step");
    $step.step({
        index: 0,
        time: 500,
        title: ["案件受理", "证据审查", "事实认定", "证据充分性判断", "量刑计算","逮捕必要性评估","案案件监督"]
    });
    //table受理必要材料
    $("#need").bootstrapTable({
        columns:[
            {
                field:"fileId",
                title:"序号"
            },
            {
                field:"fileName",
                title:"案件必要材料名称"
            },
            {
                field:"checkEv",
                title:"证据初步审查"
            },
            {
                field:"result",
                title:"识别结果      "
            },
            {
                field:"operation",
                title:"操作"
            },
        ],
        data:[
            {
                fileId:"1",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='red'>非法证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            }
        ]
    });
    //table受理非必要材料
    $("#noNeed").bootstrapTable({
        pagination:true,
        pageSize:8,
        columns:[
            {
                field:"fileId",
                title:"序号"
            },
            {
                field:"fileName",
                title:"案件必要材料名称"
            },
            {
                field:"checkEv",
                title:"证据初步审查"
            },
            {
                field:"result",
                title:"识别结果      "
            },
            {
                field:"operation",
                title:"操作"
            },
        ],
        data:[
            {
                fileId:"1",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='red'> <i class='fa fa-warning'></i>非法证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'> <i class='fa fa-info-circle'></i>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'> <i class='fa fa-info-circle'></i>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'> <i class='fa fa-info-circle'></i>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
            {
                fileId:"2",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>瑕疵证据</span>",
                result:"有指纹或图章",
                operation:"<a href='#'>查看电子材料</a>"
            },
        ]
    });

    $("#suggestTable").bootstrapTable({
        columns:[
            {
                field:"fileId",
                title:"序号"
            },
            {
                field:"fileName",
                title:"涉嫌罪名"
            },
            {
                field:"checkEv",
                title:"分析建议"
            },
            {
                field:"result",
                title:"审查依据      "
            }
        ],
        data:[
            {
                fileId:"001",
                fileName:"盗窃罪",
                checkEv:"建议受理",
                result:"满足受理条件",
            },
            {
                fileId:"002",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>建议不予受理，请继续补充证据</span>",
                result:"必要证据材料不完备",
            },
            {
                fileId:"003",
                fileName:"抓获经过/到案经过",
                checkEv:"<span class='orange'>建议不予受理，请继续补充证据</span>",
                result:"必要证据中存在不规范的材料",
            }
        ]
    });

});