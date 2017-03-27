(function(){
  angular.module('mymeanblog').controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [
      {
        _id: 'ihfowier093u0294',
        title: 'some title',
        body: 'things and stuff and things and whatever and this should be more than one hundred characters',
        created: new Date(),
        updated: new Date()
      },
      {
        _id: 'ihfowier093u0294',
        title: 'some title',
        body: 'things and stuff and things and whatever and this should be more than one hundred characters',
        created: new Date(),
        updated: new Date()
      },
    ];

    function edit(post){
      console.log('moving to the edit page');
    }
    function deletePost(post){
      console.log('deleting the post with _id of ' + post._id);
    }

  }
})()
