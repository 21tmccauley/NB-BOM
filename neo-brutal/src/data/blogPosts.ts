export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  author: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "Mosiah-4",
    title: "How The Gospel Changes our Lives and Society",
    excerpt: "Mosiah chapter 4 explains how the gospel changes our lives and society.",
    content: `
# How The Gospel Changes our Lives and Society

Mosiah chapter 4 explains how the gospel changes our lives and society.

## Getting Started

You can edit this post in the \`blogPosts.ts\` file to add your own blog content.
    `,
    date: "November 6, 2025",
    category: "Book of Mormon",
    readTime: "1 min read",
    author: "Student",
    tags: ["Gospel", "Mosiah", "4"]
  },
  {
    id: "Mosiah-Noah-Leadership",
    title: "Leadership Principles from Mosiah and Noah",
    excerpt: "King Mosiah and Noah provide valuable leadership principles for us to follow.",
    content: `
# Leadership Principles from Mosiah and Noah

Leadership principles from Mosiah and Noah.

## Getting Started
    `,
    date: "November 6, 2025",
    category: "Book of Mormon",
    readTime: "1 min read",
    author: "Student",
    tags: ["Leadership", "Mosiah", "Noah"]
  }
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}