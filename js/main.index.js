require.config({
    paths: {
        jquery: "./jquery.main",
        index: "./lib/index",
        reg: "./lib/reg",

    },
    shim: {

    }

});

require(['jquery', 'index', 'reg', ], function($, index, reg, ) {
    index.render();
    index.list();
    index.ret();
    index.rets();
    index.render01();
    reg.regEvs();



});
// $(function() {
//     $('.right-btn').on('click', function() {
//         $('html,body').animate({
//             scrollTop: 0
//         }, 1000)
//     })
// })