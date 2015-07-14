
ejs.namespace('ejs.service');
ejs.service.dataService = function(){
	var myData = [
		{'what':[0,1,2,3,4,5]},
		{'what':[1,2,3,4,5,6]},
		{'what':[2,3,4,5,6,7]},
		{'what':[3,4,5,6,7,8]},
		{'what':[4,5,6,7,8,9,]}
	];
	this.getData = function(filter){
		var i = filter.index;
		return myData[i];
	}
}
ejs.module.webapp.service('newService',[ejs.service.newService]);
ejs.module.webapp.service('dataService',[ejs.service.dataService]);
