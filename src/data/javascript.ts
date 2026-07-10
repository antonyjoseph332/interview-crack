import type { InterviewQuestion } from "../types";

export const javascriptQuestions: InterviewQuestion[] = [
  {
    "question": "var, let, and const",
    "ans": {
      "text": "In JavaScript, 'var' has function scope, 'let' and 'const' have block scope. 'let' allows re-assignment, while 'const' does not allow re-assignment once assigned."
    },
    "children": []
  },
  {
    "question": "Prototype in JavaScript",
    "ans": {
      "text": "JavaScript prototypes allow objects to inherit properties and methods from other objects. Each function has a prototype object, which lets you share methods across instances, improving memory efficiency.",
      "script": "function Person(name) {\n  this.name = name;\n}\n\n// Adding a method to the prototype\nPerson.prototype.greet = function() {\n  console.log('Hello, my name is ' + this.name);\n};\n\nconst person1 = new Person('Alice');\nperson1.greet(); // Output: Hello, my name is Alice"
    }
  },
  {
    "question": "Closures",
    "ans": {
      "text": "Closures in JavaScript are functions that retain access to their lexical environment, even when called outside of their original scope. They allow variables to persist across function calls.",
      "script": "function outer() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2"
    },
    "children": []
  },
  {
    "question": "Event Loop",
    "ans": {
      "text": "The event loop is a JavaScript runtime mechanism that manages asynchronous code execution by dequeuing and processing events from the task queue in sync with the call stack."
    },
    "children": []
  },
  {
    "question": "this keyword",
    "ans": {
      "text": "The 'this' keyword in JavaScript refers to the object context in which a function is executed. It changes based on how a function is called (e.g., method, standalone, or arrow function)."
    },
    "children": []
  },
  {
    "question": "Global, Function, and Arrow Functions",
    "ans": {
      "text": "Global functions are available throughout the script. Function declarations are hoisted, while arrow functions provide concise syntax and do not have their own 'this' context."
    },
    "children": []
  },
  {
    "question": "Prototypal Inheritance",
    "ans": {
      "text": "Prototypal inheritance allows JavaScript objects to inherit properties and methods from other objects. Objects can inherit directly from others via 'Object.create' or prototype chains."
    },
    "children": []
  },
  {
    "question": "Promises",
    "ans": {
      "text": "Promises in JavaScript represent a value that may be available in the future. They have three states: pending, fulfilled, and rejected. They enable chaining via '.then()' and error handling with '.catch()'.",
      "script": "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Done'), 1000);\n});\n\npromise.then((result) => console.log(result));"
    },
    "children": []
  },
  {
    "question": "Callbacks",
    "ans": {
      "text": "Callbacks are functions passed as arguments to other functions, allowing asynchronous or event-driven code execution. They are frequently used in event handling and asynchronous operations.",
      "script": "function fetchData(callback) {\n  setTimeout(() => callback('Data received'), 1000);\n}\n\nfetchData((data) => console.log(data));"
    },
    "children": []
  },
  {
    "question": "Async/Await",
    "ans": {
      "text": "Async/await syntax is a cleaner way to handle promises in JavaScript. 'async' functions return promises, and 'await' pauses execution until the promise is resolved or rejected.",
      "script": "async function fetchData() {\n  const response = await fetch('https://api.example.com/data');\n  const data = await response.json();\n  console.log(data);\n}\nfetchData();"
    },
    "children": []
  },
  {
    "question": "Synchronous and Asynchronous",
    "ans": {
      "text": "Synchronous code executes line by line, blocking subsequent code until each line completes. Asynchronous code executes in a non-blocking manner, allowing other code to run concurrently."
    },
    "children": []
  },
  {
    "question": "Hoisting",
    "ans": {
      "text": "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope. Only declarations are hoisted, not initializations.",
      "script": "console.log(hoistedVar); // undefined due to hoisting\nvar hoistedVar = 'I am hoisted';"
    },
    "children": []
  },
  {
    "question": "Object",
    "ans": {
      "text": "Objects in JavaScript are collections of key-value pairs. They can contain properties and methods, and allow inheritance through prototypes.",
      "script": "const person = {\n  name: 'John',\n  age: 30,\n  greet: function() { console.log('Hello ' + this.name); }\n};\nperson.greet(); // Hello John"
    },
    "children": []
  },
  {
    "question": "Invoke Function",
    "ans": {
      "text": "Invoking a function refers to executing it. Functions can be invoked directly, as methods, or via call/apply for different 'this' context.",
      "script": "function greet() { console.log('Hello'); }\ngreet(); // Direct invoke\n\nconst person = { name: 'Alice' };\nfunction introduce() { console.log('I am ' + this.name); }\nintroduce.call(person); // 'I am Alice' using call"
    },
    "children": []
  }
];
