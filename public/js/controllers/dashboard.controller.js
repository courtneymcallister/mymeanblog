(function(){
  angular.module('mymeanblog').controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope', PostService];

  function DashboardController($scope, PostService){
    $scope.delete = deletePost;
    $scope.edit = edit;
    $scope.posts = [
      {
        _id: 'ihfowier093u0294',
        title: 'some title',
        body: 'things and stuff and things and whatever and this should be more than one hundred characters but probably not',
        created: new Date(),
        updated: new Date()
    }
  ];


    function edit(post){
      console.log('moving to the edit page');
    }
    function deletePost(post){
      console.log('deleting post with id' + post._id);
    }


  };
})()
