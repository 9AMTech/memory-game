# Animal Crossing New Horizons Memory Game
An Animal Crossing New Horizons themed memory game! It's made entirely in React and TypeScript to enforce safe code!

**Link to project:** 9amtech.github.io/memory-game/ <br>
**Project Requirements:** https://www.theodinproject.com/lessons/node-path-javascript-memory-card#assignment

![Thumbnail for the restaurant project.](https://github.com/9AMTech/memory-game/blob/main/thumbnail.png?raw=true)

## How It's Made:

**Tech used:** TypeScript, React, CSS Modules, Hooks(useState, useEffect, useContext), APIs(Animal Crossing New Horizons API)

The learning of TypeScript this late into the game definitely hit me like a truck. It definitely had a learning curve to it, and if it weren't for Matt Pocock I don't know how I could've wrapped my head around this. There were high highs and low lows when building this project out, but I have to say, TypeScript is amazing. Sure it adds more boilerplate code but I can come back to this code days, even weeks later and understand what's going on! Speaking of which, the use of interfaces to describe props was such a nice addition! The interface made for a nice little reference that was always at the top of my code. 

Leaving my TypeScript parade now, this projects logic all starts from the Animal Crossing New Horizons API (ACNHAPI). We use the useEffect hook to grab the data of all the villagers from the ACNHAPI, and make sure we leave an empty array after to only make one API request when launching the website. Then from that we generate eight villagers to use as cards within the game. We do this by generating a random number between 1 to 391 - (this is the amount of different villagers in the game, and within the API) and storing it in an array. Every time we get a number, we check to see if it's within out selected villagers. If there's a match, we run the function again. This is done in a for loop that runs until we get the amount of villagers we need! Onto the game logic, whenever the user picks a card, we run a Fisher-Yates shuffle algorithm on the selected villagers array to then move the cards around! All the while updating all of the score counters when needed. 

In terms of CSS, I really think I went all out. I used GIMP to make the "Brewster" chat bubble, and my video editing skills to make a perfect video loop of Brewster wiping a mug! I used the font of the Animal Crossing game, Fink Heavy and FOT Bokutoh Pro to make my game as real of an experience as possible. The lives are represented by Bells Bags (the game currency) and fade out when a guess is wrong. The images of the villagers were framed in a way to look like polaroids! It all came together quite nicely in the end.

## Lessons Learned:

-TypeScript while difficult to learn at first is a really nice and helpful tool. <br/>
-TypeScript enforces good design habits and patterns!
-There's a reason why algorithms are so important to learn. They are useful and server their purpose well.  <br/>
-APIs are fun to work with. <br/>
-Once again, React is an amazing framework to work with!
