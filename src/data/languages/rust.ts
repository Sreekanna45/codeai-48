import { LanguageNote } from '../types';

export const rustNotes: LanguageNote = {
  language: "Rust",
  overview: `Rust, initially developed by Mozilla Research, is a systems programming language that guarantees memory safety, thread safety, and zero-cost abstractions. Released in 2015, Rust combines low-level control with high-level ergonomics, making it suitable for everything from operating systems to WebAssembly applications. The language's unique ownership system and borrowing rules prevent common programming errors at compile time, eliminating entire classes of bugs like null pointer dereferences and data races. Rust's powerful type system and pattern matching capabilities enable expressive, safe code without runtime overhead. The language's cargo package manager and build system provide excellent dependency management and build tooling. Rust's commitment to zero-cost abstractions means that high-level programming constructs compile to efficient machine code, making it an excellent choice for performance-critical applications.`,
  basicSyntax: "Static typing, ownership system, fn for functions",
  keyFeatures: [
    "Ownership system",
    "Zero-cost abstractions",
    "Pattern matching",
    "No null or undefined",
    "Safe concurrency"
  ],
  bestPractices: [
    "Follow ownership rules",
    "Use Result for error handling",
    "Leverage the type system",
    "Write idiomatic Rust",
    "Use cargo fmt"
  ],
  commonPitfalls: [
    "Fighting the borrow checker",
    "Lifetime annotations",
    "Complex generics",
    "Unsafe block usage",
    "Macro complexity"
  ],
  frameworks: [
    "Actix",
    "Rocket",
    "Tokio",
    "Yew",
    "Diesel"
  ],
  resources: [
    "The Rust Book",
    "Rust by Example",
    "Asynchronous Programming in Rust",
    "The Rustonomicon",
    "Rust Design Patterns"
  ]
};