$(function() {
	$('body').vegas({
		shuffle: true,
		slides: [
		{ src: '/images/home/pexels-photo-243599.jpeg' },
		{ src: '/images/home/pexels-photo-246125.jpeg' },
		{ src: '/images/home/pexels-photo-251866.jpeg' },
		{ src: '/images/home/pexels-photo.jpg' }
		],
		overlay: '/images/overlays/01.png',
		animation: 'kenburnsUpLeft',
		delay: '5000',
		animationDuration: '5000',
		loop: true
		
	});
});


