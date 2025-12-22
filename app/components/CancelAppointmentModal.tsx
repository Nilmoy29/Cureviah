'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface CancelAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointment: any;
  onCancelled: () => void;
}

export default function CancelAppointmentModal({
  isOpen,
  onClose,
  appointment,
  onCancelled
}: CancelAppointmentModalProps) {
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen || !appointment) return null;

  const handleCancel = async () => {
    if (!reason.trim()) {
      setError('Please provide a reason for cancellation');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: updateError } = await supabase
        .from('appointments')
        .update({ 
          status: 'cancelled',
          notes: appointment.notes 
            ? `${appointment.notes}\n\nCancellation reason: ${reason}`
            : `Cancellation reason: ${reason}`
        })
        .eq('id', appointment.id);

      if (updateError) throw updateError;

      onCancelled();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to cancel appointment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-bold text-gray-900">Cancel Appointment</h3>
              <p className="text-sm text-gray-600 mt-1">
                Are you sure you want to cancel this appointment? This action cannot be undone.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Appointment Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="space-y-2 text-sm">
              {appointment.doctors && (
                <p>
                  <span className="font-semibold text-gray-700">Doctor:</span>{' '}
                  <span className="text-gray-900">{appointment.doctors.name}</span>
                </p>
              )}
              {appointment.appointment_date && (
                <p>
                  <span className="font-semibold text-gray-700">Date:</span>{' '}
                  <span className="text-gray-900">
                    {new Date(appointment.appointment_date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </p>
              )}
              {appointment.hospitals && (
                <p>
                  <span className="font-semibold text-gray-700">Hospital:</span>{' '}
                  <span className="text-gray-900">{appointment.hospitals.name}</span>
                </p>
              )}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Cancellation Reason */}
          <div className="mb-6">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Cancellation *
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              placeholder="Please provide a reason for cancelling this appointment..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
            <div className="flex">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-yellow-800">
                Please note that cancellation policies may apply. We recommend contacting the hospital directly if you need to reschedule.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              disabled={loading}
              className="flex-1 btn-secondary py-3"
            >
              Keep Appointment
            </button>
            <button
              onClick={handleCancel}
              disabled={loading}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Cancelling...' : 'Cancel Appointment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
