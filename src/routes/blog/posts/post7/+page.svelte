<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <!-- SEO -->
  <title>Log4Shell via Weak TLS: Hidden Attack Vector</title>
  <meta name="description" content="How weak cipher configs in load balancers expose Log4Shell even after patching. Scan your TLS now." />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/posts/post7" />

  <!-- Open Graph -->
  <meta property="og:title" content="Log4Shell via Weak TLS: Hidden Attack Vector" />
  <meta property="og:description" content="Patched Log4j? Weak TLS in F5/HAProxy can still get you. Audit now." />
  <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://weak-cipher-tester.axelbase.com/og-post7.jpg" />
  <meta property="og:site_name" content="AxelBase TLS Blog" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Log4Shell via Weak TLS: Hidden Attack Vector" />
  <meta name="twitter:description" content="Weak ciphers = backdoor for Log4Shell. Free scan inside." />

  <!-- Schema: Article -->
  <script type="application/ld+json">
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
  </script>
</svelte:head>

<!-- [Your original Post 7 content below – unchanged] -->

<div class="fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Detecting Log4Shell in Cipher Scans: A Hidden Risk</p>
	</div>

	<article class="prose">
		<h1>Detecting Log4Shell in Cipher Scans: A Hidden Risk</h1>
		<p class="post-meta">Published: November 15, 2025</p>

		<p>
			Log4Shell (CVE-2021-44228) remains a top exploited vulnerability in 2025. But many miss a
			critical vector:
			<strong>TLS termination at edge devices</strong>.
		</p>

		<h2>The Attack Chain</h2>
		<ol>
			<li>Attacker sends: User-Agent</li>
			<li>Load balancer (HAProxy, Nginx, F5) logs the header</li>
			<li>
				<code>log4j</code>
				in the LB triggers RCE
			</li>
			<li>
				Backend Java app may be patched — but the
				<strong>edge is not</strong>
			</li>
		</ol>

		<h3>Role of Weak Ciphers</h3>
		<p>
			Weak ciphers enable
			<strong>downgrade attacks</strong>:
		</p>
		<ul>
			<li>
				<code>TLS_RSA_WITH_RC4_128_MD5</code>
				allows protocol downgrade
			</li>
			<li>Attacker forces TLS 1.0 + malicious header</li>
			<li>Even patched backends are bypassed</li>
		</ul>

		<h2>Scan Example</h2>
		<pre><code>
nmap --script ssl-enum-ciphers -p 443 lb.example.com
| TLSv1.0:
|   TLS_RSA_WITH_RC4_128_MD5 (F)
        </code></pre>

		<h2>Mitigation</h2>
		<ul>
			<li>
				Disable
				<strong>RC4, 3DES, TLS 1.0/1.1</strong>
				at the edge
			</li>
			<li>
				Use
				<strong>TLS 1.3 + HSTS</strong>
			</li>
			<li>
				Remove
				<code>log4j</code>
				from frontends or disable message lookup
			</li>
			<li>
				Scan
				<strong>all TLS endpoints</strong>
				with the Weak Cipher Tester
			</li>
		</ul>

		<h2>FAQ</h2>
		<details>
			<summary>Is Log4Shell still active in 2025?</summary>
			<p>Yes — CISA lists it in the KEV catalog. Edge devices are often forgotten.</p>
		</details>
		<details>
			<summary>Can CDN protect against this?</summary>
			<p>Only if it strips malicious headers before logging.</p>
		</details>
		<details>
			<summary>Should I scan my CDN?</summary>
			<p>Yes — Cloudflare, Akamai, Fastly terminate TLS too.</p>
		</details>

		<p class="italic-note">Log4Shell isn’t dead. Your edge might be the entry point.</p>
	</article>
</div>

<style>
	/* --- MASTER BLOG POST STYLE --- */
	:root {
		--chestnut: #633a34;
		--white: #ffffff;
		--off-white: #f8f9fa;
		--text-dark: #212529;
		--text-gray: #6c757d;
		--border-color: #dee2e6;
		--code-bg: rgba(99, 58, 52, 0.05);
		--code-text: #633a34;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.fade-in {
		animation: fadeIn 0.5s ease-out forwards;
	}

	.post-layout {
		max-width: 800px;
		margin: 0 auto;
		padding-top: 2rem;
		padding-bottom: 4rem;
	}

	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		font-size: 0.95rem;
		color: var(--text-gray);
	}
	.breadcrumbs a {
		color: var(--chestnut);
		text-decoration: none;
		font-weight: 500;
	}
	.breadcrumbs a:hover {
		text-decoration: underline;
	}
	.breadcrumbs p {
		margin: 0;
	}

	.prose {
		line-height: 1.75;
		font-size: 1.1rem;
	}

	.prose .post-meta {
		color: var(--text-gray);
		font-size: 0.9rem;
		font-style: italic;
		margin-bottom: 2rem;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 1rem;
	}

	.prose h1,
	.prose h2,
	.prose h3 {
		color: var(--chestnut);
		font-weight: 700;
		line-height: 1.3;
	}

	.prose h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
	}

	.prose h2 {
		font-size: 2rem;
		margin-top: 3rem;
		margin-bottom: 1.25rem;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 0.5rem;
	}

	.prose h3 {
		font-size: 1.5rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	.prose p {
		color: var(--text-dark);
		margin-bottom: 1.25rem;
	}

	.prose ul,

	.prose ul li {
		margin-bottom: 0.5rem;
		padding-left: 0.5rem;
	}

	.prose ul li::marker {
		color: var(--chestnut);
		font-weight: bold;
	}

	.prose details {
		background: var(--white);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin-bottom: 1rem;
		transition: box-shadow 0.2s ease;
	}
	.prose details[open] {
		box-shadow: 0 4px 12px rgba(99, 58, 52, 0.08);
	}

	.prose summary {
		cursor: pointer;
		font-weight: 600;
		color: var(--chestnut);
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.prose summary:hover {
		opacity: 0.8;
	}
	.prose summary::-webkit-details-marker {
		display: none;
	}

	.prose summary::after {
		content: '+';
		font-weight: bold;
		font-size: 1.5rem;
		display: inline-block;
		transition: transform 0.2s ease-out;
	}
	.prose details[open] summary::after {
		transform: rotate(45deg);
	}

	.prose details p {
		margin-top: 1rem;
		padding-left: 1rem;
		border-left: 3px solid var(--chestnut);
		color: var(--text-dark);
		font-size: 1.05rem;
	}

	.prose .italic-note {
		font-style: italic;
		color: var(--text-gray);
		text-align: center;
		margin-top: 3rem;
		font-size: 1rem;
	}

	.prose code {
		background: var(--code-bg);
		color: var(--code-text);
		padding: 0.2em 0.4em;
		border-radius: 4px;
		font-size: 0.9em;
		font-family: 'Courier New', Courier, monospace;
	}
</style>