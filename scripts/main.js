(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.application());

    $("#shipping-company").hide();
     $("#commercial").click(function(){
         $("#shipping-company").show();
     });
  });
})();
