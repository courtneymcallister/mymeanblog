(function(){
  angular.module('mymeanblog').controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService', 'UserService'];

  function PostController($scope, PostService, UserService){
    $scope.posts = [];
    $scope.getAll = getAll;
    $scope.getOne = getOne;
    $scope.create = create;
    $scope.update = update;
    $scope.deletePost = deletePost;
    $scope.signup = signup;
    $scope.login = login;
    $scope.getAllUsers = getAllUsers;
    $scope.getOneUser = getOneUser;
    $scope.updateUser = updateUser;
    $scope.deleteUser = deleteUser;

    //post.service functions
    function getAll(){
      PostService.getAll();
    };
    function getOne(id){
      PostService.getOne(id);
    };
    function create(post){
      PostService.create(post);
    };
    function update(id){
      PostService.update(id);
    };
    function deletePost(id){
      PostService.delete(id);
    };

    //user.service functions
    function signup(user){
      UserService.signup(user);
    }
    function login(user){
      UserService.login(user);
    }
    function getAllUsers(){
      UserService.getAllUsers();
    }
    function getOneUser(user){
      UserService.getOneUser(user);
    }
    function updateUser(user){
      UserService.updateUser(user);
    }
    function updateUser(user){
      UserService.updateUser(user);
    }
    function deleteUser(user){
      UserService.deleteUser(user);
    }

  }

})()
