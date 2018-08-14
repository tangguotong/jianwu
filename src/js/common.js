$(function () {
    setPopEditAndDel();
});

//设置小时间轴的弹窗
function setPopEditAndDel(dom) {
    var dom = dom || $(".pop-img");
    dom.popover({
        toggle:"popover",
        container:"body",
        html:true,
        content:"<div class='delEdit'><div>编辑</div><div>删除</div></div>",
        placement:"bottom"
    });
    dom.on('shown.bs.popover', function (e) {
        e.stopPropagation();
        $(document).one("click",function (e) {
            if($(e.target).parents(".popover").length != 1){
                dom.popover('hide');
            }else{
                alert("嘿嘿");
            }
        });
    })



}


