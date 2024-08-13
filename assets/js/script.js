function bannerAnimation(){
    var tl = gsap.timeline()

    tl.from(".mobile-v part2 h1, .desktop-v nav h1, .desktop-v nav h4, .desktop-v nav button, .section1 .mobile-v h1", {
        y:-30,
        opacity:0,
        duration:0.4,
        delay:1,
        stagger:0.10
    })
    tl.from(".center-part1 h1", {
        x:-200,
        opacity:0,
        duration:0.4
    })
    tl.from(".center-part1 p", {
        x:-100,
        opacity:0,
        duration:0.4
    })
    tl.from(".center-part1 button", {
        opacity:0,
        duration:0.4
    })
    tl.from(".center-part2 img, .center-part1 .mobile-v img", {
        opacity:0,
        x:200,
        duration:0.4
    }, "-=0.5")
    tl.from(".section1 .brands img", {
        y:30,
        opacity:0,
        duration:0.5,
        stagger:0.15
    })
}

var mediaQuery = window.matchMedia("(max-width: 767px)");

function servicesAnimation(){
    // if(mediaQuery.matches) {
    //     var tl2 = gsap.timeline({
    //         scrollTrigger:{
    //             trigger: ".section3 .sec-heading",
    //             scroller: "body",
    //             //markers:true,
    //             start: "top bottom-=1",
    //             end: "bottom top+=1",
    //             scrub:1,
    //         }
    //     });
    //     console.log("mobile working");
    // }
    // else{
        var tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: ".brands",
                scroller: "body",
                //markers:true,
                start: "top center",
                end: "top -70",
                scrub:1,
            }
        });
        console.log("desk working");
    //}
    tl2.from(".section3 .services-part1", {
        y:30,
        opacity:0,
    })
    // if(mediaQuery.matches) {
    //     tl2.from(".section3 .box", {
    //         x:-300,
    //         opacity:0,
    //         duration:0.5,
    //         stagger:0.15
    //     })
    // }
    // else{
        // Row 1 Animation
        tl2.from(".box.row1.animLeft", {
            x:-300,
            opacity:0,
            duration:0.5
        }, "anim")
        tl2.from(".box.row1.animRight", {
            x:300,
            opacity:0,
            duration:0.5
        }, "anim")
        // Row 2 Animation
        tl2.from(".box.row2.animLeft", {
            x:-300,
            opacity:0,
            duration:0.5
        }, "anim1")
        tl2.from(".box.row2.animRight", {
            x:300,
            opacity:0,
            duration:0.5
        }, "anim1")
        // Row 3 Animation
        tl2.from(".box.row3.animLeft", {
            x:-300,
            opacity:0,
            duration:0.5
        }, "anim2")
        tl2.from(".box.row3.animRight", {
            x:300,
            opacity:0,
            duration:0.5
        }, "anim2")
    }
//}

function ctaAnimation(){
    var tl3 = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: ".section4",
            scroller: "body",
            //markers: true,
            start: "top center",
            end: "bottom 600px",
            scrub: 1,
        }
    });
    tl3.from(".section4", {
        y: 30,
        opacity: 0,
    });
}

function accordianSection(){
    var tlAcc =  gsap.timeline({
        pause:true,
        scrollTrigger:{
            trigger: ".section5",
            scroller: "body",
            //markers:true,
            start: "top 300px",
            end: "bottom center",
            scrub: 1,
        }
    });
    tlAcc.from(".section5 .sec-heading", {
        y:30,
        opacity:0
    })
    tlAcc.from(".accordian .accordian-inner", {
        y:100,
        opacity:0,
        stagger:0.15
    })
}

function teamSection(){
    var tlTeam = gsap.timeline({
        pause:true,
        scrollTrigger:{
            trigger: ".section6",
            scroller: "body",
            start: "top center",
            end: "top 80",
            //markers: true,
            scrub:1,
        }
    })
    tlTeam.from(".section6 .sec-heading", {
        y: 30,
        opacity:0,
    })
    tlTeam.from(".box.row1.cardLeft", {
        x:-300,
        opacity:0,
        duration:0.3
    }, "cardR1")
    tlTeam.from(".box.row1.cardMiddle", {
        y:60,
        opacity:0,
        duration:0.3
    }, "cardR1")
    tlTeam.from(".box.row1.cardRight", {
        x:300,
        opacity:0,
        duration:0.3
    }, "cardR1")
    tlTeam.from(".box.row2.cardLeft", {
        x:-300,
        opacity:0,
        duration:0.3
    }, "cardR2")
    tlTeam.from(".box.row2.cardMiddle", {
        y:60,
        opacity:0,
        duration:0.3
    }, "cardR2")
    tlTeam.from(".box.row2.cardRight", {
        x:300,
        opacity:0,
        duration:0.3
    }, "cardR2")
}
bannerAnimation();
if(!mediaQuery.matches) {
servicesAnimation()
ctaAnimation()
accordianSection()
teamSection()
}
/* MENU ANIMATION */
var tlNav = gsap.timeline();
tlNav.to(".mobile-v .part2", {
    right:"-75px",
    duration:0.5,
})
tlNav.to("#logo-mobile", {
    x:0,
    opacity:1,
    duration:0.5
})
tlNav.from(".mobile-v nav .part2 h4, .mobile-v .part2 button", {
    x:50,
    opacity:0,
    duration:0.5,
    stagger:0.15,
})
tlNav.pause();

var menu = document.querySelector('.menu-icon');
menu.addEventListener('click', function() {
    tlNav.play();
});
var close = document.querySelector('.menu-close');
close.addEventListener('click', function() {
    tlNav.reverse();
});

var tlfoo = gsap.timeline({
    scrollTrigger:{
        trigger: ".section7",
        scroller: "body",
        // markers:true,
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: 1,
    }
});
tlfoo.from(".footer", {
    y: 400,
    opacity:0,
});