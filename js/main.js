(function($) {

	"use strict";


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		$('.carousel-properties').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();


	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


})(jQuery);


//Progress

var i = 1;
$('.progress .circle').removeClass().addClass('circle');
$('.progress .bar').removeClass().addClass('bar');
setInterval(function() {
  $('.progress .circle:nth-of-type(' + i + ')').addClass('active');
  
  $('.progress .circle:nth-of-type(' + (i-1) + ')').removeClass('active').addClass('done');
  
  $('.progress .circle:nth-of-type(' + (i-1) + ') .label').html('&#10003;');
  
  $('.progress .bar:nth-of-type(' + (i-1) + ')').addClass('active');
  
  $('.progress .bar:nth-of-type(' + (i-2) + ')').removeClass('active').addClass('done');
  
  i++;
  
  if (i==0) {
    $('.progress .bar').removeClass().addClass('bar');
    $('.progress div.circle').removeClass().addClass('circle');
    i = 1;
  }
}, 1000);




function changeImg() {

	

	const images = [
		// 'url("images/build.jpg")',
		// 'url("images/build1.jpg")',
		// 'url("images/build2.jpg")',
		'url("images/gate.jpg")',
		 'url("images/lawma.jpg")',
		 'url("images/lawma2.jpg")',
		 'url("images/bg_1.jpg")',
		// 'url("images/login.jpg")',
		// 'url("images/lawma1.jpg")',
		


	];

	const section = document.querySelector('#sto');

	const bg = images[Math.floor(Math.random() * images.length)];

	section.style.backgroundImage = bg;
};

setInterval(changeImg, 3000);

var names = document.querySelectorAll('.up');
console.log(names);




// 	arr = [];

// 	// document.getElementById('mod').innerHTML = i.textContent;


// 	arr.push(names);
	
// 	// for(i of arr){
// 	// 	var index = 0;
// 	// 	console.log(i[index++].firstChild.data);
// 	// }
   

  
  


//   thirdPerson = [];
// // var firstName = ;
// // var lastName = ;


//   thirdPerson.push(arr[0][2].firstChild.data);
//   thirdPerson.push(arr[0][2].lastChild.data);


//   fourthPerson = [];
// // var firstName = ;
// // var lastName = ;


//   fourthPerson.push(arr[0][3].firstChild.data);
//   fourthPerson.push(arr[0][3].lastChild.data);

function  onTap(){

	// firstPerson = [];
	// // var firstName = ;
	// // var lastName = ;
	
	
	// firstPerson.push(arr[0][0].firstChild.data)
	//   firstPerson.push(arr[0][0].lastChild.data);
	//   console.log(firstPerson);
	//   console.log(firstPerson);

	  document.getElementById('mod').innerHTML = names[0].firstChild.data + names[0].lastChild.data;
	// console.log(firstPerson[0]);
	
	}
  
	


	
	
	function  onTapA(){
// 		secondPerson = [];
// // var firstName = ;
// // var lastName = ;


//   secondPerson.push(arr[0][1].firstChild.data);
//   secondPerson.push(arr[0][1].lastChild.data);



		document.getElementById('mod').innerHTML = names[1].firstChild.data + names[1].lastChild.data;
	//   console.log(secondPerson[0]);
	  
	  }


	function  onTapB(){
		
		document.getElementById('mod').innerHTML = names[2].firstChild.data + names[2].lastChild.data;
			//   console.log(secondPerson[0]);
			  
			  }

	function  onTapC(){
		
				document.getElementById('mod').innerHTML = names[3].firstChild.data + names[3].lastChild.data;
					//   console.log(secondPerson[0]);
					  
					  }
			
	
	



	  if(onTap()){
		document.getElementById('tap').onclick = onTap();
	} else {
		document.getElementById('tap1').onclick = onTapA();
	}


	//   } else if(onTapA()){
	// 	document.getElementById('tap1').onclick = onTapA();
	//   } else if(onTapB()){
	// 	document.getElementById('tap2').onclick = onTapB();
	//   }else if(onTapC()){
	// 	document.getElementById('tap3').onclick = onTapC();
	//   }
 
// function onTap(){
// 	firstPerson = document.getElementById('Tap');

// 	if (firstPerson){
// 		return  document.getElementById('mod').innerHTML = id.textContent;
// 	}

// }

// onTap();

// console.log(firstName, lastName);
console.log(arr);
// console.log(firstName, lastName);