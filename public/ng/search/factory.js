ejs.namespace('ejs.factory');
ejs.factory.sharedFactory = function(newProvider){

	var getSearch = newProvider.getSearch();

	return {
		searchFilters : {
			startDate : getSearch.y2kdate,
			endDate : getSearch.today,
			minDate : '2000-06-29',
			maxDate : getSearch.today,
			searchword : 'fda'
		},
		searchResults : null
	}
}

ejs.module.webapp.factory('sharedFactory',['newProvider',ejs.factory.sharedFactory]);
