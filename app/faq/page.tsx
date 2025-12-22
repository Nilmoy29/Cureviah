'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ClientLayout from '../layout/ClientLayout';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is medical tourism?',
          a: 'Medical tourism is traveling to another country to receive medical treatment at a lower cost while maintaining or improving quality. South Korea offers world-class healthcare at 50-70% less than Western countries.'
        },
        {
          q: 'Is it safe to get medical treatment in South Korea?',
          a: 'Absolutely. South Korea has some of the world\'s best hospitals with international accreditations (JCI, ISO). Korean doctors are highly trained, many with Western certifications, and use cutting-edge technology.'
        },
        {
          q: 'Do doctors speak English?',
          a: 'Many doctors in international patient departments speak English. We also provide interpreter services throughout your treatment to ensure clear communication.'
        },
      ]
    },
    {
      category: 'Treatment & Costs',
      questions: [
        {
          q: 'How much can I save?',
          a: 'Savings vary by procedure but typically range from 50-70% compared to US/UK prices. For example, dental implants that cost $4,000+ in the US may cost $1,500-2,500 in Korea.'
        },
        {
          q: 'What treatments are available?',
          a: 'We offer comprehensive services including cosmetic surgery, dental procedures, dermatology, fertility treatments, general surgery, wellness check-ups, and traditional Korean medicine.'
        },
        {
          q: 'Will my insurance cover treatment abroad?',
          a: 'Some international insurance plans cover medical tourism. We recommend checking with your provider. We can provide all necessary documentation for insurance claims.'
        },
      ]
    },
    {
      category: 'Travel & Logistics',
      questions: [
        {
          q: 'How long should I stay?',
          a: 'Duration depends on your treatment. Simple procedures may require 3-5 days, while complex surgeries might need 2-3 weeks including recovery. We help plan optimal stay duration.'
        },
        {
          q: 'Do I need a visa?',
          a: 'Many countries have visa-free entry to South Korea for stays up to 90 days. We provide visa assistance if required for your nationality.'
        },
        {
          q: 'Where will I stay during recovery?',
          a: 'We arrange comfortable accommodation near your hospital, from recovery hotels to apartment rentals, based on your budget and recovery needs.'
        },
        {
          q: 'What about flights and airport pickup?',
          a: 'We can arrange flights if needed and provide complimentary airport pickup/drop-off service for our patients.'
        },
      ]
    },
    {
      category: 'Booking & Process',
      questions: [
        {
          q: 'How do I get started?',
          a: 'Simply contact us through our website, email, or phone. We\'ll discuss your needs, connect you with specialists, and plan your entire journey step by step.'
        },
        {
          q: 'Can I choose my own doctor?',
          a: 'Yes! You can browse our doctor directory and choose based on specialty, experience, and reviews. We can also recommend doctors based on your specific needs.'
        },
        {
          q: 'What if I need to cancel?',
          a: 'Cancellation policies vary by hospital. We recommend travel insurance that covers trip cancellations. Our team will help you understand all terms before booking.'
        },
        {
          q: 'Do you provide post-treatment support?',
          a: 'Yes, we provide follow-up care coordination, help transfer medical records to your local doctor, and remain available for any questions after you return home.'
        },
      ]
    },
  ];

  return (
    <ClientLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-20">
          <div className="container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Find answers to common questions about medical tourism in South Korea
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container-custom max-w-4xl">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={qIndex} className="card overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full text-left flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</h3>
                          <svg
                            className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our medical coordinators are here to help you with any questions
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
