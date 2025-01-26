import { LanguageNote } from '../types';

export const goNotes: LanguageNote = {
  language: "Go",
  overview: `Go, developed at Google and released in 2009, is a statically typed, compiled programming language designed for simplicity, efficiency, and ease of concurrent programming. Created by Robert Griesemer, Rob Pike, and Ken Thompson, Go addresses the challenges of modern software development at scale. The language's built-in concurrency support through goroutines and channels makes it excellent for networked services and microservices architectures. Go's simplicity is reflected in its clean syntax, fast compilation times, and comprehensive standard library. The language's garbage collection and memory safety features help prevent common programming errors while maintaining high performance. Go's approach to dependency management and build system makes it particularly suitable for large-scale software projects. The language's focus on simplicity extends to its minimal feature set, deliberately omitting features like inheritance and generics (until Go 1.18) to maintain code clarity and readability.`,
  basicSyntax: "Static typing, func for functions, implicit interfaces",
  keyFeatures: [
    "Goroutines",
    "Channels",
    "Built-in concurrency",
    "Fast compilation",
    "Simple syntax"
  ],
  bestPractices: [
    "Handle errors explicitly",
    "Use gofmt",
    "Follow Go idioms",
    "Use interfaces wisely",
    "Write good tests"
  ],
  commonPitfalls: [
    "Nil pointer dereference",
    "Goroutine leaks",
    "Channel deadlocks",
    "Package naming",
    "Interface pollution"
  ],
  frameworks: [
    "Gin",
    "Echo",
    "Beego",
    "Buffalo",
    "Fiber"
  ],
  resources: [
    "Go Documentation",
    "Go by Example",
    "The Go Programming Language",
    "Go Web Programming",
    "Go in Action"
  ]
};