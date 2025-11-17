'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { LanguageSwitcher } from './language-switcher';
import { useTranslations, useLocale } from 'next-intl';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/sermons', label: t('sermons') },
    { 
      href: '#', 
      label: t('resources.title'), 
      isDropdown: true,
      dropdownItems: [
        { href: '/blog', label: t('resources.blog') },
        { href: '/event-hall-booking', label: t('resources.eventHall') },
        { href: '/giving#prayer', label: t('resources.prayerRequest') },
        // { href: '#', label: t('resources.deliverance'), isPlaceholder: true },
      ]
    },
    { href: '/tdgi', label: t('tdgi') },
    { href: '/giving', label: t('giving') },
    { href: '/contact', label: t('contact') },
  ];

  const resourcesLinks = navLinks.find(link => link.isDropdown)?.dropdownItems || [];

  const isActive = (path: string) => pathname === path;
  const isResourceActive = () => resourcesLinks.some(link => pathname.includes(link.href) && link.href !== '#');

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
              link.isDropdown ? (
                <div 
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  <button
                    className="px-4 py-2 font-medium transition-all duration-200 text-gray-300 hover:text-white uppercase flex justify-center items-center gap-1"
                  >
                    <span
                      className={`transition-all duration-200 ${
                        isResourceActive()
                          ? 'border-b-2 border-gold px-1'
                          : 'border-b-2 border-transparent px-1 group-hover:border-gold justify-center items-center'
                      }`}
                    >
                      {link.label}
                    </span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isResourcesOpen && (
                    <div className="absolute top-full left-0 mt-s w-64 bg-dark-purple/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gold/30 py-2 z-50">
                      {link.dropdownItems?.map((item: any) => (
                        <Link
                          key={item.href}
                          href={item.isPlaceholder ? '#' : item.href}
                          className={`block px-5 py-3 text-sm font-medium transition-all duration-200 ${
                            item.isPlaceholder
                              ? 'text-gray-500 cursor-not-allowed'
                              : 'text-gray-300 hover:bg-gold/20 hover:text-white hover:pl-6 border-l-2 border-transparent hover:border-gold'
                          }`}
                          onClick={(e) => item.isPlaceholder && e.preventDefault()}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            {item.isPlaceholder && (
                              <span className="text-xs text-gray-500 italic">(Coming Soon)</span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-medium transition-all duration-200 text-gray-300 hover:text-white group uppercase"
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
              )
            ))}
            
            <div className="ml-3 pl-3 border-l border-white/20">
              <LanguageSwitcher />
            </div>
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
              link.isDropdown ? (
                <div key={link.label} className="pt-2">
                  <button
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium transition-all duration-200 uppercase ${
                      isResourceActive()
                        ? 'bg-gold text-dark-purple shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isResourcesOpen && (
                    <div className="my-4 ml-4 space-y-1 bg-dark-purple/50 round p-2 border-l-2 border-gold">
                      {link.dropdownItems?.map((item: any) => (
                        <Link
                          key={item.href}
                          href={item.isPlaceholder ? '#' : item.href}
                          className={`block py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                            item.isPlaceholder
                              ? 'text-gray-500 cursor-not-allowed'
                              : 'text-gray-400 hover:text-white hover:bg-gold/20'
                          }`}
                          onClick={(e) => {
                            if (item.isPlaceholder) {
                              e.preventDefault();
                            } else {
                              setIsOpen(false);
                              setIsResourcesOpen(false);
                            }
                          }}
                        >
                          {item.label}
                          {item.isPlaceholder && (
                            <span className="ml-2 text-xs">(Soon)</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 uppercase ${
                    isActive(link.href)
                      ? 'bg-gold text-dark-purple shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <div className="px-4 pt-3 border-t border-white/20 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 uppercase tracking-wide">Language</span>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
