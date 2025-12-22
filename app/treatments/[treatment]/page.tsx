'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ClientLayout from '@/app/layout/ClientLayout';
import { supabase, Treatment, Doctor } from '@/lib/supabase';

const treatmentData: Record<string, any> = {
  dental: {
    name: 'Dental Procedures',
    description: 'Korean dental clinics are world-renowned for their precision, advanced technology, and affordable pricing. From basic care to complex procedures.',
    imageUrl: '/images/dental-banner.jpg',
    procedures: [
      { name: 'Dental Implants', price: '$1,000 - $2,500', duration: '3-6 months', recovery: '1-2 weeks' },
      { name: 'Veneers', price: '$400 - $800 per tooth', duration: '2 visits', recovery: 'Immediate' },
      { name: 'Teeth Whitening', price: '$200 - $500', duration: '1 hour', recovery: 'None' },
      { name: 'All-on-4 Implants', price: '$8,000 - $15,000', duration: '1-2 visits', recovery: '2-3 weeks' },
      { name: 'Root Canal', price: '$300 - $600', duration: '1-2 visits', recovery: '2-3 days' }
    ],
    benefits: ['Advanced 3D imaging', 'Pain-free procedures', 'Long-lasting results', 'Biocompatible materials'],
    savings: 70
  },
  dermatology: {
    name: 'Dermatology Treatments',
    description: 'Korea is a global leader in skincare and dermatological treatments, offering the latest in laser technology and cosmetic dermatology.',
    imageUrl: '/images/dermatology-banner.jpg',
    procedures: [
      { name: 'Laser Skin Resurfacing', price: '$500 - $1,500', duration: '1-3 sessions', recovery: '5-7 days' },
      { name: 'Acne Scar Treatment', price: '$400 - $1,200', duration: '3-5 sessions', recovery: 'Minimal' },
      { name: 'Botox', price: '$150 - $400', duration: '15-30 minutes', recovery: 'None' },
      { name: 'Dermal Fillers', price: '$300 - $800', duration: '30 minutes', recovery: '1-2 days' },
      { name: 'PRP Therapy', price: '$300 - $700', duration: '3-4 sessions', recovery: 'Minimal' }
    ],
    benefits: ['Latest laser technology', 'Customized for Asian skin', 'Minimal downtime', 'Natural-looking results'],
    savings: 60
  },
  'cosmetic-surgery': {
    name: 'Cosmetic Surgery',
    description: 'South Korea is the cosmetic surgery capital of the world, known for natural-looking results and advanced techniques.',
    imageUrl: '/images/cosmetic-banner.jpg',
    procedures: [
      { name: 'Double Eyelid Surgery', price: '$2,000 - $4,000', duration: '1-2 hours', recovery: '1-2 weeks' },
      { name: 'Rhinoplasty', price: '$3,500 - $7,000', duration: '2-3 hours', recovery: '2-3 weeks' },
      { name: 'Facelift', price: '$5,000 - $12,000', duration: '3-4 hours', recovery: '2-4 weeks' },
      { name: 'Breast Augmentation', price: '$4,000 - $8,000', duration: '1-2 hours', recovery: '2-3 weeks' },
      { name: 'Liposuction', price: '$2,500 - $6,000', duration: '1-3 hours', recovery: '1-2 weeks' }
    ],
    benefits: ['World-renowned surgeons', 'Natural results', 'Advanced techniques', 'Comprehensive aftercare'],
    savings: 65
  },
  'general-surgery': {
    name: 'General Surgery',
    description: 'Minimally invasive surgical procedures with state-of-the-art facilities and experienced surgeons.',
    imageUrl: '/images/surgery-banner.jpg',
    procedures: [
      { name: 'Laparoscopic Surgery', price: '$3,000 - $8,000', duration: '1-3 hours', recovery: '1-2 weeks' },
      { name: 'Hernia Repair', price: '$2,000 - $5,000', duration: '1-2 hours', recovery: '2-3 weeks' },
      { name: 'Gallbladder Removal', price: '$2,500 - $6,000', duration: '1-2 hours', recovery: '1 week' },
      { name: 'Thyroid Surgery', price: '$3,500 - $7,000', duration: '2-3 hours', recovery: '1-2 weeks' },
      { name: 'Appendectomy', price: '$2,000 - $4,000', duration: '30-60 minutes', recovery: '1-2 weeks' }
    ],
    benefits: ['Minimally invasive', 'Shorter recovery', 'Lower infection risk', 'Modern facilities'],
    savings: 50
  },
  fertility: {
    name: 'Fertility Treatments',
    description: 'Advanced reproductive medicine with high success rates, personalized protocols, and comprehensive support.',
    imageUrl: '/images/fertility-banner.jpg',
    procedures: [
      { name: 'IVF Treatment', price: '$4,000 - $8,000', duration: '2-3 weeks per cycle', recovery: 'Minimal' },
      { name: 'IUI', price: '$500 - $1,500', duration: '1 cycle', recovery: 'None' },
      { name: 'Egg Freezing', price: '$2,500 - $5,000', duration: '2 weeks', recovery: '1-2 days' },
      { name: 'Fertility Testing', price: '$300 - $1,000', duration: '1 day', recovery: 'None' },
      { name: 'ICSI', price: '$5,000 - $9,000', duration: '2-3 weeks', recovery: 'Minimal' }
    ],
    benefits: ['High success rates', 'Personalized protocols', 'Latest technology', 'Emotional support'],
    savings: 55
  },
  wellness: {
    name: 'Wellness & Prevention',
    description: 'Comprehensive health check-ups and preventive care programs with cutting-edge diagnostic technology.',
    imageUrl: '/images/wellness-banner.jpg',
    procedures: [
      { name: 'Executive Health Check-up', price: '$500 - $1,500', duration: '1 day', recovery: 'None' },
      { name: 'Cancer Screening Package', price: '$800 - $2,000', duration: '1 day', recovery: 'None' },
      { name: 'Cardiac Assessment', price: '$600 - $1,500', duration: '4-6 hours', recovery: 'None' },
      { name: 'Anti-aging Program', price: '$1,500 - $4,000', duration: '3-5 days', recovery: 'None' },
      { name: 'Detox & Wellness Retreat', price: '$2,000 - $5,000', duration: '1 week', recovery: 'None' }
    ],
    benefits: ['Preventive care', 'Early detection', 'Comprehensive testing', 'Personalized recommendations'],
    savings: 50
  }
};

