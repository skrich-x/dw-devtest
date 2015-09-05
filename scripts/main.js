(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.application());

    $("#shipping-company").hide();
      $("#commercial").click(function(){
        $("#shipping-company").show();
      });

  ///Validate Number Keypress For Phone Number - 10 Character MAX///
    $("#phone").attr('maxlength','10');
    $("#phone").keypress(function (event) {
      return  /\d/.test(String.fromCharCode(event.keyCode));
    });

  ///Validate Number Keypress For Zip -- 5 Character MAX///
    $("#zip").attr('maxlength', '5');
    $("#zip").keypress(function (event) {
      return  /\d/.test(String.fromCharCode(event.keyCode));
    });

  ///Regular Expression for email validation

  });
})();
