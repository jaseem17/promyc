
// validation start
$(document).ready(function () {
    console.log("jQuery loaded:", $.fn.jquery);
    console.log("jQuery Validation Loaded:", $.validator);
  
    $("#validationform").validate({
      rules: {
        FirstName: {
          required: true,
          minlength: 3
        },
        LastName: {
          required: true,
          minlength: 3
         
        },
        Email: {
          required: true,
          email: true
          
        },
        PhoneNumber: {
          required: true,
          phoneUS: true
         
        },
        Message: {
          required: true,
          minlength: 5
        }
      },
      message: {
        FirstName: {
          required: "Please enter your full name",
          minlength: "Your full name must consist of at least 3 characters"
        },
        LastName: {
          required: "Please enter your email",
          email: "Please enter a valid email address"
        },
        Email: {
          required: "Please enter your phone number",
          phoneUS: "Please enter a valid phone number"
        },
        PhoneNumber: {
          required: "Please enter a subject",
          minlength: "Subject must be at least 3 characters"
        },
        Message: {
          required: "Please enter a message",
          minlength: "Your message must be at least 5 characters"
        }
      },
      submitHandler: function (form) {
        console.log("Form is valid, submitting...");
        form.submit();
      }
    });

    $.validator.addMethod("phoneUS", function (value, element) {
      return this.optional(element) || /^[\+]?[0-9]{1,4}?[-\s\./0-9]*$/.test(value);
    }, "Please enter a valid phone number.");
  });
//    validation end
