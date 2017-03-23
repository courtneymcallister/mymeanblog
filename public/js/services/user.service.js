(function(){
  angular.module('mymeanblog').factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    var baseURL = '/users'
    var users = [];

    function signup(user){
      return $http.post(baseURL, user).then(getAllUsers);
    }
    function login(user){
      return $http.post(baseURL, user).then(getAllUsers);
    }
    function getAllUsers(){
      return $http.get(baseURL).then(function(res){
        users = res.data.users;
      })
    }
    function getOneUser(user){
      return $http.get(`${baseURL}/${user}`).then(getAllUsers);
    }
    function updateUser(user){
      return $http.put(`${baseURL}/${user}`).then(getAllUsers);
    }
    function deleteUser(user){
      return $http.delete(`${baseURL}/${user}`).then(getAllUsers);
    }

    return {
      signup: signup,
      login: login,
      getAllUsers: getAllUsers,
      getOneUser: getOneUser,
      updateUser: updateUser,
      deleteUser: deleteUser
    }

  }
})()
