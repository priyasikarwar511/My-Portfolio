var typed = new Typed('#element', {
    strings: [
        'I am a passionate Software Developer',
        'I build systems so resilient your on-call team can actually sleep through the night'
    ],
 

    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true
});

document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile Nav Toggle ----------
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is tapped
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}