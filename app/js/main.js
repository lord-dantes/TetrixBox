$(document).ready(function() {

$('[data-href="nearest-box"]').click(function(event) {
  $('.modal-nearest_box').toggleClass('active-modal');
  $('.modal-background').toggleClass('active-background');
});
$('[data-href="request"]').click(function(event) {
  $('.modal-request').toggleClass('active-modal');
  $('.modal-background').toggleClass('active-background');
});

$('.modal-nearest_box .modal-closed').click(function(event) {
  $('.modal-nearest_box').toggleClass('active-modal');
  $('.modal-background').toggleClass('active-background');
});
$('.modal-request .modal-closed').click(function(event) {
  $('.modal-request').toggleClass('active-modal');
  $('.modal-background').toggleClass('active-background');
});
$('.calc-tabs-box_info-box-items-date li a').click(function(event) {
  $('.calc-tabs_box-info_link-date-active').removeClass('calc-tabs_box-info_link-date-active');
  $(this).toggleClass('calc-tabs_box-info_link-date-active');
});

// $('.calc-tabs_box-info_items-car li a').click(function(event) {
//   var a = $(this).find('svg > g > g');
//   var b = $(this).find('span');
//   a.css({
//     fill: '#3D7EBA',
//   });
//   b.css({
//     color: '#3D7EBA'
//   });
// });














//
 $('.header-toggle_icon').click(function(event) {
   $('.header-nav').toggleClass('header-nav_active');
 });

 (function ($) {

  $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
  $('.tab .tab_content > div:first-child').addClass('current-tab');
  $('.tab ul.tabs li a').click(function (g) {
    var tab = $(this).closest('.tab'),
    index = $(this).closest('li').index();

    tab.find('ul.tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');

    tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').removeClass('current-tab').slideUp();
    tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').addClass('current-tab').slideDown();

    g.preventDefault();
  } );

})(jQuery);

//

var price = $(".resize-price-one").text();

$('[data-discount]').click(function(event) {

  var data_discount = $(this).attr('data-discount');

  var ready_price = price - (price * data_discount / 100);

  $('.resize-price-one').html(ready_price.toFixed(0));
});

//

var price_two = $(".resize-price-two").text();

$('[data-discount]').click(function(event) {

  var data_discount = $(this).attr('data-discount');

  var ready_price_two = price_two - (price_two * data_discount / 100);

  $('.resize-price-two').html(ready_price_two.toFixed(0));
});

//

var price_three = $(".resize-price-three").text();

$('[data-discount]').click(function(event) {

  var data_discount = $(this).attr('data-discount');

  var ready_price_three = price_three - (price_three * data_discount / 100);

  $('.resize-price-three').html(ready_price_three.toFixed(0));
});

//

var price_four = $(".resize-price-four").text();

$('[data-discount]').click(function(event) {

  var data_discount = $(this).attr('data-discount');

  var ready_price_four = price_four - (price_four * data_discount / 100);

  $('.resize-price-four').html(ready_price_four.toFixed(0));
});

//

var price_five = $(".resize-price-five").text();

$('[data-discount]').click(function(event) {

  var data_discount = $(this).attr('data-discount');

  var ready_price_five = price_five - (price_five * data_discount / 100);

  $('.resize-price-five').html(ready_price_five.toFixed(0));
});

//
$('.car1').click(function(event) {
  $(".tabs li").removeClass('current');
  $(".tab1").parent('li').addClass('current');
  $('.tab_content').find('> div').hide('fast', function() { });
  $(".tab_content").find('> div:nth-child(1)').slideDown(700, function() {});
});
$('.car2').click(function(event) {
  $(".tabs li").removeClass('current');
  $(".tab2").parent('li').addClass('current');
  $('.tab_content').find('> div').hide('fast', function() { });
  $(".tab_content").find('> div:nth-child(2)').slideDown(700, function() {});
});
$('.car3').click(function(event) {
  $(".tabs li").removeClass('current');
  $(".tab3").parent('li').addClass('current');
  $('.tab_content').find('> div').hide('fast', function() { });
  $(".tab_content").find('> div:nth-child(3)').slideDown(700, function() {});
});
$('.car4').click(function(event) {
  $(".tabs li").removeClass('current');
  $(".tab4").parent('li').addClass('current');
  $('.tab_content').find('> div').hide('fast', function() { });
  $(".tab_content").find('> div:nth-child(4)').slideDown(700, function() {});
});
$('.car5').click(function(event) {
  $(".tabs li").removeClass('current');
  $(".tab5").parent('li').addClass('current');
  $('.tab_content').find('> div').hide('fast', function() { });
  $(".tab_content").find('> div:nth-child(5)').slideDown(700, function() {});
});

  //
  // about-page
  $('.about-us_info-boxing').click(function(event) {
    $('.about-us_info-box').toggleClass('about-us_info-box-active');
    $('.about-us_info-boxing svg').toggleClass('about-us_info-box_svg-active');
  });

  $(function(){
    $("dd").slideUp(1);
    $("dt, dt .faq-toggle").click(function(){
      var $this = $(this), $parent = $this.parent(), outer = true;
      if ($this.is('.faq-toggle')) { $parent = $parent.parent(); outer = false; }
      if ($parent.hasClass('active')) {
        $parent.removeClass('active').find('dd').slideUp(500);
        google.maps.event.trigger(map_one_build,'resize');
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
  var map_one_coordinate = {lat: 50.486251, lng: 30.505882};
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
  //
  map_3_coordinate = {lat: 50.486251, lng: 30.505882};
  map_3_build = new google.maps.Map(document.getElementById('map-3_build'), {
    center: map_3_coordinate,
    zoom: 18,
  });
  var contentString_3 = '<b>Проспект Степана Бандеры 20А</b>';
  var infowindow_3 = new google.maps.InfoWindow({
    content: contentString_3,
  })
  marker_3 = new google.maps.Marker({
    position: map_3_coordinate,
    map: map_3_build,
    icon: image,
  });
  infowindow_3.open(map_3_coordinate,marker_3);
  //
  map_4_coordinate = {lat: 50.486251, lng: 30.505882};
  map_4_build = new google.maps.Map(document.getElementById('map-4_build'), {
    center: map_4_coordinate,
    zoom: 18,
  });
  var contentString_4 = '<b>Проспект Степана Бандеры 20А</b>';
  var infowindow_4 = new google.maps.InfoWindow({
    content: contentString_4,
  })
  marker_4 = new google.maps.Marker({
    position: map_4_coordinate,
    map: map_4_build,
    icon: image,
  });
  infowindow_4.open(map_4_coordinate,marker_4);
});