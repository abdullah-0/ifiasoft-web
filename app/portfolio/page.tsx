'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Calendar, Star } from "lucide-react";

const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    category: "Web Development",
    client: "RetailTech Solutions",
    duration: "6 months",
    rating: 5,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    link: "/portfolio/e-commerce-platform"
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and personal fitness goals with social features.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    category: "Mobile Development",
    client: "FitLife Inc.",
    duration: "4 months",
    rating: 5,
    technologies: ["React Native", "Firebase", "TensorFlow"],
    link: "/portfolio/fitness-app"
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    description: "Business intelligence platform using AI to provide predictive analytics and actionable insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "AI Solutions",
    client: "DataSmart Analytics",
    duration: "8 months",
    rating: 5,
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    link: "/portfolio/ai-analytics"
  },
  {
    id: 4,
    title: "Virtual Reality Game",
    description: "Immersive VR game experience with realistic physics and multiplayer capabilities.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80",
    category: "Game Development",
    client: "GameVerse Studios",
    duration: "12 months",
    rating: 5,
    technologies: ["Unity", "C#", "Photon", "Oculus SDK"],
    link: "/portfolio/vr-game"
  },
  {
    id: 5,
    title: "Smart Home Automation",
    description: "IoT platform for controlling and monitoring smart home devices with voice commands.",
    image: "https://images.unsplash.com/photo-1558002038-bb4237b9f6a7?w=800&q=80",
    category: "IoT Development",
    client: "SmartLife Technologies",
    duration: "5 months",
    rating: 5,
    technologies: ["Node.js", "MQTT", "React", "MongoDB"],
    link: "/portfolio/smart-home"
  },
  {
    id: 6,
    title: "Educational Platform",
    description: "Online learning platform with live classes, course management, and student progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    category: "Web Development",
    client: "EduTech Solutions",
    duration: "7 months",
    rating: 5,
    technologies: ["Next.js", "Django", "PostgreSQL", "WebRTC"],
    link: "/portfolio/edu-platform"
  }
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI Solutions",
  "Game Development",
  "IoT Development"
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary">{project.category}</span>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.client}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.duration}
                    </span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={project.link}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Our team is ready to help bring your vision to life.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}