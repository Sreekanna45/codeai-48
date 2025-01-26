import { LanguageNote } from '../types';

export const rubyNotes: LanguageNote = {
  language: "Ruby",
  overview: `Ruby, created by Yukihiro Matsumoto in 1995, is a dynamic, object-oriented programming language designed with programmer happiness in mind. Its elegant syntax and powerful metaprogramming capabilities make it particularly suitable for creating domain-specific languages (DSLs) and web applications. Ruby follows the principle of "least surprise," aiming to minimize confusion by making code behave in a natural, consistent way. The language's pure object-oriented nature means everything is an object, including numbers and nil, providing a consistent programming model. Ruby's blocks and Procs offer powerful functional programming capabilities, while its mixins provide an alternative to multiple inheritance. The Ruby on Rails framework revolutionized web development by introducing convention over configuration and don't repeat yourself (DRY) principles. Ruby's extensive standard library, package manager (RubyGems), and active community contribute to its popularity in web development and automation tasks.`,
  basicSyntax: "Dynamic typing, everything is an object, def for methods",
  keyFeatures: [
    "Pure object-oriented",
    "Blocks and Procs",
    "Mixins",
    "Meta-programming",
    "Dynamic typing"
  ],
  bestPractices: [
    "Follow Ruby Style Guide",
    "Use meaningful variable names",
    "Keep methods small",
    "Use blocks appropriately",
    "Test-driven development"
  ],
  commonPitfalls: [
    "Performance issues",
    "Memory usage",
    "Monkey patching risks",
    "Global variable usage",
    "Complex meta-programming"
  ],
  frameworks: [
    "Ruby on Rails",
    "Sinatra",
    "RSpec",
    "Hanami",
    "Capybara"
  ],
  resources: [
    "Ruby Documentation",
    "Ruby Style Guide",
    "Practical Object-Oriented Design",
    "The Ruby Way",
    "Ruby Under a Microscope"
  ]
};