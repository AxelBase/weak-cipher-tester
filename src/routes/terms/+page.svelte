<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <!-- SEO -->
  <title>Terms of Use – Open Source TLS Tool</title>
  <meta name="description" content="MIT-licensed, client-side TLS cipher analyzer. Use freely for personal or commercial purposes." />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/terms" />

  <!-- Open Graph -->
  <meta property="og:title" content="Terms of Use – Open Source TLS Tool" />
  <meta property="og:description" content="Free to use, modify, and redistribute under MIT license." />
  <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/terms" />
  <meta property="og:type" content="article" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Terms of Use – Open Source TLS Tool" />
  <meta name="twitter:description" content="Use this free tool with confidence. MIT licensed." />
</svelte:head>

<!-- [Your original terms content below – unchanged] -->

<div class="fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/">Home</a>
		<span>/</span>
		<p>Terms and Conditions</p>
	</div>

	<article class="prose">
		<h1>Terms and Conditions</h1>
		<p class="post-meta">Last Updated: November 15, 2025</p>

		<h2>1. Acceptance of Terms</h2>
		<p>
			By accessing or using the <strong>Weak Cipher Suites Tester</strong> ("the Tool"), you agree to
			these Terms and Conditions. If you do not agree, you may not use the Tool. The Tool is provided
			by <strong>AxelBase</strong> and hosted on GitHub Pages as a
			<em>free, open-source</em>
			utility for TLS cipher suite analysis.
		</p>

		<h2>2. Nature of the Tool</h2>
		<p>
			The Tool is a <strong>client-side web application</strong> that runs entirely in your
			browser. It analyzes cipher suite lists from tools like <code>nmap</code>,
			<code>sslyze</code>, or browser dev tools.
			<em>No data is transmitted to any server.</em>
			Results are generated locally and are not stored or logged.
		</p>

		<h2>3. License and Usage</h2>
		<p>
			The Tool is licensed under the <strong>MIT License</strong>. You may:
		</p>
		<ul>
			<li>Use it for personal or commercial purposes</li>
			<li>Modify and redistribute the source code</li>
			<li>
				Fork the repository at
				<a
					href="https://github.com/axelbase/weak-cipher-tester"
					target="_blank"
					rel="noopener noreferrer">GitHub</a
				>
			</li>
		</ul>
		<p>You must retain the original copyright notice in all copies.</p>

		<h2>4. User Responsibilities</h2>
		<p>You agree to:</p>
		<ul>
			<li>
				Use the Tool only for <strong>lawful purposes</strong>
			</li>
			<li>Not use it to scan systems without authorization</li>
			<li>
				Comply with applicable laws, including <strong>POPIA</strong> (Norway) and
				international regulations
			</li>
		</ul>
		<p>
			<em>Unauthorized scanning may violate computer misuse laws.</em>
		</p>

		<h2>5. No Warranty</h2>
		<p>
			The Tool is provided <strong>"as is"</strong> without warranties of any kind. We do not
			guarantee:
		</p>
		<ul>
			<li>Accuracy of cipher classifications</li>
			<li>Completeness of compliance checks</li>
			<li>Uninterrupted or error-free operation</li>
		</ul>
		<p>Use results at your own risk. Always validate critical findings with official tools.</p>

		<h2>6. Limitation of Liability</h2>
		<p>AxelBase shall not be liable for any damages arising from:</p>
		<ul>
			<li>Incorrect remediation based on Tool output</li>
			<li>Service downtime or data loss</li>
			<li>Third-party actions or breaches</li>
		</ul>
		<p>Liability is limited to the fullest extent permitted by law.</p>

		<h2>7. Intellectual Property</h2>
		<p>
			The Tool’s code, design, and documentation are owned by AxelBase and licensed under MIT.
			Trademarks (if any) are property of their respective owners.
		</p>

		<h2>8. Termination</h2>
		<p>
			We may suspend or terminate access to the Tool at any time without notice, especially for
			misuse or legal violations.
		</p>

		<h2>9. Governing Law</h2>
		<p>
			These terms are governed by the laws of <strong>Norway</strong>. Disputes shall be
			resolved in the courts of Oslo.
		</p>

		<h2>10. Changes to Terms</h2>
		<p>
			We may update these terms. Changes will be posted with the new effective date. Continued use
			implies acceptance.
		</p>
		<p class="italic-note">
			Use responsibly. Secure confidently. The Tool is yours to trust — and to improve.
		</p>
	</article>
</div>

<style>
	/* --- MASTER PROSE STYLE (Self-Contained) --- */
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
	.prose h2{
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


	.prose p {
		color: var(--text-dark);
		margin-bottom: 1.25rem;
	}

	.prose a {
		color: var(--chestnut);
		font-weight: 500;
		text-decoration: none;
		border-bottom: 2px solid rgba(99, 58, 52, 0.2);
		transition: all 0.2s ease;
	}
	.prose a:hover {
		background-color: var(--code-bg);
		border-bottom-color: var(--chestnut);
	}

	.prose ul{
		padding-left: 2rem;
		color: var(--text-dark);
		margin-bottom: 1.25rem;
	}
	.prose ul li {
		margin-bottom: 0.5rem;
		padding-left: 0.5rem;
	}

	.prose ul li::marker {
		color: var(--chestnut);
		font-weight: bold;
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