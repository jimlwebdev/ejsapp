ejs.namespace('ejs.filter');
ejs.filter.alphabet = function(){
	return function(what){
		return 'abcdefghijklmnopqrstuvwxyz';
	}
}
ejs.filter.nuevo = function(){
	return function(what){
		return 'zyxwvutsrqponmlkjihgfedcba';
	}
}


ejs.module.webapp.filter('alphabet',[ejs.filter.alphabet]);
ejs.module.webapp.filter('nuevo',[ejs.filter.nuevo]);
