gsap.set('.show_trigger', {autoAlpha: 0});
gsap.from('#info_header', {duration:1.5,autoAlpha: 0, y:50});
gsap.to('.popUp-s01 , .line-popUp-s01', {duration:1.5,autoAlpha: 0, x:-100},20);
gsap.from('.cont-arrow-s01 img', {duration:1.5, yoyo: true,repeat:-1,autoAlpha: 0, y:20},0);

const sections = gsap.utils.toArray('.show_trigger');
sections.forEach(show_trigger => {
  gsap.to(show_trigger, { 
    duration: 1.5,
    delay:0,
    y:-35,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: show_trigger,
      toggleActions: "play pause resume reset",
      scrub: false
    }
  })
});

const sections3 = gsap.utils.toArray('.s3');
sections3.forEach(s3 => {
    gsap.to(".cont-img-s03 img", { 
      duration: 1.8,
      delay:0.3,
      x:20,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: s3,
        scrub: false
      }
    })
  });
 /* Nosotros */
 gsap.set('#img_anim_1_nos , #img_anim_2_nos , #img_anim_3_nos', {autoAlpha:0});
 const nos_head = gsap.utils.toArray('.anim_1_nos');
nos_head.forEach(anim_1_nos => {
    gsap.to("#img_anim_1_nos", { 
      duration: 1.8,
      autoAlpha: 1,
      y:10,
      scrollTrigger: {
        trigger: anim_1_nos,
        toggleActions: "play pause resume reset",
        scrub: false
      }
    })
  });
  gsap.set('#img_anim_2_nos', {autoAlpha:0});
  const nos_2head = gsap.utils.toArray('.anim_2_nos');
 nos_2head.forEach(anim_2_nos => {
     gsap.to("#img_anim_2_nos", { 
       duration: 1,
       autoAlpha: 1,
       scrollTrigger: {
         trigger: anim_2_nos,
         toggleActions: "play pause resume reset",
         scrub: false
       }
     })
   });
   gsap.set('#img_anim_3_nos', {autoAlpha:0});
   const nos_3head = gsap.utils.toArray('.anim_3_nos');
  nos_3head.forEach(anim_3_nos => {
      gsap.to("#img_anim_3_nos", { 
        duration: 1.8,
        autoAlpha: 1,
        y:10,
        scrollTrigger: {
          trigger: anim_3_nos,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      })
    });

    gsap.set('.popUp-s01, .line-popUp-s01', {autoAlpha: 1});
  const popUp = gsap.utils.toArray('.cont-cta-s02');
  popUp.forEach(popUp => {
      gsap.to(".popUp-s01, .line-popUp-s01", { 
        duration: 1,
        autoAlpha: 0,
        x:-100,
        scrollTrigger: {
          trigger: popUp,
          toggleActions: "play",
          scrub: false
        }
      })
    });

  $('.close-popUp-s01').on('click touch', function(){
    gsap.to('.popUp-s01 , .line-popUp-s01', {duration:5,autoAlpha: 0, x:-100},0);
  });

    $('[id*="btn_"]').on('click touch', function(){
      var index = $(this).attr('id').split('_')[1];
      var elem = $('[id^="arrow_'+index+'"]');
      
      if(elem.css('visibility') == 'visible'){
          gsap.to($('[id^="arrow_"]').not(elem), {rotation: 0, duration: 1});
          gsap.to(elem, {rotation: 180, duration: 1});
        }else{
          gsap.to(elem, {rotation: 0, duration: 1});
        }      
    });
    $('[id*="subbtn_"]').on('click touch', function(){
      var index = $(this).attr('id').split('_')[1];
      var elem = $('[id^="subarrow_'+index+'"]');
      
      if(elem.css('visibility') == 'visible'){
          gsap.to($('[id^="subarrow_"]').not(elem), {rotation: 0, duration: 1});
          gsap.to(elem, {rotation: 180, duration: 1});
        }else{
          gsap.to(elem, {rotation: 0, duration: 1});
        }      
    });


  /*General Overs*/
  $('[id*="elem_"]').on('mouseenter', function(){
    var index = $(this).attr('id').split('_')[1];
    var elem = $('[id^="elem_'+index+'"]');
    var index2 = $(elem).attr('id').split('_')[1];
    if(index === index2){
        elem.css({'background':'#002270'});
        $(elem).find('.txt-item-dragSlider').css({'color':'#fff'});
        $(elem).find('.txt-tittle-dragSlider , .txt-text-dragSlider').css({'color':'#fff'});
        $(elem).find('.roll_drag_link').css({'textDecoration':'none'});
      }else{
        elem.css({'background':'transparent'}); 
      }      
  });

  $('[id*="elem_"]').on('mouseleave', function(){
    var index = $(this).attr('id').split('_')[1];
    var elem = $('[id^="elem_'+index+'"]');
    var index2 = $(elem).attr('id').split('_')[1];
    console.log(index2);
    if(index === index2){
        elem.css({'background':'transparent'});
        $(elem).find('.txt-item-dragSlider').css({'color':'#002270'});
        $(elem).find('.txt-tittle-dragSlider , .txt-text-dragSlider').css({'color':'black'});
      }else{
        elem.css({'background':'red'}); 
      }      
  });

