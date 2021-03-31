

(function(window) {

    
    var placeholder = function () { 
    
    $('.palceholder').click(function() {
        $(this).siblings('input').focus();
      });
      $('.form-control').focus(function() {
        $(this).siblings('.palceholder').hide();
      });
      $('.form-control').blur(function() {
        var $this = $(this);
        if ($this.val().length == 0)
          $(this).siblings('.palceholder').show();
      });
      $('.form-control').blur();
    
    }
    
    
    
    
    var sendEmailContactForm = function () {
    
        event.preventDefault();
    
        console.log("sendEmailContactForm");
    
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var mobileNumber = $("#mobileNumber").val();
        var messages = $("#messages").val();
    
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(mobileNumber);
        console.log(messages);
    
      
        var emailTemplate = "<html><body>" +
        "<label>First Name: <span>" + firstName + "</span></label><br />" +
        "<label>Last Name: <span>" + lastName + "</span></label><br />" +
        "<label>Email: <span>" + email + "</span></label><br />" +
        "<label>Mobile Number: <span>" + mobileNumber + "</span></label><br /><br />" +
        "<label>Messages: <span>" + messages + "</span></label>" +
        "</body></html>";
        
        console.log(emailTemplate);
    
        Email.send({         
          Host: "smtp.fornextgeneration.com",
          Username : "lanzruiz@fornextgeneration.com",
          Password : "Bounce1234!",
          To: "support@cloudgenesis.org", 
          From: email, 
          Subject: "Message from the Cloud Genesis Site", 
          Body: emailTemplate
        }) 
          .then(function (message) { 
    
            console.log(message);
            
            $("#contactsuccess").css("display", "block");
    
          }); 
    
          console.log("sendEmail");
    
    }
    
    
    
    
    
    
    
    
    placeholder();
    
    window.sendEmailContactForm = sendEmailContactForm;
             
    })(window);