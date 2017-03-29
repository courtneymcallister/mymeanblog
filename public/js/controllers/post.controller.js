(function(){
  angular.module('mymeanblog').controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService', '$routeParams'];

  function PostController($scope, PostService, $routeParams){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: 'shiwuheiuw',
      title: 'greatest title ever',
      body: 'i dont remember the actual greatest title ever, this is just a tribute',
      created: new Date(),
      updated: new Date()
    };

    var id = $routeParams.postId;
    PostService.getOne(id)
               .then(function(){
                 console.log('success');
               })
               .catch(function(){
                 console.log('error');
               });

    console.log('$routeParams', $routeParams);

    function create(post){
      PostService.create(post);
    }

    function edit(post){
      console.log('editing the post');
    }
  };
})()
