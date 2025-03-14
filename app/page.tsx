'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Code2, Smartphone, Monitor, Gamepad, Brain, Megaphone, ArrowRight, Mail, Phone, MapPin, Star } from "lucide-react";
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

const testimonials = [
  {
    text: "IfiaSoft transformed our business with their innovative solutions. Their team's expertise and dedication were exceptional.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    rating: 5
  },
  {
    text: "Working with IfiaSoft was a game-changer for our startup. They delivered beyond our expectations and within budget.",
    author: "Michael Chen",
    position: "CEO, StartupX",
    company: "StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    rating: 5
  },
  {
    text: "The AI solution developed by IfiaSoft increased our efficiency by 300%. They're true innovators in their field.",
    author: "Emily Rodriguez",
    position: "Head of Innovation, DataTech",
    company: "DataTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    rating: 5
  }
];

const products = [
  {
    title: "CloudFlow",
    description: "Cloud-based workflow automation platform",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    features: ["Automated Workflows", "Real-time Analytics", "Team Collaboration"],
    price: "Starting at $49/month"
  },
  {
    title: "SecureGuard",
    description: "Enterprise-grade security management system",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    features: ["Threat Detection", "Access Control", "Compliance Management"],
    price: "Starting at $199/month"
  },
  {
    title: "DataInsight",
    description: "AI-powered business analytics platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: ["Predictive Analytics", "Custom Reports", "Data Visualization"],
    price: "Starting at $149/month"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="h-[90vh] relative">
        <Slider className="w-full h-full">
          {/* Services Slide */}
          <div className="relative w-full h-[90vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative h-full flex items-center justify-center z-10">
                <div className="container mx-auto px-4 text-center text-white">
                  <Image
                    src="/logo.png"
                    alt="IfiaSoft Logo"
                    width={150}
                    height={150}
                    className="mx-auto mb-8"
                  />
                  <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                  <p className="text-xl mb-8">Comprehensive software solutions for your business needs</p>
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {services.slice(0, 3).map((service, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                        <div className="text-white">{service.icon}</div>
                        <h3 className="text-lg font-semibold my-2">{service.title}</h3>
                        <p className="text-sm text-white/80">{service.description}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" className="mt-8" variant="secondary">
                    <Link href="/services">Explore All Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Slide */}
          <div className="relative w-full h-[90vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600">
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative h-full flex items-center justify-center z-10">
                <div className="container mx-auto px-4 text-center text-white">
                  <h1 className="text-5xl font-bold mb-6">Featured Projects</h1>
                  <p className="text-xl mb-8">Innovative solutions that drive business success</p>
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {products.map((product, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden">
                        <div className="relative h-40">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                          <p className="text-sm text-white/80">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" className="mt-8" variant="secondary">
                    <Link href="/portfolio">View Portfolio</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Slide */}
          <div className="relative w-full h-[90vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600">
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative h-full flex items-center justify-center z-10">
                <div className="container mx-auto px-4 text-center text-white">
                  <h1 className="text-5xl font-bold mb-6">Client Success Stories</h1>
                  <p className="text-xl mb-8">Hear what our clients say about working with us</p>
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-sm mb-4">"{testimonial.text}"</blockquote>
                        <div className="flex items-center justify-center">
                          <div className="relative w-10 h-10 mr-3">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="text-left">
                            <p className="font-semibold text-sm">{testimonial.author}</p>
                            <p className="text-xs text-white/80">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" className="mt-8" variant="secondary">
                    <Link href="/contact">Work With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="outline" asChild className="mt-auto">
                  <Link href={service.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="font-semibold text-primary">{product.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6">"{testimonial.text}"</blockquote>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
    </div>
  );
}