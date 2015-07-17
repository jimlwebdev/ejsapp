ejs.namespace('ejs.controller');
ejs.controller.PageCtrl = function($window,$scope,sharedFactory){
	delete $window.sessionStorage.tmbsearch;
	$scope.$watch(function(){return sharedFactory.searchResults},function(newvalue,oldvalue){
			$scope.searchFilters = sharedFactory.searchFilters;
		if(newvalue !== oldvalue){
			$scope.searchResults = sharedFactory.searchResults;
		}
	},true);
}
ejs.module.webapp.controller('PageCtrl',['$window','$scope','sharedFactory',ejs.controller.PageCtrl]);
