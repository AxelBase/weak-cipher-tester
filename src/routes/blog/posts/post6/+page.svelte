<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <!-- SEO -->
  <title>Why PFS (Forward Secrecy) Is Critical – Explained</title>
  <meta name="description" content="Perfect Forward Secrecy protects past sessions even if your private key is stolen. ECDHE vs RSA explained." />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/blog/posts/post6" />

  <!-- Open Graph -->
  <meta property="og:title" content="Why PFS (Forward Secrecy) Is Critical – Explained" />
  <meta property="og:description" content="If your key leaks tomorrow, PFS saves yesterday’s data. Here’s how." />
  <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="AxelBase TLS Blog" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Why PFS (Forward Secrecy) Is Critical – Explained" />
  <meta name="twitter:description" content="RSA = past compromised. ECDHE = future-proof. Choose wisely." />

  <!-- Schema: Article -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Forward Secrecy (PFS) Matters",
    "description": "Learn why Perfect Forward Secrecy protects past sessions even if your private key is compromised.",
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
      "@id": "https://axelbase.github.io/weak-cipher-tester/blog/posts/post6"
    }
  }
  </script>
</svelte:head>

<!-- [Your original Post 6 content below – unchanged] -->

<div class="fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Why Forward Secrecy (PFS) Matters</p>
	</div>

	<article class="prose">
		<h1>Why Forward Secrecy (PFS) Matters</h1>
		<p class="post-meta">Published: November 15, 2025</p>

		<p>
			Perfect Forward Secrecy (PFS) ensures that even if your server’s private key is stolen, past
			encrypted sessions remain secure. It’s not optional — it’s a cornerstone of modern TLS.
		</p>

		<h2>How PFS Works</h2>
		<p>Traditional RSA key exchange:</p>
		<ul>
			<li>Client encrypts pre-master secret with server’s public key</li>
			<li>Server decrypts with private key</li>
			<li>
				<strong>All sessions</strong>
				can be decrypted if private key is compromised
			</li>
		</ul>

		<p>
			With
			<strong>ECDHE/DHE</strong>:
		</p>
		<ul>
			<li>Ephemeral keys generated per session</li>
			<li>Session keys derived from Diffie-Hellman</li>
			<li>
				Private key compromise
				<strong>does not</strong>
				decrypt past traffic
			</li>
		</ul>

		<h3>Real-World Impact</h3>
		<p>
			Heartbleed (2014) exposed private keys. Sites without PFS had
			<em>all past traffic</em>
			decryptable. Sites with ECDHE were safe.
		</p>

		<h2>PFS in Cipher Suites</h2>
		<ul>
			<li>
				<strong>With PFS</strong>:
				<code>TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384</code>
			</li>
			<li>
				<strong>No PFS</strong>:
				<code>TLS_RSA_WITH_AES_256_GCM_SHA384</code>
			</li>
		</ul>

		<h2>Enable PFS</h2>
		<p>
			Use
			<code>ECDHE</code>
			or
			<code>DHE</code>
			in your cipher list. The Weak Cipher Tester flags static RSA suites with a
			<strong>-20 score penalty</strong>.
		</p>

		<h2>FAQ</h2>
		<details>
			<summary>Is DHE as good as ECDHE?</summary>
			<p>ECDHE is faster and more secure. DHE is acceptable but slower.</p>
		</details>
		<details>
			<summary>Does TLS 1.3 require PFS?</summary>
			<p>Yes — all TLS 1.3 handshakes use ephemeral keys.</p>
		</details>
		<details>
			<summary>Can I have PFS with RSA authentication?</summary>
			<p>
				Yes —
				<code>ECDHE_RSA</code>
				uses RSA for auth, ECDHE for key exchange.
			</p>
		</details>

		<p class="italic-note">One breach shouldn’t decrypt your history. Demand PFS.</p>
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