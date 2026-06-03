#!/usr/bin/env python3
"""
Download real images from Unsplash and convert to WebP format
"""

import os
import requests
from PIL import Image
from io import BytesIO
import urllib.parse

# Base directory for assets
ASSETS_DIR = os.path.join(os.path.dirname(__file__), "src", "assets")

# Image URLs organized by category
# Using Unsplash search API for reliable image sourcing
IMAGES = {
    "projects": [
        {
            "name": "flowboard-dashboard.webp",
            "url": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",  # Dashboard
            "alt": "Analytics Dashboard"
        },
        {
            "name": "pulse-health-app.webp",
            "url": "https://images.unsplash.com/photo-1576091160506-112f51ffbde6?w=800&h=600&fit=crop",  # Health tracking
            "alt": "Health App"
        },
        {
            "name": "nexaos-workspace.webp",
            "url": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",  # Workspace/office
            "alt": "Workspace"
        },
        {
            "name": "mobile-onboarding.webp",
            "url": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",  # Mobile development
            "alt": "Mobile App"
        },
        {
            "name": "api-docs.webp",
            "url": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",  # Code/development
            "alt": "API Documentation"
        },
        {
            "name": "design-system.webp",
            "url": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",  # Design tools
            "alt": "Design System"
        },
    ],
    "stack": [
        {
            "name": "react-card.webp",
            "url": "https://images.unsplash.com/photo-1608070042614-157f11fcb13f?w=400&h=400&fit=crop",  # React/web
            "alt": "React"
        },
        {
            "name": "go-card.webp",
            "url": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",  # Programming
            "alt": "Go"
        },
        {
            "name": "aws-card.webp",
            "url": "https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=400&h=400&fit=crop",  # Cloud/tech
            "alt": "AWS"
        },
        {
            "name": "postgres-card.webp",
            "url": "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=400&h=400&fit=crop",  # Database
            "alt": "PostgreSQL"
        },
        {
            "name": "docker-card.webp",
            "url": "https://images.unsplash.com/photo-1521821713519-fdd32c45657d?w=400&h=400&fit=crop",  # Containers
            "alt": "Docker"
        },
        {
            "name": "figma-card.webp",
            "url": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",  # Design
            "alt": "Figma"
        },
    ],
    "team": [
        {
            "name": "whiteboard.webp",
            "url": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",  # Team collaboration
            "alt": "Whiteboard session"
        },
        {
            "name": "coding.webp",
            "url": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",  # Coding
            "alt": "Development work"
        },
        {
            "name": "design-review.webp",
            "url": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",  # Team review
            "alt": "Design review session"
        },
    ],
    "outcomes": [
        {
            "name": "retention-card.webp",
            "url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",  # Analytics/retention
            "alt": "340% retention"
        },
        {
            "name": "appstore-card.webp",
            "url": "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop",  # App performance
            "alt": "App Store rating"
        },
        {
            "name": "arr-card.webp",
            "url": "https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=600&h=400&fit=crop",  # Growth/metrics
            "alt": "ARR milestone"
        },
        {
            "name": "speed-card.webp",
            "url": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",  # Speed/timeline
            "alt": "Launch speed"
        },
    ]
}

def download_and_convert(url, output_path, quality=85):
    """Download image from URL and convert to WebP"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        # Open image
        img = Image.open(BytesIO(response.content))
        
        # Convert RGBA to RGB if needed
        if img.mode in ('RGBA', 'LA', 'P'):
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            rgb_img.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = rgb_img
        
        # Save as WebP
        img.save(output_path, 'WEBP', quality=quality, method=6)
        return True
    except Exception as e:
        print(f"✗ Failed to download {url}: {e}")
        return False

def main():
    print("📥 Downloading real images from Unsplash...\n")
    
    success_count = 0
    fail_count = 0
    
    for category, images in IMAGES.items():
        category_path = os.path.join(ASSETS_DIR, category)
        os.makedirs(category_path, exist_ok=True)
        
        print(f"📁 Processing {category.upper()} ({len(images)} images)...")
        
        for image_info in images:
            output_path = os.path.join(category_path, image_info["name"])
            
            # Skip if already exists
            if os.path.exists(output_path):
                print(f"  ✓ {image_info['name']} (already exists)")
                success_count += 1
                continue
            
            if download_and_convert(image_info["url"], output_path):
                print(f"  ✓ {image_info['name']}")
                success_count += 1
            else:
                print(f"  ✗ {image_info['name']}")
                fail_count += 1
        
        print()
    
    print(f"\n✅ Download complete!")
    print(f"   ✓ {success_count} images ready")
    if fail_count > 0:
        print(f"   ✗ {fail_count} images failed")

if __name__ == "__main__":
    main()
