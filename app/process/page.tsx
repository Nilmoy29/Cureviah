'use client';

import React from 'react';
import Link from 'next/link';
import ClientLayout from '../layout/ClientLayout';

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Planning',
      description: 'Contact us with your medical needs. Our coordinators will help you choose the right treatment, doctor, and destination.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Medical Assessment',
      description: 'Share your medical records. Get online consultation with specialists and receive detailed treatment plan with transparent pricing.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Travel Arrangements',
      description: 'We handle all logistics: visa assistance, flight bookings, accommodation near hospital, and airport pickup.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Arrival & Treatment',
      description: 'Upon arrival, our local team assists with hospital check-in, interpreter services, and ensures smooth treatment process.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Recovery & Tourism',
      description: 'Comfortable recovery in selected accommodation. Explore tourist attractions with our concierge service while you heal.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Follow-up Care',
      description: 'Return home with complete medical records. We coordinate with your local doctor for ongoing care and support.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <ClientLayout>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-20">
          <div className="container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Your medical journey in 6 simple steps
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200" style={{ height: 'calc(100% + 3rem)' }}></div>
                      )}
                    </div>
                    
                    <div className="ml-8 flex-1 card">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mr-4">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Handle */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Handle For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Medical Coordination', items: ['Doctor selection', 'Appointment scheduling', 'Medical records translation', 'Treatment planning'] },
                { title: 'Travel Logistics', items: ['Visa assistance', 'Flight booking', 'Airport transfers', 'Accommodation'] },
                { title: 'On-Ground Support', items: ['Hospital liaison', 'Interpreter services', 'Concierge support', '24/7 assistance'] },
                { title: 'Post-Treatment', items: ['Follow-up coordination', 'Medical record transfer', 'Local doctor liaison', 'Ongoing support'] },
              ].map((category, index) => (
                <div key={index} className="card">
                  <h3 className="font-bold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your medical journey today with a free consultation
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50">
              Get Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
