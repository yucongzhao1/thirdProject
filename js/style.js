//Created by �����
$(function(){
    $(".carousel").carousel();
    $("#navigation nav li a").click(function () {
        if($(this).parent("li").hasClass("current")==false){
            $(this).parent("li").siblings().removeClass("current")
            $(this).parent("li").addClass("current")
        }
    })
    $('.pic img').click(function(){
        //����ǰ���ڵ������������߶ȸ�Ϊ0��������
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
//jquery��css������ֶ�̬ˢ��
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
