$(document).ready(function(){
    var currentSection = 0;
  
    $(window).scroll(function() {
      var position = $(this).scrollTop();
  
      // Detecta qual é a seção atual
      $('section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');
  
        if (position >= target) {
          currentSection = id;
        }
      });
  
      // Rola para a próxima seção
      var nextSection = parseInt(currentSection) + 1;
      var nextSectionTarget = $('#' + nextSection).offset().top;
  
      $('html, body').stop().animate({
        'scrollTop': nextSectionTarget
      }, 900, 'swing');
    });
  });