
ejs.namespace('ejs.service');

ejs.service.filterService = function($q,dataService){
	this.getData = function(sharedFactory){
		var deferred = $q.defer();
		dataService.getData().then(
			function(data) {
				deferred.resolve(data);
			}
		);
		return deferred.promise;
	}
}

ejs.service.dataService = function($http,$q,$filter,newProvider){
	this.getData = function(){
		var getSearch = newProvider.getSearch(),
			deferred = $q.defer(),
			article = getSearch.processor + getSearch.params + getSearch.article,
			specialty = getSearch.processor + getSearch.params + getSearch.specialty,
			drblog = getSearch.processor + getSearch.params + getSearch.drblog;
			
			var getObject = {
				'article' : $http.get(article),
				'specialty' : $http.get(specialty),
				'drblog' : $http.get(drblog)
			};
			
			
			$q.all(getObject).then(
				function (data) {
					var rtnObject = {
						'article' : '',
						'specialty' : '',
						'drblog' : ''
					};
					var articles = $filter('jsonparse')(data.article.data),
						specialty = $filter('jsonparse')(data.specialty.data),
						drblog = $filter('jsonparse')(data.drblog.data);

						rtnObject.article = JSON.parse(articles),
						rtnObject.specialty = JSON.parse(specialty),
						rtnObject.drblog = JSON.parse(drblog);
						
					deferred.resolve(rtnObject);
						
				},
				function(error) {
					deferred.resolve(error);
				}
			);
			
			return deferred.promise;
	}
}
ejs.module.webapp.service('filterService',['$q','dataService',ejs.service.filterService]);
ejs.module.webapp.service('dataService',['$http','$q','$filter','newProvider',ejs.service.dataService]);
