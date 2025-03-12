'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Monitor, Gamepad, Brain, Megaphone, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    link: "/services/web-development"
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    link: "/services/mobile-development"
  },
  {
    icon: <Monitor className="h-12 w-12 text-primary" />,
    title: "Desktop Applications",
    description: "Powerful desktop software solutions",
    link: "/services/desktop-development"
  },
  {
    icon: <Gamepad className="h-12 w-12 text-primary" />,
    title: "Game Development",
    description: "Engaging gaming experiences across platforms",
    link: "/services/game-development"
  },
  {
    icon: <Brain className="h-12 w-12 text-primary" />,
    title: "AI Solutions",
    description: "Intelligent automation and machine learning",
    link: "/services/ai-solutions"
  },
  {
    icon: <Megaphone className="h-12 w-12 text-primary" />,
    title: "Digital Marketing",
    description: "Strategic digital presence and growth",
    link: "/services/digital-marketing"
  }
];

const portfolioProjects = [
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    category: "Web Development",
    link: "/portfolio/e-commerce-platform"
  },
  {
    title: "Fitness Tracking App",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    category: "Mobile Development",
    link: "/portfolio/fitness-app"
  },
  {
    title: "AI-Powered Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "AI Solutions",
    link: "/portfolio/ai-analytics"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <Image
            src="/logo.png"
            alt="IfiaSoft Logo"
            width={150}
            height={150}
            className="mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold mb-6">Transforming Ideas into Digital Reality</h1>
          <p className="text-xl mb-8">Your trusted partner in software development and digital innovation</p>
          <Button asChild size="lg">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="outline" asChild>
                  <Link href={service.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Link key={index} href={project.link} className="group">
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-primary mb-2">{project.category}</p>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <p>contact@ifiasoft.com</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <p>123 Tech Street, Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full p-2 border rounded"></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo-white.png"
                alt="IfiaSoft Logo"
                width={120}
                height={120}
                className="mb-4"
              />
              <p className="text-gray-400">Transforming ideas into digital reality since 2020</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Healthcare</li>
                <li>Finance</li>
                <li>Education</li>
                <li>E-commerce</li>
                <li>Manufacturing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link href="https://twitter.com/ifiasoft" className="hover:text-primary">Twitter</Link>
                <Link href="https://linkedin.com/company/ifiasoft" className="hover:text-primary">LinkedIn</Link>
                <Link href="https://github.com/ifiasoft" className="hover:text-primary">GitHub</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IfiaSoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}