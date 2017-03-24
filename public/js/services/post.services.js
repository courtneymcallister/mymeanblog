(function(){
  angular.module('mymeanblog').factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var baseURL = '/posts';

    function getAll(){
      return $http.get(baseURL)
                  .then(function(res){
                    console.log(res);
                  });
    };

    function getOne(post){
      return $http.get(`${baseURL}/${post._id}`)
                  .then(function(res){
                    console.log(res);
                  });
    };

    function create(post){
      return $http.post(baseURL, post)
                  .then(function(res){
                    console.log(res);
                  });
    };

    function update(post){
      return $http.put(`${baseURL}/${post._id}`, post)
                  .then(function(res){
                    console.log(res);
                  });
    };

    function deletePost(post){
      return $http.delete(`${baseURL}/${post._id}`)
                  .then(function(res){
                    console.log(res);
                  });
    };

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      update: update,
      delete: deletePost
    }
  }
})()
