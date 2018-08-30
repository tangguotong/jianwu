$(function(){
	var off=true;
	$(".first-level-titles .right").click(function(){
			if(off){
				$(this).html('<img src="../../images/examineArrest/up.png" alt="" />展开面板')
				off=false;
			}else{
				$(this).html('<img src="../../images/examineArrest/down.png" alt="" />收起面板')
				
				off=true;
			}
		})
})
