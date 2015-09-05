(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.application());

    $("#shipping-company").hide();
     $("#commercial").click(function(){
         $("#shipping-company").show();
     });

     $("#phone").keypress(function (event) {
       //do not display if not Number
        if (event.which !== 8 && event.which !== 0 && (event.which < 48 || event.which > 57)) {

        return false;
       }
      });

  });
})();
