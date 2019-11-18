// let baseUrl = "http://localhost:8080/xianmu";

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                url: `http://127.0.0.1:8080/xianmu/lib/getall.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    let temp = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        temp += `
                        <div class="list-1">

                        <a href=""><img src="${pic[0].src}" alt=""></a>
                        <p>${elm.title}</p>
                        <p class="p1">¥${(elm.price)}.00

                        </p>
                </div>
                    `;
                    });
                    $('.list').append(temp);
                }
            })
        },
        list: function() {
            $.ajax({
                url: `http://127.0.0.1:8080/xianmu/lib/dj_1910.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    let temp01 = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);

                        temp01 += `
                        <div class="list-02">
                        <p class="yuan">
                            <span>${elm.dis}</span> 折
                        </p>
                        <a href="" class="xin">
                            <span></span>
                            <font>${elm.help}</font>
                        </a>
                        <a href="" class="pan"><img src="${pic[0].src}" alt=""></a>
                        <p class="name">${elm.title}</p>
                        <p class="pri-01">
                            ￥${elm.price}.00
                            <s>￥${elm.res}</s>
                        </p>
                        <div class="add" style=" height: 90px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px; overflow: hidden;">
                        <a href="" class="star"></a>
                        <a href="" class="btn">
                            <span></span> 加入购物车
                        </a>
        
                    </div>
                </div>
            
                    `;
                    });
                    $('.list-03').append(temp01);
                }
            })
        },
        ret: function() {
            $.ajax({
                url: `http://127.0.0.1:8080/xianmu/lib/dj1_1910.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    console.log(res);
                    let temp02 = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        console.log(pic);
                        temp02 += `
                        <div class="list-02">
                        <p class="yuan">
                            <span>${elm.dis}</span> 折
                        </p>
                        <a href="" class="xin">
                            <span></span>
                            <font>${elm.help}</font>
                        </a>
                        <a href="" class="pan"><img src="${pic[0].src}" alt=""></a>
                        <p class="name">${elm.title}</p>
                        <p class="pri-01">
                            ￥${elm.price}.00
                            <s>￥${elm.res}</s>
                        </p>
                        <div class="add" style=" height: 90px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px; overflow: hidden;">
                        <a href="" class="star"></a>
                        <a href="" class="btn">
                            <span></span> 加入购物车
                        </a>
        
                    </div>
                </div>
            
                    `;
                    });
                    $('.list-04').append(temp02);
                }
            })
        },
        rets: function() {
            $.ajax({
                url: `http://127.0.0.1:8080/xianmu/lib/add_1910.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    console.log(res);
                    let temp03 = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        console.log(pic);
                        temp03 += `
                        <div class="list-02">
                        <a href="" class="pan"><img src="${pic[0].src}" alt=""></a>
                        <p class="name">${elm.title}</p>
                        <p class="pri-01">
                            ￥${elm.price}.00
                          
                        </p>
                       
                </div>
            
                    `;
                    });
                    $('.list-05').append(temp03);
                }
            })


        },
        render01: function() {
            $.ajax({
                url: `http://127.0.0.1:8080/xianmu/lib/last_1910.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    let temp05 = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        temp05 += `
                        <div class="list-1">

                        <a href=""><img src="${pic[0].src}" alt=""></a>
                        <p>${elm.title}</p>
                        <p class="p1">¥${(elm.price)}.00

                        </p>
                 
                </div>
                    `;
                    });
                    $('.list-06').append(temp05);
                }
            })
        }
    }
});