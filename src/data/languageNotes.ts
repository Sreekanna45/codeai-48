export interface LanguageNote {
  language: string;
  overview: string;
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
  },
  {
    language: "Python",
    overview: `Python, created by Guido van Rossum and first released in 1991, has emerged as one of the most popular programming languages worldwide. Its philosophy emphasizes code readability with its notable use of significant whitespace and clean syntax. Python's versatility spans web development, data science, artificial intelligence, machine learning, automation, and scientific computing. The language's "batteries included" standard library, combined with its vast ecosystem of third-party packages, makes it suitable for virtually any programming task. Python's simplicity and readability make it an excellent choice for beginners, while its powerful features satisfy advanced developers. The language's dynamic typing and automatic memory management allow developers to focus on problem-solving rather than low-level details. Python's support for multiple programming paradigms, including procedural, object-oriented, and functional programming, provides flexibility in coding approaches. The rise of data science and machine learning has further cemented Python's position, with libraries like NumPy, Pandas, and TensorFlow becoming industry standards. Python's interpreter-based nature, while sometimes affecting performance, offers immediate feedback and easier debugging. The language's strong community support and comprehensive documentation make learning and problem-solving more accessible.`,
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
    overview: `Java, developed by Sun Microsystems and released in 1995, is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. Its "Write Once, Run Anywhere" (WORA) principle allows Java applications to run on any platform that supports Java without recompilation. Java's architecture-neutral and portable nature comes from its compilation to bytecode, which runs on a Java Virtual Machine (JVM). The language's strong type system, automatic memory management through garbage collection, and extensive security features make it popular for enterprise-level applications. Java's ecosystem includes a vast standard library and numerous frameworks for web, mobile, and enterprise development. The language's emphasis on backward compatibility ensures that older applications continue to work with newer Java versions. Java's influence on modern programming is significant, with many languages adopting its syntax style and object-oriented principles. The platform's maturity, stability, and extensive tooling support make it a preferred choice for large-scale applications, Android development, and server-side programming.`,
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
    overview: `C++, created by Bjarne Stroustrup as an extension of C, is a powerful systems programming language that combines low-level memory manipulation with high-level object-oriented features. Released in 1985, it has evolved to become one of the most influential programming languages, particularly in systems programming, game development, and performance-critical applications. C++ provides direct access to hardware and memory management while supporting multiple programming paradigms including procedural, object-oriented, and generic programming. The language's template system enables sophisticated meta-programming capabilities, while its Standard Template Library (STL) provides a rich collection of containers and algorithms. C++'s principle of "zero-overhead abstraction" ensures that programmers don't pay for features they don't use, making it ideal for performance-critical applications. Modern C++ (C++11 and beyond) has introduced numerous features like smart pointers, lambda expressions, and move semantics, improving both safety and efficiency.`,
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    language: "Kotlin",
    overview: `Kotlin, developed by JetBrains and released in 2011, is a modern programming language that runs on the Java Virtual Machine (JVM) and can be compiled to JavaScript or native code. Designed to be fully interoperable with Java, Kotlin addresses many of Java's pain points while adding modern features. The language's null safety system helps prevent null pointer exceptions through compile-time checks, while its smart casts reduce boilerplate code. Kotlin's coroutines provide a simplified approach to asynchronous programming, making it easier to write concurrent code. The language's support for both object-oriented and functional programming paradigms offers flexibility in coding style. Kotlin's adoption as the preferred language for Android development by Google has significantly increased its popularity. The language's emphasis on pragmatism and interoperability makes it an excellent choice for both new projects and gradual migration of existing Java codebases.`,
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
  }
];