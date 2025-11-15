<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Understanding Weak TLS Cipher Suites',
      description: 'An introduction to deprecated and vulnerable cipher suites, why they matter, and how to detect them.'
    },
    {
      href: '/blog/posts/post2',
      title: 'The Evolution of TLS: From RC4 to AES-GCM',
      description: 'A timeline of TLS cipher suite changes and why modern suites like AES-GCM and ChaCha20 are essential.'
    },
    {
      href: '/blog/posts/post3',
      title: 'How to Use the Weak Cipher Tester',
      description: 'Step-by-step guide to pasting cipher lists from nmap, sslyze, or browser dev tools and interpreting results.'
    },
    {
      href: '/blog/posts/post4',
      title: 'PCI DSS 4.0 & FIPS Compliance Explained',
      description: 'What cipher suites are banned under PCI DSS 4.0 and FIPS 140-2, and how this tool helps you comply.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Remediating Weak Ciphers in Nginx & Apache',
      description: 'Practical configuration examples to disable RC4, 3DES, and enable only secure cipher suites.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Why Forward Secrecy (PFS) Matters',
      description: 'The importance of ECDHE/DHE key exchange and how static RSA ciphers compromise long-term security.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Detecting Log4Shell in Cipher Scans: A Hidden Risk',
      description: 'How weak TLS configurations can indirectly expose systems to Log4Shell exploitation via misconfigured load balancers and reverse proxies.'
    }
  ];
</script>

<svelte:head>
  <!-- SEO -->
  <title>TLS Security Blog – Weak Cipher Insights</title>
  <meta name="description" content="Expert guides on TLS ciphers, PCI DSS 4.0 compliance, and remediation using the Weak Cipher Suite Tester." />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Canonical -->
  <link rel="canonical" href="https://axelbase.github.io/weak-cipher-tester/" />

  <!-- Open Graph -->
  <meta property="og:title" content="TLS Security Blog – Weak Cipher Insights" />
  <meta property="og:description" content="Deep dives into cipher security, compliance, and best practices." />
  <meta property="og:url" content="https://axelbase.github.io/weak-cipher-tester//blog" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="TLS Security Blog – Weak Cipher Insights" />
  <meta name="twitter:description" content="Learn how to secure TLS with modern ciphers and compliance." />
</svelte:head>

<!-- [Your original blog list content below – unchanged] -->

<div class="fade-in blog-index">
	<header class="blog-header">
		<h1>Blog: AxelBase TLS Insights</h1>
		<p class="subtitle">
			Explore in-depth articles on TLS security, cipher suite hygiene, compliance, and how to use the
			Weak Cipher Suites Tester.
		</p>
	</header>

	<div class="posts-grid">
		{#each posts as post}
			<a href="{base}{post.href}" class="post-card">
				<div class="card-body">
					<h2 class="post-title">{post.title}</h2>
					<p class="post-description">{post.description}</p>
					<span class="read-more">
						Read Article
						<span class="arrow">→</span>
					</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	/* Use root variables defined in app.css */
	:root {
		--chestnut: #633a34;
		--white: #ffffff;
		--off-white: #f8f9fa;
		--text-dark: #212529;
		--text-light: #f8f9fa;
		--border-color: #dee2e6;
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

	.blog-index {
		padding-top: 2rem;
		padding-bottom: 4rem;
		max-width: 1140px;
		margin: 0 auto;
	}

	.blog-header {
		text-align: center;
		margin-bottom: 3.5rem;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 2rem;
	}

	.blog-header h1 {
		font-size: 3rem;
		font-weight: 800;
		color: var(--chestnut);
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #555;
		max-width: 700px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 2rem;
	}

	.post-card {
		background: var(--white);
		border-radius: 12px;
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
		text-decoration: none;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border: 1px solid var(--border-color);
		/* Hover Effect: Card Lift */
		transition: all 0.3s ease-out;
	}

	.post-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 12px 30px rgba(99, 58, 52, 0.1);
	}

	.post-card .card-body {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 1.75rem;
	}

	.post-title {
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--chestnut);
		margin-bottom: 0.75rem;
		line-height: 1.4;
	}

	.post-description {
		color: #495057;
		flex-grow: 1;
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.read-more {
		color: var(--chestnut);
		font-weight: 700;
		align-self: flex-start;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}

	.read-more .arrow {
		transition: transform 0.3s ease;
	}

	.post-card:hover .read-more .arrow {
		transform: translateX(5px);
	}
</style>