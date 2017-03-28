(function(){
  angular.module('mymeanblog').controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'UserService'];

  function LoginController($scope, UserService){
    $scope.user = {};
    $scope.login = login;

    function login(user){
      UserService.login(user)
                 .then(function(res){
                   console.log(res);
                 })
                 .catch(function(err){
                   console.log(err);
                   $scope.user.password = '';
                 });
    }
  }
})()
