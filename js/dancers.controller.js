(function(){
  angular
  .module('dancersModule')
  .controller('dancersCTRL', dancersCTRLfunction)

  // FoodCtrl.$inject = ['$http', '$scope', 'FoodFactory'];

  function dancersCTRLfunction(){
    this.dancers = [
      {firstName: 'Abraham', lastName: 'Lincoln'},
      {firstName: 'George', lastName: 'Bush'}
    ];
  }


})();
