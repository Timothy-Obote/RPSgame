# RPSgame
Modified Rock Paper Scissor Game
Using object concept in javascript the following modifications were made ;
Players' game trials were stored in the browser's local storage where they would continue without losing the progress they made earlier on 
localStorage.setItem('score', JSON.stringify(score));
What It Does:
Stores the score object in the browser's localStorage.
Since localStorage can only store data as strings, the JSON.stringify(score) function converts the score object into a string format.
Key Points:
localStorage.setItem(key, value):
Stores a key-value pair in localStorage.
In this case, the key is 'score', and the value is the stringified version of the score object.
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
What It Does:
Retrieves the 'score' string from localStorage.
Converts the string back into a JavaScript object using JSON.parse.
If 'score' does not exist in localStorage (or is null), it initializes score with a default object: { wins: 0, losses: 0, ties: 0 }.
Key Points:
localStorage.getItem('score'):

Gets the value associated with the key 'score'.
Returns null if the key doesn't exist.
JSON.parse(localStorage.getItem('score')):

Converts the retrieved string back into an object.
|| { wins: 0, losses: 0, ties: 0 }:

It provides a fallback default object for the JSON.parse returns null (i.e., when there's no 'score' stored).
