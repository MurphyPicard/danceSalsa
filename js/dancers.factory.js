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
          return $http.get(`http://salsaclassesnycapi.herokuapp.com/api/dancers`);
        }
      };
    }
})();
