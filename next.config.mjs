import path from 'path';
import { fileURLToPath } from 'url';
import { withPayload } from '@payloadcms/next-payload';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withPayload(nextConfig, {
  configPath: path.resolve(__dirname, './payload/payload.config.ts'),
});
