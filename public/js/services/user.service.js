(function(){
  angular.module('mymeanblog').factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    var baseURL = '/users'

    function signup(user){
      return $http.post('/signup', user)
                  .then(function(res){
                    console.log(res);
                  });
    }
    function login(user){
      return $http.post('/login')
                  .then(function(res){
                    console.log(res);
                  });
    }
    function getAll(){
      return $http.get(baseURL)
                  .then(function(res){
                    console.log(res);
                  })
    }
    function getOne(user){
      return $http.get(`${baseURL}/${user._id}`)
                  .then(function(res){
                    console.log(res);
                  });
    }
    function update(user){
      return $http.put(`${baseURL}/${user._id}`, user)
                  .then(function(res){
                    console.log(res);
                  });
    }
    function deleteUser(user){
      return $http.delete(`${baseURL}/${user._id}`)
                  .then(function(res){
                    console.log(res);
                  });
    }

    return {
      signup: signup,
      login: login,
      getAll: getAll,
      getOne: getOne,
      update: update,
      delete: deleteUser
    }

  }
})()
