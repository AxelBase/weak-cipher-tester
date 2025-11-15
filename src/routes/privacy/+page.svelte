<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <!-- SEO -->
  <title>Privacy Policy – Zero Data Collection</title>
  <meta name="description" content="No data is collected, stored, or transmitted. Full client-side processing for maximum privacy." />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/privacy" />

  <!-- Open Graph -->
  <meta property="og:title" content="Privacy Policy – Zero Data Collection" />
  <meta property="og:description" content="Your cipher data never leaves your browser. 100% private." />
  <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester/privacy" />
  <meta property="og:type" content="article" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Privacy Policy – Zero Data Collection" />
  <meta name="twitter:description" content="No tracking. No logs. No servers. Your data stays yours." />
</svelte:head>

<!-- [Your original privacy content below – unchanged] -->

<div class="fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/">Home</a>
		<span>/</span>
		<p>Privacy Policy</p>
	</div>

	<article class="prose">
		<h1>Privacy Policy</h1>
		<p class="post-meta">Effective Date: November 15, 2025</p>

		<h2>1. Introduction</h2>
		<p>
			Welcome to the <strong>Weak Cipher Suites Tester</strong>, a fully <em>client-side</em> security
			analysis tool developed by <strong>AxelBase</strong> ("we," "us," or "our"). This Privacy
			Policy explains how we handle your information when you use our tool to analyze TLS cipher
			suites from tools like <code>nmap</code>, <code>sslyze</code>, or browser outputs. We operate
			under a <strong>zero-data-collection model</strong>
			— <em>no personal data is ever collected, stored, or transmitted</em>. All processing occurs
			in your browser, ensuring complete privacy and control.
		</p>

		<h2>2. Information We Do Not Collect</h2>
		<p>The tool is designed to function without gathering any user data. We do not collect:</p>
		<ul>
			<li>
				<strong>Personal Identifiable Information (PII)</strong>: No names, emails, IP addresses,
				or device identifiers.
			</li>
			<li>
				<strong>Usage Analytics</strong>: No tracking of page views, session duration, or click
				behavior.
			</li>
			<li>
				<strong>Cipher Input Data</strong>: Your pasted cipher lists are processed locally and never
				leave your device.
			</li>
			<li>
				<strong>Cookies or Trackers</strong>: No cookies, localStorage persistence, or third-party
				tracking scripts.
			</li>
		</ul>
		<p>
			<em>Your data stays on your machine — we have no access to it.</em>
		</p>

		<h2>3. How the Tool Works</h2>
		<p>When you use the Weak Cipher Suites Tester:</p>
		<ul>
			<li>
				<strong>Local Processing</strong>: JavaScript parses cipher suites using regex and scoring
				logic — all in-browser.
			</li>
			<li>
				<strong>No Network Requests</strong>: No data is sent to servers, CDNs (except static
				assets), or APIs.
			</li>
			<li>
				<strong>Temporary Memory Only</strong>: Input is held in memory during analysis and cleared
				on page reload or reset.
			</li>
		</ul>
		<p>
			This architecture ensures <strong>absolute data isolation</strong>, ideal for auditing
			sensitive infrastructure.
		</p>

		<h2>4. Third-Party Services</h2>
		<p>
			We do not use analytics, ads, or external APIs. The tool is self-contained. Static assets
			(CSS, JS) are served from GitHub Pages or your local build — no user tracking occurs.
		</p>

		<h2>5. Cookies and Tracking</h2>
		<p>
			<strong>No cookies are set.</strong>
			The session is <em>stateless</em>. No fingerprinting, beacons, or localStorage is used
			beyond transient input.
		</p>

		<h2>6. Data Security</h2>
		<p>
			Since no data is transmitted, risks are limited to your local environment. We recommend:
		</p>
		<ul>
			<li>Using updated browsers with security patches</li>
			<li>Avoiding public networks when analyzing sensitive endpoints</li>
			<li>Clearing browser cache after use if needed</li>
		</ul>

		<h2>7. Children's Privacy</h2>
		<p>
			The tool is not directed at children under 13. We do not knowingly collect data from minors.
		</p>

		<h2>8. International Compliance</h2>
		<p>
			By collecting <em>no data</em>, we comply by default with <strong>GDPR</strong>,
			<strong>CCPA</strong>,
			<strong>POPIA</strong>
			(Norway), and global privacy laws.
		</p>

		<h2>9. Policy Updates</h2>
		<p>
			Changes will be posted here with the updated effective date. Continued use constitutes
			acceptance.
		</p>

		<p class="italic-note">
			Your security scans stay <strong>yours alone</strong>. Privacy isn’t a feature — it’s the
			foundation.
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

	.prose ul,

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