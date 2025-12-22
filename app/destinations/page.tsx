'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ClientLayout from '../layout/ClientLayout';

const Destinations = () => {
  // Expanded list of South Korean cities for medical tourism
  const destinations = [
    {
      cityName: 'Seoul',
      description: 'South Korea\'s capital is home to leading hospitals with cutting-edge technology and internationally trained specialists.',
      imageUrl: '/images/seoul.jpg',
      href: '/destinations/seoul',
      hospitalCount: 42,
      highlights: ['Seoul National University Hospital', 'Asan Medical Center', 'Samsung Medical Center']
    },
    {
      cityName: 'Busan',
      description: 'This coastal city offers excellent medical care and recovery in a beautiful seaside environment with lower costs than Seoul.',
      imageUrl: '/images/busan.jpg',
      href: '/destinations/busan',
      hospitalCount: 28,
      highlights: ['Pusan National University Hospital', 'Dong-A University Hospital', 'Busan Paik Hospital']
    },
    {
      cityName: 'Daegu',
      description: 'Known for specialized medical clusters and research facilities, Daegu provides high-quality care with a focus on innovation.',
      imageUrl: '/images/daegu.jpg',
      href: '/destinations/daegu',
      hospitalCount: 17,
      highlights: ['Kyungpook National University Hospital', 'Daegu Catholic University Medical Center']
    },
    {
      cityName: 'Incheon',
      description: 'A major transportation hub with international airport access and excellent medical facilities for international patients.',
      imageUrl: '/images/incheon.jpg',
      href: '/destinations/incheon',
      hospitalCount: 15,
      highlights: ['Inha University Hospital', 'Gachon University Gil Medical Center']
    },
    {
      cityName: 'Jeju Island',
      description: 'Combine medical treatment with recovery on this beautiful resort island known for wellness tourism and natural beauty.',
      imageUrl: '/images/jeju.jpg',
      href: '/destinations/jeju',
      hospitalCount: 8,
      highlights: ['Jeju National University Hospital', 'Seogwipo Medical Center']
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Tourism Destinations in South Korea</h1>
              <p className="text-xl text-blue-100 mb-8">
                Discover world-class healthcare in these beautiful South Korean cities, 
                each offering specialized medical services at affordable prices.
              </p>
            </div>
          </div>
        </section>
        
        {/* Destinations Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <div key={index} className="card overflow-hidden transition-transform hover:scale-105">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={destination.imageUrl}
                      alt={`${destination.cityName}, South Korea medical destination`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      priority={index < 2} // Prioritize loading for the first two cities
                    />
                    {destination.hospitalCount && (
                      <div className="absolute bottom-3 right-3 bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold shadow-md z-10">
                        {destination.hospitalCount} Hospitals
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.cityName}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Featured Hospitals:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {destination.highlights.map((hospital, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="w-4 h-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {hospital}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={destination.href} 
                      className="btn-primary block w-full py-2 text-center"
                    >
                      Explore {destination.cityName}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
};

export default Destinations; 