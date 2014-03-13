var rsvp = angular.module('rsvp', []);

function uniqueIdGen() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

$('#rsvpForm').click(function(e){
      e.preventDefault();
});

rsvp.controller('rsvpCtrl', function($scope, $http) {
  $scope.rsvp=[];  
  //initilize rsvps
  //$http.get('/api/getRsvps').then(function (response) {
    //$scope.rsvps = response.data;
  //});

  //set some defaults
  $scope.transportations = ["driving", "bus", "plane", "walk","getting a ride","bike"];
  $scope.locations = ["Pittsburgh", "Boulder", "New York"];


  //functions
  //--------------------------------------------------------
  $scope.addRsvp = function() {
    var $uidd=uniqueIdGen();
      
    $scope.rsvp = {
      uid: $uidd,
      type:'rsvp', 
      name:$scope.rsvpName,
      email:$scope.rsvpEmail,
      description:$scope.rsvpDesc,
      location: $scope.rsvpLoc,
      transportation: $scope.rsvpTrans,
      capacity:$scope.rsvpTransRoom, 
      food:$scope.rsvpDiet,
      contribute:$scope.rsvpLoc,
      comment:$scope.rsvpComment,
      arrival:$scope.rsvpDate,
      edit:true
    };

    $http.post('/api/saveRsvp', $scope.rsvp);       
  
  }; //end addRsvp

  $scope.driving = function() {
    if($scope.rsvpTrans == 'driving'){
      return true;
    } else {
      return false;
    }
  
  }; //end driving





}); // end rsvpCtrl
