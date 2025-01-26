export interface LanguageNote {
  language: string;
  basicSyntax: string;
  keyFeatures: string[];
  bestPractices: string[];
  commonPitfalls: string[];
  frameworks: string[];
  resources: string[];
}

export const programmingNotes: LanguageNote[] = [
  {
    language: "JavaScript",
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
  },
  {
    language: "Python",
    basicSyntax: "Indentation-based blocks, def for functions, class for classes",
    keyFeatures: [
      "Simple, readable syntax",
      "Dynamic typing",
      "Extensive standard library",
      "First-class functions",
      "List comprehensions"
    ],
    bestPractices: [
      "Follow PEP 8 style guide",
      "Use virtual environments",
      "Write docstrings",
      "Use list comprehensions wisely",
      "Handle exceptions properly"
    ],
    commonPitfalls: [
      "Mutable default arguments",
      "Late binding closures",
      "GIL limitations",
      "Memory usage with large lists",
      "Import cycles"
    ],
    frameworks: [
      "Django",
      "Flask",
      "FastAPI",
      "Pandas",
      "TensorFlow"
    ],
    resources: [
      "Python Documentation",
      "Real Python",
      "Python Cookbook",
      "Fluent Python",
      "Python Crash Course"
    ]
  },
  {
    language: "Java",
    basicSyntax: "Static typing, class-based, public/private modifiers",
    keyFeatures: [
      "Platform independence",
      "Strong type system",
      "Extensive class library",
      "Garbage collection",
      "Multi-threading support"
    ],
    bestPractices: [
      "Follow naming conventions",
      "Use interfaces appropriately",
      "Handle exceptions properly",
      "Implement proper equals/hashCode",
      "Use builder pattern for complex objects"
    ],
    commonPitfalls: [
      "Null pointer exceptions",
      "Memory leaks",
      "Thread synchronization issues",
      "Excessive object creation",
      "Improper exception handling"
    ],
    frameworks: [
      "Spring",
      "Hibernate",
      "Jakarta EE",
      "Android SDK",
      "JUnit"
    ],
    resources: [
      "Oracle Java Documentation",
      "Effective Java",
      "Java Concurrency in Practice",
      "Head First Java",
      "Spring Documentation"
    ]
  },
  {
    language: "C++",
    basicSyntax: "Statically typed, class-based, pointer manipulation",
    keyFeatures: [
      "Low-level memory manipulation",
      "RAII principle",
      "Template metaprogramming",
      "Multiple inheritance",
      "Operator overloading"
    ],
    bestPractices: [
      "Use smart pointers",
      "Follow RAII principle",
      "Use const correctly",
      "Prefer references to pointers",
      "Use STL algorithms"
    ],
    commonPitfalls: [
      "Memory leaks",
      "Dangling pointers",
      "Buffer overflows",
      "Copy vs. move semantics",
      "Exception safety"
    ],
    frameworks: [
      "Qt",
      "Boost",
      "OpenCV",
      "SFML",
      "Unreal Engine"
    ],
    resources: [
      "CPP Reference",
      "Effective C++",
      "C++ Primer",
      "Modern C++",
      "ISO C++ Standards"
    ]
  },
  {
    language: "Ruby",
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
  },
  {
    language: "Go",
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
  },
  {
    language: "Rust",
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
  },
  {
    language: "Swift",
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
  },
  {
    language: "Kotlin",
    basicSyntax: "Static typing, null safety, fun for functions",
    keyFeatures: [
      "Null safety",
      "Extension functions",
      "Coroutines",
      "Smart casts",
      "Data classes"
    ],
    bestPractices: [
      "Use val by default",
      "Leverage extension functions",
      "Handle nullability properly",
      "Use data classes",
      "Write idiomatic Kotlin"
    ],
    commonPitfalls: [
      "Platform types",
      "Coroutine context management",
      "Property initialization",
      "Java interop issues",
      "Scope function misuse"
    ],
    frameworks: [
      "Spring Boot",
      "Ktor",
      "Android SDK",
      "Exposed",
      "KotlinTest"
    ],
    resources: [
      "Kotlin Documentation",
      "Kotlin in Action",
      "Atomic Kotlin",
      "Head First Kotlin",
      "Kotlin Cookbook"
    ]
  },
  {
    language: "TypeScript",
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
  }
];