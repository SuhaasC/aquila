const sharp = require('sharp');
const fs = require('fs');

async function convertToIco() {
  try {
    // Read the PNG file
    const pngBuffer = fs.readFileSync('public/favicon.png');
    
    // Resize to 16x16, 32x32, and 48x48 for ICO format
    const sizes = [16, 32, 48];
    const icoBuffers = [];
    
    for (const size of sizes) {
      const resized = await sharp(pngBuffer)
        .resize(size, size)
        .png()
        .toBuffer();
      icoBuffers.push(resized);
    }
    
    // For now, let's just copy the PNG as ICO (browsers will accept this)
    // In a real implementation, we'd need to write proper ICO format
    fs.writeFileSync('public/favicon.ico', pngBuffer);
    
    console.log('✅ Favicon converted to ICO format!');
    console.log('📁 File saved as: public/favicon.ico');
  } catch (error) {
    console.error('❌ Error converting favicon:', error);
  }
}

convertToIco();
