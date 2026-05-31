const fs = require('fs');
const path = require('path');

try {
  const cssPath = path.resolve('public/easco-design.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  console.log('--- EXTRACTING KEYFRAME DETAILS ---');
  
  // Find keyframes of marquee
  const marqueeMatch = cssContent.match(/@keyframes\s+marquee\s*\{[^}]+\}/gi);
  if (marqueeMatch) {
    console.log('marquee keyframes:\n', marqueeMatch[0]);
  }
  
  // Find keyframes of heroMarquee
  const heroMarqueeMatch = cssContent.match(/@keyframes\s+heroMarquee\s*\{[^}]+\}/gi);
  if (heroMarqueeMatch) {
    console.log('heroMarquee keyframes:\n', heroMarqueeMatch[0]);
  }
  
  // Find .marquee or .marquee-track class rules
  const marqueeClassMatch = cssContent.match(/\.marquee-track\s*\{[^}]+\}/gi);
  if (marqueeClassMatch) {
    console.log('marquee-track class:\n', marqueeClassMatch[0]);
  }
  
  const marqueeWrapperMatch = cssContent.match(/\.marquee-wrapper\s*\{[^}]+\}/gi);
  if (marqueeWrapperMatch) {
    console.log('marquee-wrapper class:\n', marqueeWrapperMatch[0]);
  }
  
} catch (err) {
  console.error('Error:', err.message);
}
