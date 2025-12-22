'use client';

import React from 'react';
import Link from 'next/link';
import ClientLayout from '../layout/ClientLayout';

export default function PrivacyPage() {
  return (
    <ClientLayout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom max-w-4xl">
          <div className="card">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Personal Information:</strong> Name, email, phone number, date of birth, nationality</li>
                <li><strong>Medical Information:</strong> Medical history, treatment preferences, health conditions</li>
                <li><strong>Payment Information:</strong> Billing details for service fees</li>
                <li><strong>Usage Data:</strong> How you interact with our platform</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Facilitate medical consultations and appointments</li>
                <li>Coordinate with healthcare providers on your behalf</li>
                <li>Arrange travel and accommodation services</li>
                <li>Improve our services and user experience</li>
                <li>Send important updates about your medical journey</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Healthcare providers for treatment purposes</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We never sell your personal information to third parties.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your personal and medical information. All sensitive data is encrypted during transmission and storage.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access your personal information</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                As we operate internationally, your information may be transferred to and processed in South Korea and other countries. We ensure appropriate safeguards are in place for such transfers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to improve your experience. See our <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link> for more details.
              </p>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Questions about Privacy?</h3>
                <p className="text-gray-600 mb-4">
                  For privacy-related inquiries or to exercise your rights, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
