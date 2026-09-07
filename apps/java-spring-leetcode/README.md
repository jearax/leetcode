# java-spring-leetcode

Java Spring workspace for LeetCode practice.

## Owner

User (self-build). Reference implementation for the C# .NET workspace.

## Status

**Empty skeleton — pending build.**

## Planned Stack

- Build: Gradle 8.x (with `--continuous` watch mode)
- Language: Java 21 LTS
- Framework: Spring Boot 3.x (for DI / testing patterns)
- Tests: JUnit 5 + Spring Boot Test
- Format: Spotless (Google Java Format)
- Lint: Checkstyle

## Planned Commands

```bash
./gradlew --continuous build                    # watch + auto-build
./gradlew test                                 # one-shot tests
./gradlew --continuous test                    # watch + re-run tests
./gradlew spotlessApply                        # format
./gradlew checkstyleMain                       # lint
```

## Structure (target)

```
java-spring-leetcode/
├── src/
│   ├── main/
│   │   ├── java/com/leetcode/
│   │   │   └── problems/<id>-<slug>/
│   │   │       └── Solution.java
│   │   └── resources/
│   └── test/
│       └── java/com/leetcode/
│           └── problems/<id>-<slug>/
│               └── SolutionTest.java
├── build.gradle
├── settings.gradle
└── gradle/wrapper/
```