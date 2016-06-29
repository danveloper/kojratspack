package app

import ratpack.server.RatpackServer
import javax.script.ScriptContext
import javax.script.ScriptEngineManager

private val engine = ScriptEngineManager().getEngineByName("nashorn")
private val bindings = engine.createBindings()
val stream = Class.forName("app.MainKt").getResourceAsStream("/ratpack.js")

fun main(args: Array<String>) {
    RatpackServer.start { spec ->
        bindings.put("ratpack", spec)
        engine.setBindings(bindings, ScriptContext.GLOBAL_SCOPE)
        val bytes = ByteArray(stream.available())
        stream.read(bytes)
        val str = java.lang.String(bytes) as String
        engine.eval(str)
    }
}