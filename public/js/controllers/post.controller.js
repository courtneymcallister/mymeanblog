(function(){
  angular.module('mymeanblog').controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: 'shiwuheiuw',
      title: 'greatest title ever',
      body: 'i dont remember the actual greatest title ever, this is just a tribute',
      created: new Date(),
      updated: new Date()
    };

    function create(post){
      PostService.create(post);
    }

    function edit(post){
      console.log('editing the post');
    }
  };
})()
