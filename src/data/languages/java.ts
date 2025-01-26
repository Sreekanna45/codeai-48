import { LanguageNote } from '../types';

export const javaNotes: LanguageNote = {
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
};