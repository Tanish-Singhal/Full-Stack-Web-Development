gsap.from(".page4 .box2", {
    scale: 0,
    duration: 1.5,
    rotate: 360,
    // now we can see that all the animation are working but the animation is working without showing to the user as the next page is below it,

    // we need to write scroll-trigger on other part
})

gsap.from(".page5 .box2", {
    scale: 0,
    duration: 1.5,
    rotate: 360,

    // that's why we use scroll-trigger
    scrollTrigger: {
        trigger: ".page5 .box2",
        scroller: "body",   // the part which you scroll (here we scroll body as the div are present inside the body)
        markers: true,      // markers will help you in your production
        start: "top 80%",    // by this we can shift the scroller-start position
        // when the scroller-start line touch the start line then the animation start
        end: "top 50%",
        scrub: 2         // by this animation will work when the user scroll the website
    }
})

gsap.from(".page6 .box2", {
    scale: 0,
    duration: 1.5,
    rotate: 360,

    // that's why we use scroll-trigger
    scrollTrigger: {
        trigger: ".page6 .box2",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2
    }
})