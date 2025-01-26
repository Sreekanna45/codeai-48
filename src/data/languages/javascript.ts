import { LanguageNote } from '../types';

export const javascriptNotes: LanguageNote = {
  language: "JavaScript",
  overview: `JavaScript is a versatile, high-level programming language that has become the backbone of modern web development. Originally created by Brendan Eich in 1995 for Netscape, it has evolved from a simple scripting language for web browsers into a powerful tool for both front-end and back-end development. Its event-driven, functional, and object-oriented programming paradigms make it uniquely suited for building interactive web applications. The language's asynchronous programming capabilities, particularly through Promises and async/await syntax, have revolutionized how developers handle operations like API calls and file operations. JavaScript's ecosystem is one of the largest in the programming world, with npm (Node Package Manager) hosting millions of packages and libraries. The language's ability to run both in browsers and on servers through Node.js has led to the rise of full-stack JavaScript development. Modern JavaScript (ES6+) has introduced numerous features like arrow functions, destructuring, modules, and classes, making the code more readable and maintainable. The language's dynamic typing and prototype-based object-oriented nature provide flexibility but require careful attention to avoid common pitfalls. With the advent of frameworks like React, Vue, and Angular, JavaScript has become essential for building sophisticated single-page applications and progressive web apps.`,
  basicSyntax: "let/const for variables, function/=> for functions, {} for blocks",
  keyFeatures: [
    "First-class functions",
    "Prototype-based OOP",
    "Event-driven programming",
    "Asynchronous programming with Promises",
    "Dynamic typing"
  ],
  bestPractices: [
    "Use const by default, let when needed",
    "Avoid var keyword",
    "Use === instead of ==",
    "Handle Promise rejections",
    "Use meaningful variable names"
  ],
  commonPitfalls: [
    "Hoisting confusion",
    "This keyword binding",
    "Type coercion issues",
    "Callback hell",
    "Memory leaks in closures"
  ],
  frameworks: [
    "React",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express.js"
  ],
  resources: [
    "MDN Web Docs",
    "JavaScript.info",
    "You Don't Know JS",
    "Eloquent JavaScript",
    "JavaScript: The Good Parts"
  ]
};