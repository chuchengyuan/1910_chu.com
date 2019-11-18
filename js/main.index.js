require.config({
    paths: {
        jquery: "jquery.main",
        index: "./lib/index"
    },
    shim: {}

});

require(['jquery', 'index'], function($, index) {
    index.render();
    index.list()
    index.ret()
    index.rets()
    index.render01()


});
$(function() {
    $('.right-btn').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })
})