<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <!-- SEO -->
  <title>How to Use Weak Cipher Tester – Full Guide</title>
  <meta name="description" content="Step-by-step: Paste nmap, sslyze, or browser cipher output → get instant PCI DSS & FIPS compliance report." />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/blog/posts/post3" />

  <!-- Open Graph -->
  <meta property="og:title" content="How to Use Weak Cipher Tester – Full Guide" />
  <meta property="og:description" content="From scan to secure: Use nmap, sslyze, or browser → analyze ciphers in 30 seconds." />
  <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="AxelBase TLS Blog" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="How to Use Weak Cipher Tester – Full Guide" />
  <meta name="twitter:description" content="Free tool. No login. Paste → Analyze → Fix. Try now." />

  <!-- Schema: HowTo + Article -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the Weak Cipher Suite Tester",
    "description": "Step-by-step guide to using the Weak Cipher Suites Tester with nmap, sslyze, or browser output to audit TLS security.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Gather Cipher Data",
        "text": "Run nmap --script ssl-enum-ciphers or sslyze --regular on your domain."
      },
      {
        "@type": "HowToStep",
        "name": "Paste Output",
        "text": "Copy the cipher list and paste into the tool."
      },
      {
        "@type": "HowToStep",
        "name": "Analyze",
        "text": "Click 'Analyze Ciphers' to get grades and remediation."
      }
    ]
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Use the Weak Cipher Tester",
    "description": "Step-by-step guide to using the Weak Cipher Suites Tester with nmap, sslyze, or browser output to audit TLS security.",
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
      "@id": "https://axelbase.github.io/weak-cipher-tester/blog/posts/post3"
    }
  }
  </script>
</svelte:head>

<!-- [Your original Post 3 content below – unchanged] -->

<div class="fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>How to Use the Weak Cipher Tester</p>
	</div>

	<article class="prose">
		<h1>How to Use the Weak Cipher Tester</h1>
		<p class="post-meta">Published: November 15, 2025</p>

		<p>
			The Weak Cipher Suites Tester is a client-side tool that analyzes TLS cipher lists from
			scanning tools. No data leaves your browser — making it ideal for sensitive environments.
		</p>

		<h2>Step 1: Gather Cipher Data</h2>
		<p>Use any of these methods:</p>
		<ul>
			<li>
				<strong>nmap</strong>:
				<code>nmap --script ssl-enum-ciphers -p 443 example.com</code>
			</li>
			<li>
				<strong>sslyze</strong>:
				<code>sslyze --regular example.com</code>
			</li>
			<li>
				<strong>testssl.sh</strong>:
				<code>./testssl.sh example.com</code>
			</li>
			<li>
				<strong>Browser</strong>: Open Dev Tools → Security → View Certificate → Cipher
			</li>
		</ul>

		<h3>Step 2: Copy the Output</h3>
		<p>Select the section listing cipher suites, e.g.:</p>
		<pre><code>
| TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
| TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
| TLS_RSA_WITH_3DES_EDE_CBC_SHA
        </code></pre>

		<h2>Step 3: Paste into the Tester</h2>
		<p>
			Go to the
			<a href="{base}/">Weak Cipher Tester</a>
			and:
		</p>
		<ul>
			<li>Paste the raw text</li>
			<li>Click “Analyze Ciphers”</li>
		</ul>
		<p>The tool extracts and evaluates each suite.</p>

		<h2>Step 4: Interpret Results</h2>
		<p>Each cipher gets:</p>
		<ul>
			<li>
				<strong>Grade</strong>: A+ to F
			</li>
			<li>
				<strong>Classification</strong>: MODERN, STRONG, MEDIUM, WEAK
			</li>
			<li>
				<strong>Compliance</strong>: PCI DSS & FIPS status
			</li>
			<li>
				<strong>Remediation</strong>: Actionable fix
			</li>
		</ul>

		<h2>Pro Tips</h2>
		<ul>
			<li>
				Test
				<strong>all endpoints</strong>: web, API, mail, VPN
			</li>
			<li>
				Scan
				<strong>load balancers</strong>
				— they often have different configs
			</li>
			<li>Export results for audit trails</li>
		</ul>

		<h2>FAQ</h2>
		<details>
			<summary>Can I scan a domain directly?</summary>
			<p>
				No — browser CORS prevents socket-level TLS handshakes. You must provide the cipher list.
			</p>
		</details>
		<details>
			<summary>What if no ciphers are detected?</summary>
			<p>
				Ensure you copied the section with
				<code>TLS_</code>
				or
				<code>SSL_</code>
				suite names.
			</p>
		</details>
		<details>
			<summary>Is my data sent anywhere?</summary>
			<p>No. All analysis runs in your browser. View source to confirm.</p>
		</details>

		<p class="italic-note">Audit fast. Fix faster. Secure always.</p>
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