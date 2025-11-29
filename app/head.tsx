export default function Head() {
  return (
    <>
      <title>Techpotli Digital — Web & Digital Services</title>
      <meta name="description" content="Techpotli Digital — web design, development, and digital marketing services to grow your business." />
      <link rel="icon" href="/New_Techpotli_Logo_(2)[2].png" />
      <link rel="apple-touch-icon" href="/New_Techpotli_Logo_(2)[2].png" />
      {/* Preconnect common external image host to reduce DNS/TCP latency */}
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />

      {/* Preload hero video for faster first paint when used as priority */}
      <link rel="preload" as="video" href="/Video Project 1.mp4" type="video/mp4" crossOrigin="anonymous" />
    </>
  );
}
