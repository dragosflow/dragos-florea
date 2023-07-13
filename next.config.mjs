import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';
import  webpack  from 'webpack';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'pdf'], // Adaugă extensia 'pdf' aici
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'pdf-loader',
          options: {
            // Opțional: Adaugă opțiuni specifice loaderului PDF aici, dacă este necesar
          },
        },
      ],
    });

    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
