googleAuthApp.controller('AuthController', function (AuthFactory) {
  console.log('Made it to the AuthController');
  const _this = this;
  const authFactory = AuthFactory;
  _this.loggedIn = authFactory.checkLoggedIn(); // NOTE: only updated on page load
});
