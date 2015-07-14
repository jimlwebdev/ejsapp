ejs.namespace('ejs.filter');
ejs.filter.jsonparse = function(){
	return function(value){
		var linebr = value.replace(/(\r\n|\n|\r)/gm,""),
			firstparen = linebr.substr(1),
			lastparen = firstparen.substr(0,firstparen.length-1),
			rtnval = lastparen

		return rtnval;
	}
}

ejs.module.webapp.filter('jsonparse',[ejs.filter.jsonparse]);
