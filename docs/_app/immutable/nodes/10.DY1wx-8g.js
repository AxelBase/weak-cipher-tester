import{f as i,a,w as d}from"../chunks/BvANUoC2.js";import"../chunks/BmqhGUxW.js";import{a3 as g,a8 as m,a9 as h,aa as s,a5 as o,a6 as l}from"../chunks/B0MWt_GB.js";import{h as v}from"../chunks/CgW0VNLO.js";import{s as j}from"../chunks/C2KAeFN8.js";import{b as u}from"../chunks/BqyEtGKA.js";const S=!0,w=Object.freeze(Object.defineProperty({__proto__:null,prerender:S},Symbol.toStringTag,{value:"Module"}));var b=d(i(`<meta name="description" content="How weak cipher configs in load balancers expose Log4Shell even after patching. Scan your TLS now."/> <meta name="robots" content="index, follow"/> <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/posts/post7"/> <meta property="og:title" content="Log4Shell via Weak TLS: Hidden Attack Vector"/> <meta property="og:description" content="Patched Log4j? Weak TLS in F5/HAProxy can still get you. Audit now."/> <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/blog/posts/post7"/> <meta property="og:type" content="article"/> <meta property="og:image" content="https://weak-cipher-tester.axelbase.com/og-post7.jpg"/> <meta property="og:site_name" content="AxelBase TLS Blog"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Log4Shell via Weak TLS: Hidden Attack Vector"/> <meta name="twitter:description" content="Weak ciphers = backdoor for Log4Shell. Free scan inside."/> <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Detecting Log4Shell in Cipher Scans: A Hidden Risk",
    "description": "How weak TLS configurations enable Log4Shell exploitation via load balancers and reverse proxies.",
    "datePublished": "2025-11-15",
    "dateModified": "2025-11-15",
    "author": {
      "@type": "Person",
      "name": "AxelBase Security Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AxelBase"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://axelbase.github.io/weak-cipher-tester/blog/posts/post7"
    }
  }
  <\/script>`,1)),y=i(`<div class="fade-in post-layout svelte-jo8es1"><div class="breadcrumbs svelte-jo8es1"><a class="svelte-jo8es1">Blog</a> <span>/</span> <p class="svelte-jo8es1">Detecting Log4Shell in Cipher Scans: A Hidden Risk</p></div> <article class="prose svelte-jo8es1"><h1 class="svelte-jo8es1">Detecting Log4Shell in Cipher Scans: A Hidden Risk</h1> <p class="post-meta svelte-jo8es1">Published: November 15, 2025</p> <p class="svelte-jo8es1">Log4Shell (CVE-2021-44228) remains a top exploited vulnerability in 2025. But many miss a
			critical vector: <strong>TLS termination at edge devices</strong>.</p> <h2 class="svelte-jo8es1">The Attack Chain</h2> <ol><li>Attacker sends: User-Agent</li> <li>Load balancer (HAProxy, Nginx, F5) logs the header</li> <li><code class="svelte-jo8es1">log4j</code> in the LB triggers RCE</li> <li>Backend Java app may be patched — but the <strong>edge is not</strong></li></ol> <h3 class="svelte-jo8es1">Role of Weak Ciphers</h3> <p class="svelte-jo8es1">Weak ciphers enable <strong>downgrade attacks</strong>:</p> <ul class="svelte-jo8es1"><li class="svelte-jo8es1"><code class="svelte-jo8es1">TLS_RSA_WITH_RC4_128_MD5</code> allows protocol downgrade</li> <li class="svelte-jo8es1">Attacker forces TLS 1.0 + malicious header</li> <li class="svelte-jo8es1">Even patched backends are bypassed</li></ul> <h2 class="svelte-jo8es1">Scan Example</h2> <pre><code class="svelte-jo8es1">
nmap --script ssl-enum-ciphers -p 443 lb.example.com
| TLSv1.0:
|   TLS_RSA_WITH_RC4_128_MD5 (F)
        </code></pre> <h2 class="svelte-jo8es1">Mitigation</h2> <ul class="svelte-jo8es1"><li class="svelte-jo8es1">Disable <strong>RC4, 3DES, TLS 1.0/1.1</strong> at the edge</li> <li class="svelte-jo8es1">Use <strong>TLS 1.3 + HSTS</strong></li> <li class="svelte-jo8es1">Remove <code class="svelte-jo8es1">log4j</code> from frontends or disable message lookup</li> <li class="svelte-jo8es1">Scan <strong>all TLS endpoints</strong> with the Weak Cipher Tester</li></ul> <h2 class="svelte-jo8es1">FAQ</h2> <details class="svelte-jo8es1"><summary class="svelte-jo8es1">Is Log4Shell still active in 2025?</summary> <p class="svelte-jo8es1">Yes — CISA lists it in the KEV catalog. Edge devices are often forgotten.</p></details> <details class="svelte-jo8es1"><summary class="svelte-jo8es1">Can CDN protect against this?</summary> <p class="svelte-jo8es1">Only if it strips malicious headers before logging.</p></details> <details class="svelte-jo8es1"><summary class="svelte-jo8es1">Should I scan my CDN?</summary> <p class="svelte-jo8es1">Yes — Cloudflare, Akamai, Fastly terminate TLS too.</p></details> <p class="italic-note svelte-jo8es1">Log4Shell isn’t dead. Your edge might be the entry point.</p></article></div>`);function x(r){var e=y();v("jo8es1",c=>{var p=b();s(24),m(()=>{h.title="Log4Shell via Weak TLS: Hidden Attack Vector"}),a(c,p)});var t=o(e),n=o(t);s(4),l(t),s(2),l(e),g(()=>j(n,"href",`${u??""}/blog`)),a(r,e)}export{x as component,w as universal};
