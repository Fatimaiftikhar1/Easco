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

console.log('Fetching CSS from:', url);

https.get(url, options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`Fetched CSS: ${data.length} bytes.`);
    
    // Extract any url(...) or similar paths
    const urlRegex = /url\(["']?([^"')]+)["']?\)/gi;
    const matches = new Set();
    let match;
    while ((match = urlRegex.exec(data)) !== null) {
      matches.add(match[1]);
    }
    
    console.log('--- Unique URLs found in CSS ---');
    matches.forEach(m => console.log(m));
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('Error fetching CSS:', err.message);
  process.exit(1);
});
