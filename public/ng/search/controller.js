ejs.namespace('ejs.controller');
ejs.controller.PageCtrl = function($scope,filterService,sharedFactory){
	filterService.getData(sharedFactory).then(
		function(data) {
			$scope.article = data.article;
			$scope.specialty = data.specialty;
			$scope.drblog = data.drblog;
		}
	);
}
ejs.module.webapp.controller('PageCtrl',['$scope', 'filterService', 'sharedFactory',ejs.controller.PageCtrl]);
