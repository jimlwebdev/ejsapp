
nerdsaid.namespace('nerdsaid.module');
nerdsaid.module.webapp = angular.module("webapp", ['ngRoute']);

nerdsaid.module.webapp.config(function ($routeProvider) {
    $routeProvider
		.when('/',{templateUrl: '/templates/mobile.html'})
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
