define(['jquery'], function($) {
    return {
        regEvs: function() {

            $('.reg').on('click', function() {

                $.ajax({
                    url: 'http://127.0.0.1:8080/xianmu/lib/eg04.login.php',
                    type: 'post',
                    data: {
                        username: $('#username').val(),
                        password: $('#password').val(),

                    },

                    success: function(res) {


                        var lis = JSON.parse(res)


                        if (lis.num == 0) {
                            alert('登陆成功')
                            location.reload()
                        } else if (lis.num == 1) {
                            alert('用户名或密码不正确')
                        }
                    }
                })
            })
        }
    }
})