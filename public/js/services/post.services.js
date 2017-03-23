(function(){
  angular.module('mymeanblog').factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var baseURL = '/posts';
    var posts = [];

    function getAll(){
      return $http.get(baseURL).then(function(res){
        posts = res.data.posts;
      });
    };

    function getOne(id){
      return $http.get(`${baseURL}/${id}`).then(getAll);
    };

    function create(post){
      return $http.post(baseURL, post).then(getAll);
    };

    function update(id){
      return $http.put(`${baseURL}/${id}`).then(getAll);
    };

    function deletePost(id){
      return $http.delete(`${baseURL}/${id}`).then(getAll);
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
