# Awards & Certificates

This directory contains award certificates for the portfolio website.

## Required Files

Place your award certificate images here with the following naming convention:

### 2025 Awards

- `ai-white-belt-2025.png`
- `team-star-award-2025.png`
- `standing-ovation-2025.png`
- `leadership-learning-program-2025.png`
- `info-security-data-privacy-2025.png`

### 2020-2022 Awards

- `aqt-ninja-award-2022.png`
- `express-delivery-first-winner-2021.png`
- `pat-on-back-2020.png`

### 2017-2018 Awards

- `digital-warrior-emea-2018.png`
- `pat-on-back-2018.png`
- `techm-excellence-2017.png`
- `client-recognition-sunrise-2017.png`
- `bravo-award-2017.png`

### 2011-2015 Awards

- `meritorious-mentor-2015.png`
- `star-of-month-2014.png`
- `face-off-2012.png`
- `iapp-innovation-2011.png`

## Thumbnails

Place smaller thumbnail versions in the `thumbnails/` subdirectory with `-thumb` suffix:

Example: `thumbnails/ai-white-belt-2025-thumb.png`

### Recommended Thumbnail Size

- **Dimensions:** 60x60 pixels (or 120x120 for retina displays)
- **Format:** PNG or WebP
- **Quality:** Optimized for web

## Important Notes

1. **Certificate Check:** The website automatically checks if a certificate file exists before showing the "View Certificate" button
2. **Supported Formats:** PNG, JPG, JPEG, WebP
3. **File Size:** Keep images under 500KB for optimal performance
4. **Thumbnails:** If thumbnails don't exist, only the "View Certificate" button will be shown (no thumbnail preview)

## How It Works

The Awards component performs a HEAD request to check if each certificate file exists at runtime:

- If the certificate exists → Shows "View Certificate" button
- If the certificate doesn't exist → Hides the button
- If the thumbnail exists → Shows a clickable thumbnail preview
- If the thumbnail doesn't exist → Only shows the button (no thumbnail)

This ensures a clean user experience where broken links are never displayed.
