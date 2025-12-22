-- Seed data for Cureviah platform
-- Execute after schema.sql

-- Insert sample hospitals
INSERT INTO hospitals (name, city, description, image_url, specialties, languages, rating, total_reviews, address, phone, email) VALUES
('Seoul National University Hospital', 'Seoul', 'Leading comprehensive medical center with world-class facilities and internationally trained specialists.', '/images/hospitals/snuh.jpg', ARRAY['Oncology', 'Cardiology', 'Neurology', 'Orthopedics'], ARRAY['English', 'Korean', 'Chinese'], 4.9, 1250, '101 Daehak-ro, Jongno-gu, Seoul', '+82-2-2072-2114', 'info@snuh.org'),
('Asan Medical Center', 'Seoul', 'One of Asia''s largest medical institutions with cutting-edge technology and research facilities.', '/images/hospitals/amc.jpg', ARRAY['Cardiology', 'Oncology', 'Transplant Surgery', 'Neurosurgery'], ARRAY['English', 'Korean', 'Japanese', 'Chinese'], 4.8, 980, '88 Olympic-ro 43-gil, Songpa-gu, Seoul', '+82-2-3010-3114', 'contact@amc.seoul.kr'),
('Samsung Medical Center', 'Seoul', 'Advanced medical center known for innovative treatments and premium patient care.', '/images/hospitals/smc.jpg', ARRAY['Oncology', 'Cardiology', 'Plastic Surgery', 'Dermatology'], ARRAY['English', 'Korean', 'Arabic', 'Russian'], 4.7, 890, '81 Irwon-ro, Gangnam-gu, Seoul', '+82-2-3410-2114', 'info@smc.or.kr'),
('Pusan National University Hospital', 'Busan', 'Premier medical institution in Busan with comprehensive care and coastal recovery environment.', '/images/hospitals/pnuh.jpg', ARRAY['General Surgery', 'Internal Medicine', 'Cardiology', 'Orthopedics'], ARRAY['English', 'Korean', 'Japanese'], 4.6, 650, '179 Gudeok-ro, Seo-gu, Busan', '+82-51-240-7000', 'info@pnuh.or.kr'),
('Kyungpook National University Hospital', 'Daegu', 'Specialized medical center with focus on research and innovative treatments.', '/images/hospitals/knuh.jpg', ARRAY['Neurology', 'Cardiology', 'Oncology', 'Pediatrics'], ARRAY['English', 'Korean'], 4.5, 520, '130 Dongdeok-ro, Jung-gu, Daegu', '+82-53-200-5000', 'contact@knuh.or.kr');

-- Insert sample treatments
INSERT INTO treatments (name, category, description, image_url, price_range_min, price_range_max, duration, savings_percentage) VALUES
('Dental Implants', 'Dental', 'High-quality titanium dental implants with advanced osseointegration technology.', '/images/treatments/dental-implant.jpg', 1000, 2500, '2-3 visits over 3-6 months', 70),
('Full Smile Makeover', 'Dental', 'Comprehensive dental restoration including veneers, whitening, and alignment.', '/images/treatments/smile-makeover.jpg', 3000, 8000, '1-2 weeks', 65),
('Laser Skin Resurfacing', 'Dermatology', 'Advanced laser treatment for skin rejuvenation and scar reduction.', '/images/treatments/laser-skin.jpg', 500, 1500, '1-3 sessions', 60),
('Acne Scar Treatment', 'Dermatology', 'Multi-modal approach to reduce and eliminate acne scarring.', '/images/treatments/acne-scar.jpg', 400, 1200, '3-5 sessions over 2 months', 55),
('Laparoscopic Surgery', 'General Surgery', 'Minimally invasive surgical procedures with faster recovery times.', '/images/treatments/laparoscopic.jpg', 3000, 8000, '1-3 days hospital stay', 50),
('Double Eyelid Surgery', 'Cosmetic Surgery', 'Natural-looking eyelid enhancement using Korean techniques.', '/images/treatments/eyelid-surgery.jpg', 2000, 4000, '1-2 hours procedure', 65),
('Rhinoplasty', 'Cosmetic Surgery', 'Nose reshaping surgery with natural results and minimal scarring.', '/images/treatments/rhinoplasty.jpg', 3500, 7000, '2-3 hours procedure', 60),
('IVF Treatment', 'Fertility', 'Comprehensive in-vitro fertilization with high success rates.', '/images/treatments/ivf.jpg', 4000, 8000, '2-3 weeks per cycle', 55),
('Wellness Check-up Package', 'Wellness', 'Comprehensive health screening with advanced diagnostic tools.', '/images/treatments/wellness.jpg', 500, 1500, '1 day', 50);

-- Insert sample doctors
INSERT INTO doctors (name, specialty, hospital_id, image_url, languages, experience_years, rating, bio, education, certifications) VALUES
('Dr. Kim Min-Jun', 'Cardiology', (SELECT id FROM hospitals WHERE name = 'Seoul National University Hospital' LIMIT 1), '/images/doctors/kim-minjun.jpg', ARRAY['English', 'Korean'], 15, 4.9, 'Internationally recognized cardiologist specializing in interventional cardiology and heart disease prevention.', ARRAY['MD - Seoul National University', 'Fellowship - Johns Hopkins Hospital'], ARRAY['Korean Board of Cardiology', 'ACC Fellowship']),
('Dr. Park Seo-Yeon', 'Dermatology', (SELECT id FROM hospitals WHERE name = 'Samsung Medical Center' LIMIT 1), '/images/doctors/park-seoyeon.jpg', ARRAY['English', 'Korean', 'Japanese'], 12, 4.8, 'Expert in cosmetic dermatology and laser treatments with focus on Asian skin types.', ARRAY['MD - Yonsei University', 'Dermatology Residency - Samsung Medical Center'], ARRAY['Korean Board of Dermatology', 'American Academy of Dermatology']),
('Dr. Lee Jae-Woo', 'Plastic Surgery', (SELECT id FROM hospitals WHERE name = 'Asan Medical Center' LIMIT 1), '/images/doctors/lee-jaewoo.jpg', ARRAY['English', 'Korean', 'Chinese'], 18, 4.9, 'Renowned plastic surgeon specializing in facial contouring and rhinoplasty.', ARRAY['MD - Korea University', 'Fellowship - UCLA Medical Center'], ARRAY['Korean Board of Plastic Surgery', 'ISAPS Member']),
('Dr. Choi Hye-Jin', 'Dental Surgery', (SELECT id FROM hospitals WHERE name = 'Seoul National University Hospital' LIMIT 1), '/images/doctors/choi-hyejin.jpg', ARRAY['English', 'Korean'], 10, 4.7, 'Specialist in dental implants and full mouth reconstruction.', ARRAY['DDS - Seoul National University', 'Implantology Fellowship - NYU'], ARRAY['Korean Board of Oral and Maxillofacial Surgery']);
