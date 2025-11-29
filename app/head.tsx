export default function Head() {
  return (
    <>
      {/* Preconnect common external image host to reduce DNS/TCP latency */}
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />

      {/* Preload hero video for faster first paint when used as priority */}
      <link rel="preload" as="video" href="/Video Project 1.mp4" type="video/mp4" crossOrigin="anonymous" />
    </>
  );
}
