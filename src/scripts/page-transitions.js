// Basic page transitions: fade out on navigate, fade in on load
import { AppConfig } from './config.js';

export function initPageTransitions() {
	const gsap = window.gsap;
	if (!gsap) return;

	// Fade-in on load
	gsap.set('body', { opacity: 0 });
	gsap.to('body', {
		opacity: 1,
		duration: AppConfig.reducedMotion ? 0 : 0.4,
		ease: 'power2.out'
	});

	// Intercept internal links and fade-out before navigate
	document.addEventListener('click', (e) => {
		const anchor = e.target.closest('a');
		if (!anchor) return;
		const href = anchor.getAttribute('href');
		// Only same-origin relative navigations
		if (!href || href.startsWith('http') || href.startsWith('#') || anchor.target === '_blank') return;
		e.preventDefault();
		gsap.to('body', {
			opacity: 0,
			duration: AppConfig.reducedMotion ? 0 : 0.25,
			ease: 'power2.in',
			onComplete: () => {
				window.location.href = href;
			}
		});
	}, { passive: false });
}


