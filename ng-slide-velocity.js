/**
 * @license AngularJS v1.2.16
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

  //We are setting the animation as the device with divided by 2
  var animDuration = $(window).width() / 2,
      easingType = 'ease';

  angular.module('ngSlideVelocity',[])
  .animation('.slide-velocity-previous', function() {return {
    enter: function(element,done){
      $(element).css({
        right:'',
        left:'-100%'
      }).velocity({left:'0'},{
        easing:easingType,
        duration:animDuration,
        complete:function(){
          done();
        }
      });
    },
    leave: function(element,done){
      $(element).css({
        right:'',
        left:'0'
      }).velocity({left:'100%'},{
        easing:easingType,
        duration:animDuration,
        complete:function(){
          done();
        }
      });
    }};
  })
  .animation('.slide-velocity-next', function() {return {
    enter: function(element,done){
      $(element).css({
        left:'',
        right:'-100%'
      }).velocity({right:'0'},{
        easing:easingType,
        duration:animDuration,
        complete:function(){
          done();
        }
      });
    },
    leave: function(element,done){
      $(element).css({
        left:'',
        right:'0'
      }).velocity({right:'100%'},{
        easing:easingType,
        duration:animDuration,
        complete:function(){
          done();
        }
      });
    }};});
})(window, window.angular);
