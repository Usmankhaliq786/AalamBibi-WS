/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    USER_EMAIL: process.env.USER_EMAIL,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
    MERCHANT_ID:process.env.MERCHANT_ID,
    SECURED_KEY:process.env.SECURED_KEY,
    ACCESS_TOKEN_URL:process.env.ACCESS_TOKEN_URL,
    PAYMENT_URL:process.env.PAYMENT_URL,
    SUCCESS_URL:process.env.SUCCESS_URL,
    FAILURE_URL:process.env.FAILURE_URL,
    CHECKOUT_URL:process.env.CHECKOUT_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
