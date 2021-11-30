
var image = document.getElementsByClassName('bg-stars');
new simpleParallax(image, {
	delay: 0.0,
    scale: 1.1,
	transition: 'cubic-bezier(0,0,0,1)'
});

var mclouds = document.getElementsByClassName('main-clouds');
new simpleParallax(mclouds, {
	delay: 0.0,
    scale: 2.2,
	transition: 'cubic-bezier(0,0,0,1)',
});

var mbirds = document.getElementsByClassName('h-birds');
new simpleParallax(mbirds, {
	delay: 0.0,
    scale: 2.0,
	transition: 'cubic-bezier(0,0,0,1)',
});