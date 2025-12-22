'use client';

import React from 'react';
import Image from 'next/image';

interface AppointmentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointment: any;
}

export default function AppointmentDetailModal({
  isOpen,
  onClose,
  appointment
}: AppointmentDetailModalProps) {
  if (!isOpen || !appointment) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Appointment Details</h2>
              <p className="text-sm text-gray-500 mt-1">
                Booking ID: {appointment.id.slice(0, 8)}...
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Status Badge */}
          <div className="mb-6">
            <span className={`px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
            </span>
          </div>

          {/* Appointment Info */}
          <div className="space-y-6">
            {/* Date & Time */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Date & Time</h3>
              <div className="flex items-center text-gray-900">
                <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold">
                    {appointment.appointment_date 
                      ? new Date(appointment.appointment_date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                      : 'To Be Determined'
                    }
                  </p>
                  {appointment.appointment_date && (
                    <p className="text-sm text-gray-600">
                      {new Date(appointment.appointment_date).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Doctor */}
            {appointment.doctors && (
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Doctor</h3>
                <div className="flex items-start">
                  <div className="relative w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={appointment.doctors.image_url || '/images/doctor-placeholder.jpg'}
                      alt={appointment.doctors.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{appointment.doctors.name}</p>
                    <p className="text-sm text-primary">{appointment.doctors.specialty}</p>
                    {appointment.doctors.experience_years && (
                      <p className="text-xs text-gray-600 mt-1">
                        {appointment.doctors.experience_years} years of experience
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Hospital */}
            {appointment.hospitals && (
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Hospital</h3>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{appointment.hospitals.name}</p>
                    <p className="text-sm text-gray-600">{appointment.hospitals.city}, South Korea</p>
                    {appointment.hospitals.address && (
                      <p className="text-xs text-gray-500 mt-1">{appointment.hospitals.address}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Treatment */}
            {appointment.treatments && (
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Treatment</h3>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{appointment.treatments.name}</p>
                    {appointment.treatments.category && (
                      <p className="text-sm text-gray-600">{appointment.treatments.category}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Notes */}
            {appointment.notes && (
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Additional Notes</h3>
                <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-lg">
                  {appointment.notes}
                </p>
              </div>
            )}

            {/* Booking Date */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Booking Information</h3>
              <p className="text-xs text-gray-500">
                Created on {new Date(appointment.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="btn-secondary px-6"
            >
              Close
            </button>
            {appointment.status === 'pending' && (
              <button className="btn-primary px-6">
                Modify Appointment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
