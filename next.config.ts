const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: true,
  images: {
    domains: ['localhost'], // Añade aquí cualquier dominio de imágenes externo que uses
    unoptimized: true
  }
};

export default nextConfig;
