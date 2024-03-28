/** @type {import('next').NextConfig} */

import { withNextVideo } from 'next-video/process';

const nextConfig = {
    experimental: {
        optimizePackageImports: ['react-bootstrap'],
    }
}; // Your current Next Config object

export default withNextVideo(nextConfig);