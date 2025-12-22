'use client';

import Image from 'next/image';

const ImageTest = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-4">Image Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Seoul Image */}
          <div>
            <h3 className="mb-2">Seoul Image:</h3>
            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
              <Image 
                src="/images/seoul.jpg"
                alt="Seoul"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Dental Image */}
          <div>
            <h3 className="mb-2">Dental Image:</h3>
            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
              <Image 
                src="/images/dental.jpg"
                alt="Dental"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Hospital Image */}
          <div>
            <h3 className="mb-2">Hospital Image:</h3>
            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
              <Image 
                src="/images/korean-hospital.jpg"
                alt="Hospital"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        
        {/* Regular img tags as fallback test */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Regular Image Tags Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="mb-2">Seoul Image (regular tag):</h3>
            <img 
              src="/images/seoul.jpg"
              alt="Seoul"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 className="mb-2">Dental Image (regular tag):</h3>
            <img 
              src="/images/dental.jpg"
              alt="Dental"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 className="mb-2">Hospital Image (regular tag):</h3>
            <img 
              src="/images/korean-hospital.jpg"
              alt="Hospital"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTest; 