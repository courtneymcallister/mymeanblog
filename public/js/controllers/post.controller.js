(function(){
  angular.module('mymeanblog').controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    $scope.edit = edit;
    $scope.create = create;
    $scope.mockPost = {
      _id: 'shiwuheiuw',
      title: 'greatest title ever',
      body: 'i dont remember the actual greatest title ever, this is just a tribute',
      created: new Date(),
      updated: new Date()
    };

    function edit(post){
      console.log('editing the post');
    };

    function create(post){
      PostService.create(post);
    };

  }
})()
