import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export type Hospital = {
  id: string;
  name: string;
  city: string;
  description: string;
  image_url: string;
  specialties: string[];
  languages: string[];
  rating: number;
  total_reviews: number;
  created_at: string;
};

export type Treatment = {
  id: string;
  name: string;
  category: string;
  description: string;
  image_url: string;
  price_range_min: number;
  price_range_max: number;
  duration: string;
  savings_percentage: number;
  created_at: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  hospital_id: string;
  image_url: string;
  languages: string[];
  experience_years: number;
  rating: number;
  bio: string;
  created_at: string;
};

export type Appointment = {
  id: string;
  user_id: string;
  doctor_id: string;
  hospital_id: string;
  treatment_id: string;
  appointment_date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes: string;
  created_at: string;
};

export type UserProfile = {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  nationality: string;
  created_at: string;
};
