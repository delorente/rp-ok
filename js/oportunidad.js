gsap.from('.logo-fym img', {
    duration:2, 
    autoAlpha: 0, 
    y:50,
    scale:0.9
});
gsap.from('.container_box-fym ul', {
    stagger: 0.1,
    ease: "power1.inOut",
    duration:2, 
    autoAlpha: 0,
     y:100
});

/* Animaciones scroll */
gsap.set('.text-s01-optS01', {y:50, autoAlpha:0});
gsap.set('.icon-box , .icon-box-txt', {y:50, autoAlpha:0});
gsap.set('.img-s03', {y:20, autoAlpha:0});

const anim_s01 = gsap.utils.toArray('.anim1_opt');
anim_s01.forEach(anim1_opt => {
    gsap.to(".text-s01-optS01", { 
      duration:2,
      y:0,
      autoAlpha:1,
      scrollTrigger: {
        trigger: anim1_opt,
        toggleActions: "play pause resume reset",
        scrub: false
      }
    })
  });

const anim_s02 = gsap.utils.toArray('.anim2_opt');
anim_s02.forEach(anim2_opt => {
    gsap.to(".icon-box", { 
      duration:2,
      y:0,
      autoAlpha:1,
      scrollTrigger: {
        trigger: anim2_opt,
        toggleActions: "play pause resume reset",
        scrub: false
      }
    }),
    gsap.to(".icon-box-txt", { 
      duration:3,
      y:0,
      delay:0.1,
      autoAlpha:1,
      scrollTrigger: {
        trigger: anim2_opt,
        toggleActions: "play pause resume reset",
        scrub: false
      }
    })
  });

  const anim_s03 = gsap.utils.toArray('.anim3_opt');
anim_s03.forEach(anim3_opt => {
    gsap.to(".img-s03", { 
      duration:2,
      y:0,
      autoAlpha:1,
      scrollTrigger: {
        trigger: anim3_opt,
        toggleActions: "play pause resume reset",
        scrub: false
      }
    })
  });
