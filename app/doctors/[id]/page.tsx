'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ClientLayout from '../../layout/ClientLayout';
import BookingModal from '../../components/BookingModal';
import { supabase, Doctor } from '@/lib/supabase';

export default function DoctorProfilePage() {
  const params = useParams();
  const router = useRouter();
  const [doctor, setDoctor] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (params.id) {
      fetchDoctor();
      fetchReviews();
    }
  }, [params.id]);

  const fetchDoctor = async () => {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .select(`
          *,
          hospitals (
            id,
            name,
            city,
            address,
            phone,
            rating
          )
        `)
        .eq('id', params.id)
        .single();

      if (error) throw error;
      setDoctor(data);
    } catch (error) {
      console.error('Error fetching doctor:', error);
      router.push('/doctor-finder');
    } finally {
      setLoading(false);
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
        .eq('doctor_id', params.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
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

  if (!doctor) {
    return null;
  }

  return (
    <ClientLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-12">
          <div className="container-custom">
            <Link href="/doctor-finder" className="text-white hover:underline mb-4 inline-block">
              ← Back to Doctor Finder
            </Link>
          </div>
        </section>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Doctor Info Card */}
              <div className="card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-64 md:h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={doctor.image_url || '/images/doctor-placeholder.jpg'}
                      alt={doctor.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                    <p className="text-xl text-primary font-semibold mb-3">{doctor.specialty}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
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
                      <span className="text-gray-600">{doctor.rating} ({reviews.length} reviews)</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>{doctor.experience_years} years experience</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{doctor.hospitals?.city}</span>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Languages:</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages?.map((lang: string, i: number) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setShowBooking(true)}
                      className="btn-primary w-full md:w-auto px-8"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dr. {doctor.name}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {doctor.bio || `Dr. ${doctor.name} is a highly experienced ${doctor.specialty} specialist with ${doctor.experience_years} years of practice. Known for providing exceptional patient care and staying current with the latest medical advancements.`}
                </p>
              </div>

              {/* Education */}
              {doctor.education && doctor.education.length > 0 && (
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
                  <ul className="space-y-2">
                    {doctor.education.map((edu: string, i: number) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Certifications */}
              {doctor.certifications && doctor.certifications.length > 0 && (
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
                  <ul className="space-y-2">
                    {doctor.certifications.map((cert: string, i: number) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
              {/* Hospital Card */}
              <div className="card sticky top-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Location</h3>
                <Link 
                  href={`/hospitals/${doctor.hospitals?.id}`}
                  className="block hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-primary mb-2">{doctor.hospitals?.name}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    {doctor.hospitals?.address && (
                      <p className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {doctor.hospitals.address}
                      </p>
                    )}
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {doctor.hospitals.city}, South Korea
                    </p>
                    {doctor.hospitals?.phone && (
                      <p className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {doctor.hospitals.phone}
                      </p>
                    )}
                    <div className="flex items-center mt-3">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4"
                            fill={i < Math.floor(doctor.hospitals?.rating || 0) ? 'currentColor' : 'none'}
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
                      <span className="text-gray-600">{doctor.hospitals?.rating || 0}</span>
                    </div>
                  </div>
                  <p className="text-primary hover:underline mt-4 text-sm font-semibold">
                    View Hospital Details →
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBooking && (
          <BookingModal
            isOpen={showBooking}
            onClose={() => setShowBooking(false)}
            doctorId={doctor.id}
            doctorName={doctor.name}
            hospitalId={doctor.hospitals?.id}
          />
        )}
      </div>
    </ClientLayout>
  );
}
