import { getPayload } from 'payload/dist/payload';
import config from '../payload/payload.config';
// @ts-ignore
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

const seed = async () => {
  console.log('Seeding database...');
  const payload = await getPayload({
    secret: process.env.PAYLOAD_SECRET || '7a6e76839d424b91b7d519b7d8fa8f9c',
    config,
  });

  // 1. Clear existing collections
  console.log('Clearing existing collections...');
  try {
    await payload.delete({ collection: 'products', where: {} });
    await payload.delete({ collection: 'testimonials', where: {} });
    await payload.delete({ collection: 'industry-solutions', where: {} });
    await payload.delete({ collection: 'media', where: {} });
    console.log('Cleared successfully.');
  } catch (err) {
    console.log('Collections were empty or couldn\'t be cleared. Proceeding.');
  }

  // 2. Create Media
  console.log('Creating Media items...');
  const fs = require('fs');
  const createMediaDoc = async (alt: string, source: string, filename: string) => {
    // Check if the source is a local file (e.g. starts with 'images/' or exists)
    const localPath = path.resolve(process.cwd(), 'public', source);
    if (fs.existsSync(localPath)) {
      console.log(`Uploading local file: ${localPath}`);
      const fileBuffer = fs.readFileSync(localPath);
      return await payload.create({
        collection: 'media',
        data: {
          alt,
        },
        file: {
          data: fileBuffer,
          name: filename,
          mimetype: 'image/png',
          size: fileBuffer.length,
        },
      });
    } else {
      console.log(`Source not found locally. Uploading mock and overriding with: ${source}`);
      const doc = await payload.create({
        collection: 'media',
        data: {
          alt,
        },
        file: {
          data: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64'),
          name: filename,
          mimetype: 'image/png',
          size: 68,
        },
      });

      return await payload.update({
        collection: 'media',
        id: doc.id,
        data: {
          url: source,
        },
      });
    }
  };

  // Background and Partner Logos
  const bgMedia = await createMediaDoc('Lobby Backdrop', 'images/hero.png', 'lobby-bg.png');
  const partner1 = await createMediaDoc('Partner 1 Logo', 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=200&h=80&q=80', 'partner1.jpg');
  const partner2 = await createMediaDoc('Partner 2 Logo', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&h=80&q=80', 'partner2.jpg');
  const partner3 = await createMediaDoc('Partner 3 Logo', 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=200&h=80&q=80', 'partner3.jpg');

  // Product Images
  const sgImg = await createMediaDoc('Optical Speed Gate', 'images/product.png', 'sg-100.png');
  const fbImg = await createMediaDoc('Flap Barrier', 'images/product.png', 'fb-300.png');
  const ttImg = await createMediaDoc('Tripod Turnstile', 'images/product.png', 'tt-400.png');
  const fhImg = await createMediaDoc('Full Height Turnstile', 'images/product.png', 'fh-500.png');
  const swImg = await createMediaDoc('Swing Gate', 'images/product.png', 'sw-600.png');
  const slImg = await createMediaDoc('Sliding Gate', 'images/product.png', 'sl-700.png');

  // Clients
  const clientImg1 = await createMediaDoc('Marc Lehmann Profile', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', 'marc.jpg');
  const clientImg2 = await createMediaDoc('Sarah Jenkins Profile', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', 'sarah.jpg');
  const clientImg3 = await createMediaDoc('Rajesh Patel Profile', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', 'rajesh.jpg');

  // Industries
  const indHubImg = await createMediaDoc('Transportation Hubs', 'images/airport.png', 'ind-hub.png');
  const indAirImg = await createMediaDoc('Airports', 'images/airport.png', 'ind-air.png');
  const indCorpImg = await createMediaDoc('Corporate Campuses', 'images/corporate.png', 'ind-corp.png');
  const indStadImg = await createMediaDoc('Stadiums', 'images/stadium.png', 'ind-stad.png');
  const indCityImg = await createMediaDoc('Smart Cities', 'images/corporate.png', 'ind-city.png');
  const indFacImg = await createMediaDoc('Industrial Facilities', 'images/factory.png', 'ind-fac.png');

  // 3. Create Products
  console.log('Creating Products...');
  const productsData = [
    { name: 'EASCO SG-100 Premium Speed Gate', slug: 'sg-100-premium-speed-gate', image: sgImg.id, category: 'optical-speed-gate', featured: true, shortDescription: 'High-performance glass barrier optical speed gate with bi-directional brushless motor, integrated access control, and 0.2-second rapid opening.' },
    { name: 'EASCO SG-200 Slimline Access', slug: 'sg-200-slimline-access', image: sgImg.id, category: 'optical-speed-gate', featured: true, shortDescription: 'Ultra-narrow cabinet speed gate, designed for corporate offices and premium lobbies with minimal footprint and maximum aesthetic appeal.' },
    { name: 'EASCO FB-300 Heavy Duty Flap Barrier', slug: 'fb-300-heavy-duty-flap', image: fbImg.id, category: 'flap-barrier', featured: true, shortDescription: 'Heavy-duty wing flap barrier featuring red/green rubber flaps, triple infra-red sensors, and anti-tailgating mechanisms for mass transit systems.' },
    { name: 'EASCO TT-400 Rotary Tripod Turnstile', slug: 'tt-400-rotary-tripod', image: ttImg.id, category: 'tripod-turnstile', featured: true, shortDescription: 'Robust semi-automatic mechanical tripod turnstile with drop-arm emergency bypass, durable stainless steel housing, and anti-climb design.' },
    { name: 'EASCO FH-500 Secure Full Height Turnstile', slug: 'fh-500-secure-full-height', image: fhImg.id, category: 'full-height', featured: true, shortDescription: 'Maximum security 4-section double rotor full height turnstile, built in structural hot-dip galvanized steel for perimeter defense.' },
    { name: 'EASCO SW-600 Cylindrical Swing Gate', slug: 'sw-600-cylindrical-swing', image: swImg.id, category: 'swing-gate', featured: true, shortDescription: 'Wide lane mechanical or motorized cylindrical swing barrier, designed specifically for wheelchair, VIP passage, and large parcel transit.' },
    { name: 'EASCO SL-700 High-Speed Sliding Gate', slug: 'sl-700-high-speed-sliding', image: slImg.id, category: 'sliding-gate', featured: true, shortDescription: 'High-speed retractable sliding gate with full-height acrylic panels, offering complete containment and sophisticated access security control.' }
  ];

  for (const item of productsData) {
    await payload.create({
      collection: 'products',
      data: item,
    });
  }

  // 4. Create Testimonials
  console.log('Creating Testimonials...');
  const testimonialsData = [
    { clientName: 'Marc Lehmann', clientCompany: 'Metro Link Transportation Authority', clientPhoto: clientImg1.id, rating: 5, featured: true, reviewText: 'We deployed EASCO full height turnstiles across 12 subway stations. They have successfully handled an average of 450,000 daily passages over the past 3 years with zero motor failures. The structural SUS304 steel is completely rust-free.' },
    { clientName: 'Sarah Jenkins', clientCompany: 'AeroGate International Airport', clientPhoto: clientImg2.id, rating: 5, featured: true, reviewText: 'Their optical speed gates integrated seamlessly with our custom biometric facial recognition readers. The anti-tailgating sensors are exceptionally precise, dropping unauthorized access attempts instantly without interrupting flow.' },
    { clientName: 'Rajesh Patel', clientCompany: 'Apex Corporate HQ Towers', clientPhoto: clientImg3.id, rating: 5, featured: true, reviewText: 'EASCO OEM custom finishing was a lifesaver. Our architectural lobby requested specialized gold titanium plating and custom curved cabinet dimensions. EASCO manufactured exactly to specs and shipped on schedule.' }
  ];

  for (const item of testimonialsData) {
    await payload.create({
      collection: 'testimonials',
      data: item,
    });
  }

  // 5. Create Industry Solutions
  console.log('Creating Industry Solutions...');
  const solutionsData = [
    { title: 'Transportation Hubs', image: indHubImg.id, link: '#quote' },
    { title: 'Airports', image: indAirImg.id, link: '#quote' },
    { title: 'Corporate Campuses', image: indCorpImg.id, link: '#quote' },
    { title: 'Stadiums', image: indStadImg.id, link: '#quote' },
    { title: 'Smart Cities', image: indCityImg.id, link: '#quote' },
    { title: 'Industrial Facilities', image: indFacImg.id, link: '#quote' }
  ];

  for (const item of solutionsData) {
    await payload.create({
      collection: 'industry-solutions',
      data: item,
    });
  }

  // 6. Update Globals
  console.log('Updating Stats global...');
  await payload.updateGlobal({
    slug: 'stats',
    data: {
      installationsWorldwide: 500,
      countriesServed: 40,
      patentsHeld: 200,
      yearsExperience: 20,
    },
  });

  console.log('Updating HomepageSettings global...');
  await payload.updateGlobal({
    slug: 'homepage-settings',
    data: {
      heroHeadline: [
        {
          type: 'paragraph',
          children: [
            { text: 'Engineered for ' },
            { text: 'Every Entry.', bold: true }
          ]
        }
      ],
      heroSubtext: 'Direct manufacturer-grade architectural access gates. Designed for high passenger traffic, biometric access integration, and 10 million cycles MCBF.',
      heroCTAPrimary: 'Request a Quote',
      heroCTASecondary: 'Explore Products',
      heroBackgroundImage: bgMedia.id,
      trustedByLogos: [
        { logo: partner1.id },
        { logo: partner2.id },
        { logo: partner3.id }
      ]
    },
  });

  console.log('Seeding finished successfully!');
  process.exit(0);
};

seed().catch((err) => {
  console.error('Error seeding database:', err);
  process.exit(1);
});
