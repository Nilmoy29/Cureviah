'use client';

import React from 'react';
import Link from 'next/link';
import ClientLayout from '../layout/ClientLayout';

export default function TermsPage() {
  return (
    <ClientLayout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom max-w-4xl">
          <div className="card">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Cureviah's services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                Cureviah is a medical tourism platform that connects international patients with certified hospitals and medical providers in South Korea. We facilitate:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Doctor and hospital selection</li>
                <li>Medical consultation coordination</li>
                <li>Travel and accommodation assistance</li>
                <li>Medical tourism support services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Medical Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                Cureviah is not a medical provider and does not provide medical advice, diagnosis, or treatment. All medical services are provided by independent healthcare providers and facilities. Users are responsible for making their own informed decisions regarding medical treatment.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">Users agree to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide accurate and complete medical information</li>
                <li>Follow all medical provider instructions</li>
                <li>Make timely payments for services rendered</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Cureviah shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, or for cost of procurement of substitute services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform.
              </p>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Questions about our Terms?</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
