
ejs.namespace('nerdsaid.module');
ejs.module.webapp = angular.module("searchapp", ['ngRoute']);

ejs.module.webapp.config(function ($routeProvider) {
    $routeProvider
		.when('/',{templateUrl: '/templates/search.html'})
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
