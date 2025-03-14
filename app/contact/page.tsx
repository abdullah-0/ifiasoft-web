'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Mail, Phone, MapPin, Users, Clock, Target, Zap, CheckCircle2 } from "lucide-react";

const collaborationSteps = [
  {
    title: "Initial Consultation",
    description: "We begin with a detailed discussion of your project requirements, goals, and vision.",
    icon: Users,
  },
  {
    title: "Project Planning",
    description: "Our team creates a comprehensive project plan including timeline, milestones, and deliverables.",
    icon: Target,
  },
  {
    title: "Development & Updates",
    description: "Regular development sprints with continuous feedback and progress updates.",
    icon: Clock,
  },
  {
    title: "Launch & Support",
    description: "Smooth deployment and ongoing support to ensure your project's success.",
    icon: Zap,
  },
];

const collaborationBenefits = [
  "Transparent Communication",
  "Agile Development Methodology",
  "Regular Progress Updates",
  "Quality Assurance",
  "Technical Support",
  "Post-Launch Maintenance",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise in software development and digital innovation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@ifiasoft.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Office Location"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Collaboration Model</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {collaborationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Work With Us</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {collaborationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}