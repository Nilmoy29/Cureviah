'use client';

import Link from 'next/link';
import Image from 'next/image';

interface TreatmentCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  savingsPercentage?: number;
}

const TreatmentCard = ({ title, description, imageUrl, href, savingsPercentage }: TreatmentCardProps) => {
  // Map treatment titles to local image paths
  const getLocalImagePath = (treatment: string): string => {
    const treatmentLower = treatment.toLowerCase();
    if (treatmentLower.includes('dental')) {
      return '/images/dental.jpg';
    }
    if (treatmentLower.includes('dermatology')) {
      return '/images/dermatology.jpg';
    }
    if (treatmentLower.includes('surgery')) {
      return '/images/surgery.jpg';
    }
    // Default fallback image
    return '/images/placeholder.svg';
  };

  // Use provided imageUrl or fallback to the mapped one
  const finalImageUrl = imageUrl || getLocalImagePath(title);

  return (
    <div className="card overflow-hidden transition-transform hover:scale-105">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={finalImageUrl}
          alt={`${title} medical treatment`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        {savingsPercentage && (
          <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
            Save up to {savingsPercentage}%
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={href} 
          className="btn-primary block w-full py-2 text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default TreatmentCard; 