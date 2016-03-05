
angular.module('app', ['ui.router', 'ngMaterial']);

angular.module('app')
.controller('HomeController',
function ($scope, $http, HomeFactory, $mdToast) {
  var vm = this;
  $scope.contact_field = {};
  $scope.sent = false;

  $scope.sendMail = function(){
    HomeFactory.sendMail($scope.contact_field).then(function(res) {
      $scope.contact_field = null;
      $scope.sent = true;
    });
  };

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 706) {
      $('.sticky').addClass('fixed');
    }
    else {
      $('.sticky').removeClass('fixed');
    }
    if ($(window).scrollTop() >= 706) {
      $('.sticky').addClass('fade-in');
    }
    else {
      $('.sticky').removeClass('fade-in');
    }
    if ($(window).scrollTop() >= 706) {
      $('.hide').addClass('show');
    }
    else {
      $('.hide').removeClass('show');
    }
  });

  $(function() {                       //run when the DOM is ready
    $(".img_expand").click(function() {  //use a class, since your ID gets mangled
      $(this).addClass("active");      //add the class to the clicked element
    });
  });
  $(function() {
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });

});

angular.module('app')
.factory('HomeFactory',
function($http, $q) {
  var o = {};

  o.sendMail = function(msg){
    var q  = $q.defer();
    $http.post('/api/msg', msg).then(function(){
      q.resolve();
    });
    return q.promise;
  };

  return o;
});
