# Image Download Helper

This directory contains scripts to help set up images for the Cureviah platform.

## Download Sample Images

We've created a shell script that automatically downloads sample images from Unsplash for development purposes. These images are randomly selected based on keywords relevant to each category. They are properly licensed for non-commercial use but should be replaced with purchased stock photos or custom photography for production.

### To download the images:

1. Open a terminal in the root directory of the project
2. Run the download script:

```bash
# On macOS/Linux
./scripts/download-images.sh

# On Windows (using Git Bash or similar)
bash ./scripts/download-images.sh
```

This will download random sample images for:
- Destination cities (Incheon, Jeju)
- Medical specialties (Fertility, Plastic Surgery, Health Screening, Orthopedic)
- Patient profiles
- Hospital facility

### What happens when you run the script:

The script uses the Unsplash Source API to fetch random images based on relevant keywords:

**Destinations:**
- Incheon: Searches for "incheon,korea,city"
- Jeju Island: Searches for "jeju,island,korea"

**Medical Specialties:**
- Fertility: Searches for "fertility,medical,laboratory"
- Plastic Surgery: Searches for "plastic,surgery,medical"
- Health Screening: Searches for "medical,checkup,doctor"
- Orthopedic: Searches for "orthopedic,medical,joint"

**Patient Profiles:**
- Profile 1: Searches for "portrait,asian,woman"
- Profile 2: Searches for "portrait,asian,man"
- Profile 3: Searches for "portrait,business,woman"
- Profile 4: Searches for "portrait,business,man"

**Hospital:**
- Korean Hospital: Searches for "hospital,modern,medical"

### Manual Image Selection Alternative

If you'd prefer to choose specific images instead of random ones, you can:

1. Visit [Unsplash.com](https://unsplash.com/) and search for images matching your needs
2. Download the images in the appropriate sizes
3. Save them to the correct location in `/public/images/` with the proper filename

## Image Requirements

For detailed information about image specifications, naming conventions, and optimization guidelines, please see the [IMAGE_OPTIMIZATION.md](../IMAGE_OPTIMIZATION.md) document in the root directory. 