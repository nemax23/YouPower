angular.module('civis.youpower.main',[]).controller('AppCtrl', AppCtrl);

/* The controller that should always be on top of routing
hierarchy as it will be loaded with abstract main state.
Here we can do the general app stuff like getting the user's
details (since this is after the user logs in).
 ----------------------------------------------*/
function AppCtrl($scope,User) {

  User.get().then(function(data){
    $scope.currentUser = data;
  });
};
