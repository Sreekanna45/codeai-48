import { LanguageNote } from '../types';

export const typescriptNotes: LanguageNote = {
  language: "TypeScript",
  overview: `TypeScript, developed by Microsoft and released in 2012, is a typed superset of JavaScript that compiles to plain JavaScript. The language adds optional static types, classes, and modules to JavaScript, enabling developers to write more maintainable and scalable applications. TypeScript's type system is one of its key features, providing better tooling support, earlier error detection, and improved code documentation. The language's structural type system allows for flexible typing while maintaining type safety. TypeScript's ability to use existing JavaScript code and type definitions from DefinitelyTyped makes it easy to gradually adopt in existing projects. The language's support for modern ECMAScript features, combined with its own innovations like decorators and enum support, makes it particularly suitable for large-scale JavaScript projects. TypeScript's integration with popular IDEs provides excellent development features like intelligent code completion and refactoring support.`,
  basicSyntax: "Static typing on top of JavaScript, interfaces, generics",
  keyFeatures: [
    "Static typing",
    "Interface declarations",
    "Generics",
    "Decorators",
    "Type inference"
  ],
  bestPractices: [
    "Use strict mode",
    "Define proper interfaces",
    "Leverage type inference",
    "Use union types",
    "Write good documentation"
  ],
  commonPitfalls: [
    "Type assertion overuse",
    "any type usage",
    "Complex generic constraints",
    "Declaration merging confusion",
    "Circular dependencies"
  ],
  frameworks: [
    "Angular",
    "NestJS",
    "Deno",
    "TypeORM",
    "Next.js"
  ],
  resources: [
    "TypeScript Documentation",
    "TypeScript Deep Dive",
    "Programming TypeScript",
    "Effective TypeScript",
    "TypeScript Handbook"
  ]
};