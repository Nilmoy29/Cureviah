'use client';

import React from 'react';
import Link from 'next/link';
import ClientLayout from '../layout/ClientLayout';

export default function CookiesPage() {
  return (
    <ClientLayout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom max-w-4xl">
          <div className="card">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Performance Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Functional Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies allow us to remember choices you make and provide enhanced, personalized features.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. Marketing Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. However, limiting cookies may impact your experience of our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing features</li>
                <li>Payment processors for secure transactions</li>
              </ul>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Questions about Cookies?</h3>
                <p className="text-gray-600 mb-4">
                  If you have questions about our use of cookies, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
