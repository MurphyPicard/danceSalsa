(function(){
  angular
  .module('dancersModule')
  .controller('dancersCTRL', dancersCTRLfunction);

  angular
  .module('dancersModule')
  .controller('submitController', submitCTRLfunction);

  dancersCTRLfunction.$inject = ['$http', '$scope', 'DancerFactory'];
  submitCTRLfunction.$inject = ['$http', '$scope'];

  // function MoodCtrl($http, $scope, MoodFactory) {
  function submitCTRLfunction($http, $scope){
    $scope.formData = {email: ''};
    console.log('http');
    console.log($http);
    console.log('scope.formdata');
    console.log($scope.formData);
    $scope.text = 'Thank you for submitting.  Expect a friendly email soon.';
    $scope.submit = function() {
      if ($scope.text) {
        $http({
          method : 'POST',
          // action="http://localhost:3001/api/dancers" method="POST"
          url    : 'https://salsaclassesnycapi.herokuapp.com/api/dancers',
          data   : $scope.formData,
          // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          headers: {'Content-Type': 'application/json'}

        })
        .then(function successCallback(response){
          console.log('success:::');
          console.log(response);
        }, function errorCallback(response){
          console.log('error:::');
          console.log(response);
        }
      );//then
        // $scope.list.push(this.text);
        // $scope.text = '';
      }//if
    }//submit
    }//submitCTRLfunction

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
      };//getDancers

  }//dancersCTRL

})();//iife
