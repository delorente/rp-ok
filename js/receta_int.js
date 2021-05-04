/*General Overs*/
$('[id*="over_"]').on('mouseenter', function(){
    var index = $(this).attr('id').split('_')[1];
    var elem = $('[id^="over_'+index+'"]');
    var index2 = $(elem).attr('id').split('_')[1];
      if(index === index2){
         elem.css({'background':'#002270'});
         $(elem).find('.copete-s11pd , .title-s11pd , .txt-s11pd').css({'color':'#fff'});
         $(elem).find('.title-s11pd , .txt-s11pd').css({'color':'#fff'});
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
          $(elem).find('.title-s11pd , .txt-s11pd').css({'color':'black'});
              }else{
                elem.css({'background':'red'}); 
              }      
        });