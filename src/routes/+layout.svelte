<script lang="ts">
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import '../app.css'; // Import the new global stylesheet

	// --- Buy Me a Coffee Logic ---
	const paypalUsername = 'AxelLab427'; // <-- TODO: Update this
	const donationAmounts = [1, 3, 5, 10];
	let isDropdownOpen = false;

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}
	function closeDropdown() {
		isDropdownOpen = false;
	}

	// Click outside directive
	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as Node)) {
				// Use dispatchEvent to trigger the svelte 'on:click_outside'
				node.dispatchEvent(new CustomEvent('click_outside'));
			}
		};
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<header class="navbar-main">
	<nav class="navbar-container">
		<a href="{base}/" class="navbar-brand-container">
			<img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-logo" />
			<h1 class="navbar-brand-text">AxelBase</h1>
		</a>

		<ul class="navbar-links">
			<li class="bmac-container" use:clickOutside on:click_outside={closeDropdown}>
				<button class="bmac-button" on:click={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M12 3c-1.1 0-2 .9-2 2v2H9c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 2.21 1.79 4 4 4s4-1.79 4-4v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V5c0-1.1-.9-2-2-2h-4zm-1 6v1c0 1.66 1.34 3 3 3s3-1.34 3-3v-1H9.22c.45.62.78 1.3.78 2 0 1.1-.9 2-2 2s-2-.9-2-2c0-1.1.9-2 2-2 .7 0 1.38.35 1.78.89L11 9.89V9zM5 19h14c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-2v3c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-3H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2z"
						/>
					</svg>
					<span>Buy me a coffee</span>
				</button>

				{#if isDropdownOpen}
					<div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
						{#each donationAmounts as amount}
							<a
								href="https://paypal.me/{paypalUsername}/{amount}"
								target="_blank"
								rel="noopener noreferrer"
								on:click={closeDropdown}
							>
								${amount}
							</a>
						{/each}
					</div>
				{/if}
			</li>

			<li><a class="nav-link" href="{base}/">Home</a></li>
			<li><a class="nav-link" href="{base}/#about">About</a></li>
			<li><a class="nav-link" href="{base}/#how-to-use">How to Use</a></li>
			<li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
			<li><a class="nav-link" href="{base}/blog">Blog</a></li>
		</ul>
	</nav>
</header>

<main class="main-content">
	<slot />
</main>

<footer class="footer-main">
	<div class="footer-container">
		<span>© AxelBase Weak Cipher Suites Tester – {new Date().getFullYear()}</span>
		<div class="footer-links">
			<a href="{base}/privacy">Privacy</a>
			<a href="{base}/terms">Terms</a>
		</div>
	</div>
</footer>