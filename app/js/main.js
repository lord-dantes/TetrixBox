$(document).ready(function() {

  (function ($) {
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').click(function (g) {
      var tab = $(this).closest('.tab'),
      index = $(this).closest('li').index();

      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

      g.preventDefault();
    } );
  })(jQuery);

  // about-page
  $('.about-us_info-boxing').click(function(event) {
    $('.about-us_info-box').toggleClass('about-us_info-box-active');
    $('.about-us_info-boxing svg').toggleClass('about-us_info-box_svg-active');
  });

  // gallery-page
  $(function(){
    var $gallery = $('.gallery a').simpleLightbox();

    $gallery.on('show.simplelightbox', function(){
      console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function(){
      console.log('Shown');
    })
    .on('close.simplelightbox', function(){
      console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function(){
      console.log('Closed');
    })
    .on('change.simplelightbox', function(){
      console.log('Requested for change');
    })
    .on('next.simplelightbox', function(){
      console.log('Requested for next');
    })
    .on('prev.simplelightbox', function(){
      console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function(){
      console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function(){
      console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function(){
      console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function(){
      console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function(){
      console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e){
      console.log('No image found, go to the next/prev');
      console.log(e);
    });
  });

  //  faq page
  $(function(){
  $("dd").slideUp(1);
  $("dt, dt .faq-toggle").click(function(){
    var $this = $(this), $parent = $this.parent(), outer = true;
    if ($this.is('.faq-toggle')) { $parent = $parent.parent(); outer = false; }
    if ($parent.hasClass('active')) {
      $parent.removeClass('active').find('dd').slideUp(500);
    } else {
      $parent.siblings().removeClass('active').find('dd').slideUp(500);
      $parent.addClass('active').find('dd').slideDown(500);
    }
    return outer;
  });
});

  // reviews-carousel
  $('.reviews-carousel').owlCarousel({
    items:1,
    nav: true,
    navText:['<img src="../img/arrow-left.svg">','<img src="../img/arrow-left.svg">'],
  });

  // mapsbox
  map_one_coordinate = {lat: 50.486251, lng: 30.505882};
  map_one_build = new google.maps.Map(document.getElementById('map-one_build'), {
    center: map_one_coordinate,
    zoom: 18,
  });
  var image = '../img/maps-and-flags.svg';
  var contentString = '<b>Проспект Степана Бандеры 20А</b>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  })
  marker_one = new google.maps.Marker({
    position: map_one_coordinate,
    map: map_one_build,
    icon: image,
  });
  infowindow.open(map_one_coordinate,marker_one);

  //
  map_two_coordinate = {lat: 50.486251, lng: 30.505882};
  map_two_build = new google.maps.Map(document.getElementById('map-two_build'), {
    center: map_two_coordinate,
    zoom: 18,
  });
  var contentString_two = '<b>Проспект Степана Бандеры 20А</b>';
  var infowindow_two = new google.maps.InfoWindow({
    content: contentString_two,
  })
  marker_two = new google.maps.Marker({
    position: map_two_coordinate,
    map: map_two_build,
    icon: image,
  });
  infowindow_two.open(map_two_coordinate,marker_two);
});