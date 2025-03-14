'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Monitor, Cpu, Database, Settings, Shield, Zap } from "lucide-react";

const technologies = [
  {
    name: "Cross-Platform Development",
    description: "Build once, run everywhere solutions",
    icon: Monitor,
  },
  {
    name: "Native Performance",
    description: "Optimized for system resources",
    icon: Cpu,
  },
  {
    name: "Data Management",
    description: "Robust local data handling",
    icon: Database,
  },
  {
    name: "System Integration",
    description: "Seamless OS integration",
    icon: Settings,
  },
  {
    name: "Security",
    description: "Enterprise-grade protection",
    icon: Shield,
  },
  {
    name: "Performance",
    description: "Lightning-fast execution",
    icon: Zap,
  },
];

const features = [
  {
    title: "Business Applications",
    description: "Custom software solutions for enterprise operations and workflow automation.",
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&q=80",
  },
  {
    title: "Development Tools",
    description: "Professional tools for developers and technical teams.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    title: "System Utilities",
    description: "Specialized utilities for system maintenance and optimization.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
];

export default function DesktopDevelopmentPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Desktop Applications</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Powerful, efficient desktop software solutions for modern businesses and professionals.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Desktop Solutions</h2>
              <p className="text-gray-600 mb-6">
                We develop high-performance desktop applications that streamline workflows, enhance productivity, and deliver exceptional user experiences across all major platforms.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Monitor className="h-6 w-6 text-primary mr-4" />
                  <span>Cross-platform compatibility</span>
                </li>
                <li className="flex items-center">
                  <Cpu className="h-6 w-6 text-primary mr-4" />
                  <span>Native system integration</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-4" />
                  <span>Enterprise-grade security</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&q=80"
                alt="Desktop Development"
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
          <h2 className="text-3xl font-bold text-center mb-12">Technologies & Capabilities</h2>
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
              <h3 className="text-xl font-semibold mb-2">Requirements</h3>
              <p className="text-gray-600">Detailed analysis and planning</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Architecture</h3>
              <p className="text-gray-600">System design and technology selection</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Iterative development and testing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-gray-600">Distribution and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Desktop Application?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create powerful desktop software for your business.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}