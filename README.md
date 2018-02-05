## Welcome to _IDENTICON™️_ AKA _GRAVATAR™️_



### Overview

We are going to be building out an Identicon generator using JavaScript and DOM
manipulation.

An Identicon is a visual representation of a hash value that serves to identify
a user of a computer system as a form of avatar while protecting the user's
privacy. You can read more about [Identicons here](https://en.wikipedia.org/wiki/Identicon).

Put simply, an Identicon is an image that corresponds to, and is derived from, a unique value, (i.e. a
username string).

GitHub automatically generates one for every user before they have uploaded a
profile photo. They tend to look like this!:  
<p align="center">
  <img src="assets/identicon-example.png"/>
</p>

### Learning Objectives

 - Given an end goal, (a working Identicon generator), identify the steps
 required to get there
 - Practice syncing JavaScript functionality with the DOM
 - Practice practical implementations of object-oriented solutions

### Deliverables

The completed application should look and function like this:

![gif of the finished product](assets/identicon-demo.gif)

##### User Experience:
 - When a user inputs their name, the Identicon should dynamically produce an
avatar for them
 - When given a blank string, a blank pattern should be rendered to the DOM
 - A user should be able to replace the string and generate a new Identicon
 as many times as they like without refreshing the application
 - A single input value should always produce the same image

##### Program Architecture:
 - Our program's functionality should be appropriately divided amongst the
 separate files provided
 - Our code follows the MVC pattern, where the Identicon class is entirely
 independent from the DOM and its manipulation and the controller is used to
 update the DOM

### Getting Started

 - When approaching a problem like this, take a moment to map out the distinct
parts of code that need to work together:
   - At what points does our JavaScript interact with the DOM?
   - What methods will our Identicon class have? What information/functionality
   should an Identicon instance have?
   - When do we capture user input and where do we send it?

- An external library ```md5``` has been provided and is already being imported
 in our HTML
  - Use the ```md5.array``` method to generate a unique set of values from the
  user's input value:
  ```JavaScript
  const hashedArr = md5.array(strValue)
  // hashedArr == an array of 16 values 0 - 255 (inclusive)
  // i.e. [243, 8, 144, ...]
  ```
  - Use these values to both derive the color of the blocks, as well as what
  what squares in the DOM should have blocks


- Our ```index.html``` has everything we need as far as references to Identicon
squares on the DOM
- Node IDs are designated ```"row_index-column_index"```, mapping to the
5x5 Identicon DOM grid
- Remember: our 'source of truth' regarding color and block positions should
exist in the Identicon model (instance), which the DOM is solely a reflection
of!
- If you are having trouble getting started, structure a development action
plan and present it to your instructors


Good luck!
