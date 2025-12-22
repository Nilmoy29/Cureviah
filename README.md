# Cureviah - Cross-Border Medical Tourism Platform

Cureviah is a digital medical tourism platform that connects international patients to certified hospitals, clinics, and wellness centers in affordable destinations, starting with South Korea.

## About Cureviah

Our mission is to provide a seamless end-to-end medical travel experience, from doctor selection and consultation to travel arrangements, local support, and post-treatment care. South Korea is known for its world-class medical services, especially in:

- Cosmetic Surgery
- Dermatology
- Dental Procedures
- Fertility Treatments
- General Surgery

## Platform Features

- Curated hospital and clinic listings
- Transparent treatment pricing
- Online doctor consultations
- Travel and visa assistance
- In-country support including interpreters
- Partnerships with recovery accommodations
- Post-treatment care coordination

## Technology Stack

This project uses:

- **Next.js**: React framework for production-grade applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For utility-first styling
- **React**: For building the user interface

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cureviah.git
cd cureviah
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable UI components
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main homepage
├── public/                 # Static assets
│   └── images/             # Image assets for destinations, treatments, etc.
├── scripts/                # Utility scripts
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── IMAGE_OPTIMIZATION.md   # Image guidelines and optimization strategy
```

## Image Optimization

This project uses the Next.js Image component to optimize images for performance. We have a dedicated strategy for handling different types of images used throughout the platform:

- Destination images (Seoul, Busan, etc.)
- Treatment/specialty images (Dental, Dermatology, etc.)
- Patient profile images
- Hospital/facility images

For detailed information about our image strategy, including specifications, naming conventions, and recommended sources, see [IMAGE_OPTIMIZATION.md](./IMAGE_OPTIMIZATION.md).

To add new images to the project, check the example URLs in `scripts/download-images.js`.

## Deployment

This application can be deployed on platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

```bash
npm run build
# or
yarn build
```

## License

[MIT](https://choosealicense.com/licenses/mit/) 