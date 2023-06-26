# Singleton
It says that only one presence of an Object should be inside a program. This approach mostly desired as making that Object ***global***.
For example when we try to use database in a program, we can not create an Object each time that gives us access to database.

## Disadvantages
1. As it is obvious, this pattern avoids to send parameters in constructor as you first create that Object and so having different variants of an Object. One solution is to use a pattern called ***Parametric Singleton pattern***. In this approach we can use ***keys*** to get a desired instance from `getInstance` method