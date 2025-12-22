'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ClientLayout from '../../layout/ClientLayout';
import BookingModal from '../../components/BookingModal';
import { supabase } from '@/lib/supabase';

export default function HospitalDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [hospital, setHospital] = useState<any>(null);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  useEffect(() => {
    if (params.id) {
      fetchHospital();
      fetchDoctors();
      fetchReviews();
    }
  }, [params.id]);

  const fetchHospital = async () => {
    try {
      const { data, error } = await supabase
        .from('hospitals')
        .select('*')
        .eq('id', params.id)
        .single();

      if (error) throw error;
      setHospital(data);
    } catch (error) {
      console.error('Error fetching hospital:', error);
      router.push('/destinations');
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctors = async () => {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .eq('hospital_id', params.id)
        .order('rating', { ascending: false });

      if (error) throw error;
      setDoctors(data || []);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          user_profiles (full_name)
        `)
        .eq('hospital_id', params.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleBookDoctor = (doctor: any) => {
    setSelectedDoctor(doctor);
    setShowBooking(true);
  };

  if (loading) {
    return (
      <ClientLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
        </div>
      </ClientLayout>
    );
  }

  if (!hospital) {
    return null;
  }

  return (
    <ClientLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Hospital Image */}
        <section className="relative h-96 bg-gray-900">
          {hospital.image_url && (
            <Image
              src={hospital.image_url}
              alt={hospital.name}
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-60"
            />
          )}
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <Link href="/destinations" className="text-white hover:underline mb-4 inline-block">
                ← Back to Destinations
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{hospital.name}</h1>
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{hospital.city}, South Korea</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill={i < Math.floor(hospital.rating) ? 'currentColor' : 'none'}
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
                  <span>{hospital.rating} ({hospital.total_reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">
                  {hospital.description || `${hospital.name} is a leading healthcare facility in ${hospital.city}, South Korea, offering world-class medical services and state-of-the-art treatment facilities.`}
                </p>
              </div>

              {/* Specialties */}
              {hospital.specialties && hospital.specialties.length > 0 && (
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Specialties</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {hospital.specialties.map((specialty: string, i: number) => (
                      <div key={i} className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-gray-900">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Doctors */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Doctors</h2>
                {doctors.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {doctors.map((doctor) => (
                      <div key={doctor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="relative w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={doctor.image_url || '/images/doctor-placeholder.jpg'}
                              alt={doctor.name}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">{doctor.name}</h3>
                            <p className="text-sm text-primary font-semibold mb-2">{doctor.specialty}</p>
                            <div className="flex items-center mb-2">
                              <div className="flex text-yellow-400 mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className="w-3 h-3"
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
                              <span className="text-xs text-gray-600">{doctor.rating}</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-3">{doctor.experience_years} years exp.</p>
                            <div className="flex gap-2">
                              <Link
                                href={`/doctors/${doctor.id}`}
                                className="text-xs btn-secondary py-1 px-3"
                              >
                                View Profile
                              </Link>
                              <button
                                onClick={() => handleBookDoctor(doctor)}
                                className="text-xs btn-primary py-1 px-3"
                              >
                                Book
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">No doctors information available</p>
                )}
              </div>

              {/* Reviews */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Reviews</h2>
                {reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4"
                                fill={i < review.rating ? 'currentColor' : 'none'}
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
                          <span className="text-sm text-gray-500">
                            {new Date(review.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="font-semibold text-gray-900 mb-1">
                          {review.user_profiles?.full_name || 'Anonymous'}
                        </p>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">No reviews yet</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card sticky top-4 space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                
                {hospital.address && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Address</h4>
                    <p className="text-gray-600 text-sm flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {hospital.address}
                    </p>
                  </div>
                )}

                {hospital.phone && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Phone</h4>
                    <p className="text-gray-600 text-sm flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {hospital.phone}
                    </p>
                  </div>
                )}

                {hospital.email && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Email</h4>
                    <p className="text-gray-600 text-sm flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {hospital.email}
                    </p>
                  </div>
                )}

                {hospital.languages && hospital.languages.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Languages Spoken</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.languages.map((lang: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-primary rounded text-xs">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Contact Hospital
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBooking && selectedDoctor && (
          <BookingModal
            isOpen={showBooking}
            onClose={() => {
              setShowBooking(false);
              setSelectedDoctor(null);
            }}
            doctorId={selectedDoctor.id}
            doctorName={selectedDoctor.name}
            hospitalId={hospital.id}
          />
        )}
      </div>
    </ClientLayout>
  );
}
