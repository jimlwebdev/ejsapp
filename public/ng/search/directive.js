ejs.namespace('ejs.directives');
ejs.directives.srchButton = function() {
  return {
    restrict: 'E',
    scope: false,
    template: '<button type="button" srch-click>search</button>'
  };
}
ejs.directives.srchClick = function(storageService) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
		element.bind("mouseup", function(){
			storageService.getData();
		});
    }
  };
}
ejs.directives.filterButton = function() {
  return {
    restrict: 'E',
    scope: false,
    template: '<button type="button" filter-click>filter</button>'
  };
}
ejs.directives.filterClick = function(filterService,sharedFactory) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
		element.bind("mouseup", function(){
			filterService.getData().then(function(data){
				sharedFactory.searchResults = data;
			});
		});
    }
  };
}
ejs.module.webapp.directive('srchButton',[ejs.directives.srchButton]);
ejs.module.webapp.directive('srchClick',['storageService',ejs.directives.srchClick]);
ejs.module.webapp.directive('filterButton',[ejs.directives.filterButton]);
ejs.module.webapp.directive('filterClick',['filterService','sharedFactory',ejs.directives.filterClick]);
