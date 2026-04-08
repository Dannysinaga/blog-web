export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  thumbnail: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    description:
      "Learn how to set up a modern React application with TypeScript and Vite for optimal development experience.",
    content: `TypeScript has become an essential tool in modern web development. When combined with React, it provides type safety and better developer experience. In this comprehensive guide, we'll explore how to set up a React project with TypeScript using Vite as our build tool.

Vite offers lightning-fast hot module replacement and optimized builds. The combination of React, TypeScript, and Vite creates a powerful development environment that scales well for projects of any size.

We'll cover everything from initial setup to advanced TypeScript patterns in React components. You'll learn about prop types, state management with TypeScript, and how to leverage type inference for cleaner code.`,
    author: "Sarah Johnson",
    date: "2024-03-10",
    thumbnail:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    description:
      "Discover the power of utility-first CSS with Tailwind and create beautiful, responsive designs effortlessly.",
    content: `Tailwind CSS has revolutionized the way we write CSS. Instead of writing custom CSS classes, Tailwind provides utility classes that you can compose to build any design directly in your markup.

The utility-first approach might seem unusual at first, but it offers incredible benefits. You can build complex designs without leaving your HTML, maintain consistency across your project, and avoid the pitfalls of CSS specificity issues.

In this article, we'll explore Tailwind's core concepts, best practices for organizing your styles, and how to customize Tailwind to match your design system. We'll also cover responsive design patterns and how to create reusable component classes.`,
    author: "Michael Chen",
    date: "2024-03-08",
    thumbnail:
      "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    title: "Building Scalable Web Applications",
    description:
      "Best practices and architectural patterns for building web applications that scale with your business.",
    content: `Scalability is crucial for modern web applications. As your user base grows, your application needs to handle increased load without compromising performance or user experience.

This guide covers architectural patterns that enable scalability. We'll discuss microservices, serverless architectures, and how to design your frontend to handle growth. You'll learn about code splitting, lazy loading, and optimizing your bundle size.

We'll also explore database scaling strategies, caching mechanisms, and how to monitor your application's performance. These techniques will help you build applications that can grow from hundreds to millions of users.`,
    author: "Emily Rodriguez",
    date: "2024-03-05",
    thumbnail:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    title: "Modern JavaScript Features You Should Know",
    description:
      "Explore the latest JavaScript features that will make your code cleaner and more efficient.",
    content: `JavaScript continues to evolve with new features that make development more productive and enjoyable. ES2024 brings exciting additions to the language that every developer should know.

We'll explore optional chaining, nullish coalescing, and how these features simplify handling undefined values. You'll learn about async/await patterns, the power of destructuring, and modern array methods that replace verbose loops.

This article also covers module syntax, class syntax improvements, and how to use these features while maintaining browser compatibility. By the end, you'll be writing more concise and maintainable JavaScript code.`,
    author: "David Park",
    date: "2024-03-02",
    thumbnail:
      "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "5",
    title: "State Management in React",
    description:
      "Compare different state management solutions and learn when to use each approach in your React applications.",
    content: `State management is one of the most debated topics in React development. With so many options available, choosing the right solution can be overwhelming.

We'll compare popular state management libraries like Redux, Zustand, and Jotai. You'll learn about React's built-in solutions including Context API and the new useReducer hook. Each approach has its strengths and ideal use cases.

This comprehensive guide will help you understand when to use local state, when to lift state up, and when you need a global state management solution. We'll also cover performance considerations and best practices for keeping your state management clean and maintainable.`,
    author: "Lisa Anderson",
    date: "2024-02-28",
    thumbnail:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "6",
    title: "Responsive Design Principles",
    description:
      "Master the art of creating websites that look great on any device with these responsive design techniques.",
    content: `Responsive design is no longer optional in today's multi-device world. Your website needs to provide an excellent experience whether users are on a phone, tablet, or desktop computer.

This guide covers the fundamental principles of responsive design. We'll explore mobile-first development, flexible grids, and how to use media queries effectively. You'll learn about responsive typography and how to handle images at different screen sizes.

We'll also discuss modern CSS features like Grid and Flexbox that make responsive layouts easier than ever. By following these principles, you'll create websites that adapt beautifully to any screen size.`,
    author: "James Wilson",
    date: "2024-02-25",
    thumbnail:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];
