var ejs = {};ejs.namespace = function() {var a,o;a=arguments[0].split('.');o=ejs;o[a[1]]=o[a[1]]||{};o=o[a[1]];return o;};
