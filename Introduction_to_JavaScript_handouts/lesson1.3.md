![](headings/introjs1.3.jpg)

# Introduction

At this step I'm going to show you a way that you can use JavaScript directly in the terminal, using the command line JavaScript with Node. This can be one of the most effective ways to learn how to use a programming language, because you get instant feedback every time that you enter something. You can also save programs and run them directly from the command line.

My preferred way for running JavaScript from the command line is to install NodeJS. So to start off go to [nodejs.org](http://nodejs.org).

# Installing Node

When you open NodeJS web site, click on the Install button to download the version that is appropriate for your operating system. Next just open the downloaded file and follow the instructions.

To check whether NodeJS installed correctly, run the following command:

```
node -v
```

`-v` prints out NodeJS version.

# Checking Your Installation

Now type

```
node
```

to enter interactive shell. Now you can enter anything that can be validly interpreted by JavaScript. For example, you can write

```js
console.log("hello");
```

You might have noticed that Node also gave you the word `undefined` after the result. This tells us the return value of the function that we just executed. Functions will be discussed in the next lessons.

# Writing Your First JavaScript Program

Now open text editor. Enter the following:

```js
console.log("hello");
```

Save the file as *first_program.js*. In the terminal navigate to the directory that you saved this file and type

```
node first_program.js
```

You've just runed your first program in the terminal!