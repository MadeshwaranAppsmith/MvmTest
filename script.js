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

// Card hover parallax (subtle)
(function () {
	const cards = document.querySelectorAll('.card');
	if (!cards.length) return;
	const maxTilt = 4; // degrees
	function handleMove(e) {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const px = (x / rect.width) - 0.5;
		const py = (y / rect.height) - 0.5;
		card.style.transform = `perspective(800px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateY(-2px)`;
	}
	function reset(e) {
		e.currentTarget.style.transform = '';
	}
	cards.forEach((c) => {
		c.addEventListener('mousemove', handleMove);
		c.addEventListener('mouseleave', reset);
	});
})();

// Seamless marquee duplication to avoid gaps (no dependency)
(function () {
	const track = document.querySelector('.marquee .track');
	if (!track) return;
	// Duplicate content to ensure continuous loop
	track.innerHTML = track.innerHTML + track.innerHTML;
})();

