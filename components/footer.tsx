'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo-white.png"
              alt="IfiaSoft Logo"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-gray-400">Transforming ideas into digital reality since 2020</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Healthcare</li>
              <li>Finance</li>
              <li>Education</li>
              <li>E-commerce</li>
              <li>Manufacturing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/ifiasoft" className="hover:text-primary transition-colors">Twitter</Link>
              <Link href="https://linkedin.com/company/ifiasoft" className="hover:text-primary transition-colors">LinkedIn</Link>
              <Link href="https://github.com/ifiasoft" className="hover:text-primary transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IfiaSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}