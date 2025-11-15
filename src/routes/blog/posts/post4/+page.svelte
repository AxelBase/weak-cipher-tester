<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <!-- SEO: Title & Meta -->
  <title>PCI DSS 4.0 & FIPS Cipher Rules – Full List</title>
  <meta name="description" content="Complete list of allowed and banned TLS ciphers for PCI DSS 4.0 and FIPS 140-3. Use our free tool to audit compliance." />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/blog/posts/post4" />

  <!-- Open Graph -->
  <meta property="og:title" content="PCI DSS 4.0 & FIPS Cipher Rules – Full List" />
  <meta property="og:description" content="RC4, 3DES, SHA1 banned. AES-GCM, ChaCha20 required. Audit now with free tool." />
  <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="AxelBase TLS Blog" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="PCI DSS 4.0 & FIPS Cipher Rules – Full List" />
  <meta name="twitter:description" content="Fail audit? Fix ciphers in 2 mins. Free PCI/FIPS checker." />

  <!-- Schema: Article -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "PCI DSS 4.0 & FIPS Compliance Explained",
    "description": "Understand PCI DSS 4.0 and FIPS 140-2 cipher requirements and how to ensure your TLS configuration is compliant.",
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
      "@id": "https://axelbase.github.io/weak-cipher-tester/blog/posts/post4"
    }
  }
  </script>
</svelte:head>

<!-- [Your original Post 4 content below – unchanged] -->

<div class="fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>PCI DSS 4.0 & FIPS Compliance Explained</p>
	</div>

	<article class="prose">
		<h1>PCI DSS 4.0 & FIPS Compliance Explained</h1>
		<p class="post-meta">Published: November 15, 2025</p>

		<p>
			PCI DSS 4.0 (effective March 2025) and FIPS 140-2/3 impose strict cryptographic
			requirements. Non-compliant TLS cipher suites can result in failed audits, fines, or loss of
			payment processing privileges.
		</p>

		<h2>PCI DSS 4.0 Cipher Requirements</h2>
		<p>Requirement 4.2.1 mandates:</p>
		<ul>
			<li>
				<strong>Strong cryptography</strong>
				for all cardholder data in transit
			</li>
			<li>
				<strong>Minimum TLS 1.2</strong>
				(TLS 1.0/1.1 banned)
			</li>
			<li>
				<strong>No weak ciphers</strong>: RC4, 3DES, MD5, SHA1, EXPORT
			</li>
		</ul>
		<p>Even one weak cipher in the list fails compliance.</p>

		<h3>Allowed vs. Banned Ciphers</h3>
		<table>
			<thead>
				<tr>
					<th>Status</th>
					<th>Cipher Examples</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Allowed</td>
					<td>
						<code>TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384</code>
					</td>
				</tr>
				<tr>
					<td>Banned</td>
					<td>
						<code>TLS_RSA_WITH_RC4_128_MD5</code>
					</td>
				</tr>
				<tr>
					<td>Banned</td>
					<td>
						<code>TLS_RSA_WITH_3DES_EDE_CBC_SHA</code>
					</td>
				</tr>
			</tbody>
		</table>

		<h2>FIPS 140-2/3 Requirements</h2>
		<p>FIPS-validated modules must use:</p>
		<ul>
			<li>
				<strong>AES-GCM or AES-CCM</strong>
				only
			</li>
			<li>
				<strong>256-bit or 128-bit keys</strong>
			</li>
			<li>
				<strong>No CBC, no RC4, no 3DES</strong>
			</li>
		</ul>
		<p>
			ChaCha20-Poly1305 is
			<em>not</em>
			FIPS-approved (yet).
		</p>

		<h2>How the Weak Cipher Tester Helps</h2>
		<p>Paste your scan output and instantly see:</p>
		<ul>
			<li>
				<strong>PCI COMPLIANT</strong>
				or
				<strong>NON-COMPLIANT</strong>
			</li>
			<li>
				<strong>FIPS COMPLIANT</strong>
				or
				<strong>NON-COMPLIANT</strong>
			</li>
			<li>Exact ciphers causing failure</li>
			<li>Remediation config snippets</li>
		</ul>

		<h2>FAQ</h2>
		<details>
			<summary>Is TLS 1.2 with AES-CBC compliant?</summary>
			<p>No. CBC mode is vulnerable and not allowed under PCI DSS 4.0.</p>
		</details>
		<details>
			<summary>Can I keep 3DES for legacy clients?</summary>
			<p>No. PCI DSS 4.0 has zero tolerance for 3DES.</p>
		</details>
		<details>
			<summary>Does TLS 1.3 auto-comply?</summary>
			<p>Yes — if no legacy suites are offered via downgrade.</p>
		</details>

		<p class="italic-note">Compliance isn’t optional — one weak cipher can cost you millions.</p>
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