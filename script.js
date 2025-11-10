// Mobile nav toggle
(function () {
	const toggle = document.querySelector('.nav-toggle');
	const menu = document.getElementById('nav-menu');
	if (!toggle || !menu) return;

	toggle.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('open');
		toggle.setAttribute('aria-expanded', String(isOpen));
	});

	// Close menu on link click (mobile)
	menu.addEventListener('click', (e) => {
		if (e.target instanceof Element && e.target.matches('a')) {
			menu.classList.remove('open');
			toggle.setAttribute('aria-expanded', 'false');
		}
	});
})();

// Smooth scroll for anchor links
(function () {
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			const href = link.getAttribute('href');
			if (!href) return;
			const target = document.querySelector(href);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});
})();

// Footer year
(function () {
	const year = document.getElementById('year');
	if (year) year.textContent = String(new Date().getFullYear());
})();

// Scroll reveal
(function () {
	const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const items = Array.from(document.querySelectorAll('.reveal'));
	if (items.length === 0) return;
	if (prefersReduced || !('IntersectionObserver' in window)) {
		items.forEach((el) => el.classList.add('in'));
		return;
	}

	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				const el = entry.target;
				el.classList.add('in');
				observer.unobserve(el);
			}
		}
	}, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

	// Optional: ensure initial in-view elements animate on load
	requestAnimationFrame(() => {
		items.forEach((el) => observer.observe(el));
	});
})();

