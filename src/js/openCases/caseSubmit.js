$(function () {

    //罪行下拉框选择
    $('.multiple-select').select2({"theme":"krajee","width":"100%","placeholder":"请选择罪行","language":"zh-CN"})
    //初始化icheck
    $("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });

    //拖拽文件上传默认事件阻止
    $('#fileUpload').on({
        dragleave:function(e){
            e.preventDefault();
        },
        drop:function(e){
            e.preventDefault();
            //拖拽结束后,获取被拖拽的文件
            var files = event.dataTransfer.files;
            console.log(files);
        },
        dragenter:function(e){
            e.preventDefault();
        },
        dragover:function(e){
            e.preventDefault();
        }

    });

    //点击上传文件,触发input[type = file]的点击事件
    $('#load').click(function(){
        $('#load_xls').trigger('click');
    });

});


function uploadFile(file) {
    var myform = new FormData();
    myform.append('file',$('#load_xls')[0].files[0]);

}