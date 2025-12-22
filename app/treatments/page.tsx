'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ClientLayout from '../layout/ClientLayout';

export default function TreatmentsPage() {
  const treatmentCategories = [
    {
      name: 'Dental Procedures',
      slug: 'dental',
      description: 'From routine care to advanced implants and cosmetic dentistry, Korean dental clinics offer precision and affordability.',
      imageUrl: '/images/dental.jpg',
      procedures: ['Dental Implants', 'Veneers', 'Teeth Whitening', 'Root Canal', 'Orthodontics'],
      savings: 70
    },
    {
      name: 'Dermatology',
      slug: 'dermatology',
      description: 'Korean dermatologists are global leaders in skincare, offering advanced treatments for medical and cosmetic concerns.',
      imageUrl: '/images/dermatology.jpg',
      procedures: ['Laser Treatment', 'Acne Scar Removal', 'Skin Rejuvenation', 'Botox', 'Fillers'],
      savings: 60
    },
    {
      name: 'Cosmetic Surgery',
      slug: 'cosmetic-surgery',
      description: 'Korea is world-renowned for its expertise in cosmetic procedures with natural-looking results.',
      imageUrl: '/images/cosmetic-surgery.jpg',
      procedures: ['Double Eyelid Surgery', 'Rhinoplasty', 'Facelift', 'Breast Augmentation', 'Liposuction'],
      savings: 65
    },
    {
      name: 'General Surgery',
      slug: 'general-surgery',
      description: 'Experience minimally invasive surgical techniques with shorter recovery times and excellent outcomes.',
      imageUrl: '/images/surgery.jpg',
      procedures: ['Laparoscopic Surgery', 'Hernia Repair', 'Gallbladder Removal', 'Appendectomy', 'Thyroid Surgery'],
      savings: 50
    },
    {
      name: 'Fertility Treatments',
      slug: 'fertility',
      description: 'Advanced reproductive medicine with high success rates and personalized care.',
      imageUrl: '/images/fertility.jpg',
      procedures: ['IVF', 'IUI', 'Egg Freezing', 'Fertility Testing', 'Hormone Therapy'],
      savings: 55
    },
    {
      name: 'Wellness Packages',
      slug: 'wellness',
      description: 'Comprehensive health check-ups and preventive care with cutting-edge diagnostic technology.',
      imageUrl: '/images/wellness.jpg',
      procedures: ['Full Body Check-up', 'Cancer Screening', 'Cardiac Assessment', 'Health Optimization', 'Anti-aging Programs'],
      savings: 50
    }
  ];

  return (
    <ClientLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-300"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Treatments in South Korea</h1>
              <p className="text-xl text-blue-100 mb-8">
                Discover world-class medical procedures at a fraction of the cost. 
                Korea offers cutting-edge treatments across multiple specialties.
              </p>
            </div>
          </div>
        </section>

        {/* Treatment Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentCategories.map((category, index) => (
                <div key={index} className="card overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative w-full h-48">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      priority={index < 3}
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Save up to {category.savings}%
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Popular Procedures:</h4>
                      <ul className="space-y-1">
                        {category.procedures.slice(0, 4).map((procedure, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {procedure}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={`/treatments/${category.slug}`}
                      className="btn-primary block w-full text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Korea */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose South Korea for Medical Treatment?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Advanced Technology</h3>
                    <p className="text-gray-600">State-of-the-art medical equipment and innovative procedures</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Shorter Wait Times</h3>
                    <p className="text-gray-600">Get treated quickly without long waiting lists</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Affordable Costs</h3>
                    <p className="text-gray-600">Save 50-70% compared to Western countries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Expert Specialists</h3>
                    <p className="text-gray-600">Highly trained doctors with international experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our medical travel coordinators are here to help you find the right treatment and doctor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/doctor-finder" className="btn-primary bg-white text-primary hover:bg-blue-50">
                Find a Doctor
              </Link>
              <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-blue-700/20">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
