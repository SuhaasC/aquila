#!/bin/bash

echo "🚀 Creating clean deployment package for Hostinger..."

# Create deployment directory
mkdir -p deploy
cd deploy

# Copy essential files
echo "📁 Copying essential files..."
cp -r ../.next ./
cp -r ../public ./
cp ../package.json ./
cp ../next.config.ts ./
cp ../tailwind.config.js ./
cp ../.htaccess ./
cp ../DEPLOYMENT.md ./

# Remove unnecessary build artifacts
echo "🧹 Cleaning up build artifacts..."
rm -rf .next/cache
rm -rf .next/trace
rm -rf .next/types
rm -rf .next/diagnostics

# Create a simple start script
echo "📝 Creating start script..."
cat > start.sh << 'EOF'
#!/bin/bash
echo "Starting Aquilastrat website..."
npm install --production
npm start
EOF

chmod +x start.sh

# Create package info
echo "📋 Creating package info..."
cat > PACKAGE_INFO.txt << 'EOF'
AQUILASTRAT WEBSITE DEPLOYMENT PACKAGE
=====================================

This package contains only the essential files needed for hosting.

FILES INCLUDED:
- .next/          (Production build - REQUIRED)
- public/         (Static assets - REQUIRED)
- package.json    (Dependencies - REQUIRED)
- next.config.ts  (Next.js config - REQUIRED)
- tailwind.config.js (Styling config - REQUIRED)
- .htaccess       (Hostinger optimization - REQUIRED)
- start.sh        (Start script - OPTIONAL)
- DEPLOYMENT.md   (Deployment guide - OPTIONAL)

UPLOAD INSTRUCTIONS:
1. Upload this entire 'deploy' folder to your Hostinger public_html
2. If Node.js is supported, run: chmod +x start.sh && ./start.sh
3. If no Node.js, contact support for static hosting options

TOTAL SIZE: Should be much smaller than the full project!
EOF

echo "✅ Deployment package created in 'deploy' folder!"
echo "📦 Package size:"
du -sh .

echo ""
echo "🚀 Ready to upload to Hostinger!"
echo "📁 Upload the contents of the 'deploy' folder to your public_html"
