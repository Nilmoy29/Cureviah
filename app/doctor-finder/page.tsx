'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ClientLayout from '../layout/ClientLayout';
import { supabase, Doctor } from '@/lib/supabase';

export default function DoctorFinderPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const specialties = [
    'Cardiology', 'Dermatology', 'Dental Surgery', 'Plastic Surgery',
    'Oncology', 'Neurology', 'Orthopedics', 'Fertility', 'General Surgery'
  ];

  const cities = ['Seoul', 'Busan', 'Daegu', 'Incheon', 'Jeju'];
  const languages = ['English', 'Korean', 'Japanese', 'Chinese', 'Spanish'];

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    filterDoctors();
  }, [searchTerm, selectedSpecialty, selectedCity, selectedLanguage, doctors]);

  const fetchDoctors = async () => {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .select(`
          *,
          hospitals (
            name,
            city,
            rating
          )
        `)
        .order('rating', { ascending: false });

      if (error) throw error;
      setDoctors(data || []);
      setFilteredDoctors(data || []);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterDoctors = () => {
    let filtered = [...doctors];

    if (searchTerm) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSpecialty) {
      filtered = filtered.filter(doctor =>
        doctor.specialty === selectedSpecialty
      );
    }

    if (selectedCity) {
      filtered = filtered.filter(doctor =>
        (doctor as any).hospitals?.city === selectedCity
      );
    }

    if (selectedLanguage) {
      filtered = filtered.filter(doctor =>
        doctor.languages?.includes(selectedLanguage)
      );
    }

    setFilteredDoctors(filtered);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSpecialty('');
    setSelectedCity('');
    setSelectedLanguage('');
  };

  return (
    <ClientLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-16">
          <div className="container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Doctor</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Search and connect with top medical specialists in South Korea
            </p>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="py-8 bg-white shadow-md">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search Input */}
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="Search by doctor name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Specialty Filter */}
              <div>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">All Specialties</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>

              {/* City Filter */}
              <div>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">All Cities</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Language Filter */}
              <div>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">All Languages</option>
                  {languages.map((language) => (
                    <option key={language} value={language}>{language}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters & Reset */}
            {(searchTerm || selectedSpecialty || selectedCity || selectedLanguage) && (
              <div className="mt-4 flex items-center gap-4">
                <span className="text-gray-600">Active filters:</span>
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                      Search: {searchTerm}
                    </span>
                  )}
                  {selectedSpecialty && (
                    <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                      {selectedSpecialty}
                    </span>
                  )}
                  {selectedCity && (
                    <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                      {selectedCity}
                    </span>
                  )}
                  {selectedLanguage && (
                    <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                      {selectedLanguage}
                    </span>
                  )}
                </div>
                <button
                  onClick={resetFilters}
                  className="text-primary hover:underline text-sm"
                >
                  Reset all
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container-custom">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {loading ? 'Loading...' : `${filteredDoctors.length} Doctors Found`}
              </h2>
            </div>

            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
              </div>
            ) : filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                  <div key={doctor.id} className="card hover:shadow-xl transition-shadow">
                    <div className="relative w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                      <Image
                        src={doctor.image_url || '/images/doctor-placeholder.jpg'}
                        alt={doctor.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                      <p className="text-primary font-semibold mb-1">{doctor.specialty}</p>
                      <p className="text-gray-600 text-sm mb-3">
                        {(doctor as any).hospitals?.name || 'Hospital information not available'}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4"
                              fill={i < Math.floor(doctor.rating) ? 'currentColor' : 'none'}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">{doctor.rating}</span>
                      </div>

                      {/* Experience */}
                      <p className="text-gray-600 text-sm mb-3">
                        <span className="font-semibold">{doctor.experience_years}</span> years of experience
                      </p>

                      {/* Languages */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Languages:</p>
                        <div className="flex flex-wrap gap-1">
                          {doctor.languages?.slice(0, 3).map((lang, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Link
                          href={`/doctors/${doctor.id}`}
                          className="flex-1 btn-primary text-center py-2 text-sm"
                        >
                          View Profile
                        </Link>
                        <button className="flex-1 btn-secondary py-2 text-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                <button onClick={resetFilters} className="btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Doctor?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our medical coordinators can help match you with the perfect specialist for your needs
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50">
              Contact Our Team
            </Link>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
