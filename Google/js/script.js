  function GoogleCallback(Obj, Data) {
    var results = Data.results;
    var res = '<div class="results"></div>';
    if($('.results').length){
      $('.results').detach();
    }
    $('body').append(res);
    for (var i=0;i<results.length;i++){
    $('.results').append('<a class="title" href="'+results[i].unescapedUrl+'"><h3>' + results[i].title + '</h3></a>');

    $('.results').append('<p class="content">' + results[i].content + '</p>');
    }
  }
  $(function(){
    $submit = $('#search');
    function search(){
      var query = $('input[type="text"]').val();
      $('img').insertBefore( $('input[type="text"]') ).css({'height':30+'px','width':100+'px','float':'left','margin-left':20+'px','margin-top':8+'px'});
      $('.logo').detach();
      $('#luck').detach();
      $('.query_input').css({'height': 45+'px','margin':-107,'width':100+'%','background-color':'#f1f1f1','border-bottom':1+'px solid #e5e5e5' });
      $('input[type="text"]').css({'height': 20+'px','width':300+'px','font-size':12+'px','float':'left','margin-left':5+'px','margin-top':12+'px'});
      $submit.css({'background-color':'#4285f4','height':27+'px','width':27+'px','background-image':'url(img/nav_logo242.png)'
      ,'background-position':'center','background-repeat':'no-repeat','float':'left','margin-left':-1+'px','margin-top':10+'px'})
                  .removeAttr('value');
      $.getJSON({
        url:
        'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='
        + query +'&callback=GoogleCallback&context=?',
        dataType: 'jsonp'
      });
    };
    $submit.on('click', search);
    $('input[type="text"]').keypress(function (e) {
      if (e.which == 13) {
        search();
        return false;
      }
      });

  });
