     
var tl = gsap.timeline();
tl.to('.product-gallerySlide-s06', {duration: 1.5,scale: 1.1},0)
.to('#innove_hero', {duration: 1.5,x:50,rotationY:-10, rotationZ:-2},0.3)
.to('#ply_1', {duration: 1.5,y:-30,rotationY:-10, rotationZ:-2},0.3)
.to('#ply_2', {duration: 1.5,y:30,rotationY:10, rotationZ:2},0.3)
.to('#paella1', {duration: 1.5,y:-20,rotationY:-10, rotationZ:-2},0.3)
.to('#paella2', {duration: 1.5,y:20,rotationY:10, rotationZ:2},0.3)
.to('#EasyRelease',{duration: 1.5,scale: 1.1,rotation:-15, rotationZ:3},0.3);
tl.paused( true );

$('.anim_slide , .thumb').on('click', function () {
    tl.restart();
})
/*
$('.over').on('mouseenter', function () {
    $('.txt-item-dragSlider').css({'color':'#fff'})
})
$('.over').on('mouseleave', function () {
    $('.txt-item-dragSlider').css({'color':'#002270'})
})*/
/*
$('[id*="over_"]').on('mouseenter mouseleave', function(){
    var index = $(this).attr('id').split('_')[1];
    var elem = $('[id^="elem_'+index+'"]');
    var elem2 = $('[id^="txt1_'+index+'"]');
    var elem3 = $('[id^="txt2_'+index+'"]');
    
    
    if(elem.css('opacity') == '1'){
        gsap.to($('[id^="elem_"]').not(elem), {background: "#fff", duration: 1});
        gsap.to($('[id^="elem_"]').not(elem2), {color:'#191919', duration: 1});
        gsap.to($('[id^="elem_"]').not(elem3), {color:'#191919', duration: 1});
        gsap.to(elem, {background: "#002270",duration: 1});
        gsap.to(elem2, {color:'#fff', duration: 1});
        gsap.to(elem3, {color:'#fff', duration: 1});
      }else{
        gsap.to($('[id^="elem_"]').not(elem), {background: "#fff", duration: 1});
        gsap.to($('[id^="elem_"]').not(elem2), {color:'#191919', duration: 1});
        gsap.to($('[id^="elem_"]').not(elem3), {color:'#191919', duration: 1});
        gsap.to(elem, {background: "#fff",duration: 1});
        gsap.to(elem2, {color:'#002270', duration: 1});
        gsap.to(elem3, {color:'#191919', duration: 1})
      }      
  });
  */
  

