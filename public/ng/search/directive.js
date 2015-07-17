ejs.namespace('ejs.directives');
ejs.directives.srchButton = function() {
  return {
    restrict: 'E',
    scope: false,
    template: '<button type="button" srch-click>search</button>'
  };
}
ejs.directives.srchClick = function(storageService,sharedFactory) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
		element.bind("mouseup", function(){
			storageService.getData(sharedFactory.searchFilters.searchword).then(function(data){
				sharedFactory.searchResults = data;
			});
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
			filterService.getData(sharedFactory.searchFilters.endDate).then(function(data){
				sharedFactory.searchResults = data;
			});
		});
    }
  };
}
ejs.module.webapp.directive('srchButton',[ejs.directives.srchButton]);
ejs.module.webapp.directive('srchClick',['storageService','sharedFactory',ejs.directives.srchClick]);
ejs.module.webapp.directive('filterButton',[ejs.directives.filterButton]);
ejs.module.webapp.directive('filterClick',['filterService','sharedFactory',ejs.directives.filterClick]);
