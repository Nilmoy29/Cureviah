'use client';

import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  // Local patient profile images
  const patientProfiles = [
    '/images/patient-profile-1.jpg',
    '/images/patient-profile-2.jpg',
    '/images/patient-profile-3.jpg',
    '/images/patient-profile-4.jpg',
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-primary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-300"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Bridge to South Korea’s <span className="text-accent">World-Class</span> Wellness and Wonders
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
            Cureviah connects you with South Korea’s certified beauty centers and tourist destinations by providing end-to-end medical and travel support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/destinations" className="btn-primary bg-white text-primary hover:bg-blue-50 text-center px-8 py-3">
                Explore Destinations
              </Link>
              <Link href="/doctor-finder" className="btn-secondary bg-transparent border-white text-white hover:bg-blue-700/20 text-center px-8 py-3">
                Find a Doctor
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {patientProfiles.map((profile, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                    <Image 
                      src={profile} 
                      alt={`Patient ${i+1}`} 
                      fill
                      sizes="40px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold">Trusted by 2,500+ patients</p>
                <div className="flex text-yellow-300 text-sm mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-white">(4.9/5)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 transform scale-95 translate-x-6 translate-y-6"></div>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                <div className="w-full h-64 relative overflow-hidden">
                  <Image 
                    src="/images/korean-hospital.jpg"
                    alt="Seoul National University Hospital" 
                    fill
                    sizes="(max-width: 1200px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">Seoul National University Hospital</h3>
                    <p className="text-gray-600 text-sm">Seoul, South Korea</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Specialties:</span>
                    <span className="text-gray-900 font-medium">Oncology, Cardiology, Neurology</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Languages:</span>
                    <span className="text-gray-900 font-medium">English, Korean, Chinese</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">International Patients:</span>
                    <span className="text-gray-900 font-medium">Yes, dedicated department</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 