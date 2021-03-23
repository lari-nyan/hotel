// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	toolbar: {
		hideOnPageScroll: true,
	  },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Airbnb',
	dialog: {
		title: 'Airbnb',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/casa/',
    	url: 'casa.html',
    	name: 'casa',
  		},
		{
		path: '/habitacion/',
    	url: 'habitacion.html',
    	name: 'habitacion',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;


var notificationFull = myApp.notification.create({
        icon: '<i class="material-icons">shopping_cart</i>',
        title: 'eShop',
        subtitle: 'Add to Cart',
        text: 'Your product was added successfully',
        closeTimeout: 5000,
      });


$$(document).on('click','#add-cart', function () {
	console.log('add');
	notificationFull.open();
});


























 

