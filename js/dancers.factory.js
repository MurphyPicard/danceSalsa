(function(){
  angular
    .module('foodByMood')
    .factory('DancerFactory', DancerFactory)


    DancerFactory.$inject = ['$http'];


    function DancerFactory($http) {
      return {
        dancers: {},
        get: function(){
          //connecting to a backend
          return $http.get(`https://localhost:3001`);
        }
      };
    }

})();
