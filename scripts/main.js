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
    var email = $("form input[type='email']");
    var regex = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if (email.val() === '' || !regex.test($email.val()))
      {
        console.log('Please enter a valid email address.');
        return false;
      }

  });
})();
