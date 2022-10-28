/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
} 



module.exports = {
sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
additionalDataL: `@use 'styles' as *`

}}