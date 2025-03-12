'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next in 2025",
    excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI-driven development to WebAssembly innovations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    author: "John Smith",
    date: "April 15, 2024",
    readTime: "5 min read",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Building Scalable Mobile Applications with React Native",
    excerpt: "Learn best practices and architectural patterns for developing high-performance mobile applications that can scale with your business needs.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    author: "Sarah Johnson",
    date: "April 12, 2024",
    readTime: "7 min read",
    category: "Mobile Development"
  },
  {
    id: 3,
    title: "AI in Software Development: Practical Applications",
    excerpt: "Discover how artificial intelligence is revolutionizing software development processes and improving developer productivity.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    author: "Mike Wilson",
    date: "April 10, 2024",
    readTime: "6 min read",
    category: "AI & Machine Learning"
  },
  {
    id: 4,
    title: "The Complete Guide to Modern Game Development",
    excerpt: "From Unity to Unreal Engine, explore the tools and techniques driving modern game development forward.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&q=80",
    author: "Emily Chen",
    date: "April 8, 2024",
    readTime: "8 min read",
    category: "Game Development"
  },
  {
    id: 5,
    title: "Digital Marketing Strategies for Tech Companies",
    excerpt: "Learn effective digital marketing techniques specifically tailored for technology companies and software products.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    author: "Alex Turner",
    date: "April 5, 2024",
    readTime: "4 min read",
    category: "Digital Marketing"
  },
  {
    id: 6,
    title: "Securing Modern Web Applications",
    excerpt: "Essential security practices and implementations for protecting web applications in today's threat landscape.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    author: "David Brown",
    date: "April 3, 2024",
    readTime: "6 min read",
    category: "Security"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">IfiaSoft Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team of experts on software development, technology trends, and digital innovation.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="inline-flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="text-sm font-medium text-primary">{post.category}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates in software development and technology.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}