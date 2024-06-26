(function($) {
  "use strict";

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  /*---------------------
   TOP Menu Stick
  --------------------- */
  $(document).ready(function() {
    var s = $("#sticker");
    var pos = s.position();
  
    $(window).on('scroll', function() {
      var windowpos = $(window).scrollTop();
      if (windowpos > pos.top) {
        s.addClass("stick");
      } else {
        s.removeClass("stick");
      }
    });
  
    // Navbar click event to remove active class
    var main_menu = $(".main-menu ul.navbar-nav li");
    main_menu.on('click', function() {
      main_menu.removeClass("active");
      $(this).addClass("active");
    });
  
    // Smooth scrolling for navbar links
    $('.navbar-nav li a').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 70 // Adjust the offset as needed
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  
    // Smooth scrolling for language dropdown links
    $('#language-dropdown li a').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  
    // Smooth scrolling for language list links (visible-xs)
    $('#language-list li a').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  
    // Initialize WOW.js
    new WOW().init();
  
    // Close collapsed navbar on click
    $(".navbar-collapse a").on('click', function() {
      $(".navbar-collapse.collapse").removeClass('in');
    });
  
    // Nivo Slider initialization
    $('#ensign-nivoslider').nivoSlider({
      effect: 'random',
      slices: 15,
      boxCols: 12,
      boxRows: 8,
      animSpeed: 500,
      pauseTime: 5000,
      startSlide: 0,
      directionNav: true,
      controlNavThumbs: false,
      pauseOnHover: true,
      manualAdvance: false,
    });
  
    // Scrollspy initialization
    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 80
    });
  });
  
  /*---------------------
    Venobox
  --------------------- */
  var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var testimonies = {
    en: [
      "Philippe Durand: VERITAL has been an essential partner in optimizing our operations. Their technical expertise and commitment to quality have significantly improved our efficiency and compliance with standards.",
      "Nadia Belkacem: I am impressed by VERITAL's professionalism and commitment to customer satisfaction. Their team has been very responsive and has always met our needs in an efficient and professional manner.",
      "Youssef Hamdi: Working with VERITAL has been a very enriching experience. Their collaborative approach and willingness to understand our specific needs have been greatly appreciated. I highly recommend their services.",
      "Amina Khaldi: VERITAL has exceeded all our expectations in terms of control and quality. Their competent team and attention to detail have made all the difference in the success of our projects. We are extremely satisfied with their work.",
      "Omar Bencherif: I am grateful to VERITAL for their valuable assistance in achieving our compliance and security goals. Their expertise and commitment to excellence have been a true asset to our company.",
      "Sophia Meziani: VERITAL has been a trusted partner in our journey to continuous improvement. Their proactive approach and willingness to go the extra mile have been essential to ensuring the quality and compliance of our products.",
      "Karim Boudjellal: I highly recommend VERITAL's services to any company seeking reliable and efficient quality control solutions. Their competent team and commitment to excellence make them a valuable partner in our industry."
    ],
    fr: [
      "Philippe Durand: VERITAL a été un partenaire essentiel dans l'optimisation de nos opérations. Leur expertise technique et leur engagement envers la qualité ont considérablement amélioré notre efficacité et notre conformité aux normes.",
      "Nadia Belkacem: Je suis impressionnée par le professionnalisme et l'engagement de VERITAL envers la satisfaction du client. Leur équipe a été très réactive et a toujours répondu à nos besoins de manière efficace et professionnelle.",
      "Youssef Hamdi: Travailler avec VERITAL a été une expérience très enrichissante. Leur approche collaborative et leur volonté de comprendre nos besoins spécifiques ont été très appréciées. Je recommande vivement leurs services.",
      "Amina Khaldi: VERITAL a dépassé toutes nos attentes en matière de contrôle et de qualité. Leur équipe compétente et leur souci du détail ont fait toute la différence dans la réussite de nos projets. Nous sommes extrêmement satisfaits de leur travail.",
      "Omar Bencherif: Je suis reconnaissant envers VERITAL pour leur assistance précieuse dans la réalisation de nos objectifs de conformité et de sécurité. Leur expertise et leur engagement envers l'excellence ont été un véritable atout pour notre entreprise.",
      "Sophia Meziani: VERITAL a été un partenaire de confiance dans notre parcours vers l'amélioration continue. Leur approche proactive et leur volonté d'aller au-delà des attentes ont été essentielles pour garantir la qualité et la conformité de nos produits.",
      "Karim Boudjellal: Je recommande vivement les services de VERITAL à toute entreprise cherchant des solutions de contrôle de qualité fiables et efficaces. Leur équipe compétente et leur engagement envers l'excellence en font un partenaire précieux dans notre secteur d'activité."
    ],
    ar: [
      "فيليب دوراند: كانت فريطال شريكًا أساسيًا في تحسين عملياتنا. لقد ساهمت خبرتهم التقنية والتزامهم بالجودة بشكل كبير في تحسين كفاءتنا وامتثالنا للمعايير.",
      "نادية بلقاسم: أنا معجبة بالاحترافية والالتزام الذي تظهره فريطال تجاه رضا العملاء. كان فريقهم سريع الاستجابة ودائمًا ما يلبي احتياجاتنا بكفاءة ومهنية.",
      "يوسف حمدي: كان العمل مع فريطال تجربة مثرية للغاية. تقديرهم للتعاون واستعدادهم لفهم احتياجاتنا الخاصة كانت محل تقدير كبير. أوصي بشدة بخدماتهم.",
      "أمينة الخالدي: تجاوزت فريطال كل توقعاتنا فيما يتعلق بالرقابة والجودة. لقد جعل فريقهم المؤهل واهتمامهم بالتفاصيل الفارق في نجاح مشاريعنا. نحن راضون للغاية عن عملهم.",
      "عمر بن شريف: أنا ممتن لفريطال على مساعدتهم القيمة في تحقيق أهدافنا فيما يتعلق بالامتثال والأمان. كانت خبرتهم والتزامهم بالتميز موردًا حقيقيًا لشركتنا.",
      "صوفيا مزياني: كانت فريطال شريكًا موثوقًا به في رحلتنا نحو التحسين المستمر. نهجهم الاستباقي واستعدادهم لتجاوز التوقعات كانا أساسيين في ضمان جودة منتجاتنا ومطابقتها.",
      "كريم بوجلال: أوصي بشدة بخدمات فريطال لأي شركة تبحث عن حلول موثوقة وفعالة للرقابة على الجودة. يجعل فريقهم المؤهل والتزامهم بالتميز شريكًا قيمًا في مجالنا."
  ]  
  };
  
  // Function to display testimonies in a loop
  function displayTestimonies() {
    // Get the current language from the HTML element
    var currentLang = document.documentElement.lang || 'fr';
  
    var testimonialLoop = document.querySelector('.testimonial-loop');
    var index = 0;
  
    // Check if testimonies array for current language is not empty
    if (testimonies[currentLang].length > 0) {
      // Display testimonies in a loop
      setInterval(function() {
        testimonialLoop.innerHTML = "<div class='testimonial'>" + testimonies[currentLang][index] + "</div>";
        index = (index + 1) % testimonies[currentLang].length;
      }, 8000); // Change the duration (in milliseconds) to control the speed of testimonies rotation
    } else {
      console.error("Testimonies array is empty for language:", currentLang);
    }
  }
  
  // Call the function to start displaying testimonies
  displayTestimonies(); 
  /*----------------------------
   isotope active
  ------------------------------ */
  // portfolio start
  $(window).on("load", function() {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function() {
      var pro_menu_active = $('.project-menu li a.active');
      pro_menu_active.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  //portfolio end

  /*---------------------
   Circular Bars - Knob
--------------------- */
  if (typeof($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

  function changeLanguage(lang) {
    // Implement your logic to update page content and/or redirect to the appropriate language version
    // Here's a placeholder example using jQuery (if included):
  
    if (lang === 'en') {
      // Update content or redirect to English version (e.g., `/en/index.html`)
      $('html').attr('lang', lang);  // Update HTML language attribute
      // ... additional actions for English
    } else if (lang === 'fr') {
      // Update content or redirect to French version (e.g., `/fr/index.html`)
      $('html').attr('lang', lang);  // Update HTML language attribute
      // ... additional actions for French
    } else if (lang === 'ar') {
      // Update content or redirect to Arabic version (e.g., `/ar/index.html`)
      $('html').attr('lang', lang);  // Update HTML language attribute
      // ... additional actions for Arabic
    }
  }
  function changeLanguage(lang) {
    // Implement your logic to update page content and/or redirect to the appropriate language version
    // ... (same as before)
  
    // Update flag image based on selected language (optional)
    const flagImage = document.getElementById("language-button");
    if (lang === 'en') {
      flagImage.style.backgroundImage = "url('img/blog/flag_en.png')";
    } else if (lang === 'fr') {
      flagImage.style.backgroundImage = "url('img/blog/flag_fr.png')";  // Set French flag image
    } else if (lang === 'ar') {
      flagImage.style.backgroundImage = "url('img/1/alg.png')";  // Set Arabic flag image
    }
  }
   //smooth scrooling 
   $(document).ready(function(){
    // Add smooth scrolling to all links in navbar
    $("navbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
              // Use a custom easing function for more control over the scrolling speed
              $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, {
              duration: 3000, // Adjust the duration as needed
              easing: 'easeInOutCubic', // Use a custom easing function
                complete: function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            });
        } // End if
    });
  }); 

})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
  const descriptionContainer = document.querySelector('.description-container');
  const showMoreButton = descriptionContainer.querySelector('.show-more-button');
  const fullDescription = descriptionContainer.querySelector('.full-description');
  const maxLength = 250;

  // Function to toggle visibility of full description
  function toggleDescriptionVisibility() {
    fullDescription.classList.toggle('hidden');
    if (fullDescription.classList.contains('hidden')) {
      showMoreButton.textContent = 'En savoir plus';
    } else {
      showMoreButton.textContent = 'En savoir moins';
    }
  }

  // Event listener for the "Show More" button
  showMoreButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior (page reload)
    toggleDescriptionVisibility();
  });

  // Check if description exceeds maximum length and show more button
  if (descriptionContainer.querySelector('.short-description').textContent.length > maxLength) {
    showMoreButton.style.display = 'block';
  }
});
