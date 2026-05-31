const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://calm-amethyst-mockingbird.192-250-234-53.cpanel.site/design3/_astro/index.DrYF46vV.css';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Cookie': 'cpanel_tech_domain=1'
  }
};

console.log('Downloading design stylesheet from:', url);

https.get(url, options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to download CSS: Status ${res.statusCode}`);
    process.exit(1);
  }

  const destPath = path.resolve('public/easco-design.css');
  const fileStream = fs.createWriteStream(destPath);
  res.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Successfully saved stylesheet to:', destPath);
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('Error downloading CSS:', err.message);
  process.exit(1);
});
