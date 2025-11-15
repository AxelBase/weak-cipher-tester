<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <!-- SEO -->
  <title>TLS Evolution: RC4 to AES-GCM & ChaCha20</title>
  <meta name="description" content="From broken RC4 to secure AES-GCM and ChaCha20 — the full history of TLS cipher evolution and why you must upgrade." />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/blog/posts/post2" />

  <!-- Open Graph -->
  <meta property="og:title" content="TLS Evolution: RC4 to AES-GCM & ChaCha20" />
  <meta property="og:description" content="Why RC4 was banned, how AES-GCM won, and when to use ChaCha20 for mobile." />
  <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="AxelBase TLS Blog" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="TLS Evolution: RC4 to AES-GCM & ChaCha20" />
  <meta name="twitter:description" content="The cipher upgrade path every admin must know. Free audit tool included." />

  <!-- Schema: Article -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Evolution of TLS: From RC4 to AES-GCM",
    "description": "Trace the history of TLS cipher suites from insecure RC4 to modern AES-GCM and ChaCha20, and why upgrades are essential.",
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
      "@id": "https://axelbase.github.io/weak-cipher-tester/blog/posts/post2"
    }
  }
  </script>
</svelte:head>

<!-- [Your original Post 2 content below – unchanged] -->

<div class="fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>The Evolution of TLS: From RC4 to AES-GCM</p>
	</div>

	<article class="prose">
		<h1>The Evolution of TLS: From RC4 to AES-GCM</h1>
		<p class="post-meta">Published: November 15, 2025</p>

		<p>
			The TLS protocol has undergone dramatic changes since SSLv3 in 1996. Cipher suite evolution
			reflects growing cryptographic knowledge — and the retirement of once-"secure" algorithms now
			known to be broken.
		</p>

		<h2>1990s: Export Restrictions & RC4</h2>
		<p>U.S. export laws limited encryption to 40-bit keys. This gave us:</p>
		<ul>
			<li>
				<code>SSL_RSA_EXPORT_WITH_RC4_40_MD5</code>
			</li>
			<li>
				<code>SSL_RSA_WITH_DES_CBC_SHA</code>
			</li>
		</ul>
		<p>RC4 was fast but flawed. By 2015, practical attacks broke it entirely (RFC 7465 banned it).</p>

		<h3>2000s: 3DES and the Rise of AES</h3>
		<p>With export rules lifted, servers adopted:</p>
		<ul>
			<li>
				<code>TLS_RSA_WITH_3DES_EDE_CBC_SHA</code>
			</li>
			<li>
				<code>TLS_RSA_WITH_AES_128_CBC_SHA</code>
			</li>
		</ul>
		<p>
			3DES was secure but slow. AES became the new standard — but CBC mode introduced risks like
			BEAST and Lucky13.
		</p>

		<h2>2010s: Forward Secrecy & GCM</h2>
		<p>Edward Snowden’s leaks exposed mass surveillance. Forward secrecy became mandatory:</p>
		<ul>
			<li>
				<code>TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256</code>
			</li>
			<li>
				<code>TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384</code>
			</li>
		</ul>
		<p>
			GCM mode fixed CBC vulnerabilities and provided authenticated encryption (AEAD).
		</p>

		<h2>2020s: TLS 1.3 & Modern Suites</h2>
		<p>TLS 1.3 (RFC 8446) simplified everything:</p>
		<ul>
			<li>Only 5 cipher suites allowed:</li>
			<li>
				<code>TLS_AES_256_GCM_SHA384</code>
			</li>
			<li>
				<code>TLS_CHACHA20_POLY1305_SHA256</code>
			</li>
			<li>
				<code>TLS_AES_128_GCM_SHA256</code>
			</li>
		</ul>
		<p>
			All support PFS, AEAD, and resist quantum threats (ChaCha20 is post-quantum ready).
		</p>

		<h2>Why Legacy Suites Persist</h2>
		<p>Despite deprecation:</p>
		<ul>
			<li>Old appliances (F5, Citrix) ship with RC4/3DES enabled.</li>
			<li>Load balancers terminate TLS with outdated configs.</li>
			<li>Developers copy-paste old Nginx/Apache templates.</li>
		</ul>

		<h2>Use the Weak Cipher Tester</h2>
		<p>Scan your endpoints to see if you're stuck in the 1990s. The tool flags:</p>
		<ul>
			<li>RC4, 3DES, EXPORT ciphers</li>
			<li>CBC mode with SHA1</li>
			<li>Non-PFS key exchange</li>
		</ul>

		<h2>FAQ</h2>
		<details>
			<summary>Is AES-CBC still safe?</summary>
			<p>No. Vulnerable to padding oracle and timing attacks in TLS 1.0–1.2.</p>
		</details>
		<details>
			<summary>Does TLS 1.3 support RC4?</summary>
			<p>No — it was removed entirely.</p>
		</details>
		<details>
			<summary>Should I disable TLS 1.2?</summary>
			<p>Not yet. It’s secure with modern ciphers. Disable TLS 1.0/1.1 instead.</p>
		</details>

		<p class="italic-note">The future is AEAD and PFS — ensure your servers reflect that.</p>
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