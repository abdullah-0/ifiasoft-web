'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Code2, Smartphone, Monitor, Gamepad, Brain, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development",
      "Performance Optimization"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "App Store Optimization",
      "Mobile UI/UX Design",
      "Push Notifications"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  },
  {
    icon: <Monitor className="h-12 w-12 text-primary" />,
    title: "Desktop Applications",
    description: "Powerful desktop software solutions",
    features: [
      "Cross-platform Desktop Apps",
      "System Integration",
      "Custom Software",
      "Legacy System Updates",
      "Performance Optimization",
      "Automated Testing"
    ],
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&q=80"
  },
  {
    icon: <Gamepad className="h-12 w-12 text-primary" />,
    title: "Game Development",
    description: "Engaging gaming experiences across platforms",
    features: [
      "Unity Development",
      "Unreal Engine",
      "Mobile Games",
      "VR/AR Experiences",
      "Game Design",
      "Multiplayer Integration"
    ],
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&q=80"
  },
  {
    icon: <Brain className="h-12 w-12 text-primary" />,
    title: "AI Solutions",
    description: "Intelligent automation and machine learning",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Integration",
      "Custom AI Models"
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80"
  },
  {
    icon: <Megaphone className="h-12 w-12 text-primary" />,
    title: "Digital Marketing",
    description: "Strategic digital presence and growth",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Optimization"
    ],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive software development and digital solutions to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative h-[400px] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with our comprehensive suite of services.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}