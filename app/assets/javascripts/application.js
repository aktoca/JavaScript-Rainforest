// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//
//
jQuery(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      console.log($('.pagination span.next').children().attr('href'));
      $.getScript($('.pagination span.next').children().attr('href'));
    }
  });
});

$(document).ready(function(){
//  $('#search-form').submit(function(event) {
//    event.preventDefault();
//    var search Value = $('#search').val();
//
//    $.getScript( '/products/?search=' + search Value)
//    .done(function(data){
//      console.log(data);
//      $('#products').html(data);
//    });
//  });
});
