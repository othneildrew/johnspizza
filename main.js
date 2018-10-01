$(function() {

  // Add background color to nav when user scrolls more than 50px down
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#main-navbar').addClass('shadow-sm');
    }
    if ($(this).scrollTop() < 50) {
      $('#main-navbar').removeClass('shadow-sm');
    }
  });

  // Fetch and print all menu-items
  $.getJSON('assets/data/menu.json', function(data) {

    $('#menu-loader').fadeOut();
    $('.menu-grid-container').fadeIn();

    // Fetch pizza
    $.each(data.pizza, function(key, value) {
      $('.pizza-grid').append('<div class="col-12 col-md-6 col-lg-4 col-xl-3 px-2"><div class="card menu-card my-2 shadow-none"><img class="card-img-top" src="images/menu/pizza/'+ value.photo +'" alt="'+ value.name +' Pizza"><div class="card-body"><h5 class="card-title text-left font-weight-bold">'+ value.name +' Pizza</h5><p class="card-text text-left">'+ value.description +'</p><p class="text-success text-left"><em>'+ value.calorie_per_serving +' calories</em></p><p class="grid-price">$'+ value.price +'</p></div><!--<div class="card-footer"><a class="btn btn-block shadow-sm btn-lg btn-CTA" href="order.html?item=garden" role="button">Start With This!</a></div>--></div></div>');
    });

    // Fetch toppings
    $.each(data.toppings, function(key, value) {
      $('.toppings-grid').append('<div class="col-12 col-md-6 col-lg-4 col-xl-3 px-2"><div class="card menu-card my-2 shadow-none"><img class="card-img-top" src="images/menu/toppings/'+ value.photo +'" alt="'+ value.name +'"><div class="card-body"><h5 class="card-title text-left font-weight-bold">'+ value.name +' Pizza</h5><p class="text-success text-left"><em>'+ value.additional_calories +' calories</em></p><p class="grid-price">$'+ value.price +'</p></div></div></div>');
    });

    // Fetch drinks
    $.each(data.drinks, function(key, value) {
      $('.drinks-grid').append('<div class="col-12 col-md-6 col-lg-4 col-xl-3 px-2"><div class="card menu-card my-2 shadow-none"><img class="card-img-top" src="images/menu/drinks/'+ value.photo +'" alt="'+ value.name +' Pizza"><div class="card-body"><h5 class="card-title text-left font-weight-bold">'+ value.name +' Pizza</h5></p><p class="text-success text-left"><em>'+ value.servings.twenty_ounce.calorie +' calories</em></p><p class="grid-price">$'+ value.servings.twenty_ounce.price +'</p></div></div></div>');
    });

    // Fetch desserts
    $.each(data.desserts, function(key, value) {
      $('.dessert-grid').append('<div class="col-12 col-md-6 col-lg-4 col-xl-3 px-2"><div class="card menu-card my-2 shadow-none"><img class="card-img-top" src="images/menu/desserts/'+ value.photo +'" alt="'+ value.name +' Pizza"><div class="card-body"><h5 class="card-title text-left font-weight-bold">'+ value.name +' Pizza</h5><p class="card-text text-left">'+ value.description +'</p><p class="text-success text-left"><em>'+ value.calorie_per_serving +' calories</em></p><p class="grid-price">$'+ value.price +'</p></div></div></div>');
    });






  });





  /*$.getJSON('assets/data/menu.json', function(data) {
    var items = [];
    $.each(data, function(key, value) {
      items.push('<p id="' + key + '">' val '</p>');
    });

    $();
  }); */

});
