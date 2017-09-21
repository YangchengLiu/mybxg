define(['jquery', 'template', 'util'], function ($, template, util) {
    //获取URL中的参数
    var tcId = util.qs('tc_id');
    if (tcId) {
        //编辑操作
        $.ajax({
            type: 'get',
            url: '/api/teacher/edit',
            data: {tc_id: tcId},
            dataType: 'json',
            success: function (data) {
                //解析数据，渲染页面
                data.result.operate='讲师编辑';
                var html = template('teacherTpl', data.result);
                $('#teacherInfo').html(html);
                submitForm('/api/teacher/update');
            }
        });
    } else {
        //添加操作
        var html = template('teacherTpl',{operate:'讲师添加'});
        $('#teacherInfo').html(html);
        submitForm('/api/teacher/add');
    }
    //提交表单
    function submitForm(url){
        $('#teacherBtn').click(function () {
            $.ajax({
                type:'post',
                url:url,
                data:$('#teacherForm').serialize(),
                dataType:'json',
                success: function (data) {
                    if(data.code==200){
                        location.href='/teacher/list';
                    }
                }
            });
        });
    }
});