require.config({
    paths: {
        jquery: "jquery.min",
        product: "./lib/product",
        cookie: "cookie"
    },
    shim: {}
});


require(['jquery', 'product'], function($, product) {
    product.render(function(id, price) { // 渲染页面
        $('.add1').on('click', function() {

            product.addItem(id, price, $('.num01').val());
        });
    });
});