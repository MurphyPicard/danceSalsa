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
                    DancerFactory.dancers = res.data;
                      console.log(DancerFactory.dancers);
                      $scope.dancers = DancerFactory.dancers;
                      $scope.dancer = undefined;
                  })
                  .catch(function(err){
                    if(err)console.log(err);
                  });
      }//getDancers

  }//dancersCTRL

})();//iife
