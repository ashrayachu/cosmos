
    (function () {
        'use strict'
      
        bsCustomFileInput.init()

        const forms = document.querySelectorAll(".form-validation");
      
       
        Array.from(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()
    