import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Skinology Centre-Trusted Clinic for Hair Restoration & Hair Fall Treatment",
  description:
    "Trusted Clinic for Hair Restoration & Hair Fall Treatment Expert solutions for hair loss, backed by 10+ years of experience and 10,000+ successful patient outcomes.",
  generator: 'Nextjs15',
  icons: {
    icon: [
      {
        url: "https://ik.imagekit.io/xivdiehvf/public/fav.jpg",
        sizes: "any",
      },
      {
        url: "https://ik.imagekit.io/xivdiehvf/public/fav.jpg",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://ik.imagekit.io/xivdiehvf/public/fav.jpg",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://ik.imagekit.io/xivdiehvf/public/fav.jpg",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "https://ik.imagekit.io/xivdiehvf/public/fav.jpg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "https://ik.imagekit.io/xivdiehvf/public/fav.jpg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        {/* Google Tag Manager - OLD: GTM-TF9BGTJ3, NEW: GTM-M82DBK7H */}
        <Script
          id="google-tag-manager-old"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TF9BGTJ3');
            `,
          }}
        />
        
        {/* NEW Google Tag Manager - GTM-M82DBK7H */}
        <Script
          id="google-tag-manager-new"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M82DBK7H');
            `,
          }}
        />
        
        {/* Google Analytics Script - G-6G1DKCKN2P */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6G1DKCKN2P"
        />
        <Script
          id="google-analytics-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6G1DKCKN2P');
            `,
          }}
        />
        
        {/* Google Analytics Script - G-5KSN180QHB */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5KSN180QHB"
        />
        <Script
          id="google-analytics-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5KSN180QHB');
            `,
          }}
        />

        {/* NEW Google Analytics Script - G-DF17L7DHXX */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DF17L7DHXX"
        />
        <Script
          id="google-analytics-new"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DF17L7DHXX');
            `,
          }}
        />

        {/* Microsoft Clarity Analytics */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uyr5mdpdu7");
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1393409298924996');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Click call conversion tracking function */}
        <Script
          id="click-call-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Event snippet for click call no to call conversion page -->
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-11413326538/EVUUCPuC_u8bEMqVpsIq',
                  'value': 1.0,
                  'currency': 'INR',
                  'event_callback': callback
                });
                return false;
              }
              
              // Alternative simplified version for direct use
              function gtag_report_call_conversion() {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-11413326538/EVUUCPuC_u8bEMqVpsIq',
                    'value': 1.0,
                    'currency': 'INR'
                  });
                }
                return false;
              }
            `,
          }}
        />

        {/* Direct conversion tracking for call clicks */}
        <Script
          id="direct-call-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Direct conversion tracking initialization
              if (typeof window !== 'undefined') {
                window.reportCallConversion = function(url) {
                  var callback = function () {
                    if (typeof(url) != 'undefined') {
                      window.location = url;
                    }
                  };
                  
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-11413326538/EVUUCPuC_u8bEMqVpsIq',
                      'value': 1.0,
                      'currency': 'INR',
                      'event_callback': callback
                    });
                  }
                  return false;
                };
                
                // Add event listeners to call links with data-track-call attribute
                document.addEventListener('DOMContentLoaded', function() {
                  var callLinks = document.querySelectorAll('a[href^="tel:"], a[data-track-call="true"]');
                  callLinks.forEach(function(link) {
                    link.addEventListener('click', function(e) {
                      if (typeof gtag !== 'undefined') {
                        gtag('event', 'conversion', {
                          'send_to': 'AW-11413326538/EVUUCPuC_u8bEMqVpsIq',
                          'value': 1.0,
                          'currency': 'INR'
                        });
                      }
                    });
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className="font-sans">
        {/* Meta Pixel Noscript */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1393409298924996&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* OLD Google Tag Manager (noscript) - GTM-TF9BGTJ3 */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TF9BGTJ3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager - OLD"
          />
        </noscript>
        
        {/* NEW Google Tag Manager (noscript) - GTM-M82DBK7H */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M82DBK7H"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager - NEW"
          />
        </noscript>
        
        {children}
        
        {/* Inline script to enhance call tracking */}
        <Script
          id="enhance-call-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Enhance call tracking for dynamically added content
              if (typeof window !== 'undefined') {
                // Make conversion function globally available
                window.gtagReportCallConversion = function(url) {
                  var callback = function () {
                    if (typeof(url) != 'undefined') {
                      window.location = url;
                    }
                  };
                  
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-11413326538/EVUUCPuC_u8bEMqVpsIq',
                      'value': 1.0,
                      'currency': 'INR',
                      'event_callback': callback
                    });
                  }
                  return false;
                };
                
                // Listen for call button clicks
                window.addEventListener('click', function(e) {
                  var target = e.target;
                  var callLink = target.closest('a[href^="tel:"]');
                  
                  if (callLink && typeof gtag !== 'undefined') {
                    // Track call conversion
                    gtag('event', 'conversion', {
                      'send_to': 'AW-11413326538/EVUUCPuC_u8bEMqVpsIq',
                      'value': 1.0,
                      'currency': 'INR'
                    });
                    
                    // Optional: Track as Google Analytics event too
                    gtag('event', 'phone_call_click', {
                      'event_category': 'Contact',
                      'event_label': callLink.href
                    });
                  }
                }, true);
              }
            `,
          }}
        />
      </body>
    </html>
  )
}