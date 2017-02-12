(function(){
  angular
    .module('dancersModule')
    .factory('DancerFactory', DancerFactory);

    DancerFactory.$inject = ['$http'];

    function DancerFactory($http) {
      return {
        dancers: {},
        get: function(){
          //connecting to a backend
          return $http.get(`https://localhost:3001/api/dancers`);
        }
      };
    }
})();
