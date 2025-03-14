import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, CheckCircle2, Users } from "lucide-react";
import { notFound } from "next/navigation";

const portfolioProjects = {
  "ai-analytics": {
    title: "AI-Powered Analytics Platform",
    client: "DataSmart Analytics",
    duration: "8 months",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "AI Solutions",
    description: "A comprehensive business intelligence platform that leverages artificial intelligence to provide predictive analytics and actionable insights for enterprise clients.",
    challenge: "DataSmart Analytics needed a scalable solution that could process massive amounts of data in real-time while providing accurate predictions and insights for business decision-making.",
    solution: "We developed a sophisticated AI-powered analytics platform using cutting-edge technologies and machine learning algorithms. The solution includes real-time data processing, predictive modeling, and an intuitive dashboard for data visualization.",
    features: [
      "Real-time data processing and analysis",
      "Machine learning-based predictive analytics",
      "Interactive data visualization dashboard",
      "Automated report generation",
      "Custom alert system",
      "API integration capabilities"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "AWS",
      "PostgreSQL",
      "Docker"
    ],
    results: [
      "40% reduction in data processing time",
      "95% accuracy in predictive models",
      "60% increase in user productivity",
      "Successful integration with existing systems"
    ],
    testimonial: {
      text: "The AI analytics platform has transformed how we make decisions. The insights provided are invaluable to our business operations.",
      author: "Sarah Johnson",
      position: "CTO, DataSmart Analytics"
    }
  },
  "e-commerce-platform": {
    title: "E-Commerce Platform",
    client: "RetailTech Solutions",
    duration: "6 months",
    year: "2023",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    category: "Web Development",
    description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and analytics dashboard.",
    challenge: "RetailTech Solutions needed a modern e-commerce platform that could handle high traffic and provide a seamless shopping experience.",
    solution: "We built a scalable e-commerce platform with advanced features like real-time inventory tracking, secure payment processing, and comprehensive analytics.",
    features: [
      "Real-time inventory management",
      "Secure payment processing",
      "Advanced search functionality",
      "Customer account management",
      "Order tracking system",
      "Analytics dashboard"
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "AWS"
    ],
    results: [
      "50% increase in conversion rate",
      "30% reduction in cart abandonment",
      "99.9% uptime",
      "200% increase in sales"
    ],
    testimonial: {
      text: "The new e-commerce platform has exceeded our expectations. Our sales have doubled since launch.",
      author: "Michael Chen",
      position: "CEO, RetailTech Solutions"
    }
  },
  "fitness-app": {
    title: "Fitness Tracking App",
    client: "FitLife Inc.",
    duration: "4 months",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    category: "Mobile Development",
    description: "Mobile application for tracking workouts, nutrition, and personal fitness goals with social features.",
    challenge: "FitLife Inc. wanted to create an engaging fitness app that would help users track their progress and stay motivated.",
    solution: "We developed a comprehensive fitness tracking app with social features, personalized workout plans, and AI-powered form detection.",
    features: [
      "Workout tracking",
      "Nutrition logging",
      "Social networking",
      "Progress analytics",
      "AI form detection",
      "Personalized recommendations"
    ],
    technologies: [
      "React Native",
      "Firebase",
      "TensorFlow",
      "Node.js",
      "MongoDB",
      "Google Cloud"
    ],
    results: [
      "1M+ downloads in first month",
      "4.8/5 average rating",
      "85% user retention rate",
      "45% increase in user engagement"
    ],
    testimonial: {
      text: "The app has revolutionized how our users approach fitness. The social features and AI capabilities set us apart from competitors.",
      author: "Lisa Thompson",
      position: "Product Manager, FitLife Inc."
    }
  }
};

export function generateStaticParams() {
  return Object.keys(portfolioProjects).map((id) => ({
    id,
  }));
}

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  const project = portfolioProjects[params.id as keyof typeof portfolioProjects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Button variant="outline" asChild className="mb-8">
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-gray-600">{project.challenge}</p>
              </Card>

              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-gray-600 mb-6">{project.solution}</p>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold">{result}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Client Testimonial</h3>
                <blockquote className="border-l-4 border-primary pl-4">
                  <p className="italic text-gray-600 mb-4">{project.testimonial.text}</p>
                  <footer>
                    <p className="font-semibold">{project.testimonial.author}</p>
                    <p className="text-sm text-gray-500">{project.testimonial.position}</p>
                  </footer>
                </blockquote>
              </Card>
            </div>
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