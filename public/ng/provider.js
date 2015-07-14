ejs.namespace('ejs.provider');
ejs.provider.newProvider = function(){
  var thisIsPrivate = "Private";

    this.setPrivate = function(newVal) {
      thisIsPrivate = newVal;
    };

    this.$get = function() {
      function getPrivate() {
        return thisIsPrivate;
      }

      return {
        getPrivate: getPrivate
      };
    }

}
ejs.module.webapp.provider('newProvider',[ejs.provider.newProvider]);
ejs.module.webapp.config(function(newProviderProvider) {
  newProviderProvider.setPrivate('New value from config');
});
