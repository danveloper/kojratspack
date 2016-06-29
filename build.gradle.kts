buildscript {
  repositories {
    jcenter()
    maven { setUrl("https://repo.gradle.org/gradle/repo") }
  }
  dependencies {
    classpath("com.github.danveloper:gradle-js:1.0.2")
    classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.1.0-dev-998")
  }
}
apply {
  plugin("js-build")
}
the<JavaPluginConvention>().sourceSets.getByName("main").resources.srcDirs("src/main/javascript")
configure<ApplicationPluginConvention> {
  mainClassName = "app.MainKt"
}
