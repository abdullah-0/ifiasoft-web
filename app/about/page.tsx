'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Trophy, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About IfiaSoft</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We are a passionate team of developers, designers, and innovators dedicated to transforming ideas into exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">4+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Team Members</p>
            </Card>
            <Card className="p-6 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">200+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">150+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, IfiaSoft emerged from a vision to bridge the gap between innovative ideas and technological excellence. Our journey began with a small team of passionate developers, and today we've grown into a full-service software development company.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in pushing the boundaries of what's possible in software development while maintaining the highest standards of quality and client satisfaction.
              </p>
              <Button asChild>
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Client Success</h3>
              <p className="text-gray-600">
                Your success is our success. We're committed to delivering solutions that drive real business value.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in code quality, security, and user experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life with our expertise and dedication.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}