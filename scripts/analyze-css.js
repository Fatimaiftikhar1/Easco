const fs = require('fs');
const path = require('path');

try {
  const cssPath = path.resolve('public/easco-design.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  console.log('--- TARGET CSS ANALSYSIS ---');
  
  // Find variables in :root or similar selector
  const varRegex = /--[a-zA-Z0-9_-]+:\s*[^;}]+/g;
  const matches = cssContent.match(varRegex) || [];
  
  console.log('Unique CSS variables:');
  [...new Set(matches)].forEach(m => console.log(`  ${m}`));
  
  // Look for marquee keyframe animation
  const keyframesRegex = /@keyframes\s+[a-zA-Z0-9_-]+\s*\{[^}]+\}/gi;
  const keyframesMatches = cssContent.match(keyframesRegex) || [];
  console.log('\nKeyframe Animations:');
  [...new Set(keyframesMatches)].forEach(k => console.log(`  ${k}\n`));
  
} catch (err) {
  console.error('Error analyzing CSS:', err.message);
}
