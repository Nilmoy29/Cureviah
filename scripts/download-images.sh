#!/bin/bash

# Cureviah - Image Download Helper Script
# This script downloads sample images from Unsplash for use in the Cureviah application.
# These are placeholder images for development purposes only.
# For production, please purchase properly licensed images.

echo "========================================"
echo "Cureviah - Medical Tourism Image Downloader"
echo "========================================"
echo "This script will download sample images from Unsplash for development purposes."
echo "For production use, please replace with properly licensed images."
echo ""

# Create directories if they don't exist
mkdir -p public/images

# Function to download an image with retries
download_image() {
  local file_path=$1
  local search_query=$2
  local min_size=1000  # Minimum file size in bytes to consider successful
  
  echo "Downloading $file_path..."
  
  # Try up to 3 times
  for attempt in {1..3}; do
    curl -L -o "$file_path" "https://source.unsplash.com/random/800x500/?$search_query"
    
    # Check file size
    file_size=$(stat -f%z "$file_path" 2>/dev/null || stat -c%s "$file_path" 2>/dev/null)
    
    if [ "$file_size" -gt "$min_size" ]; then
      echo "✓ Successfully downloaded $file_path ($(($file_size/1024))KB)"
      return 0
    else
      echo "Attempt $attempt failed, retrying..."
      sleep 1
    fi
  done
  
  echo "❌ Failed to download $file_path after 3 attempts"
  return 1
}

# Download destination images
download_image "public/images/incheon.jpg" "incheon,korea,city"
download_image "public/images/jeju.jpg" "jeju,island,korea"

# Download specialty images
download_image "public/images/fertility.jpg" "fertility,medical,laboratory"
download_image "public/images/plastic-surgery.jpg" "plastic,surgery,medical"
download_image "public/images/health-screening.jpg" "medical,checkup,doctor"
download_image "public/images/orthopedic.jpg" "orthopedic,medical,joint"

# Download patient profile images
download_image "public/images/patient-profile-1.jpg" "portrait,asian,woman"
download_image "public/images/patient-profile-2.jpg" "portrait,asian,man"
download_image "public/images/patient-profile-3.jpg" "portrait,business,woman"
download_image "public/images/patient-profile-4.jpg" "portrait,business,man"

# Download hospital image
download_image "public/images/korean-hospital.jpg" "hospital,modern,medical"

echo ""
echo "Image download complete!"
echo "For production use, please replace these placeholder images with properly licensed ones."
echo "See the IMAGE_OPTIMIZATION.md document for more details." 