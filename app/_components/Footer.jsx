"use client";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaRegNewspaper, FaEnvelope } from "react-icons/fa6"; // Add more icons as needed
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const path = usePathname();
  const menu = [
    { id: 1, name: 'About Us', path: '/about' },
    { id: 2, name: 'Contact Us', path: '/contact' },
    { id: 3, name: 'Terms & Conditions', path: '/terms' },
    { id: 4, name: 'Blog', path: '/blog' }, // New link
    { id: 5, name: 'Newsletter', path: '/newsletter' }, // New link
  ];
  
  return (
    <footer className="dark:bg-gray-900">
      <div className="mx-auto items-center max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-10">
        <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24 dark:border-gray-800">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            {menu.map((item) => (
              <Link href={item.path} key={item.id}>
                <li className="font-bold text-white text-lg transition hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 animate-pulse">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <a
                href="https://twitter.com/51Sayandip"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="text-2xl" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Sayandip-Jana-1018"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="text-2xl" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/jsayandip2003/"
                rel="noreferrer"
                target="_blank"
                className="text-white text-2xl transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin />
              </a>
            </li>

            <li>
              <a
                href="https://example.com/blog" // Change to your actual blog link
                rel="noreferrer"
                target="_blank"
                className="text-white text-2xl transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">Blog</span>
                <FaRegNewspaper />
              </a>
            </li>

            <li>
              <a
                href="https://example.com/newsletter" // Change to your actual newsletter link
                rel="noreferrer"
                target="_blank"
                className="text-white text-2xl transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">Newsletter</span>
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
