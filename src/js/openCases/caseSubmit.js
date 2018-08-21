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
            $("#files").click();//调用input的函数
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
        $("#files").click();//调用input的函数
    });


});
function fileimport(){
    var selectedFile = document.getElementById("files").files[0];//获取读取的File对象
    console.log(selectedFile.length);
    var name = selectedFile.name;//读取选中文件的文件名
    var size = selectedFile.size;//读取选中文件的大小
    console.log("文件名:"+name+"大小："+size);
    var reader = new FileReader();//这里是核心！！！读取操作就是由它完成的。
    reader.readAsText(selectedFile,'gb2312');//读取文件的内容，注意编码方式
    reader.onload = function(){
        console.log(this.result);//当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
        $('<pre>' + this.result + '</pre>').appendTo('body');
        txtdata = this.result;
    };
}