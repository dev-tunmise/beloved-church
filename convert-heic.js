const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

const imagesDir = path.join(__dirname, 'public', 'images');
const heicFiles = ['IMG_0619.HEIC', 'IMG_0625.HEIC', 'IMG_0633.HEIC', 'IMG_0646.HEIC', 'IMG_0648.HEIC', 'IMG_0655.HEIC'];

async function convertHeicToJpg(filename) {
  const inputPath = path.join(imagesDir, filename);
  const outputFilename = filename.replace('.HEIC', '.jpg');
  const outputPath = path.join(imagesDir, outputFilename);

  try {
    console.log(`Converting ${filename}...`);
    
    // Read the HEIC file
    const inputBuffer = await fs.promises.readFile(inputPath);
    
    // Convert to JPG
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.9 // High quality (0-1 scale)
    });
    
    // Write the JPG file
    await fs.promises.writeFile(outputPath, outputBuffer);
    
    console.log(`✓ Converted ${filename} to ${outputFilename}`);
  } catch (error) {
    console.error(`✗ Error converting ${filename}:`, error.message);
  }
}

async function convertAll() {
  console.log('Starting HEIC to JPG conversion...\n');
  
  for (const file of heicFiles) {
    await convertHeicToJpg(file);
  }
  
  console.log('\nConversion complete!');
}

convertAll();
