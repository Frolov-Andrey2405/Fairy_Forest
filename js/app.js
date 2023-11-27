window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
    
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

