(function(){
  angular
  .module('dancersModule')
  .controller('dancersCTRL', dancersCTRLfunction)

  dancersCTRLfunction.$inject = ['$http', '$scope', 'DancerFactory'];

  // function MoodCtrl($http, $scope, MoodFactory) {
  function dancersCTRLfunction($http, $scope, DancerFactory){
    this.dancers = [
      {firstName: 'Abraham', lastName: 'Lincoln'},
      {firstName: 'George', lastName: 'Bush'}
    ];

    $scope.getDancers = function(){
      DancerFactory.get()
      .then(function(res){

      }

    }//get

  }//dancersCTRL


})();
