// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal for section headings and content blocks
const revealTargets = document.querySelectorAll(
  '.section h2, .section-lede, .timeline-item, .focus-group, .project-card, ' +
  '.process, .tag-list, .chip-list, .next-list, .connect-card, .journey-close'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
