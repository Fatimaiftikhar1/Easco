const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\fatim\\.gemini\\antigravity\\brain\\b1d085bb-5cb2-4263-9a23-e3d5f68372e5';
const mapping = {
  'media__1780230215210.jpg': 'airport.png',
  'media__1780230215218.jpg': 'factory.png',
  'media__1780230215240.jpg': 'stadium.png',
  'media__1780230215270.jpg': 'corporate.png',
  'media__1780230215275.jpg': 'hero.png'
};

const destDir = path.resolve('public/images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

Object.entries(mapping).forEach(([srcName, destName]) => {
  const srcPath = path.join(brainDir, srcName);
  const destPath = path.join(destDir, destName);
  
  if (fs.existsSync(srcPath)) {
    console.log(`Copying ${srcName} -> ${destPath}...`);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Successfully copied to ${destName}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});

console.log('User images copy completed.');
