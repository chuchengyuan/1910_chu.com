define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop');
            console.log(shop)

            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join(); //取id并且用,连接
                $.ajax({
                    url: `http://127.0.0.1:8080/xianmu/lib/shop.php`,
                    type: 'get',
                    data: {
                        idlist: idList
                    },
                    dataType: 'json',
                    success: function(res) {


                        let tempstr = '';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            console.log(pic)
                            let arr = shop.filter((val, i) => {
                                console.log(i)
                                console.log(elm.id)
                                console.log(elm.num)
                                console.log(val)
                                    // 从购物车cookie数据中取出于本条遍历数据相同id的元素
                                return val.id == elm.id;

                            });

                            tempstr += `
                            <div class="order_content">
                            <ul class="order_lists">
                            <li class="list_chk">
                            <input type="checkbox" id="checkbox_4" class="son_check">
                            <label for="checkbox_4"></label>
                        </li>
                        <li class="list_con">
                            <div class="list_img">
                                <a href="javascript:;"><img src="${pic[0].src}" alt="${pic[0].title}"></a>
                            </div>
                            <div class="list_text"><a href="javascript:;"> ${elm.title}</a></div>
                        </li>
                        <li class="list_info">
                            <p>规格：默认</p>
                            <p>尺寸：16*16*3(cm)</p>
                        </li>
                        <li class="list_price">
                            <p class="price">${elm.price}</p>
                        </li>
                        <li class="list_amount">
                            <div class="amount_box">
                                <a href="javascript:;" class="reduce reSty">-</a>
                                <input type="text" value="${arr[0].num01}"class="sum">
                                <a href="javascript:;" class="plus">+</a>
                            </div>
                        </li>
                        <li class="list_sum">
                            <p class="sum_price">${(arr[0].num01*elm.price).toFixed(2)}</p>
                        </li>
                        <li class="list_op">
                            <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                        </li>
                        </ul>
                        </div>
                            `;
                        });
                        $('.cartBox').append(tempstr);
                        //全局的checkbox选中和未选中的样式
                        var $allCheckbox = $('input[type="checkbox"]'), //全局的全部checkbox
                            $wholeChexbox = $('.whole_check'),
                            $cartBox = $('.cartBox'), //每个商铺盒子
                            $sonCheckBox = $('.son_check'); //每个商铺下的商品的checkbox

                        $allCheckbox.click(function() {


                            if ($(this).is(':checked')) {
                                $(this).next('label').addClass('mark');
                            } else {
                                $(this).next('label').removeClass('mark')
                            }
                        });

                        //===============================================全局全选与单个商品的关系================================
                        $wholeChexbox.click(function() {
                            var $checkboxs = $cartBox.find('input[type="checkbox"]');
                            if ($(this).is(':checked')) {
                                $checkboxs.prop("checked", true);
                                $checkboxs.next('label').addClass('mark');
                            } else {
                                $checkboxs.prop("checked", false);
                                $checkboxs.next('label').removeClass('mark');
                            }
                            totalMoney();
                        });


                        $sonCheckBox.each(function() {
                            $(this).click(function() {

                                if ($(this).is(':checked')) {
                                    //判断：所有单个商品是否勾选
                                    var len = $sonCheckBox.length;
                                    var num = 0;
                                    $sonCheckBox.each(function() {
                                        if ($(this).is(':checked')) {
                                            num++;
                                        }
                                    });
                                    if (num == len) {
                                        $wholeChexbox.prop("checked", true);
                                        $wholeChexbox.next('label').addClass('mark');
                                    }
                                } else {
                                    //单个商品取消勾选，全局全选取消勾选
                                    $wholeChexbox.prop("checked", false);
                                    $wholeChexbox.next('label').removeClass('mark');
                                }
                            })
                        })





                        //=================================================商品数量==============================================
                        var $plus = $('.plus'),
                            $reduce = $('.reduce'),
                            $all_sum = $('.sum');
                        $plus.click(function() {
                            var $inputVal = $(this).prev('input'),
                                $count = parseInt($inputVal.val()) + 1,

                                $obj = $(this).parents('.amount_box').find('.reduce'),
                                $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
                                $price = $(this).parents('.order_lists').find('.price').html(), //单价
                                $priceTotal = $count * parseInt($price.substring(1));
                            $inputVal.val($count);
                            $priceTotalObj.html('￥' + $priceTotal);
                            if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
                                $obj.removeClass('reSty');
                            }
                            totalMoney();
                            console.log($obj)
                        });

                        $reduce.click(function() {
                            var $inputVal = $(this).next('input'),
                                $count = parseInt($inputVal.val()) - 1,
                                $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
                                $price = $(this).parents('.order_lists').find('.price').html(), //单价
                                $priceTotal = $count * parseInt($price.substring(1));
                            if ($inputVal.val() > 1) {
                                $inputVal.val($count);
                                $priceTotalObj.html('￥' + $priceTotal);
                            }
                            if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
                                $(this).addClass('reSty');
                            }
                            totalMoney();
                        });

                        $all_sum.keyup(function() {
                            var $count = 0,
                                $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
                                $price = $(this).parents('.order_lists').find('.price').html(), //单价
                                $priceTotal = 0;
                            if ($(this).val() == '') {
                                $(this).val('1');
                            }
                            $(this).val($(this).val().replace(/\D|^0/g, ''));
                            $count = $(this).val();
                            $priceTotal = $count * parseInt($price.substring(1));
                            $(this).attr('value', $count);
                            $priceTotalObj.html('￥' + $priceTotal);
                            totalMoney();
                        })

                        //======================================移除商品========================================

                        var $order_lists = null;
                        var $order_content = '';
                        $('.delBtn').click(function() {
                            $order_lists = $(this).parents('.order_lists');
                            $order_content = $order_lists.parents('.order_content');
                            $('.model_bg').fadeIn(300);
                            $('.my_model').fadeIn(300);
                        });

                        //关闭模态框
                        $('.closeModel').click(function() {
                            closeM();
                        });
                        $('.dialog-close').click(function() {
                            closeM();
                        });

                        function closeM() {
                            $('.model_bg').fadeOut(300);
                            $('.my_model').fadeOut(300);
                        }
                        //确定按钮，移除商品
                        $('.dialog-sure').click(function(ev) {
                            let add = JSON.parse(cookie.get('shop'))
                            add.forEach((elm, i) => {
                                    console.log(elm.id)
                                    console.log(add[0].id)
                                    if (add[0].id === elm.id) {
                                        add.splice($(ev.target.parentNode).attr('index'), 1);
                                        var cheng = JSON.stringify(add);
                                        location.reload();
                                        cookie.set('shop', cheng)
                                    }
                                })
                                // console.log(add[0].id)


                            // add.splice($(ev.target.parentNode).attr('index'), 1);
                            // var cheng = JSON.stringify(add);

                            // cookie.set('shop', cheng)
                            // location.reload();

                            if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
                                $order_content.parents('.cartBox').remove();
                            }
                            closeM();
                            $sonCheckBox = $('.son_check');
                            totalMoney();
                        })

                        //======================================总计==========================================

                        function totalMoney() {
                            var total_money = 0;
                            var total_count = 0;
                            var calBtn = $('.calBtn a');
                            $sonCheckBox.each(function() {
                                if ($(this).is(':checked')) {
                                    var goods = parseInt($(this).parents('.order_lists').find('.sum_price').html().substring(1));
                                    var num = parseInt($(this).parents('.order_lists').find('.sum').val());
                                    total_money += goods;
                                    total_count += num;
                                }
                            });
                            $('.total_text').html('￥' + total_money);
                            $('.piece_num').html(total_count);



                            if (total_money != 0 && total_count != 0) {
                                if (!calBtn.hasClass('btn_sty')) {
                                    calBtn.addClass('btn_sty');
                                }
                            } else {
                                if (calBtn.hasClass('btn_sty')) {
                                    calBtn.removeClass('btn_sty');
                                }
                            }
                        }
                    }
                });
                $('.itemlist').on('click', '.del', function(ev) {
                    var arr01 = JSON.parse(cookie.get('shop'))
                    console.log(arr01)



                    arr01.splice($(ev.target.parentNode).attr('index'), 1);

                    var cheng = JSON.stringify(arr01);
                    console.log(cheng)
                    cookie.set('shop', cheng)
                        // location.reload();
                })
            }





        }
    }
});