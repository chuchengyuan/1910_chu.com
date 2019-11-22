window.onload = function() {
    var inp = $('#myform>input');
    console.log(inp)
    var submit = inp[inp.length - 1];
    console.log(submit)
    var oSpan = $('#myform>span');
    var pass = $('#pass')[0];
    console.log(pass)
    var password = $('#password')[0];
    var pSpan = $('.pass')[0];
    console.log(pSpan)

    var reg = {
        'username': /^[A-z]\w{5,15}$/,
        'password': /^.{6,16}$/,
        // 'pass': /^.{6,16}$/,
        'email': /^\w{6,16}@[A-z0-9]{2,}\.[A-z]{2,}\.?[A-z]*$/,
        'phone': /^1[356789]\d{9}$/
    };

    inp = Array.from(inp);
    inp.forEach(function(elm, i) {
        if (elm.id == 'pass' || !elm.id) {
            return; // 终止函数执行
        }
        elm.onkeyup = function() {
            if (reg[this.id].test(this.value)) { // reg[元素id]
                oSpan[i].innerHTML = '验证通过';
                oSpan[i].style.color = "green";
                this.dataset.pass = true;
            } else {
                oSpan[i].innerHTML = '验证失败，请从新输入';
                oSpan[i].style.color = "red";
            }
            check();
        }
    });

    pass.onkeyup = function() {
        if (this.value === password.value) {
            pSpan.innerHTML = '验证通过';
            pSpan.style.color = "green";
            this.dataset.pass = true;
        } else {
            pSpan.innerHTML = '验证失败，请从新输入';
            pSpan.style.color = "red";
        }
        check();
    }

    function check() {
        var pass = $('#myform>input[data-pass="true"]');
        if (pass.length == 5) {
            submit.removeAttribute('disabled');
        }
    }

}