'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import LocationCard from './components/LocationCard';
import TreatmentCard from './components/TreatmentCard';
import ClientLayout from './layout/ClientLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <ClientLayout>
      <div className="min-h-screen">
        <HeroSection />
        
        {/* Popular Destinations Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                South Korea offers world-class medical facilities in these beautiful cities, 
                combining quality healthcare with opportunities for tourism.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <LocationCard 
                cityName="Seoul"
                description="South Korea's capital is home to leading hospitals with cutting-edge technology and internationally trained specialists."
                imageUrl="/images/seoul.jpg"
                href="/destinations/seoul"
                hospitalCount={42}
              />
              <LocationCard 
                cityName="Busan"
                description="This coastal city offers excellent medical care and recovery in a beautiful seaside environment with lower costs than Seoul."
                imageUrl="/images/busan.jpg"
                href="/destinations/busan"
                hospitalCount={28}
              />
              <LocationCard 
                cityName="Daegu"
                description="Known for specialized medical clusters and research facilities, Daegu provides high-quality care with a focus on innovation."
                imageUrl="/images/daegu.jpg"
                href="/destinations/daegu"
                hospitalCount={17}
              />
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/destinations" className="btn-secondary inline-block py-3 px-8">
                View All Destinations <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Popular Treatments Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Medical Specialties</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                South Korea is renowned for excellence in these medical specialties, offering innovative procedures 
                at a fraction of the cost compared to Western countries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TreatmentCard 
                title="Dental Procedures"
                description="From routine care to advanced implants and cosmetic dentistry, Korean dental clinics offer precision and affordability."
                imageUrl="/images/dental.jpg"
                href="/treatments/dental"
                savingsPercentage={70}
              />
              <TreatmentCard 
                title="Dermatology"
                description="Korean dermatologists are global leaders in skincare, offering advanced treatments for medical and cosmetic concerns."
                imageUrl="/images/dermatology.jpg"
                href="/treatments/dermatology"
                savingsPercentage={60}
              />
              <TreatmentCard 
                title="General Surgery"
                description="Experience minimally invasive surgical techniques with shorter recovery times and excellent outcomes."
                imageUrl="/images/surgery.jpg"
                href="/treatments/general-surgery"
                savingsPercentage={50}
              />
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
} 