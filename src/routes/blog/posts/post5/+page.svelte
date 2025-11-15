<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <!-- SEO -->
  <title>Fix Weak Ciphers in Nginx & Apache – Config Guide</title>
  <meta name="description" content="Disable RC4, 3DES, and enable only secure ciphers in Nginx and Apache. Copy-paste configs included." />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/blog/posts/post5" />

  <!-- Open Graph -->
  <meta property="og:title" content="Fix Weak Ciphers in Nginx & Apache – Config Guide" />
  <meta property="og:description" content="Secure your web server in 5 mins. Full Nginx & Apache cipher configs." />
  <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="AxelBase TLS Blog" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fix Weak Ciphers in Nginx & Apache – Config Guide" />
  <meta name="twitter:description" content="One-line fix for PCI DSS. Secure Nginx/Apache now." />
  <meta name="twitter:image" content="https://axelbase.github.io/weak-cipher-tester/og-post5.jpg" />

  <!-- Schema: HowTo -->
  <script type="application/ld+json">
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
  </script>
</svelte:head>

<!-- [Your original Post 5 content below – unchanged] -->

<div class="fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Remediating Weak Ciphers in Nginx & Apache</p>
	</div>

	<article class="prose">
		<h1>Remediating Weak Ciphers in Nginx & Apache</h1>
		<p class="post-meta">Published: November 15, 2025</p>

		<p>
			After identifying weak ciphers with the tester, the next step is remediation. Here are
			battle-tested configurations for Nginx and Apache to achieve A+ security.
		</p>

		<h2>Nginx: Modern Cipher Suite</h2>
		<p>Update your SSL config:</p>
		<pre><code>
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers on;
ssl_ciphers
ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
        </code></pre>

		<h3>Key Directives</h3>
		<ul>
			<li>
				<code>TLSv1.2 TLSv1.3</code>
				– Disable TLS 1.0/1.1
			</li>
			<li>
				<code>ECDHE</code>
				– Ensures forward secrecy
			</li>
			<li>
				<code>GCM</code>
				or
				<code>CHACHA20</code>
				– AEAD only
			</li>
			<li>
				No
				<code>RSA</code>,
				<code>CBC</code>,
				<code>3DES</code>,
				<code>RC4</code>
			</li>
		</ul>

		<h2>Apache: Secure Configuration</h2>
		<p>
			In
			<code>ssl.conf</code>
			or virtual host:
		</p>
		<pre><code>
SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1
SSLCipherSuite
ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256
SSLHonorCipherOrder on
        </code></pre>

		<h2>Validation</h2>
		<p>After changes:</p>
		<ul>
			<li>Restart web server</li>
			<li>
				Rescan with
				<code>nmap</code>
				or
				<code>sslyze</code>
			</li>
			<li>
				Paste into
				<a href="{base}/">Weak Cipher Tester</a>
			</li>
		</ul>

		<h2>FAQ</h2>
		<details>
			<summary>Will this break old browsers?</summary>
			<p>Yes — IE8 on XP, Android 4.3. Use a fallback vhost if needed.</p>
		</details>
		<details>
			<summary>Should I include AES-CBC?</summary>
			<p>No. It’s vulnerable and unnecessary with GCM.</p>
		</details>
		<details>
			<summary>What about HSTS?</summary>
			<p>
				Add
				<code>add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";</code>
			</p>
		</details>

		<p class="italic-note">Secure today. Sleep soundly tonight.</p>
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