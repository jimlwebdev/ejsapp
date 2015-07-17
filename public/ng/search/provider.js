ejs.namespace('ejs.provider');
ejs.provider.newProvider = function(){
	var rightnow = new Date();
	var search = {
			processor : 'https://mb3_rpc.themedicalbag.com/elastica_search_processor.php?',
			params : 'mode=search&index=articles&from=0&limit=99&channel_id=&word=',
			article : '&type=article',
			specialty : '&type=specialty',
			drblog : '&type=dr_blog',
			dummy : 'dummy',
			y2kdate :  new Date('2000','00','01',0,0,0),
			today : new Date(rightnow.getFullYear(),rightnow.getMonth(),rightnow.getDate(),0,0,0)
	}

    this.setSearch = function(newVal) {
		search.dummy = newVal;
    };

    this.$get = function() {
		function getSearch() {
			return search;
		}
		return {
			getSearch: getSearch
		};
    }
}

ejs.module.webapp.provider('newProvider',[ejs.provider.newProvider]);
ejs.module.webapp.config(function(newProviderProvider) {
  newProviderProvider.setSearch('New value from config');
});
