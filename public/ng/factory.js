ejs.namespace('ejs.factory');
ejs.factory.sharedFactory = function(){
  return {
	  sortfilter:{
		  index:0
	  },
	  options:[0,1,2,3,4]
  };
}

ejs.module.webapp.factory('sharedFactory',[ejs.factory.sharedFactory]);
