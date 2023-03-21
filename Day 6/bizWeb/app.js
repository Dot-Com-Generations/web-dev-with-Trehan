const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const scrBtn = document.querySelector(".scrBtn");

burger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    console.log("click");
});

scrBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// GSAP -> for each set of Animations, you create a timeline.

// gsap.timeline({
//     default:
//     {
//         duration: 1
//     }
// }).to('.class',{
//     property:value,
//     property:value
// })


const tl = gsap.timeline({ defaults: { ease: 'circ' } })


tl.from('body', {
    opacity: 0,
    duration: 1
}).from('.navbar', {
    y: '-100%',
    duration: 1
}).from('.hero .title', {
    opacity: 0,
    y: '50px'
}).from('.hero .text', {
    opacity: 0,
    y: '50px'
}).from('.hero .btn', {
    opacity: 0,
    y: '50px'
}).to('.hero .btn', {
    y: '10px',
    repeat: -1,
    yoyo: true
})

const tlScroll = gsap.timeline({
    scrollTrigger: {
        trigger: '.services',
        start: '300px bottom',
        end: 'top 35%',
        // markers: true,
        // scrub: true
    }
})

tlScroll.from('.services .title', {
    opacity: 0,
    x: '-200%'
}).from('.services .card', {
    opacity: 0,
    y: '50%',
    stagger: .3
})