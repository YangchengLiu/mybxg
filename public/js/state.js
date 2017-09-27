define(['jquery'], function ($) {
   $(document).ajaxStart(function () {
       //显示遮罩层
       $('.overlay').show();
   });
    $(document).ajaxStart(function () {
        //隐藏遮罩层
        setTimeout(function () {
            $('.overlay').hide();
        },500);
    });
});