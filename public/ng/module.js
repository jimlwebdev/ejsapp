
ejs.namespace('ejs.module');
ejs.module.webapp = angular.module("webapp", ['ngRoute']);

ejs.module.webapp.config(function ($routeProvider) {
    $routeProvider
		.when('/',{templateUrl: '/templates/home.html'})
  });
/*
   var app = angular.module("webapp", ['ngRoute']);
  var routes = {
	'root':  angularAMD.route(),
	'mobile':  angularAMD.route({templateUrl: '/templates/mobile.html', controller:'bodyTag'})
	}
  
  app.config(function ($routeProvider) {
    $routeProvider
		.when('/',routes.root)
		.when('/mobile',routes.mobile)
  });
  
  */
