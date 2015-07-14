ejs.namespace('ejs.controller');
ejs.controller.StuffCtrl = function($scope,sharedFactory,dataService){
	  $scope.sortfilter = sharedFactory.sortfilter;

	  $scope.$watch('sortfilter',
		  function(newvalue,oldvalue){
			$scope.sortfilter = newvalue;
			$scope.myData = dataService.getData(newvalue);
		  },true);
};

ejs.controller.PageCtrl = function($scope){
	$scope.hideme = true;
};

ejs.controller.FilterCtrl = function($scope,sharedFactory){
	  $scope.sortfilter = sharedFactory.sortfilter;
	  $scope.options = sharedFactory.options;
};


ejs.module.webapp.controller('PageCtrl',['$scope',ejs.controller.PageCtrl]);
ejs.module.webapp.controller('StuffCtrl',['$scope','sharedFactory','dataService',ejs.controller.StuffCtrl]);
ejs.module.webapp.controller('FilterCtrl',['$scope','sharedFactory',ejs.controller.FilterCtrl]);