export default function TreatmentDetailPage() {
  const params = useParams();
  const treatmentSlug = params?.treatment as string;
  const treatment = treatmentData[treatmentSlug];
  const [specialists, setSpecialists] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (treatment) {
      fetchSpecialists();
    }
  }, [treatment]);

  const fetchSpecialists = async () => {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .select('*, hospitals(name, city)')
        .eq('specialty', treatment.name)
        .order('rating', { ascending: false })
        .limit(4);

      if (error) throw error;
      setSpecialists(data || []);
    } catch (error) {
      console.error('Error fetching specialists:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!treatment) {
    return (
      <ClientLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Treatment Not Found</h1>
            <Link href="/treatments" className="btn-primary">
              View All Treatments
            </Link>
          </div>
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src={treatment.imageUrl}
              alt={treatment.name}
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-50"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
          <div className="container-custom relative h-full flex items-center">
            <div className="text-white max-w-2xl">
              <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Save up to {treatment.savings}%
              </div>
              <h1 className="text-5xl font-bold mb-4">{treatment.name}</h1>
              <p className="text-xl text-blue-100">{treatment.description}</p>
            </div>
          </div>
        </section>

        {/* Procedures Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatment.procedures.map((procedure: any, index: number) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{procedure.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price Range:</span>
                      <span className="font-semibold text-primary">{procedure.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">{procedure.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recovery:</span>
                      <span className="font-medium text-gray-900">{procedure.recovery}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full btn-secondary text-sm py-2">
                    Request Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Korea for {treatment.name}?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {treatment.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Specialists</h2>
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : specialists.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specialists.map((doctor) => (
                  <div key={doctor.id} className="card text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={doctor.image_url || '/images/doctor-placeholder.jpg'}
                        alt={doctor.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
                    <div className="flex justify-center items-center mb-3">
                      <div className="flex text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill={i < Math.floor(doctor.rating) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-gray-600">{doctor.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{doctor.experience_years} years experience</p>
                    <Link href={`/doctors/${doctor.id}`} className="btn-primary text-sm py-2 block">
                      View Profile
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600">Specialist profiles coming soon. Contact us for recommendations.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Treatment Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a personalized treatment plan and cost estimate from our medical coordinators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50">
                Get Free Consultation
              </Link>
              <Link href="/doctor-finder" className="btn-secondary bg-transparent border-white text-white hover:bg-blue-700/20">
                Find a Specialist
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
