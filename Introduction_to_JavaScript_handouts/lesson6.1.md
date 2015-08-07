![](headings/introjs6.1.jpg)

# Introduction (and a Challenge)

Congratulations, you've made it through this course! I've introduced you to a wide range of JavaScript functionality. By now you should be familiar with many of the basics of JavaScript. In order to get you started experimenting with JavaScript, I'm going to issue you a challenge.

# Word Puzzle

Try to create a word puzzle using just the JavaScript functionality that I've shown you so far. What I would like you to do is create a program that can assemble a story from a template that has missing words. What it should do is insert the missing words into the template. The words should come from a collection of nouns, adjectives, and verbs. You can store these any way that you like and you can access them any way that you like.

To show you an example of what I am expecting, the template could be something such as "I like to [verb]. My favorite [noun] is [adjective] [noun]. That's what makes me [adjective]." So for example, we might have a set of words that includes verbs, such as "ski", nouns, such as "hat" and "tractor", and adjectives, such as "gooey" and "purple". The result that we output should be "I like to ski. My favorite hat is gooey tractor. That's what makes me purple."

So using the functionality of JavaScript that we've been exposed to so far, create a program that does exactly this.Takes a template and a set of words, and gives us an output that looks like this.

# Random Output (Bonus Challenge)

If you haven't completed the first challenge, I want you to go back and finish it, because the next one is going to build on it. Our bonus challenge is to include random output. In order to randomize the output I want you to use the `rand` function that I've created for you:

```js

var rand = function(max) {
  return(Math.floor(Math.random() * max) + 1);
};

console.log(rand(5));
// 2 (maybe)
console.log(rand(5));
// 1 (maybe)
// etc.
```

It returns a random whole number from one to whatever maximum whole number you pass it.

What I want you to do is use this function to randomize the order in which your script inserts the words into your output so that the output is unique each time that you run it. The point is each time we run it we should get a different randomized set of words inserted into the template.

# Don't Repeat Words (2nd Bonus Challenge)

If you haven't completed the first two examples, you're going to want to do that before going forward, because this next example builds on those first two. What I want you to do is modify your script so that words are not being repeated. The way that we've done it so far, each time that we run the script, the same word could be inserted multiple times in the same sentence. What I'd like you to do, is figure out a way to prevent the same word from being used twice in the same output.

While you're at it, you should think about what might happen if you run out of words. Can you prevent that from breaking your program?

# Real User Input (3rd Bonus Challenge)

If you haven't done the previous challenges, I really encourage you to stop the video and do those before moving onto this one because now we're going to incorporate real user input.

You can use two browser methods called `prompt` and `alert`. They may look different in different browsers, but they should function the same way. Using the `prompt` method in browsers, you can create a variable in your script called `input`. When the script gets to that variable it's going to put up an alert on the screen asking the user to fill in a value. At that point your script is going to wait for the user to fill in a value, and then click the OK button, before going on. At that point, whatever the user's put into the prompt will be the value of the variable `input`. The next method is the `alert` method, and what the alert method does is pop up an alert on the screen that shows you the value that you pass to the `alert` method.

```js
var input = prompt("What is your name?");
// will display a prompt in the browser
// and set input to the value entered
alert("Hello " + input);
// will greet your user in the browser
```

# Final Bonus Challenge

So using what we've just learned about prompts and alerts, the next challenge is to use a series of prompts to collect as many nouns, adjectives, and verbs as you need to fill out your particular template. Then use an alert to display your final story output after you've collected the last word from your user.