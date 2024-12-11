console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=200%", // Increased from 150% to 200% for a longer scroll effect
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .to("img", {
      scale: 3.5, // Increased from 2 to 3.5 for more zoom
      z: 600, // Increased from 350 to 600 for more depth
      transformOrigin: "center center",
      ease: "power2.inOut" // Changed to power2 for a slightly different easing
    })
    .to(
      ".section.hero",
      {
        scale: 1.2, // Increased from 1.1 to 1.2
        transformOrigin: "center center",
        ease: "power2.inOut"
      },
      "<"
    );
});