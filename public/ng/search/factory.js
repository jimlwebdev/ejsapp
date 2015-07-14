ejs.namespace('ejs.factory');
ejs.factory.sharedFactory = function(newProvider){

	var getSearch = newProvider.getSearch();

	return {
		searchFilters : {
			startDate : getSearch.y2kdate,
			endDate : getSearch.today
		}
	}
}

ejs.module.webapp.factory('sharedFactory',['newProvider',ejs.factory.sharedFactory]);
