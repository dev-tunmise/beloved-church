'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/sermons', label: 'SERMONS' },
    { href: '/blog', label: 'BLOG' },
    { href: '/tdgi', label: 'TDGI' },
    { href: '/giving', label: 'GIVING' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-dark-purple text-white shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-20 h-20 md:w-24 md:h-24 group-hover:scale-110 transition-transform">
              <Image
                src="/images/beloved-logo.png"
                alt="Beloved New Beginning Ministries"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-medium transition-all duration-200 text-gray-300 hover:text-white group"
              >
                <span
                  className={`transition-all duration-200 ${
                    isActive(link.href)
                      ? 'border-b-2 border-gold px-1 pb-1'
                      : 'border-b-2 border-transparent px-1 pb-1 group-hover:border-gold'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-gold text-dark-purple shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
