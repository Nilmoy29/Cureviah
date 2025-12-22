#!/bin/bash

# Cureviah - Public Image Download Helper Script
# This script downloads specific images from Pexels for use in the Cureviah application.
# These are placeholder images for development purposes only.
# For production, please purchase properly licensed images.

echo "========================================"
echo "Cureviah - Public Image Downloader"
echo "========================================"
echo "This script will download free images from Pexels for development purposes."
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
    if [ "$file_size" -gt 5000 ]; then
      echo "✓ Successfully downloaded $file_path ($(($file_size/1024))KB)"
      return 0
    else
      echo "❌ Downloaded file is too small: $file_path ($(($file_size/1024))KB)"
      return 1
    fi
  else
    echo "❌ Failed to download $file_path"
    return 1
  fi
}

# Download destination images with direct URLs
download_direct_image "public/images/incheon.jpg" "https://images.pexels.com/photos/13932673/pexels-photo-13932673.jpeg?auto=compress&cs=tinysrgb&w=800"
download_direct_image "public/images/jeju.jpg" "https://images.pexels.com/photos/4753879/pexels-photo-4753879.jpeg?auto=compress&cs=tinysrgb&w=800"

# Download specialty images with direct URLs
download_direct_image "public/images/fertility.jpg" "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800"
download_direct_image "public/images/plastic-surgery.jpg" "https://images.pexels.com/photos/7108213/pexels-photo-7108213.jpeg?auto=compress&cs=tinysrgb&w=800"
download_direct_image "public/images/health-screening.jpg" "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800"
download_direct_image "public/images/orthopedic.jpg" "https://images.pexels.com/photos/6823562/pexels-photo-6823562.jpeg?auto=compress&cs=tinysrgb&w=800"

# Download patient profile images with direct URLs
download_direct_image "public/images/patient-profile-1.jpg" "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300"
download_direct_image "public/images/patient-profile-2.jpg" "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
download_direct_image "public/images/patient-profile-3.jpg" "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
download_direct_image "public/images/patient-profile-4.jpg" "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"

# Download hospital image with direct URL
download_direct_image "public/images/korean-hospital.jpg" "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=800"

echo ""
echo "Image download complete!"
echo "Attribution: All development images are from Pexels.com and require attribution for any public use."
echo "For production use, please replace these placeholder images with properly licensed ones."
echo "See the IMAGE_OPTIMIZATION.md document for more details." 