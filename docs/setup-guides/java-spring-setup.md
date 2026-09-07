# Java Spring Setup (`apps/java-spring-leetcode`)

Owner: **user (self-build)**. This guide documents the recommended scaffold
and tools; the actual files are yours to author.

## Goals

- Tight `dev` loop: edit → compile → test, all in `--continuous` mode.
- Spring Boot only as a *vehicle* for re-learning Java idioms
  (DI, annotations, autoconfig, testing slices). Most solutions themselves are
  pure algorithm code.
- Spotless + Checkstyle keep formatting and lint stable.

## Files to create

```
apps/java-spring-leetcode/
├── build.gradle
├── settings.gradle
├── gradle.properties
├── gradle/
│   └── wrapper/
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── README.md                  # already exists
└── src/
    ├── main/
    │   ├── java/com/leetcode/
    │   │   ├── LeetcodeApplication.java       # @SpringBootApplication
    │   │   └── _template/                    # already exists
    │   └── resources/
    │       └── application.yml
    └── test/
        └── java/com/leetcode/
            └── LeetcodeApplicationTests.java
```

## `build.gradle` (sketch)

```groovy
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.3.0'
    id 'io.spring.dependency-management' version '1.1.5'
}

group = 'com.leetcode'
version = '0.0.0'
java { toolchain { languageVersion = JavaLanguageVersion.of(21) } }

repositories { mavenCentral() }

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.junit.jupiter:junit-jupiter'
    testRuntimeOnly 'org.junit.platform:junit-platform-launcher'
}

tasks.named('test') {
    useJUnitPlatform()
    testLogging { events 'passed', 'skipped', 'failed' }
}

// Spotless (format)
plugins { id 'com.diffplug.spotless' version '6.25.0' }
spotless {
    java { googleJavaFormat() }
    removeUnusedImports()
    importOrder 'java', 'javax', 'org', 'com', ''
}

// Checkstyle (lint)
plugins { id 'checkstyle' }
checkstyle {
    toolVersion = '10.17'
    configFile = rootProject.file('config/checkstyle/checkstyle.xml')
}
```

## `gradle.properties` (sketch)

```
org.gradle.jvmargs=-Xmx2g
org.gradle.parallel=true
org.gradle.caching=true
org.gradle.configuration-cache=true
```

## Watch / continuous mode

```bash
# from inside the app
./gradlew --continuous test
./gradlew --continuous build

# from the root
pnpm dev:java
```

`--continuous` re-runs the task whenever inputs change. Pair with Spring
Boot DevTools only if you start a real server; for plain LeetCode-style
classes, it is not needed.

## Workflow

```bash
pnpm --filter java-spring-leetcode dev          # ./gradlew --continuous test
pnpm --filter java-spring-leetcode test         # one-shot tests
pnpm --filter java-spring-leetcode format       # ./gradlew spotlessApply
pnpm --filter java-spring-leetcode lint         # ./gradlew checkstyleMain
pnpm --filter java-spring-leetcode build        # ./gradlew build
```

Or from the root:

```bash
pnpm dev:java
pnpm test:java
```

## Adding a problem

```bash
mkdir -p apps/java-spring-leetcode/src/main/java/com/leetcode/problems/0001/twosum
mkdir -p apps/java-spring-leetcode/src/test/java/com/leetcode/problems/0001/twosum
$EDITOR apps/java-spring-leetcode/src/main/java/com/leetcode/problems/0001/twosum/Solution.java
```

Parallel test at
`src/test/java/com/leetcode/problems/0001/twosum/SolutionTest.java`.

## Notes on Spring in this context

Spring Boot brings the `@SpringBootTest` annotation that lets you use DI in
tests when you want to. For most pure-algorithm problems you do not need it —
plain JUnit 5 suffices. Use Spring features only when they help: configuration
properties, beans, profiles, etc.