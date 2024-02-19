(function BX() {
    if (typeof window.BX != "undefined") {
      console.log("BX has already run. Aborting...");
      return;
    }
    const $ = convert.$;
  
    window.CF64 = {
      experiment: "BX",
      variation: "Variation #1"
    };
  
    console.log(BX);
  
    BX.find = function find() {
      console.log("found");
    };
  
    BX.debug = {};
    BX.debug.stack = [];
    BX.debug.error = function BXError(code, message) {
      console.log("Error: BX" + code);
      if (typeof message != undefined) {
        message = "";
      }
      BX.debug.stack.push("CFBX64" + code + " -||- " + message.toString());
    };
  
    console.log('BX running');
  
            function addContent() {
                  // Assuming you have a radio input with the class 'product-form__input'
        const radioInputs = document.querySelectorAll('.product-form__input input[type=radio]');

        // Loop through each radio input and attach a change event listener
        radioInputs.forEach(radioInput => {
            radioInput.addEventListener('change', function (event) {
                let selectedVariant = document.querySelector('.product-form__input input[type=radio]:checked+label').textContent;
                let currentTitle = document.querySelector('.product__title h1').textContent.replace(/(\r\n|\n|\r)/gm, "").trim();

                if (selectedVariant.indexOf("30") > -1){ document.querySelector('.product__title h1').textContent =  "Just Calm - 30 Day Supply "; document.querySelector('.sticky_item_info h1 ').textContent =  "Just Calm - 30 Day Supply "; }
                if (selectedVariant.indexOf("90") > -1){ document.querySelector('.product__title h1').textContent =  "Just Calm - 90 Day Supply "; document.querySelector('.sticky_item_info h1 ').textContent =  "Just Calm - 90 Day Supply ";}
            });
        });

        let selectedVariant = document.querySelector('.product-form__input input[type=radio]:checked+label').textContent;
        let currentTitle = document.querySelector('.product__title h1').textContent.replace(/(\r\n|\n|\r)/gm, "").trim();

        if (selectedVariant.indexOf("30") > -1)
        { document.querySelector('.product__title h1').textContent = currentTitle + " - 30 Day Supply ";
          document.querySelector('.sticky_item_info h1 ').textContent =  currentTitle + " - 30 Day Supply ";
        }
        if (selectedVariant.indexOf("90") > -1) {
          document.querySelector('.product__title h1').textContent = currentTitle + " - 90 Day Supply ";
          document.querySelector('.sticky_item_info h1 ').textContent =  currentTitle + " - 90 Day Supply ";
        }



              }
  
   $(document).ready(function() {
     addContent();  
   });
  })();
