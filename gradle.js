project.apply({plugin: 'java'}); // uuuuugh.
project.apply({plugin: 'kotlin'});
project.apply({plugin: 'idea'});
project.apply({plugin: 'application'});
project.repositories(function(repos) {
  repos.jcenter();
  repos.maven(function(mvn) {
    mvn.url("https://maven.java.net/content/repositories/public");
  });
});

project.dependencies(function(deps) {
  deps.compile("org.jetbrains.kotlin:kotlin-stdlib:1.0.+");
  deps.compile('io.ratpack:ratpack-core:1.3.3');
  deps.compile('com.caucho:quercus:4.0.45');
});
