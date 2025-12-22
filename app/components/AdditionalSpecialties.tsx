'use client';

import Link from 'next/link';
import Image from 'next/image';

const AdditionalSpecialties = () => {
  const specialties = [
    {
      name: 'Fertility Treatment',
      description: 'Advanced reproductive technologies with high success rates at competitive prices.',
      imageUrl: '/images/fertility.jpg',
      href: '/treatments/fertility',
      savingsPercentage: 65,
    },
    {
      name: 'Plastic Surgery',
      description: 'World-renowned cosmetic procedures with exceptional results and shorter recovery times.',
      imageUrl: '/images/plastic-surgery.jpg',
      href: '/treatments/plastic-surgery',
      savingsPercentage: 75,
    },
    {
      name: 'Health Screening',
      description: 'Comprehensive checkups using cutting-edge diagnostic equipment and technology.',
      imageUrl: '/images/health-screening.jpg',
      href: '/treatments/health-screening',
      savingsPercentage: 55,
    },
    {
      name: 'Orthopedic Treatment',
      description: 'Advanced joint replacement and sports medicine with minimally invasive techniques.',
      imageUrl: '/images/orthopedic.jpg',
      href: '/treatments/orthopedic',
      savingsPercentage: 60,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Medical Specialties</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover more world-class treatments available at leading Korean hospitals and clinics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div key={index} className="card overflow-hidden transition-transform hover:scale-105">
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={specialty.imageUrl}
                  alt={specialty.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  priority={index < 2} // Prioritize loading for the first two specialties
                />
                {specialty.savingsPercentage && (
                  <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Save up to {specialty.savingsPercentage}%
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{specialty.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{specialty.description}</p>
                <Link 
                  href={specialty.href} 
                  className="text-primary font-medium hover:text-primary-dark text-sm"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSpecialties; 