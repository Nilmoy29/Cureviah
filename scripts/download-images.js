/**
 * Cureviah - Medical Tourism Image Download Guide
 * 
 * This file provides instructions and URLs for downloading realistic medical images
 * for the various medical specialties and patient profiles needed in the application.
 * 
 * IMPORTANT: The links provided are examples of the type of images to download.
 * You should acquire proper licensing for any images used on your production website.
 */

// ===== MEDICAL SPECIALTY IMAGES =====
// For these images, find professional, clean medical facilities or treatment representations
// Resolution: Recommend at least 800x500px with 16:10 aspect ratio

const MEDICAL_IMAGES = {
  // For fertility treatment - modern fertility clinic or embryology lab
  fertility: {
    suggestion: "Image of a modern fertility clinic or embryology lab with advanced equipment",
    exampleUrls: [
      "https://media.istockphoto.com/id/1354641531/photo/ivf-laboratory-embryologist-using-microscope-for-in-vitro-fertilization.jpg",
      "https://media.istockphoto.com/id/1171698091/photo/lab-technician-working-with-test-tubes-in-fertility-clinic.jpg"
    ]
  },

  // For plastic surgery - elegant clinic environment, non-graphic
  plasticSurgery: {
    suggestion: "Image of an elegant plastic surgery clinic, or before/after results (non-graphic)",
    exampleUrls: [
      "https://media.istockphoto.com/id/1446688743/photo/beautiful-face-of-young-woman-with-blue-eyes-clean-fresh-skin-beauty-healthcare-concept.jpg",
      "https://media.istockphoto.com/id/1371439675/photo/plastic-surgeon-marking-patients-face-in-clinic.jpg"
    ]
  },

  // For health screening - advanced diagnostic equipment
  healthScreening: {
    suggestion: "Image of advanced diagnostic equipment like MRI, CT scanner, or health check facility",
    exampleUrls: [
      "https://media.istockphoto.com/id/1338327851/photo/ct-scan-of-the-human-brain-in-the-laboratory.jpg",
      "https://media.istockphoto.com/id/1421635632/photo/technologist-operating-ct-scan-machine-in-hospital.jpg"
    ]
  },

  // For orthopedic treatment - joint surgery or physical therapy
  orthopedic: {
    suggestion: "Image of orthopedic treatment, joint models, or physical therapy",
    exampleUrls: [
      "https://media.istockphoto.com/id/1385614394/photo/traumatologist-orthopaedic-surgeon-explaining-diagnostics-result-and-joint-issues-to-senior.jpg",
      "https://media.istockphoto.com/id/1369836486/photo/knee-joint-anatomical-model-with-surgeon-hand-pointing-at-medial-meniscus.jpg"
    ]
  }
};

// ===== PATIENT PROFILE IMAGES =====
// For these images, find diverse, professional-looking people representing international patients
// Resolution: At least 300x300px with 1:1 aspect ratio (for profile circles)

const PATIENT_PROFILES = {
  patientProfile1: {
    suggestion: "Professional headshot of diverse patient (male/female)",
    exampleUrls: [
      "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg",
      "https://media.istockphoto.com/id/1389361465/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg"
    ]
  },
  patientProfile2: {
    suggestion: "Professional headshot of diverse patient (male/female)",
    exampleUrls: [
      "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg",
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-business-person.jpg"
    ]
  },
  patientProfile3: {
    suggestion: "Professional headshot of diverse patient (male/female)",
    exampleUrls: [
      "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg",
      "https://media.istockphoto.com/id/1344688156/photo/portrait-of-young-man-ready-for-job-business-concept.jpg"
    ]
  },
  patientProfile4: {
    suggestion: "Professional headshot of diverse patient (male/female)",
    exampleUrls: [
      "https://media.istockphoto.com/id/1365223878/photo/beautiful-mature-woman-with-crossed-arms-isolated.jpg",
      "https://media.istockphoto.com/id/1400280368/photo/portrait-of-happy-businessman-standing-at-office-confident-entrepreneur-with-arms-crossed-in.jpg"
    ]
  }
};

// ===== HOSPITAL AND FACILITY IMAGES =====
// For these images, find modern hospital buildings or medical facilities
// Resolution: At least 800x500px

const HOSPITAL_IMAGES = {
  koreanHospital: {
    suggestion: "Modern South Korean hospital building exterior/interior",
    exampleUrls: [
      "https://media.istockphoto.com/id/1324558903/photo/exterior-of-a-modern-hospital-building.jpg",
      "https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg"
    ]
  }
};

/**
 * HOW TO USE THIS GUIDE:
 * 
 * 1. Browse the example URLs to understand the style of images needed
 * 2. Purchase or acquire properly licensed images from stock photo sites:
 *    - iStock (https://www.istockphoto.com)
 *    - Shutterstock (https://www.shutterstock.com)
 *    - Adobe Stock (https://stock.adobe.com)
 *    - Or use free options like Unsplash/Pexels with attribution
 * 
 * 3. Save the images to the following paths:
 *    - /public/images/fertility.jpg
 *    - /public/images/plastic-surgery.jpg
 *    - /public/images/health-screening.jpg
 *    - /public/images/orthopedic.jpg
 *    - /public/images/patient-profile-1.jpg
 *    - /public/images/patient-profile-2.jpg
 *    - /public/images/patient-profile-3.jpg
 *    - /public/images/patient-profile-4.jpg
 *    - /public/images/korean-hospital.jpg
 * 
 * 4. Make sure images are properly sized and optimized for web
 * 
 * 5. Delete this file after downloading the images
 */

console.log("Please follow the instructions in this file to download the appropriate images for your application.");
console.log("After downloading images, you can delete this file."); 