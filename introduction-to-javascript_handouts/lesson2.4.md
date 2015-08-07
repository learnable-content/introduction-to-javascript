![](headings/introjs2.4.jpg)

# Introduction to Statements

**Statements** are the building blocks of a JavaScript program. But what is a statement anyway? You've actually already been writing statements. The line of code `var greeting = "Hello world"` is the statements.

# Statements Defined

Statements are sets of instructions that tell the computer how to perform a specific action, and there are very few things that you should keep in mind when writing statements.

* Statements usually begin with a keyword or variable.
* They always end with a semicolon.
* They are execute sequentially for the most part in JavaScript.
* Statements may be grouped together in a block with curly braces.

# Statement Components

So here is an example:

```js
var greeting;
// declares a variable named greeting

greeting = "Hello, world";
// assigns a value to the variable greeting

console.log(greeting);
// performs the log method of console on a greeting
```

There are a number of components that could go into a JavaScript statement. Some examples are

* Values, and these can be either literal values or the variables that represent those values.
* Operators such as the equal sign, expressions, such as `2+2`, keywords such as `var`, and comments, which are ignored when your JavaScript is executed.

JavaScript is very flexible about how you format your statements. Whitespaces are completely ignored, but it's important to not let that be an excuse to let your code get messy.Your code has to be readable to programmers as well.

# Statement Formatting

```js
var first; var    second;

first =
    1
;
second
=
2;

console
  .log(
    first +
    second
);
// returns 3

console.log(first + second);
// returns 3
```

All these examples are completely legitimate JavaScript. However the code is very messy. It's important to have a set of conventions for how you format your JavaScript.

# Statement Formatting Conventions

There are some conventions that are worth following, especially when you're just starting out as a programmer working in JavaScript.

For example, it's a good idea to have no more than one statement on a single line. You should separate the elements inside of a statement with spaces, so that it's easier to see what you're working with. And when you're working in a block, that is a set of statements that all go together inside of curly braces, indent those statements inside of that block, so that it's clear that they all go together.

Let's clean the previous example up:

```js
// indent statements grouped in blocks
{
  var first;
  var second;
}

// one statement per line
first = 1;
second = 2;

// single space separating elements
console.log(first + second);
```

Now this is structured much more cleanly.