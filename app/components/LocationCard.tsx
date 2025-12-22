'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LocationCardProps {
  cityName: string;
  description: string;
  imageUrl: string;
  href: string;
  hospitalCount?: number;
}

const LocationCard = ({ cityName, description, imageUrl, href, hospitalCount }: LocationCardProps) => {
  // Map city names to optimized local images (fallback mechanism)
  const getOptimizedImagePath = (city: string): string => {
    const cityLower = city.toLowerCase();
    if (cityLower === 'seoul') {
      return '/images/seoul.jpg';
    }
    if (cityLower === 'busan') {
      return '/images/busan.jpg';
    }
    if (cityLower === 'daegu') {
      return '/images/daegu.jpg';
    }
    // Default fallback image if city is not recognized
    return '/images/placeholder.svg';
  };

  // Use provided imageUrl or fallback to the mapped one
  const finalImageUrl = imageUrl || getOptimizedImagePath(cityName);

  return (
    <div className="card overflow-hidden transition-transform hover:scale-105">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={finalImageUrl}
          alt={`${cityName}, South Korea medical destination`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          priority={cityName === 'Seoul'} // Prioritize loading for the first/primary city
        />
        {hospitalCount && (
          <div className="absolute bottom-3 right-3 bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold shadow-md z-10">
            {hospitalCount} Hospitals
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{cityName}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={href} 
          className="btn-primary block w-full py-2 text-center"
        >
          Explore {cityName}
        </Link>
      </div>
    </div>
  );
};

export default LocationCard; 