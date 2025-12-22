'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ClientLayout from '@/app/layout/ClientLayout';
import { supabase, Hospital } from '@/lib/supabase';

const cityData: Record<string, any> = {
  seoul: {
    name: 'Seoul',
    description: 'South Korea\'s vibrant capital combines cutting-edge medical technology with rich cultural heritage. Home to some of Asia\'s most prestigious hospitals and medical research centers.',
    imageUrl: '/images/seoul-banner.jpg',
    highlights: [
      'World-renowned medical facilities',
      '42+ accredited international hospitals',
      'Advanced medical technology',
      'English-speaking medical staff',
      'Easy international accessibility',
      'Rich cultural experiences'
    ],
    attractions: [
      { name: 'Gyeongbokgung Palace', description: 'Historic royal palace' },
      { name: 'N Seoul Tower', description: 'Iconic observation tower' },
      { name: 'Myeongdong', description: 'Shopping and entertainment district' },
      { name: 'Han River Parks', description: 'Scenic riverside recreation' }
    ]
  },
  busan: {
    name: 'Busan',
    description: 'Coastal city offering excellent medical care in a beautiful seaside environment, perfect for recovery and relaxation at lower costs than Seoul.',
    imageUrl: '/images/busan-banner.jpg',
    highlights: [
      'Coastal recovery environment',
      '28+ quality medical centers',
      'Lower treatment costs',
      'Beach and mountain scenery',
      'Fresh seafood cuisine',
      'Relaxed atmosphere'
    ],
    attractions: [
      { name: 'Haeundae Beach', description: 'Famous white sand beach' },
      { name: 'Gamcheon Culture Village', description: 'Colorful hillside community' },
      { name: 'Jagalchi Fish Market', description: 'Korea\'s largest seafood market' },
      { name: 'Beomeosa Temple', description: 'Ancient mountain temple' }
    ]
  },
  daegu: {
    name: 'Daegu',
    description: 'Known for specialized medical clusters and research facilities, Daegu provides high-quality care with a focus on innovation and medical excellence.',
    imageUrl: '/images/daegu-banner.jpg',
    highlights: [
      'Medical research hub',
      '17+ specialized hospitals',
      'Innovative treatments',
      'Affordable pricing',
      'Modern infrastructure',
      'Traditional Korean medicine'
    ],
    attractions: [
      { name: 'Dongseongno', description: 'Main shopping street' },
      { name: 'Apsan Park', description: 'Mountain park with cable car' },
      { name: 'Seomun Market', description: 'Traditional Korean market' },
      { name: 'Daegu Arboretum', description: 'Beautiful botanical garden' }
    ]
  },
  incheon: {
    name: 'Incheon',
    description: 'Major transportation hub with international airport access and excellent medical facilities designed for international patients.',
    imageUrl: '/images/incheon-banner.jpg',
    highlights: [
      'International airport proximity',
      '15+ modern medical centers',
      'Easy accessibility',
      'Chinatown heritage',
      'Coastal attractions',
      'Business-friendly'
    ],
    attractions: [
      { name: 'Songdo Central Park', description: 'Modern waterfront park' },
      { name: 'Incheon Chinatown', description: 'Historic Chinese district' },
      { name: 'Wolmido Island', description: 'Amusement park island' },
      { name: 'Incheon Landing Memorial', description: 'Historical landmark' }
    ]
  },
  jeju: {
    name: 'Jeju Island',
    description: 'Combine medical treatment with recovery on this beautiful resort island known for wellness tourism, natural beauty, and peaceful environment.',
    imageUrl: '/images/jeju-banner.jpg',
    highlights: [
      'Resort island setting',
      '8+ wellness-focused facilities',
      'Natural healing environment',
      'UNESCO World Heritage sites',
      'Volcanic landscapes',
      'Subtropical climate'
    ],
    attractions: [
      { name: 'Seongsan Ilchulbong', description: 'Sunrise peak crater' },
      { name: 'Manjanggul Cave', description: 'Lava tube cave' },
      { name: 'Hallasan Mountain', description: 'Highest peak in South Korea' },
      { name: 'Jeju Folk Village', description: 'Traditional culture museum' }
    ]
  }
};

export default function CityPage() {
  const params = useParams();
  const citySlug = params?.city as string;
  const city = cityData[citySlug];
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city) {
      fetchHospitals();
    }
  }, [city]);

  const fetchHospitals = async () => {
    try {
      const { data, error } = await supabase
        .from('hospitals')
        .select('*')
        .eq('city', city.name)
        .order('rating', { ascending: false });

      if (error) throw error;
      setHospitals(data || []);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!city) {
    return (
      <ClientLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">City Not Found</h1>
            <Link href="/destinations" className="btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <div className="min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-96 bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src={city.imageUrl}
              alt={city.name}
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-60"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />
          <div className="container-custom relative h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">{city.name}</h1>
              <p className="text-xl text-blue-100">{city.description}</p>
            </div>
          </div>
        </section>

        {/* City Highlights */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose {city.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hospitals */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Medical Facilities in {city.name}</h2>
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : hospitals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {hospitals.map((hospital) => (
                  <div key={hospital.id} className="card">
                    <div className="relative w-full h-48">
                      <Image
                        src={hospital.image_url || '/images/hospital-default.jpg'}
                        alt={hospital.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{hospital.name}</h3>
                      <p className="text-gray-600 mb-4">{hospital.description}</p>
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill={i < Math.floor(hospital.rating) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-gray-600">{hospital.rating} ({hospital.total_reviews} reviews)</span>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {hospital.specialties?.map((specialty, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link href={`/hospitals/${hospital.id}`} className="btn-primary inline-block">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600 mb-4">No hospitals found in our database yet.</p>
                <p className="text-sm text-gray-500">Please check back soon or contact us for recommendations.</p>
              </div>
            )}
          </div>
        </section>

        {/* Tourist Attractions */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore {city.name}</h2>
            <p className="text-gray-600 mb-8">Combine your medical treatment with tourism and discover these amazing attractions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {city.attractions.map((attraction: any, index: number) => (
                <div key={index} className="card">
                  <h3 className="font-bold text-gray-900 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 text-sm">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Medical Journey in {city.name}?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with our medical travel coordinators to plan your treatment and trip
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50">
                Contact Us
              </Link>
              <Link href="/doctor-finder" className="btn-secondary bg-transparent border-white text-white hover:bg-blue-700/20">
                Find a Doctor
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
