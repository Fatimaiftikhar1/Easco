const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('--- STARTING WIPE AND CLEAN RE-SEED ---');

// 1. Wipe public/media
const publicMediaDir = path.resolve('public/media');
if (fs.existsSync(publicMediaDir)) {
  console.log(`Cleaning files in: ${publicMediaDir}`);
  const files = fs.readdirSync(publicMediaDir);
  files.forEach((file) => {
    if (file !== '.gitkeep') {
      const filePath = path.join(publicMediaDir, file);
      try {
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${file}`);
      } catch (e) {
        console.error(`Could not delete: ${file}`, e.message);
      }
    }
  });
}

// 2. Wipe payload/public/media
const payloadMediaDir = path.resolve('payload/public/media');
if (fs.existsSync(payloadMediaDir)) {
  console.log(`Cleaning files in: ${payloadMediaDir}`);
  const files = fs.readdirSync(payloadMediaDir);
  files.forEach((file) => {
    if (file !== '.gitkeep') {
      const filePath = path.join(payloadMediaDir, file);
      try {
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${file}`);
      } catch (e) {
        console.error(`Could not delete: ${file}`, e.message);
      }
    }
  });
}

console.log('FileSystem clean completed successfully.');

// 3. Trigger clean DB Seed
console.log('Running clean database seeding...');
try {
  const output = execSync('npm run seed', { stdio: 'inherit' });
  console.log('Wipe and Clean Re-seed finished successfully.');
  process.exit(0);
} catch (err) {
  console.error('Error running seed script:', err.message);
  process.exit(1);
}
