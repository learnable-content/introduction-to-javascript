![](headings/introjs2.1.jpg)

# Introduction

Welcome to lesson two of Introduction to Programming using JavaScript. In this lesson we will discuss syntax, variables and types. Learning what syntax, variables, and types are is an important place to start so we have a shared vocabulary.

# Syntax

Every language has a **syntax**, including the language I'm speaking to you right now. Syntax is about how the elements of a language are arranged so that they can be processed and understood consistently. That's true whether I'm speaking to you in English, or whether I'm writing a program for a computer to interpret. For example, an English sentence always starts with a capital letter and ends with a punctuation mark. A JavaScript statement always ends with a semicolon.

# Variables

**Variables** are named pieces of data that can take on different values while a program is running. By storing values in variables referring to them, and even changing them, you can read and alter the state of your program while it's running.

To create a variable in JavaScript, you start with the `var` keyword and then type the name of your variable. Then an equal sign, and then the value that you want to set your variable to:

```html
var example = 'test';
```

When you run this, nothing happens. In order to see the value, you need to do a `console.log`:

```html
console.log(example);
```

And again, add my semicolon at the end. When I click "Run" now, you'll see that the value that I set is being logged in the console. One of the important concepts that we're going to learn as we go through this class, is how variables can take on different types. This particular variable is of type string and it contains the word "coffee". But there are other data types. And any variable in JavaScript can actually be set to any value of any type that you want.

# Types

**Data types** are the different kinds of information that can be stored in a variable, such as numbers, letters, or even groups of other variables. In JavaScript, any variable can hold data of any type. That's why JavaScript is known as a dynamically typed language.

```js
var example = "coffee";
console.log(example);
typeof(example);
var first = 1;
typeof(first);
```

JavaScript can show you what the type of any variable is just by asking it with `typeof`. This can be convenient, because since any variable can contain any `typeof` value, you might need to know this before running an operation on a variable.