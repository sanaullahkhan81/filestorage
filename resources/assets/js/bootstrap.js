
window._ = require('lodash');

window.Vue = require('Vue');

require('vue-resource');

Vue.http.interceptors.push((request, next) =>{
    request.headers.set('X-CSRF-OPEN',Laravel.csrfoken);
    next();

});
