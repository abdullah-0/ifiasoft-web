'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, MapPin, Clock, DollarSign, GraduationCap, Users, Heart, Coffee, Laptop, Zap } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $180,000",
    description: "We're looking for an experienced Full Stack Developer to join our engineering team and help build innovative solutions for our clients.",
    requirements: [
      "7+ years of experience in web development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Understanding of DevOps practices",
      "Excellent problem-solving skills"
    ]
  },
  {
    title: "Mobile Developer (iOS/Android)",
    department: "Mobile Development",
    location: "Remote / New York, NY",
    type: "Full-time",
    salary: "$100,000 - $160,000",
    description: "Join our mobile team to create cutting-edge applications for iOS and Android platforms using React Native and native technologies.",
    requirements: [
      "5+ years of mobile development experience",
      "Proficiency in React Native",
      "Experience with native iOS/Android development",
      "Understanding of mobile UI/UX principles",
      "Knowledge of app store deployment processes"
    ]
  },
  {
    title: "AI/ML Engineer",
    department: "AI Solutions",
    location: "Remote / Boston, MA",
    type: "Full-time",
    salary: "$130,000 - $190,000",
    description: "Help us build the next generation of AI-powered solutions for our enterprise clients using cutting-edge machine learning technologies.",
    requirements: [
      "MS/PhD in Computer Science or related field",
      "Strong background in machine learning",
      "Experience with TensorFlow/PyTorch",
      "Knowledge of deep learning architectures",
      "Published research is a plus"
    ]
  }
];

const benefits = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, and vision coverage for you and your family"
  },
  {
    icon: <Coffee className="h-8 w-8 text-primary" />,
    title: "Work-Life Balance",
    description: "Flexible working hours, unlimited PTO, and remote work options"
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Learning & Development",
    description: "Annual learning budget, conference attendance, and skill development programs"
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Equipment",
    description: "Latest hardware and software to help you do your best work"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Team Events",
    description: "Regular team building activities, retreats, and social events"
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Career Growth",
    description: "Clear career progression paths and mentorship opportunities"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Build the future of technology with us. We're always looking for talented individuals who share our passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Life at IfiaSoft</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                At IfiaSoft, we believe in creating an environment where innovation thrives and every team member can make a meaningful impact. Our culture is built on collaboration, continuous learning, and work-life balance.
              </p>
              <p className="text-lg text-gray-600">
                We value diversity, encourage creativity, and support professional growth. Join us in building cutting-edge solutions that transform businesses and improve lives.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
                alt="Office culture"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {job.salary}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <Button>Apply Now</Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}