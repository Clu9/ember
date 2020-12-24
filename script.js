

     $(document).ready(function(){
         activeSetup();
        $('.myicon').click(function(e){
        console.dir(e);
        $('#navbar ul').toggleClass('mb-screen');

    })
      
    function activeSetup(){
          var urlPath = window.location.pathname;
          console.log(urlPath);
          $('nav a').each(function(){
              
      
              var href = $(this).attr('href');
              //console.log(href);

              if (urlPath === href){
                  console.log('match');
                  $(this).closest('li').addClass('active');
              }
          })
      }
})





