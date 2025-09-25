# DazzloDocs - Professional HTML to PDF Converter

## Overview
DazzloDocs is a Node.js-based web application that converts HTML content, files, and URLs into high-quality PDF documents. It features professional letterhead support, customizable page settings, and enterprise-grade conversion quality using Puppeteer and Chromium.

## Project Architecture
- **Backend**: Express.js server with Puppeteer for PDF generation
- **Frontend**: Single-page HTML application with modern CSS styling
- **PDF Engine**: Puppeteer with system Chromium integration
- **File Processing**: Multer for file uploads, fs-extra for file operations

## Key Features
- HTML string to PDF conversion
- HTML file upload and conversion
- URL to PDF conversion
- Professional letterhead support (Trivanta and Dazzlo branding)
- Customizable page formats, margins, and orientation
- Image and table support
- Perfect CSS rendering
- Enterprise-grade quality output

## Technical Setup (Replit Environment)
### Runtime Configuration
- **Language**: Node.js 20
- **Port**: 5000 (required for Replit proxy)
- **Host**: 0.0.0.0 (allows external access)
- **System Dependencies**: Chromium browser

### File Structure
```
├── src/
│   ├── server.js       # Main Express server
│   └── converter.js    # PDF conversion logic
├── public/
│   └── index.html      # Web interface
├── uploads/            # Temporary file storage
├── outputs/            # Generated PDF files
├── temp/               # Temporary processing files
└── package.json        # Dependencies and scripts
```

### Environment Variables
- `PUPPETEER_EXECUTABLE_PATH`: Auto-detected system Chromium path
- `NODE_ENV`: development/production
- `PORT`: 5000 (default)

## Recent Changes (Import Setup)
**Date**: September 25, 2025

### Import Fixes Applied
1. **Fixed import paths**: Corrected `./src/converter` to `./converter` in server.js
2. **Updated file paths**: Fixed all `__dirname` references to work from src/ directory
3. **Port configuration**: Changed from 3000 to 5000 for Replit compatibility
4. **Host binding**: Updated to bind to `0.0.0.0` instead of localhost
5. **Chromium integration**: Added system Chromium detection for Replit environment
6. **Directory structure**: Created required uploads/, outputs/, and temp/ directories

### System Dependencies Installed
- Chromium browser for PDF generation
- Node.js 20 runtime

### Deployment Configuration
- **Target**: Autoscale (serverless)
- **Command**: `node src/server.js`
- **Ideal for**: On-demand PDF conversion service

## User Preferences
- **Coding Style**: Modern JavaScript with async/await
- **Error Handling**: Comprehensive logging and graceful fallbacks
- **Security**: Input validation and file type restrictions

## Current Status
✅ **Fully Operational**
- Server running on port 5000
- PDF conversion working correctly
- Web interface accessible
- Ready for production deployment

## Usage
1. Access the web interface at the provided URL
2. Choose conversion method (HTML content, file upload, or URL)
3. Configure PDF options (format, margins, orientation)
4. Optional: Add professional letterhead
5. Convert and download the generated PDF

## Performance Notes
- PDF generation typically takes 2-5 seconds
- File size limits: 50MB for uploads
- Automatic cleanup of temporary files after 5 seconds
- Memory-efficient streaming for large documents