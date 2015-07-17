ejs.namespace('ejs.service');

ejs.service.filterService = function($q,$window){
	this.compareDate = '';
	this.data = '';
	this.getData = function(endDate){
		var deferred = $q.defer();
		this.compareDate = endDate;
		this.data = JSON.parse($window.sessionStorage.tmbsearch);
		angular.forEach(this.data,function(category,keyC){
			var count = 0;
			angular.forEach(category.articles,function(story,keyS){
				var storyDateYY = parseInt(story.date.substr(0,4),10),
					storyDateMM = parseInt(story.date.substr(5,2),10),
					storyDateDD = parseInt(story.date.substr(8,2),10),
					storyDateYYMMDD = new Date(storyDateYY,storyDateMM,storyDateDD,0,0,0);
					if(this.compareDate > storyDateYYMMDD){
						story.date = 'dontshow';
					} else {
						count++;
					}
				var stophere;
			},this);
			category.count = count;
		},this);
		deferred.resolve(this.data);
		return deferred.promise;
	}
}

ejs.service.dataService = function($http){
	this.doSearch = function(params){
		return $http.get(params);
	}
}

ejs.service.searchService = function($q,$filter,newProvider,dataService,sharedFactory){
	this.getData = function(searchword){
		var getSearch = newProvider.getSearch(),
			deferred = $q.defer(),
			searchfor = getSearch.processor + getSearch.params + searchword,
			article =  searchfor + getSearch.article,
			specialty = searchfor + getSearch.specialty,
			drblog = searchfor + getSearch.drblog;
			
			var getObject = {
				'article' : dataService.doSearch(article),
				'specialty' : dataService.doSearch(specialty),
				'drblog' : dataService.doSearch(drblog)
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

ejs.service.storageService = function($q,$window,searchService){
	this.getData = function(searchword){
		var deferred = $q.defer();
		searchService.getData(searchword).then(
			function(data) {
				$window.sessionStorage.tmbsearch = JSON.stringify(data);
				deferred.resolve(data);
			}
		);
		return deferred.promise;
	}
}


ejs.module.webapp.service('storageService',['$q', '$window', 'searchService', ejs.service.storageService]);
ejs.module.webapp.service('filterService',['$q','$window',ejs.service.filterService]);
ejs.module.webapp.service('dataService',['$http',ejs.service.dataService]);
ejs.module.webapp.service('searchService',['$q', '$filter', 'newProvider', 'dataService', ejs.service.searchService]);
