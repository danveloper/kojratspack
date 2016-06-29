ratpack.handlers(function(chain) {
    chain.get(function(ctx) {
        ctx.render("Hello World!");
    })
});