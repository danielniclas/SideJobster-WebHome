home = {};

home.ar = 'ar';
home.ar_msg = "You are already registered.";
home.yras = 'yras';
home.yras_msg = "You have registered as seller.";
home.yrac = 'yrac';
home.yrac_msg = "You have registered as consumer.";
home.pvebl = 'pvebl';
home.pvebl_msg = "Please varify your email before login.";
home.epnm = 'epnm';
home.epnm_msg = "Invalid credentials. Please try again.";
getScope = null;
home.publishMyScope = function($scope, $http){
	getScope = function (){
		return {"scope":$scope, "http":$http};
	};
}

var app = angular.module('home', []);
app.controller('homeCtrl', function($scope, $http) {
	home.publishMyScope($scope, $http);
	
	$scope.getPageName = function(){
		return "home";
	}	
});


$(document).ready(function(e) {	
	$('.imgAni_w').hover( function(e){
		$(this).find('span').animate({ "margin-top": 'toggle', "opacity": 'toggle'}, "fast");
	}); 
});
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    
    if(home.getParameterByName('a')==home.ar){
    	alert(home.ar_msg);
    } else if(home.getParameterByName('a')==home.yras){
    	alert(home.yras_msg);
    } else if(home.getParameterByName('a')==home.yrac){
    	alert(home.yrac_msg);
    } else if(home.getParameterByName('a')==home.pvebl){
    	alert(home.pvebl_msg);
    } else if(home.getParameterByName('a')==home.epnm){
    	alert(home.epnm_msg);
    }
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.mainNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position() && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#mainNav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
$(function() {
	var goTop = $(".go_tO_top");
	$(window).scroll(function() {
	   var scroll = $(window).scrollTop();
		 if (scroll >= 200) {
			 goTop.show(100);
			 $(".mainHeader").addClass("scrolled");
		 } else {
			 goTop.hide(100);
			 $(".mainHeader").removeClass("scrolled");
		}
	});
});

home.getParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
