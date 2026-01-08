import{f as S,a as n,w as u}from"../chunks/mforaidw.js";import"../chunks/BD3rbpIn.js";import{a3 as E,a8 as g,a9 as H,a7 as t,a5 as e,aa as a,a6 as s}from"../chunks/DGYFMktK.js";import{h as f}from"../chunks/DMLDwe3P.js";import{s as p}from"../chunks/B_3vQTaU.js";import{b as d}from"../chunks/CI3ybSe2.js";const y=!0,R=Object.freeze(Object.defineProperty({__proto__:null,prerender:y},Symbol.toStringTag,{value:"Module"}));var b=u(S(`<meta name="description" content="Disable RC4, 3DES, and enable only secure ciphers in Nginx and Apache. Copy-paste configs included."/> <meta name="robots" content="index, follow"/> <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/blog/posts/post5"/> <meta property="og:title" content="Fix Weak Ciphers in Nginx &amp; Apache – Config Guide"/> <meta property="og:description" content="Secure your web server in 5 mins. Full Nginx &amp; Apache cipher configs."/> <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/blog/posts/post5"/> <meta property="og:type" content="article"/> <meta property="og:site_name" content="AxelBase TLS Blog"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Fix Weak Ciphers in Nginx &amp; Apache – Config Guide"/> <meta name="twitter:description" content="One-line fix for PCI DSS. Secure Nginx/Apache now."/> <meta name="twitter:image" content="https://axelbase.github.io/weak-cipher-tester/og-post5.jpg"/> <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Remediate Weak Ciphers in Nginx & Apache",
    "description": "Step-by-step guide to disable RC4, 3DES, and enable only secure cipher suites in Nginx and Apache.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Update Nginx Cipher List",
        "text": "ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;"
      },
      {
        "@type": "HowToStep",
        "name": "Update Apache SSLCipherSuite",
        "text": "SSLCipherSuite HIGH:!aNULL:!MD5:!RC4:!3DES"
      },
      {
        "@type": "HowToStep",
        "name": "Test with Tool",
        "text": "Use Weak Cipher Tester to verify A+ grade."
      }
    ]
  }
  <\/script>`,1)),D=S(`<div class="fade-in post-layout svelte-1li990r"><div class="breadcrumbs svelte-1li990r"><a class="svelte-1li990r">Blog</a> <span>/</span> <p class="svelte-1li990r">Remediating Weak Ciphers in Nginx & Apache</p></div> <article class="prose svelte-1li990r"><h1 class="svelte-1li990r">Remediating Weak Ciphers in Nginx & Apache</h1> <p class="post-meta svelte-1li990r">Published: November 15, 2025</p> <p class="svelte-1li990r">After identifying weak ciphers with the tester, the next step is remediation. Here are
			battle-tested configurations for Nginx and Apache to achieve A+ security.</p> <h2 class="svelte-1li990r">Nginx: Modern Cipher Suite</h2> <p class="svelte-1li990r">Update your SSL config:</p> <pre><code class="svelte-1li990r">
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers on;
ssl_ciphers
ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
        </code></pre> <h3 class="svelte-1li990r">Key Directives</h3> <ul class="svelte-1li990r"><li class="svelte-1li990r"><code class="svelte-1li990r">TLSv1.2 TLSv1.3</code> – Disable TLS 1.0/1.1</li> <li class="svelte-1li990r"><code class="svelte-1li990r">ECDHE</code> – Ensures forward secrecy</li> <li class="svelte-1li990r"><code class="svelte-1li990r">GCM</code> or <code class="svelte-1li990r">CHACHA20</code> – AEAD only</li> <li class="svelte-1li990r">No <code class="svelte-1li990r">RSA</code>, <code class="svelte-1li990r">CBC</code>, <code class="svelte-1li990r">3DES</code>, <code class="svelte-1li990r">RC4</code></li></ul> <h2 class="svelte-1li990r">Apache: Secure Configuration</h2> <p class="svelte-1li990r">In <code class="svelte-1li990r">ssl.conf</code> or virtual host:</p> <pre><code class="svelte-1li990r">
SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1
SSLCipherSuite
ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256
SSLHonorCipherOrder on
        </code></pre> <h2 class="svelte-1li990r">Validation</h2> <p class="svelte-1li990r">After changes:</p> <ul class="svelte-1li990r"><li class="svelte-1li990r">Restart web server</li> <li class="svelte-1li990r">Rescan with <code class="svelte-1li990r">nmap</code> or <code class="svelte-1li990r">sslyze</code></li> <li class="svelte-1li990r">Paste into <a>Weak Cipher Tester</a></li></ul> <h2 class="svelte-1li990r">FAQ</h2> <details class="svelte-1li990r"><summary class="svelte-1li990r">Will this break old browsers?</summary> <p class="svelte-1li990r">Yes — IE8 on XP, Android 4.3. Use a fallback vhost if needed.</p></details> <details class="svelte-1li990r"><summary class="svelte-1li990r">Should I include AES-CBC?</summary> <p class="svelte-1li990r">No. It’s vulnerable and unnecessary with GCM.</p></details> <details class="svelte-1li990r"><summary class="svelte-1li990r">What about HSTS?</summary> <p class="svelte-1li990r">Add <code class="svelte-1li990r">add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";</code></p></details> <p class="italic-note svelte-1li990r">Secure today. Sleep soundly tonight.</p></article></div>`);function G(v){var l=D();f("1li990r",m=>{var A=b();a(24),g(()=>{H.title="Fix Weak Ciphers in Nginx & Apache – Config Guide"}),n(m,A)});var i=e(l),h=e(i);a(4),s(i);var r=t(i,2),o=t(e(r),26),c=t(e(o),4),C=t(e(c));s(c),s(o),a(10),s(r),s(l),E(()=>{p(h,"href",`${d??""}/blog`),p(C,"href",`${d??""}/`)}),n(v,l)}export{G as component,R as universal};
