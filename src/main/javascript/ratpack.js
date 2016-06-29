var ScriptEngine = Java.type('javax.script.ScriptEngine');
var QuercusScriptEngineFactory = Java.type('com.caucho.quercus.script.QuercusScriptEngineFactory');
var StringWriter = Java.type('java.io.StringWriter');
var PrintWriter = Java.type('java.io.PrintWriter');

ratpack.handlers(function(chain) {
    chain.get(function(ctx) {
        var factory = new QuercusScriptEngineFactory();
        var engine = factory.getScriptEngine();
        var sw = new StringWriter();
        var pw = new PrintWriter(sw);
        engine.getContext().setWriter(pw);
        engine.eval('<?php echo "NEEDS PHP FOR BUILD AND THE APP"; ?>')
        ctx.render(sw.getBuffer());
    })
});