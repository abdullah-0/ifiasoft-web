'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, Zap, Cloud, Lock, Palette, Share2 } from "lucide-react";

const technologies = [
  {
    name: "iOS Development",
    description: "Native iOS apps with Swift and SwiftUI",
    icon: Smartphone,
  },
  {
    name: "Android Development",
    description: "Native Android apps with Kotlin",
    icon: Zap,
  },
  {
    name: "Cross-Platform",
    description: "React Native and Flutter solutions",
    icon: Share2,
  },
  {
    name: "Cloud Integration",
    description: "Seamless backend connectivity",
    icon: Cloud,
  },
  {
    name: "App Security",
    description: "Enterprise-grade protection",
    icon: Lock,
  },
  {
    name: "UI/UX Design",
    description: "Intuitive user experiences",
    icon: Palette,
  },
];

const features = [
  {
    title: "Native Mobile Apps",
    description: "High-performance native applications for iOS and Android platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    title: "Cross-Platform Solutions",
    description: "Cost-effective apps that work seamlessly across multiple platforms.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80",
  },
  {
    title: "Enterprise Mobile Solutions",
    description: "Secure, scalable applications for business operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Mobile Development</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Create powerful, engaging mobile applications that deliver exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transform Your Mobile Presence</h2>
              <p className="text-gray-600 mb-6">
                Our mobile development team creates innovative, user-centric applications that help businesses connect with their audience and streamline operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Smartphone className="h-6 w-6 text-primary mr-4" />
                  <span>Native iOS and Android development</span>
                </li>
                <li className="flex items-center">
                  <Share2 className="h-6 w-6 text-primary mr-4" />
                  <span>Cross-platform solutions</span>
                </li>
                <li className="flex items-center">
                  <Cloud className="h-6 w-6 text-primary mr-4" />
                  <span>Cloud integration and offline capabilities</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                alt="Mobile Development"
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
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Platform selection and feature planning</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">UI/UX design and prototyping</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Agile development and testing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-gray-600">App store submission and launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create an exceptional mobile experience.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}