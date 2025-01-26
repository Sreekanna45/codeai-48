import { LanguageNote } from '../types';

export const cppNotes: LanguageNote = {
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
};