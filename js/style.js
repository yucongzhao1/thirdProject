//Created by 赵玉聪
$(function(){
    $(".carousel").carousel();
    $("#navigation nav li a").click(function () {
        if($(this).parent("li").hasClass("current")==false){
            $(this).parent("li").siblings().removeClass("current")
            $(this).parent("li").addClass("current")
        }
    })
    $('.pic img').click(function(){
        //将当前窗口的内容区滚动高度改为0，即顶部
        $("html,body").animate({scrollTop:0},"fast");
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".pic").fadeIn(100)
        }else{
            $(".pic").fadeOut(1000)
        }
    });

})
//jquery与css设计数字动态刷新
$(document).ready(function(){
    $('.counter').each(function(){
        $(this).prop('counter',0).animate({
            counter: $(this).text()
        },{
            duration: 3500,
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});
