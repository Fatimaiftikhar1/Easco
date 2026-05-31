const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://calm-amethyst-mockingbird.192-250-234-53.cpanel.site/design3/';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Cookie': 'cpanel_tech_domain=1' // Inject the cookie to bypass cPanel technical domain gate
  }
};

console.log('Fetching full HTML from:', url);

https.get(url, options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`Fetched ${data.length} bytes.`);
    const destPath = path.resolve('full-page.html');
    fs.writeFileSync(destPath, data, 'utf8');
    console.log('Saved to:', destPath);
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err.message);
  process.exit(1);
});
