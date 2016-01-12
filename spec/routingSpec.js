'use strict';

describe('Routing', function () {
  var $route;
  beforeEach(module('foodbnb'));

  beforeEach(inject(function ($injector) {
    $route = $injector.get('$route');
  }));

  it('Should have /login route, template, and controller', function () {
    expect($route.routes['/login']).to.be.defined;
    expect($route.routes['/login'].controller).to.equal('authCtrl');
    expect($route.routes['/login'].templateUrl).to.equal('app/auth/login.html');
  });

  it('Should have /splash route, template, and controller', function () {
    expect($route.routes['/splash']).to.be.defined;
    expect($route.routes['/splash'].controller).to.equal('splashCtrl');
    expect($route.routes['/splash'].templateUrl).to.equal('app/splash/splash.html');
  });

  // it('Should have /links route, template, and controller', function () {
  //   expect($route.routes['/links']).to.be.defined;
  //   expect($route.routes['/links'].controller).to.equal('LinksController');
  //   expect($route.routes['/links'].templateUrl).to.equal('app/links/links.html');
  // });

  // it('Should have /shorten route, template, and controller', function () {
  //   expect($route.routes['/shorten']).to.be.defined;
  //   expect($route.routes['/shorten'].controller).to.equal('ShortenController');
  //   expect($route.routes['/shorten'].templateUrl).to.equal('app/shorten/shorten.html');
  // });
});