import { LanguageNote } from '../types';

export const pythonNotes: LanguageNote = {
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
};