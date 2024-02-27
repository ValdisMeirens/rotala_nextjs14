// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   env: {
//     MYSQL_HOST: "127.0.0.1",
//     HOST: "http://localhost:3000",
//     MYSQL_PORT: "3306",
//     MYSQL_DATABASE: "bdkdrell_test",
//     MYSQL_USER: "root",
//     MYSQL_PASSWORD: "new_password",
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  env: {
    MYSQL_HOST: "127.0.0.1",
    HOST: "http://localhost:3000",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "bdkdrell_test",
    MYSQL_USER: "bdkdrell_bdkdrell",
    MYSQL_PASSWORD: "QWERTasdfg12345!",
  },
};

module.exports = nextConfig;
