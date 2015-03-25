## Interview Question Practice

* Write a function that accepts an array of five card objects of the format `{ suit: string, rank: number }`, and returns what the relevant hand is. ([The standard poker hands ranking is here.](http://en.wikipedia.org/wiki/List_of_poker_hands))

* Write a function that accepts *any* amount of numbers as parameters, and returns the largest value. (Hint: use `arguments`)

* Write a function that accepts both an array of objects of the format `{ value: number, title: string }` and a boolean value as a parameter, and finds the object with the largest `value` property. If the boolean parameter is true/truthy, return the `title` property of that largest object; if not, return the `value` property instead.

* Write some code that accepts an array of URLs, and every 3 seconds changes the `src` attribute of a specific `<img>` on a page to the next URL in the array. Loop back to the beginning when you're at the end.

* Write a URL shortener function that accepts a string as a parameter. If that function has not gotten that string before, return a unique number. If it has gotten that string before, return the number previously given out for that string.

* Write a function that translates a sentence into [Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin).

* Write a function that returns an array of five random colors in hexadecimal format. Make sure that the colors will be visually obviously distinct (e.g. their RGB values are substantially dissimilar to other colors in the array).

* Two parter! (This is hard.)
    * Create a data structure that represents the lines and stations on the Washington DC Metro system. Make it generic enough so that the same structure (with obviously different data) could be used for other cities' mass transit systems.
    * Write a function that accepts three parameters - `systemData`, `startStation` and `endStation`, and returns instructions on how to navigate the system to get from the start station to the end station, switching lines if needed