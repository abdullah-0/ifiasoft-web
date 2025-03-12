'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Brain, Cpu, Database, LineChart, Network, Shield } from "lucide-react";

const technologies = [
  {
    name: "TensorFlow",
    description: "Open-source machine learning framework",
    icon: Brain,
  },
  {
    name: "PyTorch",
    description: "Deep learning framework",
    icon: Network,
  },
  {
    name: "Scikit-learn",
    description: "Machine learning library",
    icon: LineChart,
  },
  {
    name: "CUDA",
    description: "Parallel computing platform",
    icon: Cpu,
  },
  {
    name: "Apache Spark",
    description: "Big data processing",
    icon: Database,
  },
  {
    name: "MLflow",
    description: "ML lifecycle management",
    icon: Shield,
  },
];

const useCases = [
  {
    title: "Predictive Analytics",
    description: "Forecast business trends and customer behavior using historical data and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Computer Vision",
    description: "Implement image recognition and processing for automated quality control and surveillance systems.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    title: "Natural Language Processing",
    description: "Build chatbots and text analysis systems for improved customer service and data extraction.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">AI Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transform your business with cutting-edge artificial intelligence and machine learning solutions.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent Solutions for Complex Problems</h2>
              <p className="text-gray-600 mb-6">
                Our AI solutions leverage the latest advancements in machine learning, deep learning, and data science to help businesses automate processes, gain insights, and make better decisions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Brain className="h-6 w-6 text-primary mr-4" />
                  <span>Custom AI model development</span>
                </li>
                <li className="flex items-center">
                  <Network className="h-6 w-6 text-primary mr-4" />
                  <span>Deep learning solutions</span>
                </li>
                <li className="flex items-center">
                  <LineChart className="h-6 w-6 text-primary mr-4" />
                  <span>Predictive analytics</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80"
                alt="AI Development"
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
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
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

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-600">Gathering and preparing quality data for model training</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Model Development</h3>
              <p className="text-gray-600">Creating and training custom AI models</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Testing & Validation</h3>
              <p className="text-gray-600">Rigorous testing to ensure accuracy and reliability</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-gray-600">Seamless integration with existing systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Implement AI in Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your business goals.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}