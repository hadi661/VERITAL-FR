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
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
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

  /*----------------------------
   Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
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
  // Array of testimonies
  var testimonies = [
    "Philippe Durand: VERITAL a été un partenaire essentiel dans l'optimisation de nos opérations. Leur expertise technique et leur engagement envers la qualité ont considérablement amélioré notre efficacité et notre conformité aux normes.",
    "Nadia Belkacem: Je suis impressionnée par le professionnalisme et l'engagement de VERITAL envers la satisfaction du client. Leur équipe a été très réactive et a toujours répondu à nos besoins de manière efficace et professionnelle.",
    "Youssef Hamdi: Travailler avec VERITAL a été une expérience très enrichissante. Leur approche collaborative et leur volonté de comprendre nos besoins spécifiques ont été très appréciées. Je recommande vivement leurs services.",
    "Amina Khaldi: VERITAL a dépassé toutes nos attentes en matière de contrôle et de qualité. Leur équipe compétente et leur souci du détail ont fait toute la différence dans la réussite de nos projets. Nous sommes extrêmement satisfaits de leur travail.",
    "Omar Bencherif: Je suis reconnaissant envers VERITAL pour leur assistance précieuse dans la réalisation de nos objectifs de conformité et de sécurité. Leur expertise et leur engagement envers l'excellence ont été un véritable atout pour notre entreprise.",
    "Sophia Meziani: VERITAL a été un partenaire de confiance dans notre parcours vers l'amélioration continue. Leur approche proactive et leur volonté d'aller au-delà des attentes ont été essentielles pour garantir la qualité et la conformité de nos produits.",
    "Karim Boudjellal: Je recommande vivement les services de VERITAL à toute entreprise cherchant des solutions de contrôle de qualité fiables et efficaces. Leur équipe compétente et leur engagement envers l'excellence en font un partenaire précieux dans notre secteur d'activité."
  ];
  

// Function to display testimonies in a loop
function displayTestimonies() {
  var testimonialLoop = document.querySelector('.testimonial-loop');
  var index = 0;

  // Display testimonies in a loop
  setInterval(function() {
    testimonialLoop.innerHTML = "<div class='testimonial'>" + testimonies[index] + "</div>";
    index = (index + 1) % testimonies.length;
  }, 8000); // Change the duration (in milliseconds) to control the speed of testimonies rotation
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

  /*---------------------
     Google Maps
  --------------------- */
  var get_latitude = $('#google-map').data('latitude');
  var get_longitude = $('#google-map').data('longitude');

  function initialize_google_map() {
    var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize_google_map);

})(jQuery);
/*-- translate basic 
-*/
document.addEventListener('DOMContentLoaded', function() {
  // Function to change language
  function changeLanguage(lang) {
      const elements = document.querySelectorAll('[data-translate]');

      elements.forEach(element => {
          const key = element.dataset.translate;
          element.innerText = translations[lang][key] || key;
      });
  }

  // Language translations
  const translations = {
      en: {
          greeting: 'Hello, World!',
          paragraph: 'This is a sample paragraph.'
      },
      fr: {
          greeting: 'Bonjour le monde !',
          paragraph: 'Ceci est un paragraphe d\'exemple.'
      },
      ar: {
          greeting: 'مرحباً بالعالم!',
          paragraph: 'هذا فقرة عينة.'
      }
  };

  // Set default language to English
  let currentLang = 'en';
  changeLanguage(currentLang);

  // Event listener for language links
  const languageLinks = document.querySelectorAll('.language');
  languageLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const lang = this.dataset.lang;
          changeLanguage(lang);
          currentLang = lang;
      });
  });
});


