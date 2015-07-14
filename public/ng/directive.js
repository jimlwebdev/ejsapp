ejs.namespace('ejs.directives');
ejs.directives.paraTag = function() {
	return {
		restrict: 'E',
		template:'<p ng-repeat="data in myData.what">{{data}}</p>',
		replace:true
	};
}
ejs.directives.spanTag = function() {
	return {
		restrict: 'E',
		template:'<span ng-repeat="data in myData.what">{{data}}</span>',
		replace:true
	};
}
ejs.directives.ulTag = function() {
	return {
		restrict: 'E',
		template:'<ul><li ng-repeat="data in myData.what">{{data}}</li></ul>',
		replace:true
	};
}
ejs.module.webapp.directive('spanTag',[ejs.directives.spanTag]);
ejs.module.webapp.directive('paraTag',[ejs.directives.paraTag]);
ejs.module.webapp.directive('ulTag',[ejs.directives.ulTag]);
