export interface LanguageInfo {
  name: string;
  description: string;
  creator: string;
  year: number;
  uses: string[];
  advantages: string[];
  disadvantages: string[];
  examples: string[];
}

export const programmingLanguages: Record<string, LanguageInfo> = {
  javascript: {
    name: "JavaScript",
    description: "A high-level, interpreted programming language that conforms to the ECMAScript specification.",
    creator: "Brendan Eich",
    year: 1995,
    uses: ["Web Development", "Server-side Development", "Mobile Development", "Game Development"],
    advantages: ["Easy to learn", "Huge ecosystem", "Versatile", "Rich frameworks"],
    disadvantages: ["Type coercion issues", "Browser inconsistencies", "Security concerns"],
    examples: [
      "console.log('Hello, World!');",
      "const sum = (a, b) => a + b;",
      "fetch('https://api.example.com/data').then(response => response.json())"
    ]
  },
  python: {
    name: "Python",
    description: "A high-level, interpreted programming language known for its simplicity and readability.",
    creator: "Guido van Rossum",
    year: 1991,
    uses: ["Data Science", "AI/ML", "Web Development", "Automation"],
    advantages: ["Easy to learn", "Large standard library", "Great community", "Cross-platform"],
    disadvantages: ["Slower execution", "GIL limitations", "Memory consumption"],
    examples: [
      "print('Hello, World!')",
      "def add(a, b): return a + b",
      "import pandas as pd\ndf = pd.read_csv('data.csv')"
    ]
  },
  java: {
    name: "Java",
    description: "A class-based, object-oriented programming language designed to be platform-independent.",
    creator: "James Gosling",
    year: 1995,
    uses: ["Enterprise Software", "Android Development", "Web Applications", "Cloud Computing"],
    advantages: ["Platform independence", "Strong typing", "Large ecosystem", "Security"],
    disadvantages: ["Verbose syntax", "Memory intensive", "Slower startup"],
    examples: [
      "System.out.println('Hello, World!');",
      "public int add(int a, int b) { return a + b; }",
      "List<String> items = new ArrayList<>();"
    ]
  },
  cpp: {
    name: "C++",
    description: "A general-purpose programming language created as an extension of the C programming language.",
    creator: "Bjarne Stroustrup",
    year: 1985,
    uses: ["System Programming", "Game Development", "Real-time Systems", "Embedded Systems"],
    advantages: ["High performance", "Hardware access", "Large community", "Flexibility"],
    disadvantages: ["Complex syntax", "No garbage collection", "Long compile times"],
    examples: [
      "#include <iostream>\nint main() {\n    std::cout << 'Hello, World!';\n    return 0;\n}",
      "int add(int a, int b) { return a + b; }",
      "std::vector<int> numbers = {1, 2, 3, 4, 5};"
    ]
  },
  typescript: {
    name: "TypeScript",
    description: "A strict syntactical superset of JavaScript that adds optional static typing.",
    creator: "Microsoft",
    year: 2012,
    uses: ["Web Development", "Large Scale Applications", "Node.js Development", "Enterprise Software"],
    advantages: ["Type safety", "Better tooling", "JavaScript compatibility", "Modern features"],
    disadvantages: ["Additional compilation step", "Learning curve", "Type complexity"],
    examples: [
      "console.log('Hello, World!');",
      "function add(a: number, b: number): number { return a + b; }",
      "interface User { name: string; age: number; }"
    ]
  },
  ruby: {
    name: "Ruby",
    description: "A dynamic, open-source programming language with a focus on simplicity and productivity.",
    creator: "Yukihiro Matsumoto",
    year: 1995,
    uses: ["Web Development", "Scripting", "DevOps", "Data Processing"],
    advantages: ["Elegant syntax", "Rich libraries", "Active community", "Developer happiness"],
    disadvantages: ["Runtime speed", "Memory usage", "Threading model"],
    examples: [
      "puts 'Hello, World!'",
      "def add(a, b)\n  a + b\nend",
      "users.map { |user| user.name.upcase }"
    ]
  },
  swift: {
    name: "Swift",
    description: "A powerful and intuitive programming language for iOS, macOS, and beyond.",
    creator: "Apple Inc.",
    year: 2014,
    uses: ["iOS Development", "macOS Development", "Server-side Development", "Systems Programming"],
    advantages: ["Safety", "Performance", "Modern syntax", "Apple ecosystem"],
    disadvantages: ["Limited to Apple", "Young ecosystem", "Frequent updates"],
    examples: [
      "print('Hello, World!')",
      "func add(_ a: Int, _ b: Int) -> Int { return a + b }",
      "let numbers = [1, 2, 3].map { $0 * 2 }"
    ]
  },
  go: {
    name: "Go",
    description: "A statically typed, compiled programming language designed at Google.",
    creator: "Robert Griesemer, Rob Pike, and Ken Thompson",
    year: 2009,
    uses: ["Cloud Services", "System Programming", "Web Services", "DevOps"],
    advantages: ["Simplicity", "Strong standard library", "Built-in concurrency", "Fast compilation"],
    disadvantages: ["Limited generics", "No exceptions", "Simple type system"],
    examples: [
      "fmt.Println('Hello, World!')",
      "func add(a, b int) int { return a + b }",
      "go func() { fmt.Println('Concurrent execution') }()"
    ]
  },
  rust: {
    name: "Rust",
    description: "A systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.",
    creator: "Graydon Hoare",
    year: 2010,
    uses: ["Systems Programming", "WebAssembly", "Network Services", "Embedded Systems"],
    advantages: ["Memory safety", "Zero-cost abstractions", "Modern tooling", "Cross-platform"],
    disadvantages: ["Steep learning curve", "Strict compiler", "Longer development time"],
    examples: [
      "fn main() {\n    println!('Hello, World!');\n}",
      "fn add(a: i32, b: i32) -> i32 { a + b }",
      "let numbers: Vec<i32> = vec![1, 2, 3];"
    ]
  },
  kotlin: {
    name: "Kotlin",
    description: "A modern programming language that makes developers happier, designed for JVM and Android.",
    creator: "JetBrains",
    year: 2011,
    uses: ["Android Development", "Server-side Development", "Cross-platform Mobile", "Web Development"],
    advantages: ["Java interoperability", "Null safety", "Concise syntax", "Modern features"],
    disadvantages: ["Compilation speed", "Learning curve for Java devs", "Smaller community"],
    examples: [
      "println('Hello, World!')",
      "fun add(a: Int, b: Int) = a + b",
      "data class User(val name: String, val age: Int)"
    ]
  }
};