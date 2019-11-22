define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {
            let id = location.search.split('=')[1];
            $.ajax({
                url: `http://127.0.0.1:8080/xianmu/lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(res) {
                    let pic = JSON.parse(res.pic);
                    let big = JSON.parse(res.big);
                    let bi = JSON.parse(res.col);
                    console.log(bi[1].a)



                    let tempstr = `
                       
                    <div class="wrap_dota2">
        <div class="wrap_dota2-top">
            <div class="wrap_dota2-logo-dota2">
                <a href="">
                    <img src="../img/logo-dota2.png" alt="">
                </a>
            </div>
            <div class="wrap_dota2-logo-shop">
                <a href="">
                    <img src="../img/logo-shop.png" alt="">
                </a>
            </div>
            <div class="wrap_dota2-user-info">
                <span class="dota2_user_info">  </span>
                <a href="" class="user-info-btn needLogin">登陆</a>
                <a href="" class="user-info-btn user-reg1">快速注册</a>

                <a href="" class="myorder">我的订单</a>
                <a href="" class="myfavorite">我的关注</a>
                <a href="" class="mycart">
                    我的购物车(
                        <span>0</span>
                    )
                </a>
                <div class="mycart-list">
                    <p class="default">购物车里暂无商品</p>
                </div>
            </div>
        </div>
        <div class="wrap_dota2-top-nav">
            <a href="">首页</a>
            <a href="">特别&限量</a>
            <a href="">手办&毛绒</a>
            <a href="">主题服饰</a>
            <a href="">饰品</a>
            <a href="">生活用品</a>
            <a href="">T恤</a>
            <a href="">鼠标垫</a>
            <a href="">手机壳</a>
        </div>
        <div class="wrap_dota2-top-search">
            <input type="text" data-old-key value>
            <a href="" class="btn-search"></a>
        </div>
        <div class="wrap01">
            <div class="nav_bar">
                <a href="">首页</a>
                <a href="">双11专区</a>
                <a href="">主题服饰</a>
                <a href="">${res.small}</a>
            </div>
        </div>
    </div>
             
           
            <div class="goods_detail">
                <div class="cf">
                    <div class="gallery f_left">
                        <div class="picFocus">
                            <div class="bd">
                                <div class="tempWrap">
                                    <ul style="width: 430px; left: 0px; position: relative; overflow: hidden; padding: 0px; margin: 0px;">
                                        <li>
                                            <img src="${pic[0].src}" alt="">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hd">
                                <ul>
                                    <li><img src="${pic[0].src}" alt="" style="width: 100px;height: 100px;"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="share">
                            <dl class="cf1">
                                <dt class="f_left">
                                    <a href="" class="like ">
                                        <span></span>
                                        关注
                                        <font>${res.numer}</font>
                                    </a>
                                </dt>
                            </dl>
                        </div>
                    </div>
                    <div class="property f_left">
        
                        <div class="title">
                            <h1>${res.title}</h1>
                            <p>${res.size}</p>
                        </div>
                        <p class="productShowPrice">
                            ${res.price}.00
                        </p>
                        <table>
                            <tbody>
                                <tr>
                                    <th>运费：</th>
                                    <td>
                                        <div class="meta">
                                            <span class="from">上海</span>
                                            <span class="to shippingTo">
                                                北京
                                                <i></i>
                                            </span>
                                            <font>
                                                快递:
                                                <span class="shippingFee">
                                                    ￥18.00
                                                </span>
                                            </font>
                                            <div class="popup shippingPopup" style="top: 462px; left: 627.9px; ">
                                                <p class="close">
                                                    <span></span>
                                                </p>
                                                <div class="nav">
                                                    <ul class="cf">
                                                        <li class="province">
                                                            北京
                                                            <span></span>
                                                        </li>
                                                        <li class="city curr" style="display: none;">
                                                            请选择
                                                            <span></span>
                                                        </li>
                                                        <li class="regions"></li>
                                                    </ul>
                                                </div>
                                                <div class="pane">
        
                                                    <dl class="cf" style="display: block;">
                                                        <dd data-area-id="110000">北京</dd>
                                                        <dd data-area-id="120000">天津</dd>
                                                        <dd data-area-id="130000">河北</dd>
                                                        <dd data-area-id="140000">山西</dd>
                                                        <dd data-area-id="150000">内蒙</dd>
                                                        <dd data-area-id="210000">辽宁</dd>
        
                                                        <dd data-area-id="220000">吉林</dd>
                                                        <dd data-area-id="230000">黑龙江</dd>
                                                        <dd data-area-id="310000">上海</dd>
                                                        <dd data-area-id="320000">江苏</dd>
                                                        <dd data-area-id="330000">浙江</dd>
                                                        <dd data-area-id="340000">安徽</dd>
                                                        <dd data-area-id="350000">福建</dd>
                                                        <dd data-area-id="360000">江西</dd>
                                                        <dd data-area-id="370000">山东</dd>
                                                        <dd data-area-id="410000">河南</dd>
                                                        <dd data-area-id="420000">湖北</dd>
                                                        <dd data-area-id="430000">湖南</dd>
                                                        <dd data-area-id="440000">广东</dd>
                                                        <dd data-area-id="450000">广西</dd>
                                                        <dd data-area-id="460000">海南</dd>
                                                        <dd data-area-id="500000">重庆</dd>
                                                        <dd data-area-id="510000">四川</dd>
                                                        <dd data-area-id="520000">贵州</dd>
                                                        <dd data-area-id="530000">云南</dd>
                                                        <dd data-area-id="540000">西藏</dd>
                                                        <dd data-area-id="610000">陕西</dd>
                                                        <dd data-area-id="620000">甘肃</dd>
                                                        <dd data-area-id="630000">青海</dd>
                                                        <dd data-area-id="640000">宁夏</dd>
                                                        <dd data-area-id="650000">新疆</dd>
        
                                                    </dl>
                                                    <dl class="cf" style="display: none;">
                                                        <dd data-area-id="110100" title="北京市">北京市</dd>
                                                    </dl>
                                                    <dl class="cf" style="display: none;"></dl>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <table style="margin-left: -4px;" id="product_sku_table">
        
                                            <tbody>
                                                <tr>
                                                    <th>款式：</th>
                                                    <td>
        
                <a data-value="3:40" href="javascript:void(0)" class="option sku-item curr">${bi[0].a}<em></em></a>
        
                                                        <a data-value="3:41" href="javascript:void(0)" class="option sku-item">${bi[1].a}<em></em></a>
        
                                                        <a data-value="3:42" href="javascript:void(0)" class="option sku-item">${bi[2].a}<em></em></a>
        
                                                        <a data-value="3:43" href="javascript:void(0)" class="option sku-item">${bi[3].a}<em></em></a>
        
                                                        <a data-value="3:44" href="javascript:void(0)" class="option sku-item">${bi[4].a}<em></em></a>
        
                                                    </td>
                                                </tr>
        
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <th>数量：</th>
                                    <td>
        
                                        <div class="am6">
                                            <div class="am7">
                                                <input type="number" value="1" min="1" max="${res.num}" id="num" class="num01" style="padding-left: 10px; width: 65px;">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="btns">
                            <a href="javascript:void(0)" class="buy btn_buy">立即购买</a>
                            <a href="javascript:void(0)" class="add1 btn_addCart">
                                <span></span> 加入购物车
                            </a>
                        </div>
                    </div>
        
                </div>
            </div>
            <div class="presentation">
                <div class="wrap01 cf">
                    <div class="guess_like f_left">
                        <dl>
                            <dt>猜你喜欢</dt>
        
        
        
                            <dd>
                                <a href="/product/145" target="_blank"><img src="../img/103.jpg" alt="" title="DOTA2 - 扭蛋手办 II"></a>
                                <p class="name ellipsis" title="DOTA2 - 扭蛋手办 II" style="overflow-wrap: break-word; word-break: break-all; white-space: normal;">DOTA2 - 扭蛋手办 II</p>
                                <p class="price">¥69.00</p>
                            </dd>
        
        
        
        
                            <dd>
                                <a href="/product/163" target="_blank"><img src="../img/104.jpg" alt="" title="DOTA2 - TI8主题选手服"></a>
                                <p class="name ellipsis" title="DOTA2 - TI8主题选手服" style="overflow-wrap: break-word; word-break: break-all; white-space: normal;">DOTA2 - TI8主题选手服</p>
                                <p class="price">¥499.00</p>
                            </dd>
        
        
        
        
                            <dd>
                                <a href="/product/154" target="_blank"><img src="../img/105.jpg" alt="" title="DOTA2 - 发条技师 马克杯"></a>
                                <p class="name ellipsis" title="DOTA2 - 发条技师 马克杯" style="overflow-wrap: break-word; word-break: break-all; white-space: normal;">DOTA2 - 发条技师 马克杯</p>
                                <p class="price">¥248.00</p>
                            </dd>
        
        
        
        
                            <dd>
                                <a href="/product/158" target="_blank"><img src="../img/106.jpg" alt="" title="DOTA2 - 鼠标垫 血战之命"></a>
                                <p class="name ellipsis" title="DOTA2 - 鼠标垫 血战之命" style="overflow-wrap: break-word; word-break: break-all; white-space: normal;">DOTA2 - 鼠标垫 血战之命</p>
                                <p class="price">¥239.00</p>
                            </dd>
        
        
        
        
                            <dd>
                                <a href="/product/161" target="_blank"><img src="../img/107.jpg" alt="" title="DOTA2 - TI8主题无檐帽"></a>
                                <p class="name ellipsis" title="DOTA2 - TI8主题无檐帽" style="overflow-wrap: break-word; word-break: break-all; white-space: normal;">DOTA2 - TI8主题无檐帽</p>
                                <p class="price">¥169.00</p>
                            </dd>
        
                        </dl>
                    </div>
                    <div class="product_detail details f_left">
                        <ul class="cf details_nav desc_tab">
                            <li class="curr"><a href="javascript:void(0)">商品介绍</a></li>
                            <li class=""><a href="javascript:void(0)">产品评论<span>(0)</span></a></li>
                        </ul>
                        <div class="desc_pane cf">
                            <div class="content cf" style="display: block;">
                                <p><img src="${big[0].src}"><img src="${big[1].src}" title="565695eca9594c31ba57e2caaf37ec5b.jpg" alt="02.jpg"><img src="${big[2].src}" alt="03.jpg"></p>
                            </div>
                            <div class="content cf" style="display: none;">
                                <div class="comment">
                                    <div class="cf rate_header">
                                        <div class="f_left rate_score">
                                            <p class="num">
        
        
                                                0%
        
                                            </p>
                                            <p class="stars stars4"></p>
                                            <span>好评度</span>
                                        </div>
                                        <div class="f_left rate_bar">
                                            <table cellspacing="0" cellpadding="0">
                                                <tbody>
                                                    <tr>
                                                        <th>好评(0%)</th>
                                                        <td>
                                                            <p><span style="width:0%"></span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>中评(0%)</th>
                                                        <td>
                                                            <p><span style="width:0%"></span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>差评(0%)</th>
                                                        <td>
                                                            <p><span style="width:0%"></span></p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <dl class="cf f_right">
                                            <dt class="f_left">买家印象：</dt>
                                            <dd class="f_left">
        
                                                <a href="javascript:void(0)">0(1)</a>
        
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="rate_toolbar">
                                        <a data-type="0" href="javascript:void(0)" class="curr">全部评价（<span>0</span>）</a>
                                        <a data-type="4" href="javascript:void(0)">晒图（<span>0</span>）</a>
                                        <a data-type="1" href="javascript:void(0)">好评（<span>0</span>）</a>
                                        <a data-type="3" href="javascript:void(0)">中评（<span>0</span>）</a>
                                        <a data-type="2" href="javascript:void(0)">差评（<span>0</span>）</a>
                                    </div>
                                    <div class="comment_list">
        
                                        <table class="list">
                                            <tbody>
        
                                            </tbody>
                                        </table>
                                        <div class="page" data-page-count="0" data-page-num="0" data-page-size="10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>
            <div class="boxy_layer" style="z-index: 1339; position: fixed; visibility: visible; left: 516.5px; top: 160px; opacity: 1;">
    <table>
        <tbody>
            <tr>
                <td node-type="inner">
                    <div node-type="content">
                        <div class="prompt_box" style="display: block;">
                            <p class="title">提示<span class="close"></span></p>
                            <div class="prompt_content">
                                <p class="tip"><span class=""></span>商品已加入到购物车</p>
                            </div>
                            <p class="btn001"><a href="#" class="continue" data-btn-value="cancel">继续购物</a><a href="#" class="other" data-btn-value="cart">去购物车查看</a></p>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                    `;
                    $('body').append(tempstr);
                    callback && callback(res.id, res.price);
                    $('body .add1').on('click', function() {

                        $('.boxy_layer').show()
                        $('body').css({
                                'background': '#ccc',
                                'opacity': '0.8'

                            })
                            // if (show) {
                            //     $(body).css('background': '#ccc')
                            // }
                    })
                    $('.to').on('click', function() {
                        $('.popup').slideToggle()
                    })
                    $('td>.option').on('click', function() {
                        $(this).addClass('active').siblings().removeClass('active');
                    })
                    $('.close>span').on('click', function(ev) {
                        $('.popup').hide()
                    })
                    $('.other').on('click', function() {
                        location.href = 'shopcar.html'
                    })
                    $('.close').on('click', function() {
                        $('.boxy_layer').hide()
                        $('body').css({
                            'background': ''


                        })
                    })
                    $('.continue').on('click', function() {
                        location.href = 'index01.html'
                    })
                }
            })
        },
        addItem: function(id, price, num01) {
            let shop = cookie.get('shop');


            // 获取cookie数据 判断是否存在

            // 如果有cookie  修改cookie
            // 如果有cookie  添加cookie
            console.log(id, price, num01)
            let product = {
                id: id,
                price: price,
                num01: num01
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num01 = num01 : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 购物车没有内容 新建一个购物车
                shop.push(product); //将商品放入购物车
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
});