'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Megaphone, LineChart, Search, Share2, Mail, Target } from "lucide-react";

const technologies = [
  {
    name: "SEO Optimization",
    description: "Improve search engine rankings",
    icon: Search,
  },
  {
    name: "Social Media Marketing",
    description: "Engage with your audience",
    icon: Share2,
  },
  {
    name: "Email Marketing",
    description: "Direct customer communication",
    icon: Mail,
  },
  {
    name: "Analytics & Reporting",
    description: "Data-driven insights",
    icon: LineChart,
  },
  {
    name: "Targeted Advertising",
    description: "Reach the right audience",
    icon: Target,
  },
  {
    name: "Brand Strategy",
    description: "Build your digital presence",
    icon: Megaphone,
  },
];

const features = [
  {
    title: "Search Engine Optimization",
    description: "Improve your website's visibility and ranking in search engine results.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  },
  {
    title: "Social Media Management",
    description: "Build and engage with your audience across social platforms.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
  },
  {
    title: "Content Marketing",
    description: "Create valuable content that attracts and retains customers.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Digital Marketing</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Drive growth and engagement with data-driven digital marketing strategies.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Digital Growth</h2>
              <p className="text-gray-600 mb-6">
                Our digital marketing services help businesses establish a strong online presence, reach their target audience, and achieve measurable results through data-driven strategies.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Search className="h-6 w-6 text-primary mr-4" />
                  <span>Search engine optimization (SEO)</span>
                </li>
                <li className="flex items-center">
                  <Share2 className="h-6 w-6 text-primary mr-4" />
                  <span>Social media marketing</span>
                </li>
                <li className="flex items-center">
                  <LineChart className="h-6 w-6 text-primary mr-4" />
                  <span>Performance analytics</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
                alt="Digital Marketing"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Core Strategies</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Marketing Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="text-gray-600">Market and competitor analysis</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Campaign planning and targeting</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-gray-600">Campaign implementation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">Analysis and improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}