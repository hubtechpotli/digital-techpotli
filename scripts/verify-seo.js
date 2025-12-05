/**
 * SEO Verification Script
 * Run this in browser console on each page to verify SEO implementation
 * 
 * Usage: Copy and paste this entire script into browser console (F12)
 */

(function() {
  console.log('🔍 SEO Verification Report');
  console.log('========================\n');
  
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };
  
  // Check Title
  const title = document.querySelector('title');
  if (title && title.textContent.trim()) {
    results.passed.push('✅ Title tag present: ' + title.textContent);
  } else {
    results.failed.push('❌ Title tag missing or empty');
  }
  
  // Check Description
  const description = document.querySelector('meta[name="description"]');
  if (description && description.content.trim()) {
    results.passed.push('✅ Meta description present: ' + description.content.substring(0, 100) + '...');
  } else {
    results.failed.push('❌ Meta description missing or empty');
  }
  
  // Check Canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && canonical.href) {
    results.passed.push('✅ Canonical URL present: ' + canonical.href);
    
    // Verify canonical matches current URL
    const currentUrl = window.location.href.split('?')[0]; // Remove query params
    if (canonical.href === currentUrl || canonical.href === currentUrl + '/') {
      results.passed.push('✅ Canonical URL matches current page');
    } else {
      results.warnings.push('⚠️ Canonical URL does not match current page');
    }
  } else {
    results.failed.push('❌ Canonical URL missing');
  }
  
  // Check Robots
  const robots = document.querySelector('meta[name="robots"]');
  if (robots) {
    results.passed.push('✅ Robots meta tag present: ' + robots.content);
  } else {
    results.warnings.push('⚠️ Robots meta tag not found (may be set via Next.js config)');
  }
  
  // Check Googlebot
  const googlebot = document.querySelector('meta[name="googlebot"]');
  if (googlebot) {
    results.passed.push('✅ Googlebot meta tag present: ' + googlebot.content);
  } else {
    results.warnings.push('⚠️ Googlebot meta tag not found (may be set via Next.js config)');
  }
  
  // Check Author
  const author = document.querySelector('meta[name="author"]');
  if (author && author.content === 'TechPotli Digital') {
    results.passed.push('✅ Author meta tag present: ' + author.content);
  } else {
    results.warnings.push('⚠️ Author meta tag missing or incorrect');
  }
  
  // Check Language
  const language = document.querySelector('meta[name="language"]');
  if (language) {
    results.passed.push('✅ Language meta tag present: ' + language.content);
  } else {
    results.warnings.push('⚠️ Language meta tag missing');
  }
  
  // Check Keywords
  const keywords = document.querySelector('meta[name="keywords"]');
  if (keywords && keywords.content.trim()) {
    results.passed.push('✅ Keywords meta tag present');
  } else {
    results.warnings.push('⚠️ Keywords meta tag missing');
  }
  
  // Check Favicon
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    results.passed.push('✅ Favicon link present: ' + favicon.href);
  } else {
    results.failed.push('❌ Favicon link missing');
  }
  
  // Check GTM
  const gtmScript = document.querySelector('script[src*="googletagmanager.com/gtm.js"]');
  const gtmNoscript = document.querySelector('noscript iframe[src*="googletagmanager.com"]');
  
  if (gtmScript || document.querySelector('script[id="google-tag-manager"]')) {
    results.passed.push('✅ Google Tag Manager script present');
  } else {
    results.failed.push('❌ Google Tag Manager script missing');
  }
  
  if (gtmNoscript) {
    results.passed.push('✅ Google Tag Manager noscript present');
  } else {
    results.warnings.push('⚠️ Google Tag Manager noscript missing');
  }
  
  // Check OG Tags (Homepage only)
  const isHomepage = window.location.pathname === '/' || window.location.pathname === '';
  const ogTags = {
    'og:title': document.querySelector('meta[property="og:title"]'),
    'og:description': document.querySelector('meta[property="og:description"]'),
    'og:type': document.querySelector('meta[property="og:type"]'),
    'og:url': document.querySelector('meta[property="og:url"]'),
    'og:site_name': document.querySelector('meta[property="og:site_name"]'),
    'og:image': document.querySelector('meta[property="og:image"]')
  };
  
  if (isHomepage) {
    let ogCount = 0;
    Object.keys(ogTags).forEach(tag => {
      if (ogTags[tag]) {
        ogCount++;
        results.passed.push('✅ ' + tag + ' present');
      } else {
        results.failed.push('❌ ' + tag + ' missing (required on homepage)');
      }
    });
    
    if (ogCount === 6) {
      results.passed.push('✅ All 6 OG tags present on homepage');
    }
  } else {
    // Check if OG tags are present on non-homepage (should not be)
    const hasOgTags = Object.values(ogTags).some(tag => tag !== null);
    if (hasOgTags) {
      results.warnings.push('⚠️ OG tags found on non-homepage (should only be on homepage)');
    } else {
      results.passed.push('✅ No OG tags on this page (correct for non-homepage)');
    }
  }
  
  // Check Twitter Cards (Homepage only)
  const twitterTags = {
    'twitter:card': document.querySelector('meta[name="twitter:card"]'),
    'twitter:title': document.querySelector('meta[name="twitter:title"]'),
    'twitter:description': document.querySelector('meta[name="twitter:description"]'),
    'twitter:image': document.querySelector('meta[name="twitter:image"]')
  };
  
  if (isHomepage) {
    let twitterCount = 0;
    Object.keys(twitterTags).forEach(tag => {
      if (twitterTags[tag]) {
        twitterCount++;
        results.passed.push('✅ ' + tag + ' present');
      } else {
        results.failed.push('❌ ' + tag + ' missing (required on homepage)');
      }
    });
    
    if (twitterCount === 4) {
      results.passed.push('✅ All 4 Twitter card tags present on homepage');
    }
  } else {
    const hasTwitterTags = Object.values(twitterTags).some(tag => tag !== null);
    if (hasTwitterTags) {
      results.warnings.push('⚠️ Twitter tags found on non-homepage (should only be on homepage)');
    } else {
      results.passed.push('✅ No Twitter tags on this page (correct for non-homepage)');
    }
  }
  
  // Check Schema (Homepage only)
  const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
  if (isHomepage) {
    if (schemaScripts.length > 0) {
      results.passed.push('✅ Schema markup present (' + schemaScripts.length + ' script(s))');
      schemaScripts.forEach((script, index) => {
        try {
          const schema = JSON.parse(script.textContent);
          results.passed.push('   Schema type: ' + schema['@type']);
        } catch (e) {
          results.warnings.push('⚠️ Schema script ' + (index + 1) + ' has invalid JSON');
        }
      });
    } else {
      results.failed.push('❌ Schema markup missing (required on homepage)');
    }
  } else {
    if (schemaScripts.length > 0) {
      results.warnings.push('⚠️ Schema markup found on non-homepage (should only be on homepage)');
    }
  }
  
  // Print Results
  console.log('\n📊 RESULTS SUMMARY');
  console.log('==================\n');
  
  if (results.passed.length > 0) {
    console.log('✅ PASSED (' + results.passed.length + '):');
    results.passed.forEach(item => console.log('  ' + item));
  }
  
  if (results.warnings.length > 0) {
    console.log('\n⚠️ WARNINGS (' + results.warnings.length + '):');
    results.warnings.forEach(item => console.log('  ' + item));
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ FAILED (' + results.failed.length + '):');
    results.failed.forEach(item => console.log('  ' + item));
  }
  
  console.log('\n📈 SCORE: ' + results.passed.length + ' passed, ' + 
              results.warnings.length + ' warnings, ' + 
              results.failed.length + ' failed');
  
  console.log('\n📍 Current Page: ' + window.location.href);
  console.log('\n✅ Verification Complete!');
  
  return results;
})();

