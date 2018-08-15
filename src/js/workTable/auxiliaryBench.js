$(function () {
    setPopEditAndDel();
    //头条滚动
    setInterval(function () {
        $(".animation-list").animate({"margin-top":"-34px"},function () {
            $(".animation-list li").eq(0).appendTo(".animation-list");
            $(".animation-list").css('margin-top',0);
        });
    },1500);



    var mySchedule = new Schedule({
        el: '#schedule-box',
        selectDate:["2018-08-09","2018-08-11","2018-08-10"],
        //date: '2018-9-20',
        clickCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML =
            alert('日期：'+y+'-'+m+'-'+d);
        },
        nextMonthCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d
            alert('日期：'+y+'-'+m+'-'+d);
        },
        nextYeayCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d
            alert('日期：'+y+'-'+m+'-'+d);
        },
        prevMonthCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d
            alert('日期：'+y+'-'+m+'-'+d);
        },
        prevYearCb: function (y,m,d) {
//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d
            alert('日期：'+y+'-'+m+'-'+d);
        }
    });
    setDayPlanDate();
});

//新建日程的日期
function setDayPlanDate() {
    jeDate("#date1",{
        format:"YYYY-MM-DD",
        isTime:false,
        // minDate:"2014-09-19 00:00:00"
    });
    jeDate("#time1",{
        format:"hh:mm:ss",
        // isTime:false,
        // minDate:"2014-09-19 00:00:00"
    });
    jeDate("#date2",{
        format:"YYYY-MM-DD",
        isTime:false,
        // minDate:"2014-09-19 00:00:00"
    });
    jeDate("#time2",{
        format:"hh:mm:ss",
        // isTime:false,
        // minDate:"2014-09-19 00:00:00"
    })
}

