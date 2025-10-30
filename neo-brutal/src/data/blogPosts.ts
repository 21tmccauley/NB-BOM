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
    id: "placeholder-post",
    title: "Placeholder Post",
    excerpt: "This is a placeholder blog post. Replace this with your actual content.",
    content: `
# Placeholder Post

This is a placeholder blog post. Replace this with your actual content.

## Getting Started

You can edit this post in the \`blogPosts.ts\` file to add your own blog content.
    `,
    date: "Jan 1, 2025",
    category: "Placeholder",
    readTime: "1 min read",
    author: "Student",
    tags: ["placeholder"]
  },
  {
    id: "placeholder-post-2",
    title: "Placeholder Post 2",
    excerpt: "This is a placeholder blog post. Replace this with your actual content.",
    content: `
# Placeholder Post

This is a placeholder blog post. Replace this with your actual content.

## Getting Started

You can edit this post in the \`blogPosts.ts\` file to add your own blog content.
    `,
    date: "Jan 1, 2025",
    category: "Placeholder",
    readTime: "1 min read",
    author: "Student",
    tags: ["placeholder"]
  }
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}