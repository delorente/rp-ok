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

//

/*General Overs - QUIZ */
$('[id*="elem_"]').on('mouseenter', function(){
    var index = $(this).attr('id').split('_')[1];
    var elem = $('[id^="elem_'+index+'"]');
    var index2 = $(elem).attr('id').split('_')[1];
    if(index === index2){
        $(elem).find('.img_shadow').css({'transform':'scale(1.1)' ,'transition':'1s'});
        $(elem).find('.over_type').css({'color':'#002270','transition':'1s'});
      }else{
        $(elem).find('.img_shadow').css({'transform':'scale(1)'});
        $(elem).find('.over_type').css({'color':'#868C98'});
      }      
  });

  $('[id*="elem_"]').on('mouseleave', function(){
    var index = $(this).attr('id').split('_')[1];
    var elem = $('[id^="elem_'+index+'"]');
    var index2 = $(elem).attr('id').split('_')[1];
    console.log(index2);
    if(index === index2){
        $(elem).find('.img_shadow').css({'transform':'scale(1)'});
        $(elem).find('.over_type').css({'color':'#868C98'});
      }else{
        $(elem).find('.img_shadow').css({'transform':'scale(1.1)'});
        $(elem).find('.over_type').css({'color':'#002270'});
      }      
  });

/*Section 03 Resultado FYM */
$('[id*="over_"]').on('mouseenter', function(){
  var index = $(this).attr('id').split('_')[1];
  var elem = $('[id^="over_'+index+'"]');
  var index2 = $(elem).attr('id').split('_')[1];
    if(index === index2){
       elem.css({'background':'#002270'});
       $(elem).find('.copete-s11pd , .title-s11pd , .txt-s11pd, .title-s03-fym , .txt-s03-fym').css({'color':'#fff'});
       }else{
          elem.css({'background':'transparent'}); 
       }      
  });

  $('[id*="over_"]').on('mouseleave', function(){
    var index = $(this).attr('id').split('_')[1];
    var elem = $('[id^="over_'+index+'"]');
    var index2 = $(elem).attr('id').split('_')[1];
          
     if(index === index2){
        elem.css({'background':'transparent'});
        $(elem).find('.copete-s11pd').css({'color':'#002270'});
        $(elem).find('.title-s11pd , .txt-s11pd , .title-s03-fym , .txt-s03-fym').css({'color':'black'});
            }else{
              elem.css({'background':'red'}); 
            }      
      });

/* Animaciones scroll */
gsap.set('.logo-r-fym , .img-r-fym', {y:100, autoAlpha:0});
gsap.set('#product-img-fym', {y:100, autoAlpha:0,});

const anim_s01 = gsap.utils.toArray('.anim_fym');
anim_s01.forEach(anim_fym => {
    gsap.to(".logo-r-fym , .img-r-fym", { 
      duration:2,
      y:0,
      autoAlpha:1,
      scrollTrigger: {
        trigger: anim_fym,
        toggleActions: "play pause resume reset",
        scrub: false
      }
    })
  });

const anim_s02 = gsap.utils.toArray('.s02-r-fym');
anim_s02.forEach(anim_img_fym => {
    gsap.to("#product-img-fym", { 
      duration:0.5,
      y:0,
      autoAlpha:1,
      scrollTrigger: {
        trigger: anim_img_fym,
        toggleActions: "play pause resume reset",
        scrub: false
      }
    })
  });
