// GSAP basic code
gsap.to (".box1", {
    x: 400,
    y: 200,
    duration: 2,        // kab tak animation chalega
    delay: 1,           // kitni der baad animation chalega
    backgroundColor: "yellow",   // things to be written in the form of Camel Case
    rotate: 360,
    scale: 0.5,
})
// to - make the animation from initial position to final position
// from - make the animation from final position to initial position


gsap.to("h1", {
    x: 300,
    duration: 2,
    delay: 1,   // here all the h1 are moving at the same time
    stagger: 1, // now all the h1 are moving seperately at the duration of 1 sec
    repeat: -1,   // now the animation works for 2 times (negative value means infinite animations)
    yoyo: true    // to and fro motion in the animation
})


var t1 = gsap.timeline()

t1.to("h2", {
    x:400,
    duration: 1
})
t1.to("h3", {
    x:500,
    duration: 1
})
t1.to("h4", {
    x:600,
    duration: 1
})