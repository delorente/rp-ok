 /*General Overs*/
 $('[id*="elem_"]').on('mouseenter', function(){
    var index = $(this).attr('id').split('_')[1];
    var elem = $('[id^="elem_'+index+'"]');
    var index2 = $(elem).attr('id').split('_')[1];
    if(index === index2){
        elem.css({'background':'#002270'});
        $(elem).find('.shape_Subacordion_btn2').css({'opacity':'0.3'});
        $(elem).find('.download_Subacordion_btn2').css({'opacity':'1'});
        $(elem).find('.txt-1Subacordion_btn2 , .txt-2Subacordion_btn2').css({'color':'#fff'});
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
        $(elem).find('.shape_Subacordion_btn2').css({'opacity':'0'});
        $(elem).find('.download_Subacordion_btn2').css({'opacity':'0'});
        $(elem).find('.txt-1Subacordion_btn2').css({'color':'#002270'});
        $(elem).find('.txt-2Subacordion_btn2').css({'color':'#000'});
      }else{
        elem.css({'background':'red'}); 
      }      
  });

  /* Arrow interactive colapsed */