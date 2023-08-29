var t1 = gsap.timeline()

t1.from(".logo img, .quick-links h3, .connect-btn h4, .connect-btn button", {
    // y: -100,
    duration: 0.6,
    delay: 0.3,
    opacity: 0,
    stagger: 0.2
})

t1.from(".main-content span", {
    scale: 0,
    opacity: 0
})

// I here write gsap not ti because i want to render all the images at single time not one by one
gsap.from(".main-content .top-right", {
    y: -100,
    duration: 0.7,
    delay: 0.4,
    opacity: 0,
    delay: 2.5
})

gsap.from(".main-content .top-left", {
    x: -100,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    delay: 2.5
})

gsap.from(".main-content .bottom-left", {
    y: 100,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    delay: 2.5
})

gsap.from(".main-content .bottom-right", {
    x: 100,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    delay: 2.5
})

t1.to(".social-media-links h2", {
    y: 30,
    duration: 1,
    repeat: -1,
    yoyo: true
})