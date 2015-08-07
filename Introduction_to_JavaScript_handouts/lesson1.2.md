![](headings/introjs1.2.jpg)

In order to follow along with this course, you're going to need a programming environment in which you can write JavaScript code, execute it, and observe the results. I'm going to show you a few different environments.

First of all let's see how to add scripts to HTML documents. There are many places JavaScript runs, as we discussed. One of the most convenient is the `script` element, which can live right inside of an HTML page.

JavaScript can also be run from the command line, using a terminal environment in your own computer.

JavaScript can be run on the server, and JavaScript can even be run using programming environments that exists in the cloud.

# Example of a webpage document.

Here's an example of a web page document. It's a standard HTML document. You can save this file as a document with the *.html* extension in your computer and then open it up in a browser - you'll see the title in the current tab of the browser. 

```html
<html>
<head>
  <title>Introduction to Programming in JavaScript - Lesson 1.2</title>
</head>
<body>
</body>
</html>
```

This is a static HTML document, but we could add a button.

```html
<button id="say-hi">Say Hi</button>
```

Now you'll see that the page has a button however clicking on it has no effect. This is because it is not hooked up to any JavaScript.

# Adding scripts

Let’s add a little bit of scripts to this page.

```html
<script>
document.getElementById("say-hi").addEventListener("click", function() {
  alert("Hi");
});
</script>
```

Don't worry if you don't understand this example - this is just to show you how it works.

Reload the page, click on the button and an alert box will show up. You can write your JavaScript code this way, and this is often the way that you're going to be writing code when you're going to be including it in a web page to publish on the Internet. But for the sake of this course, I'm going to show you a couple of other ways that you can write your JavaScript.