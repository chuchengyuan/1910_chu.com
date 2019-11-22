define(['jquery', 'md5'], function($, md5) {
    return {
        reglist: function() {

            $('#btn').on('click', function() {


                $.ajax({
                    url: 'http://127.0.0.1:8080/xianmu/lib/reg.php',
                    type: 'post',
                    data: {
                        username: $('#username').val(),
                        password: $.md5($('#password').val()),
                        email: $('#email').val(),
                        phone: $('#phone').val()
                    },
                    success: function(res) {
                        var ls = JSON.parse(res)
                        console.log(ls)
                        if (ls.num == 1) {
                            alert('注册成功')
                            location.href = "../html/index01.html"
                        } else if (ls.num == 0) {
                            alert('用户名已存在')
                        }
                    }
                })
            });
        }
    }
})