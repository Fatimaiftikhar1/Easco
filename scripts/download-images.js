const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://calm-amethyst-mockingbird.192-250-234-53.cpanel.site/design3/';
const images = [
  'images/hero.png',
  'images/product.png',
  'images/factory.png',
  'images/airport.png',
  'images/corporate.png',
  'images/stadium.png'
];

const destDir = path.resolve('public/images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('Created directory:', destDir);
}

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Cookie': 'cpanel_tech_domain=1'
  }
};

const downloadImage = (imgRelPath) => {
  return new Promise((resolve, reject) => {
    const fullUrl = baseUrl + imgRelPath;
    const destFilePath = path.join('public', imgRelPath);
    
    // Ensure parent dir of file exists
    const fileDir = path.dirname(destFilePath);
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true });
    }
    
    console.log(`Downloading ${fullUrl} -> ${destFilePath}...`);
    
    https.get(fullUrl, options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${imgRelPath}: Status ${res.statusCode}`));
        return;
      }
      
      const fileStream = fs.createWriteStream(destFilePath);
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Successfully saved ${imgRelPath}`);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const main = async () => {
  try {
    for (const img of images) {
      await downloadImage(img);
    }
    console.log('All images downloaded successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Error downloading images:', err);
    process.exit(1);
  }
};

main();
