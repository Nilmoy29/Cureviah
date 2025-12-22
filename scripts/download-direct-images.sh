#!/bin/bash

# Cureviah - Direct Image Download Helper Script
# This script downloads specific images from Unsplash for use in the Cureviah application.
# These are placeholder images for development purposes only.
# For production, please purchase properly licensed images.

echo "========================================"
echo "Cureviah - Direct Image Downloader"
echo "========================================"
echo "This script will download specific images from Unsplash for development purposes."
echo "For production use, please replace with properly licensed images."
echo ""

# Create directories if they don't exist
mkdir -p public/images

# Function to download an image directly
download_direct_image() {
  local file_path=$1
  local image_url=$2
  
  echo "Downloading $file_path..."
  curl -L -o "$file_path" "$image_url"
  
  # Check if download was successful
  if [ $? -eq 0 ] && [ -s "$file_path" ]; then
    file_size=$(stat -f%z "$file_path" 2>/dev/null || stat -c%s "$file_path" 2>/dev/null)
    echo "✓ Successfully downloaded $file_path ($(($file_size/1024))KB)"
  else
    echo "❌ Failed to download $file_path"
  fi
}

# Download destination images with direct URLs
download_direct_image "public/images/incheon.jpg" "https://images.unsplash.com/photo-1599314707617-e71313e7180e?q=80&w=800&auto=format&fit=crop"
download_direct_image "public/images/jeju.jpg" "https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?q=80&w=800&auto=format&fit=crop"

# Download specialty images with direct URLs
download_direct_image "public/images/fertility.jpg" "https://images.unsplash.com/photo-1579165466741-7f35e4755169?q=80&w=800&auto=format&fit=crop"
download_direct_image "public/images/plastic-surgery.jpg" "https://images.unsplash.com/photo-1606202762608-61b5dd178810?q=80&w=800&auto=format&fit=crop"
download_direct_image "public/images/health-screening.jpg" "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=800&auto=format&fit=crop"
download_direct_image "public/images/orthopedic.jpg" "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"

# Download patient profile images with direct URLs
download_direct_image "public/images/patient-profile-1.jpg" "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop"
download_direct_image "public/images/patient-profile-2.jpg" "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop"
download_direct_image "public/images/patient-profile-3.jpg" "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
download_direct_image "public/images/patient-profile-4.jpg" "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"

# Download hospital image with direct URL
download_direct_image "public/images/korean-hospital.jpg" "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop"

echo ""
echo "Image download complete!"
echo "For production use, please replace these placeholder images with properly licensed ones."
echo "See the IMAGE_OPTIMIZATION.md document for more details." 