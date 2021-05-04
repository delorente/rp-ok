/*Menu*/
$('[id*="menu_"]').on('click touch', function(){
    var index = $(this).attr('id').split('_')[1];
    var elem = $('[id^="box_'+index+'"]');

    
    if(elem.css('display') == 'none'){
    
      $('[id^="box_"]').not(elem).css({'display':'none', 'opacity': '0'});

        elem.css({'display':'flex', 'opacity': '1'});

      }else{
        elem.css({'display':'none', 'opacity': '0'});
      }      
  });

/*RollOvers*/
var header = document.getElementById("list-primary");
var btns = header.getElementsByClassName("over");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
    
    