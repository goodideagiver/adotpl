let gdealay = 1.5;
var image = document.getElementsByClassName('bg-stars');
new simpleParallax(image, {
	delay: gdealay,
    scale: 1.3,
	transition: 'cubic-bezier(0,0,0,1)'
});

var mclouds = document.getElementsByClassName('main-clouds');
new simpleParallax(mclouds, {
	delay: gdealay,
    scale: 2.2,
	transition: 'cubic-bezier(0,0,0,1)',
});

var mbirds = document.getElementsByClassName('h-birds');
new simpleParallax(mbirds, {
	delay: gdealay,
    scale: 2.0,
	transition: 'cubic-bezier(0,0,0,1)',
});

var monecloud = document.getElementsByClassName('h-onecloud');
new simpleParallax(monecloud, {
	delay: gdealay,
    scale: 1.5,
	transition: 'cubic-bezier(0,0,0,1)',
});

var monecloud2 = document.getElementsByClassName('h-onecloud2');
new simpleParallax(monecloud2, {
	delay: gdealay,
    scale: 3.9,
    overflow: true,
	transition: 'cubic-bezier(0,0,0,1)',
});

var monecloud3 = document.getElementsByClassName('h-onecloud3');
new simpleParallax(monecloud3, {
	delay: gdealay,
    scale: 4.2,
    overflow: true,
	transition: 'cubic-bezier(0,0,0,1)',
});