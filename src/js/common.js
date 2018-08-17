$(function () {
    showHeaderMessage();//头部消息盒子的显示
    setMinHeight();



});
//设置wrapper的最小高度
function setMinHeight() {
    $(".wrapper").css("min-height", $(window).height());
}
//设置小时间轴的弹窗
function setPopEditAndDel(dom) {
    var dom = dom || $(".pop-img");
    dom.popover({
        toggle:"popover",
        container:"body",
        html:true,
        content:"<div class='delEdit'><div class='edit'><i class='fa fa-edit'></i>编辑</div> <div class='del'> <i class='fa fa-trash-o'></i>删除</div></div>",
        placement:"bottom"
    });
    dom.on('shown.bs.popover', function (e) {
        e.stopPropagation();
        $(document).one("click",function (e) {
            if($(e.target).parents(".popover").length != 1){
                dom.popover('hide');
            }else{
                alert($(e.target).attr('class'));
                dom.popover('hide');
            }
        });
    })



}
//文件类型右侧的展开和合并,小箭头的改变
function setleftFileShowHide() {
    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).parents('.panel').find('.fa').addClass('fa-caret-down').removeClass("fa-caret-right")
    });
    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).parents('.panel').find('.fa').addClass('fa-caret-right').removeClass("fa-caret-down")
    });
}

function showHeaderMessage() {
    $(document).on("click",function (e) {
        if($(e.target).parents('.message-hidden-box').length == 0){
            $(".message-hidden-box").fadeOut();
        }
    });
    $("#showMessageBox").on("click",function (e) {
        e.stopPropagation()
        $(".message-hidden-box").fadeToggle();
    });
}

//滚动到一定程度,显示下一步
function showNext() {
    window.addEventListener("scroll",function(e){
        var t =document.documentElement.scrollTop||document.body.scrollTop;
        console.log(t);
        if(t > $('.case-message').height()){
            $('.case-message').addClass('simple-case-message');
        }else if(t < $('.case-message').height()){
            $('.case-message').removeClass('simple-case-message');

        }
    });
}


