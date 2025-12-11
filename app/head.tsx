export default function Head() {
  return (
    <>
      <title>Techpotli — Web & Digital Services</title>
      <meta name="description" content="Techpotli — web design, development, and digital marketing services to grow your business." />
      <link rel="icon" href="/WhatsApp Image 2025-12-06 at 18.41.42_19962b05.jpg" />
      <link rel="apple-touch-icon" href="/WhatsApp Image 2025-12-06 at 18.41.42_19962b05.jpg" />

      {/* Google Analytics GA4 (G-J7BFN4WEM3) placed in head */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-J7BFN4WEM3" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J7BFN4WEM3');
          `,
        }}
      />

      {/* Preconnect common external image host to reduce DNS/TCP latency */}
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />

      {/* Preload hero video for faster first paint when used as priority */}
      <link rel="preload" as="video" href="/Video Project 1.mp4" type="video/mp4" crossOrigin="anonymous" />
    </>
  );
}
