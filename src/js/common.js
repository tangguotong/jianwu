$(function () {
    showHeaderMessage();//头部消息盒子的显示
    setMinHeight();
    // showEleFilePop();



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
        $($(this).parents('.panel')[0]).find('.fa').addClass('fa-caret-down').removeClass("fa-caret-right")
    });
    $('.panel-collapse').on('hide.bs.collapse', function () {
        $($(this).parents('.panel')[0]).find('.fa').addClass('fa-caret-right').removeClass("fa-caret-down")
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

function showEleFilePop() {
    //计算电子卷宗的高和top值
    var top = ($(window).height()-$(window).height()*0.8)/2 +35;
    var height = $(window).height()*0.8;
    $('.ele-pop-box').css({
        "height":height,
        "top":top
    });
    $('.ele-pop-box').fadeIn();
    $('body').addClass('modal-open');

    //计算高度
    $('.panel-ele >.panel-body').height(height - 78-30);

    //声明图片对象
    var imgobj = refreshImgObj();
    //双击恢复原图
    $('.show-text-img').on('dblclick','.item',function () {
        $(this).find('img').height("100%");
        $(this).find('img').width("auto");
        $(this).find('img').get(0).style.transform = 'rotate(0deg)';//旋转取消
    });
    //滚动鼠标放大缩小
    $('.show-text-img').on('mousewheel','.item',function (evt) {
        // var evt =evt || window.event;
        var code = evt.originalEvent.deltaY;
        if(code<0){
            //向前滚
            imgobj.doChangeSize(10);
        }else{
            //向后滚
            imgobj.doChangeSize(-10);
        }
    });
    //全屏
    $('.img-tools span').eq(0).on('click',function () {
       imgobj.fullScreen();
    });
    //放大
    $('.img-tools >span').eq(1).on('click',function () {
        imgobj.imgLarge();
    });
    //缩小
    $('.img-tools >span').eq(2).on('click',function () {
        imgobj.imgSmall();
    });
    //旋转
    $('.img-tools >span').eq(3).on('click',function () {
       imgobj.imgRotate();
    });
    //文字识别的点击事件
    $('.img-tools >span').eq(-1).on('click',function () {
        $('.recognition').show();
        setTimeout(function () {
            $('.recognition').hide();
            $('.img-tools span').eq(-1).parents('.show-text-img').find('.carousel-inner .active img').hide();
            $('.img-tools span').eq(-1).parents('.show-text-img').find('.carousel-inner .active .text-box').show();
        },500);
    });
    //退出
    $('.exit-img').on('click',function () {
        $('.ele-pop-box').fadeOut();
        $('body').removeClass('modal-open');
    });

    //轮播图切换的时候
    $('#myCarousel').on('slide.bs.carousel', function () {
        imgobj.init();//初始化img对象
    });
    $('#myCarousel').on('slid.bs.carousel', function () {
        imgobj = refreshImgObj();//从新选择对象;
    });
}


//img对象
function refreshImgObj() {
    return {
        img:$('.show-text-img').find('.item.active img'),
        current:0,
        changeSize:20,
        init:function () {
            //放大缩小取消
            this.img.height("100%");
            this.img.width("auto");
            this.img.get(0).style.transform = 'rotate(0deg)';//旋转取消
        },
        fullScreen:function () {
            this.init();//初始化
            var elem = this.img.parents('.active').get(0);
            if (elem.requestFullscreen) {
                elem.requestFullscreen();		//IE浏览器
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();			//火狐浏览器
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();			//谷歌浏览器

            }
        },
        imgLarge:function () {
            this.doChangeSize(this.changeSize);
        },
        imgSmall:function () {
            this.doChangeSize(-(this.changeSize));
        },
        imgRotate:function () {
            this.current = (this.current+90)%360;
            this.img.get(0).style.transform = 'rotate('+this.current+'deg)';
        },
        doChangeSize:function (size) {
            var oWidth = this.img.width(); //取得图片的实际宽度
            var oHeight = this.img.height(); //取得图片的实际高度
            this.img.width(oWidth + size);
            this.img.height(oHeight + size / oWidth * oHeight);
        },
        imgDrag:function (x,y) {
            var ox = this.img.width(); //取得图片的实际宽度
            var oy = this.img.height(); //取得图片的实际高度
            this.img.css({
                "margin-top":y,
                "margin-left":y,
            });
        }

    }
}



