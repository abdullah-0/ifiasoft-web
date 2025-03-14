'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Code2, Database, Globe, Laptop, Rocket, Shield } from "lucide-react";

const technologies = [
  {
    name: "Frontend Development",
    description: "Modern, responsive user interfaces",
    icon: Laptop,
  },
  {
    name: "Backend Development",
    description: "Scalable server architecture",
    icon: Database,
  },
  {
    name: "Full Stack Solutions",
    description: "End-to-end web applications",
    icon: Code2,
  },
  {
    name: "Web Security",
    description: "Secure application development",
    icon: Shield,
  },
  {
    name: "Performance Optimization",
    description: "Fast, efficient applications",
    icon: Rocket,
  },
  {
    name: "Global Deployment",
    description: "Worldwide accessibility",
    icon: Globe,
  },
];

const features = [
  {
    title: "Custom Web Applications",
    description: "Tailored solutions for your unique business needs with modern frameworks and technologies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "E-commerce Solutions",
    description: "Secure, scalable online stores with payment integration and inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "Progressive Web Apps",
    description: "Mobile-first applications that work offline and provide native-like experiences.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Web Development</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Create powerful, scalable web applications with cutting-edge technologies and best practices.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Modern Web Solutions for Modern Businesses</h2>
              <p className="text-gray-600 mb-6">
                Our web development services combine innovative design with robust functionality to create exceptional digital experiences that drive business growth and user engagement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Code2 className="h-6 w-6 text-primary mr-4" />
                  <span>Custom web application development</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-6 w-6 text-primary mr-4" />
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-center">
                  <Rocket className="h-6 w-6 text-primary mr-4" />
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Web Development"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <Card key={tech.name} className="p-6">
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your requirements and objectives</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Architecture and technology selection</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Agile development with regular updates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">Testing, deployment, and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Web Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create an exceptional web presence.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}