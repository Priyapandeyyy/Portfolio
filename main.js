gsap.registerPlugin(ScrollTrigger);

// Hero Section

const heroTl= gsap.timeline({
    ScrollTrigger: {
        trigger: "#hero",
        start: "top bottom",
        toggleActions: "play none restart none",
    },
});

heroTl.from(".gsap-nav-item", {
    y: -30,
    opacity: 0,
    ease: "back",
    stagger: 0.2,
});

heroTl.from(".gsap__hero__item", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
});

heroTl.from(".hero__illustration", {
    y: 30,
    opacity: 0,
});

// Rotation

gsap.to(".hero__illustration__text", {
    y: "-115px",
    repeat: -1,
    duration: 10,
    yoyo: true,
    opacity: 1,
    delay: 2,
});

// Project section

const horizontalSections = gsap.utils.toArray(".horizontal");

horizontalSections.forEach((section) => {
    let animeWrap = section.querySelector(".horizontal__animation-wrap");
    let animeContentWrap = section.querySelector(".animation__content__wrap");
    let getToValue = () => -(animeContentWrap?.scrollWidth - window.innerWidth);

    if (window.innerWidth < 650) {
        getToValue = () => -(animeContentWrap?.scrollWidth - window.innerWidth / 2 - 140);
    }

    gsap.fromTo(
        animeWrap,
        { x: () => (animeWrap.classList.contains("to--right") ? 0 : getToValue()) },
        {
            x: () => (animeWrap.classList.contains("to--right") ? getToValue() : 0),
            ease: "none",
            scrollTrigger: {
                trigger: animeWrap,
                start: "top top",
                end: () => "+=" + (animeContentWrap?.scrollWidth - window.innerWidth / 2 - 120),
                pin: animeWrap,
                invalidateOnRefresh: true,
                scrub: true,
            },
        }
    );
});

const projectsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        start: " top bottom",
        toggleActions: "restart none none none",
    },
});

projectsTl.from(".projects__main__title", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back",
});

projectsTl.from(".gsap-project__item", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
});

// About Section

const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        toggleActions: "restart none restart none"
    },
});

aboutTl.from(".gsap-about__item", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
});

// Resume Section

const resumeTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".resume",
        start: "top bottom",
        toggleActions: "restart none restart none"
    },
});

resumeTl.from(".gsap-resume__item", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
});

// Services Section

const servicesTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: true,
    },
});

const animateServicesTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top bottom",
        toggleActions: "restart none restart none"
    },
});

servicesTl.from(".gsap-service-item1", {xPercent: -100});
servicesTl.from(".gsap-service-item2", {yPercent: -100});
servicesTl.from(".gsap-service-item3", {xPercent: 100});

animateServicesTl.from(".gsap-service-item1", { // Target each individual service item
    y: 30,
    opacity: 0,
    delay: 0.8,
    stagger: 0.3,
});
animateServicesTl.from(".gsap-service-item2", { // Target each individual service item
    y: 30,
    opacity: 0,
    delay: 0.8,
    stagger: 0.3,
});
animateServicesTl.from(".gsap-service-item3", { // Target each individual service item
    y: 30,
    opacity: 0,
    delay: 0.8,
    stagger: 0.3,
});

// Tech Section

const techTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".tech",
        start: "top bottom",
        toggleActions: "restart none restart none"
    },
});

techTl.from(".gsap-tech__item", {
    opacity: 0,
    scale: 0.5,
    ease: "back",
    duration: 0.5,
    delay: 0.8,
    stagger: 0.3,
});

// Contact Section

const contactTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        toggleActions: "restart none restart none"
    },
});

contactTl.from(".gsap-contact__item", {
    y: 30,
    opacity: 0,
    delay: 0.5,
    stagger: 0.3,
});