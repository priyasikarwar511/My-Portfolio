
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