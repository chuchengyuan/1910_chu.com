require.config({
    paths: {
        jquery: "jquery.min",
        cookie: "./cookie",
        shopcar: "./lib/shopcar"
    },
    shim: {}
});

require(['jquery', 'shopcar'], function($, shopcar) {
    shopcar.render();
    $('.itemlist').on('click', '.del', function(ev) {
        var chu = JSON.parse(cookie.get('shop'));
        console.log(chu);
        chu.splice($(ev.target.parentNode).attr('index'), 1);

        var cheng = JSON.stringify(chu);
        console.log(cheng)
        cookie.set('shop', cheng)
        location.reload();
    })
});