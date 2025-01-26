import { LanguageNote } from '../types';

export const swiftNotes: LanguageNote = {
  language: "Swift",
  overview: `Swift, developed by Apple and released in 2014, is a modern programming language designed for safety, performance, and software design patterns. Created as a replacement for Apple's previous programming language Objective-C, Swift combines powerful type inference capabilities with a clean, expressive syntax. The language's emphasis on safety is evident in its handling of optionals, which forces explicit handling of nil values, preventing many common programming errors. Swift's protocol-oriented programming paradigm offers a flexible alternative to traditional object-oriented programming, enabling code reuse through protocol extensions. The language's automatic memory management through ARC (Automatic Reference Counting) provides deterministic performance without the overhead of garbage collection. Swift's interoperability with Objective-C allows developers to gradually migrate existing codebases while taking advantage of modern language features.`,
  basicSyntax: "Static typing, optionals, func for functions",
  keyFeatures: [
    "Type inference",
    "Optionals",
    "Protocol-oriented programming",
    "Value types",
    "Memory safety"
  ],
  bestPractices: [
    "Use optionals safely",
    "Follow Swift style guide",
    "Leverage protocol extensions",
    "Use value types",
    "Write clean APIs"
  ],
  commonPitfalls: [
    "Force unwrapping",
    "Memory cycles",
    "Protocol conformance",
    "Initialization complexity",
    "Type inference limitations"
  ],
  frameworks: [
    "SwiftUI",
    "Combine",
    "Vapor",
    "Perfect",
    "Kitura"
  ],
  resources: [
    "Swift Documentation",
    "Swift Programming Language",
    "Ray Wenderlich Tutorials",
    "Hacking with Swift",
    "Swift by Sundell"
  ]
};