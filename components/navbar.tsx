'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="IfiaSoft Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold">IfiaSoft</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary">Services</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary">Portfolio</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary">Blog</Link>
            <Link href="/careers" className="text-gray-700 hover:text-primary">Careers</Link>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Button
                asChild
                className="w-full mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}