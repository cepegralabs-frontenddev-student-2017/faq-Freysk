(function() {
  'use strict';

  // EXPEND ANSWER ON CLICK
  //on click (warning ajax, use on)
  $('#faq').on('click', 'dt a', function(e){
    //prevent default
    e.preventDefault();


    var $this   = $(this);
    var $target = $($this.attr('href'));

    //if clicked element is already clicked
    if ( $target.hasClass('faq__answer--opened') ) {
      //colapse element
      $target.removeClass('faq__answer--opened');
    } else {
      //colapse previous opened element
      $('.faq__answer--opened').removeClass('faq__answer--opened');
      //expend current element
      $target.addClass('faq__answer--opened');
    }
    //smoothscroll to start of question
    setTimeout(function(){  $('html, body').animate({
    		scrollTop: $this.closest('dt').offset().top - 17
    	});}, 500);

  });


  // var $questions = $('.faq__group');
  // var obj = [];
  // $questions.each(function(){
  //   var $this = $(this);
  //   obj.push({
  //     'question': $this.find('dt a').text(),
  //     'answer': $this.find('dd').html()
  //   });
  // });
  //
  // window.console.log(JSON.stringify(obj));

  // TEMPLATE HANDELBARS
  //get template
  var url  = 'faq.hbs';
  var html = '';

  $.get(url)
    .done(function(source) {
      var template = Handlebars.compile(source);

      //get json data
      var dat_url = 'faq.json';
      $.getJSON(dat_url)
        .done(function(data){
          html = template(data.faq);
          $('#faq').html(html);
          Prism.highlightAll();
        });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.error(textStatus, ': ', errorThrown);
    });

}());
